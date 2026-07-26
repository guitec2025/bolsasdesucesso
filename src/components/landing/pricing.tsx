
'use client';

import { Star, Clock } from 'lucide-react';
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
    <section id="pricing" className="py-12 sm:py-24 bg-background overflow-visible">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <div className="inline-flex items-center gap-2 bg-card border border-border px-3 py-1 rounded-lg text-sm font-semibold text-foreground shadow-sm mb-4">
            <Star className="w-4 h-4 text-primary" />
            <span>Inscrição</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-headline mt-4 text-[#4D4237]">Garanta Sua Vaga</h2>
        
        <Card className="max-w-md mt-16 w-full shadow-[0_20px_50px_rgba(246,170,40,0.2)] border-2 border-primary bg-card relative overflow-visible shadow-golden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center z-20">
            <div className="bg-primary text-primary-foreground rounded-full px-6 py-2 text-sm font-bold whitespace-nowrap flex items-center gap-2 shadow-md">
                <Star className="w-4 h-4 fill-current" />
                ACESSO VITALÍCIO
            </div>
          </div>

          <CardHeader className="items-center pt-12 pb-2">
            <CardTitle className="font-bold font-headline text-primary text-2xl">Plano Completo</CardTitle>
            <CardDescription className="text-base text-center max-w-[280px] text-foreground/80 mt-2">
              Aproveite <b>acesso total e para sempre</b> a todas as aulas, bônus e atualizações!
            </CardDescription>
            
            <div className="mt-6 text-center">
                <p className="text-base text-black/70 font-medium">💰 De <span className="line-through">R${originalPrice}</span> por</p>
                <div className="flex items-baseline justify-center gap-0.5 text-black">
                    <span className="text-6xl font-black">R${priceWhole}</span>
                    <span className="text-3xl font-black">,{priceCents}</span>
                </div>
                 <p className="text-sm text-black flex items-center gap-2 justify-center mt-3 font-bold">
                    <Clock className="w-4 h-4 text-black" />
                    Oferta exclusiva por tempo limitado!
                </p>
            </div>
          </CardHeader>

          <CardContent className="flex flex-col items-center px-6">
            <div className="w-full text-left my-6 border-t border-border/50 pt-6">
                <h3 className="font-bold text-center mb-6 font-headline text-black text-lg">Você vai receber:</h3>
                <ul className="space-y-4">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <span className="text-xl shrink-0">{feature.icon}</span>
                        <span className="text-base text-foreground leading-snug" dangerouslySetInnerHTML={{ __html: feature.text }}></span>
                    </li>
                ))}
                </ul>
                
                <div className="text-left mt-6 bg-[#FFF8EC] border border-primary/20 p-4 rounded-xl flex items-start gap-3 shadow-sm">
                  <span className="text-2xl shrink-0">🎁</span>
                  <p className="font-bold text-black text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: bonusFeature.text }}></p>
                </div>
            </div>

            <a 
              href={checkoutUrl} 
              id="btn-pricing-checkout"
              className="inline-flex items-center justify-center w-full h-16 text-xl font-black text-white shadow-lg animate-pulse-strong hover:animate-none transition-all active:scale-95 bg-[#478552] hover:bg-[#3d7246] rounded-md gap-2 decoration-0"
            >
              QUERO ACESSO VITALÍCIO
            </a>
          </CardContent>

          <CardFooter className="flex-col gap-2 px-6 pb-8">
            <Image
              src="https://i.ibb.co/WvsKkQDc/selo-checkout-seguro.webp"
              alt="Compra segura e garantia"
              width={300}
              height={46}
              className="mt-4 opacity-80"
            />
          </CardFooter>
        </Card>
      </div>
      
      <style jsx global>{`
        @keyframes custom-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(71, 133, 82, 0.4); }
          50% { transform: scale(1.03); box-shadow: 0 0 20px 10px rgba(71, 133, 82, 0); }
        }
        .animate-pulse-strong {
          animation: custom-pulse 2s infinite ease-in-out;
        }
        .shadow-golden {
          box-shadow: 0 20px 50px -12px rgba(212, 175, 55, 0.3);
        }
      `}</style>
    </section>
  );
}
