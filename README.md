# KAI EDITIONS — אתר ראשוני (MVP)

**Your life, collected.**
KAI EDITIONS הופך תמונות וזיכרונות אישיים לחוויית **Collecting** ו־**Unboxing**.
חוויית הליבה: **OPEN → DISCOVER → COLLECT → COMPLETE**

מטרת השלב: להמחיש את הרעיון, לבדוק ביקוש ולקבל הזמנות ראשונות — לא מערכת Production מלאה.

---

## מבנה התיקייה — איפה כל דבר

```
Kai Edition/
├── README.md              ← המסמך הזה: סקירה + מפת הפרויקט
├── .gitignore
│
├── docs/                  ← כל מסמכי המקור והתוכן
│   ├── הזמנת-עבודה.md      ← מקור האמת: הבריף המלא מהלקוח (Scope, קווים, Flow, מחירים)
│   ├── website-copy.md    ← טיוטת כל נוסחי האתר (Hero, About, מוצר, Flow...)
│   ├── design-system.md  ← מערכת עיצוב: פלטת צבעים מאושרת + כללי שימוש
│   ├── image-brief.md    ← Shot List: אילו הדמיות צריך ליצור
│   ├── cloudinary-assets.md ← כל התמונות ב-Cloudinary + איך בונים URL
│   ├── build-plan.md     ← שלבי בניית האתר, סטאק, מה חסר
│   ├── site-modules.md   ← ★ מפרט המודולים המלא (עמוד הבית + Flow + אחרי שליחה)
│   └── page-blocks.md    ← רקע: בלוקים של עמוד הבית (הוחלף ע"י site-modules.md)
│
├── assets/                ← נכסים חזותיים
│   └── mockups/           ← הדמיות (אין עדיין צילומי מוצר אמיתיים)
│       ├── boxes/         ← הדמיות קופסאות, אחת לכל קו
│       │   ├── kai-couples.png     (Couple)
│       │   ├── kai-family.png      (Family)
│       │   ├── kai-friendship.png  (Friendship)
│       │   └── kai-kids.png        (Kids)
│       └── brand/         ← לוגו + פלטה + tokens.css (ראו brand/README.md)
│
└── src/                   ← קוד האתר (ייבנה בהמשך)
```

---

## סטטוס נוכחי

| תחום | מצב |
|---|---|
| הזמנת עבודה / בריף | ✅ מתועד ב־`docs/הזמנת-עבודה.md` |
| נוסחי אתר (copy) | 🟡 טיוטה ב־`docs/website-copy.md` — לליטוש |
| הדמיות: Boxes, Hero, Lines, Packs | ✅ ב־`assets/mockups/` + הועלו ל-Cloudinary (`kai-editions/`) |
| הדמיות נוספות (Card Front/Back, Silver/Gold, Album, Unboxing, Inside flat-lay, Preview) | ⬜ חסר |
| Cloudinary — שכבת הגשה | ✅ 18 נכסים, ראו `docs/cloudinary-assets.md` |
| עיצוב — פלטת צבעים | ✅ אושרה ב־`docs/design-system.md` + `brand/tokens.css` |
| עיצוב — טיפוגרפיה / מרווחים / רכיבים | ⬜ טרם הוגדר |
| Wireframes / מיפוי מסכים | ⬜ טרם |
| קוד האתר (`src/`) | ⬜ טרם התחיל |
| שאלות ה־Flow לפי קו × Edition | ⬜ טרם נוסחו במלואן |
| שמירת לידים (Google Sheets + מייל) | ⬜ כיוון בלבד, לא הוחלט טכנית |

---

## מוצר בקצרה

- Collection אישי של **קלפים** מבוססי תמונות + סיפור. התמונות המקוריות **ללא שינוי**; הפרסונליזציה בעיצוב הקלף.
- הלקוח **לא מעצב** — שולח 3–5 תמונות ועונה 3–5 שאלות, ואנחנו בונים ומערבבים את ה־Collection.

### גדלים ומחירים
| גודל | מחיר |
|---|---|
| 24 קלפים | 249 ₪ |
| 48 קלפים | 299 ₪ |
| 72 קלפים | 349 ₪ |

### קווים ו־Editions
- **קווים:** Couple · Kids · Friendship · Family
- **Editions:** Trip · Birthday · Year in Memories · Surprise · Other

### Flow ההזמנה
```
קו → Edition → גודל (24/48/72) → 3–5 תמונות → 3–5 שאלות
   → Preview → פרטי מזמין → שליחה → Confirmation + מייל + קישור להמשך העלאה
```

> הפירוט המלא, כולל מה מחוץ ל־Scope — ב־[docs/הזמנת-עבודה.md](docs/הזמנת-עבודה.md).

---

## ניהול גרסאות

הפרויקט מנוהל ב־Git מתוך תיקייה זו. לאחר כל שינוי משמעותי נעשה `commit` עם הודעה שמסבירה מה השתנה.
