import { Box, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useId } from 'react';

const Index: NextPage = () => {
  const id = useId();
  return (
    <Box maxW="1200px" margin="0 auto" p="0 40px">
      <Box aria-labelledby={`characters_header_${id}`} as="section" pt="8">
        <Heading id={`characters_header_${id}`}>Characters</Heading>
      </Box>
    </Box>
  );
};

export default Index;
