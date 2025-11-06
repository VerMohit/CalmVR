import { Carousel } from '@mantine/carousel';

import '@mantine/carousel/styles.css';

import React from 'react';
import * as classes from './CarouselComponent.module.css';

const carouselStyle = {
  borderRadius: '20px', // Adjust the value based on your preference
  overflow: 'hidden', // Ensure that content within the carousel doesn't overflow
};

type Props = {
  imgSrcArr: string[];
};

export function CarouselComponent({ imgSrcArr }: Props) {
  return (
    <Carousel style={carouselStyle} className={classes.carousel} withIndicators>
      {imgSrcArr.map((src, index) => (
        <Carousel.Slide key={index} className={classes.carSlider}>
          <img src={src} alt={`slide-${index}`} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
