import { AppInfo } from '@/globalStates/app';
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from '../Image/Image';

type AppCardProps = AppInfo;

export const AppCard = ({
  src,
  title,
  description,
  link,
}: AppCardProps): JSX.Element => (
  <Box as="section" border="1px solid" borderColor="gray.500" borderRadius="6">
    <Link href={link} passHref>
      <Grid as="a" templateColumns="128px 1fr" m="2">
        <GridItem h="128px">
          <Image src={src} alt="アプリの画像" width="128px" height="128px" />
        </GridItem>
        <GridItem h="128px">
          <Heading as="h4" size="md">
            {title}
          </Heading>
          <Text mt="4">{description}</Text>
        </GridItem>
      </Grid>
    </Link>
  </Box>
);
