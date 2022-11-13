import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useColorMode,
} from '@chakra-ui/react';
import { Link } from '@/components/Common/Link';
import { signIn, signOut, useSession } from 'next-auth/react';

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { data: session, status } = useSession();

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
            size="lg"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </Box>
        <Box>
          {status === 'unauthenticated' && (
            <Button onClick={() => signIn('google')}>Sign in</Button>
          )}
          {session?.user && (
            <Menu>
              <MenuButton>
                <Avatar
                  name={session.user.name ?? undefined}
                  src={session.user.image ?? undefined}
                />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => signOut()}>ログアウト</MenuItem>
              </MenuList>
            </Menu>
          )}
        </Box>
      </Flex>
    </Box>
  );
};
