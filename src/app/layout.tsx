import '@mantine/core/styles.css';
import React from 'react';
import './globals.css';
import { MantineProvider } from '@mantine/core';
import './globals.css'
import Footer from './MainPage Components/Footer/Footer';
import Header from './MainPage Components/Header/Header'
import { Lexend } from 'next/font/google'
import '@mantine/carousel/styles.css';
import { CookieBanner } from './MainPage Components/CookieBanner/CookieBanner';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  metadataBase: new URL("https://www.nistor-gartenbau.de"),
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={lexend.className} suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/icon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider
          theme={{
            fontFamily: 'var(--font-lexend), sans-serif',
          }}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <CookieBanner /> 
        </MantineProvider>
      </body>
    </html>
  );
}
