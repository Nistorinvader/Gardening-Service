import { Container } from '@mantine/core';
import HeroSection from './MainPage Components/HeroSection/HeroSection';
import './globals.css'
import Services from './MainPage Components/Services/Services';
import Gallery from './MainPage Components/Gallery/Gallery';
import Comments from './MainPage Components/Comments/Comments';
import ContactForm from './MainPage Components/ContactForm/ContactForm';
import Contacts from './MainPage Components/Contacts/Contacts';

export default async function MyComponent() {
  return (
    <main>
      <HeroSection/>
      <Container size={960} className={'mainContainer'}>
          <Services/>
          <Gallery />
          <Comments />
          <p className={'aboutText'} style={{marginBottom: '24px'}}>Kontakt</p>
          <ContactForm />
          <Contacts />
      </Container>
    </main>
  );
}
