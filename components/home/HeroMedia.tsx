"use client";

import { useEffect, useState } from "react";
import { cld, IMG } from "@/lib/cloudinary";
import styles from "./Hero.module.css";

const SLIDES = IMG.heroCarousel;
const INTERVAL = 5500;

/**
 * ויזואל ה-Hero — קרוסלת 4 סצנות (קולקציה לכל תמונה), cross-fade רך ואוטומטי.
 * המסגרת זהה; המעבר בין התמונות הוא opacity בלבד (בלי slide, בלי layout shift).
 */
export function HeroMedia() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((v) => (v + 1) % SLIDES.length), INTERVAL);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <div
      className={styles.media}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SLIDES.map((id, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={id}
          className={styles.slide}
          src={cld(id, "c_fill,ar_5:4,g_auto,w_1400")}
          alt={i === 0 ? "קבוצת חברים פותחת קופסת KAI EDITIONS" : ""}
          style={{ opacity: i === active ? 1 : 0 }}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}

      <div className={styles.dots} role="tablist" aria-label="תמונות ה-Hero">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`תמונה ${i + 1}`}
            className={`${styles.dot} ${i === active ? styles.dotOn : ""}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}
