import React from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Hero } from "@/components/hero";
import { LazyHomeSections } from "@/components/lazy-home-sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header onDark={true} />

      <article className="flex-grow">
        {/* Hero Section — SSR, critical above-the-fold */}
        <Hero 
          videoSrc="/video/hero.webm"
          posterSrc="/video/hero-poster.png"
        />

        {/* Below-fold sections — lazy loaded on viewport entry */}
        <LazyHomeSections />
      </article>

      <Footer />
    </main>
  );
}
