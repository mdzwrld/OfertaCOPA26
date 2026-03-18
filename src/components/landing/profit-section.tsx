import Image from 'next/image';
import { CtaButton } from './cta-button';
import { Equal, X } from 'lucide-react';
import Link from 'next/link';

export function ProfitSection() {
  const compraImageUrl = 'https://i.postimg.cc/N0C8DfV8/camisa-brasil-copa-2022-away1-1a2ee6a3d888e1650917193631604996-1024-1024.png';
  const vendaImageUrl = 'https://i.postimg.cc/SQBrHRKg/camisa-brasil-copa-20221-d55f265d7df90b0b2517193630804113-1024-1024.png';
  const ctaLink = "https://compraonlinesegurada.org.ua/c/c98a97a2bc";

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black text-accent uppercase tracking-wider mb-12 text-balance">
          A conta é simples: com UMA camisa você já lucra R$80 (no mínimo!)
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          {/* LADO ESQUERDO (COMPRA) */}
          <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-primary/20 transition-transform duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold uppercase text-foreground/80 mb-4">Você compra do fornecedor</h3>
            <Image 
              src={compraImageUrl}
              alt="Camisa de futebol do Brasil - Preço de compra"
              width={300}
              height={300}
              className="object-contain rounded-lg"
            />
            <p className="mt-4 text-lg text-foreground/70">Paga apenas</p>
            <p className="text-6xl md:text-7xl font-black text-primary my-2">R$40</p>
            <p className="text-sm text-muted-foreground">Comprando direto do fornecedor.</p>
          </div>

          {/* LADO DIREITO (VENDA) */}
          <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-accent/20 transition-transform duration-300 hover:scale-105 hover:shadow-accent/20 hover:shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold uppercase text-foreground/80 mb-4">Você revende na internet</h3>
             <Image 
              src={vendaImageUrl}
              alt="Camisa de futebol do Brasil - Preço de venda"
              width={300}
              height={300}
              className="object-contain rounded-lg"
            />
            <p className="mt-4 text-lg text-foreground/70">Vende por</p>
            <p className="text-6xl md:text-7xl font-black text-accent my-2">R$120</p>
            <p className="text-sm text-muted-foreground">Preço comum de venda no Brasil.</p>
          </div>
        </div>

        {/* TEXTO CENTRAL (LUCRO) */}
        <div className="bg-card rounded-lg p-6 md:p-8 max-w-4xl mx-auto border-2 border-accent shadow-2xl shadow-accent/20">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Seu Potencial de Lucro é Gigante</h3>
            <p className="mt-2 text-lg text-foreground/80">Com a Copa chegando, a demanda vai EXPLODIR. Faça as contas:</p>
            
            <div className="my-6 space-y-4 text-lg md:text-xl text-center max-w-md mx-auto">
              <div className="flex items-center justify-center gap-4">
                <p><span className="font-bold text-primary text-2xl">R$80 de lucro</span> por camisa</p>
              </div>
              <div className="flex items-center justify-center gap-4 text-accent">
                <X className="w-6 h-6" />
                <p><span className="font-bold">10 vendas</span> por dia (MUITO fácil na época da Copa)</p>
              </div>
              <div className="flex items-center justify-center gap-4 font-bold text-accent text-2xl border-t border-accent/50 pt-4 mt-4">
                <Equal className="w-6 h-6" />
                <p>= R$800 por dia</p>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-foreground text-balance font-medium max-w-3xl mx-auto">
                Isso pode chegar a <span className="text-primary font-bold">R$24.000 por mês</span> vendendo camisas que milhares de pessoas já estão procurando.
            </p>
            
            <div className="mt-8 pt-6 border-t border-white/10 max-w-3xl mx-auto space-y-4 text-md md:text-lg text-foreground/80 text-balance">
                <p className="font-semibold">O timing é TUDO.</p>
                <p>
                    A Copa do Mundo é o momento de maior procura. A demanda vai <span className="font-semibold text-accent">EXPLODIR</span>.
                </p>
                <p>
                    Quem tem acesso ao fornecedor certo aproveita essa demanda e <span className="text-primary font-semibold">lucra como nunca</span>. Quem não tem… assiste os outros venderem.
                </p>
                 <p className="text-primary font-bold pt-4 text-lg">
                    Mais de 3.000 vendedores já saíram na frente. Não espere a oportunidade passar.
                </p>
            </div>
        </div>

        {/* BOTÃO ABAIXO DA SEÇÃO */}
        <div className="mt-12 flex flex-col items-center">
            <Link href={ctaLink} target="_blank" className="contents">
              <CtaButton />
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
                Acesso imediato. Risco zero. Aja antes que acabe.
            </p>
        </div>

      </div>
    </section>
  );
}
