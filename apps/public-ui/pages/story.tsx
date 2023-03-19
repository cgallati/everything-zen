import { NextPage } from 'next';
import { OurStoryPage } from '../components/OurStoryPage/OurStoryPage';
import { NextSeo } from 'next-seo';

const OurStory: NextPage = () => {
  return (
    <>
      <NextSeo
        title={'OUR STORY'}
        description={'Meet the hosts of your Charleston harbor sailing tour.'}
        canonical={'https://ezsailingcharters.com/story'}
      />
      <OurStoryPage />
    </>
  );
};

export default OurStory;
