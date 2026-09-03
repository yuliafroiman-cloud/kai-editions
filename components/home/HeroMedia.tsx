import { cld, IMG } from "@/lib/cloudinary";
import styles from "./Hero.module.css";

/**
 * ויזואל ה-Hero — תמונה מלאת-רוחב.
 * ⚠️ placeholder: hero-desktop/hero-mobile הקיימים. להחליף בתמונת הסצנה החמה
 * מההדמיה (דסקטופ לרוחב + מובייל לאורך), ובהמשך ב-<video ... poster>.
 */
export function HeroMedia() {
  return (
    <div className={styles.media} aria-hidden="true">
      <picture>
        <source media="(min-width: 768px)" srcSet={cld(IMG.heroDesktop, "w_1800")} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={cld(IMG.heroMobile, "w_1000")} alt="" />
      </picture>
      <span className={styles.scrim} />
    </div>
  );
}
