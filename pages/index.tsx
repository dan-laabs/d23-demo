import Head from "next/head"
import Image from "next/image"
import { ReactElement, useEffect, useState } from "react"
import React from "react"
import Layout from "../components/layout"
import type { NextPageWithLayout } from "./_app"
import { calculateTimeLeft } from "@utils/common"

const Page: NextPageWithLayout = () => {
  const eventDate = new Date("09/09/2022")
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(eventDate))

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(eventDate))
    }, 1000)

    return () => clearTimeout(timer)
  })

  // todo: move time counter into separate component & hook
  // todo: deduplicate template segments into components
  // todo: move common hex codes into tailwind color class name configuration

  return (
    <>
      <div className="relative ml-auto mr-auto max-w-screen-2xl text-center">
        {/* <Image
          src="/images/primary-bg.png"
          layout="fill"
          objectFit="cover"
          className="absolute w-screen overflow-hidden"
        /> */}

        <div className="relative ml-auto mr-auto hidden max-w-[890px] pt-24 pl-5 pr-5 text-center md:block">
          <Image
            src="/images/Expo22_Website_DatesLocation.png"
            layout="responsive"
            width={1200}
            height={28}
          />
        </div>

        <div className="relative ml-auto mr-auto max-w-[890px] pt-24 pl-5 pr-5 text-center md:hidden">
          <Image
            src="/images/Expo22_Website_DatesLocation_Mobile.png"
            layout="responsive"
            width={1920}
            height={191}
          />
        </div>

        <h1 className="relative ml-auto mr-auto mt-20 max-w-[440px] text-center">
          <Image
            src="/images/Expo22_Horizontal_SponsorLogo_Platinum.png"
            layout="responsive"
            width={1160}
            height={476}
          />
        </h1>

        <div className="max-w relative ml-auto mr-auto pl-5 pr-5 text-center">
          <Image
            src="/images/Expo22_Site_Mickey_Fade3.png"
            layout="responsive"
            width={1200}
            height={873}
          />
        </div>

        <div className="relative ml-auto mr-auto max-w-[440px] pl-5 pr-5 text-center">
          <Image
            src="/images/Expo22_Site_D100.png"
            layout="responsive"
            width={853}
            height={217}
          />
        </div>

        <div className="relative ml-auto mr-auto mt-20 max-w-[680px] pl-5 pr-5 text-center">
          <Image
            src="/images/Countdown_Frame_Top.png"
            layout="responsive"
            width={1199}
            height={212}
          />
        </div>

        <div className="relative ml-auto mr-auto max-w-[680px] pl-5 pr-5 text-center">
          <div className="mt-4 text-sm font-bold uppercase text-[#4ccbfb]">
            Official
          </div>
          <div className="mt-2 text-lg font-bold text-white">
            Countdown to D23 Expo
          </div>
          <div className="mt-8 flex items-center justify-center space-x-4">
            {/* todo: countdown list item components */}
            <div>
              <h2 className="h-14 w-14 items-center justify-center bg-[#4ccbfb] font-bold text-[#070374]">
                {timeLeft ? timeLeft.days : ""}
              </h2>
              <span className="text-xs font-bold uppercase text-[#4ccbfb]">
                days
              </span>
            </div>
            <div>
              <h2 className="h-14 w-14 items-center justify-center bg-[#4ccbfb] font-bold text-[#070374]">
                {timeLeft ? timeLeft.hours : ""}
              </h2>
              <span className="text-xs font-bold uppercase text-[#4ccbfb]">
                hours
              </span>
            </div>
            <div>
              <h2 className="h-14 w-14 items-center justify-center bg-[#4ccbfb] font-bold text-[#070374]">
                {timeLeft ? timeLeft.minutes : ""}
              </h2>
              <span className="text-xs font-bold uppercase text-[#4ccbfb]">
                minutes
              </span>
            </div>
            <div>
              <h2 className="h-14 w-14 items-center justify-center bg-[#4ccbfb] font-bold text-[#070374]">
                {timeLeft ? timeLeft.seconds : ""}
              </h2>
              <span className="text-xs font-bold uppercase text-[#4ccbfb]">
                seconds
              </span>
            </div>
          </div>
          <div className="mt-6 mb-2 text-sm font-bold uppercase text-white">
            Presented By
          </div>
          <div className="ml-auto mr-auto max-w-[144px]">
            <Image
              src="/images/citizen_logo_white.png"
              layout="responsive"
              width={200}
              height={37}
            />
          </div>
        </div>

        <div className="relative ml-auto mr-auto mt-8 max-w-[680px] pl-5 pr-5 text-center">
          <Image
            src="/images/Countdown_Frame_Bottom.png"
            layout="responsive"
            width={1200}
            height={90}
          />
        </div>

        <div className="relative ml-auto mr-auto mt-20 max-w-[1016px] rounded-xl bg-[#070374] pt-6 pr-10 pb-10 pl-10 shadow-md">
          <h2 className="text-2xl font-bold text-white">Expo Tickets</h2>
          <div className="mt-6 text-white">
            Tickets to D23 Expo presented by Visa are SOLD OUT. You can still
            join in on the fun and livestream the Ultimate Disney Fan Event on
            September 9, 10, and 11 on D23Expo.com and by following @DisneyD23
            on YouTube, Facebook, and Twitter.
          </div>
        </div>

        <h2 className="relative mt-20 text-2xl font-bold text-white">
          Latest News
        </h2>

        <div className="relative ml-auto mr-auto mt-6 max-w-[1016px] rounded-xl shadow-md">
          <div className="mx-auto overflow-hidden rounded-xl bg-[#070374] shadow-md">
            <div className="md:flex">
              <div className="md:shrink-0"></div>
              <div className="p-8">
                <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
                  Case study
                </div>
                <a
                  href="#"
                  className="mt-1 block text-lg font-medium leading-tight text-black hover:underline"
                >
                  Finding customers for your new business
                </a>
                <p className="mt-2 text-slate-500">
                  Getting a new business off the ground is a lot of hard work.
                  Here are five ideas you can use to find your first customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>
          D23 Expo 2022: The Ultimate Disney Fan Event; Presented by Visa
        </title>
      </Head>
      <Layout>{page}</Layout>
    </>
  )
}

export default Page
