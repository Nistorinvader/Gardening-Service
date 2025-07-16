import classes from './Comments.module.css'
import Image from 'next/image'

interface IComment{
    id: number;
    img: string;
    name: string;
    date: string;
    description: string;
}

const comments: IComment[] = [
    {
        id: 1,
        img: '/manComment.svg',
        name: 'Manfred, Breitenthal (Krumbach, Schwaben (Gem.))',
        date: '31. Jan 2025',
        description: 'Pflegen und Entfernen von Bäumen: 1 Baum; Baumstumpf entfernen war sehr zuverlässig und pünktlich. Hat sauber gearbeitet. Das vereinbarte Honorar wurde eingehalten. Waren sehr zufrieden.',
    },
    {   
        id: 2,
        img: '/womanComment.svg',
        name: 'Sabine, Pullach im Isartal',
        date: '9. Jan 2025',
        description: 'Pflegen und Entfernen von Bäumen: 1 Baum; Baumstumpf entfernen Super zuverlässig, professionell und ordentlich. Es wurde eine Baumwurzel entfernt, hat alles bestens geklappt.'
    },
    {
        id: 3,
        img: '/manComment.svg',
        name: 'Marco, Ottenhofen',
        date: '19. Nov 2024',
        description: 'Heckenpflege: 8 Stück; Entfernen der Hecke Hat den Auftrag so erfüllt wie ich es wollte. Ist zuverlässig und freundlich',
    },
]

export default function Comments(){
    return(
        <section id="Kundenstimmen">
        <p className={'aboutText'}>Was unsere Kunden sagen</p>
        <section style={{marginTop: '20px'}}>
            {comments.map((comm) => (
                <div key={comm.id} className={classes.comment} style={{marginBottom: '32px'}}>
                    <div style={{display: 'flex', marginBottom: '12px', alignItems: 'center'}}>
                        <Image src={comm.img} height={40} width={40} alt={comm.img} className={classes.avatar}/>
                        <div className={classes.about}>
                            <p className={classes.name}>{comm.name}</p>
                            <p className={classes.date}>{comm.date}</p>
                        </div>
                    </div>
                    <Image src={'/rate.svg'} height={20} width={108} alt={comm.img}/>
                    <p className={classes.description}>{comm.description}</p>
                </div>
            ))}
        </section>
        </section>
    )
}