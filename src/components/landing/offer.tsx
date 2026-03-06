import { Check, Gift, Lightbulb, Timer } from "lucide-react";
import { exclusiveBonuses, offerFeatures, reassuranceIcons } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { CtaButton } from "./cta-button";

export function Offer() {
  return (
    <section id="oferta" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-card border-2 border-primary shadow-2xl shadow-primary/20 overflow-hidden">
          <CardHeader className="text-center p-6 md:p-8">
            <h2 className="text-3xl md:text-5xl font-black text-accent uppercase tracking-wider">
              Sua Chance de Virar o Jogo
            </h2>
            <CardDescription className="max-w-2xl mx-auto text-lg text-foreground/80 mt-4 text-balance">
              Tenha acesso imediato ao método completo + fornecedor verificado usado por vendedores que estão lucrando revendendo camisas online.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <div className="bg-background/50 p-6 rounded-lg border border-border">
              <div className="text-center mb-6">
                  <p className="text-lg text-muted-foreground">De <s className="line-through">R$297,00</s> por apenas</p>
                  <p className="text-6xl md:text-8xl font-black text-primary my-2">
                      R$37,90
                  </p>
                  <p className="font-semibold">Pagamento único • Acesso imediato</p>
              </div>
              
              <div className="max-w-md mx-auto space-y-3">
                <div className="bg-primary/10 border border-primary/20 text-primary-foreground p-3 rounded-md text-center text-sm font-medium flex items-center justify-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Menos que o lucro de apenas 1 camisa vendida.</span>
                </div>
                <div className="bg-amber-500/10 border border-dashed border-amber-500/50 text-amber-500 p-3 rounded-md text-center text-sm font-medium flex items-center justify-center gap-2">
                  <Timer className="w-5 h-5 flex-shrink-0" />
                  <span>Esta condição especial pode sair do ar a qualquer momento.</span>
                </div>
              </div>

              <div className="flex justify-center my-8">
                  <CtaButton className="w-full max-w-lg">
                    QUERO ACESSAR O FORNECEDOR AGORA
                  </CtaButton>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="font-bold text-xl text-center mb-6 uppercase tracking-wider text-accent">Ao entrar hoje você recebe:</h3>
              <div className="space-y-3 max-w-2xl mx-auto">
                {offerFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 bg-card p-3 rounded-md">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center my-8">
                <CtaButton className="w-full max-w-lg">
                  QUERO ACESSAR O FORNECEDOR AGORA
                </CtaButton>
            </div>

            <div className="my-12 pt-8 border-t border-border">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-2">Você não recebe apenas o fornecedor…</h3>
              <p className="text-center text-muted-foreground mb-8">Você recebe um pacote completo para começar a vender.</p>
              <div className="space-y-4 max-w-2xl mx-auto">
                {exclusiveBonuses.map((bonus, index) => (
                  <div key={index} className="flex items-start gap-4 bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <Gift className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-primary block">BÔNUS #{index + 1}</span>
                      <span className="text-foreground/90">{bonus}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center my-8">
                <CtaButton className="w-full max-w-lg">
                  QUERO ACESSAR O FORNECEDOR AGORA
                </CtaButton>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-around items-center gap-6 mt-10 pt-8 border-t border-border text-sm text-muted-foreground">
                {reassuranceIcons.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div key={index} className="flex items-center gap-2">
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
