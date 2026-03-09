'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-background border-t border-white/10 py-8">
      <div className="container mx-auto text-center text-foreground/60 text-sm">
        <p>Copyright © {year} Futebol Lucrativo PRO. Todos os direitos reservados.</p>
        <p className="mt-2">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.</p>
        <div className="flex justify-center gap-4 mt-4">
          <Link href="#" className="hover:text-accent transition-colors">Termos de Uso</Link>
          <span className="opacity-50">|</span>
          <Link href="#" className="hover:text-accent transition-colors">Política de Privacidade</Link>
        </div>
      </div>
    </footer>
  );
}
