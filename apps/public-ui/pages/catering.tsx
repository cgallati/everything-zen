import { NextPage } from 'next';
import { Layout } from '../components/Layout/';
import { CateringPage } from '../components/CateringPage/CateringPage';

export const Catering: NextPage = () => {
  return (
    <>
      <Layout>
        <CateringPage />
      </Layout>
    </>
  );
};

export default Catering;
