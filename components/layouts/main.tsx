import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import Navbar from '../Navbar';
import { Router } from 'next/dist/client/router';

const Main: React.FC<{ router: Router }> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mahmud Zaman Bali - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
