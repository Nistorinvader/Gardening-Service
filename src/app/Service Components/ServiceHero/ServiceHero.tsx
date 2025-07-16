import Link from 'next/link'
import classes from './ServiceHero.module.css'
import type { Service } from '@/app/data/services'

export default function ServiceHero({service}:{service: Service}){
    return(
        <section>
            <div className={classes.nav}>
                <Link href={'/'} className={classes.navText}>Leistungen /</Link>
                <p className={classes.slugText}>{service.title}</p>
            </div>
            <div className={classes.nav}><h1 className={classes.title}>{service.title}</h1></div>
            <div className={classes.hero} style={{ backgroundImage: `url(${service.heroImage})`}}></div>
            <span className={classes.nav}>
                <p style={{lineHeight: '24px', fontWeight: 400, fontSize: '16px', margin: 0, marginTop: '16px'}}>{service.mainDescription}</p>
            </span>
        </section>
    )
}