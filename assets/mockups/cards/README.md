# assets/mockups/cards — עיצובי הקלפים

עיצובים שהלקוחה יוצרת. מבנה: תיקייה לכל קו. כרגע קיים **Couple** בלבד.

## `couple/`

| קובץ | מה זה | מידות | רקע |
|---|---|---|---|
| `back-regular.png` | גב קלף — Regular (בורדו) | 1122×1402 | לבן אטום |
| `back-silver.png` | גב קלף — Silver (כסף) | 1123×1401 | לבן אטום |
| `back-gold.png` | גב קלף — Gold (זהב) | 1024×1536 | **שקוף** |
| `front-regular-example.png` | קלף קדמי עם תמונת דוגמה + Badge REGULAR | 1122×1402 | לבן אטום |
| `front-silver-example.png` | קלף קדמי עם דוגמה + Badge SILVER | 1122×1402 | לבן אטום |
| `front-gold-example.png` | קלף קדמי עם דוגמה + Badge GOLD | 1121×1403 | לבן אטום |
| `template-regular.png` | תבנית קדמית — אזור תמונה **שקוף** | 1122×1402 | ✅ מנורמל |
| `template-silver.png` | תבנית קדמית — אזור תמונה **שקוף** | 1122×1402 | ✅ מנורמל (נבנתה מ-front-silver-example) |
| `template-gold.png` | תבנית קדמית — אזור תמונה **שקוף** | 1122×1402 | ✅ מנורמל |
| `preview-geometry.json` | מיקום חלון התמונה (px + fractions) | — | לשימוש ה-Preview |
| `_original/` | 3 התבניות לפני הנרמול | — | גיבוי |

**מבנה הקלף הקדמי:** שורה עליונה `xx/48` · כותרת · Badge טיפוס → תמונה במסגרת → פס תחתון: לוגו KAI + "KAI COUPLE EDITION".

## נרמול שבוצע ✅

3 התבניות עכשיו **1122×1402, עם אזור תמונה שקוף באותו מיקום בדיוק**:
חלון התמונה ≈ `x 0.194, y 0.166, w 0.624, h 0.531` (ראו `preview-geometry.json`).
ל-Preview: מציבים את תמונת הלקוח **מאחורי** ה-PNG בחלון הזה (`object-fit: cover`).

## עדיין פתוח (לא חוסם MVP)

1. **טקסט צרוב:** "OUR FIRST YEAR" ו-"23/48" צבועים בתבנית. ל-Preview דינמי מלא צריך שכבת טקסט נפרדת — לשלב ההמחשה אפשר לחיות עם זה.
2. **רק Couple** — חסר Family / Friendship / Kids.
3. **גב:** `back-regular/silver` לבן אטום, `back-gold` שקוף — לא קריטי.
