import { Flex, Text } from '@mantine/core';
import * as classes from './HowItWorks.module.css';

type Props = {
  imgSrc: string;
  description: string;
  placeBefore: boolean;
};

export function DescriptionBlock({ imgSrc, description, placeBefore }: Props) {
  const image = <img className={classes.imgPeter} src={imgSrc} alt={description} />;
  const text = <Text className={classes.text}>{description}</Text>;

  const context = placeBefore ? [image, text] : [text, image];

  return <Flex className={classes.flexCont}>{context}</Flex>;
}
