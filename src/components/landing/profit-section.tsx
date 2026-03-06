import Image from 'next/image';
import { CtaButton } from './cta-button';

export function ProfitSection() {
  const compraImageUrl = 'https://i.postimg.cc/N0C8DfV8/camisa-brasil-copa-2022-away1-1a2ee6a3d888e1650917193631604996-1024-1024.png';
  const vendaImageUrl = 'https://i.postimg.cc/SQBrHRKg/camisa-brasil-copa-20221-d55f265d7df90b0b2517193630804113-1024-1024.png';

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black text-accent uppercase tracking-wider mb-12">
          Quanto você pode lucrar com uma única camisa
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          {/* LADO ESQUERDO (COMPRA) */}
          <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-primary/20">
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
          <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-accent/20">
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
        <div className="bg-card rounded-lg p-8 max-w-4xl mx-auto border-2 border-accent shadow-2xl shadow-accent/20">
            <h3 className="text-2xl md:text-4xl font-black uppercase text-accent tracking-wider">Seu Potencial de Lucro é Gigante</h3>
            <p className="mt-2 text-lg text-foreground/80">A matemática é simples e poderosa.</p>

            <div className="my-8 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-center">
                <div className="flex-1">
                    <p className="text-6xl md:text-8xl font-black text-primary">R$80</p>
                    <p className="font-bold text-primary text-xl">LUCRO POR CAMISA</p>
                </div>
                <div className="text-2xl md:text-4xl font-thin text-accent/50">X</div>
                <div className="flex-1">
                    <p className="text-6xl md:text-8xl font-black text-foreground">10</p>
                    <p className="font-bold text-foreground/80 text-xl">VENDAS POR DIA</p>
                </div>
                <div className="text-2xl md:text-4xl font-thin text-accent/50">=</div>
                <div className="flex-1">
                    <p className="text-6xl md:text-8xl font-black text-accent">R$800</p>
                    <p className="font-bold text-accent text-xl">POR DIA</p>
                </div>
            </div>
            
            <p className="text-xl md:text-2xl text-foreground text-balance font-semibold">
                Isso são <span className="text-primary font-bold">R$24.000 por mês</span> vendendo produtos que todo mundo quer comprar.
            </p>
            <p className="mt-4 text-md md:text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
                Durante a Copa do Mundo a demanda explode. Ter acesso ao fornecedor certo coloca você a um passo de transformar essa oportunidade em lucro real no seu bolso.
            </p>
        </div>


        {/* BOTÃO ABAIXO DA SEÇÃO */}
        <div className="mt-12 flex flex-col items-center">
            <CtaButton>
                QUERO ACESSAR O FORNECEDOR AGORA
            </CtaButton>
            <p className="mt-3 text-sm text-muted-foreground">
                Acesso imediato após pagamento.
            </p>
        </div>

      </div>
    </section>
  );
}
