import { LandingPage } from "@components/pages/LandingPage/LandingPage"
import { Layout } from "@components/Layout/Layout"
import { NextPage } from "next"

export const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <LandingPage />
      </Layout>
    </>
  )
}

export default Home
