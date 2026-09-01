# KAI EDITIONS — תוכנית בנייה (MVP לשיעורי בית)

## גישה שנבחרה

- **אתר סטטי:** HTML + CSS + Vanilla JS. Mobile-first, RTL.
- **דיפלוי:** Vercel.
- **תהליך ההזמנה:** כולו ב-JS בצד לקוח (רב-שלבי, תצוגת תמונות מקומית, Preview).
- **תפיסת לידים:** POST ל-**Google Apps Script Web App** → מוסיף שורה ל-Google Sheet + שולח מייל. חינם, בלי API keys, תואם לבריף.
- **תמונות הלקוח:** בשלב הזה רק תצוגה מקומית (FileReader). ההעלאה האמיתית של כל התמונות = שלב 2, עם קישור Placeholder במסך הסיום ובמייל (מותר לשיעורי בית).
- **מעבר עתידי:** המבנה (סקשנים, tokens, תוכן) עובר בקלות ל-Lovable/Next כשנרצה backend מלא.

כן — אפשר בהחלט חלקים אינטראקטיביים באתר סטטי: כל ה-Flow, ה-Preview, בורר הקווים, העלאת תמונות לתצוגה — הכול JS. רק שמירת הנתונים יוצאת החוצה (Apps Script).

---

## מבנה הקוד (`src/`)

```
src/
├── index.html            עמוד הבית (כל הסקשנים מ-website-copy.md)
├── order.html            תהליך ההזמנה (או מודאל באותו עמוד)
├── confirmation.html     מסך אישור
├── css/
│   ├── tokens.css        ← מ-assets/mockups/brand/tokens.css
│   └── styles.css
├── js/
│   ├── flow.js           לוגיקת השלבים + state
│   ├── questions.js      שאלות לפי קו × Edition
│   ├── preview.js        הרכבת ה-Preview
│   └── submit.js         שליחה ל-Apps Script
└── assets/               אייקונים מקומיים (רוב התמונות מ-Cloudinary)
```

---

## שלבי הבנייה

### שלב 0 — החלטות פתוחות (לפני קוד)
- [x] ~~**מערכת נדירות**~~ ✅ **נסגר:** Regular / Silver / Gold (3 טיפוסים). ראו [page-blocks.md](page-blocks.md).
- [ ] **גופנים:** Serif תצוגה ללוגו + גוף. בחירה לעברית + לטינית (למשל Frank Ruhl / Heebo).
- [ ] **דומיין** לשיעורי בית: subdomain של Vercel מספיק (`kai-editions.vercel.app`).
- [ ] **מחירים/חבילות:** לאשר שהטקסט ב-website-copy.md סופי (מסומן "טיוטה").
- [ ] **נוסח מייל אישור** + כתובת שולח/יעד.
- [ ] **תיקון:** `line-kids` בהדמיה מסומן "FAMILY COLLECTION" (אפשר לחיות עם זה ל-MVP).

### שלב 1 — תשתית
- [ ] Scaffold `src/` + `index.html` שלד RTL + `tokens.css` + `styles.css` (טיפוגרפיה, מרווחים, כפתורים, גריד).
- [ ] חיבור Vercel לריפו, דיפלוי ראשון (עמוד ריק).
- [ ] Header (לוגו מ-Cloudinary) + Footer כהה (`#14243D`).

### שלב 2 — עמוד הבית (לפי website-copy.md + reference/website-mockup.png)
- [ ] Hero — כותרת מימין, `hero-mobile`/`hero-desktop` מ-Cloudinary, CTA.
- [ ] About KAI (סיפור המקור).
- [ ] The Collections — גריד 4 קווים בצבעי הקווים, תמונות `lines/line-*`.
- [ ] How It Works — 8 שלבים + אייקונים.
- [ ] What's Inside the Box — רשימת רכיבים (תמונת flat-lay כשתהיה, בינתיים `boxes/`).
- [ ] Why KAI · Packages (24/48/72 + מחירים, תמונות `packs/pack-*`) · FAQ · Final CTA · Chat teaser.

### שלב 3 — תהליך ההזמנה
- [ ] בורר: קו → Edition → גודל (24/48/72).
- [ ] העלאת 3–5 תמונות (FileReader, תצוגה מקדימה, ולידציה 3–5).
- [ ] 3–5 שאלות דינמיות לפי קו × Edition (`questions.js`).
- [ ] **Preview** — קלף קדמי (תבנית שלך) + צד אחורי + קופסת הקו. אחת התמונות שהועלו בתוך הקלף.
- [ ] טופס פרטי מזמין (שם, מייל, טלפon, למי המתנה).

### שלב 4 — שליחה + לידים
- [ ] Google Sheet + Apps Script Web App (append row + `MailApp` מייל).
- [ ] `submit.js` — POST של כל ה-state (בחירות + תשובות + פרטים; לא הקבצים).
- [ ] מסך Confirmation + קישור Placeholder "להעלאת שאר התמונות".
- [ ] מייל אישור ללקוח (דרך Apps Script) עם אותו קישור.

### שלב 5 — ליטוש והשקה
- [ ] QA מובייל (iOS/Android), מהירות, ניגודיות בשמש.
- [ ] favicon + og-image + מטא לשיתוף.
- [ ] הגהת תוכן עברית.
- [ ] דיפלוי סופי + בדיקת טופס מקצה לקצה.

---

## מה עוד חסר (נכסים)

| פריט | מצב | הערה |
|---|---|---|
| **קלפים** — Card Front (תבנית ריקה), Card Back, Silver/Gold | 🟡 **את יוצרת** | קריטי ל-Preview (שלב 4). כשמוכן → `assets/mockups/cards/` + Cloudinary |
| גופנים | ⬜ | החלטה בשלב 0 |
| `logo.svg` (וקטורי) | ⬜ | ל-Header חד; בינתיים PNG מ-Cloudinary עובד |
| favicon + og-image | ⬜ | שלב 5 |
| flat-lay "מה בקופסה" | ⬜ | Nice-to-have; אפשר להשיק בלי |
| album / unboxing / about | ⬜ | P2, אחרי השקה |
| שאלות מלאות לכל קו × Edition | ⬜ | יש רק דוגמת Family→Trip. צריך לנסח את השאר |
| נוסח מייל אישור | ⬜ | שלב 0 |

## מה כבר מוכן ✅
בריף · נוסחי אתר · פלטת צבעים + tokens.css · לוגו (4 גרסאות) · הדמיות Hero/Boxes/Lines/Packs · הכול ב-Cloudinary · הדמיית עמוד הבית כ-reference · Git.
