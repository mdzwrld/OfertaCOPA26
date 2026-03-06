import Link from 'next/link';
import { navLinks } from '@/lib/data';
import { Button } from '../ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Link href="/" className="text-2xl font-black text-accent">
          Futebol Lucrativo <span className="text-primary">PRO</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>
        <Button asChild className="hidden md:block">
            <Link href="#oferta">
                QUERO LUCRAR
            </Link>
        </Button>
      </div>
    </header>
  );
}
