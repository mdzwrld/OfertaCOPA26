import { CtaButton } from "./cta-button";
import { Lightbulb } from "lucide-react";
import Link from "next/link";

export function Opportunity() {
  const ctaLink = "https://compraonlinesegurada.org.ua/c/c98a97a2bc";
  return (
    <section id="oportunidade" className="py-12 md:py-24">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="flex justify-center mb-8">
            <Lightbulb className="w-16 h-16 text-accent animate-pulse" />
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-accent uppercase tracking-wider mb-8">
          A janela de oportunidade está aberta... por pouco tempo.
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-foreground/80 text-balance">
            <p className="text-2xl md:text-3xl font-bold text-white">A verdade é simples.</p>
            <p>
                Grandes fornecedores produzem milhares de camisas todos os meses. Antes da Copa, essa produção se intensifica.
            </p>
            <p>
                Muitos desses produtos são revendidos por pessoas comuns na internet, com lucros altíssimos.
            </p>
            <p className="font-semibold text-primary bg-primary/10 p-4 rounded-md">
                O segredo? Quem tem acesso ao fornecedor certo compra muito mais barato e sai na frente.
            </p>
            <p>
                Enquanto a maioria paga caro em lojas... Vendedores espertos compram direto da fonte e revendem com uma margem de lucro absurda.
            </p>
            <p className="font-bold text-white text-xl md:text-2xl pt-4">
                Nós organizamos tudo para você.
            </p>
            <p>
                Você recebe acesso ao fornecedor, aprende a comprar pelo menor preço e as estratégias para revender antes de todo mundo.
            </p>
            <div className="pt-6">
                <p className="font-black text-2xl text-accent tracking-wider">Não é sorte.</p>
                <p className="font-black text-2xl text-accent tracking-wider">É estratégia e timing.</p>
            </div>
            <p className="text-xl md:text-2xl font-medium pt-2">
                É simplesmente ter a informação certa <span className="text-white font-semibold">na hora certa</span>.
            </p>
            <p className="font-bold text-primary pt-6 text-xl md:text-2xl">
                A hora é AGORA. Milhares já estão lucrando e a concorrência só aumenta.
            </p>
        </div>
        <div className="mt-12 flex flex-col items-center">
          <Link href={ctaLink} target="_blank" className="contents">
            <CtaButton />
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
              Acesso imediato. A janela de oportunidade está se fechando.
          </p>
        </div>
      </div>
    </section>
  );
}
