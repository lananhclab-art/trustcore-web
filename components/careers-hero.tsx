"use client";

import React from "react";
import Image from "next/image";
import { Container } from "./ui/container";
import { Button } from "./ui/button";

export const CareersHero: React.FC = () => {
  return (
    <section className="bg-white pt-[140px] lg:pt-[180px] pb-5xl lg:pb-6xl overflow-hidden">
      <Container size="wide" className="flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-[-0.02em] text-[#0F172A] max-w-[900px]">
          Join our team <br className="hidden md:block" />
          <span className="text-[#0185EE]">and reshape the future</span>
        </h1>

        {/* Subheading */}
        <p className="mt-[24px] md:mt-[32px] text-[18px] lg:text-[20px] font-medium text-[#626268] leading-relaxed max-w-[680px]">
          Work on meaningful problems at the intersection of blockchain, security, and global financial systems.
        </p>

        {/* CTA */}
        <div className="mt-xl">
          <Button variant="primary" size="nav" className="px-lg lg:px-[32px] rounded-full bg-[#0185EE] hover:bg-[#0175DB]">
            Find All Open Jobs
          </Button>
        </div>

        {/* Hero Image */}
        <div className="mt-[60px] lg:mt-[80px] w-full relative">
          <div className="relative aspect-[16/9] lg:aspect-[2/1] w-full overflow-hidden rounded-[32px]">
            <Image
              src="/images/careers/hero.avif"
              alt="Two professional colleagues collaborating in a bright workspace"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CareersHero;
