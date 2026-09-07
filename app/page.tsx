import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Collections } from "@/components/home/Collections";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhatsInside } from "@/components/home/WhatsInside";
import { CardReveal } from "@/components/home/CardReveal";
import { WhyKai } from "@/components/home/WhyKai";
import { Packages } from "@/components/home/Packages";
import { Faq } from "@/components/home/Faq";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Collections />
      <HowItWorks />
      <WhatsInside />
      <CardReveal />
      <Packages />
      <Faq />
      <WhyKai />
      {/* M10–M12 — נוספים מודול אחר מודול */}
    </>
  );
}
