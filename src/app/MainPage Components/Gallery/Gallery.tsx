import ProjectsCarousel from "./ProjectsCarousel";
import classes from './Gallery.module.css'
import Image from 'next/image'
import { contentfulClient } from "@/app/lib/contentfulClient";
import { GalleryFields } from "@/app/types/contentful";
import { notFound } from 'next/navigation';

export const revalidate = 5;

export default async function Gallery(){
    let gallery: GalleryFields | null = null;
    
    try {
        const galleryRes = await contentfulClient.getEntries({
            content_type: 'projekte',
            limit: 1
        });

        if (galleryRes && galleryRes.items.length > 0) {
            gallery = galleryRes.items[0].fields as GalleryFields;
        }
    } catch (error) {
        console.error('Error fetching gallery:', error);
        notFound();
    }

    if (!gallery) {
        notFound();
    }

    const safeImages = Array.isArray(gallery.images) ? gallery.images.filter(img => img?.fields?.file?.url) : [];
    const safeVideos = Array.isArray(gallery.videos) ? gallery.videos.filter(vid => vid?.fields?.file?.url) : [];
    const safePosters = Array.isArray(gallery.posters) ? gallery.posters.filter(poster => poster?.fields?.file?.url) : [];
    const safeVorherImages = Array.isArray(gallery.vorherNacherImages) ? gallery.vorherNacherImages.filter(img => img?.fields?.file?.url) : [];

    return(
        <section className={classes.gallerySection} id="Projekte">
            <h2 className={'aboutText'}>Unsere Projekte</h2>
            
            {safeImages.length > 0 && (
                <ProjectsCarousel 
                    type={true} 
                    image={safeImages} 
                    video={safeVideos}
                />
            )}
            
            {safeVorherImages.length >= 2 && (
                <div className={classes.vorherContainer}>
                    <div className={classes.vorherItem}>
                        <Image 
                            src={`https:${safeVorherImages[0].fields.file.url}`} 
                            height={237} 
                            width={458} 
                            alt='Gartengestaltung Vorher - Augsburg Gartenpflege' 
                            sizes="(max-width: 960px) 100vw, 50vw"
                            style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}}
                            loading="lazy"
                        />
                    </div>
                    <div className={classes.vorherItem}>
                        <Image 
                            src={`https:${safeVorherImages[1].fields.file.url}`} 
                            height={237} 
                            width={458} 
                            alt='Gartengestaltung Nachher - Augsburg Gartenpflege' 
                            sizes="(max-width: 960px) 100vw, 50vw"
                            style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}}
                            loading="lazy"
                        />
                    </div>
                </div>
            )}
            
            {safeVideos.length > 0 && (
                <ProjectsCarousel 
                    type={false} 
                    image={safeImages} 
                    video={safeVideos} 
                    poster={safePosters}
                />
            )}
        </section>
    )
}