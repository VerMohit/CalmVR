import React from 'react';
import { AspectRatio, Box, Flex, Image, Text } from '@mantine/core';
import * as classes from './About.module.css';

export function About() {
  return (
    <Flex className={classes.flexCont}>
      <img className={classes.image} src="/static/img_About.jpg" />

      <Box>
        <Text className={classes.text}>
          Mental health issues are a real concern for Canadians, which has roughly{' '}
          <span>doubled</span> beween 2020 to 2023 (Statistics Canada).
        </Text>

        <Text py={'20px'} className={classes.text}>
          CalmVR's mission is to help Canadians overcome mental health struggles using virtual
          reality. Our solution brings <span>you</span> to a <span>calm</span> and{' '}
          <span>meditative</span> state by <span>engaging</span> your <span>hearing</span> and{' '}
          <span>sight</span> through an immersive experience.
        </Text>
      </Box>
    </Flex>
  );
}
