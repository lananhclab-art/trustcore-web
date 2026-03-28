"use client";

import React from "react";
import { Container } from "./ui/container";
import { Section } from "./ui/section";
import { SectionHeader } from "./ui/section-header";

export const WhyTrustCore: React.FC = () => {
  return (
    <Section spacing="lg" bg="white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT - Heading */}
          <SectionHeader
            title={<>Why <br /><span className="text-[#007AFF]">TrustCore?</span></>}
            align="left"
            spacing="none"
          />

          {/* RIGHT - Content */}
          <div className="max-w-xl space-y-6">
            <p className="text-[20px] font-medium leading-[28px] text-[#626268]">
              At TrustCore, we are building systems that require precision, responsibility, and long-term thinking.
            </p>
            <p className="text-[20px] font-medium leading-[28px] text-[#626268]">
              You will work alongside engineers, researchers, and builders focused on solving complex challenges in decentralized infrastructure. Our environment values clarity, ownership, and technical excellence.
            </p>
            <p className="text-[20px] font-medium leading-[28px] text-[#626268]">
              We believe great systems are built by small teams with strong principles and high standards.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WhyTrustCore;
