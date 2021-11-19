import NextLink from 'next/link';
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button
} from '@chakra-ui/react';
import Section from '../components/Section';
import Layout from '../components/layouts/Article';
import Paragraph from '../components/Paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/Bio';

const Page: React.FC = () => {
  return (
    <Layout title="Homepage">
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          textAlign="center"
        >
          Hello, I&apos;m a full-stack developer based in Bangladesh!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Mahmud Zaman Bali
            </Heading>
            <p>Arsenal Fan ( Bookphile / Developer / Designer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/mahmud.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Mahmud is a freelance and a full-stack developer based in Dhaka with
            a passion for building digital services/stuff he wants, He has a
            knack for all things launching products, from planning and designing
            all way to solving real-life problems with hanging out with his
            camera. Currently, he is living off of his own prooduct called {''}
            <NextLink href="/works/inkdrop">
              <Link>Inkdrop</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1998</BioYear>
            Born in Madaripur, Bangladesh.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Completed Undergraduate degree&apos;s in Computer Science and
            Engineering at American International University-Bangladesh
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I 🤍
          </Heading>
          <Paragraph>
            History, Music,{' '}
            <Link href="https://illust.oduruinu.net/">Drawing</Link>, Playing
            Drums, <Link href="https://500px.com/p/craftzdog">Photography</Link>
            , Linux, Machine Learning and All things technology
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
