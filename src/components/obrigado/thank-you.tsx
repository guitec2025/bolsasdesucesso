
'use client';

import { CheckCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ThankYou() {
  return (
    <section className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="max-w-2xl w-full bg-card p-8 sm:p-12 rounded-2xl shadow-lg border border-primary/20 text-center flex flex-col items-center">
          
          <div className="p-4 bg-green-100 rounded-full border-4 border-green-200 mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>

          <p className="font-headline text-primary text-xl sm:text-2xl">Parabéns!</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-headline text-[#4D4237] mt-2">
            Sua inscrição foi confirmada!
          </h1>

          <p className="mt-6 text-base sm:text-lg text-foreground/80 max-w-lg">
            Que alegria ter você com a gente! Prepare-se para mergulhar no universo do crochê e transformar sua paixão em um negócio de sucesso.
          </p>

          <div className="mt-8 text-left bg-accent/50 p-6 rounded-lg border border-border w-full space-y-4">
            <h2 className="text-xl font-bold font-headline text-center text-[#4D4237] mb-4">Próximos Passos</h2>
            <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-full mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                    <h3 className="font-bold text-foreground">Verifique seu e-mail</h3>
                    <p className="text-sm text-foreground/80">Enviamos todas as informações de acesso ao curso para o seu e-mail. Caso não encontre, verifique a caixa de spam.</p>
                </div>
            </div>
          </div>
          
          <div className="mt-10 w-full">
            <Button asChild size="lg" className="h-14 w-full text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse">
                <Link href="#">
                    QUERO ACESSAR O CURSO AGORA
                </Link>
            </Button>
            <p className="text-xs text-foreground/60 mt-2">Você será redirecionada para a plataforma do curso.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
