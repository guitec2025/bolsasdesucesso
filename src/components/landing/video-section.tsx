
'use client'

import { Button } from "../ui/button";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export function VideoSection() {
    return (
        <section id="video" className="py-12 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <p className="inline-block bg-background text-foreground px-3 py-1 rounded-full text-sm font-semibold">
                            Você não vai aprender sozinha
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-bold font-headline mt-4 text-[#4D4237]">
                            Nós criamos uma comunidade para te dar todo o suporte que você precisa
                        </h2>
                        
                        <ul className="space-y-3 mt-6 text-left max-w-md mx-auto lg:mx-0">
                            <li className="flex items-center gap-3">
                                <CheckCircle className="h-5 w-5 text-secondary" />
                                <span>Tire suas dúvidas e receba ajuda</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle className="h-5 w-5 text-secondary" />
                                <span>Faça parte de uma comunidade</span>
                            </li>
                             <li className="flex items-center gap-3">
                                <CheckCircle className="h-5 w-5 text-secondary" />
                                <span>+ 2.000 alunas para interagir</span>
                            </li>
                        </ul>

                        <Button
                            asChild
                            size="lg"
                            className="mt-8 h-14 text-lg font-bold text-primary-foreground bg-primary hover:bg-primary/90"
                        >
                            <a href="#pricing">
                                QUERO FAZER PARTE DA COMUNIDADE
                            </a>
                        </Button>
                        <p className="text-sm text-foreground/60 mt-3">Vagas limitadas para garantir a qualidade do suporte.</p>
                    </div>
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative cursor-pointer group">
                             <Image
                                src="https://picsum.photos/seed/video/450/500"
                                alt="Vídeo de apresentação do curso Fioleta Crochê"
                                width={450}
                                height={500}
                                className="rounded-lg shadow-2xl object-cover"
                                data-ai-hint="crochet character video"
                            />
                             <div className="absolute inset-0 bg-black/20 flex items-center justify-center rounded-lg group-hover:bg-black/40 transition-colors">
                                <div className="bg-white/80 backdrop-blur-sm rounded-full p-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
