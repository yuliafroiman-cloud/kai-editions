# KAI EDITIONS — Design Brief for ChatGPT

Paste this whole file into ChatGPT **together with the 4 screenshots** in this folder
(`02-hero.png`, `03-trustbar.png`, `04-collections.png`, `05-mobile-full.png`).
Then ask it to design the next section's mockup in the exact same style.

---

## 1. The brand

| | |
|---|---|
| Name | **KAI EDITIONS** |
| Tagline | *Your life, collected.* |
| What it is | Turns your personal photos + story into a physical **collectible-card set** — sealed packs, an album, rarity tiers — to open, discover and collect together |
| Core feeling | Premium · warm · emotional · editorial · minimal · a little playful. "Like holding a luxury trading-card set." |
| Language | **Hebrew, RTL.** English is used only for the brand name and short feature labels ("The Collections", "Couples", "Family"…). |
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

> Gold is **never** body text. Only: the logo, ONE thin divider line per section, small icons, button borders, the "The Collections"-style English display headings.

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

Heading sizes: h1 ≈ clamp(2.3rem, 5.6vw, 4rem) · h2 ≈ clamp(1.9rem, 3.8vw, 2.9rem).
Body ≈ 1.05rem, line-height ~1.7.

---

## 4. Signature visual elements (reuse these — they make it "KAI")

1. **Gold star-divider** — a thin gold hairline with a small 4-point star (✦), placed between a heading and its paragraph. Centered for section headers.
2. **4-point star (✦)** — the brand mark (it's the dot on the "A" in the logo). Used as a bullet, in buttons, at corners.
3. **Dark CTA button** — fill `#141A24`, text in gold `#E7C98B`, UPPERCASE label, a ✦ before the text. Generous padding. Slight radius (~2–4px) or square.
4. **Contained imagery** — photos sit as neat blocks/cards **on the cream background** (rounded ~8–14px corners), *not* full-bleed. Cream is the frame.
5. **Line-colored panels** — collection content sits on a solid burgundy/green/navy/sand panel, text centered, gold serif English name + tiny line icon.
6. **Warm candle-lit photography** — real people, real emotion, warm gold light, burgundy KAI product visible. Never cold studio white.

---

## 5. Layout & spacing

- Max content width **1200px**, centered. Side padding: 72px desktop / 20px mobile.
- Vertical rhythm between sections: `clamp(72px, 12vh, 150px)`.
- **RTL**: text, headings, nav flow right-to-left. **But** the KAI logo stays physically **top-left** and the CTA button physically **top-right**.
- Lots of air. Large headings. Restraint everywhere except the one gold moment per section.
- Mobile: single column, image band then text on cream, everything centered.

---

## 6. What already exists (see screenshots)

- **Header** — big gold KAI logo left · centered nav with thin `|` separators · dark "✦ צרו Collection" pill right.
- **Hero** (`02-hero.png`) — cream bg; left: big Hebrew serif headline + gold star-divider + short paragraph + dark CTA; right: warm lifestyle photo as a rounded contained card.
- **Trust bar** (`03-trustbar.png`) — 5 columns on cream, thin gold line icon + bold serif title + soft description, centered, hairline separators.
- **The Collections** (`04-collections.png`) — centered gold "The Collections" heading + star-divider + 2-line subtitle; then 4 tall cards. Each card: lifestyle photo on top → solid line-color panel (centered: gold italic English name + icon, short tagline, "לגלות עוד ‹", and a product shot of the box+pack+polaroid at the bottom).

---

## 7. Prompt to generate the next section

> This is my brand **KAI EDITIONS**. Attached: the design brief + screenshots of the current site (hero, trust bar, collections).
>
> Design a **high-fidelity desktop mockup** (1440px wide) for the **"[SECTION NAME]"** section, in the **exact same visual language**:
> warm cream background `#F6F1E8`, warm near-black text `#1A1613`, one restrained gold `#A97F3D` accent, elegant high-contrast serif headings (Cormorant / Frank Ruhl Libre), Hebrew RTL, the thin gold star-divider (✦) between heading and paragraph, contained rounded photos on cream (not full-bleed), plenty of whitespace.
>
> Content / exact copy to use:
> [PASTE the section's text from docs/website-copy.md here]
>
> Also give me a matching **mobile** version (390px wide).
> Do not invent extra sections, badges, testimonials, or numbers.

---

## 8. Quick do / don't

**Do:** cream everywhere · one gold moment per section · big serif headlines · centered line-color panels · warm candle-lit photos · ✦ star motif · generous spacing · RTL Hebrew.

**Don't:** full-bleed hazy hero images · pure white cards · cool grey · terracotta · purple gradients · emoji · stock line-icon soup · tiny cramped type · drop shadows everywhere · SaaS look.
