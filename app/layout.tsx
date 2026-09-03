import type { Metadata } from "next";
import { Cormorant_Garamond, Frank_Ruhl_Libre, Heebo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--f-cormorant",
  display: "swap",
});

const frank = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700"],
  variable: "--f-frank",
  display: "swap",
});

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["500", "600", "700"],
  variable: "--f-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KAI EDITIONS — כל חפיסה היא הפתעה. כל קלף הוא זיכרון.",
  description:
    "KAI EDITIONS הופך תמונות וזיכרונות אישיים לקולקציית קלפים לאיסוף ולחוויית Unboxing. מעלים תמונות, מקבלים אלבום וחפיסות סגורות, ופותחים יחד.",
  openGraph: {
    title: "KAI EDITIONS — Your life, collected.",
    description: "התמונות והרגעים שלכם הופכים לקולקציה אישית שנוצרה במיוחד עבורכם.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${cormorant.variable} ${frank.variable} ${heebo.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
