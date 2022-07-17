import { NextPage } from 'next';
import { Layout } from '../components/Layout/';
import { FAQPage } from '../components/FAQPage/FAQPage';

const FAQ: NextPage = () => {
  return (
    <Layout>
      <FAQPage />
    </Layout>
  );
};

export default FAQ;
