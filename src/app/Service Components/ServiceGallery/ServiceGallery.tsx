import VideoPlayer from "@/app/MainPage Components/VideoPlayer/VideoPlayer";
import Image from 'next/image'
import classes from './ServiceGallery.module.css'
import { Service } from "@/app/data/services";

export default function ServiceGallery({service}:{service: Service}){
    return(
        <section>
            <p style={{marginTop: '20px', marginBottom: '12px', lineHeight: '28px', fontWeight: '700', fontSize: '22px', color: '#121714'}}>Beispiele unserer Arbeit</p>
            <div className={classes.container}>
                <div className={classes.item}>
                    <Image src={`${service.galleryImage}`} height={468} width={301} alt={'img'} className={classes.image}/>
                </div>
                <div className={classes.item}>
                    <VideoPlayer posterSrc={`${service.poster[0]}`} videoSrc={`${service.galleryVideos[0]}`}/>
                </div>
                <div className={classes.item}>
                    <VideoPlayer posterSrc={`${service.poster[1]}`} videoSrc={`${service.galleryVideos[1]}`}/>
                </div>
            </div>
        </section>
    )
}