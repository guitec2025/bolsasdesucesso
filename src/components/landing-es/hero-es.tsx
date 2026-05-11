
'use client';

import { Button } from '../ui/button';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { SparkleEffect } from '../landing/sparkle-effect';

export function HeroES() {
  const heroImage = {
    imageUrl: 'https://i.imgur.com/NpWecjw.png',
    description: 'Bolso de crochet destacado',
    imageHint: 'crochet bag'
  };

  return (
    <section className="relative bg-gray-100 sm:flex sm:items-center sm:justify-center">
       <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover hidden sm:block"
          priority
          data-ai-hint={heroImage.imageHint}
        />
        <SparkleEffect />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="hidden sm:flex flex-col items-start text-left py-24">
          <div className="flex items-center justify-start gap-2 mb-4">
            <Image
              src={"https://i.imgur.com/KMVNvbf.png"}
              alt="Logo Escuela de Crochet"
              width={210}
              height={70}
              className=''
            />
          </div>
          <h1 className="text-4xl lg:text-5xl font-headline font-bold leading-tight max-w-3xl text-[#563209]" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.2)' }}>
            Aprende a crear <span className="font-bold">bolsos de crochet hermosos y lucrativos</span>. ¡Transforma tu <span className="font-bold">pasión en un negocio rentable!</span>
          </h1>
          <p className="mt-6 text-xl max-w-2xl font-body text-foreground" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
            Las inscripciones están abiertas para el curso donde aprenderás a crear desde cero una <span className="font-bold">colección exclusiva con más de 67 modelos de bolsos en crochet, ¡perfectos para vender o decorar!</span>
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 h-14 text-lg font-body font-medium border-0 hover:opacity-90"
            style={{ backgroundColor: '#f6aa28', color: '#312a23' }}
          >
            <a href="#pricing">
              QUIERO INSCRIBIRME EN EL CURSO
            </a>
          </Button>
        </div>

        <div className="sm:hidden flex flex-col">
          <div className="relative w-full aspect-[9/10]">
              <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-cover object-center"
                  priority
              />
              <SparkleEffect />
          </div>

          <div className="bg-white p-6 relative z-10 flex flex-col items-center text-center mt-[-100px] mx-4 rounded-t-xl rounded-b-md shadow-2xl">
              <div className="flex items-center justify-center mb-4">
                  <Image
                  src={"https://i.imgur.com/KMVNvbf.png"}
                  alt="Logo Escuela de Crochet"
                  width={180}
                  height={60}
                  />
              </div>
              <h1 className="text-3xl font-headline font-bold leading-tight text-[#563209]">
                  Aprende a crear <span className="font-bold">bolsos de crochet hermosos y lucrativos</span>.
              </h1>
              <p className="mt-4 text-lg font-body text-foreground">
                  ¡Aprende a crear desde cero una <span className="font-bold">colección exclusiva con más de 67 modelos!</span>
              </p>
              <Button
                  asChild
                  size="lg"
                  className="mt-6 w-full h-14 text-lg font-body font-medium border-0 hover:opacity-90"
                  style={{ backgroundColor: '#f6aa28', color: '#312a23' }}
              >
                  <a href="#pricing">
                      <Star className="w-4 h-4 mr-2" fill="currentColor" />
                      QUIERO INSCRIBIRME
                  </a>
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
