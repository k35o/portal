import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
} from '@chakra-ui/react';
import { Link } from '@/components/Common/Link';

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box as="header" borderBottom="1px solid" borderBottomColor="gray.500">
      <Flex maxW="1200px" h="16" margin="0 auto" p="0 40px" align="center">
        <Box>
          <Link href="/">
            <Heading>Portal</Heading>
          </Link>
        </Box>
        <Spacer />
        <Box>
          <IconButton
            variant="ghost"
            aria-label="toggle color mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </Box>
      </Flex>
    </Box>
  );
};
