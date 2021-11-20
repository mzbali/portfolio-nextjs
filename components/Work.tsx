import NextLink from 'next/link';
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import React from 'react';

export const Title: React.FC = ({ children }) => {
  return (
    <Box>
      <NextLink href="/works">
        <Link>Works</Link>
      </NextLink>
      <span>
        &nbsp;
        <ChevronRightIcon />
        &nbsp;
      </span>
      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
  );
};

export const WorkImage: React.FC<{ src: string; alt: string }> = ({
  src,
  alt
}) => {
  return <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />;
};

export const Meta: React.FC = ({ children }) => {
  return (
    <Badge colorScheme="green" mr={2}>
      {children}
    </Badge>
  );
};
