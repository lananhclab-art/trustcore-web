"use client";

import React from "react";
import { Container } from "./ui/container";
import Image from "next/image";

interface ProcessStepProps {
  number: number;
  label: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, label }) => (
  <div className="flex flex-row md:flex-col items-center md:items-center relative z-10 w-full md:w-[280px] gap-4 md:gap-0">
    <div className="shrink-0 w-[40px] h-[40px] rounded-full bg-[#0185EE] flex items-center justify-center text-white text-[18px] font-bold md:mb-[16px]">
      {number}
    </div>
    <p className="text-[14px] md:text-[16px] md:whitespace-nowrap font-bold text-[#0F172A] text-left md:text-center">
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
    <section className="bg-white py-[100px] md:py-[140px]">
      <Container size="wide">
        {/* Header */}
        <div className="text-center mb-[64px]">
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-bold leading-[1.1] tracking-[-0.02em] text-[#0F172A]">
            Hiring <span className="text-[#0185EE]">Process</span>
          </h2>
          <p className="mt-[20px] text-[18px] md:text-[20px] font-medium text-[#626268] leading-[28px] tracking-[-0.5px] max-w-[720px] mx-auto">
            We focus on capability, clarity of thinking, and alignment with our principles.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mb-[80px]">
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
        <div className="px-4 md:px-0">
          <div className="relative w-full aspect-[21/9] md:aspect-[2.4/1] rounded-[24px] overflow-hidden bg-black">
            <Image 
              src="/images/careers/hiring.avif" 
              alt="Hiring process meeting"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Footer Metadata Below Image */}
          <div className="mt-[48px] text-center">
            <h3 className="text-[18px] md:text-[20px] font-bold text-[#0F172A] mb-[12px]">
              Apply securely through the official TrustCore website.
            </h3>
            <p className="text-[14px] md:text-[16px] text-[#626268] font-normal mx-auto leading-[24px]">
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
    </section>
  );
};

export default HiringProcess;
