import { chakra } from '@chakra-ui/react';
import NextImage, { ImageLoaderProps } from 'next/image';

const Image = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      'width',
      'height',
      'src',
      'alt',
      'quality',
      'placeholder',
      'blurDataURL',
      'loader ',
    ].includes(prop),
});

export const myLoader = (resolverProps: ImageLoaderProps): string =>
  `${resolverProps.src}?w=${resolverProps.width}&q=${resolverProps.quality}`;

export default Image;
