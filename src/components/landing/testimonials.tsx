
'use client';

import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

export function Testimonials() {
  const testimonialImages = [
    {
      src: "https://picsum.photos/seed/testimonialbag1/500/500",
      alt: "Depoimento de aluna sobre o curso de bolsas de crochê",
      hint: "social media testimonial"
    },
    {
      src: "https://picsum.photos/seed/testimonialbag2/500/500",
      alt: "Depoimento de aluna satisfeita com o curso de bolsas",
      hint: "social media testimonial"
    },
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto text-center px-4">
        <p className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
          Depoimentos
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold font-headline mt-4 text-[#4D4237]">
          Histórias de Sucesso da Nossa Comunidade
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-foreground text-lg">
          Nossas alunas já estão <b>colhendo os frutos</b> e transformando o crochê em uma <b>fonte de renda e realização pessoal.</b>
        </p>
        
        <Carousel className="mt-12 max-w-4xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {testimonialImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <Card className="overflow-hidden border-0 shadow-lg bg-transparent">
                  <CardContent className="p-0">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={500}
                      height={500}
                      className="object-contain w-full h-auto rounded-lg"
                      data-ai-hint={image.hint}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:inline-flex" />
          <CarouselNext className="hidden sm:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
