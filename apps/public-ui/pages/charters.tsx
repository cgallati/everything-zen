import { NextPage } from 'next';
import { Layout } from '../components/Layout';
import { ChartersPage } from '../components/ChartersPage/ChartersPage';

export const Charters: NextPage = () => {
  return (
    <Layout>
      <ChartersPage />
    </Layout>
  );
};

export default Charters;
