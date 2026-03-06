import { CtaButton } from "./cta-button";

export function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-accent uppercase tracking-wider text-balance">
          Descubra o Segredo para Lucrar com Futebol <span className="text-primary">Todos os Dias</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 text-balance">
          Pare de contar com a sorte. Use nosso método validado por especialistas para transformar sua paixão nacional em uma fonte de renda previsível e escalável.
        </p>
        <div className="mt-12 flex justify-center">
            <CtaButton />
        </div>
      </div>
    </section>
  );
}
