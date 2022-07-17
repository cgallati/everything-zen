import { NextPage } from 'next';
import { Layout } from '../components/Layout/Layout';
import { OurStoryPage } from '../components/pages/OurStoryPage/OurStoryPage';

const OurStory: NextPage = () => {
  return (
    <Layout>
      <OurStoryPage />
    </Layout>
  );
};

export default OurStory;
