import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/Article';
import Section from '../components/Section';
import { GridItem, GridItemStyle } from '../components/GridItem';

import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.jpg';
import thumbMyDeskSetup from '../public/images/contents/youtube-my-desk-setup.jpg';
//import thumb500PaidUsers from '../public/images/contents/blog-500-paid-users.jpg';
//import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png';
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg';
import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg';

const Posts: React.FC = () => {
  return (
    <Layout title="Posts">
      <Container>
        <Heading as="h4" fontSize={20} mb={4}>
          Popular Posts
        </Heading>
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <GridItem
              title="My Fish Workflow"
              thumbnail={thumbFishWorkflow}
              href="#"
            />
            <GridItem
              title="My desk setup (Late 2020)"
              thumbnail={thumbMyDeskSetup}
              href="#"
            />
          </SimpleGrid>
        </Section>
        <Section delay={0.3}>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <GridItem
              title="How to price yourself as freelancer developer"
              thumbnail={thumbHowToPriceYourself}
              href="#"
            />
            <GridItem
              title="I made my react native app 50x faster"
              thumbnail={thumb50xFaster}
              href="#"
            />
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export default Posts;
