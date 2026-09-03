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

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.logo} src={cld(IMG.logoGold, "e_trim,h_120")} alt="KAI EDITIONS" width={190} height={56} />
        <p className={styles.tag}>Your life, collected.</p>

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
