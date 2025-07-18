import Link from 'next/link'
import classes from './Contacts.module.css'
import { FaFacebook, FaTiktok } from 'react-icons/fa'
import { ContactsType } from '@/app/types/contentful';
import { contentfulClient } from '@/app/lib/contentfulClient';
import { notFound } from 'next/navigation';

export default async function Contacts(){
    const contactsRes = await contentfulClient.getEntries({
        content_type: 'contactForm',
        limit: 1
      });
    
      if (!contactsRes || !contactsRes.items.length) notFound();
    
      const contacts = contactsRes.items[0].fields as ContactsType

    return(
        <div style={{ marginTop: '16px' }}>
            <p className={classes.info}>{contacts.telefon}</p>
            <p className={classes.info}>{contacts.email}</p>
            <p className={classes.info}>{contacts.adresse}</p>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px', fontSize:'2rem', color: 'black', marginTop: '15px'}}>
                <Link href={contacts.facebook} style={{textDecoration: 'none', color: 'black'}}>
                    <FaFacebook />
                </Link>
                <Link href={contacts.tiktok} style={{textDecoration: 'none', color: 'black'}}>
                    <FaTiktok />
                </Link>
            </div>
        </div>
    )
}