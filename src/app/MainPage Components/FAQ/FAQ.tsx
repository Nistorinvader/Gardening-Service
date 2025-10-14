'use client';

import { Accordion } from '@mantine/core';
import Script from 'next/script';

const faqData = [
  {
    question: 'Welche Dienstleistungen bieten Sie in Augsburg an?',
    answer: 'Wir bieten umfassende Gartendienstleistungen in Augsburg: Gartenpflege, Rasenmähen, Heckenschnitt, Pflasterarbeiten, Terrassenbau, Baggerarbeiten, Zaunmontage und vieles mehr. Unser Team kümmert sich um alle Aspekte Ihres Gartens.',
  },
  {
    question: 'Wie kann ich ein Angebot anfordern?',
    answer: 'Sie können uns einfach über das Kontaktformular erreichen, per Telefon unter +49 172 5711590 oder über WhatsApp. Wir erstellen Ihnen ein kostenloses und unverbindliches Angebot für Ihr Projekt.',
  },
  {
    question: 'In welchen Gebieten sind Sie tätig?',
    answer: 'Wir sind hauptsächlich in Augsburg und Umgebung tätig. Kontaktieren Sie uns gerne, um zu erfahren, ob wir auch in Ihrer Region arbeiten können.',
  },
  {
    question: 'Wie lange dauert die Umsetzung eines Projekts?',
    answer: 'Die Dauer hängt vom Umfang des Projekts ab. Kleinere Arbeiten wie Rasenmähen können am selben Tag erledigt werden, während größere Projekte wie Terrassenbau mehrere Tage in Anspruch nehmen können. Nach der Besichtigung geben wir Ihnen einen genauen Zeitplan.',
  },
  {
    question: 'Bieten Sie auch regelmäßige Gartenpflege an?',
    answer: 'Ja, wir bieten sowohl einmalige als auch regelmäßige Gartenpflegedienste an. Sie können uns für wöchentliche, zweiwöchentliche oder monatliche Pflege Ihres Gartens buchen.',
  },
  {
    question: 'Was kostet die Gartenpflege in Augsburg?',
    answer: 'Die Kosten variieren je nach Art und Umfang der Arbeiten. Kontaktieren Sie uns für ein individuelles, kostenloses Angebot. Wir beraten Sie gerne und erstellen ein transparentes Preisangebot.',
  },
];

// Schema.org для FAQ
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
};

export default function FAQ() {
  return (
    <section id="FAQ" style={{ marginTop: '40px', marginBottom: '40px' }}>
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />
      
      <h2 className="aboutText" style={{ marginBottom: '24px' }}>
        Häufig gestellte Fragen
      </h2>
      
      <Accordion 
        variant="separated" 
        radius="md"
        styles={{
          item: {
            border: '1px solid #D1E5D9',
            marginBottom: '12px',
          },
          control: {
            padding: '14px',
            fontSize: '1rem',
            fontWeight: 600,
            color: '#121714',
          },
          content: {
            paddingBottom: '16px',
            paddingLeft: '16px',
            paddingRight: '16px',
            fontSize: '0.9375rem',
            lineHeight: '1.6',
            color: '#638773',
          },
          chevron: {
            color: '#38E07A',
          },
        }}
      >
        {faqData.map((item, index) => (
          <Accordion.Item key={index} value={`item-${index}`}>
            <Accordion.Control>{item.question}</Accordion.Control>
            <Accordion.Panel>{item.answer}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
}