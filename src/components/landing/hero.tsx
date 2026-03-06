export function Hero() {
  return (
    <section className="py-12 md:py-20 text-center">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground uppercase tracking-wide text-balance">
          Descubra como pessoas comuns estão
          <span className="text-accent"> Lucrando</span> com produtos de futebol
          <br />
          <span className="text-primary underline">Antes da Copa do Mundo</span>
        </h1>
        <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 text-balance">
          Existe um fornecedor que vende camisas e produtos de futebol por até 70% mais barato.
          <br />
          Algumas pessoas estão comprando por <span className="font-bold text-accent text-2xl">R$40</span> e revendendo por <span className="font-bold text-accent text-2xl">R$120</span> ou mais.
          <br />
          No vídeo abaixo você vai entender como isso funciona.
        </p>
      </div>
    </section>
  );
}
