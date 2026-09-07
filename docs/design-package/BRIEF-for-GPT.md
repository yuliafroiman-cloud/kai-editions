# KAI EDITIONS — Design Brief for ChatGPT

Paste this whole file into ChatGPT **together with the screenshots in this folder**:

| file | what it shows |
|---|---|
| `01-full-page.png` | the whole homepage, top to bottom (desktop) |
| `02-hero.png` | hero |
| `03-trustbar.png` | trust bar (5 value columns) |
| `04-collections.png` | The Collections (4 line cards) |
| `05-howitworks.png` | How It Works (6 numbered steps + 3 photos) |
| `06-whatsinside.png` | What's Inside the Box (7-item list + flat-lay) |
| `07-cardreveal.png` | "איזה קלף מחכה לכם בפנים?" (packs + card fan + gold card) |
| `08-whykai.png` | Why KAI / "זיכרונות שחוזרים לחיים" (3 columns) |
| `09-header.png` | header close-up (logo + nav + CTA) |
| `10-mobile-full.jpg` | the whole homepage on mobile (390px) |

Then ask it to design the next section's mockup in the exact same style.
The site is live-built in Next.js; these screenshots are the current real state.

---

## 1. The brand

| | |
|---|---|
| Name | **KAI EDITIONS** |
| Tagline | *Your life, collected.* |
| What it is | Turns your personal photos + story into a physical **collectible-card set** — sealed packs, an album, rarity tiers — to open, discover and collect together |
| Core feeling | Premium · warm · emotional · editorial · minimal · a little playful. "Like holding a luxury trading-card set." |
| Language | **Hebrew, RTL.** English is used only for the brand name and short feature labels ("The Collections", "Couples", "Family", "Silver", "Gold"…). |
| Lines (worlds) | Couples · Family · Friendship · Kids — each has its own color |

---

## 2. Color palette (exact hex — do not drift)

### Neutrals / UI
| Role | HEX | Use |
|---|---|---|
| Background (warm cream) | `#F6F1E8` | every section background |
| Alt section background | `#EFE6D6` | occasional alternating band |
| Surface (near-white ivory) | `#FFFDF8` | cards, panels, form fields |
| Ink (warm near-black) | `#1A1613` | headings, body, primary button fill |
| Ink soft | `#6E675C` | secondary text, descriptions |
| Hairline | `#D8CEBE` | thin dividers, borders |
| Dark navy | `#141A24` | footer, dark CTA button, dark sections |
| Text on dark | `#F6F1E8` | text over navy / over line-colors |

### Gold (accent — decorative only, ~3 spots per section max)
| | HEX |
|---|---|
| Gold | `#A97F3D` |
| Gold light (for gradients / sheen) | `#E7C98B` |

> Gold is **never** body text. Only: the logo, ONE thin divider line per section, small icons, button borders/labels, the "The Collections"-style English display headings.

### Line colors (each collection's world)
| Line | HEX | Text on it |
|---|---|---|
| Couples | `#651F32` (burgundy) | `#F6F1E8` |
| Family | `#14513D` (pine green) | `#F6F1E8` |
| Friendship | `#29477A` (navy) | `#F6F1E8` |
| Kids | `#E4D6BC` (light sand) | `#1A1613` (dark — Kids is the light one) |

**Avoid:** pure white, cool greys, terracotta/rust, purple gradients, neon, hard black `#000`.

---

## 3. Typography

| Role | Font | Notes |
|---|---|---|
| Display / headings — Latin | **Cormorant Garamond** (500/600, often *italic*) | high-contrast, elegant, editorial |
| Display / headings — Hebrew | **Frank Ruhl Libre** (500/700) | high-contrast Hebrew serif |
| Body — both languages | **Frank Ruhl Libre** (400/500) | printed-catalog feel; keep copy short |
| Labels / nav / buttons | **Heebo** (600), UPPERCASE, letter-spacing ~0.13em, ~12px | utility only |

