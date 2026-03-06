import Link from "next/link";
import { CtaButton } from "./cta-button";

export function StickyCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm border-t border-white/10 z-50 md:hidden">
      <CtaButton asChild>
        <Link href="#oferta">
            QUERO ACESSAR O FORNECEDOR AGORA
        </Link>
      </CtaButton>
    </div>
  );
}
