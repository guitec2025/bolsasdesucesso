
'use client'

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { Hero } from '@/components/landing/hero';
import { Footer } from '@/components/landing/footer';
import { Skeleton } from '@/components/ui/skeleton';
import { Gallery } from '@/components/landing/gallery';
import { CountdownHeader } from '@/components/landing/countdown-header';

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
  { ref: 'gallery', Component: Gallery },
  { ref: 'bonuses', Component: dynamic(() => import('@/components/landing/bonuses').then(mod => mod.Bonuses)) },
  { ref: 'more-testimonials', Component: dynamic(() => import('@/components/landing/more-testimonials').then(mod => mod.MoreTestimonials)) },
  { ref: 'pricing', Component: dynamic(() => import('@/components/landing/pricing').then(mod => mod.Pricing)) },
  { ref: 'guarantee', Component: dynamic(() => import('@/components/landing/guarantee').then(mod => mod.Guarantee)) },
  { ref: 'about', Component: dynamic(() => import('@/components/landing/about').then(mod => mod.About)) },
];

export default function CrochetPage() {
  return (
    <div className="bg-background text-[#4D4237]">
      <CountdownHeader />
      <main>
        <Hero />
        {componentConfig.map(({ ref, Component }) => (
          <Suspense key={ref} fallback={<SectionSkeleton />}>
            <AnimatedSection>
              <Component />
            </AnimatedSection>
          </Suspense>
        ))}
      </main>
      <Footer />
    </div>
  );
}
