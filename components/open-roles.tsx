"use client";

import React from "react";
import { Container } from "./ui/container";
import { Button } from "./ui/button";

interface JobRole {
  title: string;
  type: string;
  location: string;
}

const JobRow: React.FC<JobRole> = ({ title, type, location }) => (
  <div className="flex flex-col md:flex-row md:items-center justify-between min-h-[70px] py-5 md:py-0 border-b border-[#E8E8E9] group hover:bg-slate-50/50 transition-colors">
    <div className="mb-4 md:mb-0">
      <h3 className="text-[18px] font-semibold text-[#0F172A]">
        {title}
      </h3>
    </div>
    <div className="flex items-center justify-between md:justify-end gap-[24px] md:gap-[40px] lg:gap-[160px]">
      <div className="flex items-center gap-[24px] md:gap-[40px] lg:gap-[120px]">
        <span className="text-[14px] md:text-[16px] leading-[22px] tracking-[-0.18px] text-[#626268] font-semibold">
          {type}
        </span>
        <span className="text-[14px] md:text-[16px] leading-[22px] tracking-[-0.18px] text-[#626268] font-semibold">
          {location}
        </span>
      </div>
      <button 
        className="flex shrink-0 items-center justify-center w-[70px] h-[32px] rounded-full bg-[#E8E8E9] text-[#0F172A] text-[14px] font-semibold hover:bg-[#0185EE] hover:text-white transition-colors"
      >
        Apply
      </button>
    </div>
  </div>
);

export const OpenRoles: React.FC = () => {
  const engineeringJobs = [
    { title: "Frontend Developer", type: "Full Time", location: "Dallas" },
    { title: "Backend Developer", type: "Full Time", location: "Dallas" },
    { title: "Blockchain Developer", type: "Full Time", location: "Dallas" },
    { title: "Mobile Developer", type: "Full Time", location: "Dallas" },
  ];

  const productJobs = [
    { title: "IT Business Analyst (BA)", type: "Full Time", location: "Dallas" },
    { title: "QA / Tester", type: "Full Time", location: "Dallas" },
    { title: "Marketing Executive", type: "Full Time", location: "Dallas" },
  ];

  return (
    <section className="bg-white py-[100px] md:py-[140px]">
      <Container size="wide">
        {/* Header */}
        <div className="text-center mb-[60px] md:mb-[80px]">
          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-[-0.02em] text-[#0F172A]">
            Join our <span className="text-[#0185EE]">Team</span>
          </h1>
          <p className="mt-[24px] text-[20px] font-medium text-[#626268] leading-[28px] tracking-[-0.5px] max-w-[720px] mx-auto">
            A place for talented and highly motivated individuals. Find where you can make an impact.
          </p>
        </div>

        {/* Roles List */}
        <div className="flex flex-col gap-[48px]">
          {/* Engineering */}
          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#0F172A] mb-[16px]">
              Engineering
            </h2>
            <div className="flex flex-col">
              {engineeringJobs.map((job, idx) => (
                <JobRow key={idx} {...job} />
              ))}
            </div>
          </div>

          {/* Product & Business */}
          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#0F172A] mb-[16px]">
              Product & Business
            </h2>
            <div className="flex flex-col">
              {productJobs.map((job, idx) => (
                <JobRow key={idx} {...job} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-[80px] flex justify-center">
          <Button 
            variant="primary" 
            size="nav" 
            className="px-[24px] bg-[#0185EE] hover:bg-[#0175DB] transition-colors rounded-full"
          >
            Browse all positions available
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default OpenRoles;
