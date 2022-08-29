import { Box, Heading, useColorModeValue } from '@chakra-ui/react';

export const AppCard = (): JSX.Element => {
  return (
    <Box
      as="section"
      w="480px"
      h="128px"
      border="1px solid"
      borderColor="gray.500"
    >
      <Heading as="h4" size="lg">
        文字数カウンター
      </Heading>
    </Box>
  );
};
