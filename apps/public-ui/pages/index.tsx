import { Layout } from '../components/Layout';
import { LandingPage } from '../components/LandingPage/LandingPage';
import { fetchBanner } from '../lib/content/contentfulPosts';
import { FC } from 'react';
import React from 'react';

export const Home: FC<{bannerText?: string}> = ({bannerText}) => {
  return (
    <>
      <Layout bannerText={bannerText}>
        <LandingPage />
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const bannerText = await fetchBanner();
  return {
    props: {bannerText},
  };
}
