
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
        {/* Inicialização Única e Estável do Rastreamento */}
        <Script id="tracking-core" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function() { window.dataLayer.push(arguments); };
            
            // Função para captura segura de cookies
            function getCookie(name) {
              var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
              return v ? v[2] : null;
            }

            // Captura o SCR (index) e define como parâmetro global de configuração
            var scrValue = getCookie('index') || new URLSearchParams(window.location.search).get('scr') || '';
            if (scrValue) {
              window.gtag('set', { 'scr': scrValue });
            }
          `}
        </Script>

        {/* Google Tag Manager - Carregamento via Custom Loader */}
        <Script id="gtm-loader" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              if(w['GTM_INITIALIZED']) return;
              w['GTM_INITIALIZED'] = true;
              
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],j=d.createElement(s);
              j.async=true;
              j.src="https://load.gtm.bolsasdesucesso.com/8869ynhvgdkz.js?"+i;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','6aihgb4=Ew9ZICIlQ0wuM1wzMio9XwxWVklHTgoXRwkLCwUJHR0fGBEEExsdFlQICwo%3D');
          `}
        </Script>

        {/* Microsoft Clarity */}
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
        {children}
        
        <Toaster />
        
        {/* Utmify Scripts - Carregamento isolado para evitar interceptação de pacotes GA4 */}
        <Script
          id="utmify-main-script"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          strategy="lazyOnload"
        />
        <Script id="utmify-pixel-config" strategy="lazyOnload">
          {`window.pixelId = "6a20db85b9e90c7383e6c23b";`}
        </Script>
        <Script
          id="utmify-pixel-tracker"
          src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
