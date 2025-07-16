'use client';
import { Carousel } from '@mantine/carousel';
import Image from 'next/image';
import classes from './ProjectsCarousel.module.css';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import type { IImage, IVideo } from '../Gallery/Gallery';

type ProjectsCarouselProps = {
  image: IImage[]
  video: IVideo[]
  type: true | false; 
};


export default function ProjectsCarousel({ image, video, type }: ProjectsCarouselProps) {
  const imageSlides = image.map((img) => (
    <Carousel.Slide key={img.path} className={classes.card}>
      <Image 
        src={img.path}
        width={302}
        height={389} 
        alt={img.path} 
        className={classes.object}
      />
    </Carousel.Slide>
  ));

  const videoSlides = video.map((vid) => (
    <Carousel.Slide key={vid.path} className={classes.card}>
      <VideoPlayer 
        videoSrc={vid.path} 
        posterSrc={vid.poster} 
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