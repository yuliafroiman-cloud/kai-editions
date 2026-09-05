# KAI EDITIONS — נכסי Cloudinary

כל ההדמיות והלוגו הועלו ל-Cloudinary לשימוש באתר.

| | |
|---|---|
| Cloud name | `uyhby16u` |
| חשבון | yulia.froiman@gmail.com (Free plan) |
| Base URL | `https://res.cloudinary.com/uyhby16u/image/upload/` |
| תיקיית שורש | `kai-editions/` |
| Tags | `kai-editions` + תת-תגית (`hero`, `boxes`, `lines`, `packs`, `brand`) + שם קו |

## איך לבנות URL

```
https://res.cloudinary.com/uyhby16u/image/upload/f_auto,q_auto/<public_id>
```

- `f_auto,q_auto` — פורמט ומשקל אוטומטיים (WebP/AVIF). **להשתמש תמיד.**
- רוחב רספונסיבי: הוסיפו `w_800` / `w_1200` וכו', או `c_fill,g_auto` לחיתוך.
- דוגמה: `.../image/upload/f_auto,q_auto,w_1200/kai-editions/hero/hero-desktop`

## מפת הנכסים

### Hero
| public_id | מידות | שימוש |
|---|---|---|
| `kai-editions/hero/hero-desktop` | 1672×941 | Hero דסקטופ (שטח ריק משמאל) |
| `kai-editions/hero/hero-mobile` | 941×1672 | Hero מובייל (portrait) |

### Boxes — קולאז' Key-art לכל קו
| public_id | מידות |
|---|---|
| `kai-editions/boxes/kai-couples` | 1536×1024 |
| `kai-editions/boxes/kai-family` | 1536×1024 |
| `kai-editions/boxes/kai-friendship` | 1448×1086 |
| `kai-editions/boxes/kai-kids` | 1536×1024 |

### Lines — לייף-סטייל ל-The Collections
| public_id | מידות |
|---|---|
| `kai-editions/lines/line-couple` | 1537×1023 |
| `kai-editions/lines/line-family` | 1122×1402 |
| `kai-editions/lines/line-friendship` | 1024×1536 |
| `kai-editions/lines/line-kids` | 1536×1024 |

### Packs — חפיסות + קלף לכל קו
| public_id | מידות |
|---|---|
| `kai-editions/packs/pack-couple` | 1122×1402 |
| `kai-editions/packs/pack-family` | 1121×1403 |
| `kai-editions/packs/pack-friendship` | 1122×1402 |
| `kai-editions/packs/pack-kids` | 1122×1402 |

### Cards — עיצובי קלפים לכל קו

**Couple** — 3 טיפוסים (Regular / Silver / Gold):
| public_id | מה |
|---|---|
| `kai-editions/cards/couple/front-{regular,silver,gold}-example` | קלף קדמי **עם תמונת דוגמה** (רקע שקוף) |
| `kai-editions/cards/couple/template-{regular,silver,gold}` | מסגרת קדמית עם **חלון תמונה שקוף** (ל-Preview) — 1122×1402 |
| `kai-editions/cards/couple/back-{regular,silver,gold}` | גב הקלף |

**Kids · Friendship** — סגנון אחד (בלי טיפוסי נדירות), הועלו 06/09:
| public_id | מה |
|---|---|
| `kai-editions/cards/kids/template` · `kai-editions/cards/friendship/template` | מסגרת קדמית עם חלון תמונה שקוף (Kids: חולץ מרקע צרוב; Friendship: הגיע נקי) |
| `kai-editions/cards/kids/back` · `kai-editions/cards/friendship/back` | גב הקלף (רקע שקוף) |
> חסר ל-Kids/Friendship: `front-*-example` (מסגרת עם תמונה בפנים). **Family** — הלקוחה תוסיף.

### Brand — לוגו
| public_id | מידות | הערה |
|---|---|---|
| `kai-editions/brand/kai-logo-black` | 1671×941 | שקוף, לרקע בהיר |
| `kai-editions/brand/kai-logo-black-tagline` | 1536×1024 | שקוף + tagline |
| `kai-editions/brand/kai-logo-gold` | 1672×941 | שקוף, לרקע כהה |
| `kai-editions/brand/kai-logo-gold-tagline` | 1536×1024 | שקוף + tagline |

### Collections — קופסה+חפיסה+פולארויד, לכל קו (מודול B4)
| public_id | מה | סטטוס |
|---|---|---|
| `kai-editions/collections/couple-box` | קופסה סגורה + חפיסה + פולארויד, וילון כהה+ורד | ✅ הועלה 05/09 |
| `kai-editions/collections/family-box` | קופסה + חפיסה + פולארויד, רקע שקוף | ✅ הועלה 05/09 |
| `kai-editions/collections/friendship-box` | קופסה + חפיסה + פולארויד, וילון כהה+זהב | ✅ הועלה 05/09 |
| `kai-editions/collections/kids-box` | קופסה + חפיסה + פולארויד, רקע שקוף | ✅ הועלה 05/09 |

גם `*-open.png` (פלאט-ליי עשיר יותר: קופסה פתוחה + תוכן + הפולארויד) נשמר
ב-Git לכל קו לשימוש עתידי (לדוגמה בסקשן "מה יש בקופסה") — לא הועלה, לא בשימוש כרגע.

### How It Works — 3 תמונות תומכות (מודול M5 / B5)
| public_id | מה | סטטוס |
|---|---|---|
| `kai-editions/how/upload` | יד עם טלפון — מסך "העלאת תמונות" | ✅ הועלה 06/09 |
| `kai-editions/how/preview` | יד עם טלפון — הדמיית הקלף "OUR FIRST YEAR" | ✅ הועלה 06/09 (נחתך מהאנוטציה) |
| `kai-editions/how/produce` | קו ייצור קלפים + קופסה פתוחה עם "Your life, collected." | ✅ הועלה 06/09 |
מקור: 3 קבצי ChatGPT מ-06/09 (הלקוחה). נשמרים ב-Git תחת `assets/mockups/how/`.

**הערה על עקביות:** `family-box` ו-`kids-box` הגיעו עם רקע שקוף אמיתי (מרחפים);
`friendship-box` ו-`couple-box` הגיעו עם וילון כהה עגול צרוב לתוך הפיקסלים
(לא שקיפות אמיתית, אבל תקין כתמונה שלמה). כמו כן `Couple_open_box.png`
המקורי הגיע עם דמוי-שקיפות מזויף (תבנית שח-מט צרובה, לא ערוץ אלפא אמיתי) —
לא ניתן לשימוש כפי שהוא.

## עדיין לא הועלה (כשייווצר — ראו image-brief.md)

`cards/` (Card Front/Back, Silver/Gold) · `inside/` (flat-lay) · `album/` · `unboxing/` · `ui/` (Preview) · `about/` · `brand/` (logo.svg, favicon, og-image)

## איך מעלים עוד (workflow)

1. לשמור את הקובץ בתיקייה המתאימה תחת `assets/mockups/`.
2. להעלות ל-Cloudinary לאותה תיקיית `kai-editions/<sub>/` עם `public_id` תואם.
3. לעדכן את הטבלה כאן.

> המקור המלא (קבצים) נשמר ב-Git תחת `assets/mockups/`. Cloudinary הוא שכבת ההגשה לאתר.
