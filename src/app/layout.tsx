
import type { Metadata } from 'next';
import { Belleza, Alegreya } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Escola de Crochê',
  description: 'Aprenda a criar bolsas lindas e lucrativas em crochê.',
};

const belleza = Belleza({
  subsets: ['latin'],
  weight: ['400'], 
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
        {/* Google Tag Manager - afterInteractive para garantir trackamento inicial correto */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5TX8TDBS');
          `}
        </Script>

        {/* Microsoft Clarity - lazyOnload para não pesar o LCP */}
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wq6jprb9q0");
          `}
        </Script>
      </head>
      <body className={cn("font-body antialiased", alegreya.variable, belleza.variable)}>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5TX8TDBS"
        height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        
        {children}
        
        <Toaster />
        
        {/* Utmify Scripts - Carregamento ultra-atrasado para priorizar o LCP */}
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          strategy="lazyOnload"
        />
        <Script id="utmify-pixel-config" strategy="lazyOnload">
          {`window.pixelId = "69ac892bcb4572594d7a7f5e";`}
        </Script>
        <Script
          src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
