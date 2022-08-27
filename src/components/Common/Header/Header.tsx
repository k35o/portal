import { Box, Center, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import { Link } from '@/components/Common/Link';

export const Header = () => {
  return (
    <Box as="header" borderBottom="1px solid" borderBottomColor="gray.500">
      <Flex maxW="1200px" h="16" margin="0 auto" p="0 40px" align="center">
        <Box>
          <Link href="/">
            <Heading>Portal</Heading>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};
