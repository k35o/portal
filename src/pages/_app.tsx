import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from '@/components/Common/Layout';
import { RecoilRoot } from 'recoil';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
  return (
    <RecoilRoot>
      <SessionProvider session={pageProps.session}>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </SessionProvider>
    </RecoilRoot>
  );
}

export default MyApp;
