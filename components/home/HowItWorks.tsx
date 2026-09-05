import { StarDivider } from "@/components/ui/StarDivider";
import styles from "./HowItWorks.module.css";

/** קופי מ-website-copy.md §4 (מקוצר ל-6 שלבים; פירוט המעורבות ו"בלי AI" מרוכזים למטה) */
const STEPS: { title: string; body: string }[] = [
  { title: "בוחרים קולקציה", body: "בחרו את הקו וה-Edition שמתאימים לסיפור שלכם." },
  { title: "מעלים תמונות ועונים על כמה שאלות", body: "3–5 תמונות וכמה שאלות קצרות. לוקח דקות." },
  { title: "מקבלים קונספט ראשוני", body: "הדמיה ראשונה של הקלף האישי והקופסה, עוד לפני שממשיכים." },
  { title: "ממשיכים רק אם אהבתם", body: "אהבתם את הכיוון? מעלים את שאר התמונות לפי גודל הקולקציה." },
  { title: "הקופסה יוצאת לייצור", body: "הקולקציה האישית שלכם נוצרת, נארזת ונשלחת אליכם." },
  { title: "פותחים ומגלים — יחד", body: "אתם מחליטים מתי ועם מי לפתוח, לגלות ולהתרגש." },
];

export function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className="wrap">
        <div className={styles.header}>
          <StarDivider symmetric className={styles.divider} />
          <h2 className={styles.heading}>How It Works</h2>
          <p className={styles.sub}>מהרגע שבחרתם ועד שאתם פותחים יחד — כמה דקות עכשיו, וקופסה שמחכה בהמשך.</p>
        </div>

        <ol className={styles.steps}>
          {STEPS.map((s, i) => (
            <li key={s.title} className={styles.step}>
              <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.rule} aria-hidden="true" />
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepBody}>{s.body}</p>
            </li>
          ))}
        </ol>

        <p className={styles.note}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
            <path d="M12 0c.6 4.9 1.1 9.4 12 12-10.9 2.6-11.4 7.1-12 12-.6-4.9-1.1-9.4-12-12C10.9 9.4 11.4 4.9 12 0z" fill="currentColor" stroke="none" />
          </svg>
          התמונות נשארות אמיתיות — בלי עיבוד AI. אנחנו רק עוטפים אותן בחוויה ובעיצוב. אתם בוחרים כמה להיות מעורבים בסיפור.
        </p>
      </div>
    </section>
  );
}
