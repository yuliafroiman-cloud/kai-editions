import { cld, IMG } from "@/lib/cloudinary";
import styles from "./Hero.module.css";

/**
 * ויזואל ה-Hero — תמונת הסצנה מלאת-רוחב.
 * דסקטופ: לרוחב · מובייל: חיתוך לאורך. בהמשך להחליף ב-<video ... poster>.
 */
export function HeroMedia() {
  return (
    <div className={styles.media} aria-hidden="true">
      <picture>
        <source media="(min-width: 768px)" srcSet={cld(IMG.heroScene, "w_1800")} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={cld(IMG.heroScene, "c_fill,ar_3:4,g_auto,w_1000")} alt="" />
      </picture>
      <span className={styles.scrim} />
    </div>
  );
}
