import ServiceHero from '@/app/Service Components/ServiceHero/ServiceHero'
import { servicesData } from '@/app/data/services';
import { notFound } from 'next/navigation';
import { Container } from '@mantine/core'
import SubServices from '@/app/Service Components/SubServices/SubServices'
import ServiceGallery from '@/app/Service Components/ServiceGallery/ServiceGallery'
import ContactForm from '@/app/MainPage Components/ContactForm/ContactForm'

export default async function ServicePage({params} : {params: Promise<{slug: string}>}){
    const slug = (await params).slug
    const service = servicesData.find(s => s.slug === slug)
    if (!service) {
        notFound(); 
    }
    
    return(
        <main>
            <ServiceHero service={service}/>
            <Container size={960} className={'mainContainer'}>
                <SubServices service={service}/>
                <ServiceGallery service={service}/>
                <p className={'aboutText'} style={{marginBottom: '24px'}}>Kontakt</p>
                <ContactForm />
            </Container>
        </main>
    )
}