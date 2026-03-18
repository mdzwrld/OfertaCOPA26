import { CtaButton } from './cta-button';

export function Vsl() {
  return (
    <section className="pb-12 md:pb-16">
      <div className="container mx-auto max-w-5xl flex flex-col items-center">
        
        <div className="text-center mb-6">
            <p className="font-black text-2xl uppercase text-red-500 animate-pulse tracking-wider">ASSISTA ISSO URGENTE!</p>
            <p className="mt-3 max-w-2xl mx-auto text-foreground/80 text-balance">
                A Copa está virando a esquina e o estoque de camisas vai esgotar. Assista e descubra como garantir seu lucro antes que seja tarde demais.
            </p>
        </div>
        
        <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl shadow-black/50 border-4 border-accent bg-black">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/video-principal.mp4"
            controls
            autoPlay
            muted
            loop
            playsInline
          >
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 w-full max-w-md">
            <CtaButton />
            <p className="text-sm text-muted-foreground">Acesso imediato após o pagamento.</p>
        </div>
      </div>
    </section>
  );
}
