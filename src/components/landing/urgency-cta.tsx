import { CtaButton } from "@/components/landing/cta-button";
import { CreditCard, Lock, Zap } from "lucide-react";

export function UrgencyCta() {
  return (
    <section id="oportunidade" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-black text-accent uppercase tracking-wider text-balance max-w-4xl">
          PARE DE ASSISTIR OUTRAS PESSOAS LUCRAREM NA COPA
        </h2>
        <div className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 text-balance leading-relaxed space-y-6">
            <p>
            Enquanto muita gente vai apenas assistir aos jogos…
            <br />
            Algumas pessoas vão aproveitar a Copa do Mundo para ganhar dinheiro vendendo produtos de futebol.
            </p>
            <p>
            Comprando barato direto do fornecedor e revendendo por muito mais.
            </p>
            <p>
            Você acabou de ver no vídeo como isso funciona.
            </p>
            <p className="font-bold">
            Agora a única decisão é:{" "}
            <span className="text-primary">
                entrar agora ou continuar só assistindo os outros ganharem dinheiro.
            </span>
            </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 w-full max-w-md">
          <CtaButton>QUERO ACESSAR O FORNECEDOR AGORA</CtaButton>
          <p className="text-sm text-muted-foreground">
            Acesso imediato após o pagamento.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                <span>Pagamento seguro</span>
            </div>
            <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-primary" />
                <span>Compra protegida</span>
            </div>
        </div>
      </div>
    </section>
  );
}
