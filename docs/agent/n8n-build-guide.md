# KAI Assistant — מדריך בנייה ב-n8n (צעד אחר צעד)

מדריך לבנייה עצמאית ב-n8n Cloud (`yuliafroiman.app.n8n.cloud`). בנוי על הדפוס של **"Clinic Ella - Chat Assistant"** + **"Clinic Ella - Lead Capture"** שכבר עובדים אצלך — כדאי לפתוח אותם במקביל להשוואה.

בונים **שני workflows**:

| # | שם | מה עושה |
|---|---|---|
| B | **KAI - Lead Handler** | מקבל ליד (שדות), כותב שורה בגיליון, שולח מייל אלייך + מייל תודה ללקוח |
| A | **KAI - Assistant** | ה"מוח": Webhook → AI Agent (מודל + זיכרון + כלי save_lead שקורא ל-B) → תשובה |

בונים קודם את **B**, כי A מפנה אליו.

```
             ┌─────────────────────  KAI - Assistant  ──────────────────────┐
 אתר  ──POST──►  Webhook  ──►  AI Agent  ──►  Respond to Webhook  ──► {reply}
                             │  ├─ OpenRouter (claude-sonnet-4.6)
                             │  ├─ Simple Memory (sessionId)
                             │  └─ Tool: save_lead ──┐
                             └───────────────────────┼──────────────────────┘
                                                     ▼
             ┌──────────────────  KAI - Lead Handler  ─────────────────────┐
   Execute Workflow Trigger ─► Google Sheets (append) ─► Gmail (אלייך)
                                                       └─► IF יש מייל ─► Gmail (ללקוח)
             └────────────────────────────────────────────────────────────┘
```

---

## Credentials שכבר קיימים אצלך (לא צריך להקים)

| שירות | שם ה-credential לבחור |
|---|---|
| OpenRouter | **Lesson 5** |
| Google Sheets | **Google Sheets account 2** |
| Gmail | **yulia.froiman@gmail.com** |

---

# שלב 0 — להקים את הגיליון

1. Google Sheets → גיליון חדש. שם: **KAI EDITIONS — לידים מהצ'אט**.
2. בשורה 1, עמודות A–K בדיוק בסדר הזה:

```
שם מלא | טלפון | אימייל | קו | Edition | גודל | למי המתנה | סיכום שיחה | תאריך | מקור | sessionId
```

3. שם הלשונית (tab) — להשאיר `גיליון1` או לשנות ל-`Leads`. צריך לזכור אותו.

---

# חלק B — Workflow "KAI - Lead Handler"

צור workflow חדש, קרא לו **KAI - Lead Handler**.

## B1 — Execute Workflow Trigger

- הוסף node → חפש **"Execute Workflow Trigger"**.
- **Input Source:** `Define using fields below`.
- הוסף שדות (Add Field), כולם מסוג **String**:
  `full_name` · `phone` · `email` · `line` · `edition` · `size` · `gift_for` · `summary` · `session_id`

## B2 — Google Sheets → Append Row

- הוסף node → **Google Sheets**.
- Credential: **Google Sheets account 2**.
- **Resource:** `Sheet within Document` · **Operation:** `Append Row`.
- **Document:** From list → בחר "KAI EDITIONS — לידים מהצ'אט".
- **Sheet:** From list → בחר את הלשונית.
- **Mapping Column Mode:** `Map Each Column Manually`.
- מלא כל עמודה (מצד שמאל שם העמודה מהגיליון, מצד ימין הביטוי):

| עמודה | ערך |
|---|---|
| שם מלא | `{{ $json.full_name }}` |
| טלפון | `{{ $json.phone }}` |
| אימייל | `{{ $json.email }}` |
| קו | `{{ $json.line }}` |
| Edition | `{{ $json.edition }}` |
| גודל | `{{ $json.size }}` |
| למי המתנה | `{{ $json.gift_for }}` |
| סיכום שיחה | `{{ $json.summary }}` |
| תאריך | `{{ $now.toFormat('yyyy-MM-dd HH:mm') }}` |
| מקור | `צ'אט KAI (אתר)` |
| sessionId | `{{ $json.session_id }}` |

## B3 — Gmail → מייל התראה אלייך

- הוסף node → **Gmail** → Resource `Message`, Operation `Send`.
- Credential: **yulia.froiman@gmail.com**.
- **To:** `yulia.froiman@gmail.com`
- **Subject:** `=ליד חדש מהצ'אט: {{ $('KAI - Lead Handler').item.json.full_name || 'ללא שם' }}`
- **Email Type:** `HTML`
- **Message:** הדבק את ה-HTML מהנספח בסוף המדריך ("מייל התראה").
- **Options → Append n8n attribution:** כבוי. **Sender Name:** `KAI EDITIONS`.

