import { Divider, Flex, Text } from '@mantine/core';
import * as classes from './Facts.module.css';

type Props = {
  imgSrc: string;
  description: string;
};

export function FactCards({ imgSrc, description }: Props) {
  return (
    <Flex className={classes.main}>
      <img src={imgSrc} />
      <Divider className={classes.divider} />
      <Text className={classes.text}>{description}</Text>
    </Flex>
  );
}
