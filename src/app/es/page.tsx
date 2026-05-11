
'use client'

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { HeroES } from '@/components/landing-es/hero-es';
import { FooterES } from '@/components/landing-es/footer-es';
import { Skeleton } from '@/components/ui/skeleton';
import { GalleryES } from '@/components/landing-es/gallery-es';
import { CountdownHeaderES } from '@/components/landing-es/countdown-header-es';

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

const AnimatedSection = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`fade-in-section ${inView ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
};

const componentConfig = [
  { ref: 'gallery', Component: GalleryES },
  { ref: 'bonuses', Component: dynamic(() => import('@/components/landing-es/bonuses-es').then(mod => mod.BonusesES)) },
  { ref: 'more-testimonials', Component: dynamic(() => import('@/components/landing-es/more-testimonials-es').then(mod => mod.MoreTestimonialsES)) },
  { ref: 'pricing', Component: dynamic(() => import('@/components/landing-es/pricing-es').then(mod => mod.PricingES)) },
  { ref: 'guarantee', Component: dynamic(() => import('@/components/landing-es/guarantee-es').then(mod => mod.GuaranteeES)) },
  { ref: 'about', Component: dynamic(() => import('@/components/landing-es/about-es').then(mod => mod.AboutES)) },
];

export default function CrochetPageES() {
  return (
    <div className="bg-background text-[#4D4237]" lang="es">
      <CountdownHeaderES />
      <main>
        <HeroES />
        {componentConfig.map(({ ref, Component }) => (
          <Suspense key={ref} fallback={<SectionSkeleton />}>
            <AnimatedSection>
              <Component />
            </AnimatedSection>
          </Suspense>
        ))}
      </main>
      <FooterES />
    </div>
  );
}
