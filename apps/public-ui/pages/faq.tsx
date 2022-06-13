import { NextPage } from "next";
import { Layout } from "../components/Layout/Layout";
import { FAQPage } from "../components/pages/FAQPage/FAQPage";

const FAQ: NextPage = () => {
  return (
    <Layout>
      <FAQPage />
    </Layout>
  );
};

export default FAQ;
