import { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { ChartersPage } from '../components/ChartersPage/ChartersPage';
import { NextSeo } from 'next-seo';

export const Charters: NextPage = () => {
  return (
    <>
      <NextSeo
        title={'CHARTERS & RATES'}
        description={
          'View rates for our luxury catamaran charters in Charleston SC.'
        }
        canonical={'https://ezsailingcharters.com/charters'}
      />
      <ChartersPage />
    </>
  );
};

export default Charters;
