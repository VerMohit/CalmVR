import { Flex, Text } from '@mantine/core';
import * as classes from './Use.module.css';

type Props = {
  imgSrc: string;
  description: string;
  placeBefore: boolean;
};

export function UseBlock({ imgSrc, description, placeBefore }: Props) {
  return (
    <Flex className={classes.flexCont}>
      {placeBefore ? (
        <>
          <img className={classes.imgPeter} src={imgSrc} />
          <Text className={classes.text}>{description}</Text>
        </>
      ) : (
        <>
          <Text className={classes.text}>{description}</Text>
          <img className={classes.imgPeter} src={imgSrc} />
        </>
      )}
    </Flex>
  );
}
