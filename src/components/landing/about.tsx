
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-4xl mx-auto">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="font-semibold text-primary">QUEM SERÁ SUA MENTORA</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-headline mt-2 text-[#4D4237]">
              Conheça Tatiane Barros
            </h2>
            <p className="mt-4 text-base sm:text-lg text-foreground">
              Tatiane Barros transformou sua <b>paixão pelo crochê em um negócio próspero</b> e agora tem a missão de capacitar outras mulheres. Ela acredita que as bolsas de crochê são mais que um artesanato; é um caminho para a <b>independência financeira e o aumento da autoestima.</b>
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <p className="text-foreground"><b>Mentalidade de artesã para empresária:</b> Aprenda a gerir seu negócio de forma profissional.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <p className="text-foreground"><b>Produtividade:</b> Técnicas para produzir mais em menos tempo, sem perder a qualidade artesanal.</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="https://i.imgur.com/OjoRTG0.png"
              alt="Tatiane Barros, mentora do curso"
              width={300}
              height={300}
              className="rounded-full shadow-lg"
              data-ai-hint="woman portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
