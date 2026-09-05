import { cld, IMG } from "@/lib/cloudinary";
import styles from "./Hero.module.css";

/**
 * ויזואל ה-Hero — תמונה מוכלת (לא מלאת-מסך) בצד הימני, על רקע שמנת.
 * בהמשך: להחליף את ה-<picture> ב-<video autoPlay muted loop playsInline poster>.
 */
export function HeroMedia() {
  return (
    <div className={styles.media}>
      <picture>
        <source media="(min-width: 768px)" srcSet={cld(IMG.heroScene, "c_fill,ar_5:4,g_auto,w_1400")} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={cld(IMG.heroScene, "c_fill,ar_4:5,g_auto,w_1000")} alt="קבוצת חברים פותחת קופסת KAI EDITIONS" />
      </picture>
    </div>
  );
}
