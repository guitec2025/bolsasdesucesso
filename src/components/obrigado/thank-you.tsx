
'use client';

import { useState, useEffect, useRef } from 'react';
import { CheckCircle, Sparkles, Gift, Pause, Volume2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Image from 'next/image';

const MENTOR_AVATAR = "https://i.imgur.com/7HSLUP4.png";
const AUDIO_URL = "https://files.catbox.moe/ef4ovv.MP3";
const OFFER_IMAGE = "https://i.imgur.com/zZZZJPO.jpeg";

export function ThankYou() {
  const [messagesVisible, setMessagesVisible] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showImageLoading, setShowImageLoading] = useState(false);
  const [showOfferImage, setShowOfferImage] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioStartedRef = useRef(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setMessagesVisible(1), 1000),
      setTimeout(() => setMessagesVisible(2), 2500),
      setTimeout(() => setMessagesVisible(3), 4000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
        
        if (!audioStartedRef.current) {
          audioStartedRef.current = true;
          
          // Inicia o processo da imagem aos 30 segundos
          setTimeout(() => {
            setShowImageLoading(true);
            let progress = 0;
            const interval = setInterval(() => {
              progress += 5;
              setLoadingProgress(progress);
              if (progress >= 100) {
                clearInterval(interval);
                setShowImageLoading(false);
                setShowOfferImage(true);
              }
            }, 150);
          }, 30000);

          // Inicia a exibição dos botões aos 38 segundos (8 segundos após a imagem começar a carregar)
          setTimeout(() => {
            setShowButtons(true);
          }, 38000);
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

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
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#4D4237] mt-1 leading-tight text-balance">
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
                    Prepare-se para mergulhar no universo do crochê e transformar sua paixão em um negócio de sucesso. ❤️‍🩹
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
                  <p className="text-[#D97706] text-2xl sm:text-4xl font-extrabold">
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
                    <span className="font-bold uppercase tracking-wider text-sm sm:text-base">Presente Misterioso</span>
                  </div>

                  {/* Player de Áudio */}
                  <div className="bg-white rounded-xl p-4 sm:p-6 border border-[#D97706]/20 flex items-center gap-4">
                    <button 
                      onClick={togglePlay}
                      className="bg-[#D97706] p-4 rounded-full text-white cursor-pointer hover:bg-[#B45309] transition-all active:scale-95 flex items-center justify-center outline-none shadow-lg"
                    >
                      {isPlaying ? <Pause className="w-7 h-7 fill-current" /> : <Gift className="w-7 h-7 fill-current" />}
                    </button>
                    <div className="flex-grow">
                      <div className="h-2.5 bg-gray-100 rounded-full w-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={isPlaying ? { width: "100%" } : { width: "40%" }}
                          transition={isPlaying ? { duration: 60, ease: "linear" } : { duration: 2, repeat: Infinity, repeatType: "reverse" }}
                          className="h-full bg-[#D97706]/40"
                        ></motion.div>
                      </div>
                      <div className="flex justify-between mt-3 text-sm sm:text-base text-gray-700 font-bold uppercase tracking-tight">
                        <span className="min-w-[45px]">{isPlaying ? "Play" : "0:00"}</span>
                        <span className="text-center px-2">Ouça sua mensagem importante</span>
                        <span className="min-w-[45px] text-right">{isPlaying ? "" : "1:00"}</span>
                      </div>
                    </div>
                    <Volume2 className="w-6 h-6 text-[#D97706] hidden sm:block" />
                  </div>
                  <audio 
                    ref={audioRef} 
                    src={AUDIO_URL} 
                    onEnded={() => setIsPlaying(false)}
                    className="hidden" 
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mensagem 4 (Imagem com Loading WhatsApp) */}
          <AnimatePresence>
            {(showImageLoading || showOfferImage) && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-4"
              >
                <Avatar className="w-20 h-20 sm:w-24 sm:h-24 border-2 border-primary/20 shrink-0">
                  <AvatarImage src={MENTOR_AVATAR} className="object-cover" />
                  <AvatarFallback>TB</AvatarFallback>
                </Avatar>
                <div className="relative rounded-2xl rounded-tl-none overflow-hidden shadow-md border border-gray-100 max-w-[85%] bg-white p-1">
                  {showImageLoading ? (
                    <div className="relative w-full aspect-square bg-gray-200 flex items-center justify-center min-w-[280px]">
                      <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="relative w-16 h-16">
                          <svg className="w-full h-full rotate-[-90deg]">
                            <circle
                              cx="32"
                              cy="32"
                              r="28"
                              stroke="white"
                              strokeWidth="4"
                              fill="rgba(0,0,0,0.4)"
                            />
                            <motion.circle
                              cx="32"
                              cy="32"
                              r="28"
                              stroke="white"
                              strokeWidth="4"
                              fill="none"
                              strokeDasharray="175.9"
                              animate={{ strokeDashoffset: 175.9 - (175.9 * loadingProgress) / 100 }}
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                             <Download className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <span className="mt-2 text-xs font-bold text-white bg-black/40 px-2 py-0.5 rounded-full">
                          {loadingProgress < 100 ? '452 KB' : 'Download concluído'}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                       <Image 
                        src={OFFER_IMAGE} 
                        alt="Oferta Especial" 
                        width={400} 
                        height={400}
                        className="rounded-xl object-cover"
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botões de Ação */}
          <AnimatePresence>
            {showButtons && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 mt-12"
              >
                <div className="w-full text-center mb-2">
                    <p className="text-red-600 font-bold text-lg animate-pulse">ESTA OFERTA SUMIRÁ EM BREVE!</p>
                </div>
                <Button asChild size="lg" className="h-16 w-full text-lg sm:text-2xl font-black bg-[#16A34A] hover:bg-[#15803D] text-white shadow-xl rounded-xl transition-all active:scale-[0.98]">
                    <Link href="https://checkout.bolsasdesucesso.com/VCCL1O8SCV0P">
                        <Sparkles className="w-6 h-6 mr-2" />
                        SIM! QUERO MEU PRESENTE MISTERIOSO
                    </Link>
                </Button>
                
                <Button asChild variant="destructive" size="sm" className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg h-10 px-6 transition-all active:scale-[0.98]">
                  <Link href="https://acessobolsaslucrativas.netlify.app/">
                    Prefiro continuar apenas com o material que já comprei
                  </Link>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
