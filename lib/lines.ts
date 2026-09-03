/** ארבעת הקווים של KAI EDITIONS. מקור: docs/הזמנת-עבודה.md §4 */

export type LineSlug = "couple" | "family" | "friendship" | "kids";

export interface Line {
  slug: LineSlug;
  /** שם התצוגה (אנגלית, כמו במיתוג) */
  name: string;
  /** צבע העולם */
  color: string;
  /** צבע טקסט מעל הצבע */
  onColor: string;
  /** האם נכסי הקלפים המלאים קיימים (ל-Preview) */
  cardsReady: boolean;
}

export const LINES: Record<LineSlug, Line> = {
  couple: { slug: "couple", name: "Couple", color: "var(--couple)", onColor: "var(--on-dark)", cardsReady: true },
  family: { slug: "family", name: "Family", color: "var(--family)", onColor: "var(--on-dark)", cardsReady: false },
  friendship: { slug: "friendship", name: "Friendship", color: "var(--friendship)", onColor: "var(--on-dark)", cardsReady: false },
  kids: { slug: "kids", name: "Kids", color: "var(--kids)", onColor: "var(--kids-ink)", cardsReady: false },
};

export const LINE_ORDER: LineSlug[] = ["couple", "family", "friendship", "kids"];

/** סוגי Edition — נבחרים אחרי הקו. מקור: §4.1 */
export const EDITIONS = ["Trip", "Birthday", "Year in Memories", "Surprise", "Other"] as const;
export type Edition = (typeof EDITIONS)[number];

/** גדלים ומחירים. מקור: §3.1 (מסומן טיוטה — לאישור) */
export const SIZES = [
  { cards: 24, packs: 4, price: 249 },
  { cards: 48, packs: 8, price: 299 },
  { cards: 72, packs: 12, price: 349 },
] as const;
