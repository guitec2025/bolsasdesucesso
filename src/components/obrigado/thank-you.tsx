'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, Gift, Sparkles, Check, Play, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const MENTOR_AVATAR = "https://i.imgur.com/OjoRTG0.png";

export function ThankYou() {
  const [messagesVisible, setMessagesVisible] = useState(0);

  const benefits = [
    "Centenas de novos modelos de crochê",
    "Receitas extras e exclusivas",
    "Mais ideias de peças para criar",
    "Conteúdo adicional para ampliar seu acervo"
  ];

  useEffect(() => {
    const timers = [
      setTimeout(() => setMessagesVisible(1), 1000),
      setTimeout(() => setMessagesVisible(2), 2500),
      setTimeout(() => setMessagesVisible(3), 4000),
      setTimeout(() => setMessagesVisible(4), 5500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="py-8 sm:py-16 bg-[#f9fafb] min-h-screen font-body">
      <div className="container mx-auto px-4 max-w-2xl">
        
        {/* Bloco de Confirmação (Conforme a imagem enviada) */}
        <div className="flex flex-col items-center text-center mb-10">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="p-3 bg-green-100 rounded-full mb-4"
          >
            <CheckCircle className="h-16 w-16 text-[#4ade80]" />
          </motion.div>
          <p className="text-2xl font-semibold text-[#4D4237]">Parabéns!</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#4D4237] mt-1 leading-tight">
            Sua inscrição foi <br /> confirmada!
          </h1>
        </div>

        {/* Interface de Chat */}
        <div className="space-y-6">
          
          {/* Mensagem 1 */}
          <AnimatePresence>
            {messagesVisible >= 1 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3"
              >
                <Avatar className="w-10 h-10 border-2 border-primary/20">
                  <AvatarImage src={MENTOR_AVATAR} />
                  <AvatarFallback>TB</AvatarFallback>
                </Avatar>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 max-w-[85%]">
                  <p className="text-[#1F2937] text-lg font-medium">
                    Que alegria ter você com a gente! Prepare-se para mergulhar no universo do crochê e transformar sua paixão em um negócio de sucesso. ❤️‍🩹
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mensagem 2 */}
          <AnimatePresence>
            {messagesVisible >= 2 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3"
              >
                <Avatar className="w-10 h-10 border-2 border-primary/20">
                  <AvatarImage src={MENTOR_AVATAR} />
                  <AvatarFallback>TB</AvatarFallback>
                </Avatar>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 max-w-[85%]">
                  <p className="text-[#D97706] text-xl font-bold">
                    ⚠️ Espere! Antes de acessar suas aulas...
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mensagem 3 (Audio Placeholder / Oferta) */}
          <AnimatePresence>
            {messagesVisible >= 3 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3"
              >
                <Avatar className="w-10 h-10 border-2 border-primary/20">
                  <AvatarImage src={MENTOR_AVATAR} />
                  <AvatarFallback>TB</AvatarFallback>
                </Avatar>
                <div className="bg-[#FFF8EC] p-6 rounded-2xl rounded-tl-none shadow-md border-2 border-[#D97706]/20 w-full max-w-[90%]">
                  <div className="flex items-center gap-2 mb-4 text-[#D97706]">
                    <Sparkles className="w-5 h-5 fill-current" />
                    <span className="font-bold uppercase tracking-wider text-sm">Presente Misterioso</span>
                  </div>

                  {/* Placeholder de Áudio (Será configurado depois) */}
                  <div className="bg-white rounded-xl p-4 border border-[#D97706]/20 mb-6 flex items-center gap-4">
                    <div className="bg-[#D97706] p-3 rounded-full text-white">
                      <Play className="w-6 h-6 fill-current" />
                    </div>
                    <div className="flex-grow">
                      <div className="h-2 bg-gray-100 rounded-full w-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "40%" }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                          className="h-full bg-[#D97706]/40"
                        ></motion.div>
                      </div>
                      <div className="flex justify-between mt-2 text-[10px] text-gray-400 font-bold">
                        <span>0:00</span>
                        <span>OUÇA A MENSAGEM IMPORTANTE</span>
                        <span>3:45</span>
                      </div>
                    </div>
                    <Volume2 className="w-5 h-5 text-gray-400" />
                  </div>

                  <div className="space-y-4 mb-6">
                    <p className="text-[#1F2937] text-lg font-bold leading-relaxed">
                      Você desbloqueou uma surpresa especial liberada apenas para novos alunos!
                    </p>
                    <ul className="space-y-2">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2 text-[#1F2937] text-sm font-medium">
                          <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-[#D97706]/10 pt-4 text-center">
                    <p className="text-[#D97706] line-through font-bold text-lg mb-1">Valor original: R$39,90</p>
                    <div className="bg-white inline-block px-6 py-2 rounded-full shadow-sm border border-[#D97706]/10">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Hoje por apenas</p>
                      <p className="text-4xl font-black text-[#16A34A]">R$9,90</p>
                    </div>
                    <p className="text-[10px] text-[#DC2626] font-bold mt-4 uppercase tracking-[0.1em] animate-pulse">
                      Essa oferta desaparece quando você sair desta página.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botões de Ação */}
          <AnimatePresence>
            {messagesVisible >= 4 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 mt-8"
              >
                <Button asChild size="lg" className="h-16 w-full text-lg sm:text-xl font-black bg-[#16A34A] hover:bg-[#15803D] text-white shadow-xl rounded-xl transition-all active:scale-[0.98]">
                    <Link href="https://checkout.bolsasdesucesso.com/YOUR_UPS_LINK_HERE">
                        <Sparkles className="w-6 h-6 mr-2" />
                        SIM! QUERO DESBLOQUEAR MEU PRESENTE
                    </Link>
                </Button>
                
                <Link 
                  href="#" 
                  className="text-sm text-gray-400 hover:text-gray-600 underline transition-colors font-medium"
                >
                  Prefiro continuar apenas com o material que já comprei
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
