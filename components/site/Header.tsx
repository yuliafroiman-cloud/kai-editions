"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cld, IMG } from "@/lib/cloudinary";
import { Button } from "@/components/ui/Button";
import styles from "./Header.module.css";

const NAV = [
  { href: "/#collections", label: "הקולקציות" },
  { href: "/#how", label: "איך זה עובד" },
  { href: "/#inside", label: "מה יש בקופסה" },
  { href: "/#faq", label: "שאלות נפוצות" },
  { href: "/about", label: "איך KAI נולד" },
];

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${solid ? styles.solid : ""}`}>
      <div className={styles.bar}>
        <button
          className={styles.toggle}
          aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <Link href="/" className={styles.logo} aria-label="KAI EDITIONS">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={cld(IMG.logoGold, "e_trim,h_200")} alt="KAI EDITIONS" width={320} height={80} />
          <svg className={styles.star} viewBox="0 0 60 100" aria-hidden="true">
            <defs>
              <radialGradient id="kaiStar" cx="50%" cy="42%" r="65%">
                <stop offset="0%" stopColor="#fffaf0" />
                <stop offset="45%" stopColor="#e7c98b" />
                <stop offset="100%" stopColor="#a97f3d" />
              </radialGradient>
            </defs>
            <path
              d="M30 0 Q33 44 60 50 Q33 56 30 100 Q27 56 0 50 Q27 44 30 0 Z"
              fill="url(#kaiStar)"
            />
          </svg>
        </Link>

        <nav className={styles.nav}>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
        </nav>

        <Button href="/order" variant="dark" sparkle className={styles.cta}>
          צרו Collection
        </Button>
      </div>

      {open && (
        <nav className={styles.drawer} onClick={() => setOpen(false)}>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
          <Button href="/order" variant="dark" sparkle>צרו Collection</Button>
        </nav>
      )}
    </header>
  );
}
