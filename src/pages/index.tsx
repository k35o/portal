import { AppCardList } from '@/components/Common/AppCard';
import { Box, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useId } from 'react';

const Home: NextPage = () => {
  const id = useId();
  return (
    <Box maxW="1200px" margin="0 auto" p="0 40px">
      <Box aria-labelledby={`application_header_${id}`} as="section" pt="8">
        <Heading id={`application_header_${id}`}>Applications</Heading>
        <AppCardList />
      </Box>
    </Box>
  );
};

export default Home;
