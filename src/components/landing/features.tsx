
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export function Features() {
  const featuresList = [
    "Acesso vitalício ao curso completo e todas as atualizações.",
    "Aulas passo a passo, do básico ao avançado, fáceis de seguir.",
    "Receitas exclusivas das plantinhas mais desejadas do mercado.",
    "Bônus especiais sobre precificação, fotografia e vendas."
  ];

  const featuresImage = "https://picsum.photos/seed/platform/500/400"

  return (
    <section id="features" className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
          <div className="md:w-1/2">
            <div className="text-center md:text-left">
                <p className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Simples e direto ao ponto
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold font-headline mt-4 text-[#4D4237]">
                    Super fácil e simples de usar
                </h2>
                <p className="mt-4 max-w-xl text-foreground/80 text-lg">
                    Nossa plataforma é intuitiva e projetada para que você encontre facilmente as aulas e materiais que precisa, sem complicações.
                </p>
            </div>
            <ul className="space-y-4 mt-8">
              {featuresList.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={featuresImage}
              alt="Plataforma do curso Fioleta Crochê"
              width={500}
              height={400}
              className="rounded-lg shadow-xl"
              data-ai-hint="course platform screen"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
