import { NextPage } from 'next';
import { SpecialOccasionsPage } from '../components/SpecialOccasionsPage/SpecialOccasionsPage';
import { NextSeo } from 'next-seo';

const SpecialOccasions: NextPage = () => {
  return (
    <>
      <NextSeo
        title={'SPECIAL OCCASIONS'}
        description={
          'Let us handle everything for your special moment on a private sailboat rental.'
        }
        canonical={'https://everythingzensailingcharters.com/special-occasions'}
      />
      <SpecialOccasionsPage />
    </>
  );
};

export default SpecialOccasions;
