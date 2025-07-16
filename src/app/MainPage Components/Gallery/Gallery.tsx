import ProjectsCarousel from "./ProjectsCarousel";
import classes from './Gallery.module.css'
import Image from 'next/image'

export interface IImage {
  path: string;
}

export interface IVideo {
  path: string;
  poster: string;
}

const images = [
  { path: '/Images/img3.jpg' },
  { path: '/Images/img17.jpg' },
  { path: '/Images/img14.jpg' },
  { path: '/Images/img4.jpg' },
  { path: '/Images/img6.jpg' },
  { path: '/Images/img8.jpg' },
  { path: '/Images/img9.jpg' },
  { path: '/Images/img12.jpg' },
  { path: '/Images/img13.jpg' },
  { path: '/Images/img1.jpg' },
  { path: '/Images/img16.jpg' },
  { path: '/Images/img2.jpg' },
];

const videos = [
  { 
    path: '/Videos/video1.mp4',
    poster: '/Images/poster1.svg'
  },
  { 
    path: '/Videos/video2.mp4',
    poster: '/Images/poster2.svg'
  },
  { 
    path: '/Videos/video3.mp4',
    poster: '/Images/poster3.svg'
  },
  { 
    path: '/Videos/video4.mp4',
    poster: '/Images/poster4.svg'
  },
  { 
    path: '/Videos/video5.mp4',
    poster: '/Images/poster5.svg'
  },
];

export default function Gallery(){
    return(
        <section className={classes.gallerySection} id="Projekte">
            <p className={'aboutText'}>Unsere Projekte</p>
            <ProjectsCarousel type={true} image={images} video={videos}/>
            <div className={classes.vorherContainer}>
                <div className={classes.vorherItem}>
                    <Image src={'/Images/vorher1.jpg'} height={237} width={458} alt={'vorher1'} style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}}/>
                </div>
                <div className={classes.vorherItem}>
                    <Image src={'/Images/vorher2.jpg'} height={237} width={458} alt={'vorher2'} style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}}/>
                </div>
            </div>
            <ProjectsCarousel type={false} image={images} video={videos}/>
        </section>
    )
}