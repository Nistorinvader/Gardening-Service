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

  const imageSlides = image.map((img) => (
    <Carousel.Slide key={`https:${img.fields.file.url}`} className={classes.card}>
      <Image 
        src={`https:${img.fields.file.url}`}
        width={302}
        height={389} 
        alt={`https:${img.fields.file.url}`} 
        className={classes.object}
      />
    </Carousel.Slide>
  ));

  const videoSlides = video.map((vid, index) => (
  <Carousel.Slide key={`https:${vid.fields.file.url}`} className={classes.card}>
    <VideoPlayer 
      videoSrc={`https:${vid.fields.file.url}`} 
      posterSrc={poster && poster[index] ? `https:${poster[index].fields.file.url}` : ''} 
    />
  </Carousel.Slide>
));

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
      {type ? imageSlides : videoSlides}
    </Carousel>
    </section>
  );
}