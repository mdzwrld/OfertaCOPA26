import { CheckCircle, CreditCard, Lock, ShieldCheck, Star, Zap } from "lucide-react";

export const navLinks = [
  { name: "O Método", href: "#metodo" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "Oferta", href: "#oferta" },
];

export const benefits = [
  {
    title: "Estratégias Validadas",
    description: "Aprenda as mesmas estratégias que os profissionais usam para lucrar todos os dias no mercado de futebol.",
    icon: Star,
  },
  {
    title: "Acesso Vitalício",
    description: "Pague uma vez e tenha acesso para sempre, incluindo todas as futuras atualizações do método.",
    icon: Lock,
  },
  {
    title: "Suporte Exclusivo",
    description: "Faça parte do nosso grupo VIP e tire todas as suas dúvidas diretamente com nossa equipe de especialistas.",
    icon: Zap,
  },
  {
    title: "Resultados Rápidos",
    description: "Comece a aplicar o método hoje mesmo e veja os primeiros resultados aparecerem na sua conta em poucos dias.",
    icon: CheckCircle,
  },
];

export const testimonials = [
  {
    name: "Carlos Andrade",
    avatarId: "testimonial-1",
    text: "Nunca pensei que fosse possível ganhar dinheiro com futebol de forma tão consistente. O Futebol Lucrativo PRO mudou meu jogo!",
  },
  {
    name: "Juliana Martins",
    avatarId: "testimonial-2",
    text: "Finalmente um método que funciona de verdade! O suporte é incrível e as estratégias são fáceis de aplicar. Já recuperei o investimento.",
  },
  {
    name: "Ricardo Souza",
    avatarId: "testimonial-3",
    text: "Estava cético no início, mas os resultados falam por si. É o melhor investimento que fiz esse ano. Recomendo 100%!",
  },
];

export const offerFeatures = [
  "Acesso completo ao Método Futebol Lucrativo PRO",
  "Planilhas de gerenciamento de banca",
  "Acesso ao grupo VIP de alunos no Telegram",
  "Suporte individual para tirar dúvidas",
  "Atualizações vitalícias do conteúdo",
  "Bônus: Módulo de mentalidade de investidor",
];

export const reassuranceIcons = [
    {
        icon: Lock,
        text: "Acesso imediato"
    },
    {
        icon: CreditCard,
        text: "Pagamento seguro"
    },
    {
        icon: ShieldCheck,
        text: "Garantia de 7 dias"
    }
];
