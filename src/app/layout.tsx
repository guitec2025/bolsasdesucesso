
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
        {/* Google Tag Manager - Implementação Blindada contra Dupla Inicialização e Perda de SCR */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              // Bloqueio Global para evitar múltiplas instâncias no window
              if (w['GTM_INITIALIZED']) return;
              w['GTM_INITIALIZED'] = true;

              w[l] = w[l] || [];

              // Função para pegar cookie (usado para o SCR)
              function getCookie(name) {
                var value = "; " + document.cookie;
                var parts = value.split("; " + name + "=");
                if (parts.length === 2) return parts.pop().split(";").shift();
              }

              // Captura o SCR do cookie ou da URL antes de qualquer disparo
              var scrValue = getCookie('index') || new URLSearchParams(window.location.search).get('scr') || '';

              // Empurra parâmetros de configuração global ANTES do gtm.js
              w[l].push({
                'gtm.start': new Date().getTime(),
                'event': 'gtm.js',
                'scr': scrValue,
                'page_type': 'landing_page'
              });

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
        
        {/* Utmify Scripts */}
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
