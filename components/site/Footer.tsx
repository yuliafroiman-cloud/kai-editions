import { cld, IMG } from "@/lib/cloudinary";
import { Pin } from "@/components/ui/Pin";
import styles from "./Footer.module.css";

const TRUST = ["מעוצב ונוצר באהבה", "איכות פרימיום", "פרטיות ובטיחות", "מתנה עם משמעות"];

/* TODO: פרטים אמיתיים — טלפון, כתובת וקישורי סושיאל הם placeholder */
const PHONE_DISPLAY = "050-1234567";
const PHONE_WA = "972501234567";
const ADDRESS = "דרך מנחם בגין 121, תל אביב, ישראל";
const SOCIAL: { name: string; href: string; icon: IconName }[] = [
  { name: "Instagram", href: "#", icon: "instagram" },
  { name: "TikTok", href: "#", icon: "tiktok" },
  { name: "Facebook", href: "#", icon: "facebook" },
];

type IconName = "mail" | "wa" | "pin" | "instagram" | "tiktok" | "facebook";
const Icon = ({ name }: { name: IconName }) => {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "mail":
      return <svg viewBox="0 0 24 24" {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
    case "wa":
      return <svg viewBox="0 0 24 24" {...p}><path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z" /><path d="M8.5 8.5c-.3 1.5.6 3.2 1.9 4.5s3 2.2 4.5 1.9c.5-.1.8-.5.9-1l.2-1c.1-.4-.1-.8-.5-1l-1.3-.6a.9.9 0 0 0-1 .2l-.4.4a6 6 0 0 1-2.3-2.3l.4-.4a.9.9 0 0 0 .2-1l-.6-1.3c-.2-.4-.6-.6-1-.5l-1 .2c-.5.1-.9.4-1 .9z" /></svg>;
    case "pin":
      return <svg viewBox="0 0 24 24" {...p}><path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>;
    case "instagram":
      return <svg viewBox="0 0 24 24" {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" /></svg>;
    case "tiktok":
      return <svg viewBox="0 0 24 24" {...p}><path d="M15 4v9.5a4 4 0 1 1-3-3.9" /><path d="M15 7.5A5 5 0 0 0 19.5 9" /></svg>;
    case "facebook":
      return <svg viewBox="0 0 24 24" {...p}><path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v7h3v-7h2.2l.4-3H14V8.2c0-.1.1-.2.2-.2z" /></svg>;
  }
};

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <ul className={styles.trust}>
          {TRUST.map((t) => (
            <li key={t}>
              <Pin className={styles.pin} />
              {t}
            </li>
          ))}
        </ul>

        <div className={styles.contact}>
          <a className={styles.contactItem} href="mailto:hello@kaieditions.com">
            <span className={styles.contactIcon}><Icon name="mail" /></span>
            <span dir="ltr">hello@kaieditions.com</span>
          </a>
          <a className={styles.contactItem} href={`https://wa.me/${PHONE_WA}`} target="_blank" rel="noopener noreferrer">
            <span className={styles.contactIcon}><Icon name="wa" /></span>
            <span dir="ltr">{PHONE_DISPLAY}</span>
          </a>
          <span className={styles.contactItem}>
            <span className={styles.contactIcon}><Icon name="pin" /></span>
            {ADDRESS}
          </span>
        </div>

        <div className={styles.social}>
          {SOCIAL.map((s) => (
            <a key={s.name} href={s.href} aria-label={s.name} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <Icon name={s.icon} />
            </a>
          ))}
        </div>

        <span className={styles.logoWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.logo} src={cld(IMG.logoGold, "e_trim,h_120")} alt="KAI EDITIONS" width={190} height={56} />
          <svg className={styles.star} viewBox="0 0 60 100" aria-hidden="true">
            <defs>
              <radialGradient id="kaiStarFooter" cx="50%" cy="42%" r="65%">
                <stop offset="0%" stopColor="#fffaf0" />
                <stop offset="45%" stopColor="#e7c98b" />
                <stop offset="100%" stopColor="#a97f3d" />
              </radialGradient>
            </defs>
            <path d="M30 0 Q33 44 60 50 Q33 56 30 100 Q27 56 0 50 Q27 44 30 0 Z" fill="url(#kaiStarFooter)" />
          </svg>
        </span>
        <p className={styles.tag} dir="ltr">Your life, collected.</p>

        <nav className={styles.links}>
          <a href="/privacy">מדיניות פרטיות</a>
          <a href="/#faq">שאלות ותשובות</a>
          <a href="/#contact">צרו קשר</a>
        </nav>

        <small>KAI EDITIONS · {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
}
