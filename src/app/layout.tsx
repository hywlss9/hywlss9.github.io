import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import { defaultMetadata } from '@/config/site';

import Header from '@/components/header';
import Footer from '@/components/footer';

import '@/styles/globals.css';
import 'pretendard/dist/web/static/pretendard.css';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ko'>
      <head>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NRKWXMDHJB"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-NRKWXMDHJB');
        </script>
      </head>
      <body className='dark:bg-dark-bg'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
