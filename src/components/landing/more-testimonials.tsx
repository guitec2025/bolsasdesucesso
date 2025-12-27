
'use client';

import Image from 'next/image';

export function MoreTestimonials() {
  const testimonialImages = [
    { src: "https://picsum.photos/seed/testimonial1/600/200", alt: "Depoimento de aluna 1", hint: "social testimonial" },
    { src: "https://picsum.photos/seed/testimonial2/600/200", alt: "Depoimento de aluna 2", hint: "social testimonial" },
    { src: "https://picsum.photos/seed/testimonial3/600/200", alt: "Depoimento de aluna 3", hint: "social testimonial" },
  ];

  return (
    <section className="py-12 sm:py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {testimonialImages.map((image, index) => (
            <div key={index} className="w-full max-w-md">
                <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={200}
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
