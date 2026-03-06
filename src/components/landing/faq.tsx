import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { faqItems } from "@/lib/data"
  
export function Faq() {
    return (
        <section id="faq" className="py-12 md:py-24 bg-card/50">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-accent uppercase tracking-wider">
                        Dúvidas Frequentes
                    </h2>
                    <p className="max-w-2xl mx-auto mt-4 text-lg text-foreground/80">
                        Ainda tem alguma pergunta? Nós temos as respostas.
                    </p>
                </div>
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqItems.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="bg-background border border-border rounded-lg px-6">
                            <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline text-foreground">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-base text-foreground/80 pt-2">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
