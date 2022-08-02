import Head from "next/head"
import type { ReactElement } from "react"
import React from "react"
import Layout from "../components/layout"
import type { NextPageWithLayout } from "./_app"

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>D23 Expo 2022: The Ultimate Disney Fan Event; Presented by Visa</title>
      </Head>
      <Layout>{page}</Layout>
    </>
  )
}

export default Page
