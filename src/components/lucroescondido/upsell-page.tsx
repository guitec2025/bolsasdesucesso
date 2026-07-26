
'use client';

import { Button } from '@/components/ui/button';
import { Check, CheckCircle, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Script from 'next/script';
import React, { useEffect } from 'react';

export function UpsellPage() {
  const painPoints = [
    'Você vende bem, mas o dinheiro some',
    'Tem medo de cobrar mais caro',
    'Copia preço da concorrência',
    'Não sabe se está tendo lucro ou prejuízo',
  ];

  const finalResults = [
    'Clareza total dos custos',
    'Segurança ao precificar',
    'Controle do lucro',
    'Menos prejuízo invisível',
  ];
  
  const objections = [
    {
      question: 'Não sou boa com números.',
      answer:
        'O método foi criado para iniciantes. A planilha faz as contas.',
    },
    {
      question: 'Isso é complicado?',
      answer:
        'Não. É direto, prático e pensado para o dia a dia.',
    },
    {
      question: 'Serve para quem vende pouco?',
      answer:
        'Sim. Quanto menor a produção, mais importante é precificar certo.',
    },
  ];

  useEffect(() => {
    const initOcu = () => {
      if (typeof (window as any).OcuExternal !== 'undefined' && !(window as any).ocuInitialized) {
        new (window as any).OcuExternal();
        (window as any).ocuInitialized = true;
      }
    };

    const timer = setTimeout(initOcu, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <section className="py-12 sm:py-16 bg-gray-50 font-montserrat">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-10 sm:gap-12">
            
            {/* Block 1: Hero */}
            <div className="w-full flex flex-col items-center gap-6">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight">
                Você não precisa vender mais.
                <br/>
                <span className="text-foreground">Precisa parar de perder dinheiro escondido.</span>
              </h1>
              <h2 className="text-lg sm:text-xl text-foreground/80 max-w-xl">
                O Método Lucro Escondido revela o custo real e o lucro verdadeiro de cada cookie que você vende.
              </h2>
              <div className="mt-2">
                <Image 
                  src="https://picsum.photos/seed/lucro1/500/300"
                  alt="Capa do Método Lucro Escondido"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-xl"
                  data-ai-hint="finance spreadsheet"
                />
              </div>
            </div>
            
            {/* Block 2: Identification */}
            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-primary/10">
               <ul className="space-y-4 text-left">
                {painPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3 text-base sm:text-lg text-foreground/80">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Block 3: Method Presentation */}
            <div className="w-full flex flex-col items-center gap-8">
              <div className="max-w-xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-primary">O processo prático de 3 passos</h3>
                <p className="mt-2 text-lg sm:text-xl text-foreground/80">
                  Criado para revendedoras que querem vender com clareza e segurança.
                </p>
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="bg-white p-5 rounded-lg border">
                  <span className="font-bold text-primary">Passo 1</span>
                  <h4 className="text-lg font-semibold mt-1">Clareza de custos</h4>
                  <p className="text-foreground/70 mt-1 text-sm">Entenda os custos invisíveis da sua receita com o ebook prático.</p>
                </div>
                <div className="bg-white p-5 rounded-lg border">
                  <span className="font-bold text-primary">Passo 2</span>
                  <h4 className="text-lg font-semibold mt-1">Cálculo do custo real</h4>
                  <p className="text-foreground/70 mt-1 text-sm">Aplique os números na planilha e descubra o custo por unidade.</p>
                </div>
                <div className="bg-white p-5 rounded-lg border">
                  <span className="font-bold text-primary">Passo 3</span>
                  <h4 className="text-lg font-semibold mt-1">Precificação segura</h4>
                  <p className="text-foreground/70 mt-1 text-sm">Defina o preço certo e enxergue o lucro antes de vender.</p>
                </div>
              </div>
            </div>

            {/* Block 4: Visual Result */}
            <div className="w-full flex flex-col items-center gap-6">
              <Image 
                src="https://picsum.photos/seed/lucro2/500/85"
                alt="Após aplicar o método, você terá:"
                width={500}
                height={85}
              />
              <div className="w-full max-w-md grid grid-cols-2 gap-x-6 gap-y-3 text-left">
                {finalResults.map((result, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-foreground/80">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Block 5: Objection Handling */}
            <div className="w-full space-y-4 text-left">
              {objections.map((objection, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border">
                  <p className="font-semibold text-primary flex items-start gap-2">
                    <HelpCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    {objection.question}
                  </p>
                  <p className="mt-2 text-foreground/80 pl-7">
                    {objection.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* Block 6 & 7: Offer & CTA */}
            <div className="mt-4 w-full max-w-lg bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border-2 border-green-500">
              <h5 className="text-xl sm:text-2xl font-bold text-center text-secondary">
                Oferta Especial (Apenas Agora)
              </h5>
              <p className="mt-3 text-center text-foreground/80">
                Este método está disponível somente agora, com valor especial, para quem deseja vender com mais lucro e menos insegurança.
              </p>
              <div className="mt-4 flex justify-center items-center gap-4 text-sm text-foreground/70">
                  <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-600" /> Acesso imediato</span>
                  <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-600" /> Uso ilimitado</span>
              </div>

              <div className="my-6 text-center">
                <p className="text-sm text-foreground/80 font-bold">
                  De <span className="line-through">R$67,00</span> por apenas:
                </p>
                <p className="text-5xl sm:text-6xl font-extrabold text-green-600 mt-1">
                  R$27
                </p>
                <p className="text-base font-medium text-foreground/70 mt-1">
                  Pagamento único, sem mensalidades.
                </p>
              </div>
              
              <a 
                href="https://escoladecookies.mycartpanda.com/ex-ocu/next-offer/91jv668j5n?accepted=yes"
                id="btn-upsell-accept" 
                className="inline-flex items-center justify-center h-14 w-full text-lg font-bold bg-green-600 hover:bg-green-700 text-white rounded-md animate-pulse decoration-0"
              >
                👉 Adicionar o Método ao meu pedido
              </a>
              <p className="text-xs text-center mt-2 text-foreground/60">
                Melhor saber seus números do que continuar no achismo.
              </p>
              
              <p className="text-center mt-4">
                  <a 
                    href="https://escoladecookies.mycartpanda.com/ex-ocu/next-offer/91jv668j5n?accepted=no"
                    id="btn-upsell-decline" 
                    className="text-sm text-red-600 hover:underline"
                  >
                      Não, obrigado. Quero continuar sem saber meu lucro real.
                  </a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
