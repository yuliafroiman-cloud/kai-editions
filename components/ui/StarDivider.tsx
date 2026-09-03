import { Pin } from "./Pin";
import styles from "./StarDivider.module.css";

/** קו זהב דק עם סיכת-כוכב — מפריד בין כותרת לפסקה. */
export function StarDivider({ className = "" }: { className?: string }) {
  return (
    <span className={`${styles.rule} ${className}`} aria-hidden="true">
      <span className={styles.lineShort} />
      <Pin className={styles.star} />
      <span className={styles.lineLong} />
    </span>
  );
}
