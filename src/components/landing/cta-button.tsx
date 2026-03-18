import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  asChild?: boolean;
}

export function CtaButton({ children, className, ...props }: CtaButtonProps) {
  return (
    <Button
      className={cn(
        'w-full max-w-md text-lg sm:text-xl md:text-2xl font-black uppercase rounded-lg p-6 md:p-8 tracking-wider transform transition-transform hover:scale-105 animate-cta-glow shadow-lg shadow-primary/40',
        'h-auto text-balance leading-snug',
        className
      )}
      {...props}
    >
      {children || 'QUERO LUCRAR ALTO ANTES DA COPA'}
    </Button>
  );
}
