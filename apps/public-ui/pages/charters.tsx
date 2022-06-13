import { NextPage } from "next"
import { Layout } from "@components/Layout/Layout"
import { ChartersPage } from "@components/pages/ChartersPage/ChartersPage"

export const Charters: NextPage = () => {
  return (
    <Layout>
      <ChartersPage />
    </Layout>
  )
}

export default Charters
