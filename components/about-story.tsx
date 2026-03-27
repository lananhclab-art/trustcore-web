"use client";

import React from "react";
import { Container } from "./ui/container";

export const AboutStory: React.FC = () => {
  return (
    <section className="bg-[#F6F8FA] py-[100px] md:py-[140px]">
      <Container size="wide">

        <div className="max-w-[720px]">

          {/* LABEL */}
          <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#007AFF] mb-[16px]">
            Our Story
          </p>

          {/* HEADING */}
          <h1
            className="
              text-[40px] md:text-[56px] lg:text-[64px]
              leading-[1.1]
              font-bold
              tracking-[-0.02em]
              text-[#0F172A]
              mb-[24px]
            "
          >
            Building Trust in a New Financial Era
          </h1>

          {/* CONTENT */}
          <div className="flex flex-col gap-[20px]">

            <p className="text-[18px] md:text-[20px] leading-[28px] text-[#626268]">
              TrustCore was founded with a clear mission — to bridge the gap
              between traditional financial systems and the emerging digital
              asset economy.
            </p>

            <p className="text-[18px] md:text-[20px] leading-[28px] text-[#626268]">
              As financial infrastructure continues to evolve, we recognized the
              need for secure, scalable, and compliant solutions that empower
              businesses to operate with confidence in a rapidly changing
              landscape.
            </p>

            <p className="text-[18px] md:text-[20px] leading-[28px] text-[#626268]">
              Today, TrustCore is focused on building the foundation for the next
              generation of financial systems — enabling seamless interaction
              between Web2 and Web3.
            </p>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default AboutStory;
