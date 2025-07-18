'use client';

import { useState } from 'react';
import Image from 'next/image';
import classes from './VideoPlayer.module.css';
import { FaPlay } from 'react-icons/fa';

type VideoPlayerProps = {
  videoSrc: string;
  posterSrc: string;
};

export default function VideoPlayer({ posterSrc, videoSrc }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return isPlaying ? (
    <video
      src={videoSrc}
      controls
      autoPlay
      className={classes.videoPlayer}
    />
  ) : (
    <div className={classes.videoPreview} onClick={() => setIsPlaying(true)}>
      {posterSrc && (
        <Image
          src={posterSrc}
          alt="Видео превью"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={classes.posterImage}
        />
      )}
      <div className={classes.playButtonOverlay}>
        <FaPlay size={40} />
      </div>
    </div>
  );
}
