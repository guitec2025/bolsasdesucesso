
'use client';

import Image from 'next/image';
import Link from "next/link";
import { useState, useEffect } from "react";

interface FooterProps {
  hideCTA?: boolean;
}

export function Footer({ hideCTA = false }: FooterProps) {
    const [currentYear, setCurrentYear] = useState<number | null>(null);

    useEffect(() => {
        const year = new Date().getFullYear();
        setCurrentYear(year);
    }, []);

    return (
      <footer className="bg-background text-foreground py-12 px-4 sm:px-6">
        <div className="container mx-auto text-center flex flex-col items-center">
            {!hideCTA && (
              <>
                <h3 className="text-2xl sm:text-3xl font-bold font-headline text-[#4D4237]"><b>Pronta para Criar Bolsas de Crochê Incríveis?</b></h3>
                <p className="mt-2 text-foreground max-w-xl"><b>Não perca a chance de transformar simples fios em um negócio lucrativo e prazeroso.</b> Inscreva-se agora e comece a criar suas próprias bolsas!</p>
                <a 
                  href="#pricing" 
                  id="btn-footer-cta"
                  className="mt-6 inline-flex items-center justify-center h-14 px-8 text-lg hover:opacity-90 font-medium rounded-md decoration-0"
                  style={{ backgroundColor: '#f6aa28', color: '#312a23' }}
                >
                  QUERO ME INSCREVER
                </a>
                <Image
                    src="https://i.ibb.co/DHYhsYP7/pagamento-seguro.webp"
                    alt="Formas de pagamento"
                    width={250}
                    height={45}
                    className="mt-6"
                    data-ai-hint="payment methods"
                />
              </>
            )}
            <div className={`border-t border-border/50 w-full pt-8 ${!hideCTA ? 'mt-12' : 'mt-0'}`}>
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
