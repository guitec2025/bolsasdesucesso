
'use client';

import { Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';

interface PricingProps {
  priceWhole?: string;
  priceCents?: string;
  originalPrice?: string;
  checkoutUrl?: string;
}

export function Pricing({ 
  priceWhole = "37", 
  priceCents = "90", 
  originalPrice = "97",
  checkoutUrl = "https://checkout.bolsasdesucesso.com/VCCL1O8SCPBX"
}: PricingProps) {
  
  const features = [
    { icon: '✅', text: '<b>Acesso vitalício</b> às aulas + atualizações futuras' },
    { icon: '👗', text: 'Mais de <b>67 modelos de bolsas</b> de crochê lucrativas e exclusivas' },
    { icon: '🎥', text: '<b>Passo a Passo</b> para ver quando e quantas vezes quiser' },
    { icon: '📚', text: '<b>PDFs completos</b> com todas as receitas' },
    { icon: '💬', text: '<b>Suporte comigo 24h/dia</b>' },
    { icon: '💬', text: '<b>Comunidade exclusiva</b> para tirar dúvidas e compartilhar' },
    { icon: '💃', text: '<b>Novas coleções grátis</b> sempre que saírem' },
    { icon: '🔧', text: '<b>Suporte vitalício</b> garantido' },
  ];
  
  const bonusFeature = { icon: '🎁', text: 'Ganhe <b>R$300 em bônus</b> para alavancar seu aprendizado e faturar com o que você ama!' };

  return (
    <section id="pricing" className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <div className="inline-flex items-center gap-2 bg-card border border-border px-3 py-1 rounded-lg text-sm font-semibold text-foreground shadow-sm">
            <Star className="w-4 h-4 text-primary" />
            <span>Inscrição</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-headline mt-4 text-[#4D4237]"><b>Garanta Sua Vaga</b></h2>
        <Card className="max-w-md mt-12 w-full shadow-2xl border-2 border-primary/50 bg-card relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
            <div className="bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-sm font-semibold whitespace-nowrap flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                Acesso Vitalício
            </div>
          </div>
          <CardHeader className="items-center pt-12">
            <CardTitle className="font-bold font-headline text-primary">Plano Completo</CardTitle>
            <CardDescription className="text-base text-center max-w-xs text-foreground">Aproveite <b>acesso total e para sempre</b> a todas as aulas, bônus e atualizações!</CardDescription>
            <div className="mt-4 text-center">
                <p className="text-base text-black">💰De <span className="line-through">R${originalPrice}</span> por</p>
                <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-extrabold text-black"><b>R${priceWhole}</b></span>
                    <span className="text-3xl font-extrabold text-black"><b>,{priceCents}</b></span>
                </div>
                 <p className="text-sm text-black flex items-center gap-2 justify-center mt-2 font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <b>Oferta exclusiva por tempo limitado!</b>
                </p>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            
            <div className="w-full text-left my-6 border-t border-border/50 pt-6">
                <h3 className="font-bold text-center mb-4 font-headline text-black"><b>Você vai receber:</b></h3>
                <ul className="space-y-4">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <span className="text-xl">{feature.icon}</span>
                        <span className="text-base text-foreground mt-px" dangerouslySetInnerHTML={{ __html: feature.text }}></span>
                    </li>
                ))}
                </ul>
                <div className="text-left mt-4 bg-primary/10 p-4 rounded-md flex items-start gap-3">
                  <span className="text-xl">{bonusFeature.icon}</span>
                  <p className="font-bold text-black mt-px" dangerouslySetInnerHTML={{ __html: bonusFeature.text }}></p>
                </div>
            </div>
            <Button
              asChild
              size="lg"
              className='w-full h-14 text-lg font-medium text-white'
              style={{ backgroundColor: '#478552' }}
            >
              <a 
                href={checkoutUrl}
                onClick={(e) => {
                  (e.currentTarget as HTMLElement).style.pointerEvents = 'none';
                }}
              >
                QUERO ACESSO VITALÍCIO
              </a>
            </Button>
          </CardContent>
          <CardFooter className="flex-col gap-2 px-6 pb-6">
            <Image
              src="https://i.imgur.com/YH11xZr.png"
              alt="Compra segura e garantia"
              width={300}
              height={46}
              className="mt-4"
              data-ai-hint='secure payment'
            />
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
