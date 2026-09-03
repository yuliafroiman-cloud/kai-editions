import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "התחלת קולקציה — KAI EDITIONS",
};

/** מעטפת ה-Flow — תיבנה במודול M14. כרגע placeholder. */
export default function OrderPage() {
  return (
    <section className="wrap" style={{ paddingTop: "160px", minHeight: "70vh" }}>
      <h1>התחלת קולקציה</h1>
      <p style={{ marginTop: "1rem", color: "var(--ink-soft)" }}>
        תהליך ההזמנה ייבנה כאן (מודול M14 ואילך): בחירת קו → Edition → גודל → תמונות →
        שאלות → Preview → פרטים → שליחה.
      </p>
    </section>
  );
}
