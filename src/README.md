# src/ — אתר KAI EDITIONS

אתר סטטי (HTML + CSS + Vanilla JS), Mobile-first, RTL. תמונות מוגשות מ-Cloudinary.

## מבנה

```
src/
├── index.html          עמוד הבית — כל הסקשנים
├── css/
│   ├── tokens.css       משתני עיצוב (מסונכרן עם assets/mockups/brand/tokens.css)
│   └── styles.css       עיצוב מלא
└── js/
    └── main.js          FAQ accordion, גלילה חלקה, שמירת קו נבחר
```

## הרצה מקומית

```
cd src && python -m http.server 5173
# פתחו http://localhost:5173
```

## דיפלוי — Vercel

- `vercel.json` בשורש הריפו מגדיר `outputDirectory: "src"`.
- לחבר את הריפו ל-Vercel, או: `npx vercel --prod` מהשורש.

## מה קיים (עמוד הבית)

Header · Hero · פס אמון · הקולקציות (4 קווים) · איך זה עובד + Experience Loop ·
מה בקופסה · טיפוסי קלפים (Regular/Silver/Gold) · למה KAI · חבילות (24/48/72) · FAQ · Final CTA · Footer

## מה עוד חסר (ראו docs/build-plan.md)

- **תהליך ההזמנה (Flow):** קו → Edition → גודל → 3–5 תמונות → שאלות → Preview → פרטים → שליחה
- **תפיסת לידים:** Google Apps Script → Sheet + מייל
- מסך Confirmation
- גופנים סופיים, favicon, og-image
- אייקוני "איך זה עובד" ייעודיים

## הערות

- כל התמונות: `https://res.cloudinary.com/uyhby16u/image/upload/f_auto,q_auto/kai-editions/...`
  ראו `docs/cloudinary-assets.md`.
- הקישורים "צרו קולקציה" / "בחרו X קלפים" מובילים כרגע ל-`#collections` עד שה-Flow ייבנה.
