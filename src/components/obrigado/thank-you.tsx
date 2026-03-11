
'use client';

import { CheckCircle, Mail, Gift, Sparkles, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function ThankYou() {
  const benefits = [
    "Novos modelos de crochê",
    "Receitas extras exclusivas",
    "Mais ideias de peças para criar",
    "Conteúdo adicional para ampliar seu acervo"
  ];

  return (
    <section className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="max-w-2xl w-full bg-card p-6 sm:p-12 rounded-2xl shadow-lg border border-primary/20 text-center flex flex-col items-center">
          
          {/* Confirmação Original */}
          <div className="p-4 bg-green-100 rounded-full border-4 border-green-200 mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>

          <p className="font-headline text-primary text-xl sm:text-2xl">Parabéns!</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-headline text-[#4D4237] mt-2">
            Sua inscrição foi confirmada!
          </h1>

          <p className="mt-6 text-base sm:text-lg text-foreground/80 max-w-lg">
            Que alegria ter você com a gente! Prepare-se para mergulhar no universo do crochê e transformar sua paixão em um negócio de sucesso.
          </p>

          {/* NOVA SEÇÃO DE UPSELL: Coleção Misteriosa */}
          <div className="mt-12 w-full bg-[#FFF8EC] rounded-2xl border-2 border-[#D97706]/30 p-8 sm:p-10 relative overflow-hidden text-left shadow-xl">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Gift className="w-32 h-32 rotate-12 text-[#D97706]" />
            </div>
            
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#D97706]/20 p-2.5 rounded-xl">
                        <Gift className="w-7 h-7 text-[#D97706]" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-headline text-[#D97706] leading-tight">
                        ⚠️ Espere! Antes de acessar suas aulas...
                    </h2>
                </div>

                <p className="font-bold text-[#D97706] text-lg mb-4">
                    Você desbloqueou uma surpresa especial liberada apenas para novos alunos.
                </p>

                <p className="text-[#1F2937] text-base sm:text-lg mb-6 leading-relaxed">
                    Antes de acessar suas aulas, quero te dar a oportunidade de desbloquear uma <b>coleção misteriosa de crochê</b>. <br /><br />
                    Essa coleção contém diversas receitas extras que normalmente não disponibilizamos junto com o material principal. Ela é perfeita para quem deseja ampliar seu acervo de peças, descobrir novos modelos e ter ainda mais ideias para criar ou vender.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3 text-base text-[#1F2937]">
                            <Check className="w-5 h-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                            <span className="font-medium">{benefit}</span>
                        </li>
                    ))}
                </ul>

                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-[#D97706]/10 text-center mb-8 shadow-sm">
                    <p className="text-sm text-gray-500 line-through font-medium">Valor original: R$39,90</p>
                    <div className="flex flex-col items-center justify-center gap-1 mt-2">
                        <span className="text-sm font-bold text-[#1F2937] uppercase tracking-wider">Hoje por apenas</span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-5xl sm:text-6xl font-extrabold text-[#16A34A]">R$9,90</span>
                        </div>
                    </div>
                    <p className="text-xs sm:text-sm text-[#DC2626] font-bold mt-4 uppercase tracking-widest animate-pulse">
                        Essa oferta aparece apenas nesta página e desaparecerá quando você sair.
                    </p>
                </div>

                <Button asChild size="lg" className="h-16 w-full text-lg sm:text-xl font-extrabold bg-[#16A34A] hover:bg-[#15803D] text-white shadow-lg hover:shadow-green-900/20 transition-all active:scale-[0.98] rounded-lg py-4">
                    <Link href="https://checkout.bolsasdesucesso.com/YOUR_UPS_LINK_HERE">
                        <Sparkles className="w-6 h-6 mr-2" />
                        SIM! QUERO DESBLOQUEAR MINHA COLEÇÃO MISTERIOSA
                    </Link>
                </Button>

                <div className="text-center mt-6">
                    <Link href="#next-steps" className="text-sm text-gray-500 hover:text-[#D97706] font-medium underline underline-offset-4">
                        Não tenho interesse, prefiro continuar apenas com o que já comprei
                    </Link>
                </div>
            </div>
          </div>

          {/* Próximos Passos */}
          <div id="next-steps" className="mt-12 text-left bg-accent/50 p-6 rounded-lg border border-border w-full space-y-4">
            <h2 className="text-xl font-bold font-headline text-center text-[#4D4237] mb-4">Próximos Passos</h2>
            <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-full mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                    <h3 className="font-bold text-foreground">Verifique seu e-mail</h3>
                    <p className="text-sm text-foreground/80">Enviamos todas as informações de acesso ao curso para o seu e-mail. Caso não encontre, verifique a caixa de spam.</p>
                </div>
            </div>
          </div>
          
          <div className="mt-10 w-full">
            <Button asChild size="lg" className="h-14 w-full text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="https://acessobolsaslucrativas.netlify.app/">
                    QUERO ACESSAR O CURSO AGORA
                    <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
            </Button>
            <p className="text-xs text-foreground/60 mt-2">Você será redirecionada para a plataforma do curso.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
