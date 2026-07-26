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
        <Script id="gtm-unified" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){
              if(w['GTM_STARTED']) return;
              w[l]=w[l]||[];
              
              if(!w.gtag) {
                w.gtag = function(){w[l].push(arguments);};
              }

              var name = "index=";
              var decodedCookie = decodeURIComponent(d.cookie);
              var ca = decodedCookie.split(';');
              var scrValue = "";
              for(var idx = 0; idx < ca.length; idx++) {
                var c = ca[idx];
                while (c.charAt(0) == ' ') { c = c.substring(1); }
                if (c.indexOf(name) == 0) { scrValue = c.substring(name.length, c.length); }
              }

              w[l].push({ 'scr': scrValue });

              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://load.gtm.bolsasdesucesso.com/8869ynhvgdkz.js?'+i+dl;
              f.parentNode.insertBefore(j,f);
              w['GTM_STARTED'] = true;
            })(window,document,'script','dataLayer','6aihgb4=Ew9ZICIlQ0wuM1wzMio9XwxWVklHTgoXRwkLCwUJHR0fGBEEExsdFlQICwo%3D');
          `}
        </Script>
      </head>
      <body className={cn("font-body antialiased", alegreya.variable, belleza.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
