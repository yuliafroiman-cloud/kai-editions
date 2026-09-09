import type { Metadata } from "next";
import { cld, IMG } from "@/lib/cloudinary";
import { StarDivider } from "@/components/ui/StarDivider";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "איך KAI נולד — הסיפור מאחורי הקופסה",
  description:
    "KAI EDITIONS נולד ברכבת בין מדריד לברצלונה, כשהבן שלי פתח חפיסת קלפים ואני עברתי על התמונות שלנו. הסיפור מאחורי המותג.",
};

/** מקור הטקסט: docs/website-copy.md §2 */
export default function AboutPage() {
  return (
    <main className={styles.page}>
      <div className="wrap">
        <header className={styles.head}>
          <StarDivider symmetric className={styles.divider} />
          <h1 className={styles.heading}>איך KAI נולד</h1>
          <p className={styles.sub}>הסיפור שהתחיל ברכבת בין מדריד לברצלונה</p>
        </header>

        <div className={styles.collage}>
          <span className={`${styles.date}`}>ספטמבר, 2026</span>

          <figure className={`${styles.photo} ${styles.photoMain}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cld(IMG.about.hero, "c_fill,ar_4:3,g_auto,w_1000")} alt="יוליה והבן ברכבת בדרך ממדריד לברצלונה" />
          </figure>
          <figure className={`${styles.photo} ${styles.photoTop}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cld(IMG.about.album, "c_fill,ar_4:5,g_auto,w_560")} alt="הבן מחזיק אלבום קלפים" />
          </figure>
          <figure className={`${styles.photo} ${styles.photoBottom}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cld(IMG.about.moment, "c_fill,ar_4:5,g_auto,w_560")} alt="הבן פותח חפיסת קלפים" />
          </figure>
        </div>

        <section className={styles.block}>
          <h2 className={styles.blockHeading}>הרגע שבו נולד הרעיון</h2>
          <div className={styles.prose}>
            <p>
              נסעתי עם הבן שלי, שעמד לחגוג עשר, לטיול החלומות שלו בספרד. כל הטיול היה סביב
              החלום שלו — כדורגל, אצטדיונים, מוזיאון, חנויות.
            </p>
            <p>
              את הדרך ממדריד לברצלונה עשינו ברכבת. לפני העלייה נכנסנו לחנות ספרים וקנינו
              אלבום וחפיסות קלפים. הוא התיישב ופתח חפיסה אחרי חפיסה, מתרגש מכל קלף, מחפש את
              קלף הזהב.
            </p>
            <p>
              אני הסתכלתי עליו, חייכתי, עברתי על התמונות שלנו, ופתאום עלה לי רעיון. מה אם
              היינו יכולים לסכם טיול, שנה או תקופה בקופסה אחת, עם אלבום וחפיסות שמסתירות
              רגעים אמיתיים שלנו? לפתוח בלי לדעת מה ייצא. להתרגש מכל תמונה. לבנות אוסף של
              זיכרונות.
            </p>
            <p>
              ובאותו רגע הבנתי שזה לא רק טיול. זה יכול להיות יום הולדת. סבתא עם הנכדים. זוג
              בתחילת הדרך. חברות שמסתכלות אחורה. כי יש משהו בלהמתין, לא לדעת, לגלות מחדש. וזה
              בדיוק מה שרציתי לשמור.
            </p>
          </div>
        </section>

        <StarDivider symmetric className={styles.midDivider} />

        <section className={styles.block}>
          <h2 className={styles.blockHeading}>ולמה KAI?</h2>
          <div className={styles.prose}>
            <p>
              כי ההשראה הייתה הבן שלי. אחת המילים הראשונות שלו הייתה "קאי" — שם של צעצוע
              אהוב שהוא לקח איתו לכל מקום. לכן היה לי ברור שהמותג ייקרא KAI EDITIONS.
            </p>
            <p>
              היום כל מה שנשאר הוא לבחור את הרגעים שחשובים לכם, להעלות את התמונות בכמה
              דקות, לחכות לקופסה ולפתוח אותה עם האנשים שאתם הכי אוהבים.
            </p>
          </div>
        </section>

        <blockquote className={styles.quote}>
          <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>
          כי יש זיכרונות שלא מספיק לשמור בטלפון. מגיע להם להפוך לחוויה.
        </blockquote>

        <div className={styles.sign}>
          <span className={`${styles.signScript}`}>יוליה</span>
          <p className={styles.signName}>יוליה · מייסדת KAI EDITIONS</p>
        </div>
      </div>
    </main>
  );
}
