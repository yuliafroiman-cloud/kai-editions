import { cld, IMG } from "@/lib/cloudinary";
import { Button } from "@/components/ui/Button";
import { StarDivider } from "@/components/ui/StarDivider";
import { Pin } from "@/components/ui/Pin";
import styles from "./HowItWorks.module.css";

/**
 * קופי מ-website-copy.md §4 (8 שלבים → 6; "כמה להיות מעורבים" + "בלי AI" מרוכזים בהערה למטה).
 * 3 קבוצות, כל אחת = 2 שלבים + תמונה. סדר RTL: קבוצה 1 מימין.
 */
const GROUPS = [
  {
    img: IMG.how.upload,
    alt: "מסך העלאת תמונות באפליקציית KAI",
    steps: [
      { n: "01", title: "בוחרים קולקציה", body: "בחרו את הקו וה-Edition שמתאימים לסיפור שלכם." },
      { n: "02", title: "מעלים תמונות ועונים על כמה שאלות", body: "3–5 תמונות וכמה שאלות קצרות. לוקח דקות." },
    ],
  },
  {
    img: IMG.how.preview,
    alt: "הדמיה ראשונה של הקלף האישי בטלפון",
    steps: [
      { n: "03", title: "מקבלים קונספט ראשוני", body: "הדמיה ראשונה של הקלף האישי והקופסה, עוד לפני שממשיכים." },
      { n: "04", title: "ממשיכים רק אם אהבתם", body: "אהבתם את הכיוון? מעלים את שאר התמונות לפי גודל הקולקציה." },
    ],
  },
  {
    img: IMG.how.produce,
    alt: "הקלפים יוצאים לייצור",
    steps: [
      { n: "05", title: "הקופסה יוצאת לייצור", body: "הקולקציה האישית שלכם נוצרת, נארזת ונשלחת אליכם." },
      { n: "06", title: "פותחים ומגלים — יחד", body: "אתם מחליטים מתי ועם מי לפתוח, לגלות ולהתרגש." },
    ],
  },
];

export function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className="wrap">
        <div className={styles.header}>
          <StarDivider symmetric className={styles.divider} />
          <h2 className={styles.heading}>איך זה עובד</h2>
          <p className={styles.sub}>
            מרגע שבחרתם ועד שאתם פותחים יחד — כמה דקות עכשיו, וקופסה שמחכה בהמשך.
          </p>
        </div>

        <div className={styles.groups}>
          {GROUPS.map((g) => (
            <div key={g.img} className={styles.group}>
              <div className={styles.pair}>
                {g.steps.map((s) => (
                  <div key={s.n} className={styles.step}>
                    <span className={styles.num}>{s.n}</span>
                    <span className={styles.rule} aria-hidden="true" />
                    <h3 className={styles.stepTitle}>{s.title}</h3>
                    <p className={styles.stepBody}>{s.body}</p>
                  </div>
                ))}
              </div>
              <figure className={styles.fig}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cld(g.img, "c_fill,ar_4:3,g_auto,w_720")} alt={g.alt} loading="lazy" />
              </figure>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Button href="/order" variant="dark" sparkle>
            מתחילים את הסיפור שלכם
          </Button>
        </div>

        <p className={styles.note}>
          <Pin className={styles.noteIcon} />
          התמונות נשארות אמיתיות — בלי עיבוד AI. אנחנו רק עוטפים אותן בחוויה ובעיצוב. אתם בוחרים כמה להיות מעורבים בסיפור.
        </p>
      </div>
    </section>
  );
}
