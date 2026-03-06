import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Offer } from "@/components/landing/offer";
import { Opportunity } from "@/components/landing/opportunity";
import { ProfitSection } from "@/components/landing/profit-section";
import { StickyCta } from "@/components/landing/sticky-cta";
import { Testimonials } from "@/components/landing/testimonials";
import { Vsl } from "@/components/landing/vsl";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
        <Vsl />
        <ProfitSection />
        <Testimonials />
        <Offer />
        <Opportunity />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
