# KAI EDITIONS — תוכנית בנייה

## החלטות (02/09/2026)

| נושא | החלטה |
|---|---|
| **סטאק** | **Next.js** (App Router, TypeScript) + CSS Modules + CSS variables (מ-`tokens`). גופנים דרך `next/font`. תמונות דרך `next-cloudinary`. |
| **דיפלוי** | Vercel (root = שורש הריפו). |
| **תהליך** | **מודול אחר מודול** — בונים → מאשרים → הבא. |
| **עיצוב** | לפי [design-language.md](design-language.md) (לאשר תוך כדי M0–M1). |
| **Preview** | פֶּר-קו. Couple מלא עכשיו. Family/Friendship/Kids → "ההדמיה תישלח במייל" עד שהנכסים מוכנים (הלקוחה מייצרת במקביל). |
| **לידים** | POST ל-Google Apps Script Web App → שורה ב-Sheet + מייל. (מודול M24.) |
| **תמונות לקוח** | תצוגה מקומית בלבד ב-MVP (בריף §5.1). העלאה מלאה = Placeholder (M23). |

---

## מבנה הפרויקט

```
/                     שורש הריפו = אפליקציית Next
├── app/
│   ├── layout.tsx        RTL, גופנים, <html lang=he dir=rtl>
│   ├── page.tsx          עמוד הבית (מרכיב את מודולי home/)
│   ├── globals.css       tokens + base
│   └── order/page.tsx    ה-Flow
├── components/
│   ├── site/             Header, Footer
│   ├── ui/               Button, Chip, Sleeve, Pin, Rule
│   ├── home/             Hero, About, Collections, HowItWorks, ExperienceLoop,
│   │                     WhatsInside, CardTiers, WhyKai, Packages, Faq, FinalCta, ChatTeaser
│   └── flow/             שלבי ה-Flow
├── lib/
│   ├── cloudinary.ts     בניית URLs / <Img>
│   ├── content.ts        כל הקופי (מ-website-copy.md), מובנה
│   └── lines.ts          נתוני הקווים (צבע, שם, slug, edition)
├── docs/  assets/        ללא שינוי
└── _archive/static-v1/   האתר הסטטי הישן
```

---

## מודולים — סדר בנייה ואישור

### עמוד הבית
- [ ] **M0 — תשתית** · Next scaffold · tokens + גופנים · `layout` · **Header** + **Footer** · רכיבי UI (Button, Chip, Sleeve, Pin, Rule)
- [ ] **M1 — Hero** (§1)
- [ ] **M2 — הסיפור שלנו / About** (§2)
- [ ] **M3 — The Collections** — 4 קווים → פותח Flow (§3)
- [ ] **M4 — איך זה עובד** (§4)
- [ ] **M5 — חוויה שאוספים / Experience Loop**
- [ ] **M6 — מה יש בקופסה / What's Inside** (§5)
- [ ] **M7 — טיפוסי הקלפים** — Regular / Silver / Gold (§5)
- [ ] **M8 — למה KAI** (§6)
- [ ] **M9 — גדלים ומחירים / Packages** (§7)
- [ ] **M10 — FAQ** (§8)
- [ ] **M11 — CTA סופי** (§9)
- [ ] **M12 — "לא בטוחים?" / Chat teaser** (§10)
- [ ] **M13 — הרכבת עמוד הבית + QA מובייל + דיפלוי ראשון**

### תהליך ההזמנה (Flow)
- [ ] **M14 — מעטפת Flow** · progress · הקודם/הבא · state (`localStorage`) · יציאה
- [ ] **M15 — בחירת קו**
- [ ] **M16 — בחירת Edition**
- [ ] **M17 — בחירת גודל** (24/48/72 + מחיר)
- [ ] **M18 — העלאת 3–5 תמונות** (תצוגה מקומית, ולידציה)
- [ ] **M19 — שאלות דינמיות** (קו × Edition)
- [ ] **M20 — Preview** (Couple מלא · השאר "יישלח במייל")
- [ ] **M21 — פרטי מזמין**
- [ ] **M22 — סקירה + שליחה**

### אחרי שליחה + השקה
- [ ] **M23 — מסך Confirmation** + Placeholder "העלאת שאר התמונות"
- [ ] **M24 — חיבור לידים** — Google Sheet + Apps Script + מיילים (אישור ללקוח, התראה לבעלים)
- [ ] **M25 — ליטוש והשקה** — favicon · og-image · מדיניות פרטיות · 404 · QA · דיפלוי סופי

---

## חוסמים פתוחים (לא עוצרים את M0–M8)

| חוסם | מודול חסום | מצב |
|---|---|---|
| אישור מחירים סופיים | M9 | ⏳ |
| קלפי Family/Friendship/Kids | M20 (Preview מלא) | ⏳ הלקוחה מייצרת |
| נוסח שאלות ל-20 צירופים | M19 | ⏳ יש בסיס ב-site-modules §C5 |
| נוסח מיילים | M24 | ⏳ |
| Google Sheet + Apps Script | M24 | ⏳ |
| החלטת "זמן אספקה" ב-FAQ | M10 | ⏳ הבריף אומר "אין להמציא" |
