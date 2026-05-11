
'use client';

import { Button } from "../ui/button";
import Image from 'next/image';
import Link from "next/link";

export function FooterES() {
    return (
      <footer className="bg-background text-foreground py-12 px-4 sm:px-6">
        <div className="container mx-auto text-center flex flex-col items-center">
            <h3 className="text-2xl sm:text-3xl font-bold font-headline text-[#4D4237]"><b>¿Lista para crear Bolsos de Crochet Increíbles?</b></h3>
            <p className="mt-2 text-foreground max-w-xl"><b>No pierdas la oportunidad de transformar simples hilos en un negocio lucrativo e placentero.</b> ¡Inscríbete ahora y comienza a crear tus propios bolsos!</p>
            <Button
              size="lg"
              className="mt-6 h-14 text-lg border-0 hover:opacity-90 font-medium"
              style={{ backgroundColor: '#f6aa28', color: '#312a23' }}
              asChild
            >
              <a href="#pricing">
                QUIERO INSCRIBIRME
              </a>
            </Button>
            <Image
                src="https://i.imgur.com/afQUr6D.png"
                alt="Métodos de pago"
                width={250}
                height={45}
                className="mt-6"
            />
            <div className="border-t border-border/50 w-full pt-8 mt-12">
                <p className="text-sm text-foreground/80">&copy; 2024 Escuela de Crochet – Todos los derechos reservados.</p>
                <div className="flex justify-center gap-2 mt-4 text-xs text-foreground/70">
                    <Link href="#" className="hover:underline">Política de Privacidad</Link>
                    <span>|</span>
                    <Link href="#" className="hover:underline">Términos de Uso</Link>
                </div>
            </div>
        </div>
      </footer>
    );
  }
