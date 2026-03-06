import { XCircle, CheckCircle } from "lucide-react";
import { CtaButton } from "./cta-button";

export function Reinforcement() {
  return (
    <section id="reforco" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-black text-accent uppercase tracking-wider mb-12">
          Você tem 2 opções agora
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
            {/* Opção 1 */}
            <div className="border-2 border-red-500/50 bg-red-500/10 p-8 rounded-lg flex flex-col items-center">
                <XCircle className="w-16 h-16 text-red-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">OPÇÃO 1: IGNORAR</h3>
                <p className="text-foreground/80">
                    Sair desta página e continuar perdendo a chance de lucrar com a paixão nacional, vendo outros ganharem dinheiro enquanto você fica de fora.
                </p>
            </div>

            {/* Opção 2 */}
            <div className="border-2 border-primary bg-primary/10 p-8 rounded-lg flex flex-col items-center">
                <CheckCircle className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">OPÇÃO 2: AGIR</h3>
                <p className="text-foreground/80">
                    Clicar no botão abaixo, garantir seu acesso por um preço ridículo, e começar a construir sua nova fonte de renda com futebol antes que seja tarde demais.
                </p>
            </div>
        </div>
        <div className="mt-12 flex flex-col items-center">
          <CtaButton>QUERO ACESSAR O FORNECEDOR E COMEÇAR A LUCRAR AGORA</CtaButton>
          <p className="mt-3 text-sm text-muted-foreground">
              Escolha o caminho do lucro. A decisão é sua.
          </p>
        </div>
      </div>
    </section>
  );
}
