import { cld, IMG } from "@/lib/cloudinary";
import { Pin } from "@/components/ui/Pin";
import styles from "./Footer.module.css";

const TRUST = ["מעוצב ונוצר באהבה", "איכות פרימיום", "פרטיות ובטיחות", "מתנה עם משמעות"];

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
          <a href="mailto:hello@kaieditions.com">צרו קשר</a>
        </nav>

        <small>KAI EDITIONS · {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
}
