import { cld, IMG } from "@/lib/cloudinary";
import { Pin } from "@/components/ui/Pin";
import styles from "./Hero.module.css";

/**
 * הוויזואל של ה-Hero. כרגע תמונה (hero-desktop / hero-mobile).
 * בהמשך: להחליף את תוכן ה-<figure> ב-<video> (אותו frame, אותן סיכות).
 */
export function HeroMedia() {
  return (
    <div className={styles.card}>
      <figure>
        <Pin className={`${styles.pin} ${styles.tl}`} />
        <Pin className={`${styles.pin} ${styles.tr}`} />
        <Pin className={`${styles.pin} ${styles.bl}`} />
        <Pin className={`${styles.pin} ${styles.br}`} />

        <picture>
          <source
            media="(min-width: 820px)"
            srcSet={cld(IMG.heroDesktop, "w_1200")}
            width={1200}
            height={675}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cld(IMG.heroMobile, "w_780")}
            alt="קופסת KAI EDITIONS פתוחה — אלבום, חפיסות סגורות וקלף אישי"
            width={780}
            height={1386}
          />
        </picture>
      </figure>
    </div>
  );
}
