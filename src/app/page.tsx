import { Benefits } from "@/components/landing/benefits";
import { CtaButton } from "@/components/landing/cta-button";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Offer } from "@/components/landing/offer";
import { ProfitSection } from "@/components/landing/profit-section";
import { StickyCta } from "@/components/landing/sticky-cta";
import { Testimonials } from "@/components/landing/testimonials";
import { Vsl } from "@/components/landing/vsl";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Vsl />
        <section id="metodo" className="py-12 md:py-24">
            <div className="container mx-auto text-center">
                 <h2 className="text-3xl md:text-5xl font-black text-accent mb-4 uppercase">
                    O Fim das Apostas baseadas na Sorte
                </h2>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 mb-12 text-balance">
                    Chega de perder dinheiro com palpites incertos. Apresentamos um método comprovado que transforma sua paixão por futebol em uma fonte de renda consistente e previsível, seja durante a temporada regular ou em grandes eventos como a Copa do Mundo.
                </p>
                <div className="flex justify-center">
                    <CtaButton />
                </div>
            </div>
        </section>
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
