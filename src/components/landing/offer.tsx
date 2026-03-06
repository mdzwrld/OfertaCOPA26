import { CheckCircle } from "lucide-react";
import { offerFeatures, reassuranceIcons } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CtaButton } from "./cta-button";
import { CountdownTimer } from "./countdown-timer";

export function Offer() {
  return (
    <section id="oferta" className="py-12 md:py-24 bg-card">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-background border-2 border-primary shadow-2xl shadow-primary/20">
          <CardHeader className="text-center p-8">
            <h2 className="text-3xl md:text-5xl font-black text-accent uppercase">
              Sua Chance de Virar o Jogo
            </h2>
            <CardDescription className="text-lg text-foreground/80 mt-2">
              Acesso imediato ao método completo por um preço especial.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center mb-8">
                <p className="text-lg text-muted-foreground">De <s className="line-through">R$297,00</s> por apenas:</p>
                <p className="text-5xl md:text-7xl font-black text-primary my-2">
                    12x de R$9,74
                </p>
                <p className="font-semibold">ou R$97,00 à vista</p>
            </div>

            <CountdownTimer />

            <div className="flex justify-center my-8">
                <CtaButton className="w-full" />
            </div>

            <div className="space-y-4 my-8">
              {offerFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground/90">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-around items-center gap-6 mt-10 pt-6 border-t border-white/10">
                {reassuranceIcons.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Icon className="w-5 h-5 text-primary" />
                            <span>{item.text}</span>
                        </div>
                    );
                })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
