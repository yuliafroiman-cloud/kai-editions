import { cld, IMG } from "@/lib/cloudinary";
import { Button } from "@/components/ui/Button";
import { StarDivider } from "@/components/ui/StarDivider";
import styles from "./CardReveal.module.css";

/** קופי מ-website-copy.md §5 (טיזר קלפי הנדירות) */
export function CardReveal() {
  return (
    <section className={styles.section} id="reveal">
      <div className="wrap">
        <div className={styles.header}>
          <StarDivider symmetric className={styles.divider} />
          <h2 className={styles.heading}>איזה קלף מחכה לכם בפנים?</h2>
          <p className={styles.sub}>
            בכל שקית מסתתרים 3 קלפי Silver וקלף Gold אחד.
            <br />
            אילו זיכרונות שלכם הפכו לנדירים?
          </p>
        </div>

        <figure className={styles.scene}>
          <picture>
            <source media="(max-width: 640px)" srcSet={cld(IMG.revealSceneMobile, "w_900")} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cld(IMG.revealScene, "w_1600")}
              alt="חפיסות KAI פתוחות ומניפת קלפים — שלושה קלפי Silver וקלף Gold זוהר אחד"
              loading="lazy"
            />
          </picture>
        </figure>

        <div className={styles.cta}>
          <Button href="/order" variant="dark" sparkle>
            גלו מה מחכה בשקיה
          </Button>
        </div>
      </div>
    </section>
  );
}
