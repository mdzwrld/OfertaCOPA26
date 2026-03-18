import { CheckCircle } from "lucide-react";

const exclusiveBenefits = [
  "Fornecedor secreto de produtos de futebol",
  "Passo a passo de importação",
  "Estratégia para vender rápido",
  "Como vender no Instagram",
  "Como vender na Shopee",
  "Como vender no Tiktok",
];

export function Benefits() {
  return (
    <section className="py-12 md:py-24 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-accent uppercase tracking-wider">
            Vantagens Exclusivas
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-foreground/80">
            Veja por que nosso método é a escolha número 1 de quem busca lucros reais com futebol.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {exclusiveBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 p-5 rounded-lg bg-background/50 border border-primary/20 shadow-lg shadow-primary/10 transition-transform transform hover:-translate-y-1">
              <CheckCircle className="w-7 h-7 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-lg font-medium text-foreground/90 text-left">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
