"use client";

import React from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Hero } from "@/components/hero";
import dynamic from "next/dynamic";

const Features = dynamic(() => import("@/components/features"), { ssr: false });
const WhatWeBuild = dynamic(() => import("@/components/what-we-build"), { ssr: false });
const Carousel = dynamic(() => import("@/components/carousel"), { ssr: false });
const OurVision = dynamic(() => import("@/components/our-vision"), { ssr: false });
const StrategicStatement = dynamic(() => import("@/components/strategic-statement"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header onDark={true} />

      <article className="flex-grow">
        {/* Hero Section */}
        <Hero 
          videoSrc="/video/hero.webm"
          posterSrc="/video/hero-poster.png"
        />

        {/* Feature Highlights with Globe */}
        <Features />

        {/* Product Grid */}
        <WhatWeBuild />

        {/* Visual Ticker */}
        <Carousel />

        {/* Company Vision & Values */}
        <OurVision />
      </article>

      <Footer />
    </main>
  );
}