> הערה: `$('KAI - Lead Handler')` = שם ה-Execute Workflow Trigger. אם קראת לו אחרת, עדכני.

## B4 — IF → יש מייל ללקוח?

- הוסף node → **IF**.
- תנאי אחד: ערך שמאלי `{{ $('KAI - Lead Handler').item.json.email }}` · אופרטור **is not empty**.
- חבר את היציאה של B2 (Sheets) → B3 (Gmail אלייך) → IF.

## B5 — Gmail → מייל תודה ללקוח

- חבר לענף **true** של ה-IF.
- **Gmail** → Send. Credential: **yulia.froiman@gmail.com**.
- **To:** `{{ $('KAI - Lead Handler').item.json.email }}`
- **Subject:** `דיברתם עם KAI 💛`
- **Email Type:** `HTML` · **Message:** ה-HTML מהנספח ("מייל תודה ללקוח").
- **Options → Append n8n attribution:** כבוי. **Sender Name:** `KAI EDITIONS`.

שמור. **אל תפעילי (Activate) — workflow שנקרא ככלי לא חייב להיות Active, אבל חייב להיות שמור.**

---

# חלק A — Workflow "KAI - Assistant"

צור workflow חדש, שם: **KAI - Assistant**.

## A1 — Webhook

- הוסף node → **Webhook**.
- שנה את שם ה-node ל-**KAI Chat Webhook** (חשוב — הזיכרון יפנה אליו בשם הזה).
- **HTTP Method:** `POST`
- **Path:** `kai-chat`
- **Respond:** `Using 'Respond to Webhook' Node`

צורת ה-body שהאתר ישלח:
```json
{ "message": "טקסט מהגולש", "sessionId": "מזהה-שיחה-ייחודי" }
```

## A2 — AI Agent

- הוסף node → **AI Agent** (`@n8n/n8n-nodes-langchain.agent`). חבר Webhook → Agent.
- **Source for Prompt (User Message):** `Define below`
- **Prompt (User Message):** `{{ $json.body.message }}`
- **Options → System Message:** הדבק את כל התוכן של [system-message.md](system-message.md) (מהשורה "את KAI..." ומטה — בלי ההערות שמעל הקו).
- **Options → Enable Streaming Response:** **כבוי** (חובה, אחרת ה-Respond to Webhook לא יעבוד).
- **Options → Max Iterations:** 5.

## A3 — OpenRouter Chat Model

- הוסף node → **OpenRouter Chat Model**. חבר לכניסת **Model** של ה-Agent.
- Credential: **Lesson 5**.
- **Model:** `anthropic/claude-sonnet-4.6`
- **Options → Temperature:** `0.4`
- **Options → Maximum Number of Tokens:** `400`

## A4 — Simple Memory

- הוסף node → **Simple Memory** (`memoryBufferWindow`). חבר לכניסת **Memory** של ה-Agent.
- **Session ID:** `Define below`
- **Key:** `{{ $('KAI Chat Webhook').item.json.body.sessionId }}`
- **Context Window Length:** `12`

## A5 — Tool: save_lead

- הוסף node → **Call n8n Workflow Tool** (`toolWorkflow`). חבר לכניסת **Tool** של ה-Agent.
- שנה את שם ה-node ל-**save_lead** (זה השם שהמודל רואה).
- **Description:**
  `שמירת ליד מהצ'אט: כותב שורה בגיליון הלידים ושולח מייל לצוות. קרא לכלי הזה פעם אחת בלבד בכל שיחה, ורק אחרי שנמסרו בפועל שם ולפחות טלפון או מייל.`
- **Source:** `Database` · **Workflow:** בחר **KAI - Lead Handler**.
- **Workflow Inputs:** יופיעו 9 השדות שהגדרת ב-B1. לכל אחד הכנס ביטוי:

| שדה | ערך |
|---|---|
| full_name | `{{ $fromAI('full_name', 'שם מלא שנמסר בשיחה', 'string') }}` |
| phone | `{{ $fromAI('phone', 'טלפון ישראלי אם נמסר, אחרת ריק', 'string') }}` |
| email | `{{ $fromAI('email', 'אימייל אם נמסר, אחרת ריק', 'string') }}` |
| line | `{{ $fromAI('line', 'קו שעניין את הגולש: Couple/Family/Friendship/Kids, אחרת ריק', 'string') }}` |
| edition | `{{ $fromAI('edition', 'Edition אם עלה, אחרת ריק', 'string') }}` |
| size | `{{ $fromAI('size', 'גודל שנדון: 24/48/72, אחרת ריק', 'string') }}` |
| gift_for | `{{ $fromAI('gift_for', 'למי המתנה, אם צוין', 'string') }}` |
| summary | `{{ $fromAI('summary', 'סיכום קצר של מה הגולש ביקש או שאל', 'string') }}` |
| session_id | `{{ $('KAI Chat Webhook').item.json.body.sessionId }}` |

