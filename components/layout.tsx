import Image from "next/image"
import React from "react"
import Footer from "./footer"
import NavBar from "./navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="bg-gradient-to-b from-[#070374] via-[#0F20A8] to-[#070374]">
        <div className="absolute min-h-[1400px] w-screen">
          <Image
            src="/images/primary-bg.png"
            layout="responsive"
            width={1200}
            height={1240}
          />
        </div>
        {children}
      </main>
      <Footer />
    </>
  )
}
