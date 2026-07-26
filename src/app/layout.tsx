
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

const beleza = Belleza({
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
        {/* Core Tracking Initialization - Executa apenas uma vez */}
        <Script id="tracking-core" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){dataLayer.push(arguments);};
            
            if (!window['TRACKING_BOOTSTRAPPED']) {
              window.gtag('js', new Date());

              // Captura o cookie index (scr) de forma segura
              var name = "index=";
              var decodedCookie = decodeURIComponent(document.cookie);
              var ca = decodedCookie.split(';');
              var scrValue = "";
              for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') { c = c.substring(1); }
                if (c.indexOf(name) == 0) { scrValue = c.substring(name.length, c.length); }
              }

              // Define o parâmetro scr globalmente para todos os eventos GA4 (incluindo page_view)
              window.gtag('set', { 'scr': scrValue });
              window['TRACKING_BOOTSTRAPPED'] = true;
            }
          `}
        </Script>

        {/* Stape GTM Loader - Carregado uma única vez com ID estável */}
        <Script 
          id="gtm-loader" 
          strategy="afterInteractive" 
          src="https://load.gtm.bolsasdesucesso.com/8869ynhvgdkz.js?id=6aihgb4=Ew9ZICIlQ0wuM1wzMio9XwxWVklHTgoXRwkLCwUJHR0fGBEEExsdFlQICwo%3D" 
        />

        {/* CartPanda OcuExternal - Carregado globalmente para evitar reinicializações em cada página */}
        <Script 
          id="ocu-external-lib"
          src="https://assets.mycartpanda.com/cartx-ecomm-ui-assets/js/libs/ocu-external.js" 
          strategy="lazyOnload" 
        />
      </head>
      <body className={cn("font-body antialiased", alegreya.variable, beleza.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
