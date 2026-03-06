import Image from 'next/image';
import { CtaButton } from './cta-button';

export function ProfitSection() {
  const jerseyImageUrl = 'https://storage.googleapis.com/maker-studio-5289a.appspot.com/prompt_and_response_images/ZdGg97TMTfQv9n7oW5XyRqb2GqH3/1722421303866_0.jpeg';

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
              src={jerseyImageUrl}
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
              src={jerseyImageUrl}
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
        <div className="bg-background/50 rounded-lg p-8 max-w-3xl mx-auto border-2 border-dashed border-primary">
            <h3 className="text-2xl md:text-3xl font-bold uppercase text-primary">Lucro por camisa</h3>
            <p className="text-7xl md:text-8xl font-black text-primary my-4">R$80</p>
            <p className="text-lg md:text-xl text-foreground/80 text-balance">
                Agora imagine vender apenas 10 camisas por dia. <span className='font-bold text-accent'>São R$800 por dia.</span>
            </p>
            <p className="mt-4 text-md md:text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
                Durante a Copa do Mundo, produtos de futebol vendem extremamente rápido. Quem tem acesso ao fornecedor sai na frente.
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
