import type { Metadata } from "next";
import { cld, IMG } from "@/lib/cloudinary";
import { Button } from "@/components/ui/Button";
import { StarDivider } from "@/components/ui/StarDivider";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "איך KAI נולד — הסיפור מאחורי הקופסה",
  description:
    "KAI EDITIONS נולד ברכבת ממדריד לברצלונה, כשהבן שלי פתח חפיסת קלפים ואני עברתי על התמונות שלנו. הסיפור מאחורי המותג.",
};

/** מקור הטקסט: docs/website-copy.md §2 — לא לשנות ניסוח */
export default function AboutPage() {
  return (
    <main className={styles.page}>
      <div className="wrap">
        <div className={styles.header}>
          <StarDivider symmetric className={styles.divider} />
          <h1 className={styles.heading}>איך KAI נולד</h1>
          <p className={styles.sub}>הסיפור מאחורי הקופסה, מהאדם שהתחיל אותו.</p>
        </div>

        <figure className={styles.hero}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cld(IMG.about.hero, "c_fill,ar_16:9,g_auto,w_1400")}
            alt="אמא ובן עוברים יחד על תמונות מודפסות ליד אלבום KAI"
          />
        </figure>

        <article className={styles.prose}>
          <p>אני רוצה לספר איך הכול התחיל.</p>
          <p>
            נסעתי עם הבן שלי, שעמד לחגוג עשר, לטיול החלומות שלו בספרד. כל הטיול היה סביב
            החלום שלו — כדורגל, אצטדיונים, מוזיאון, חנויות.
          </p>
          <p>
            את הדרך ממדריד לברצלונה עשינו ברכבת. לפני העלייה נכנסנו לחנות ספרים וקנינו
            אלבום וחפיסות קלפים.
          </p>
          <p>הוא התיישב ופתח חפיסה אחרי חפיסה, מתרגש מכל קלף, מחפש את קלף הזהב.</p>

          <figure className={styles.inlineFig}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cld(IMG.about.moment, "c_fill,ar_4:5,g_auto,w_760")}
              alt="הבן פותח חפיסת קלפים ברכבת בדרך ממדריד לברצלונה"
            />
          </figure>

          <p>
            אני הסתכלתי עליו, חייכתי, עברתי על התמונות שלנו, ופתאום עלה לי רעיון.
          </p>
          <p>
            מה אם היינו יכולים לסכם טיול, שנה או תקופה בקופסה אחת, עם אלבום וחפיסות
            שמסתירות רגעים אמיתיים שלנו?
          </p>
          <p>לפתוח בלי לדעת מה ייצא. להתרגש מכל תמונה. לבנות אוסף של זיכרונות.</p>
          <p>
            ובאותו רגע הבנתי שזה לא רק טיול. זה יכול להיות יום הולדת. סבתא עם הנכדים.
            זוג בתחילת הדרך. חברות שמסתכלות אחורה.
          </p>
          <p>כי יש משהו בלהמתין, לא לדעת, לגלות מחדש. וזה בדיוק מה שרציתי לשמור.</p>

          <blockquote className={styles.quote}>
            כי יש זיכרונות שלא מספיק לשמור בטלפון. מגיע להם להפוך לחוויה.
          </blockquote>

          <p>
            <strong className={styles.why}>ולמה KAI?</strong>
            כי ההשראה הייתה הבן שלי. אחת המילים הראשונות שלו הייתה "קאי" — שם של צעצוע
            אהוב שהוא לקח איתו לכל מקום. לכן היה לי ברור שהמותג ייקרא{" "}
            <strong>KAI EDITIONS</strong>.
          </p>
          <p>
            היום כל מה שנשאר הוא לבחור את הרגעים שחשובים לכם, להעלות את התמונות בכמה
            דקות, לחכות לקופסה ולפתוח אותה עם האנשים שאתם הכי אוהבים.
          </p>
        </article>

        <div className={styles.sign}>
          <StarDivider symmetric className={styles.signDivider} />
          <p className={styles.signName}>יוליה · מייסדת KAI EDITIONS</p>
        </div>

        <div className={styles.cta}>
          <Button href="/order" variant="dark" sparkle>
            צרו Collection
          </Button>
        </div>
      </div>
    </main>
  );
}
