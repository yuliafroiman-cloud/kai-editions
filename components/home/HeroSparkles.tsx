"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import styles from "./Hero.module.css";

/** חלקיקי אור סביב ה-Hero. מיקומים דטרמיניסטיים — בלי אי-התאמת hydration. */
const SPARKS = [
  { x: 63, y: 16, s: 8, d: 8, delay: 0 },
  { x: 79, y: 39, s: 5, d: 9.5, delay: 1.6 },
  { x: 89, y: 61, s: 7, d: 8.5, delay: 0.8 },
  { x: 71, y: 79, s: 4.5, d: 10, delay: 3.1 },
  { x: 55, y: 49, s: 6.5, d: 8, delay: 2.3 },
  { x: 46, y: 33, s: 5, d: 9, delay: 4.0 },
  { x: 93, y: 25, s: 4.5, d: 9.5, delay: 4.9 },
  { x: 66, y: 7, s: 7, d: 8.5, delay: 1.2 },
  { x: 84, y: 85, s: 5, d: 10, delay: 2.7 },
  { x: 50, y: 67, s: 4.5, d: 8, delay: 5.2 },
  { x: 75, y: 52, s: 9, d: 11, delay: 0.4 },
  { x: 40, y: 19, s: 4.5, d: 9, delay: 3.7 },
  { x: 97, y: 47, s: 5, d: 8.5, delay: 1.4 },
  { x: 58, y: 89, s: 6, d: 10, delay: 4.4 },
  { x: 33, y: 58, s: 4, d: 9, delay: 6.0 },
  { x: 86, y: 12, s: 6, d: 8, delay: 2.9 },
  { x: 69, y: 33, s: 5, d: 9.5, delay: 5.6 },
  { x: 44, y: 72, s: 4.5, d: 10, delay: 1.0 },
];

export function HeroSparkles() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const mx = (e.clientX - r.left) / r.width - 0.5;
        const my = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty("--mx", mx.toFixed(3));
        el.style.setProperty("--my", my.toFixed(3));
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className={styles.sparkles} aria-hidden="true">
      <div className={styles.sparkLayer}>
        {SPARKS.map((sp, i) => (
          <i
            key={i}
            className={styles.spark}
            style={
              {
                left: `${sp.x}%`,
                top: `${sp.y}%`,
                "--s": `${sp.s}px`,
                "--d": `${sp.d}s`,
                "--delay": `${sp.delay}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
