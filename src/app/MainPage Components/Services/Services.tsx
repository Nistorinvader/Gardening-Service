import Link from "next/link";
import Image from 'next/image'
import classes from './Service.module.css'
import { ContentfulAsset, LeistungType } from "@/app/types/contentful";
import { contentfulClient } from "@/app/lib/contentfulClient";
import { notFound } from 'next/navigation';



export default async function Services(){
  const leistungenRes = await contentfulClient.getEntries({
    content_type: 'leistungMainPage',
    limit: 4
  });

  if (!leistungenRes || !leistungenRes.items.length) notFound();

  const array: LeistungType[] = leistungenRes.items
  .map(item => {
    const fields = item.fields;

    if (
      typeof fields.slug === 'string' &&
      typeof fields.name === 'string' &&
      typeof fields.description === 'string' &&
      fields.image && typeof fields.image === 'object'
    ) {
      return {
        id: item.sys.id,
        slug: fields.slug,
        name: fields.name,
        description: fields.description,
        image: fields.image as ContentfulAsset[],
      } as LeistungType;
    }
    return null;
  })
  .filter((service): service is LeistungType => service !== null);
  const services = array.slice().reverse();

    return(
      <section style={{margin: '40px 0px'}} id="Leistungen">
        <p className={'aboutText'}>Unsere Leistungen</p>
        <span className={classes.text}>
          <h1 className={classes.h1}>Umfassende Dienstleistungen für Ihr Außengelände</h1>
          <p className={classes.p}>Wir bieten ein breites Spektrum an Dienstleistungen, um Ihre Bedürfnisse zu erfüllen. Entdecken Sie unsere Angebote und finden Sie die passende Lösung für Ihr Projekt.</p>
        </span>
        <div className={classes.container} style={{}}>
          {services.map((item: LeistungType) => (
            <Link href={`leistungen/${item.slug}`} key={item.slug} className={classes.link}>
              <div className={classes.serviceBox}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <Image src={`https:${item.image[0].fields.file.url}`} alt={item.name} width={24} height={24}/>
                  <Image src={'/arrow.svg'} alt={'arrow'} width={17} height={10} style={{marginLeft: 'auto'}}/>
                </div>
                <p className={classes.name}>{item.name}</p>
                <p className={classes.description}>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    )
}