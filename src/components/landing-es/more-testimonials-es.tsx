
'use client';

import Image from 'next/image';

export function MoreTestimonialsES() {
  return (
    <section className="py-2 sm:py-4 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl">
              <Image
                src="https://i.ibb.co/gMXpmy7Z/depoimento-corrijido-completo-webp.webp"
                alt="Testimonios"
                width={800}
                height={2000}
                className="rounded-xl shadow-sm object-contain w-full h-auto"
                priority
              />
          </div>
        </div>
      </div>
    </section>
  );
}
