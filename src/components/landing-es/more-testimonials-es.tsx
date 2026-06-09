
'use client';

import Image from 'next/image';

export function MoreTestimonialsES() {
  return (
    <section className="py-2 sm:py-4 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl">
              <Image
                src="https://i.ibb.co/Ng0vM9zD/depoimentos-novos-2026.webp"
                alt="Testimonio"
                width={800}
                height={2000}
                className="rounded-xl shadow-sm object-contain w-full h-auto"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
