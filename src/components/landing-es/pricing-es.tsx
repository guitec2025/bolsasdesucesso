
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

export function PricingES({ 
  priceWhole = "6", 
  priceCents = "99", 
  originalPrice = "49,99",
  checkoutUrl = "https://pay.hotmart.com/C105777260S?checkoutMode=10"
}: PricingProps) {
  
  const features = [
    { icon: '✅', text: '<b>Acceso de por vida</b> a las clases + futuras actualizaciones' },
    { icon: '👗', text: 'Más de <b>67 modelos de bolsos</b> de crochet lucrativos e exclusivos' },
    { icon: '🎥', text: '<b>Paso a Paso</b> para ver cuándo y cuántas veces quieras' },
    { icon: '📚', text: '<b>PDFs completos</b> con todas las recetas' },
    { icon: '💬', text: '<b>Soporte conmigo 24h/dia</b>' },
    { icon: '💬', text: '<b>Comunidad exclusiva</b> para resolver dudas' },
    { icon: '💃', text: '<b>Nuevas colecciones gratis</b> cada vez que salgan' },
    { icon: '🔧', text: '<b>Soporte de por vida</b> garantizado' },
  ];
  
  const bonusFeature = { icon: '🎁', text: '¡Gana <b>$300 en bonos</b> para impulsar tu aprendizaje y facturar con lo que amas!' };

  return (
    <section id="pricing" className="py-12 sm:py-24 bg-background overflow-visible">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <div className="inline-flex items-center gap-2 bg-card border border-border px-3 py-1 rounded-lg text-sm font-semibold text-foreground shadow-sm mb-4">
            <Star className="w-4 h-4 text-primary" />
            <span>Inscripción</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-headline mt-4 text-[#4D4237]">Asegura tu Cupo</h2>

        <Card className="max-w-md mt-16 w-full shadow-[0_20px_50px_rgba(246,170,40,0.2)] border-2 border-primary bg-card relative overflow-visible">
          {/* Badge Superior */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center z-20">
            <div className="bg-primary text-primary-foreground rounded-full px-6 py-2 text-sm font-bold whitespace-nowrap flex items-center gap-2 shadow-md">
                <Star className="w-4 h-4 fill-current" />
                ACCESO DE POR VIDA
            </div>
          </div>

          <CardHeader className="items-center pt-12 pb-2">
            <CardTitle className="font-bold font-headline text-primary text-2xl">Plan Completo</CardTitle>
            <CardDescription className="text-base text-center max-w-[280px] text-foreground/80 mt-2">
              ¡Aprovecha <b>acceso total y para siempre</b> a todas las clases, bonos y actualizaciones!
            </CardDescription>
            
            <div className="mt-6 text-center">
                <p className="text-base text-black/70 font-medium">💰 De <span className="line-through">${originalPrice}</span> por</p>
                <div className="flex items-baseline justify-center gap-0.5 text-black">
                    <span className="text-6xl font-black">${priceWhole}</span>
                    <span className="text-3xl font-black">,{priceCents}</span>
                </div>
                 <p className="text-sm text-black flex items-center gap-2 justify-center mt-3 font-bold">
                    <Clock className="w-4 h-4 text-black" />
                    ¡Oferta exclusiva por tiempo limitado!
                </p>
            </div>
          </CardHeader>

          <CardContent className="flex flex-col items-center px-6">
            <div className="w-full text-left my-6 border-t border-border/50 pt-6">
                <h3 className="font-bold text-center mb-6 font-headline text-black text-lg">Recibirás:</h3>
                <ul className="space-y-4">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <span className="text-xl shrink-0">{feature.icon}</span>
                        <span className="text-base text-foreground leading-snug" dangerouslySetInnerHTML={{ __html: feature.text }}></span>
                    </li>
                ))}
                </ul>
                
                {/* Box de Bônus */}
                <div className="text-left mt-6 bg-[#FFF8EC] border border-primary/20 p-4 rounded-xl flex items-start gap-3 shadow-sm">
                  <span className="text-2xl shrink-0">🎁</span>
                  <p className="font-bold text-black text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: bonusFeature.text }}></p>
                </div>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full h-16 text-xl font-black text-white shadow-lg animate-pulse hover:animate-none transition-all active:scale-95 bg-[#478552] hover:bg-[#3d7246]"
            >
              <a href={checkoutUrl}>
                QUIERO ACCESO DE POR VIDA
              </a>
            </Button>
          </CardContent>

          <CardFooter className="flex-col gap-2 px-6 pb-8">
            <Image
              src="https://i.imgur.com/YH11xZr.png"
              alt="Compra segura e garantia"
              width={300}
              height={46}
              className="mt-4 opacity-80"
            />
          </CardFooter>
        </Card>
      </div>
    </Card>
  );
}
