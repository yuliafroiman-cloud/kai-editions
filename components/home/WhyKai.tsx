"use client";

import { useState, type CSSProperties } from "react";
import { cld, IMG } from "@/lib/cloudinary";
import { LINES, LINE_ORDER, type LineSlug } from "@/lib/lines";
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

const LineIcon = ({ slug }: { slug: LineSlug }) => {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (slug) {
    case "couple":
      return <svg viewBox="0 0 24 24" {...p}><path d="M12 20s-7-4.6-7-10.2A4.3 4.3 0 0 1 12 6a4.3 4.3 0 0 1 7 3.8C19 15.4 12 20 12 20z" /></svg>;
    case "family":
      return <svg viewBox="0 0 24 24" {...p}><path d="M4 11 12 4l8 7" /><path d="M6 10v9h12v-9" /><path d="M10 19v-5h4v5" /></svg>;
    case "friendship":
      return <svg viewBox="0 0 24 24" {...p}><circle cx="9" cy="12" r="5.2" /><circle cx="15" cy="12" r="5.2" /></svg>;
    case "kids":
      return <svg viewBox="0 0 24 24" {...p}><circle cx="12" cy="13" r="6" /><circle cx="7.5" cy="7" r="2.3" /><circle cx="16.5" cy="7" r="2.3" /></svg>;
  }
};

type SlotKey = "feel" | "collect" | "authentic";
type Slot = { key: SlotKey; icon: IconName; title: string; alt: string };

const SLOTS: Slot[] = [
  { key: "feel", icon: "heart", alt: "יושבים יחד ועוברים על קלפי KAI", title: "לרגש" },
  { key: "collect", icon: "cards", alt: "אלבום KAI פתוח עם קלפים", title: "לאסוף את הסיפור" },
  { key: "authentic", icon: "frame", alt: "קלפי KAI מודפסים באלבום", title: "לשמור אמיתי" },
];

/** קופי per-collection — מקור: website-copy.md §6 */
const COPY: Record<LineSlug, Record<SlotKey, { lead: string; body: string }>> = {
  couple: {
    feel: { lead: "ערב אחד שמחזיר אתכם לכל הרגעים.", body: "יושבים יחד, עוברים תמונה תמונה, ומרכיבים מחדש את הסיפור שלכם." },
    collect: { lead: "כל פרק ראוי לקולקציה משלו.", body: "הדייטים הראשונים, החתונה, ירח הדבש — כל חוויה יכולה להפוך לקולקציה נוספת." },
    authentic: { lead: "תמונות שאפשר להחזיק ביד.", body: "הקלפים נכנסים לאלבום, אמיתיים ומודפסים, מוכנים לרגע הבא שתפתחו יחד." },
  },
  family: {
    feel: { lead: "קולקציה אחת, ערב שלם של המשפחה.", body: "יושבים יחד, הילדים מזהים את עצמם, וכולם נזכרים וצוחקים מחדש." },
    collect: { lead: "כל טיול, חג ושנה — עוד פרק.", body: "החופשה בקיץ, החגים, ימי ההולדת והרגעים הקטנים בבית, כל אחד הופך לקולקציה." },
    authentic: { lead: "הילדים גדלים. התמונות המודפסות נשארות.", body: "כל קולקציה מצטרפת לאלבום המשפחתי, וסיפור שלם נבנה עם השנים." },
  },
  friendship: {
    feel: { lead: "הקולקציה מגיעה, והערב כבר מסודר.", body: "עוברים על התמונות, נזכרים מה באמת קרה מאחוריהן, וצוחקים שוב מאותן בדיחות." },
    collect: { lead: "כל הרפתקה הופכת לקולקציה.", body: "טיול, סופ״ש, יום הולדת או תקופה שלא רוצים לשכוח — החברוּת גדֵלה והקולקציה איתה." },
    authentic: { lead: "יש תמונות שלא נועדו להישאר בטלפון.", body: "הן נכנסות לאלבום ונשארות שם, מוכנות לרגע הבא שתפתחו הכול מחדש." },
  },
  kids: {
    feel: { lead: "פתאום מגלים כמה הם השתנו.", body: "מסדרים יחד ונזכרים בצעד הראשון, בפרצופים המצחיקים ובכל מה שעבר מהר מדי." },
    collect: { lead: "הילדוּת הופכת לקולקציה שגדֵלה איתם.", body: "שנה ראשונה, גן חדש, כיתה א׳, חופשה — כל תקופה הופכת לעוד פרק." },
    authentic: { lead: "יום אחד הם ידפדפו בילדות שלהם.", body: "לא בגלריה בטלפון, אלא באלבום אמיתי שאפשר להחזיק ביד." },
  },
};

