import { Box, Text } from '@mantine/core';
import * as classes from './Demo.module.css';

export function Demo() {
  return (
    <Box>
      <Text className={classes.text}>Look at our demo in action below.</Text>

      <video className={classes.video} controls>
        <source src="/static/appDemo.mp4" type="video/mp4" />
      </video>
    </Box>
  );
}
