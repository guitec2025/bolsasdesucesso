
'use client'

import dynamic from 'next/dynamic';
import { Suspense, memo } from 'react';
import { useInView } from 'react-intersection-observer';
import { Hero } from '@/components/landing/hero';
import { Footer } from '@/components/landing/footer';
import { Skeleton } from '@/components/ui/skeleton';
import { CountdownHeader } from '@/components/landing/countdown-header';

// Importações Dinâmicas para reduzir o chunk inicial de JS
const Gallery = dynamic(() => import('@/components/landing/gallery').then(mod => mod.Gallery), {
  loading: () => <SectionSkeleton />,
  ssr: false
});

const Bonuses = dynamic(() => import('@/components/landing/bonuses').then(mod => mod.Bonuses), { ssr: false });
const MoreTestimonials = dynamic(() => import('@/components/landing/more-testimonials').then(mod => mod.MoreTestimonials), { ssr: false });
const Pricing = dynamic(() => import('@/components/landing/pricing').then(mod => mod.Pricing), { ssr: false });
const Guarantee = dynamic(() => import('@/components/landing/guarantee').then(mod => mod.Guarantee), { ssr: false });
const About = dynamic(() => import('@/components/landing/about').then(mod => mod.About), { ssr: false });

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

// AnimatedSection otimizado para evitar re-renderizações do pai
const AnimatedSection = memo(({ children, className }: { children: React.ReactNode, className?: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px 0px', // Inicia a animação um pouco antes de entrar na tela
  });

  return (
    <div 
      ref={ref} 
      className={cn(
        "fade-in-section transition-all duration-700 ease-out", 
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
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
        {/* Hero é o LCP, então carregamos direto sem animações complexas que travam a CPU */}
        <Hero />
        
        <Suspense fallback={<SectionSkeleton />}>
          <AnimatedSection>
            <Gallery />
          </AnimatedSection>
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <AnimatedSection>
            <Bonuses />
          </AnimatedSection>
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <AnimatedSection>
            <MoreTestimonials />
          </AnimatedSection>
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <AnimatedSection>
            <Pricing />
          </AnimatedSection>
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <AnimatedSection>
            <Guarantee />
          </AnimatedSection>
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <AnimatedSection>
            <About />
          </AnimatedSection>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

// Helper para classes condicionais sem depender de bibliotecas pesadas se não necessário
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
