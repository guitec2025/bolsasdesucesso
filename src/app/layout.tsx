
import type { Metadata } from 'next';
import { Belleza, Alegreya } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import Script from 'next/script';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Escola de Crochê',
  description: 'Aprenda a criar bolsas lindas e lucrativas em crochê.',
};

const belleza = Belleza({
  subsets: ['latin'],
  weight: ['400'], // Belleza only supports 400 weight
  variable: '--font-belleza',
  display: 'swap',
});

const alegreya = Alegreya({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-alegreya',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
      </head>
      <body className={cn("font-body antialiased", alegreya.variable, belleza.variable)}>
        {children}
        <Toaster />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '836192886056120', {});
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=836192886056120&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
