import React from 'react';
import { Container, Box, Heading } from '@chakra-ui/react';

const Page: React.FC = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="teal.300" p={3} mb={6} textAlign="center">
        Hello, I&apos;m a full-stack developer based in Bangladesh!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Mahmud Zaman Bali
          </Heading>
          <p>Arsenal Fan ( Bookphile / Developer / Designer )</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
