"use client";

import React from "react";
import { Container } from "./ui/container";
import { Section } from "./ui/section";
import { Button } from "./ui/button";
import { Text } from "./ui/text";

interface JobRole {
  title: string;
  type: string;
  location: string;
}

const JobRow: React.FC<JobRole> = ({ title, type, location }) => (
  <div className="flex flex-col md:flex-row md:items-center justify-between min-h-[70px] py-6 md:py-0 border-b border-border-subtle group hover:bg-slate-50/50 transition-all duration-300">
    <div className="mb-4 md:mb-0">
      <Text variant="heading-h5" as="h4" color="primary" weight="bold">
        {title}
      </Text>
    </div>
    <div className="flex items-center justify-between md:justify-end gap-[24px] md:gap-[40px] lg:gap-[160px]">
      <div className="flex items-center gap-[24px] md:gap-[40px] lg:gap-[120px]">
        <Text variant="body-md" weight="semibold" color="secondary">
          {type}
        </Text>
        <Text variant="body-md" weight="semibold" color="secondary">
          {location}
        </Text>
      </div>
      <button 
        className="flex shrink-0 items-center justify-center px-lg h-[32px] rounded-full bg-slate-100 text-text-primary text-[14px] font-bold hover:bg-text-brand hover:text-white transition-all duration-300"
      >
        Apply
      </button>
    </div>
  </div>
);

export const OpenRoles: React.FC = () => {
  const engineeringJobs = [
    { title: "Frontend Developer", type: "Full Time", location: "CA, USA" },
    { title: "Backend Developer", type: "Full Time", location: "CA, USA" },
    { title: "Blockchain Developer", type: "Full Time", location: "CA, USA" },
    { title: "Mobile Developer", type: "Full Time", location: "CA, USA" },
  ];

  const productJobs = [
    { title: "IT Business Analyst (BA)", type: "Full Time", location: "CA, USA" },
    { title: "QA / Tester", type: "Full Time", location: "CA, USA" },
    { title: "Marketing Executive", type: "Full Time", location: "CA, USA" },
  ];

  return (
    <Section spacing="lg" bg="white">
      <Container>
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <Text variant="heading-h1" as="h2" color="primary">
            Join our <span className="text-text-brand">Team</span>
          </Text>
          <Text variant="body-md" weight="medium" color="secondary" className="mt-6 max-w-2xl">
            All current openings are listed here. If you encounter roles elsewhere, please verify and apply through our official listings.
          </Text>
        </div>

        {/* Roles List */}
        <div className="flex flex-col gap-[64px] lg:gap-[80px]">
          {/* Engineering */}
          <div>
            <Text variant="heading-h2" as="h3" color="primary" weight="bold" className="mb-[24px] tracking-tight">
              Engineering
            </Text>
            <div className="flex flex-col">
              {engineeringJobs.map((job, idx) => (
                <JobRow key={idx} {...job} />
              ))}
            </div>
          </div>

          {/* Product & Business */}
          <div>
            <Text variant="heading-h2" as="h3" color="primary" weight="bold" className="mb-[24px] tracking-tight">
              Product & Business
            </Text>
            <div className="flex flex-col">
              {productJobs.map((job, idx) => (
                <JobRow key={idx} {...job} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-4xl lg:mt-6xl flex justify-center">
          <Button 
            variant="primary" 
            size="nav" 
            className="font-bold overflow-hidden"
          >
            Browse all positions available
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default OpenRoles;
