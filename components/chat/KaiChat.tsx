"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import styles from "./KaiChat.module.css";

/** נקודת הקצה של סוכן השירות ב-n8n (Chat Trigger במצב webhook ציבורי). */
const CHAT_URL =
  process.env.NEXT_PUBLIC_KAI_CHAT_URL ??
  "https://yuliafroiman.app.n8n.cloud/webhook/e7e46c7f-9c7b-455a-b025-edbac31fed0e/chat";

const SESSION_KEY = "kai_chat_session";
const MAX_FILE_MB = 8;

const GREETING =
  "היי, אני קאי 👋 אני כאן כדי לעזור לכם לבחור קולקציה, להבין אילו תמונות כדאי להעלות, או פשוט לספר על KAI. מה מביא אתכם היום?";

type Role = "user" | "kai";
interface Msg {
  role: Role;
  text: string;
  /** תצוגה מקומית של תמונה שהמשתמש צירף */
  imageUrl?: string;
}

function sessionId(): string {
  if (typeof window === "undefined") return "server";
  try {
    let id = window.localStorage.getItem(SESSION_KEY);
    if (!id) {
      id = crypto.randomUUID();
      window.localStorage.setItem(SESSION_KEY, id);
    }
    return id;
  } catch {
    return crypto.randomUUID();
  }
}

/** מחלץ טקסט תשובה ממגוון מבני-תגובה אפשריים של n8n. */
function extractReply(data: unknown): string {
  if (typeof data === "string") return data.trim();
  if (Array.isArray(data)) {
    for (const item of data) {
      const r = extractReply(item);
      if (r) return r;
    }
    return "";
  }
  if (data && typeof data === "object") {
    const o = data as Record<string, unknown>;
    for (const key of ["output", "text", "reply", "message", "answer", "content", "response"]) {
      const v = o[key];
      if (typeof v === "string" && v.trim()) return v.trim();
    }
    if (o.json) return extractReply(o.json);
    if (o.data) return extractReply(o.data);
  }
  return "";
}

/** ממיר טקסט של הסוכן (שעשוי להכיל ![alt](url) של תמונה) לרכיבי React. */
function renderText(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /!\[([^\]]*)\]\((https?:\/\/[^\s)]+)\)/g;
  let last = 0;
  let key = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(<span key={key++}>{text.slice(last, m.index)}</span>);
    out.push(
      // eslint-disable-next-line @next/next/no-img-element
      <img key={key++} src={m[2]} alt={m[1] || "תצוגה מקדימה"} className={styles.msgImg} />,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(<span key={key++}>{text.slice(last)}</span>);
  return out;
}

