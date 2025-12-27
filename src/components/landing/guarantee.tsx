
'use client';

import { ShieldCheck } from 'lucide-react';

export function Guarantee() {
  const guaranteeText = `Você tem <b>30 dias</b> para explorar o conteúdo do curso, a comunidade e os bônus. Se por qualquer motivo sentir que não é para você, basta nos enviar um e-mail e nós devolveremos <b>100% do valor sem burocracia</b>. Sua satisfação é nossa prioridade.`;

  return (
    <section className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="bg-accent/50 border-2 border-dashed border-primary/50 rounded-lg p-6 sm:p-10 text-center flex flex-col items-center">
            <div className="bg-primary rounded-full p-3 mb-4">
                <ShieldCheck className="h-8 w-8 text-primary-foreground" />
            </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-headline text-[#4D4237]">30 Dias de Garantia Incondicional</h3>
          <p 
            className="mt-4 text-foreground max-w-xl mx-auto text-base sm:text-lg"
            dangerouslySetInnerHTML={{ __html: guaranteeText }}
          >
          </p>
        </div>
      </div>
    </section>
  );
}
