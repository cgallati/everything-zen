import { NextPage } from "next";
import { Layout } from "../components/Layout/Layout";
import { CateringPage } from "../components/pages/CateringPage/CateringPage";

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
