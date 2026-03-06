import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PlayCircle, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { CtaButton } from './cta-button';

const microProofs = [
    "Método simples",
    "Sem precisar de loja física",
    "Funciona mesmo começando do zero"
];

export function Vsl() {
  const thumbnail = PlaceHolderImages.find(img => img.id === 'vsl-thumbnail');

  return (
    <section className="pb-12 md:pb-16">
      <div className="container mx-auto max-w-5xl flex flex-col items-center">
        
        <div className="text-center mb-6">
            <p className="font-black text-2xl uppercase text-red-500 animate-pulse tracking-wider">Assista antes que essa página saia do ar</p>
            <p className="mt-3 max-w-2xl mx-auto text-foreground/80 text-balance">
                Assista a este vídeo rápido. Porque quando a Copa começar, esses produtos simplesmente desaparecem das lojas. E quem tem acesso ao fornecedor lucra primeiro.
            </p>
        </div>
        
        <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl shadow-black/50 border-4 border-accent">
          {thumbnail && (
            <Image
              src={thumbnail.imageUrl}
              alt={thumbnail.description}
              fill
              className="object-cover"
              data-ai-hint={thumbnail.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <PlayCircle className="w-20 h-20 md:w-32 md:h-32 text-white/70 hover:text-white hover:scale-110 transition-all cursor-pointer" />
          </div>
          <div className="absolute bottom-4 left-4 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
            AO VIVO
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-8 max-w-3xl w-full text-center">
            {microProofs.map((proof, index) => (
                <div key={index} className="flex items-center justify-center gap-2 text-foreground/90">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-sm md:text-base">{proof}</span>
                </div>
            ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 w-full max-w-md">
            <CtaButton>QUERO ACESSAR O FORNECEDOR AGORA</CtaButton>
            <p className="text-sm text-muted-foreground">Acesso imediato após o pagamento.</p>
        </div>
      </div>
    </section>
  );
}
