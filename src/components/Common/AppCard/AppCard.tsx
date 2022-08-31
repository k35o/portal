import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import Image from '../Image/Image';

type AppCardProps = {
  src: string;
  title: string;
  description: string;
};

export const AppCard = ({
  src,
  title,
  description,
}: AppCardProps): JSX.Element => {
  const [isLargerThan720] = useMediaQuery('(min-width: 720px)');

  return (
    <Box
      as="section"
      w={isLargerThan720 ? '48%' : '100%'}
      h="144px"
      border="1px solid"
      borderColor="gray.500"
      borderRadius="6"
    >
      <Grid templateColumns="128px 1fr" m="2">
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
    </Box>
  );
};
