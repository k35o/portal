import { AppInfo } from '@/globalStates/app';
import { Box, Center, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

type AppCardProps = AppInfo;

export const AppCard = ({
  emotion,
  title,
  description,
  link,
}: AppCardProps): JSX.Element => (
  <Box as="section" border="1px solid" borderColor="gray.500" borderRadius="6">
    <Link href={link} passHref>
      <Grid as="a" templateColumns="128px 1fr" m="2">
        <GridItem bgColor="InfoText" borderRadius="6px">
          <Center h="100%" fontSize="6xl">
            {emotion}
          </Center>
        </GridItem>
        <GridItem h="128px" pl="15px">
          <Heading as="h4" size="md">
            {title}
          </Heading>
          <Text mt="4">{description}</Text>
        </GridItem>
      </Grid>
    </Link>
  </Box>
);
