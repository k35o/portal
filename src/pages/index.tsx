import { AppCardList } from '@/components/Common/AppCard';
import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Box maxW="1200px" margin="0 auto" p="0 40px">
      <AppCardList />
    </Box>
  );
};

export default Home;
