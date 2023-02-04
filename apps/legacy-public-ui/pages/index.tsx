import { Layout } from '../components/Layout';
import { NextPage } from 'next';
import { LandingPage } from '../components/LandingPage/LandingPage';

export const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <LandingPage />
      </Layout>
    </>
  );
};

export default Home;
