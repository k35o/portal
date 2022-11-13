import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';

type AppProviderProps = PropsWithChildren<{
  session: Session;
}>;

export const AppProvider = ({
  session,
  children,
}: AppProviderProps): JSX.Element => {
  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        <ChakraProvider>{children}</ChakraProvider>
      </SessionProvider>
    </RecoilRoot>
  );
};
