import Link from "next/link";
import { Pin } from "./Pin";
import styles from "./Button.module.css";

type Variant = "primary" | "ghost" | "gold" | "dark";

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  /** מוסיף סיכת-כוכב זהב בקצה */
  sparkle?: boolean;
  className?: string;
}

/** כפתור/קישור פעולה. dark = מלא כהה עם טקסט זהב (ה-CTA הראשי של האתר). */
export function Button({ href, children, variant = "primary", sparkle = false, className = "" }: Props) {
  return (
    <Link href={href} className={`${styles.btn} ${styles[variant]} ${className}`}>
      {sparkle && <Pin className={styles.sparkle} />}
      <span>{children}</span>
    </Link>
  );
}
