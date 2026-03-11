'use client';

import { CheckCircle, Gift, Sparkles, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ThankYou() {
  const benefits = [
    "Centenas de novos modelos de crochê",
    "Receitas extras e exclusivas",
    "Mais ideias de peças para criar",
    "Conteúdo adicional para ampliar seu acervo"
  ];

  return (
    <section className="py-12 sm:py-24 bg-background font-body">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="max-w-3xl w-full bg-card p-6 sm:p-12 rounded-2xl shadow-lg border border-primary/20 text-center flex flex-col items-center">
          
          {/* Confirmação de Compra */}
          <div className="p-4 bg-green-100 rounded-full border-4 border-green-200 mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>

          <p className="font-headline text-primary text-2xl sm:text-3xl font-bold">Parabéns!</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-headline text-[#4D4237] mt-2">
            Sua inscrição foi confirmada!
          </h1>

          <p className="mt-8 text-xl sm:text-2xl text-[#1F2937] font-semibold max-w-2xl leading-relaxed">
            Que alegria ter você com a gente! Prepare-se para mergulhar no universo do crochê e transformar sua paixão em um negócio de sucesso. ❤️‍🩹
          </p>

          {/* SEÇÃO DE UPSELL: Presente Misterioso */}
          <div className="mt-12 w-full bg-[#FFF8EC] rounded-3xl border-2 border-[#D97706]/30 p-8 sm:p-12 relative overflow-hidden text-left shadow-2xl">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Gift className="w-40 h-40 rotate-12 text-[#D97706]" />
            </div>
            
            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-[#D97706]/20 p-3 rounded-2xl">
                        <Gift className="w-8 h-8 text-[#D97706]" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold font-headline text-[#D97706] leading-tight">
                        ⚠️ Espere! Antes de acessar suas aulas...
                    </h2>
                </div>

                <p className="font-bold text-[#D97706] text-xl sm:text-2xl mb-6">
                    Você desbloqueou uma surpresa especial liberada apenas para novos alunos.
                </p>

                <div className="space-y-6">
                  <p className="text-[#1F2937] text-lg sm:text-xl font-medium leading-relaxed">
                    Antes de acessar suas aulas, quero te dar a oportunidade de desbloquear um <strong>presente misterioso de crocheteira para crocheteira rsrs</strong>, preparei algo especial e único pra você, e sim essa página vai sumir em breve! 
                  </p>

                  <p className="text-[#1F2937] text-lg sm:text-xl leading-relaxed">
                    Esse presente misterioso contém <strong>centenas de coleções extras</strong> que normalmente não disponibilizamos junto com o material principal. Ela é perfeita para quem deseja ampliar seu acervo de peças, descobrir novos modelos e ter ainda mais ideias para criar ou vender.
                  </p>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
                    {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3 text-lg text-[#1F2937]">
                            <Check className="w-6 h-6 text-[#16A34A] mt-0.5 flex-shrink-0" />
                            <span className="font-semibold">{benefit}</span>
                        </li>
                    ))}
                </ul>

                <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl border border-[#D97706]/20 text-center mb-10 shadow-md">
                    <p className="text-2xl sm:text-3xl text-[#D97706] line-through font-bold mb-2">Valor original: R$39,90</p>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <span className="text-base font-bold text-[#1F2937] uppercase tracking-widest">Hoje por apenas</span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-6xl sm:text-7xl font-black text-[#16A34A]">R$9,90</span>
                        </div>
                    </div>
                    <p className="text-sm sm:text-base text-[#DC2626] font-bold mt-6 uppercase tracking-[0.2em] animate-pulse">
                        Essa oferta aparece apenas nesta página e desaparecerá quando você sair.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-6 w-full">
                  <Button asChild size="lg" className="h-20 w-full text-xl sm:text-2xl font-black bg-[#16A34A] hover:bg-[#15803D] text-white shadow-xl hover:shadow-green-900/30 transition-all active:scale-[0.98] rounded-xl py-4">
                      <Link href="https://checkout.bolsasdesucesso.com/YOUR_UPS_LINK_HERE">
                          <Sparkles className="w-7 h-7 mr-3" />
                          SIM! QUERO DESBLOQUEAR MEU PRESENTE MISTERIOSO
                      </Link>
                  </Button>
                  
                  <Link 
                    href="#" 
                    className="text-base text-gray-500 hover:text-gray-700 underline transition-colors font-medium"
                  >
                    Prefiro continuar apenas com o material que já comprei
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}