import { Pin } from "./Pin";
import styles from "./StarDivider.module.css";

interface Props {
  className?: string;
  /** קו-קו-קו סימטרי וממורכז (לכותרות סקשן), במקום קצר←ארוך צמוד-לטקסט */
  symmetric?: boolean;
}

/** קו זהב דק עם סיכת-כוכב — מפריד בין כותרת לפסקה. */
export function StarDivider({ className = "", symmetric = false }: Props) {
  return (
    <span className={`${styles.rule} ${symmetric ? styles.symmetric : ""} ${className}`} aria-hidden="true">
      <span className={symmetric ? styles.lineLong : styles.lineShort} />
      <Pin className={styles.star} />
      <span className={styles.lineLong} />
    </span>
  );
}
