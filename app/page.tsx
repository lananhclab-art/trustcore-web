import React from "react";
import { Header } from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import OurVision from "@/components/our-vision";
import StrategicStatement from "@/components/strategic-statement";
import Carousel from "@/components/carousel";
import { WhatWeBuild } from "@/components/what-we-build";
import { Container } from "@/components/ui/container";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white flex flex-col">
        {/* Hero Section */}
        <Hero videoSrc="/video/hero.webm" />

        {/* Future of Finance Section */}
        <Features />

        {/* Built on Trust (Carousel) Section */}
        <Carousel />

        {/* What We Build (Feature Grid) Section */}
        <WhatWeBuild />

        {/* Our Vision Section */}
        <OurVision />


        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
