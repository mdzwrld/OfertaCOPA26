import { benefits } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Benefits() {
  return (
    <section className="py-12 md:py-24 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-accent uppercase tracking-wider">
            Vantagens Exclusivas
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-foreground/80">
            Veja por que nosso método é a escolha número 1 de quem busca lucros reais com futebol.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="bg-background/50 border-primary/20 shadow-lg shadow-primary/10 transition-transform transform hover:-translate-y-2">
                <CardHeader className="items-center text-center">
                  <div className="p-4 bg-primary/20 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-accent">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-foreground/80">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
