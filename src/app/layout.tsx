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
import Script from 'next/script';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  metadataBase: new URL("https://www.nistor-gartenbau.de"),
  title: {
    default: "Gartenservice Augsburg - Professionelle Gartenpflege | Nistor Gartenbau",
    template: "%s | Nistor Gartenbau"
  },
  description: "Professioneller Gartenservice in Augsburg & Umgebung ✓ Gartenpflege ✓ Landschaftsbau ✓ Pflasterarbeiten ✓ Baggerarbeiten ✓ Kostenlose Beratung ☎️ 0172 5711590",
  keywords: [
    // Локальные SEO
    "Gartenservice Augsburg", "Gartenpflege Augsburg", "Landschaftsbau Augsburg",
    "Gärtner Augsburg", "Gartenbau Augsburg", "Gartengestaltung Augsburg",
    "Gartenservice Langenneufnach", "Gartenpflege Schwaben", "Landschaftsgärtner Bayern",
    
    // Услуги - Основные
    "Rasenmähen Augsburg", "Rollrasen verlegen Augsburg", "Rasenpflege Augsburg",
    "Heckenschnitt Augsburg", "Hecke schneiden Augsburg", "Heckenpflege",
    "Baumfällung Augsburg", "Baumpflege Augsburg", "Baumschnitt",
    
    // Строительные работы
    "Pflasterarbeiten Augsburg", "Terrassenbau Augsburg", "Gartenwege anlegen",
    "Naturstein verlegen", "Terrassenplatten verlegen", "Hofpflasterung",
    
    // Земляные работы
    "Baggerarbeiten Augsburg", "Erdarbeiten Augsburg", "Aushub",
    "Bodenaushub", "Fundamentarbeiten", "Erdbewegung",
    
    // Дополнительные услуги
    "Zaunbau Augsburg", "Sichtschutz montieren", "Gartenzaun aufstellen",
    "Bewässerungssystem", "Gartenbewässerung installieren", "Drainage verlegen",
    "Mauerbau", "Stützmauer", "Gartenmauer bauen",
    
    // Long-tail ключевые слова
    "Garten anlegen lassen Augsburg", "Garten gestalten Kosten",
    "Terrasse bauen lassen Preis", "Was kostet Rollrasen verlegen",
    "Gartenpflege Service Preise", "Gartenarbeiten Augsburg",
    
    // Сезонные
    "Gartenpflege Frühjahr", "Herbstlaub entfernen", "Garten winterfest machen",
    "Rasenpflege Frühjahr", "Baum fällen Winter",
    
    // Конкурентные преимущества
    "Gärtnermeister Augsburg", "professioneller Gartenservice",
    "Gartenbaufirma Augsburg", "Handwerker Garten Augsburg",
    
    // Близлежащие города
    "Gartenservice München", "Gartenpflege Königsbrunn", "Landschaftsbau Neusäß",
    "Gartenarbeiten Friedberg", "Gartenbau Bobingen"
  ],
  authors: [{ name: 'Vadim Nistor', url: 'https://www.nistor-gartenbau.de' }],
  creator: 'Nistor Gartenbau',
  publisher: 'Nistor Gartenbau',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.nistor-gartenbau.de',
    siteName: 'Nistor Gartenbau - Gartenservice Augsburg',
    title: 'Gartenservice Augsburg - Professionelle Gartenpflege & Landschaftsbau',
    description: 'Professioneller Gartenservice in Augsburg ✓ Gartenpflege ✓ Landschaftsbau ✓ Pflasterarbeiten ✓ Baggerarbeiten ✓ Über 10 Jahre Erfahrung ☎️ 0172 5711590',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nistor Gartenbau - Professionelle Gartenpflege in Augsburg',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Gartenservice Augsburg - Professionelle Gartenpflege & Landschaftsbau',
    description: 'Professioneller Gartenservice in Augsburg ✓ Gartenpflege ✓ Landschaftsbau ✓ Kostenlose Beratung',
    images: ['/og-image.jpg'],
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: 'https://www.nistor-gartenbau.de',
  },
  
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
  },
  
  category: 'Gartenbau',
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nistor Gartenbau - Gartenservice Augsburg",
  "image": "https://www.nistor-gartenbau.de/logo.svg",
  "@id": "https://www.nistor-gartenbau.de",
  "url": "https://www.nistor-gartenbau.de",
  "telephone": "+491725711590",
  "email": "vadimnistor84@gmail.com",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hauptstraße 19",
    "addressLocality": "Langenneufnach",
    "addressRegion": "Bayern",
    "postalCode": "86863",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.3406,
    "longitude": 10.8003
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Augsburg"
    },
    {
      "@type": "City",
      "name": "München"
    },
    {
      "@type": "City",
      "name": "Langenneufnach"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61554333675165&mibextid=wwXIfr&rdid=kJRdMfezILvi4f11&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CLYMTuWvT%2F%3Fmibextid%3DwwXIfr#",
    "https://www.tiktok.com/@gartenservice_bayern"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "50",
    "bestRating": "5",
    "worstRating": "1"
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Gartenpflege",
        "description": "Professionelle Gartenpflege in Augsburg und Umgebung"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Landschaftsbau",
        "description": "Gestaltung und Bau von Gartenanlagen"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Pflasterarbeiten",
        "description": "Verlegung von Pflastersteinen und Terrassenplatten"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Baggerarbeiten",
        "description": "Erdarbeiten und Aushub mit modernen Maschinen"
      }
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={lexend.className} suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta name="theme-color" content="#38E07A" />
        <meta name="geo.region" content="DE-BY" />
        <meta name="geo.placename" content="Augsburg" />
        <meta name="geo.position" content="48.3406;10.8003" />
        <meta name="ICBM" content="48.3406, 10.8003" />
        
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          strategy="beforeInteractive"
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