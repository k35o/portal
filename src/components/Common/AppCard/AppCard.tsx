import { AppInfo } from '@/globalStates/app';
import { Box, Center, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import { useId } from 'react';
import { Link } from '@/components/Common/Link';

type AppCardProps = AppInfo;

export const AppCard = ({
  emotion,
  title,
  description,
  link,
}: AppCardProps): JSX.Element => {
  const id = useId();
  return (
    <Box
      as="section"
      aria-labelledby={`app_card_${id}`}
      border="1px solid"
      borderColor="gray.500"
      borderRadius="6"
    >
      <Link href={link}>
        <Grid templateColumns="128px 1fr" m="2">
          <GridItem bgColor="InfoText" borderRadius="6px">
            <Center h="100%" fontSize="6xl">
              {emotion}
            </Center>
          </GridItem>
          <GridItem h="128px" pl="15px">
            <Heading as="h4" id={`app_card_${id}`} size="md">
              {title}
            </Heading>
            <Text mt="4">{description}</Text>
          </GridItem>
        </Grid>
      </Link>
    </Box>
  );
};
