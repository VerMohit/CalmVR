import React from 'react';
import { Box, Flex, Text, Title } from '@mantine/core';
import * as classes from './Welcome.module.css';

export function Welcome() {
  return (
    <Flex id="Landing" className={classes.main}>
      <Flex className={classes.content}>
        <Title className={classes.title}>
          <span>Calm</span>
          <i>VR</i>
        </Title>
        <Text className={classes.text}>Immerse Yourself Into Serenity</Text>
      </Flex>
    </Flex>
  );
}