export function KaiChat() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ role: "kai", text: GREETING }]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const send = useCallback(
    async (raw: string, attached: File | null) => {
      const text = raw.trim();
      if ((!text && !attached) || busy) return;

      const localUrl = attached ? URL.createObjectURL(attached) : undefined;
      setMsgs((m) => [
        ...m,
        { role: "user", text: text || (attached ? "צירפתי תמונה" : ""), imageUrl: localUrl },
      ]);
      setInput("");
      setFile(null);
      setBusy(true);

      try {
        let res: Response;
        if (attached) {
          const fd = new FormData();
          fd.append("action", "sendMessage");
          fd.append("sessionId", sessionId());
          fd.append("chatInput", text || "צירפתי תמונה שלי, אשמח לראות הדמיה של קלף");
          fd.append("files", attached);
          res = await fetch(CHAT_URL, { method: "POST", body: fd });
        } else {
          res = await fetch(CHAT_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ action: "sendMessage", sessionId: sessionId(), chatInput: text }),
          });
        }
        const raw: unknown = await res
          .clone()
          .json()
          .catch(async () => (await res.text().catch(() => "")));
        const reply = extractReply(raw) || "מצטערת, משהו השתבש כרגע. אפשר לנסות שוב עוד רגע.";
        setMsgs((m) => [...m, { role: "kai", text: reply }]);
      } catch {
        setMsgs((m) => [
          ...m,
          { role: "kai", text: "לא הצלחתי להתחבר כרגע. נסו שוב בעוד רגע, או כתבו לנו ל-hello@kaieditions.com." },
        ]);
      } finally {
        setBusy(false);
      }
    },
    [busy],
  );

  /* פתיחה חיצונית מרכיבים אחרים (למשל תיבת השאלה ב-FAQ): window event "kai:open" */
  useEffect(() => {
    function onOpen(e: Event) {
      setOpen(true);
      const q = (e as CustomEvent<string>).detail;
      if (typeof q === "string" && q.trim()) void send(q, null);
    }
    window.addEventListener("kai:open", onOpen as EventListener);
    return () => window.removeEventListener("kai:open", onOpen as EventListener);
  }, [send]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, busy]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function onPick(e: ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    e.target.value = "";
    if (!f) return;
    if (!f.type.startsWith("image/")) return;
    if (f.size > MAX_FILE_MB * 1024 * 1024) {
      setMsgs((m) => [...m, { role: "kai", text: `התמונה גדולה מדי (עד ${MAX_FILE_MB}MB). נסו תמונה קטנה יותר.` }]);
      return;
    }
    setFile(f);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void send(input, file);
  }

  return (
    <>
      <button
        type="button"
        className={styles.launcher}
        aria-label={open ? "סגירת הצ'אט" : "פתיחת צ'אט עם KAI"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "✕" : "דברו עם KAI"}
      </button>

      <div className={`${styles.panel} ${open ? styles.panelOpen : ""}`} role="dialog" aria-label="צ'אט עם KAI" hidden={!open}>
        <header className={styles.head}>
          <span className={styles.dot} aria-hidden="true" />
          <div>
            <p className={styles.headName}>KAI</p>
            <p className={styles.headSub}>שירות אישי · בדרך כלל עונים תוך רגע</p>
          </div>
          <button type="button" className={styles.close} aria-label="סגירה" onClick={() => setOpen(false)}>
            ✕
          </button>
        </header>

        <div className={styles.stream} ref={scrollRef}>
          {msgs.map((m, i) => (
            <div key={i} className={`${styles.msg} ${m.role === "user" ? styles.msgUser : styles.msgKai}`}>
              {m.imageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={m.imageUrl} alt="התמונה שצירפתי" className={styles.msgImg} />
              )}
              {m.text && renderText(m.text)}
            </div>
          ))}
          {busy && (
            <div className={`${styles.msg} ${styles.msgKai} ${styles.typing}`} aria-live="polite">
              <span />
              <span />
              <span />
            </div>
          )}
        </div>

        {file && (
          <div className={styles.attach}>
            <span className={styles.attachName}>📎 {file.name}</span>
            <button type="button" className={styles.attachX} aria-label="הסרת התמונה" onClick={() => setFile(null)}>
              ✕
            </button>
          </div>
        )}

        <form className={styles.inputRow} onSubmit={onSubmit}>
          <input ref={fileRef} type="file" accept="image/*" hidden onChange={onPick} />
          <button
            type="button"
            className={styles.clip}
            aria-label="צירוף תמונה"
            onClick={() => fileRef.current?.click()}
            disabled={busy}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5 12.5 20a5 5 0 0 1-7-7l9-9a3.5 3.5 0 0 1 5 5l-9 9a2 2 0 0 1-3-3l8-8" />
            </svg>
          </button>
          <input
            ref={inputRef}
            className={styles.input}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="כתבו הודעה ל-KAI..."
            aria-label="הודעה ל-KAI"
            disabled={busy}
          />
          <button type="submit" className={styles.send} aria-label="שליחה" disabled={busy || (!input.trim() && !file)}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 4 3 11l6 2.5L11 20l3.5-6L20 4Z" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
