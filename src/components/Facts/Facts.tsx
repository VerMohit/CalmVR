import React from 'react';
import { Divider, Flex, Text } from '@mantine/core';
import { FactCards } from './FactCards';
import * as classes from './Facts.module.css';

export function Facts() {
  return (
    <>
      <Flex className={classes.flexCont}>
        <FactCards
          imgSrc="/static/mind.svg"
          description="1 in 5 Canadians experience a mental illness"
        />
        <FactCards
          imgSrc="/static/young_people.svg"
          description="Young people from 15 to 24 are more likely to experience mental illness"
        />
        <FactCards
          imgSrc="/static/study.png"
          description="Studies show visual images and sounds of nature have positive impacts"
        />
      </Flex>
    </>
  );
}
