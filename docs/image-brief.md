# KAI EDITIONS — בריף תמונות לאתר (Shot List)

מסמך זה עובר על נוסחי האתר ([website-copy.md](website-copy.md)) וקובע **אילו תמונות / הדמיות צריך ליצור**, לפי סדר עדיפויות.

כרגע יש: 4 הדמיות קופסאות (`assets/mockups/boxes/kai-couples|family|friendship|kids.png`).

---

## עקרונות רוחביים (חלים על כל התמונות)

- **סגנון אחיד:** אותו סוג רנדר / תאורה / זווית מצלמה / רקע לכל הסט. פרימיום, נקי, רגשי, כיפי.
- **רקע:** ניטרלי ובהיר (אוף-וייט / בז' / אפור חם). עדיף גם גרסה עם **רקע שקוף (PNG)** לקופסאות ולקלפים, לחיתוך חופשי באתר.
- **Mobile-first:** התמונה המרכזית חייבת לעבוד טוב **לאורך** (portrait) בטלפון.
- **התמונות של הלקוח נשארות מקוריות:** בכל מקום שבו מוצג "קלף עם תמונה", השתמשו ב־**תמונת Placeholder ניטרלית** (נוף / חפצים / צללית) — לא פרצופים אמיתיים, ולא תמונה "משופרת AI".
- **שפה גרפית לכל קו:** לכל אחד מ־4 הקווים (Couple / Kids / Friendship / Family) פלטת צבע ומוטיבים קבועים משלו — שמרו על עקביות בין הקופסה, הקלפים והאריזה של אותו קו.
- **בלי מותגים מסחריים:** אין דמיון חזותי ל־Pokémon / Minecraft / Roblox / מותגי קלפים מסחריים. עיצוב קלף אספנות **גנרי ומקורי**.
- **פורמט מסירה:** PNG, רזולוציה כפולה (2x), שם קובץ ב־kebab-case.

---

## תיקיות יעד

```
assets/mockups/
├── boxes/       קופסאות (יש 4)
├── lines/       "עולם" לכל קו — קופסה + קלפים + אריזה יחד
├── cards/       תבניות קלף: Front (ריק), Back, Silver, Gold
├── packs/       חפיסות סגורות, בודדות וקבוצות
├── album/       אלבום פתוח/סגור, Checklist
├── inside/      מה יש בקופסה — flat-lay של כל הרכיבים
├── unboxing/    רצף פתיחה / ידיים פותחות חפיסה
├── ui/          מסכי הדמיה לתוך ה-Flow (Preview)
└── brand/       לוגו, favicon, תמונת OG לשיתוף
```

---

## P0 — קריטי (בלי זה אין אתר / אין Flow)

| # | קובץ מוצע | איפה באתר | מה בפריים | יחס |
|---|---|---|---|---|
| 1 | `hero/hero-main.png` | Hero (סעיף 1) | קופסת KAI פתוחה עם אלבום + כמה חפיסות סגורות + מניפת 3–4 קלפים. תאורה חמה, תחושת "רגע לפני פתיחה". | 4:5 (portrait) + חיתוך 16:9 לדסקטופ |
| 2 | `cards/card-front-blank.png` | How It Works, Why KAI, ו־**Preview ב-Flow** | תבנית קלף אספנות ריקה: מסגרת, אזור תמונה ריק (Placeholder), מקום לשם / מספר קלף / טקסט קצר / Stats או Rating. | 3:4 (יחס קלף) |
| 3 | `cards/card-back.png` | Preview ב-Flow, "What's Inside" | הצד האחורי של הקלף — לוגו KAI, דוגמה גרפית, מקום למספר סדרתי. | 3:4 |
| 4 | 4× `boxes/*` | Collections, Preview | ✅ **קיים** — הדמיות קופסה לכל קו | — |
| 5 | `ui/preview-card.png` + `ui/preview-box.png` | מסך Preview בסוף ההזמנה | הרכבה: קלף אישי מקדימה + צד אחורי + הדמיית קופסה, כפי שיוצג ללקוח. אפשר להפיק מ־#2/#3/#4. | portrait |

---

## P1 — חשוב (סעיפי המכר המרכזיים)

| # | קובץ מוצע | איפה באתר | מה בפריים | יחס |
|---|---|---|---|---|
| 6 | 4× `lines/line-couple.png` `line-kids.png` `line-friendship.png` `line-family.png` | The Collections (סעיף 3) | לכל קו: הקופסה שלו + מניפת 3 קלפים בשפה הגרפית של אותו קו + חפיסה אחת. **אותו קיטרוג בדיוק ל-4** — משתנה רק העולם הצבעוני. | 1:1 או 4:5 |
| 7 | `inside/box-contents-flatlay.png` | What's Inside the Box (סעיף 5) | Flat-lay מסודר (knolling) של כל הרכיבים: קופסה, אלבום, Checklist, חפיסות, קלף Silver + Gold, כרטיס ברכה, דף מדבקות, "הפתעה קטנה". | 1:1 |
| 8 | 3× `packs/package-starter.png` `package-popular.png` `package-premium.png` | Packages (סעיף 7) | לכל חבילה: הקופסה + מספר החפיסות התואם (4 / 8 / 12) + אלבום. פריסה זהה בין השלוש. | 4:5 |
| 9 | `cards/card-silver.png` + `cards/card-gold.png` | What's Inside, "מה מבדיל את KAI" | שני קלפים מיוחדים — אותה תבנית כמו #2 עם גימור כסף / זהב. | 3:4 |
| 10 | `unboxing/unboxing-hands.png` | Why KAI (סעיף 6) / Final CTA | ידיים פותחות חפיסה סגורה, קלף מבצבץ. רגשי, קרוב. בלי פרצוף. | 4:5 |

---

## P2 — משלים (אפשר בגל שני)

| # | קובץ מוצע | איפה באתר | מה בפריים |
|---|---|---|---|
| 11 | `album/album-open.png` | What's Inside | אלבום פתוח עם קלפים בשקיות, כמה משבצות ריקות. |
| 12 | `album/checklist.png` | What's Inside | דף Checklist ממוספר (הדמיה, לא חייב 72 שורות אמיתיות). |
| 13 | `packs/pack-single.png` | How It Works, כללי | חפיסה סגורה אחת, רקע שקוף. |
| 14 | `unboxing/unboxing-sequence.png` | Why KAI / About | 3 פריימים: קופסה סגורה → חפיסה נפתחת → קלפים מסודרים באלבום. |
| 15 | `about/about-origin.png` | About KAI (סעיף 2) | אווירה: קופסת KAI במהדורת "Trip" על שולחן עם חפצי נסיעה (מפה, כרטיס רכבת גנרי). מרמז על סיפור המקור בלי פרצופים. |
| 16 | `ui/step-icons/` (סט) | How It Works (8 שלבים) | סט אייקוני קו אחידים ל-8 השלבים (בחירת קולקציה, העלאת תמונות, קונספט, השלמה, מעורבות, אותנטיות, ייצור, פתיחה). וקטור/SVG. |
| 17 | `brand/kai-assistant.png` | Chat / Personal Assistance (סעיף 10) | אווטאר / איור קטן ל"KAI" כעוזר. פשוט, ידידותי. |
| 18 | `brand/og-image.png` | שיתוף בוואטסאפ / רשתות | תמונת OG 1200×630 — קופסה + לוגו + הטאגליין "Your life, collected." |
| 19 | `brand/logo.svg` + `brand/favicon.png` | Header / טאב הדפדפן | לוגו KAI EDITIONS בגרסאות בהירה/כהה + favicon. |

---

## מה **לא** צריך לייצר

- אין צורך בתמונות מוצר אמיתיות (צילומי סטודיו) — הכול הדמיות בשלב זה.
- אין צורך בהדמיה נפרדת לכל 20+ עיצובי קלף — מספיקה **תבנית אחת** + וריאציית Silver/Gold + 4 העולמות של הקווים.
- אין צורך ב-96 קלפים / חבילה רביעית.
- אין צורך בהדמיות משלוח, חבילות דואר, זמני אספקה.
- אין צורך בקופסה "אישית" לכל לקוח — עיצוב אריזה קבוע לכל קו.

---

## תבנית פרומפט מומלצת (לכלי יצירת תמונות)

> "Premium product render of a collectible memory card box set, [שם הקו + פלטת צבע], soft studio lighting, off-white seamless background, 45° camera angle, matte paper packaging, sealed foil card packs, a collector album, generic original card design (no existing card-game branding), photo placeholder area on the card, clean and emotional, high detail, [portrait 4:5 / square]."

שמרו את אותם ערכי תאורה, רקע וזווית בכל הפרומפטים כדי שהסט ייראה אחיד.
