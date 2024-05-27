import { NextPage } from 'next';
import { Layout } from '../components/Layout/';
import { CateringPage } from '../components/CateringPage/CateringPage';
import { NextSeo } from 'next-seo';
import { fetchBanner } from '../lib/content/contentfulPosts';

export const Catering: NextPage = ({ bannerText }: {bannerText?: string}) => {
  return (
    <>
      <NextSeo
        title={'CATERING'}
        description={
          'We offer catering through partners for your charleston sailboat charter.'
        }
        canonical={'https://everythingzensailingcharters.com/catering'}
      />
      <CateringPage bannerText={bannerText} />
    </>
  );
};

export default Catering;

export const getStaticProps = async () => {
  const bannerText = await fetchBanner();
  return {
    props: {
      bannerText
    },
  };
}
