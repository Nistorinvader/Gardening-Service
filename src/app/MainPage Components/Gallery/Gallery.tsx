import ProjectsCarousel from "./ProjectsCarousel";
import classes from './Gallery.module.css'
import Image from 'next/image'
import { contentfulClient } from "@/app/lib/contentfulClient";
import { GalleryFields } from "@/app/types/contentful";
import { notFound } from 'next/navigation';

export const revalidate = 5;

const galleryRes = await contentfulClient.getEntries({
    content_type: 'projekte',
    limit: 1
  });

  if (!galleryRes || !galleryRes.items.length) notFound();

  const gallery = galleryRes.items[0].fields as GalleryFields

export default function Gallery(){
    return(
        <section className={classes.gallerySection} id="Projekte">
            <p className={'aboutText'}>Unsere Projekte</p>
            <ProjectsCarousel type={true} image={gallery.images} video={gallery.videos}/>
            <div className={classes.vorherContainer}>
                <div className={classes.vorherItem}>
                    <Image src={`https:${gallery.vorherNacherImages[0].fields.file.url}`} height={237} width={458} alt={'vorher1'} style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}}/>
                </div>
                <div className={classes.vorherItem}>
                    <Image src={`https:${gallery.vorherNacherImages[1].fields.file.url}`} height={237} width={458} alt={'vorher2'} style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}}/>
                </div>
            </div>
            <ProjectsCarousel type={false} image={gallery.images} video={gallery.videos} poster={gallery.posters}/>
        </section>
    )
}
