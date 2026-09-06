import { cld, IMG } from "@/lib/cloudinary";
import { StarDivider } from "@/components/ui/StarDivider";
import styles from "./WhatsInside.module.css";

type IconName = "gift" | "album" | "checklist" | "packs" | "pen" | "sticker" | "spark";

const Icon = ({ name }: { name: IconName }) => {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "gift":
      return <svg viewBox="0 0 24 24" {...p}><path d="M4 10h16v10H4zM3 7h18v3H3zM12 7v13M12 7S9.5 3 7.5 4 9 7 12 7zM12 7s2.5-4 4.5-3S15 7 12 7z" /></svg>;
    case "album":
      return <svg viewBox="0 0 24 24" {...p}><path d="M6 4h13a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" /><path d="M4 18h16M9 4v17" /></svg>;
    case "checklist":
      return <svg viewBox="0 0 24 24" {...p}><rect x="4" y="3" width="16" height="18" rx="1.6" /><path d="m7 8 1.4 1.4L11 7M7 14l1.4 1.4L11 13M13.5 8H17M13.5 14H17" /></svg>;
    case "packs":
      return <svg viewBox="0 0 24 24" {...p}><rect x="7" y="4" width="11" height="15" rx="1.4" /><path d="M4.5 7 3 17.5a1.5 1.5 0 0 0 1.2 1.7L13 21" /></svg>;
    case "pen":
      return <svg viewBox="0 0 24 24" {...p}><path d="M15.5 4.5 19 8 8 19l-4 1 1-4z" /><path d="M13.5 6.5 17 10" /></svg>;
    case "sticker":
      return <svg viewBox="0 0 24 24" {...p}><path d="M20 4v10l-6 6H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z" /><path d="M14 20v-5a1 1 0 0 1 1-1h5" /></svg>;
    case "spark":
      return <svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 0c.6 4.9 1.1 9.4 12 12-10.9 2.6-11.4 7.1-12 12-.6-4.9-1.1-9.4-12-12C10.9 9.4 11.4 4.9 12 0z" /></svg>;
  }
};

/** קופי מ-website-copy.md §5 */
const ITEMS: { icon: IconName; title: string; body: string }[] = [
  { icon: "gift", title: "קופסת KAI מעוצבת", body: "קופסת אספנות אישית שמעוצבת כחלק מהחוויה." },
  { icon: "album", title: "אלבום אספנות", body: "אלבום שבו תסדרו ותשמרו את הקלפים." },
  { icon: "checklist", title: "Checklist", body: "רשימת קלפים ממוספרת לפי גודל הקולקציה — 24, 48 או 72." },
  { icon: "packs", title: "חפיסות סגורות", body: "4 / 8 / 12 חפיסות לפי החבילה · 6 קלפים בכל חפיסה · בסדר אקראי." },
  { icon: "pen", title: "ברכה אישית", body: "כותבים ברכה בעצמכם או נעזרים בכותב שלנו." },
  { icon: "sticker", title: "סט מדבקות", body: "סט ייחודי המותאם לקולקציה — נשמר כהפתעה עד הפתיחה." },
  { icon: "spark", title: "עוד הפתעה קטנה", body: "בכל קופסה פרט קטן נוסף שלא נגלה מראש." },
];

/* Silver: 3 בכל קופסה · Gold: 1 בכל קופסה (אושר 06/09) */
const TIERS = [
  { name: "Regular", img: IMG.cardFront("regular"), cap: "רוב הקלפים בקולקציה." },
  { name: "Silver", img: IMG.cardFront("silver"), cap: "3 קלפים נדירים בכל קופסה." },
  { name: "Gold", img: IMG.cardFront("gold"), cap: "קלף אחד מיוחד בכל קופסה." },
] as const;

export function WhatsInside() {
  return (
    <section className={styles.section} id="inside">
      <div className="wrap">
        <div className={styles.header}>
          <StarDivider symmetric className={styles.divider} />
          <h2 className={styles.heading}>מה מחכה בתוך הקופסה</h2>
          <p className={styles.sub}>
            כל מה שצריך כדי להפוך את הסיפור שלכם לחוויה שאפשר לפתוח, לגלות ולאסוף.
          </p>
        </div>

        <div className={styles.body}>
          <ol className={styles.list}>
            {ITEMS.map((it, i) => (
              <li key={it.title} className={styles.item}>
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                <div className={styles.text}>
                  <h3 className={styles.itemTitle}>{it.title}</h3>
                  <p className={styles.itemBody}>{it.body}</p>
                </div>
                <span className={styles.icon}><Icon name={it.icon} /></span>
              </li>
            ))}
          </ol>

          <figure className={styles.fig}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cld(IMG.insideFlatlay, "w_1100")}
              alt="קופסת KAI פתוחה עם האלבום, החפיסות, ה-Checklist, כרטיס הברכה וסט המדבקות"
              loading="lazy"
            />
          </figure>
        </div>

        <div className={styles.tiers}>
          <div className={styles.tiersText}>
            <StarDivider className={styles.tiersDivider} />
            <h3 className={styles.tiersHeading}>בכל קופסה — הפתעה אמיתית</h3>
            <p className={styles.tiersSub}>
              בחלק מהחפיסות מסתתרים קלפי Silver ו‑Gold מיוחדים. גם אתם לא תדעו מראש
              איזו תמונה תהפוך לקלף הנדיר.
            </p>
          </div>

          <ul className={styles.tierCards}>
            {TIERS.map((t) => (
              <li key={t.name} className={styles.tierCard}>
                <span className={styles.tierLabel}>{t.name}</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cld(t.img, "w_260")} alt={`קלף ${t.name}`} loading="lazy" />
                <span className={styles.tierCap}>{t.cap}</span>
              </li>
            ))}
          </ul>

          <div className={styles.tierStack} aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cld("kai-editions/cards/couple/back-regular", "w_220")} alt="" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cld("kai-editions/cards/couple/back-regular", "w_220")} alt="" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cld("kai-editions/cards/couple/back-regular", "w_220")} alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
