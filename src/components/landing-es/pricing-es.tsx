
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

export function PricingES({ 
  priceWhole = "6", 
  priceCents = "99", 
  originalPrice = "49,99",
  checkoutUrl = "https://pay.hotmart.com/C105777260S"
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
    <section id="pricing" className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <div className="inline-flex items-center gap-2 bg-card border border-border px-3 py-1 rounded-lg text-sm font-semibold text-foreground shadow-sm">
            <Star className="w-4 h-4 text-primary" />
            <span>Inscripción</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-headline mt-4 text-[#4D4237]"><b>Asegura tu Cupo</b></h2>
        <Card className="max-w-md mt-12 w-full shadow-2xl border-2 border-primary/50 bg-card relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
            <div className="bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-sm font-semibold whitespace-nowrap flex items-center gap-2">
                <Star className="h-4 w-4" />
                Acceso de por Vida
            </div>
          </div>
          <CardHeader className="items-center pt-12">
            <CardTitle className="font-bold font-headline text-primary">Plan Completo</CardTitle>
            <CardDescription className="text-base text-center max-w-xs text-foreground">¡Aprovecha <b>acceso total y para siempre</b> a todas las clases, bonos y actualizaciones!</CardDescription>
            <div className="mt-4 text-center">
                <p className="text-base text-black">💰De <span className="line-through">${originalPrice}</span> por</p>
                <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-extrabold text-black"><b>${priceWhole}</b></span>
                    <span className="text-3xl font-extrabold text-black"><b>,{priceCents}</b></span>
                </div>
                 <p className="text-sm text-black flex items-center gap-2 justify-center mt-2 font-bold">
                    <b>¡Oferta exclusiva por tempo limitado!</b>
                </p>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-full text-left my-6 border-t border-border/50 pt-6">
                <h3 className="font-bold text-center mb-4 font-headline text-black"><b>Recibirás:</b></h3>
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
              <a href={checkoutUrl}>
                QUIERO ACCESO DE POR VIDA
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
            />
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
