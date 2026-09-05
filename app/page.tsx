import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Collections } from "@/components/home/Collections";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhatsInside } from "@/components/home/WhatsInside";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Collections />
      <HowItWorks />
      <WhatsInside />
      {/* M7–M12 — נוספים מודול אחר מודול */}
    </>
  );
}
