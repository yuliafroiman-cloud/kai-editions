"use client";

import { useState, type ReactNode } from "react";
import { StarDivider } from "@/components/ui/StarDivider";
import styles from "./Faq.module.css";

/** קופי מ-website-copy.md §8 — לא לשנות ניסוח */
const ITEMS: { q: string; a: ReactNode }[] = [
  {
    q: "האם אוכל לראות את העיצוב לפני ההזמנה?",
    a: (
      <>
        תוכלו לראות <strong>את הקונספט</strong> לאחר שתעלו מספר תמונות ראשונות ותענו על
        כמה שאלות קצרות. כדי לשמור על אפקט ההפתעה, לא תראו מראש את העיצוב המלא של כל
        הקלפים. את הקולקציה השלמה תגלו רק כשהקופסה תגיע אליכם.
      </>
    ),
  },
  {
    q: "כמה זמן לוקח עד שהקופסה מגיעה?",
    a: (
      <>
        כל קופסת KAI מיוצרת במיוחד עבורכם. זמן הייצור והמשלוח הוא בין{" "}
        <strong>14 ל-21 ימי עסקים</strong>. אנחנו משקיעים את הזמן כדי שכל פרט יהיה מדויק,
        אישי ואיכותי. <strong>כי יש הפתעות ששווה לחכות להן.</strong>
      </>
    ),
  },
  {
    q: "האם התמונות עוברות עריכה באמצעות AI?",
    a: (
      <>
        לא. התמונות נשארות בדיוק כפי שהעליתם אותן. אנחנו לא משנים אנשים, הבעות או רגעים.
        הזיכרונות שלכם נשארים אמיתיים, בדיוק כמו שהם.
      </>
    ),
  },
  {
    q: "כמה תמונות צריך להעלות?",
    a: (
      <>
        מספר התמונות תלוי בחבילה שתבחרו. אפשר להתחיל עם מספר קטן של תמונות כדי לקבל את
        הקונספט הראשוני, ולאחר מכן להשלים את שאר התמונות לפי כמות הקלפים בחבילה. המערכת
        תנחה אתכם לאורך התהליך.
      </>
    ),
  },
  {
    q: "האם לוקח הרבה זמן להעלות את התמונות ולהשלים את ההזמנה?",
    a: (
      <>
        ממש לא. יצרנו את התהליך כך שתוך כמה דקות תוכלו לבחור קולקציה, להעלות תמונות, לענות
        על כמה שאלות קצרות ולהתחיל ליצור את חוויית KAI שלכם. המערכת גם יכולה לעזור לכם
        בניסוח הברכה האישית.
      </>
    ),
  },
  {
    q: "מה מבדיל את KAI מאלבום תמונות רגיל?",
    a: (
      <>
        אלבום רגיל מציג תמונות. KAI הופכת את התמונות לחוויית גילוי. הקלפים מגיעים בחפיסות
        סגורות ובסדר אקראי, עם קלפי Silver ו-Gold מיוחדים, ברכה אישית, אלבום ואלמנטים של
        הפתעה ואיסוף. והכי חשוב — פותחים יחד ומגלים כל זיכרון מחדש.
      </>
    ),
  },
];

const SHORTCUTS = ["משלוחים", "התמונות שלי", "בחירת חבילה"];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const [query, setQuery] = useState("");

  return (
    <section className={styles.section} id="faq">
      <div className="wrap">
        <div className={styles.header}>
          <StarDivider symmetric className={styles.divider} />
          <h2 className={styles.heading}>כל מה שכדאי לדעת לפני שמתחילים</h2>
          <p className={styles.sub}>
            6 תשובות קצרות לשאלות שאנחנו שומעים הכי הרבה.
          </p>
        </div>

        <ul className={styles.grid}>
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            const num = String(i + 1).padStart(2, "0");
            return (
              <li key={item.q} className={styles.item}>
                <button
                  type="button"
                  className={styles.qRow}
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className={styles.num}>{num}</span>
                  <span className={styles.qText}>{item.q}</span>
                  <span className={styles.toggle} aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div className={`${styles.answerWrap} ${isOpen ? styles.answerOpen : ""}`}>
                  <div className={styles.answerInner}>
                    <p className={styles.answer}>{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className={styles.agent}>
          <div className={styles.agentText}>
            <h3 className={styles.agentHeading}>לא מצאתם את מה שחיפשתם?</h3>
            <p className={styles.agentSub}>פשוט תשאלו את KAI.</p>
          </div>

          <div className={styles.agentForm}>
            <form
              className={styles.inputRow}
              onSubmit={(e) => {
                e.preventDefault();
                /* TODO: לחבר לסוכן N8N — "KAI שירות לקוחות" */
              }}
            >
              <input
                className={styles.input}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="כתבו כאן כל שאלה על הקולקציה שלכם..."
                aria-label="שאלה חופשית ל-KAI"
              />
              <button type="submit" className={styles.send} aria-label="שליחה">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 4 3 11l6 2.5L11 20l3.5-6L20 4Z" />
                </svg>
              </button>
            </form>

            <p className={styles.shortLabel}>או בחרו שאלה נפוצה:</p>
            <div className={styles.shortcuts}>
              {SHORTCUTS.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={styles.shortcut}
                  onClick={() => setQuery(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.contact}>
          <StarDivider symmetric className={styles.contactDivider} />
          <p>
            עדיין מעדיפים לדבר עם נציג?{" "}
            <a href="mailto:hello@kaieditions.com">צרו איתנו קשר ›</a>
          </p>
        </div>
      </div>
    </section>
  );
}
