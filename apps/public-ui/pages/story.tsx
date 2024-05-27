import { NextPage } from 'next';
import { OurStoryPage } from '../components/OurStoryPage/OurStoryPage';
import { NextSeo } from 'next-seo';
import { fetchBanner } from '../lib/content/contentfulPosts';
import { FC } from 'react';

const OurStory: FC<{bannerText?: string}> = ({bannerText}) => {
  return (
    <>
      <NextSeo
        title={'OUR STORY'}
        description={'Meet the hosts of your Charleston harbor sailing tour.'}
        canonical={'https://everythingzensailingcharters.com/story'}
      />
      <OurStoryPage bannerText={bannerText} />
    </>
  );
};

export default OurStory;

export const getStaticProps = async () => {
  const bannerText = await fetchBanner();
  return {
    props: {bannerText},
  };
}
