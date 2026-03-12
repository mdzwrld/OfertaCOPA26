"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
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
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  );

  return (
    <section id="depoimentos" className="py-12 md:py-24 bg-card/50">
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
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
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
          <CarouselPrevious className="-left-4 sm:-left-12" />
          <CarouselNext className="-right-4 sm:-right-12" />
        </Carousel>

        <div className="my-16 md:my-24 max-w-3xl mx-auto text-center p-6 md:p-8 bg-background border border-border rounded-lg shadow-lg">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-balance">
              Você não precisa ter seguidores para vender camisas de time.
            </h3>
            <p className="text-lg text-foreground/80 text-balance">
              Na verdade, a maioria das vendas acontece para pessoas que nunca te viram antes.
            </p>
            <p className="text-lg text-foreground/80 text-balance">
              Por isso eu incluí um bônus ensinando como vender usando:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 my-6 text-lg">
              <span className="bg-primary/10 text-primary font-bold px-6 py-3 rounded-lg border border-primary/20 shadow-lg shadow-primary/10 transition-transform hover:scale-105 flex items-center gap-2">
                <Image src="https://i.postimg.cc/sgh8Z3YZ/icone-shoppe.png" alt="Shopee" width={24} height={24} className="object-contain" />
                <span>Shopee</span>
              </span>
              <span className="bg-primary/10 text-primary font-bold px-6 py-3 rounded-lg border border-primary/20 shadow-lg shadow-primary/10 transition-transform hover:scale-105 flex items-center gap-2">
                <Image src="https://i.postimg.cc/YqWKQN75/tik-tok-icon-circle-11609379404aavrbp7kqt.png" alt="TikTok" width={24} height={24} className="object-contain rounded-full" />
                <span>TikTok</span>
              </span>
              <span className="bg-primary/10 text-primary font-bold px-6 py-3 rounded-lg border border-primary/20 shadow-lg shadow-primary/10 transition-transform hover:scale-105 flex items-center gap-2">
                <Image src="https://i.postimg.cc/XJVDhFTq/283-2831746-insta-icon-instagram.png" alt="Instagram" width={24} height={24} className="object-contain rounded-md" />
                <span>Instagram</span>
              </span>
            </div>
            <p className="text-lg text-foreground/80 text-balance">
              Plataformas que já têm milhões de pessoas procurando produtos todos os dias.
            </p>
            <p className="text-lg text-foreground/80 text-balance">
              Você só precisa saber como aparecer na frente delas.
            </p>
            <p className="text-xl font-bold text-accent text-balance pt-2">
              E é exatamente isso que você aprende.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
             <h3 className="text-2xl md:text-4xl font-bold text-white">
                Resultados de Alunos
            </h3>
        </div>
        
        <div className="md:hidden">
            <Carousel
                opts={{ align: "center", loop: true }}
                className="w-full max-w-xs mx-auto"
            >
                <CarouselContent>
                    {[getImage('income-proof-1'), getImage('income-proof-2'), getImage('income-proof-3')].map((proof, index) => (
                        proof && (
                            <CarouselItem key={index}>
                                <div className="flex flex-col items-center">
                                    <div className="rounded-lg overflow-hidden border-4 border-primary/50 shadow-lg shadow-primary/20">
                                        <Image
                                            src={proof.imageUrl}
                                            alt={proof.description}
                                            width={300}
                                            height={proof.id === 'income-proof-2' ? 500 : 533}
                                            className="object-cover"
                                            data-ai-hint={proof.imageHint}
                                        />
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-4 max-w-[280px] text-center">Resultados reais de quem aplica o método.</p>
                                </div>
                            </CarouselItem>
                        )
                    ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4" />
                <CarouselNext className="-right-4" />
            </Carousel>
        </div>
        <div className="hidden md:flex justify-center gap-8 flex-wrap items-start">
            {[getImage('income-proof-1'), getImage('income-proof-2'), getImage('income-proof-3')].map((proof, index) => (
                proof && (
                    <div key={index} className="flex flex-col items-center gap-2">
                        <div className="rounded-lg overflow-hidden border-4 border-primary/50 shadow-lg shadow-primary/20">
                            <Image
                                src={proof.imageUrl}
                                alt={proof.description}
                                width={300}
                                height={proof.id === 'income-proof-2' ? 500 : 533}
                                className="object-cover"
                                data-ai-hint={proof.imageHint}
                            />
                        </div>
                        <p className="text-sm text-muted-foreground mt-2 text-center">Resultados reais de quem aplica o método.</p>
                    </div>
                )
            ))}
        </div>
      </div>
    </section>
  );
}
