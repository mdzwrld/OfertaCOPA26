'use client';

import Link from 'next/link';
import { navLinks } from '@/lib/data';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Menu } from 'lucide-react';
import React from 'react';

export function Header() {
  const [open, setOpen] = React.useState(false);
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
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-6 text-lg font-medium mt-10">
                <Link href="/" className="text-2xl font-black text-accent" onClick={() => setOpen(false)}>
                    Futebol Lucrativo <span className="text-primary">PRO</span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Button asChild size="lg" className="mt-4">
                  <Link href="#oferta" onClick={() => setOpen(false)}>
                      QUERO LUCRAR
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
