# src/ — אתר KAI EDITIONS

אתר סטטי (HTML + CSS + Vanilla JS), Mobile-first, RTL. תמונות מ-Cloudinary.
**מבנה עמוד הבית עוקב אחרי [`assets/mockups/reference/website-mockup.png`](../assets/mockups/reference/website-mockup.png).**

## מבנה

```
src/
├── index.html          עמוד הבית
├── css/
│   ├── tokens.css       משתני עיצוב (מסונכרן עם assets/mockups/brand/tokens.css)
│   └── styles.css       עיצוב מלא
└── js/main.js           תפריט מובייל, גלילה חלקה, שמירת קו נבחר
```

## הרצה מקומית
```
cd src && python -m http.server 5173
# http://localhost:5173
```

## דיפלוי — Vercel
`vercel.json` בשורש הריפו: `outputDirectory: "src"`. לחבר את הריפו ל-Vercel או `npx vercel --prod`.

## סקשנים בעמוד הבית (לפי ה-mockup)

1. Header — לוגו ממורכז + tagline, nav, כפתור "צרו Collection"
2. Hero — "החיים שלכם. עכשיו אפשר לאסוף אותם." + תמונה עם כפתור Play
3. **מה הסיפור שלכם?** — 4 כרטיסי קו (Couple / Kids / Friendship / Family)
4. **חוויה שאוספים** — 4 שלבים: פותחים → מגלים → אוספים → משלימים
5. **לא יודעים מה מחכה בפנים.** — טקסט + 3 קלפי נדירות (Regular / Silver / Gold)
6. **בחרו את גודל ה־Collection שלכם** — 24 / 48 / 72
7. Footer — פס אמון + לוגו

> טרמינולוגיה: "Collection" (לא "קולקציה") — כמו ב-mockup.
> נדירות: 3 טיפוסים (Regular/Silver/Gold) — החלטה של הלקוחה, במקום 4 ב-mockup.

## טקסטים שנוקו מה-mockup

חלק מהמיקרו-קופי ב-mockup היה מטושטש / עם שגיאות (תוצר AI). ניסוחים קרובים לכוונה:
- כרטיסי הקווים, שלבי "חוויה שאוספים", ומשפטי החבילות — לאישור סופי מול הלקוחה.

## מה עוד חסר (ראו docs/build-plan.md)

- **תהליך ההזמנה (Flow)** + **תפיסת לידים** (Google Apps Script) + מסך Confirmation
- דף/סקשן "הסיפור שלנו" ו-"שאלות ותשובות" (יש קישורים ב-nav, עדיין anchors ריקים)
- כפתור Play בהירו — עדיין לא מחובר לווידאו
- גופנים סופיים, favicon, og-image
- סטים של קלפים ל-Family / Friendship / Kids
