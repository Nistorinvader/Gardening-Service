import Link from 'next/link'
import classes from './HeroSection.module.css'
import { Button } from '@mantine/core'
import type { HomePageType } from '@/app/types/contentful'
import { contentfulClient } from '@/app/lib/contentfulClient'
import { notFound } from 'next/navigation';

export const revalidate = 5;

const homePageRes = await contentfulClient.getEntries({
    content_type: 'homePage',
    limit: 1
  });

  if (!homePageRes || !homePageRes.items.length) notFound();

  const homePage = homePageRes.items[0].fields as HomePageType

export default function HeroSection(){
    return(
        <div className={classes.hero} style={{backgroundImage: `url(https:${homePage.heroImage.fields.file.url})`}}>
            <div className={classes.contentWrapper} >
                <h1 className={classes.h1}>
                    {homePage.mainText}
                </h1>
                <p className={classes.p}>
                    {homePage.mainDescription}
                </p>
                <Link href={'/#Kontakt'} className={classes.buttonText} style={{fontWeight: '700'}}><Button className={classes.button} w={195} h={48} px={18}>Angebot anfordern</Button></Link>
            </div>
        </div>
    )
}
