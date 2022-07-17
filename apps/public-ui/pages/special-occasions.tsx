import { NextPage } from 'next';
import { SpecialOccasionsPage } from '../components/pages/SpecialOccasionsPage/SpecialOccasionsPage';
import { Layout } from '../components/Layout/Layout';

const SpecialOccasions: NextPage = () => {
  return (
    <Layout>
      <SpecialOccasionsPage />
    </Layout>
  );
};

export default SpecialOccasions;
