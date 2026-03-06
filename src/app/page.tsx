import { Benefits } from "@/components/landing/benefits";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Offer } from "@/components/landing/offer";
import { ProfitSection } from "@/components/landing/profit-section";
import { StickyCta } from "@/components/landing/sticky-cta";
import { Testimonials } from "@/components/landing/testimonials";
import { UrgencyCta } from "@/components/landing/urgency-cta";
import { Vsl } from "@/components/landing/vsl";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Vsl />
        <UrgencyCta />
        <Benefits />
        <ProfitSection />
        <Testimonials />
        <Offer />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
