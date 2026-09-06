import { cld, IMG } from "@/lib/cloudinary";
import { Button } from "@/components/ui/Button";
import { StarDivider } from "@/components/ui/StarDivider";
import styles from "./WhyKai.module.css";

type IconName = "heart" | "cards" | "frame";

const Icon = ({ name }: { name: IconName }) => {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "heart":
      return <svg viewBox="0 0 24 24" {...p}><path d="M12 20s-7-4.6-7-10.2A4.3 4.3 0 0 1 12 6a4.3 4.3 0 0 1 7 3.8C19 15.4 12 20 12 20z" /></svg>;
    case "cards":
      return <svg viewBox="0 0 24 24" {...p}><rect x="8" y="4" width="11" height="15" rx="1.4" /><path d="M4.6 7 3 17a1.5 1.5 0 0 0 1.2 1.8L13 20.5" /></svg>;
    case "frame":
      return <svg viewBox="0 0 24 24" {...p}><rect x="3" y="4" width="18" height="16" rx="1.6" /><path d="m4 16 5-5 4 4 3-3 4 4" /><circle cx="8.5" cy="9" r="1.4" /></svg>;
  }
};

/** קופי מ-website-copy.md §6 */
const COLS: { img: string; icon: IconName; title: string; lead: string; body: string; alt: string }[] = [
  {
    img: IMG.why.feel, icon: "heart", alt: "ידיים מחזיקות מניפת קלפי KAI",
    title: "לרגש",
    lead: "כל חפיסה מחזירה לרגע.",
    body: "פותחים ומתרגשים מחדש.",
  },
  {
    img: IMG.why.collect, icon: "cards", alt: "אלבום KAI פתוח עם קלפים בשקיות",
    title: "לאסוף את הסיפור",
    lead: "חוויה שנבנית חפיסה אחר חפיסה.",
    body: "הסיפור שלכם הופך לקולקציה שאפשר לגלות, לסדר ולשמור.",
  },
  {
    img: IMG.why.authentic, icon: "frame", alt: "חפיסות KAI סגורות וכרטיס ברכה",
    title: "לשמור אמיתי",
    lead: "התמונות נשארות בדיוק כמו שהן.",
    body: "בלי עיבודי AI ובלי לשנות את הרגע.",
  },
];

export function WhyKai() {
  return (
    <section className={styles.section} id="why">
      <div className="wrap">
        <div className={styles.header}>
          <StarDivider symmetric className={styles.divider} />
          <h2 className={styles.heading}>זיכרונות שחוזרים לחיים</h2>
          <p className={styles.sub}>
            KAI הופכת את התמונות שנשארות בגלריה לחוויה שלא שוכחים.
          </p>
        </div>

        <div className={styles.cols}>
          {COLS.map((c) => (
            <div key={c.title} className={styles.col}>
              <figure className={styles.fig}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cld(c.img, "c_fill,ar_4:3,w_720")} alt={c.alt} loading="lazy" />
              </figure>
              <span className={styles.icon}><Icon name={c.icon} /></span>
              <h3 className={styles.colTitle}>{c.title}</h3>
              <p className={styles.lead}>{c.lead}</p>
              <p className={styles.body}>{c.body}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <StarDivider symmetric className={styles.ctaDivider} />
          <Button href="/order" variant="dark" sparkle>צרו Collection</Button>
        </div>
      </div>
    </section>
  );
}
