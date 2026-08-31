# assets/mockups — הדמיות KAI EDITIONS

מקור התכנון: [`docs/image-brief.md`](../../docs/image-brief.md). כל ההדמיות ל-MVP (אין צילומי מוצר אמיתיים).

## מה קיים

| תיקייה | קבצים | שימוש באתר |
|---|---|---|
| `hero/` | `hero-desktop.png` (1672×941, שטח ריק משמאל לכותרת), `hero-mobile.png` (941×1672, portrait) | Hero — סעיף 1 |
| `boxes/` | `kai-couples/family/friendship/kids.png` | קולאז' Key-art לכל קו — מדריך סגנון + מחצבה לחיתוכים |
| `lines/` | `line-couple/family/friendship/kids.png` — לייף-סטייל, אנשים עם הקולקציה | The Collections — סעיף 3 |
| `packs/` | `pack-couple/family/friendship/kids.png` — 3 חפיסות + קלף מבצבץ, לכל קו | What's Inside / How It Works |
| `brand/` | לוגו (4 גרסאות) + `palette.md` + `tokens.css` | Header, פוטר, מיתוג |
| `reference/` | `website-mockup.png` — הדמיית עמוד הבית המלא | מדריך פריסה לבנייה (לא נכס אתר) |

## מה עוד חסר (ראו image-brief)

- `cards/` — תבנית קלף ריקה (Card Front) + Card Back + Silver/Gold  ← **P0, קריטי ל-Preview**
- `inside/` — flat-lay של כל רכיבי הקופסה
- `album/` — אלבום פתוח, Checklist
- `unboxing/` — ידיים פותחות חפיסה
- `ui/` — מסך Preview מורכב
- `about/` — תמונת אווירה לסיפור המקור
- `brand/` — `logo.svg`, `favicon`, `og-image`

## ⚠️ אי-התאמות שצריך להחליט לגביהן

1. **נדירות:** בהדמיות הקלפים כתוב REGULAR / GOLD / SPECIAL / LEGENDARY, ובקופי ([website-copy.md](../../docs/website-copy.md)) כתוב "Silver & Gold". צריך להחליט על מערכת אחת.
2. **`lines/line-kids.png`** — הקופסה בתמונה מסומנת "FAMILY COLLECTION" במקום "KIDS COLLECTION".
3. **hero/** — הקופסה בשתי תמונות ה-Hero היא Family Collection ספציפית. תקין ל-Hero כללי, אבל לשים לב.
4. **מספור קלפים** — חלק מההדמיות "xx/48", אחרות "xx/50". צריך לאחד לפי הגדלים בפועל (24/48/72).
5. **פרצופים** — כל הדמויות בתמונות הן דמויות שנוצרו. תקין לשלב ההמחשה; לתמונות בתוך קלפי לקוח יש להשתמש ב-Placeholder ניטרלי (ראו image-brief).

## הערה טכנית

כל הקבצים כרגע RGB עם רקע בהיר אטום (בלי שקיפות). לקבצי `packs/` שווה בהמשך חיתוך רקע לגרסה שקופה, או להציב על כרטיס לבן באתר.
