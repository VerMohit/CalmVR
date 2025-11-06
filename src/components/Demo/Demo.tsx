import React from 'react';
import { Text } from '@mantine/core';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import * as classes from './Demo.module.css';

export function Demo() {
  return (
    <>
      <Text className={classes.text}>Look at our demo in action below.</Text>

      <VideoPlayer />
    </>
  );
}
