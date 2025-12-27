
'use client';

import { Button } from "../ui/button";
import Image from 'next/image';
import Link from "next/link";
import { useState, useEffect } from "react";

export function Footer() {
    const [currentYear, setCurrentYear] = useState<number | null>(null);

    useEffect(() => {
        const year = new Date().getFullYear();
        setCurrentYear(year);
    }, []);

    return (
      <footer className="bg-background text-foreground py-12 px-4 sm:px-6">
        <div className="container mx-auto text-center flex flex-col items-center">
            <h3 className="text-2xl sm:text-3xl font-bold font-headline text-[#4D4237]"><b>Pronta para Criar Bolsas de Crochê Incríveis?</b></h3>
            <p className="mt-2 text-foreground max-w-xl"><b>Não perca a chance de transformar simples fios em um negócio lucrativo e prazeroso.</b> Inscreva-se agora e comece a criar suas próprias bolsas!</p>
            <Button size="lg" className="mt-6 h-14 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium" asChild>
              <a href="#pricing" rel="noopener noreferrer">
                QUERO ME INSCREVER
              </a>
            </Button>
            <Image
                src="https://i.imgur.com/afQUr6D.png"
                alt="Formas de pagamento"
                width={250}
                height={45}
                className="mt-6"
                data-ai-hint="payment methods"
            />
            <div className="mt-12 border-t border-border/50 w-full pt-8">
                {currentYear ? (
                   <p className="text-sm text-foreground/80">&copy; {currentYear} Escola de Crochê – Todos os direitos reservados.</p>
                ) : <div className="h-5 w-80"></div>}
                <div className="flex justify-center gap-2 mt-4 text-xs text-foreground/70">
                    <Link href="#" className="hover:underline">Política de Privacidade</Link>
                    <span>|</span>
                    <Link href="#" className="hover:underline">Termos de Uso</Link>
                </div>
            </div>
        </div>
      </footer>
    );
  }
