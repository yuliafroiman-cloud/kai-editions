import { Button } from "@/components/ui/Button";
import { StarDivider } from "@/components/ui/StarDivider";
import { HeroMedia } from "./HeroMedia";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={`wrap ${styles.grid}`}>
        {/* first in DOM = right side in RTL */}
        <HeroMedia />

        <div className={styles.text}>
          <h1 className={styles.title}>
            <span className={styles.line}><i>כל חפיסה היא הפתעה.</i></span>
            <span className={styles.line}><i>כל קלף הוא זיכרון.</i></span>
          </h1>

          <StarDivider className={styles.divider} />

          <p className={styles.sub}>
            הפכו את הרגעים היפים שלכם לקולקציית זיכרונות לאיסוף. מעלים תמונות, מקבלים
            אלבום וחפיסות סגורות, ופותחים יחד — בלי לדעת איזה רגע מחכה בפנים ואיפה
            מסתתר הקלף הנדיר.
          </p>

          <Button href="/order" variant="dark" sparkle className={styles.cta}>
            בואו נפתח את הזכרונות שלכם מחדש
          </Button>
        </div>
      </div>
    </section>
  );
}
