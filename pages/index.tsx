import Head from "next/head"
import Image from "next/image"
import { ReactElement, useEffect, useState } from "react"
import React from "react"
import Layout from "../components/layout"
import type { NextPageWithLayout } from "./_app"
import { calculateTimeLeft } from "@utils/common"
import { ExternalLinkIcon } from "@heroicons/react/outline"

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
      <div className="relative ml-auto mr-auto text-center max-w-screen-2xl">
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

        <div className="relative pl-5 pr-5 ml-auto mr-auto text-center max-w">
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
          <div className="mt-2 text-lg font-bold text-[#f7f7f7]">
            Countdown to D23 Expo
          </div>
          <div className="flex items-center justify-center mt-8 space-x-4">
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
          <div className="mt-6 mb-2 text-sm font-bold uppercase text-[#f7f7f7]">
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
          <h2 className="text-left text-2xl font-bold text-[#f7f7f7]">
            Expo Tickets
          </h2>
          <div className="mt-6 text-left text-[#f7f7f7]">
            Tickets to D23 Expo presented by Visa are SOLD OUT. You can still
            join in on the fun and livestream the Ultimate Disney Fan Event on
            September 9, 10, and 11 on D23Expo.com and by following @DisneyD23
            on YouTube, Facebook, and Twitter.
          </div>
        </div>

        <h2 className="relative mt-20 text-2xl font-bold text-white">
          Latest News
        </h2>

        <div className="relative ml-auto mr-auto mt-24 max-w-[1016px]">
          {/* todo: split up into components and data hooks */}
          <div className="grid grid-cols-1 gap-20 p-4 md:grid-cols-2 md:p-0">
            <div className="order-first">
              <Image
                src="/images/marvel-announcement_8-2.jpeg"
                layout="responsive"
                width={1000}
                height={563}
                className="rounded-lg"
              />
            </div>
            <div>
              <div className="text-left text-2xl font-bold text-[#f7f7f7]">
                Marvel Makes An Epic Return to D23 Expo with Thrilling Lineup of
                Panels, Events, First Looks, and More
              </div>
              <div className="mt-6 text-left text-sm text-[#f7f7f7]">
                Marvel is unveiling a can’t-miss lineup of panels, stage events,
                guest appearances, exclusive merchandise, giveaways, and more!
                Throughout the weekend at D23 Expo, fans won’t want to miss
                Marvel’s panels and stage events diving into what’s next for
                Marvel Studios, a celebration of 60 “Beyond Amazing” years of
                Spider-Man, an exciting current look at Marvel Games, and more.
                <div className="mt-8">
                  <a className="mt-4 cursor-pointer rounded-2xl bg-[#4ccbfb] px-4 py-3 text-sm font-medium text-[#070374] hover:bg-[#4ccbfb]">
                    <span className="pr-2">Learn More</span>
                    <ExternalLinkIcon
                      className="inline-block w-4 h-4"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-20 p-4 mt-20 md:grid-cols-2 md:p-0">
            <div>
              <div className="text-left text-2xl font-bold text-[#f7f7f7]">
                “Journey Into Storytelling” with Immersive Experiences from
                Abbott Elementary, Cruel Summer, National Treasure, and More at
                D23 Expo 2022
              </div>
              <div className="mt-6 text-left text-sm text-[#f7f7f7]">
                Disney General Entertainment is bringing more than 30
                fan-favorite programs under one roof at this year’s D23 Expo:
                The Ultimate Disney Fan Event presented by Visa. Through
                interactive activations on the show floor as well as
                presentations, panels, and talent appearances, fans will immerse
                themselves in the wonders of storytelling from some of the most
                iconic and culture-defining shows across every genre on
                television and streaming.
                <div className="mt-8">
                  <a className="mt-4 cursor-pointer rounded-2xl bg-[#4ccbfb] px-4 py-3 text-sm font-medium text-[#070374] hover:bg-[#4ccbfb]">
                    <span className="pr-2">Learn More</span>
                    <ExternalLinkIcon
                      className="inline-block w-4 h-4"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="order-first md:order-last">
              <Image
                src="/images/immersive-experiences_8-1.jpeg"
                layout="responsive"
                width={1000}
                height={563}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-20 p-4 mt-20 md:grid-cols-2 md:p-0">
            <div className="order-first">
              <Image
                src="/images/wdpr-expo_7-28.jpeg"
                layout="responsive"
                width={1000}
                height={563}
                className="rounded-lg"
              />
            </div>
            <div>
              <div className="text-left text-2xl font-bold text-[#f7f7f7]">
                Disney Parks Brings Can’t-Miss Panels, Sneak Peeks at the
                Future, and More to D23 Expo
              </div>
              <div className="mt-6 text-left text-sm text-[#f7f7f7]">
                Disney Parks, Experiences and Products brings new pavilions,
                captivating panel presentations and exclusive retail experiences
                to D23 Expo. Attendees will be the first to learn about
                never-before-seen details of new themed lands, attractions,
                shows and more.
                <div className="mt-8">
                  <a className="mt-4 cursor-pointer rounded-2xl bg-[#4ccbfb] px-4 py-3 text-sm font-medium text-[#070374] hover:bg-[#4ccbfb]">
                    <span className="pr-2">Learn More</span>
                    <ExternalLinkIcon
                      className="inline-block w-4 h-4"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-20 p-4 mt-20 md:grid-cols-2 md:p-0">
            <div>
              <div className="text-left text-2xl font-bold text-[#f7f7f7]">
                Pixar and Walt Disney Animation Studios at D23 Expo
              </div>
              <div className="mt-6 text-left text-sm text-[#f7f7f7]">
                Pixar and Walt Disney Animation to share announcements, first
                looks, sneak peeks, and more at D23 Expo 2022.
                <div className="mt-8">
                  <a className="mt-4 cursor-pointer rounded-2xl bg-[#4ccbfb] px-4 py-3 text-sm font-medium text-[#070374] hover:bg-[#4ccbfb]">
                    <span className="pr-2">Learn More</span>
                    <ExternalLinkIcon
                      className="inline-block w-4 h-4"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="order-first md:order-last">
              <Image
                src="/images/pixar-disney_7-14.jpeg"
                layout="responsive"
                width={1000}
                height={563}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-20 p-4 mt-20 md:grid-cols-2 md:p-0">
            <div className="order-first">
              <Image
                src="/images/hall-d23-panels-announcement.jpeg"
                layout="responsive"
                width={1000}
                height={563}
                className="rounded-lg"
              />
            </div>
            <div>
              <div className="text-left text-2xl font-bold text-[#f7f7f7]">
                The Biggest Presentations at D23 Expo 2022 Announced
              </div>
              <div className="mt-6 text-left text-sm text-[#f7f7f7]">
                Disney100 Kicks off at D23 Expo with the Disney Legends Awards;
                Disney Parks, Experiences and Products; Disney Princess – The
                Concert; and Sneak Peeks from Walt Disney Animation Studios,
                Marvel, Pixar, Star Wars, and Disney Branded Television.
                <div className="mt-8">
                  <a className="mt-4 cursor-pointer rounded-2xl bg-[#4ccbfb] px-4 py-3 text-sm font-medium text-[#070374] hover:bg-[#4ccbfb]">
                    <span className="pr-2">Learn More</span>
                    <ExternalLinkIcon
                      className="inline-block w-4 h-4"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative ml-auto mr-auto mt-24 max-w-[1016px]">
          {/* todo: split up into components and data hooks */}
          <div className="grid grid-cols-1 gap-20 p-4 md:grid-cols-3 md:p-0">
            <div>
              <Image
                src="/images/d23expo-marketplace-announcement.jpeg"
                layout="responsive"
                width={1000}
                height={563}
                className="rounded-lg"
              />
              <div className="mt-4 text-left text-xl font-bold text-[#f7f7f7]">
                Disney Debuts Retail Experiences Including All-New ‘D23 Expo
                Marketplace’ at D23 Expo 2022
              </div>
              <div className="mt-6 text-left text-sm text-[#f7f7f7]">
                For the first time, attendees will be able to shop the
                27,000-square-foot D23 Expo Marketplace, featuring brand-new
                collections and limited-edition merchandise from across Disney,
                Pixar, Marvel, Star Wars, National Geographic and more.
                <div className="mt-8">
                  <a className="mt-4 cursor-pointer rounded-2xl bg-[#4ccbfb] px-4 py-3 text-sm font-medium text-[#070374] hover:bg-[#4ccbfb]">
                    <span className="pr-2">Learn More</span>
                    <ExternalLinkIcon
                      className="inline-block w-4 h-4"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/music-emporium_7-14.jpeg"
                layout="responsive"
                width={1000}
                height={563}
                className="rounded-lg"
              />
              <div className="mt-4 text-left text-xl font-bold text-[#f7f7f7]">
                Get Exclusive Vinyl and More When Disney Music Emporium Returns
                to D23 Expo
              </div>
              <div className="mt-6 text-left text-sm text-[#f7f7f7]">
                Disney Music Emporium returns with a pop-up store on the show
                floor, featuring limited quantities of music products, including
                new releases from Marvel and Lucasfilm, vinyl albums, die-cut
                picture-disc vinyl, and more.
                <div className="mt-8">
                  <a className="mt-4 cursor-pointer rounded-2xl bg-[#4ccbfb] px-4 py-3 text-sm font-medium text-[#070374] hover:bg-[#4ccbfb]">
                    <span className="pr-2">Learn More</span>
                    <ExternalLinkIcon
                      className="inline-block w-4 h-4"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/WDA_Platinum.jpeg"
                layout="responsive"
                width={1000}
                height={563}
                className="rounded-lg"
              />
              <div className="mt-4 text-left text-xl font-bold text-[#f7f7f7]">
                The Walt Disney Archives Invites Guests to Explore 100 Years of
                Wonder
              </div>
              <div className="mt-6 text-left text-sm text-[#f7f7f7]">
                As part of the kick-off to Disney100, this chronological
                exhibition will showcase Walt Disney Archives historical assets
                like never before with immersive, themed environments from
                animated shorts, films, and film premieres, as well as
                television productions and Disney Parks favorites.
                <div className="mt-8">
                  <a className="mt-4 cursor-pointer rounded-2xl bg-[#4ccbfb] px-4 py-3 text-sm font-medium text-[#070374] hover:bg-[#4ccbfb]">
                    <span className="pr-2">Learn More</span>
                    <ExternalLinkIcon
                      className="inline-block w-4 h-4"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative ml-auto mr-auto mt-24 max-w-[1016px]">
          {/* todo: split up into components and data hooks */}
          <div className="grid grid-cols-1 gap-20 p-4 md:grid-cols-3 md:p-0">
            <div></div>
            <div>
              <Image
                src="/images/Expo22_Website_Phone_Mockup_V7.png"
                layout="responsive"
                width={776}
                height={921}
                className="rounded-lg"
              />
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
