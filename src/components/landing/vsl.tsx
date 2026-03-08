import { CtaButton } from './cta-button';

export function Vsl() {
  const videoId = 'sdwXQor-WvE';

  return (
    <section className="pb-12 md:pb-16">
      <div className="container mx-auto max-w-5xl flex flex-col items-center">
        
        <div className="text-center mb-6">
            <p className="font-black text-2xl uppercase text-red-500 animate-pulse tracking-wider">Assista antes que o preço suba</p>
            <p className="mt-3 max-w-2xl mx-auto text-foreground/80 text-balance">
                Assista a este vídeo rápido. Porque quando a Copa começar, esses produtos simplesmente desaparecem das lojas. E quem tem acesso ao fornecedor lucra primeiro.
            </p>
        </div>
        
        <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl shadow-black/50 border-4 border-accent">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 w-full max-w-md">
            <CtaButton>QUERO ACESSAR O FORNECEDOR E COMEÇAR A LUCRAR AGORA</CtaButton>
            <p className="text-sm text-muted-foreground">Acesso imediato após o pagamento.</p>
        </div>
      </div>
    </section>
  );
}
