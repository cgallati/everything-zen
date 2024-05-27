import { NextPage } from 'next';
import { SpecialOccasionsPage } from '../components/SpecialOccasionsPage/SpecialOccasionsPage';
import { NextSeo } from 'next-seo';
import { fetchBanner } from '../lib/content/contentfulPosts';
import { FC } from 'react';

const SpecialOccasions: FC<{bannerText?: string}> = ({bannerText}) => {
  return (
    <>
      <NextSeo
        title={'SPECIAL OCCASIONS'}
        description={
          'Let us handle everything for your special moment on a private sailboat rental.'
        }
        canonical={'https://everythingzensailingcharters.com/special-occasions'}
      />
      <SpecialOccasionsPage bannerText={bannerText} />
    </>
  );
};

export default SpecialOccasions;

export const getStaticProps = async () => {
  const bannerText = await fetchBanner();
  return {
    props: {bannerText},
  };
}