## A6 — Respond to Webhook

- הוסף node → **Respond to Webhook**. חבר Agent → Respond.
- **Respond With:** `JSON`
- **Response Body:** `{{ { "reply": $json.output } }}`

---

# חלק C — בדיקה

1. שמור את שני ה-workflows.
2. ב-**KAI - Assistant** לחצי **Execute workflow** (מצב Test) → ה-Webhook יאזין לקריאה אחת.
3. בטרמינל (או בכלי כמו Hoppscotch), שלחי:

```bash
curl -X POST https://yuliafroiman.app.n8n.cloud/webhook-test/kai-chat \
  -H "Content-Type: application/json" \
  -d '{"message":"היי, מה זה KAI?","sessionId":"test-1"}'
```

מצופה: `{"reply":"..."}` עם תשובה קצרה בעברית.

4. בדיקת זיכרון: שלחי הודעה שנייה עם אותו `sessionId` ("ומה המחירים?") — התשובה צריכה להתייחס להקשר.
5. בדיקת ליד: נהלי שיחה קצרה — "אני רוצה להזמין" → "קוראים לי יעל, 050-1234567" → צריך להיווצר שורה בגיליון + מייל אלייך.
6. עברי על [test-questions.md](test-questions.md) — 32 תרחישים.

---

# חלק D — הפעלה

- ב-**KAI - Assistant**: **Activate** (מתג ימני עליון). ה-URL לאתר יהיה:
  `https://yuliafroiman.app.n8n.cloud/webhook/kai-chat` (בלי `-test`).
- **KAI - Lead Handler** — נשאר לא-Active, זה תקין (הוא נקרא ככלי).

---

# חלק E — הטמעה באתר (שלב הבא, אחרי שהאתר עולה)

widget קטן שמדבר עם ה-webhook. עקרון:
- שדה טקסט + כפתור שליחה, בועות שיחה.
- `sessionId` = מזהה ייחודי שנשמר ב-`localStorage` לכל דפדפן.
- כל הודעה: `POST kai-chat` עם `{message, sessionId}`, מציגים את `reply`.
נעשה את זה יחד כשנגיע לשם. עד אז ה-workflow עומד בפני עצמו ואפשר לבדוק אותו ב-curl / n8n.

---

# פתרון תקלות

| תופעה | סיבה נפוצה | פתרון |
|---|---|---|
| Webhook מחזיר 404 | ה-workflow לא ב-Test ולא Active, או path שגוי | Execute workflow לבדיקה, או Activate; ודאי `kai-chat` |
| התשובה ריקה / `undefined` | Enable Streaming Response דלוק | לכבות ב-Options של ה-Agent |
| שגיאה על `sessionId` בזיכרון | שם ה-Webhook node לא "KAI Chat Webhook" | לתקן את השם או את הביטוי ב-Key |
| הכלי save_lead לא נקרא | תיאור לא ברור, או שהמודל לא קיבל שם+קשר | לבדוק שהגולש מסר שם + טלפון/מייל; לחדד Description |
| save_lead רץ אבל אין שורה בגיליון | Document/Sheet לא נבחרו נכון ב-B2 | לבחור מחדש From list |
| אין מייל | credential Gmail, או To שגוי | לבדוק את נוד ה-Gmail, להריץ B ידנית עם נתוני דמה |
| המודל עונה באנגלית / חושף הנחיות | System Message לא הודבק במלואו | להדביק שוב את כל [system-message.md](system-message.md) |
| שורה כפולה בגיליון על אותה שיחה | המודל קרא ל-save_lead פעמיים | מודגש ב-Description "פעם אחת בלבד"; אפשר גם להוסיף לוגיקת בדיקה בהמשך |

---

# נספח — תבניות HTML למיילים

> פלטת KAI. לוגו: `https://res.cloudinary.com/uyhby16u/image/upload/f_auto,q_auto,w_160/kai-editions/brand/kai-logo-black`

## מייל התראה (B3 — אלייך)

