import { NextPage } from 'next';
import { ChartersPage } from '../components/ChartersPage/ChartersPage';
import { NextSeo } from 'next-seo';
import { fetchBanner } from '../lib/content/contentfulPosts';

export const Charters: NextPage = ({bannerText}: {bannerText?: string}) => {
  return (
    <>
      <NextSeo
        title={'CHARTERS & RATES'}
        description={
          'View rates for our luxury catamaran charters in Charleston SC.'
        }
        canonical={'https://everythingzensailingcharters.com/charters'}
      />
      <ChartersPage bannerText={bannerText} />
    </>
  );
};

export default Charters;

export const getStaticProps = async () => {
  const bannerText = await fetchBanner();
  return {
    props: {
      bannerText: bannerText
    },
  };
}
