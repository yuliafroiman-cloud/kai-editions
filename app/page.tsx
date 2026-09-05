import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Collections } from "@/components/home/Collections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Collections />
      {/* M4–M12 — נוספים מודול אחר מודול */}
    </>
  );
}
