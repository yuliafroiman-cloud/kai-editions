import styles from "./Chip.module.css";

/**
 * Eyebrow של סקשן, בסגנון מספר קלף ב-Checklist: — 04 ⁄ הקולקציות —
 */
export function Chip({ n, label }: { n: string; label: string }) {
  return (
    <p className={styles.chip}>
      <span>
        {n} <span aria-hidden="true">⁄</span> {label}
      </span>
    </p>
  );
}
