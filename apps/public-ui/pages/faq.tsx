import { FAQPage } from '../components/FAQPage/FAQPage';
import { NextSeo } from 'next-seo';
import { FC } from 'react';
import { fetchBanner } from '../lib/content/contentfulPosts';

const FAQ: FC<{bannerText?: string}> = ({bannerText}) => {
  return (
    <>
      <NextSeo
        title={'FAQ'}
        description={
          'Frequently asked questions about catamaran charters in Charleston SC.'
        }
        canonical={'https://everythingzensailingcharters.com/faq'}
      />
      <FAQPage bannerText={bannerText}/>
    </>
  );
};

export default FAQ;

export const getStaticProps = async () => {
  const bannerText = await fetchBanner();
  return {
    props: { bannerText },
  };
}
