import Head from "next/head"
import Image from "next/image"
import type { ReactElement } from "react"
import React from "react"
import Layout from "../components/layout"
import type { NextPageWithLayout } from "./_app"

const Page: NextPageWithLayout = () => {
  return (
    <>
      <div className="max-w-screen-2xl ml-auto mr-auto text-center relative">
        <Image
          src="/images/primary-bg.png"
          layout="fill"
          objectFit="cover"
          objectPosition="50% top"
        />

        <div className="max-w-[890px] ml-auto mr-auto text-center hidden md:block pt-24 pl-5 pr-5">
          <Image
            src="/images/Expo22_Website_DatesLocation.png"
            layout="responsive"
            width={1200}
            height={28}
          />
        </div>

        <div className="max-w-[890px] ml-auto mr-auto text-center md:hidden pt-24 pl-5 pr-5">
          <Image
            src="/images/Expo22_Website_DatesLocation_Mobile.png"
            layout="responsive"
            width={1920}
            height={191}
          />
        </div>

        <h1 className="max-w-[440px] ml-auto mr-auto text-center mt-20">
          <Image
            src="/images/Expo22_Horizontal_SponsorLogo_Platinum.png"
            layout="responsive"
            width={1160}
            height={476}
          />
        </h1>

        <div className="max-w ml-auto mr-auto text-center pl-5 pr-5">
          <Image
            src="/images/Expo22_Site_Mickey_Fade3.png"
            layout="responsive"
            width={1200}
            height={873}
          />
        </div>

        <div className="max-w-[440px] ml-auto mr-auto text-center pl-5 pr-5">
          <Image
            src="/images/Expo22_Site_D100.png"
            layout="responsive"
            width={853}
            height={217}
          />
        </div>

        <div className="max-w-[680px] ml-auto mr-auto text-center pl-5 pr-5 mt-20">
          <Image
            src="/images/Countdown_Frame_Top.png"
            layout="responsive"
            width={1199}
            height={212}
          />
        </div>


      </div>
    </>
  )
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
