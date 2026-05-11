
'use client';

import { ShieldCheck } from 'lucide-react';

export function GuaranteeES() {
  const guaranteeText = `Tienes <b>7 días</b> para explorar el contenido del curso, la comunidad y los bonos. Si por cualquier motivo sientes que no es para ti, solo envíanos un correo y te devolveremos el <b>100% del valor sin burocracia</b>. Tu satisfacción es nuestra prioridad.`;

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
            7 Días de Garantía Incondicional
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
