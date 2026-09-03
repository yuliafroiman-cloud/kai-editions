import { LINE_ORDER, LINES } from "@/lib/lines";
import { Button } from "@/components/ui/Button";
import { HeroMedia } from "./HeroMedia";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <HeroMedia />

      <div className={`wrap ${styles.inner}`}>
        <div className={styles.text}>
          <p className={styles.eyebrow}>
            {LINE_ORDER.map((slug) => (
              <span key={slug}>{LINES[slug].name}</span>
            ))}
          </p>

          <h1 className={styles.title}>
            <span className={styles.line}><i>כל חפיסה היא הפתעה.</i></span>
            <span className={styles.line}><i>כל קלף הוא זיכרון.</i></span>
          </h1>

          <p className={styles.sub}>
            הפכו את הרגעים היפים שלכם לקולקציית זיכרונות לאיסוף. מעלים תמונות, מקבלים
            אלבום וחפיסות סגורות, ופותחים יחד — בלי לדעת איזה רגע מחכה בפנים ואיפה
            מסתתר הקלף הנדיר.
          </p>

          <p className={styles.tag}>Your life, collected.</p>

          <Button href="/order" variant="gold">התחילו את הקולקציה שלכם</Button>
        </div>
      </div>
    </section>
  );
}
