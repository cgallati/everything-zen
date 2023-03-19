import { NextPage } from 'next';
import { Layout } from '../components/Layout/';
import { FAQPage } from '../components/FAQPage/FAQPage';
import { NextSeo } from 'next-seo';

const FAQ: NextPage = () => {
  return (
    <>
      <NextSeo
        title={'FAQ'}
        description={
          'Frequently asked questions about catamaran charters in Charleston SC.'
        }
        canonical={'https://ezsailingcharters.com/faq'}
      />
      <FAQPage />
    </>
  );
};

export default FAQ;
