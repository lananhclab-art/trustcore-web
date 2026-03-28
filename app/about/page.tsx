import React from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import AboutHero from "@/components/about-hero";
import AboutStory from "@/components/about-story";
import WhoWeAre from "@/components/who-we-are";

import JoinTeam from "@/components/join-team";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg-primary flex flex-col">
      <Header onDark={false} />
      <main className="flex-grow">
        <AboutHero />
        <AboutStory />
        <WhoWeAre />

        <JoinTeam />
        {/* Additional sections for About page will go here */}
      </main>
      <Footer />
    </div>
  );
}
