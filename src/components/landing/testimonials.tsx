import { testimonials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Testimonials() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <section id="depoimentos" className="py-12 md:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-accent uppercase tracking-wider">
            Prova Social Real
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-foreground/80">
            Veja o que nossos alunos estão dizendo e os resultados que estão alcançando.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => {
              const avatar = getImage(testimonial.avatarId);
              return (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="bg-card border-primary/20 flex flex-col items-center text-center p-8 h-full">
                      <Avatar className="w-24 h-24 mb-4 border-4 border-primary">
                        {avatar && <AvatarImage src={avatar.imageUrl} alt={testimonial.name} />}
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <CardContent className="p-0 flex flex-col flex-grow">
                        <h3 className="font-bold text-xl text-accent">{testimonial.name}</h3>
                        <div className="flex justify-center my-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                          ))}
                        </div>
                        <blockquote className="mt-4 text-foreground/80 italic flex-grow">
                          <p>"{testimonial.text}"</p>
                        </blockquote>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>

        <div className="text-center my-16">
             <h3 className="text-2xl md:text-4xl font-bold text-white">
                Resultados de Alunos
            </h3>
        </div>
        <div className="flex justify-center gap-8 flex-wrap">
            {[getImage('income-proof-1'), getImage('income-proof-2')].map((proof, index) => (
                proof && (
                    <div key={index} className="rounded-lg overflow-hidden border-4 border-primary/50 shadow-lg shadow-primary/20">
                        <Image
                            src={proof.imageUrl}
                            alt={proof.description}
                            width={300}
                            height={500}
                            className="object-cover"
                            data-ai-hint={proof.imageHint}
                        />
                    </div>
                )
            ))}
        </div>
      </div>
    </section>
  );
}
