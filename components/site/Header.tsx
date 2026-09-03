"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cld, IMG } from "@/lib/cloudinary";
import { Button } from "@/components/ui/Button";
import styles from "./Header.module.css";

const NAV = [
  { href: "/#collections", label: "הקולקציות" },
  { href: "/#how", label: "איך זה עובד" },
  { href: "/#tiers", label: "הקלפים" },
  { href: "/#packages", label: "גדלים" },
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
          <img src={cld(IMG.logoBlack, "e_trim,h_100")} alt="KAI EDITIONS" width={168} height={42} />
        </Link>

        <nav className={styles.nav}>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
        </nav>

        <Button href="/order" variant="gold" className={styles.cta}>
          התחילו קולקציה
        </Button>
      </div>

      {open && (
        <nav className={styles.drawer} onClick={() => setOpen(false)}>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
          <Button href="/order" variant="gold">התחילו קולקציה</Button>
        </nav>
      )}
    </header>
  );
}
