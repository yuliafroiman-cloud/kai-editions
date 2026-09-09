# KAI EDITIONS — אתר ראשוני (MVP)

**Your life, collected.**
KAI EDITIONS הופך תמונות וזיכרונות אישיים לקולקציית קלפים פיזית ולחוויית פתיחה (Unboxing).
חוויית הליבה: **OPEN → DISCOVER → COLLECT → COMPLETE**

פרויקט לימודי (שיעורי בית). מטרת השלב: להמחיש את הרעיון, לבדוק ביקוש ולאסוף פניות ראשונות — לא מערכת Production מלאה.

🔗 **דמו חי:** https://kai-editions.vercel.app

---

## סטאק

| | |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript) |
| עיצוב | CSS Modules + `next/font` (Frank Ruhl Libre · Cormorant · Heebo) |
| מדיה | Cloudinary (`res.cloudinary.com/uyhby16u/...`) |
| Deploy | Vercel — build אוטומטי על push ל-`main` |
| צ'אט + לידים | n8n (webhooks נעולים לדומיין) |

האתר RTL בעברית.

---

## הרצה מקומית

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

משתני סביבה — ראו `.env.example`. כולם `NEXT_PUBLIC_*` (רצים בדפדפן), אין סודות בריפו.

---

## מבנה

```
app/                 ← App Router: עמוד הבית, /about, /order
components/
  home/              ← מודולי עמוד הבית (Hero, Collections, HowItWorks, WhatsInside,
                       CardReveal, Packages, WhyKai, Contact, Faq, TrustBar)
  chat/              ← ווידג'ט הצ'אט (KaiChat) — מדבר ישירות עם n8n
  site/              ← Header, Footer
  ui/                ← Button, Chip, StarDivider, Pin
lib/                 ← cloudinary.ts (בניית URLs) · lines.ts (4 הקווים)
assets/mockups/      ← הדמיות ותמונות מקור
```

מסמכי העבודה הפנימיים (בריף, נוסחים, מפרטי מודולים, הגדרת סוכן השירות) נשמרים מחוץ לריפו.

---

## המוצר בקצרה

- קולקציית **קלפים** אישית מבוססת תמונות + סיפור. התמונות המקוריות ללא שינוי — הפרסונליזציה בעיצוב הקלף.
- הלקוח לא מעצב: שולח תמונות ועונה על כמה שאלות, ואנחנו בונים ומערבבים את הקולקציה.
- **קווים:** Couple · Family · Friendship · Kids
- **Editions:** Trip · Birthday · Year in Memories · Surprise · Other
- **גדלים:** 24 קלפים / 249 ₪ · 48 / 299 ₪ · 72 / 349 ₪
- **נדירות:** Regular · Silver · Gold — מסתתרים בחפיסות ומתגלים בפתיחה.

### Flow ההזמנה

```
קו → Edition → גודל → העלאת תמונות → כמה שאלות
   → Preview → פרטי מזמין → שליחה → אישור + מייל + קישור להמשך העלאה
```

---

## ניהול גרסאות

מנוהל ב-Git. לאחר כל שינוי משמעותי נעשה commit עם הודעה שמסבירה מה השתנה.
