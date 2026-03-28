"use client";

import React from "react";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { SectionHeader } from "./ui/section-header";
import { Text } from "./ui/text";

export const AboutStory: React.FC = () => {
  return (
    <Section spacing="lg" bg="white">
      <Container>
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <Text variant="heading-h1" as="h1" color="primary">
            Our <span className="text-text-brand">Story</span>
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Highlight Text */}
          <div className="max-w-md">
            <Text variant="heading-h3" as="h3" color="primary" className="leading-[1.15]">
              Building the bridge between traditional finance and digital assets.
            </Text>
          </div>

          {/* Right: Detailed Context */}
          <div className="flex flex-col gap-8">
            <Text variant="body-lg" weight="medium" color="secondary" className="leading-relaxed">
              TrustCore was founded with a clear mission to bridge the gap between traditional financial systems and the emerging digital asset economy.
            </Text>

            <Text variant="body-lg" weight="medium" color="secondary" className="leading-relaxed">
              As financial infrastructure continues to evolve, we recognized the need for secure, scalable, and compliant solutions that empower businesses to operate with confidence in a rapidly changing landscape.
            </Text>

            <Text variant="body-lg" weight="medium" color="secondary" className="leading-relaxed">
              Today, TrustCore is focused on building the foundation for the next generation of financial systems enabling seamless interaction between Web2 and Web3.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutStory;
