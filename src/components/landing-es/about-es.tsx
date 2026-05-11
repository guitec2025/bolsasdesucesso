
'use client';

import Image from 'next/image';

export function AboutES() {
  return (
    <section id="about" className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-4xl mx-auto">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="font-semibold text-primary">QUIÉN SERÁ TU MENTORA</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-headline mt-2 text-[#4D4237]">
              Conoce a Tatiane Barros
            </h2>
            <p className="mt-4 text-base sm:text-lg text-foreground">
              Tatiane Barros transformó su <b>pasión por el crochet en un negocio próspero</b> e agora tiene la misión de capacitar a otras mujeres. Ella cree que los bolsos de crochet son más que una artesanía; es un camino hacia la <b>independencia financiera y el aumento de la autoestima.</b>
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <p className="text-foreground"><b>Mentalidad de artesana a empresaria:</b> Aprende a gestionar tu negocio de forma profesional.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <p className="text-foreground"><b>Productividad:</b> Técnicas para producir más en menos tiempo, sin perder la calidad artesanal.</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="https://i.imgur.com/OjoRTG0.png"
              alt="Tatiane Barros"
              width={300}
              height={300}
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
