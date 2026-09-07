import { cld, IMG } from "@/lib/cloudinary";
import { Button } from "@/components/ui/Button";
import { StarDivider } from "@/components/ui/StarDivider";
import styles from "./Packages.module.css";

/** קופי מ-website-copy.md §7 */
const PACKAGES: {
  size: 24 | 48 | 72;
  name: string;
  packs: number;
  price: number;
  featured?: boolean;
  includes: string[];
}[] = [
  {
    size: 24,
    name: "הרגעים שלנו",
    packs: 4,
    price: 249,
    includes: [
      "קופסת KAI מעוצבת",
      "אלבום אספנות",
      "4 חפיסות סגורות",
      "6 קלפים בכל חפיסה",
      "ברכה אישית",
    ],
  },
  {
    size: 48,
    name: "הסיפור שלנו",
    packs: 8,
    price: 299,
    featured: true,
    includes: [
      'כל מה שב"הרגעים שלנו"',
      "סט מדבקות ייחודי",
      "הפתעה נוספת בקופסה",
      "יותר מקום לסיפור, לרגעים ולחוויית האיסוף",
    ],
  },
  {
    size: 72,
    name: "הזכרונות שלנו",
    packs: 12,
    price: 349,
    includes: [
      'כל מה שב"הסיפור שלנו"',
      "שתי הפתעות נוספות",
      "כרטיסי אתגר ושיחה",
      "פריט כתיבה ממותג (אופציונלי)",
    ],
  },
];

const Star = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M12 2 Q13 10 22 12 Q13 14 12 22 Q11 14 2 12 Q11 10 12 2 Z" />
  </svg>
);

export function Packages() {
  return (
    <section className={styles.section} id="packages">
      <div className="wrap">
        <div className={styles.header}>
          <StarDivider symmetric className={styles.divider} />
          <h2 className={styles.heading}>בחרו את הקולקציה שמתאימה לסיפור שלכם</h2>
          <p className={styles.sub}>
            24, 48 או 72 רגעים — אתם בוחרים כמה זיכרונות תרצו להפוך לקולקציה.
          </p>
        </div>

        <div className={styles.grid}>
          {PACKAGES.map((p) => (
            <article
              key={p.size}
              className={`${styles.card} ${p.featured ? styles.cardFeatured : ""}`}
            >
              {p.featured && (
                <span className={styles.badge}>
                  <Star className={styles.badgeStar} />
                  מומלץ
                </span>
              )}

              <figure className={styles.photo}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cld(IMG.packageBox(p.size), "c_fill,ar_4:3,w_760")}
                  alt={`חבילת ${p.name} — קופסת KAI עם האלבום והחפיסות`}
                  loading="lazy"
                />
              </figure>

              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.qty}>
                {p.size} קלפים · {p.packs} חפיסות
              </p>
              <p className={styles.price}>
                <span className={styles.priceCur}>₪</span>
                <span className={styles.priceNum}>{p.price}</span>
              </p>

              <StarDivider symmetric className={styles.cardDivider} />

              <ul className={styles.includes}>
                {p.includes.map((it) => (
                  <li key={it}>
                    <Star className={styles.liStar} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>

              <Button
                href={`/order?size=${p.size}`}
                variant={p.featured ? "gold" : "dark"}
                sparkle
                className={styles.cta}
              >
                צרו Collection
              </Button>
            </article>
          ))}
        </div>

        <p className={styles.note}>
          48 תמונות הן כמות נוחה לבחירה ומייצרות קולקציה עשירה בלי להעמיס.
        </p>
        <p className={styles.noteSoft}>
          ניתן להתאים את כרטיסי האתגר לפי קולקציה: זוגות, משפחות, חברים או ילדים.
        </p>
      </div>
    </section>
  );
}
