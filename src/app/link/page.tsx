
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LinkPage() {
  const avatarImage = "https://i.imgur.com/7HSLUP4.png";
  
  return (
    <div className="min-h-screen bg-[#FFFBF9] flex flex-col items-center py-12 px-4 font-body text-[#4D4237]">
      {/* Seção de Perfil */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center mb-10 text-center"
      >
        <div className="relative w-28 h-28 mb-4">
          <Image
            src={avatarImage}
            alt="Laura Vianel"
            fill
            className="rounded-full object-cover border-4 border-white shadow-md"
          />
        </div>
        
        <div className="flex items-center gap-1 text-[#4D4237]/60 mb-1">
          <span className="text-sm font-medium">@artesanatodesucesso.oficial</span>
          <BadgeCheck className="w-4 h-4 text-[#3B82F6] fill-[#3B82F6] text-white" />
        </div>
        
        <h1 className="text-xl font-bold">
          Laura Vianel | Crochê Profissional
        </h1>
      </motion.div>

      {/* Seção de Banners/Links */}
      <div className="w-full max-w-2xl space-y-6">
        
        {/* Banner 1: Bolsas de Sucesso */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link 
            href="https://bolsasdesucesso.com/?utm_source=ig&utm_medium=bio&utm_campaign=perfil&utm_content=bolsas"
            className="block relative overflow-hidden rounded-[2rem] bg-[#537747] h-40 sm:h-52 shadow-2xl hover:scale-[1.02] transition-transform group border-2 border-[#3D5235]/20"
          >
            <div className="absolute left-0 bottom-0 w-[55%] h-full flex items-end">
              <Image 
                src="https://i.imgur.com/OmseEOm.png" 
                alt="Coleção de Bolsas" 
                width={300} 
                height={300} 
                className="object-contain object-bottom h-[95%] w-full drop-shadow-2xl"
              />
            </div>
            <div className="absolute right-4 sm:right-10 top-0 h-full flex flex-col justify-center items-end text-white z-10">
              <h2 className="text-2xl sm:text-4xl font-black font-headline tracking-tighter leading-[0.85] text-right">
                BOLSAS<br/>DE SUCESSO
              </h2>
              <p className="mt-1 text-sm sm:text-xl font-body italic opacity-90 text-right">
                Crochê Artesanal
              </p>
            </div>
          </Link>
        </motion.div>

        {/* Banner 2: Acervo Amigurumi */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link 
            href="#"
            className="block relative overflow-hidden rounded-[2rem] bg-[#9056B3] h-40 sm:h-52 shadow-2xl hover:scale-[1.02] transition-transform group border-2 border-[#6A3D8A]/20"
          >
            <div className="absolute left-0 bottom-0 w-[55%] h-full flex items-end">
              <Image 
                src="https://i.imgur.com/CTcwM0D.png" 
                alt="Coleção Amigurumi" 
                width={400} 
                height={400} 
                className="object-contain object-bottom h-[95%] w-full drop-shadow-2xl"
              />
            </div>
            <div className="absolute right-4 sm:right-10 top-0 h-full flex flex-col justify-center items-end text-white z-10">
              <div className="flex flex-col items-end">
                <h2 className="text-xl sm:text-3xl font-black font-headline tracking-tighter leading-none text-right">
                  ACERVO <span className="text-[#FBBF24]">COMPLETO</span>
                </h2>
                <div className="w-full h-0.5 bg-white/60 mt-1 mb-2"></div>
                <h2 className="text-2xl sm:text-4xl font-black font-headline tracking-tighter leading-none text-right">
                  AMIGURUMI
                </h2>
              </div>
            </div>
            {/* Efeito de brilho sutil ao fundo do banner roxo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
          </Link>
        </motion.div>

      </div>

      {/* Rodapé sutil */}
      <footer className="mt-auto pt-12 opacity-40 text-xs">
        &copy; Escola de Crochê – Laura Vianel
      </footer>
    </div>
  );
}