Heading sizes: h1 ≈ clamp(2.3rem, 5.6vw, 4rem) · h2 ≈ clamp(2.1rem, 4.5vw, 3.3rem).
Body ≈ 1.05rem, line-height ~1.7.

---

## 4. Signature visual elements (reuse these — they make it "KAI")

1. **Gold star-divider** — a thin gold hairline with a small 4-point star (✦), placed between a heading and its paragraph. Centered (`— ✦ —`) for section headers.
2. **4-point star (✦)** — the brand mark (it's the dot on the "A" in the logo). Used as a bullet, in buttons, at corners. On the live site the star inside the logo softly twinkles.
3. **Dark CTA button** — fill `#141A24`, text in gold `#E7C98B`, UPPERCASE label, a ✦ before the text. Generous padding. Slight radius (~2–4px). This is the site's primary CTA and it repeats in almost every section.
4. **Contained imagery** — photos sit as neat blocks/cards **on the cream background** (rounded ~8–14px corners), *not* full-bleed. Cream is the frame. Wide product scenes get a soft feathered edge that melts into the cream.
5. **Line-colored panels** — collection content sits on a solid burgundy/green/navy/sand panel, text centered, gold italic English name + tiny line icon; each panel also carries its own inverted CTA button.
6. **Warm candle-lit photography** — real people, real emotion, warm gold light, burgundy KAI product visible. Never cold studio white.
7. **Numbered steps** — large gold serif numerals ("01", "02"…), each with a short gold rule beneath, a serif title and a soft description. RTL order (01 on the right). Groups separated by thin vertical hairlines; a supporting photo under each group.
8. **3-column feature rows** — icon/star on top, bold serif title, one bold sentence, one soft sentence; thin vertical hairlines between columns (Trust bar, Why KAI).

---

## 5. Layout & spacing

- Max content width **1200px**, centered. Side padding: 72px desktop / 20px mobile.
- Vertical rhythm between sections: `clamp(72px, 12vh, 150px)`.
- **RTL**: text, headings, nav flow right-to-left. **But** the KAI logo stays physically **top-left** and the header CTA button physically **top-right**.
- Lots of air. Large headings. Restraint everywhere except the one gold moment per section.
- Mobile: single column, image band then text on cream, everything centered.

---

## 6. What already exists (see screenshots)

- **Header** (`09-header.png`) — big gold KAI logo left (its ✦ twinkles) · centered nav with thin `|` separators · dark "✦ צרו Collection" pill right.
- **Hero** (`02-hero.png`) — cream bg; left: big Hebrew serif headline + gold star-divider + short paragraph + dark CTA; right: warm lifestyle photo as a rounded contained card.
- **Trust bar** (`03-trustbar.png`) — 5 columns on the deep cream band, thin gold line icon + bold serif title + soft description, centered, hairline separators.
- **The Collections** (`04-collections.png`) — centered **gold** "The Collections" heading + star-divider + 2-line subtitle; then 4 tall cards. Each card: square lifestyle photo on top → solid line-color panel (centered: gold italic English name + icon, short tagline, a soft "לגלות עוד ‹" link, an **inverted CTA button "✦ צרו Collection"**, and a product shot of the box+pack+polaroid at the bottom).
- **How It Works** (`05-howitworks.png`) — centered star-divider + big **dark Hebrew serif** heading "איך זה עובד" + 1-line subtitle. Then **6 numbered steps in a single row**, RTL (01 rightmost → 06 leftmost), grouped 2+2+2 with thin vertical hairlines. Each step: gold serif numeral · short gold rule · serif title · soft 1–2-line description. **Below each pair sits one supporting photo** (4:3, rounded, soft shadow) — 3 photos. Then a centered dark CTA pill "✦ מתחילים את הסיפור שלכם", a hairline, and a centered one-line reassurance note with a ✦.
- **What's Inside the Box** (`06-whatsinside.png`) — centered star-divider + dark Hebrew serif heading "מה מחכה בתוך הקופסה" + 1-line subtitle. Two columns: a **contained flat-lay photo** of the open box (left, rounded, soft shadow) and a **numbered list of 7 items** (right, RTL): each row = gold serif numeral + short vertical gold rule + serif title + one-line soft description + small gold line-icon, hairlines between rows.
- **"איזה קלף מחכה לכם בפנים?"** (`07-cardreveal.png`) — centered star-divider + dark Hebrew serif heading + 2-line subtitle. Then one wide **contained scene** (soft feathered edges on cream): two burgundy KAI packs on the left (front one open, a card sliding out) and a fan of **4 collectible cards** on the right — 3 silver-framed + **1 gold-framed card that glows** with a warm sparkle. Then a centered dark CTA "✦ גלו מה מחכה בשקיה". (This replaced an earlier small Regular/Silver/Gold strip.)
- **Why KAI** (`08-whykai.png`) — centered star-divider + dark Hebrew serif heading "זיכרונות שחוזרים לחיים" + 1-line subtitle. **3 columns**, thin vertical hairlines between: each = contained 4:3 photo, small gold ✦/line icon, bold serif title (לרגש / לאסוף את הסיפור / לשמור אמיתי), one bold sentence, one soft sentence. RTL order (לרגש rightmost). Ends with a centered star-divider + dark CTA "✦ צרו Collection".

> **Heading rule:** English feature names ("The Collections", "Card Tiers") → **gold** serif. Actual Hebrew section titles ("איך זה עובד", "מה מחכה בתוך הקופסה") → large **dark ink** serif. Pick one per section, not both.

> **CTA rule:** almost every section ends with the dark "✦ …" pill. When designing a new section, include one unless it truly doesn't need it.

> **Product rule (important):** the product is a **collectible BOX set**, not loose cards. Whenever a block shows the product, the **burgundy KAI box** must be visible and readable as a box (closed, or open with album/packs inside) — cards alone are not enough. Use ONLY the existing product exactly as it appears in the screenshots: burgundy box with gold KAI logo, burgundy foil packs ("KAI EDITIONS" in gold), light/silver-framed cards + one glowing Gold card, burgundy album, cream greeting card, sticker set. **Do not invent** new packaging, differently-shaped or differently-textured packs, recoloured boxes, new card layouts, new icons, or badges.

---

## 7. Prompt to generate the next section

> This is my brand **KAI EDITIONS**. Attached: the design brief + screenshots of the current live site.
>
> Design a **high-fidelity desktop mockup** (1440px wide) for the **"[SECTION NAME]"** section, in the **exact same visual language**:
> warm cream background `#F6F1E8`, warm near-black text `#1A1613`, one restrained gold `#A97F3D` accent, elegant high-contrast serif headings (Cormorant / Frank Ruhl Libre), Hebrew RTL, the thin centered gold star-divider (✦) between heading and paragraph, contained rounded photos on cream (not full-bleed), plenty of whitespace, and the dark "✦ …" CTA pill.
>
> Content / exact copy to use:
> [PASTE the section's text from docs/website-copy.md — or from the matching module brief below]
>
> Also give me a matching **mobile** version (390px wide).
> Do not invent extra sections, badges, testimonials, prices, or numbers that aren't in the copy.

**Per-module briefs** (paste alongside this file when designing that section):
- `module-whats-inside.md` — "מה מחכה בתוך הקופסה" — ✅ built
- `module-why-kai.md` — "זיכרונות שחוזרים לחיים" — ✅ built
- `module-packages.md` — "החבילות" / מחירון (§7) — ⬅ **next**

---

## 8. Quick do / don't

**Do:** cream everywhere · one gold moment per section · big serif headlines · centered line-color panels · warm candle-lit photos · ✦ star motif · generous spacing · RTL Hebrew · a dark CTA pill per section.

**Don't:** full-bleed hazy hero images · pure white cards · cool grey · terracotta · purple gradients · emoji · stock line-icon soup · tiny cramped type · drop shadows everywhere · SaaS look · invented prices/stats · **invented products / new packaging / packs that look different from the screenshots** · showing loose cards with no box.