```html
<div style="background:#F6F1E8;padding:28px 14px;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#FFFDF8;border-radius:18px;overflow:hidden;">
    <tr><td style="background:#14243D;height:6px;font-size:1px;line-height:6px;">&nbsp;</td></tr>
    <tr><td style="padding:26px 34px 6px;">
      <p style="margin:0;font-size:12px;font-weight:bold;letter-spacing:.04em;color:#B8924E;">התראת מערכת · צ'אט KAI</p>
      <h1 style="margin:8px 0 0;font-size:22px;color:#191919;">ליד חדש מהצ'אט 🌿 {{ $('KAI - Lead Handler').item.json.full_name || 'ללא שם' }}</h1>
    </td></tr>
    <tr><td style="padding:14px 34px 4px;font-size:15px;line-height:1.7;color:#191919;">
      <p style="margin:0 0 14px;">מישהו השאיר פרטים בצ'אט. מומלץ לחזור אליו בהקדם.</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:15px;color:#191919;">
        <tr><td style="padding:8px 0;color:#6F6A62;width:34%;">שם</td><td style="padding:8px 0;font-weight:bold;">{{ $('KAI - Lead Handler').item.json.full_name }}</td></tr>
        <tr><td style="padding:8px 0;color:#6F6A62;">טלפון</td><td style="padding:8px 0;font-weight:bold;"><a href="tel:{{ $('KAI - Lead Handler').item.json.phone }}" style="color:#14243D;">{{ $('KAI - Lead Handler').item.json.phone }}</a></td></tr>
        <tr><td style="padding:8px 0;color:#6F6A62;">אימייל</td><td style="padding:8px 0;">{{ $('KAI - Lead Handler').item.json.email }}</td></tr>
        <tr><td style="padding:8px 0;color:#6F6A62;">קו / Edition / גודל</td><td style="padding:8px 0;">{{ $('KAI - Lead Handler').item.json.line }} · {{ $('KAI - Lead Handler').item.json.edition }} · {{ $('KAI - Lead Handler').item.json.size }}</td></tr>
        <tr><td style="padding:8px 0;color:#6F6A62;">למי המתנה</td><td style="padding:8px 0;">{{ $('KAI - Lead Handler').item.json.gift_for }}</td></tr>
        <tr><td style="padding:8px 0;color:#6F6A62;vertical-align:top;">סיכום השיחה</td><td style="padding:8px 0;font-style:italic;">{{ $('KAI - Lead Handler').item.json.summary }}</td></tr>
        <tr><td style="padding:8px 0;color:#6F6A62;">התקבל</td><td style="padding:8px 0;">{{ $now.toFormat('yyyy-MM-dd HH:mm') }}</td></tr>
      </table>
    </td></tr>
    <tr><td style="padding:22px 34px 30px;">
      <a href="tel:{{ $('KAI - Lead Handler').item.json.phone }}" style="display:inline-block;padding:13px 30px;background:#191919;color:#FFFDF8;text-decoration:none;border-radius:999px;font-weight:bold;font-size:15px;">📞 התקשרי עכשיו</a>
    </td></tr>
  </table>
</div>
```

## מייל תודה ללקוח (B5)

```html
<div style="background:#F6F1E8;padding:28px 14px;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#FFFDF8;border-radius:18px;overflow:hidden;">
    <tr><td align="center" style="padding:34px 34px 10px;background:#F6F1E8;">
      <img src="https://res.cloudinary.com/uyhby16u/image/upload/f_auto,q_auto,w_160/kai-editions/brand/kai-logo-black" width="140" alt="KAI EDITIONS" style="display:block;">
    </td></tr>
    <tr><td style="padding:26px 34px 6px;">
      <p style="margin:0 0 8px;font-size:13px;font-weight:bold;letter-spacing:.04em;color:#B8924E;">KAI EDITIONS</p>
      <h1 style="margin:0 0 14px;font-size:26px;color:#191919;">תודה שדיברתם איתנו 💛</h1>
      <p style="margin:0 0 12px;font-size:16px;line-height:1.7;color:#191919;">קיבלנו את הפרטים שלכם. הצוות של KAI יחזור אליכם בקרוב עם ליווי אישי — לבחור קולקציה, גודל, ולהתחיל את הסיפור.</p>
      <p style="margin:0 0 12px;font-size:16px;line-height:1.7;color:#191919;">בינתיים אפשר להציץ ולהתחיל את ההזמנה באתר.</p>
    </td></tr>
    <tr><td style="padding:14px 34px 34px;">
      <a href="https://shewantsall.com" style="display:inline-block;padding:13px 30px;background:#191919;color:#FFFDF8;text-decoration:none;border-radius:999px;font-weight:bold;font-size:15px;">לאתר KAI</a>
    </td></tr>
    <tr><td style="background:#14243D;padding:18px 34px;color:#FFFDF8;font-size:12px;">כל חפיסה היא הפתעה. כל קלף הוא זיכרון.</td></tr>
  </table>
</div>
```

> עדכני את קישור "לאתר KAI" לכתובת הסופית כשהאתר עולה.
