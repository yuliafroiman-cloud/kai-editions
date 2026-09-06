/** עוזר לבניית כתובות Cloudinary. מקור נכסים: docs/cloudinary-assets.md */

export const CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "uyhby16u";

const BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

/**
 * בונה URL להגשה עם f_auto,q_auto.
 * @param publicId למשל "kai-editions/hero/hero-mobile"
 * @param transform טרנספורמציה נוספת לפני ה-f_auto (למשל "c_crop,x_355,y_195,w_560,h_420")
 */
export function cld(publicId: string, transform?: string): string {
  const t = transform ? `${transform}/` : "";
  return `${BASE}/${t}f_auto,q_auto/${publicId}`;
}

/** נכסים בשימוש תדיר */
export const IMG = {
  logoBlack: "kai-editions/brand/kai-logo-black",
  logoGold: "kai-editions/brand/kai-logo-gold",
  heroDesktop: "kai-editions/hero/hero-desktop",
  heroMobile: "kai-editions/hero/hero-mobile",
  /** זמני — חתוך מההדמיה. להחליף בתמונת/סרטון Hero אמיתי (דסקטופ + מובייל) */
  heroScene: "kai-editions/hero/hero-scene",
  pack: (line: string) => `kai-editions/packs/pack-${line === "couple" ? "couple" : line}`,
  box: (line: string) => `kai-editions/boxes/kai-${line === "couple" ? "couples" : line}`,
  /** קופסה + חפיסה + פולארויד, לכל קו — כרטיסי "The Collections" (B4) */
  collectionBox: (line: string) => `kai-editions/collections/${line}-box`,
  /** תמונת לייף-סטייל אמיתית לכל קו (אנשים מחזיקים קלף/אלבום) */
  lineLifestyle: (line: string) => `kai-editions/lines/line-${line}`,
  /** "איך זה עובד" (M5) — זמני, חתוך מההדמיה. להחליף בתמונות נקיות */
  how: {
    upload: "kai-editions/how/upload",
    preview: "kai-editions/how/preview",
    produce: "kai-editions/how/produce",
  },
  /** "מה יש בקופסה" (M6) — flat-lay של הקופסה הפתוחה, זמני (חתוך מההדמיה) */
  insideFlatlay: "kai-editions/inside/box-flatlay",
  /** "איזה קלף מחכה לכם בפנים?" (M6b) — חפיסות + מניפת קלפים עם קלף Gold זוהר, זמני (חתוך מההדמיה) */
  revealScene: "kai-editions/reveal/scene",
  /** גרסת מובייל — מניפת הקלפים בלבד (בלי החפיסות) */
  revealSceneMobile: "kai-editions/reveal/scene-mobile",
  /** "למה KAI" (M7) — 3 תמונות לכל קו: feel / collect / authentic */
  why: (line: "couple" | "family" | "friendship" | "kids") => ({
    feel: `kai-editions/why/${line}-feel`,
    collect: `kai-editions/why/${line}-collect`,
    authentic: `kai-editions/why/${line}-authentic`,
  }),
  /** קלף קדמי עם תמונה, לכל טיפוס — Couple בלבד כרגע */
  cardFront: (tier: "regular" | "silver" | "gold") =>
    `kai-editions/cards/couple/front-${tier}-example`,
} as const;
