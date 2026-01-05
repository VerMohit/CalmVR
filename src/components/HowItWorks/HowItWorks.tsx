import { Box, Text } from '@mantine/core';

import '@mantine/carousel/styles.css';

import { CarouselComponent } from '../Carousel/CarouselComponent';
import { DescriptionBlock } from './DescriptionBlock';
import * as classes from './HowItWorks.module.css';

export function HowItWorks() {
  return (
    <Box>
      <DescriptionBlock
        imgSrc="/static/Peter.png"
        description="Find your favourite spot at home, grab the VR headset and immerse yourself into a calming
          and meditative journey through several scenes that enlighten you."
        placeBefore
      />

      <DescriptionBlock
        imgSrc="/static/Talon.png"
        description="You no longer have to wait for therapy or doctors. CalmVR offers an on-demand and
          cost-effective solution that promotes relaxation and a resilient mindset."
        placeBefore={false}
      />

      <Text className={classes.text}>
        Choose from a wide array of high-resolution nature scenes, with carefully curated audio and
        full 360° view, that feels as if you were there.
      </Text>

      <CarouselComponent
        imgSrcArr={[
          '/static/nature1.png',
          '/static/nature2.png',
          '/static/nature3.png',
          '/static/nature4.png',
          '/static/nature5.png',
          '/static/nature6.png',
        ]}
      />
    </Box>
  );
}
