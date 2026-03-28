"use client";

import React from "react";
import Image from "next/image";
import { Container } from "./ui/container";
import { Section } from "./ui/section";
import { Button } from "./ui/button";
import { Text } from "./ui/text";

export const CareersHero: React.FC = () => {
  return (
    <Section spacing="hero" bg="white" className="overflow-hidden">
      <Container className="flex flex-col items-center text-center">
        <div className="max-w-[1100px] space-y-6">
          <Text as="h1" variant="heading-h1" weight="bold" color="primary" className="leading-[1.05] tracking-[-1.5px]">
            Join our team <br className="hidden md:block" />
            <span className="text-text-brand">and reshape the future</span>
          </Text>

          <Text variant="body-lg" weight="medium" color="secondary" className="leading-[30px] whitespace-normal md:whitespace-nowrap">
            Work on meaningful problems at the intersection of blockchain, security, and global financial systems.
          </Text>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <Button variant="primary" size="nav" className="rounded-full bg-[#007AFF] hover:bg-[#0066EE]">
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
    </Section>
  );
};

export default CareersHero;
