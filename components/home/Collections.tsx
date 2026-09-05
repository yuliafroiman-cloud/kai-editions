import Link from "next/link";
import { cld, IMG } from "@/lib/cloudinary";
import { LINES, LINE_ORDER, type LineSlug } from "@/lib/lines";
import { StarDivider } from "@/components/ui/StarDivider";
import styles from "./Collections.module.css";

/** קופי מ-website-copy.md §3 (המשפט המודגש של כל קו) */
const CARDS: Record<LineSlug, { name: string; tagline: string }> = {
  couple: { name: "Couples", tagline: "כי כל סיפור אהבה ראוי להיאסף." },
  family: { name: "Family", tagline: "צרו קולקציה שתפתחו יחד שוב ושוב." },
  friendship: { name: "Friendship", tagline: "מתנה שנוגעת בלב של מי שיקר לכם." },
  kids: {
    name: "Kids",
    tagline: "לראות את הילד שלכם פותח חפיסה, עם עיניים נוצצות, ומגלה את עצמו בתוך ההרפתקה שלו.",
  },
};

const ICON_PATH: Record<LineSlug, React.ReactNode> = {
  couple: <path d="M12 20s-7-4.6-7-10.2A4.3 4.3 0 0 1 12 6a4.3 4.3 0 0 1 7 3.8C19 15.4 12 20 12 20z" />,
  family: (
    <>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v9h12v-9" />
      <path d="M10 19v-5h4v5" />
    </>
  ),
  friendship: (
    <>
      <circle cx="9" cy="12" r="5.2" />
      <circle cx="15" cy="12" r="5.2" />
    </>
  ),
  kids: (
    <>
      <circle cx="12" cy="13" r="6" />
      <circle cx="7.5" cy="7" r="2.3" />
      <circle cx="16.5" cy="7" r="2.3" />
    </>
  ),
};

function LineIcon({ slug }: { slug: LineSlug }) {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICON_PATH[slug]}
    </svg>
  );
}

export function Collections() {
  return (
    <section className={styles.section} id="collections">
      <div className="wrap">
        <div className={styles.header}>
          <StarDivider symmetric className={styles.divider} />
          <h2 className={styles.heading}>The Collections</h2>
          <p className={styles.sub}>
            ארבעה עולמות של זיכרונות. אינסוף רגעים שלכם.
            <br />
            כל קולקציה מעוצבת במיוחד עבור הסיפור שלכם.
          </p>
        </div>

        <div className={styles.grid}>
          {LINE_ORDER.map((slug) => {
            const line = LINES[slug];
            const card = CARDS[slug];
            return (
              <Link
                key={slug}
                href={`/order?line=${slug}`}
                className={styles.card}
                style={{ ["--line" as string]: line.color, ["--line-on" as string]: line.onColor }}
              >
                <div className={styles.photo}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cld(IMG.collectionBox(slug), "c_fill,ar_1:1,g_auto,w_760")}
                    alt={`קולקציית ${line.name}`}
                    loading="lazy"
                  />
                </div>
                <div className={styles.panel}>
                  <p className={styles.name}>
                    <LineIcon slug={slug} />
                    {card.name}
                  </p>
                  <p className={styles.tagline}>{card.tagline}</p>
                  <span className={styles.more}>
                    לגלות עוד
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M14 6l-6 6 6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
