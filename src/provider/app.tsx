import { ChakraProvider, Spinner } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';

type AppProviderProps = PropsWithChildren<{
  session: Session | null | undefined;
}>;

export const AppProvider = ({
  session,
  children,
}: AppProviderProps): JSX.Element => {
  console.log(session);
  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        <ChakraProvider>{children}</ChakraProvider>
      </SessionProvider>
    </RecoilRoot>
  );
};
