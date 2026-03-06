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
        
        <div className="mt-10 max-w-xs mx-auto bg-card border-2 border-dashed border-primary/50 p-4 rounded-lg shadow-lg shadow-primary/10">
            <h3 className="text-md font-bold uppercase text-primary tracking-widest">Exemplo Real</h3>
            <div className="mt-2 text-lg font-semibold text-foreground">
                <p>Camisa comprada: <span className="font-bold text-accent">R$40</span></p>
                <p>Venda média: <span className="font-bold text-accent">R$120</span></p>
                <p className="mt-2 text-primary text-xl">Lucro por peça: <span className="font-black">R$80</span></p>
            </div>
        </div>
      </div>
    </section>
  );
}
