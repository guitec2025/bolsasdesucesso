
'use client';

import Image from 'next/image';

export function MoreTestimonials() {
  const testimonialImages = [
    { src: "https://i.ibb.co/Ng0vM9zD/depoimentos-novos-2026.webp", alt: "Depoimentos Escola de Crochê 2026", hint: "social testimonial" },
  ];

  return (
    <section className="py-2 sm:py-4 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {testimonialImages.map((image, index) => (
            <div key={index} className="w-full max-w-2xl">
                <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={2000}
                className="rounded-xl shadow-sm object-contain w-full h-auto"
                data-ai-hint={image.hint}
                priority
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
