import VideoPlayer from "@/app/MainPage Components/VideoPlayer/VideoPlayer";
import Image from 'next/image'
import classes from './ServiceGallery.module.css'
import type { ServiceProps } from '@/app/types/contentful';

export default function ServiceGallery({service}:ServiceProps){
    return(
        <section>
            <p style={{marginTop: '20px', marginBottom: '12px', lineHeight: '28px', fontWeight: '700', fontSize: '22px', color: '#121714'}}>Beispiele unserer Arbeit</p>
            <div className={classes.container}>
                <div className={classes.item}>
                    <Image src={`https:${service.galleryImage.fields.file.url}`} height={468} width={301} alt={'img'} className={classes.image}/>
                </div>
                <div className={classes.item}>
                    <VideoPlayer posterSrc={`https:${service.poster[0].fields.file.url}`} videoSrc={`https:${service.galleryVideos[0].fields.file.url}`}/>
                </div>
                <div className={classes.item}>
                    <VideoPlayer posterSrc={`https:${service.poster[1].fields.file.url}`} videoSrc={`https:${service.galleryVideos[1].fields.file.url}`}/>
                </div>
            </div>
        </section>
    )
}