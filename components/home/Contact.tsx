"use client";

import { useState, type ChangeEvent, type CSSProperties, type FormEvent } from "react";
import { cld, IMG } from "@/lib/cloudinary";
import { LINES, LINE_ORDER, type LineSlug } from "@/lib/lines";
import { Pin } from "@/components/ui/Pin";
import { StarDivider } from "@/components/ui/StarDivider";
import styles from "./Contact.module.css";

const SUBJECTS = [
  "שאלה כללית",
  "שאלה על הזמנה קיימת",
  "התאמה אישית או בקשה מיוחדת",
  "שיתופי פעולה ומדיה",
  "אחר",
];

const WEBHOOK = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL;

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [interest, setInterest] = useState<LineSlug | "unsure" | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: keyof typeof form) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
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
        // אין webhook מוגדר — נפתח מייל עם הפרטים
        const body = `שם: ${form.name}\nמייל: ${form.email}\nטלפון: ${form.phone}\nנושא: ${form.subject}\nקולקציה: ${interest ?? "-"}\n\n${form.message}`;
        window.location.href = `mailto:hello@kaieditions.com?subject=${encodeURIComponent("פנייה מהאתר — " + (form.subject || "כללי"))}&body=${encodeURIComponent(body)}`;
      }
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

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

          {status === "sent" ? (
            <div className={styles.done}>
              <Pin className={styles.doneStar} />
              <p className={styles.doneTitle}>תודה שפניתם אלינו</p>
              <p className={styles.doneText}>קיבלנו את ההודעה ונחזור אליכם בהקדם.</p>
            </div>
          ) : (
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

              <div className={styles.row}>
                <label className={styles.field}>
                  <span className={styles.label}>טלפון נייד *</span>
                  <input type="tel" required value={form.phone} onChange={set("phone")} autoComplete="tel" dir="ltr" />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>נושא הפנייה *</span>
                  <select required value={form.subject} onChange={set("subject")}>
                    <option value="" disabled>בחרו נושא</option>
                    {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </label>
              </div>

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
          )}
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
    </section>
  );
}
