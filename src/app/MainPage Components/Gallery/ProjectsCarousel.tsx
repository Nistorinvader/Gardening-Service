'use client';
import { Carousel } from '@mantine/carousel';
import Image from 'next/image';
import classes from './ProjectsCarousel.module.css';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { ContentfulAsset } from '@/app/types/contentful';

type ProjectsCarouselProps = {
  image: ContentfulAsset[]
  video: ContentfulAsset[]
  poster?: ContentfulAsset[]
  type: true | false; 
};

export default function ProjectsCarousel({ image, video, type, poster }: ProjectsCarouselProps) {
  const validImages = (image || []).filter(img => img && img.fields && img.fields.file && img.fields.file.url);
  const validVideos = (video || []).filter(vid => vid && vid.fields && vid.fields.file && vid.fields.file.url);
  const validPosters = (poster || []).filter(p => p && p.fields && p.fields.file && p.fields.file.url);

  const imageSlides = validImages.map((img, index) => (
    <Carousel.Slide key={`img-${index}`} className={classes.card}>
      <Image 
        src={`https:${img.fields.file.url}`}
        width={302}
        height={389} 
        alt={`Gallery image ${index + 1}`} 
        className={classes.object}
      />
    </Carousel.Slide>
  ));

  const videoSlides = validVideos.map((vid, index) => (
    <Carousel.Slide key={`vid-${index}`} className={classes.card}>
      <VideoPlayer 
        videoSrc={`https:${vid.fields.file.url}`} 
        posterSrc={validPosters[index] ? `https:${validPosters[index].fields.file.url}` : ''} 
      />
    </Carousel.Slide>
  ));

  const slides = type ? imageSlides : videoSlides;
  
  if (slides.length === 0) {
    return null;
  }

  return (
    <section style={{padding: '16px 0'}}>
      <Carousel
        withIndicators
        height={389}
        slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
        slideGap="sm"
        withControls
        emblaOptions={{ loop: true, align: 'start', slidesToScroll: 1 }}
        styles={{
          control: {
            backgroundColor: 'black',
            color: 'white'
          },
        }}
      >
        {slides}
      </Carousel>
    </section>
  );
}
