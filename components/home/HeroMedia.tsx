import { cld, IMG } from "@/lib/cloudinary";
import styles from "./Hero.module.css";

/**
 * ויזואל ה-Hero — תמונה מלאת-רוחב (hero-desktop לרוחב / hero-mobile לאורך).
 * בהמשך: להחליף את ה-<picture> ב-<video autoPlay muted loop playsInline poster>.
 */
export function HeroMedia() {
  return (
    <div className={styles.media} aria-hidden="true">
      <picture>
        <source media="(min-width: 768px)" srcSet={cld(IMG.heroDesktop, "w_2000")} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={cld(IMG.heroMobile, "w_1100")} alt="" />
      </picture>
      <span className={styles.scrim} />
    </div>
  );
}
