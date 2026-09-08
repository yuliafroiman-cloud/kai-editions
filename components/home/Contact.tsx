"use client";

import { useEffect, useState, type ChangeEvent, type CSSProperties, type FormEvent } from "react";
import { cld, IMG } from "@/lib/cloudinary";
import { LINES, LINE_ORDER, type LineSlug } from "@/lib/lines";
import { Pin } from "@/components/ui/Pin";
import { StarDivider } from "@/components/ui/StarDivider";
import styles from "./Contact.module.css";

const WEBHOOK = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL;

/** פותח את הצ'אט עם קאי (הווידג'ט מאזין ל-event הזה) */
function openKai(message?: string) {
  window.dispatchEvent(new CustomEvent("kai:open", { detail: message ?? "" }));
}

const EMPTY = { name: "", email: "", phone: "", message: "" };

export function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [interest, setInterest] = useState<LineSlug | "unsure" | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: keyof typeof form) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const payload = { ...form, interest, source: "homepage-contact" };
    try {
      if (WEBHOOK) {
        const res = await fetch(WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(String(res.status));
      } else {
        const body = `שם: ${form.name}\nמייל: ${form.email}\nטלפון: ${form.phone}\nקולקציה: ${interest ?? "-"}\n\n${form.message}`;
        window.location.href = `mailto:hello@kaieditions.com?subject=${encodeURIComponent("פנייה מהאתר")}&body=${encodeURIComponent(body)}`;
      }
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const closePopup = () => {
    setStatus("idle");
    setForm(EMPTY);
    setInterest(null);
  };

  /** הודעת פתיחה לקאי עם ההקשר מהטופס — כדי שלא ישאל שוב על שם/קולקציה */
  const kaiOpener = (() => {
    const lineName = interest && interest !== "unsure" ? LINES[interest].name : null;
    const bits = ["היי קאי! הרגע השארתי פרטים בטופס באתר ואשמח להמשיך כאן."];
    if (form.name.trim()) bits.push(`קוראים לי ${form.name.trim()}.`);
    if (lineName) bits.push(`הקולקציה שסימנתי היא ${lineName}.`);
    if (form.message.trim()) bits.push(`מה שכתבתי בטופס: "${form.message.trim()}"`);
    return bits.join(" ");
  })();

  return (
    <section className={styles.section} id="contact">
      <div className="wrap">
        <div className={styles.header}>
          <StarDivider symmetric className={styles.divider} />
          <h2 className={styles.heading}>נשמח לשמוע מכם</h2>
          <p className={styles.sub}>
            יש לכם שאלה, התלבטות או בקשה מיוחדת?
            <br />
            אנחנו כאן כדי לעזור, בכל שלב.
          </p>
        </div>

        <div className={styles.top}>
          <div className={styles.formCol}>
            <form className={styles.form} onSubmit={submit}>
              <div className={styles.row}>
                <label className={styles.field}>
                  <span className={styles.label}>שם מלא *</span>
                  <input required value={form.name} onChange={set("name")} autoComplete="name" />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>כתובת מייל *</span>
                  <input type="email" required value={form.email} onChange={set("email")} autoComplete="email" dir="ltr" />
                </label>
              </div>

              <label className={`${styles.field} ${styles.solo}`}>
                <span className={styles.label}>טלפון נייד *</span>
                <input type="tel" required value={form.phone} onChange={set("phone")} autoComplete="tel" dir="ltr" />
              </label>

              <fieldset className={styles.interest}>
                <legend className={styles.label}>קולקציה שמעניינת אתכם</legend>
                <div className={styles.chips}>
                  {LINE_ORDER.map((slug) => {
                    const l = LINES[slug];
                    const on = interest === slug;
                    return (
                      <button
                        type="button"
                        key={slug}
                        className={`${styles.chip} ${on ? styles.chipOn : ""}`}
                        style={on ? ({ "--line": l.color, "--line-on": l.onColor } as CSSProperties) : undefined}
                        onClick={() => setInterest(on ? null : slug)}
                      >
                        {l.name}
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    className={`${styles.chip} ${interest === "unsure" ? styles.chipOn : ""}`}
                    onClick={() => setInterest(interest === "unsure" ? null : "unsure")}
                  >
                    עדיין לא בטוח/ה
                  </button>
                </div>
              </fieldset>

              <label className={`${styles.field} ${styles.msgField}`}>
                <span className={styles.label}>הודעה *</span>
                <textarea required maxLength={500} rows={3} value={form.message} onChange={set("message")} />
                <span className={styles.count}>{form.message.length}/500</span>
              </label>

              <button type="submit" className={styles.submit} disabled={status === "sending"}>
                <Pin className={styles.submitStar} />
                {status === "sending" ? "שולח…" : "שליחה"}
              </button>

              {status === "error" && (
                <p className={styles.err}>
                  משהו השתבש. אפשר לכתוב לנו ישירות ל־<a href="mailto:hello@kaieditions.com">hello@kaieditions.com</a>
                </p>
              )}
              <p className={styles.consent}>
                בשליחת הטופס, אני מאשר/ת את שמירת הפרטים שלי לצורך מענה לפנייה.
              </p>
            </form>
          </div>

          <div className={styles.photos}>
            <figure className={styles.photo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cld(IMG.lineLifestyle("couple"), "c_fill,ar_4:3,g_auto,w_560")} alt="זוג עם קולקציית KAI" loading="lazy" />
            </figure>
            <figure className={styles.photo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cld(IMG.lineLifestyle("family"), "c_fill,ar_4:3,g_auto,w_560")} alt="משפחה עם קולקציית KAI" loading="lazy" />
            </figure>
          </div>
        </div>
      </div>

      {status === "sent" && (
        <SentPopup
          onClose={closePopup}
          onTalkToKai={() => {
            openKai(kaiOpener);
            closePopup();
          }}
        />
      )}
    </section>
  );
}

function SentPopup({ onClose, onTalkToKai }: { onClose: () => void; onTalkToKai: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="kai-sent-title" onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.modalX} aria-label="סגירה" onClick={onClose}>✕</button>
        <Pin className={styles.modalStar} />
        <p id="kai-sent-title" className={styles.modalTitle}>הפרטים נשלחו ✦</p>
        <p className={styles.modalText}>
          קיבלנו את הפנייה שלכם והיא כבר אצל הצוות. נחזור אליכם בהקדם — בדרך כלל תוך יום עסקים.
        </p>
        <div className={styles.modalActions}>
          <button type="button" className={styles.modalPrimary} onClick={onTalkToKai}>
            בינתיים — דברו עם קאי
          </button>
          <button type="button" className={styles.modalGhost} onClick={onClose}>
            סגירה
          </button>
        </div>
      </div>
    </div>
  );
}
