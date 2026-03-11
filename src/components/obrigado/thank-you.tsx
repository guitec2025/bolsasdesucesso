
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
          <div className="mt-12 w-full bg-primary/5 rounded-2xl border-2 border-primary/30 p-6 sm:p-8 relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Gift className="w-24 h-24 rotate-12" />
            </div>
            
            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                    <div className="bg-primary/20 p-2 rounded-lg">
                        <Gift className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold font-headline text-[#4D4237]">
                        ⚠️ Espere! Antes de acessar suas aulas...
                    </h2>
                </div>

                <p className="font-bold text-primary mb-4">
                    Você desbloqueou uma surpresa especial liberada apenas para novos alunos.
                </p>

                <p className="text-foreground/80 text-sm sm:text-base mb-6 leading-relaxed">
                    Antes de acessar suas aulas, quero te dar a oportunidade de desbloquear uma <b>coleção misteriosa de crochê</b>. <br /><br />
                    Essa coleção contém diversas receitas extras que normalmente não disponibilizamos junto com o material principal. Ela é perfeita para quem deseja ampliar seu acervo de peças, descobrir novos modelos e ter ainda mais ideias para criar ou vender.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                        </li>
                    ))}
                </ul>

                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-primary/10 text-center mb-6">
                    <p className="text-sm text-foreground/60 line-through">Valor original: R$39,90</p>
                    <div className="flex items-baseline justify-center gap-1 mt-1">
                        <span className="text-sm font-bold text-foreground">Hoje por apenas</span>
                        <span className="text-4xl font-extrabold text-[#478552]">R$9,90</span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-red-600 font-bold mt-2 uppercase tracking-wider animate-pulse">
                        Essa oferta aparece apenas nesta página e desaparecerá quando você sair.
                    </p>
                </div>

                <Button asChild size="lg" className="h-16 w-full text-base sm:text-lg font-bold bg-[#478552] hover:bg-[#3d7246] text-white shadow-xl hover:shadow-2xl transition-all active:scale-95">
                    <Link href="https://checkout.bolsasdesucesso.com/YOUR_UPS_LINK_HERE">
                        <Sparkles className="w-5 h-5 mr-2" />
                        SIM! QUERO DESBLOQUEAR MINHA COLEÇÃO MISTERIOSA
                    </Link>
                </Button>

                <div className="text-center mt-4">
                    <Link href="#next-steps" className="text-xs text-foreground/50 hover:text-primary underline underline-offset-4">
                        Prefiro continuar apenas com o material que já comprei
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
