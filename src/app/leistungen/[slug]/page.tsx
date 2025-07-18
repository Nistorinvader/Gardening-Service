import ServiceHero from '@/app/Service Components/ServiceHero/ServiceHero'
import { notFound } from 'next/navigation';
import { Container } from '@mantine/core'
import SubServices from '@/app/Service Components/SubServices/SubServices'
import ServiceGallery from '@/app/Service Components/ServiceGallery/ServiceGallery'
import ContactForm from '@/app/MainPage Components/ContactForm/ContactForm'
import { contentfulClient } from '@/app/lib/contentfulClient'
import { ContentfulServiceFields } from '@/app/types/contentful';
import Contacts from '@/app/MainPage Components/Contacts/Contacts';


export default async function ServicePage({params} : {params: Promise<{slug: string}>}){
    const res = await contentfulClient.getEntries({
        content_type: 'service',
    })
    const slug = (await params).slug

   const service = res.items.find(item => item.fields.slug === slug);

    if (!service) notFound();

    const data = service.fields as ContentfulServiceFields;


    
    return(
        <main>
            <ServiceHero service={data}/>
            <Container size={960} className={'mainContainer'}>
                <SubServices service={data}/>
                <ServiceGallery service={data}/>
                <p className={'aboutText'} style={{marginBottom: '24px'}}>Kontakt</p>
                <ContactForm />
                <Contacts/>
            </Container>
        </main>
    )
}