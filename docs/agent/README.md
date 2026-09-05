# KAI EDITIONS — סוכן שירות לגולשים (KAI Assistant)

סוכן צ'אט שיושב באתר KAI ועוזר לגולש: להבין את המוצר, לבחור קולקציה וגודל, לדעת אילו תמונות להעלות, לנסח ברכה אישית, ולחדד את הסיפור שמאחורי הקופסה. כשמזוהה כוונת רכישה — הסוכן אוסף ליד.

> מקור התפקיד: [../website-copy.md](../website-copy.md) §10 ("Chat / Personal Assistance") + [../site-modules.md](../site-modules.md) מודול **B13**.

---

## סטטוס

| שלב | מצב |
|---|---|
| חבילת תוכן (`docs/agent/`) | 🟡 טיוטה — לאישור |
| Google Sheet לידים | ⬜ להקים |
| workflow ב-n8n | ⬜ להקים אחרי אישור התוכן |
| הטמעה באתר (widget) | ⬜ שלב אחרון, אחרי שהאתר עלה |
| חיבור וואטסאפ | ⬜ שלב 2 |

---

## מפת הקבצים

| קובץ | מה יש בו | לאן זה נכנס ב-n8n |
|---|---|---|
| [system-prompt.md](system-prompt.md) | פרסונה, טון, כללי אורך, כללי הסלמה | `System Message` של ה-AI Agent |
| [knowledge-base.md](knowledge-base.md) | כל עובדות המוצר, תמציתי | מוזרק לתוך ה-System Message |
| [faq.md](faq.md) | 9 שאלות ותשובות (verbatim) + וריאציות | מוזרק לתוך ה-System Message |
| [recommendation-guide.md](recommendation-guide.md) | עץ החלטה קו × Edition × גודל | מוזרק לתוך ה-System Message |
| [greeting-writer.md](greeting-writer.md) | הנחיות + דוגמאות לניסוח ברכה | מוזרק לתוך ה-System Message |
| [guardrails.md](guardrails.md) | מותר / אסור | מוזרק לתוך ה-System Message |
| [lead-and-handoff.md](lead-and-handoff.md) | מתי לאסוף ליד, שדות, מבנה Sheet, נוסח מיילים | כלי `save_lead` + נודות Gmail |
| [test-questions.md](test-questions.md) | ~32 שאלות בדיקה + תשובה מצופה | בדיקת קבלה ידנית |
| **[system-message.md](system-message.md)** | ★ כל קבצי הידע מאוחדים לבלוק אחד — מוכן להדבקה | שדה `System Message` של ה-AI Agent |
| **[n8n-build-guide.md](n8n-build-guide.md)** | ★ מדריך בנייה צעד-אחר-צעד ב-n8n | הבנייה בפועל |

> ל-MVP: כל קבצי הידע מאוחדים ל-[system-message.md](system-message.md) ומודבקים כבלוק אחד ל-System Message של ה-AI Agent. אין RAG / Vector store בשלב הזה — הידע קטן ונכנס בשלמותו.
> אם עורכים קובץ ידע — לעדכן גם את system-message.md.

---

## ארכיטקטורת n8n (שלב 1)

```
Webhook  POST /webhook/kai-chat   body: { message, sessionId }
  │
  ▼
KAI Assistant  (@n8n/n8n-nodes-langchain.agent)
  ├─ Model:   OpenRouter → anthropic/claude-sonnet-4.6   (temp 0.4, maxTokens ~300)
  ├─ Memory:  Buffer Window, sessionKey = {{ body.sessionId }}, contextWindowLength 12
  └─ Tool:    Save Lead  →  Google Sheets (append)  +  מייל התראה ליוליה  +  מייל תודה ללקוח
  │
  ▼
Respond to Webhook   json: { "reply": {{ $json.output }} }
```

מבוסס על הדפוס הקיים **"Clinic Ella - Chat Assistant"** (`PPooJ4otbEeTDuqW`) ו-**"Clinic Ella - Lead Capture"** (`Z7khuG2zfu65ofKU`).

---

## החלטות שננעלו

| נושא | שלב 1 | שלב 2 |
|---|---|---|
| מודל | OpenRouter / `anthropic/claude-sonnet-4.6` | — |
| לידים | Google Sheet חדש ("KAI EDITIONS — לידים מהצ'אט") + מייל ליוליה | חיבור וואטסאפ |
| מענה אנושי חי | אין. הסוכן אוסף ליד ומבטיח חזרה | וואטסאפ |
| היקף | ייעוץ + FAQ + המלצה + ניסוח ברכה + איסוף ליד | הזרקת בחירות ל-Flow, וואטסאפ |
| שפה | עברית בלבד | — |

---

## אושר ע"י המותג (03/09/2026)

- **מחירים סופיים:** 24 → 249 ₪ · 48 → 299 ₪ · 72 → 349 ₪. הסוכן מוסר כעובדה.
- **זמן אספקה:** "עד 21 ימי עסקים" (ייצור + משלוח). הסוכן מוסר כעובדה, בלי תאריך מדויק.
- קלפי Family / Friendship / Kids עדיין לא קיימים — לא רלוונטי לסוכן (הוא לא מציג Preview).
