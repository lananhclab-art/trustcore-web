"use client";

import React from "react";
import { Container } from "./ui/container";
import { Section } from "./ui/section";
import { SectionHeader } from "./ui/section-header";
import Image from "next/image";

interface ProcessStepProps {
  number: number;
  label: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, label }) => (
  <div className="flex flex-row md:flex-col items-center md:items-center relative z-10 w-full md:w-[280px] gap-4 md:gap-0">
    <div className="shrink-0 w-[40px] h-[40px] rounded-full bg-[#007AFF] flex items-center justify-center text-white text-[18px] font-bold md:mb-[16px]">
      {number}
    </div>
    <p className="text-[14px] md:text-[18px] md:whitespace-nowrap font-bold text-[#0F172A] text-left md:text-center tracking-tight">
      {label}
    </p>
  </div>
);

export const HiringProcess: React.FC = () => {
  const steps = [
    { number: 1, label: "Application review" },
    { number: 2, label: "Technical or functional interview" },
    { number: 3, label: "Final discussion with leadership" },
  ];

  return (
    <Section spacing="lg" bg="white">
      <Container >
        <SectionHeader
          title={<>Hiring <span className="text-[#007AFF]">Process</span></>}
          subtitle="We focus on capability, clarity of thinking, and alignment with our principles."
        />

        {/* Steps */}
        <div className="relative mb-20 lg:mb-32">
          {/* Connecting Line (Dashed) - Desktop */}
          <div className="hidden md:block absolute top-[20px] left-[10%] right-[10%] h-[1px] border-t-2 border-dashed border-[#E8E8E9] z-0" />
          
          {/* Connecting Line (Dashed) - Mobile */}
          <div className="md:hidden absolute top-0 bottom-0 left-[20px] w-[1px] border-l-2 border-dashed border-[#E8E8E9] z-0" />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-[40px] md:gap-0">
            {steps.map((step) => (
              <ProcessStep key={step.number} {...step} />
            ))}
          </div>
        </div>

        {/* Team Image Area */}
        <div className="px-0">
          <div className="relative w-full aspect-[21/9] md:aspect-[2.4/1] rounded-[24px] overflow-hidden bg-black">
            <Image 
              src="/images/careers/hiring.avif" 
              alt="Hiring process meeting"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Footer Metadata Below Image */}
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <h4 className="text-[20px] md:text-[24px] font-bold text-[#0F172A] mb-3 tracking-tight">
              Apply securely through the official TrustCore website.
            </h4>
            <p className="text-[15px] md:text-[17px] text-[#626268] font-medium leading-[26px]">
              <span className="md:hidden">
                All current openings are listed here. If you encounter roles elsewhere, please apply through official listings.
              </span>
              <span className="hidden md:inline">
                All current openings are listed here. If you encounter roles elsewhere, please verify and apply through our official listings.
              </span>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HiringProcess;
