
'use client';

import { ShieldCheck } from 'lucide-react';

export function Guarantee() {
  const guaranteeText = `Você tem <b>30 dias</b> para explorar o conteúdo do curso, a comunidade e os bônus. Se por qualquer motivo sentir que não é para você, basta nos enviar um e-mail e nós devolveremos <b>100% do valor sem burocracia</b>. Sua satisfação é nossa prioridade.`;

  return (
    <section className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto max-w-3xl px-4">
        <div 
          className="border-2 border-dashed border-[#4D4237]/30 rounded-2xl p-6 sm:p-12 text-center flex flex-col items-center"
          style={{ backgroundColor: 'rgba(226, 193, 229, 0.4)' }}
        >
            <div className="mb-6">
                <ShieldCheck className="h-10 w-10 text-[#4D4237]/80" />
            </div>
          <h3 className="text-2xl sm:text-4xl font-bold font-headline text-[#4D4237] leading-tight">
            30 Dias de Garantia Incondicional
          </h3>
          <p 
            className="mt-6 text-[#4D4237]/90 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed"
            dangerouslySetInnerHTML={{ __html: guaranteeText }}
          >
          </p>
        </div>
      </div>
    </section>
  );
}
