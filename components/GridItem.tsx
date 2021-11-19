import NextLink from 'next/link';
import Image from 'next/image';

import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import React from 'react';

export const GridItem: React.FC<{
  href: string;
  title: string;
  thumbnail: StaticImageData;
}> = ({ children, href, title, thumbnail }) => {
  return (
    <Box w="100%" align="center">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  );
};

export const WorkGridItem: React.FC<{
  id: string;
  title: string;
  thumbnail: StaticImageData;
}> = ({ children, id, title, thumbnail }) => {
  return (
    <Box w="100%" align="center">
      <NextLink href={`/works/${id}`}>
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumnail"
            placeholder="blur"
          />
          <LinkOverlay href={`/works/${id}`}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  );
};

export const GridItemStyle: React.FC = () => {
  return (
    <Global
      styles={`
             .grid-item-thumbnail {
                 border-radius: 12px;
             }
         `}
    />
  );
};
