
'use client'

import dynamic from 'next/dynamic';
import { memo } from 'react';
import { useInView } from 'react-intersection-observer';
import { Hero } from '@/components/landing/hero';
import { Footer } from '@/components/landing/footer';
import { Skeleton } from '@/components/ui/skeleton';
import { CountdownHeader } from '@/components/landing/countdown-header';
import { cn } from '@/lib/utils';

// Esqueleto de carregamento padronizado
const SectionSkeleton = () => (
  <div className="container mx-auto py-12 sm:py-24 px-4">
    <Skeleton className="h-12 w-1/2 mx-auto" />
    <Skeleton className="h-8 w-3/4 mx-auto mt-4" />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
      <Skeleton className="h-64" />
      <Skeleton className="h-64" />
      <Skeleton className="h-64" />
    </div>
  </div>
);

// Importações Dinâmicas com fallback integrado
const Gallery = dynamic(() => import('@/components/landing/gallery').then(mod => mod.Gallery), {
  loading: () => <SectionSkeleton />,
  ssr: false
});

const Bonuses = dynamic(() => import('@/components/landing/bonuses').then(mod => mod.Bonuses), { 
  loading: () => <SectionSkeleton />,
  ssr: false 
});

const MoreTestimonials = dynamic(() => import('@/components/landing/more-testimonials').then(mod => mod.MoreTestimonials), { 
  loading: () => <SectionSkeleton />,
  ssr: false 
});

const Pricing = dynamic(() => import('@/components/landing/pricing').then(mod => mod.Pricing), { 
  loading: () => <SectionSkeleton />,
  ssr: false 
});

const Guarantee = dynamic(() => import('@/components/landing/guarantee').then(mod => mod.Guarantee), { 
  loading: () => <SectionSkeleton />,
  ssr: false 
});

const About = dynamic(() => import('@/components/landing/about').then(mod => mod.About), { 
  loading: () => <SectionSkeleton />,
  ssr: false 
});

// Componente de Animação simplificado para garantir visibilidade
const AnimatedSection = memo(({ children, className }: { children: React.ReactNode, className?: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: '100px 0px',
  });

  return (
    <div 
      ref={ref} 
      className={cn(
        "transition-all duration-1000 ease-out", 
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        className
      )}
    >
      {children}
    </div>
  );
});
AnimatedSection.displayName = 'AnimatedSection';

export default function CrochetPage() {
  return (
    <div className="bg-background text-[#4D4237]">
      <CountdownHeader />
      <main>
        {/* Hero é renderizado imediatamente (LCP) */}
        <Hero />
        
        <AnimatedSection>
          <Gallery />
        </AnimatedSection>

        <AnimatedSection>
          <Bonuses />
        </AnimatedSection>

        <AnimatedSection>
          <MoreTestimonials />
        </AnimatedSection>

        <AnimatedSection>
          <Pricing />
        </AnimatedSection>

        <AnimatedSection>
          <Guarantee />
        </AnimatedSection>

        <AnimatedSection>
          <About />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
