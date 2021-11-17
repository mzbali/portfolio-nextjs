import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';

const Main: React.FC = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mahmud Zaman Bali - Homepage</title>
      </Head>
      <Container>{children}</Container>
    </Box>
  );
};

export default Main;
