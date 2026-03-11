'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, Sparkles, Play, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const MENTOR_AVATAR = "https://i.imgur.com/7HSLUP4.png";

export function ThankYou() {
  const [messagesVisible, setMessagesVisible] = useState(0);

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
        
        {/* Bloco de Confirmação */}
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
                className="flex items-start gap-4"
              >
                <Avatar className="w-20 h-20 sm:w-24 sm:h-24 border-2 border-primary/20 shrink-0">
                  <AvatarImage src={MENTOR_AVATAR} className="object-cover" />
                  <AvatarFallback>TB</AvatarFallback>
                </Avatar>
                <div className="bg-white p-4 sm:p-5 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 max-w-[85%]">
                  <p className="text-[#1F2937] text-lg sm:text-xl font-medium">
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
                className="flex items-start gap-4"
              >
                <Avatar className="w-20 h-20 sm:w-24 sm:h-24 border-2 border-primary/20 shrink-0">
                  <AvatarImage src={MENTOR_AVATAR} className="object-cover" />
                  <AvatarFallback>TB</AvatarFallback>
                </Avatar>
                <div className="bg-white p-4 sm:p-5 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 max-w-[85%]">
                  <p className="text-[#D97706] text-xl sm:text-2xl font-bold">
                    ⚠️ Espere! Antes de acessar suas aulas...
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mensagem 3 (Audio Oferta) */}
          <AnimatePresence>
            {messagesVisible >= 3 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-4"
              >
                <Avatar className="w-20 h-20 sm:w-24 sm:h-24 border-2 border-primary/20 shrink-0">
                  <AvatarImage src={MENTOR_AVATAR} className="object-cover" />
                  <AvatarFallback>TB</AvatarFallback>
                </Avatar>
                <div className="bg-[#FFF8EC] p-6 rounded-2xl rounded-tl-none shadow-md border-2 border-[#D97706]/20 w-full max-w-[90%]">
                  <div className="flex items-center gap-2 mb-4 text-[#D97706]">
                    <Sparkles className="w-5 h-5 fill-current" />
                    <span className="font-bold uppercase tracking-wider text-sm">Presente Misterioso</span>
                  </div>

                  {/* Placeholder de Áudio */}
                  <div className="bg-white rounded-xl p-4 border border-[#D97706]/20 flex items-center gap-4">
                    <div className="bg-[#D97706] p-3 rounded-full text-white cursor-pointer hover:bg-[#B45309] transition-colors">
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
                      <div className="flex justify-between mt-2 text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                        <span>0:00</span>
                        <span>Ouça sua mensagem importante</span>
                        <span>3:45</span>
                      </div>
                    </div>
                    <Volume2 className="w-5 h-5 text-gray-400" />
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
                    <Link href="https://checkout.bolsasdesucesso.com/VCCL1O8SCPBX">
                        <Sparkles className="w-6 h-6 mr-2" />
                        SIM! QUERO MEU PRESENTE MISTERIOSO
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
