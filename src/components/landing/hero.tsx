
'use client';

import { Button } from '../ui/button';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { SparkleEffect } from './sparkle-effect';

export function Hero() {
  const heroImage = {
    imageUrl: 'https://i.imgur.com/NpWecjw.png',
    description: 'Bolsa de crochê em destaque',
    imageHint: 'crochet bag'
  };

  return (
    <section className="relative bg-gray-100 sm:flex sm:items-center sm:justify-center">
       {/* Desktop View Image - For sm and up */}
       <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover hidden sm:block"
          priority
          data-ai-hint={heroImage.imageHint}
        />
        <SparkleEffect />
      
      {/* Container for both Mobile and Desktop content */}
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Desktop Content - Aligned left */}
        <div className="hidden sm:flex flex-col items-start text-left py-24">
          <div className="flex items-center justify-start gap-2 mb-4">
            <Image
              src={"https://i.imgur.com/KMVNvbf.png"}
              alt="Logo Escola de Crochê"
              width={210}
              height={70}
              data-ai-hint="crochet logo"
              className=''
            />
          </div>
          <h1 className="text-4xl lg:text-5xl font-headline font-bold leading-tight max-w-3xl text-[#563209]" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.2)' }}>
            Aprenda a criar <span className="font-bold">bolsas de crochê lindas e lucrativas</span>. Transforme sua <span className="font-bold">paixão em um negócio rentável!</span>
          </h1>
          <p className="mt-6 text-xl max-w-2xl font-body text-foreground" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
            As inscrições estão abertas para o curso onde você vai aprender a criar do zero uma <span className="font-bold">coleção exclusiva com mais de 67 modelos de bolsas em crochê, perfeitas pra vender, decorar ou montar kits irresistíveis!</span>
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 h-14 text-lg font-body font-medium"
          >
            <a href="#pricing">
              QUERO ME INSCREVER NO CURSO
            </a>
          </Button>
        </div>

        {/* Mobile View with Overlap Effect */}
        <div className="sm:hidden flex flex-col">
          {/* 1. Background Image */}
          <div className="relative w-full aspect-[9/10]">
              <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-cover object-center"
                  priority
                  data-ai-hint={heroImage.imageHint}
              />
              <SparkleEffect />
          </div>

          {/* 2. Overlapping Content Block */}
          <div className="bg-white p-6 relative z-10 flex flex-col items-center text-center mt-[-100px] mx-4 rounded-t-xl rounded-b-md shadow-2xl">
              <div className="flex items-center justify-center mb-4">
                  <Image
                  src={"https://i.imgur.com/KMVNvbf.png"}
                  alt="Logo Escola de Crochê"
                  width={180}
                  height={60}
                  data-ai-hint="crochet logo"
                  />
              </div>
              <h1 className="text-3xl font-headline font-bold leading-tight text-[#563209]">
                  Aprenda a criar <span className="font-bold">bolsas de crochê lindas e lucrativas</span>. Transforme sua <span className="font-bold">paixão em um negócio rentável!</span>
              </h1>
              <p className="mt-4 text-lg font-body text-foreground">
                  As inscrições estão abertas para o curso onde você vai aprender a criar do zero uma <span className="font-bold">coleção exclusiva com mais de 67 modelos de bolsas em crochê!</span>
              </p>
              <Button
                  asChild
                  size="lg"
                  className="mt-6 w-full h-14 text-lg font-body font-medium"
              >
                  <a href="#pricing">
                      <Star className="w-4 h-4 mr-2" fill="currentColor" />
                      QUERO ME INSCREVER NO CURSO
                  </a>
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
