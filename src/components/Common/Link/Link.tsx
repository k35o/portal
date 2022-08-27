import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

type LinkProps = Pick<NextLinkProps, 'href'> & ChakraLinkProps;

export const Link = ({ href, ...args }: LinkProps): JSX.Element => (
  <NextLink href={href} passHref>
    <ChakraLink {...args} />
  </NextLink>
);
