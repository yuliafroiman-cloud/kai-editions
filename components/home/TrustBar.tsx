import styles from "./TrustBar.module.css";

type IconName = "gift" | "cards" | "heart" | "album" | "lock";

const Icon = ({ name }: { name: IconName }) => {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "gift":
      return <svg viewBox="0 0 24 24" {...p}><path d="M4 10h16v10H4zM3 7h18v3H3zM12 7v13M12 7S9.5 3 7.5 4 9 7 12 7zM12 7s2.5-4 4.5-3S15 7 12 7z" /></svg>;
    case "cards":
      return <svg viewBox="0 0 24 24" {...p}><rect x="7" y="3" width="12" height="16" rx="1.6" /><path d="M4.5 6.5 3 17a1.6 1.6 0 0 0 1.2 1.9L14 21" /><path d="M13 8.5 12 10l1.6.4-1 1.4" /></svg>;
    case "heart":
      return <svg viewBox="0 0 24 24" {...p}><path d="M12 20s-7-4.6-7-10.2A4.3 4.3 0 0 1 12 6a4.3 4.3 0 0 1 7 3.8C19 15.4 12 20 12 20z" /></svg>;
    case "album":
      return <svg viewBox="0 0 24 24" {...p}><rect x="4" y="4" width="16" height="16" rx="1.6" /><path d="m5 15 4-4 3 3 3-3 4 4" /><circle cx="9" cy="9" r="1.4" /></svg>;
    case "lock":
      return <svg viewBox="0 0 24 24" {...p}><rect x="5" y="10" width="14" height="10" rx="1.6" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /><circle cx="12" cy="15" r="1.1" /></svg>;
  }
};

const ITEMS: { icon: IconName; title: string; desc: string }[] = [
  { icon: "gift", title: "מתנה עם משמעות", desc: "חוויה אישית שמרגשת כל פעם מחדש." },
  { icon: "cards", title: "פותחים. מגלים. מתרגשים.", desc: "כל חפיסה מסתירה רגעים שמחכים להתגלות." },
  { icon: "heart", title: "מהלב, עבור מי שאוהבים", desc: "נוצר יחד עבור האנשים שחשובים לכם." },
  { icon: "album", title: "אוספים את הסיפור שלכם", desc: "חוויה שנבנית חפיסה אחר חפיסה, קלף אחרי קלף." },
  { icon: "lock", title: "הפתעה בכל פריט", desc: "מהקלפים ועד ההפתעה הקטנה שמסתתרת בקופסה." },
];

export function TrustBar() {
  return (
    <section className={styles.bar} aria-label="למה KAI">
      <div className={`wrap ${styles.grid}`}>
        {ITEMS.map((it) => (
          <div key={it.title} className={styles.item}>
            <span className={styles.icon}><Icon name={it.icon} /></span>
            <h3 className={styles.title}>{it.title}</h3>
            <p className={styles.desc}>{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
