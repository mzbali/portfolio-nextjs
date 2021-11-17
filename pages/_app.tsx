import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../component/layouts/main';

const Website = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
};

export default Website;
