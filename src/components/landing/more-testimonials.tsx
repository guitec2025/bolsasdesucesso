
'use client';

import Image from 'next/image';

export function MoreTestimonials() {
  const testimonialImages = [
    { src: "https://i.ibb.co/Ng0vM9zD/depoimentos-novos-2026.webp", alt: "Depoimentos Escola de Crochê 2026", hint: "social testimonial" },
  ];

  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {testimonialImages.map((image, index) => (
            <div key={index} className="w-full max-w-xl">
                <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={600}
                className="rounded-lg shadow-md object-contain w-full"
                data-ai-hint={image.hint}
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
