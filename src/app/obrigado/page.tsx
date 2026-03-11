'use client';

import { ThankYou } from '@/components/obrigado/thank-you';
import { Footer } from '@/components/landing/footer';

export default function ObrigadoPage() {
  return (
    <div className="bg-background">
      <main>
        <ThankYou />
      </main>
      <Footer hideCTA={true} />
    </div>
  );
}