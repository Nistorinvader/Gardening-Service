import Link from 'next/link'
import classes from './HeroSection.module.css'
import { Button } from '@mantine/core'

export default function HeroSection(){
    return(
        <div className={classes.hero}>
            <div className={classes.contentWrapper} >
                <h1 className={classes.h1}>
                    Professionelle Gartenpflege in Augsburg
                </h1>
                <p className={classes.p}>
                    Verwandeln Sie Ihr Außengelände mit unseren umfassenden Dienstleistungen. Von Gartenpflege über Pflasterarbeiten bis hin zu Baggerarbeiten bieten wir professionelle Lösungen für Ihr Zuhause.
                </p>
                <Link href={'/#Kontakt'} className={classes.buttonText} style={{fontWeight: '700'}}><Button className={classes.button} w={195} h={48} px={18}>Angebot anfordern</Button></Link>
            </div>
        </div>
    )
}