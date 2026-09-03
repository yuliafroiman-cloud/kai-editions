import Link from "next/link";
import styles from "./Button.module.css";

type Variant = "primary" | "ghost" | "gold";

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

/** כפתור/קישור פעולה. primary = דיו · ghost = מסגרת · gold = מסגרת פויל */
export function Button({ href, children, variant = "primary", className = "" }: Props) {
  return (
    <Link href={href} className={`${styles.btn} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
