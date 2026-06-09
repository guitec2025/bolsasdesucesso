
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LinkPage() {
  const avatarImage = "https://i.ibb.co/fG1p4m5s/foto-perfil-novo-tati.webp";
  
  return (
    <div className="min-h-screen bg-[#FFFBF9] flex flex-col items-center py-10 px-4 font-body text-[#4D4237]">
      {/* Seção de Perfil */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center mb-8 text-center"
      >
        <div className="relative w-28 h-28 mb-4">
          <Image
            src={avatarImage}
            alt="Tatiane Barros"
            fill
            className="rounded-full object-cover border-4 border-white shadow-md"
          />
        </div>
        
        <div className="flex items-center gap-1 text-[#4D4237]/60 mb-1">
          <span className="text-sm font-medium">@tatianebarros.ofc</span>
          <BadgeCheck className="w-4 h-4 text-[#3B82F6] fill-[#3B82F6] text-white" />
        </div>
        
        <h1 className="text-xl font-bold text-balance max-w-[280px]">
          Tatiane Barros | Crochê Profissional
        </h1>
      </motion.div>

      {/* Seção de Banners/Links */}
      <div className="w-full max-w-2xl space-y-6">
        
        {/* Banner 1: Bolsas de Sucesso */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Link 
            href="https://bolsasdesucesso.com/?utm_source=ig&utm_medium=bio&utm_campaign=perfil&utm_content=bolsas"
            className="block relative overflow-hidden rounded-2xl border-4 border-[#D4AF37] shadow-xl hover:scale-[1.02] transition-transform active:scale-95 bg-white"
          >
            <Image 
              src="https://i.imgur.com/OmseEOm.png" 
              alt="Bolsas de Sucesso" 
              width={800} 
              height={260} 
              className="w-full h-auto object-cover"
              priority
            />
          </Link>
        </motion.div>

        {/* Banner 2: Acervo Amigurumi */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link 
            href="https://checkout.bolsasdesucesso.com/VCCL1O8SCRE5/?utm_source=ig&utm_medium=bio&utm_campaign=perfil&utm_content=amigurumi_checkout"
            className="block relative overflow-hidden rounded-2xl border-4 border-[#D4AF37] shadow-xl hover:scale-[1.02] transition-transform active:scale-95 bg-white"
          >
            <Image 
              src="https://i.imgur.com/CTcwM0D.png" 
              alt="Coleção Amigurumi" 
              width={800} 
              height={260} 
              className="w-full h-auto object-cover"
            />
          </Link>
        </motion.div>

      </div>

      {/* Rodapé sutil */}
      <footer className="mt-auto pt-10 opacity-40 text-[10px] uppercase tracking-widest">
        &copy; Escola de Crochê – Tatiane Barros
      </footer>
    </div>
  );
}
