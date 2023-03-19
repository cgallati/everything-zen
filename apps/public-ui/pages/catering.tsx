import { NextPage } from 'next';
import { Layout } from '../components/Layout/';
import { CateringPage } from '../components/CateringPage/CateringPage';
import { NextSeo } from 'next-seo';

export const Catering: NextPage = () => {
  return (
    <>
      <NextSeo
        title={'CATERING'}
        description={
          'We offer catering through partners for your charleston sailboat charter.'
        }
        canonical={'https://ezsailingcharters.com/catering'}
      />
      <CateringPage />
    </>
  );
};

export default Catering;
