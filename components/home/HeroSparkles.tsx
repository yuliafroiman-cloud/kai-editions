"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import styles from "./Hero.module.css";

/** כוכבי ✦ זהב שמנצנצים על כל שטח ה-Hero (אותו אפקט כמו WhyKai). מיקומים דטרמיניסטיים. */
const STARS = [
  { x: 5, y: 20, s: 11, dur: 2.7, delay: 0.6 },
  { x: 12, y: 62, s: 9, dur: 3.1, delay: 1.9 },
  { x: 18, y: 34, s: 13, dur: 2.6, delay: 0 },
  { x: 24, y: 82, s: 8, dur: 3.4, delay: 2.4 },
  { x: 30, y: 14, s: 10, dur: 2.9, delay: 1.2 },
  { x: 33, y: 50, s: 15, dur: 3.0, delay: 0.3 },
  { x: 39, y: 74, s: 9, dur: 3.3, delay: 2.7 },
  { x: 44, y: 26, s: 12, dur: 2.5, delay: 1.5 },
  { x: 49, y: 58, s: 9, dur: 3.5, delay: 0.9 },
  { x: 55, y: 10, s: 13, dur: 2.7, delay: 2.1 },
  { x: 60, y: 42, s: 10, dur: 2.8, delay: 0.5 },
  { x: 66, y: 70, s: 14, dur: 3.1, delay: 1.7 },
  { x: 71, y: 18, s: 10, dur: 2.6, delay: 3.0 },
  { x: 76, y: 52, s: 16, dur: 3.0, delay: 0.2 },
  { x: 82, y: 84, s: 9, dur: 3.3, delay: 1.3 },
  { x: 87, y: 28, s: 12, dur: 2.7, delay: 2.5 },
  { x: 92, y: 60, s: 10, dur: 2.9, delay: 0.8 },
  { x: 96, y: 12, s: 11, dur: 3.2, delay: 1.6 },
  { x: 9, y: 44, s: 9, dur: 2.8, delay: 3.1 },
  { x: 88, y: 78, s: 10, dur: 2.6, delay: 0.4 },
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
        {STARS.map((sp, i) => (
          <i
            key={i}
            className={styles.spark}
            style={
              {
                left: `${sp.x}%`,
                top: `${sp.y}%`,
                "--s": `${sp.s}px`,
                animationDuration: `${sp.dur}s`,
                animationDelay: `${sp.delay}s`,
              } as CSSProperties
            }
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2 Q13 10 22 12 Q13 14 12 22 Q11 14 2 12 Q11 10 12 2 Z" />
            </svg>
          </i>
        ))}
      </div>
    </div>
  );
}
