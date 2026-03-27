import React from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { CareersHero } from "@/components/careers-hero";
import { WhyTrustCore } from "@/components/why-trustcore";
import { OurCulture } from "@/components/our-culture";
import { OpenRoles } from "@/components/open-roles";
import { HiringProcess } from "@/components/hiring-process";

export const metadata = {
  title: "Careers | TrustCore Technologies",
  description: "Join TrustCore Technologies and build the future of decentralised finance.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header with Dark Text since background is white */}
      <Header onDark={false} />
      
      <CareersHero />
      <WhyTrustCore />
      <OurCulture />
      <OpenRoles />
      <HiringProcess />
      
      {/* Footer handles its own dark background style */}
      <Footer />
    </main>
  );
}