/** נצנוצי המעבר — פזורים על כל שטח הסקשן (דטרמיניסטי, בלי אי-התאמת hydration) */
const SPARKS = [
  { x: 4, y: 8, s: 20, d: 0 }, { x: 11, y: 58, s: 13, d: 210 }, { x: 17, y: 26, s: 24, d: 90 },
  { x: 24, y: 82, s: 14, d: 330 }, { x: 30, y: 14, s: 17, d: 130 }, { x: 36, y: 46, s: 26, d: 40 },
  { x: 42, y: 74, s: 13, d: 390 }, { x: 47, y: 20, s: 19, d: 170 }, { x: 52, y: 54, s: 15, d: 270 },
  { x: 57, y: 10, s: 22, d: 60 }, { x: 62, y: 40, s: 13, d: 440 }, { x: 67, y: 70, s: 17, d: 150 },
  { x: 72, y: 18, s: 23, d: 290 }, { x: 77, y: 50, s: 14, d: 230 }, { x: 82, y: 84, s: 15, d: 360 },
  { x: 87, y: 24, s: 21, d: 100 }, { x: 92, y: 56, s: 13, d: 470 }, { x: 96, y: 12, s: 18, d: 200 },
  { x: 7, y: 36, s: 15, d: 340 }, { x: 14, y: 90, s: 13, d: 120 }, { x: 27, y: 40, s: 12, d: 250 },
  { x: 44, y: 92, s: 16, d: 500 }, { x: 55, y: 86, s: 13, d: 180 }, { x: 63, y: 90, s: 14, d: 410 },
  { x: 20, y: 66, s: 11, d: 300 }, { x: 74, y: 32, s: 12, d: 70 }, { x: 89, y: 74, s: 14, d: 430 },
  { x: 33, y: 66, s: 12, d: 160 },
];

/** נצנוצי רקע קבועים — הרגשת "אבק זהב" מנצנצת כל הזמן על הסקשן */
const AMBIENT = [
  { x: 7, y: 18, s: 10, dur: 2.4, d: 0 }, { x: 18, y: 68, s: 7, dur: 3.0, d: 500 },
  { x: 27, y: 30, s: 11, dur: 2.7, d: 1100 }, { x: 36, y: 82, s: 7, dur: 3.3, d: 300 },
  { x: 44, y: 22, s: 9, dur: 2.5, d: 1600 }, { x: 52, y: 60, s: 8, dur: 2.9, d: 800 },
  { x: 61, y: 34, s: 10, dur: 3.1, d: 1900 }, { x: 69, y: 78, s: 7, dur: 2.6, d: 1300 },
  { x: 78, y: 24, s: 9, dur: 3.4, d: 400 }, { x: 86, y: 62, s: 8, dur: 2.8, d: 2100 },
  { x: 93, y: 40, s: 7, dur: 3.2, d: 1000 }, { x: 50, y: 92, s: 7, dur: 3.6, d: 1700 },
  { x: 13, y: 44, s: 8, dur: 2.9, d: 2300 }, { x: 40, y: 48, s: 6, dur: 2.3, d: 600 },
];

const Star = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 Q13 10 22 12 Q13 14 12 22 Q11 14 2 12 Q11 10 12 2 Z" /></svg>
);

export function WhyKai() {
  const [line, setLine] = useState<LineSlug>("couple");
  const [burst, setBurst] = useState(0);
  const img = IMG.why(line);

  const pick = (slug: LineSlug) => {
    if (slug === line) return;
    setLine(slug);
    setBurst((b) => b + 1);
  };

  return (
    <section className={styles.section} id="why">
      <div className="wrap">
        <div className={styles.field}>
          <span className={styles.ambient} aria-hidden="true">
            {AMBIENT.map((a, i) => (
              <i
                key={i}
                className={styles.amb}
                style={{ left: `${a.x}%`, top: `${a.y}%`, "--s": `${a.s}px`, animationDuration: `${a.dur}s`, animationDelay: `${a.d}ms` } as CSSProperties}
              >
                <Star />
              </i>
            ))}
          </span>

          {burst > 0 && (
            <span className={styles.sparks} key={burst} aria-hidden="true">
              <span className={styles.glow} />
              {SPARKS.map((sp, i) => (
                <i
                  key={i}
                  className={styles.spark}
                  style={{ left: `${sp.x}%`, top: `${sp.y}%`, "--s": `${sp.s}px`, animationDelay: `${sp.d}ms` } as CSSProperties}
                >
                  <Star />
                </i>
              ))}
            </span>
          )}

          <div className={styles.header}>
            <StarDivider symmetric className={styles.divider} />
            <h2 className={styles.heading}>זיכרונות שחוזרים לחיים</h2>
            <p className={styles.sub}>
              KAI הופכת את התמונות שנשארות בגלריה לחוויה שלא שוכחים.
            </p>
          </div>

          <div className={styles.tabs} role="tablist" aria-label="קולקציות">
            {LINE_ORDER.map((slug) => {
              const l = LINES[slug];
              const active = slug === line;
              return (
                <button
                  key={slug}
                  role="tab"
                  aria-selected={active}
                  className={`${styles.tab} ${active ? styles.tabActive : ""}`}
                  style={active ? ({ "--line": l.color, "--line-on": l.onColor } as CSSProperties) : undefined}
                  onClick={() => pick(slug)}
                >
                  <LineIcon slug={slug} />
                  {l.name}
                </button>
              );
            })}
          </div>

          <div className={styles.cols}>
          {SLOTS.map((c) => {
            const cp = COPY[line][c.key];
            return (
              <div key={c.title} className={styles.col}>
                <figure className={styles.fig}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    key={`${line}-${c.key}`}
                    className={styles.figImg}
                    src={cld(img[c.key], "c_fill,ar_4:3,g_auto,w_720")}
                    alt={c.alt}
                    loading="lazy"
                  />
                </figure>
                <span className={styles.icon}><Icon name={c.icon} /></span>
                <h3 className={styles.colTitle}>{c.title}</h3>
                <p className={styles.lead}>{cp.lead}</p>
                <p className={styles.body}>{cp.body}</p>
              </div>
            );
          })}
          </div>
        </div>

        <div className={styles.cta}>
          <StarDivider symmetric className={styles.ctaDivider} />
          <Button href="/order" variant="dark" sparkle>צרו Collection</Button>
        </div>
      </div>
    </section>
  );
}
