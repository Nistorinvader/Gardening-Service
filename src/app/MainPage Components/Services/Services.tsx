import Link from "next/link";
import Image from 'next/image'
import classes from './Service.module.css'

interface IService{
    id: number,
    slug: string,
    name: string,
    description: string,
    image: string,
}

const services: IService[] = [
  {
    id: 1,
    slug: 'gartenpflege',
    name: "Garten- und Landschaftsbau",
    description: "Von der Planung bis zur Umsetzung - wir gestalten Ihren Traumgarten.",
    image: "/service1.svg"
  },
  {
    id: 2,
    slug: 'pflaster',
    name: "Pflasterarbeiten",
    description: "Professionelle Verlegung von Pflastersteinen für Wege und Terrassen.",
    image: "/service2.svg"
  },
  {
    id: 3,
    slug: 'weitere-dienstleistungen',
    name: "Weitere Dienstleistungen",
    description: "Individuelle Gestaltung mit Natursteinen für Mauern und mehr.",
    image: "/service3.svg"
  },
  {
    id: 4,
    slug: 'baggerarbeiten',
    name: "Baggerarbeiten",
    description: "Vorbereitende Arbeiten für Bauprojekte und Geländeanpassungen.",
    image: "/service4.svg"
  }
]

export default function Services({}){
    return(
      <section style={{margin: '40px 0px'}} id="Leistungen">
        <p className={'aboutText'}>Unsere Leistungen</p>
        <span className={classes.text}>
          <h1 className={classes.h1}>Umfassende Dienstleistungen für Ihr Außengelände</h1>
          <p className={classes.p}>Wir bieten ein breites Spektrum an Dienstleistungen, um Ihre Bedürfnisse zu erfüllen. Entdecken Sie unsere Angebote und finden Sie die passende Lösung für Ihr Projekt.</p>
        </span>
        <div className={classes.container} style={{}}>
          {services.map((service: IService) => (
            <Link href={`leistungen/${service.slug}`} key={service.id} className={classes.link}>
              <div className={classes.serviceBox}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <Image src={service.image} alt={service.name} width={24} height={24}/>
                  <Image src={'/arrow.svg'} alt={'arrow'} width={17} height={10} style={{marginLeft: 'auto'}}/>
                </div>
                <p className={classes.name}>{service.name}</p>
                <p className={classes.description}>{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    )
}