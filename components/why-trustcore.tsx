"use client";

import React from "react";
import { Container } from "./ui/container";

export const WhyTrustCore: React.FC = () => {
  return (
    <section className="bg-white pt-5xl pb-[100px] md:pb-[140px]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-3xl lg:gap-[80px]">
          {/* LEFT - Heading */}
          <div>
            <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-[-0.02em] text-[#0F172A]">
              Why <br />
              <span className="text-[#0185EE]">TrustCore?</span>
            </h1>
          </div>

          {/* RIGHT - Content */}
          <div className="flex flex-col gap-xl">
            <p className="text-[18px] md:text-[20px] leading-[28px] font-medium text-[#626268]">
              At TrustCore, we are building systems that require precision, responsibility, and long-term thinking.
            </p>
            <p className="text-[18px] md:text-[20px] leading-[28px] font-medium text-[#626268]">
              You will work alongside engineers, researchers, and builders focused on solving complex challenges in decentralized infrastructure. Our environment values clarity, ownership, and technical excellence.
            </p>
            <p className="text-[18px] md:text-[20px] leading-[28px] font-medium text-[#626268]">
              We believe great systems are built by small teams with strong principles and high standards.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyTrustCore;
