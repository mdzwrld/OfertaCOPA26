import { Lightbulb } from "lucide-react";

export function Opportunity() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="flex justify-center mb-8">
            <Lightbulb className="w-16 h-16 text-accent animate-pulse" />
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-accent uppercase tracking-wider mb-8">
          Por que essa oportunidade existe?
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-foreground/80 text-balance">
            <p className="text-2xl md:text-3xl font-bold text-white">A verdade é simples.</p>
            <p>
                Grandes fornecedores produzem milhares de camisas todos os meses para lojas e revendedores.
            </p>
            <p>
                Mas muitos desses produtos também acabam sendo revendidos diretamente por pessoas comuns na internet.
            </p>
            <p className="font-semibold text-primary bg-primary/10 p-4 rounded-md">
                A diferença é que quem tem acesso ao fornecedor certo consegue comprar muito mais barato.
            </p>
            <p>
                Enquanto a maioria paga caro em lojas ou intermediários… Alguns vendedores compram direto do fornecedor e revendem com uma alta margem de lucro.
            </p>
            <p className="font-bold text-white text-xl md:text-2xl pt-4">
                Foi exatamente isso que organizamos neste método.
            </p>
            <p>
                Você recebe acesso ao fornecedor, aprende como comprar pelo menor preço e como revender usando a internet.
            </p>
            <div className="pt-6">
                <p className="font-black text-2xl text-accent tracking-wider">Não é sorte.</p>
                <p className="font-black text-2xl text-accent tracking-wider">Não é promessa milagrosa.</p>
            </div>
            <p className="text-xl md:text-2xl font-medium pt-2">
                É simplesmente entender <span className="text-white font-semibold">onde comprar barato</span> e vender pelo preço que o mercado já paga.
            </p>
            <p className="font-bold text-primary pt-6 text-xl md:text-2xl">
                E é exatamente isso que milhares de vendedores já estão fazendo hoje.
            </p>
        </div>
      </div>
    </section>
  );
}
