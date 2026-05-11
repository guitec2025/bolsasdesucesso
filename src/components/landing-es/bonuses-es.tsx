
'use client';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export function BonusesES() {
  const bonuses = [
    {
      icon: '💰',
      title: 'Curso de Precios',
      price: 'De R$97 por Gratis',
      description: 'Nunca más cobres mal: conoce <b>exactamente cuánto cobrar para ganar de verdad</b> con tus bolsos de crochet.',
    },
    {
      icon: '📝',
      title: 'Kit de Papelería Digital',
      price: 'De R$59 por Gratis',
      description: 'Organiza tus pedidos y producción <b>sin perder tiempo</b> — <b>más ventas, menos dolores de cabeza</b>.',
    },
    {
      icon: '📖',
      title: 'Colección Bolsos de Éxito 2024',
      price: 'De R$97 por Gratis',
      description: 'Accede a una <b>colección completa de modelos exitosos de 2024</b>.',
    },
  ];

  return (
    <section id="bonuses" className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto text-center px-4">
        <p className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
          🎁 Bonos Exclusivos
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold font-headline mt-4 text-[#4D4237]">
          ¡Inscríbete hoy y llévate estos regalos!
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-[#4D4237] text-lg">
          Estos bonos fueron creados para <b>acelerar tu éxito</b> y están incluidos <b>gratuitamente</b> en tu inscripción.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {bonuses.map((bonus, index) => (
            <Card key={index} className={cn("border-0 shadow-lg text-center p-6 flex flex-col items-center", index === 0 ? "bg-green-50 border border-green-200" : "bg-card")}>
              <div className="text-5xl mb-4">
                {bonus.icon}
              </div>
              <h3 className="text-xl font-bold font-headline text-[#AE5A32] mt-1">{bonus.title}</h3>
              <p className="font-semibold text-sm text-foreground/70 mt-2">{bonus.price}</p>
              <p className="text-foreground mt-2 text-sm flex-grow" dangerouslySetInnerHTML={{ __html: bonus.description }}></p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
