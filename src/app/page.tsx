import { Container } from '@mantine/core';
import HeroSection from './MainPage Components/HeroSection/HeroSection';
import './globals.css'
import Services from './MainPage Components/Services/Services';
import Gallery from './MainPage Components/Gallery/Gallery';
import Comments from './MainPage Components/Comments/Comments';
import ContactForm from './MainPage Components/ContactForm/ContactForm';
import Contacts from './MainPage Components/Contacts/Contacts';
import WhatsAppButton from './MainPage Components/WhatsAppButton';
import FAQ from './MainPage Components/FAQ/FAQ';
import type { Metadata } from 'next';

export const revalidate = 5;

export const metadata: Metadata = {
  title: 'Gartenservice Augsburg - Professionelle Gartenpflege & Landschaftsbau',
  description: 'Professionelle Gartenpflege, Landschaftsbau, Pflasterarbeiten und Baggerarbeiten in Augsburg. Verlegung von Rollrasen, Heckenschnitt, Terrassenbau und mehr. ☎ Jetzt Angebot anfordern!',
  keywords: 'Gartenservice Augsburg, Gartenpflege Augsburg, Landschaftsbau Augsburg, Pflasterarbeiten Augsburg, Baggerarbeiten Augsburg, Rasenmähen Augsburg, Heckenschnitt Augsburg, Terrassenbau Augsburg, Rollrasen verlegen Augsburg',
  authors: [{ name: 'Nistor Gartenbau' }],
  creator: 'Nistor Gartenbau',
  publisher: 'Nistor Gartenbau',
  
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.nistor-gartenbau.de',
    siteName: 'Gartenservice Augsburg',
    title: 'Gartenservice Augsburg - Professionelle Gartenpflege & Landschaftsbau',
    description: 'Professionelle Gartenpflege, Landschaftsbau, Pflasterarbeiten und Baggerarbeiten in Augsburg. Verlegung von Rollrasen, Heckenschnitt, Terrassenbau und mehr.',
    images: [
      {
        url: 'https://www.nistor-gartenbau.de/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gartenservice Augsburg - Professionelle Gartenpflege',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Gartenservice Augsburg - Professionelle Gartenpflege & Landschaftsbau',
    description: 'Professionelle Gartenpflege, Landschaftsbau, Pflasterarbeiten und Baggerarbeiten in Augsburg.',
    images: ['https://www.nistor-gartenbau.de/og-image.jpg'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: 'https://www.nistor-gartenbau.de',
  },
  
  verification: {
    google: 'ВАШ_КОД_GOOGLE_SEARCH_CONSOLE',
  },
};

export default async function MyComponent() {
  return (
    <main>
      <HeroSection/>
      <Container size={960} className={'mainContainer'}>
          <Services/>
          <Gallery />
          <Comments />
          <FAQ />
          <p className={'aboutText'} style={{marginBottom: '24px'}}>Kontakt</p>
          <ContactForm />
          <Contacts />
      </Container>
      <WhatsAppButton/>
    </main>
  );
}