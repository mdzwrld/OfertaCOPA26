import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PlayCircle } from 'lucide-react';
import Image from 'next/image';

export function Vsl() {
  const thumbnail = PlaceHolderImages.find(img => img.id === 'vsl-thumbnail');

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-5xl">
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
        <p className="text-center mt-4 text-sm text-muted-foreground font-semibold">
            ▶️ Assista ao vídeo para revelarmos o segredo...
        </p>
      </div>
    </section>
  );
}
