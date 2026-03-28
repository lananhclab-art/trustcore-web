"use client";

import React from "react";
import { Container } from "./ui/container";
import { Section } from "./ui/section";
import { SectionHeader } from "./ui/section-header";
import { Shield, Smile, Target } from "lucide-react";

import { Text } from "./ui/text";

interface CultureCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const CultureCard: React.FC<CultureCardProps> = ({ title, icon, description }) => (
  <div className="flex flex-col items-start text-left">
    <div className="text-text-brand mb-6 transition-transform duration-300">
      {icon}
    </div>
    <Text variant="heading-h5" as="h3" color="primary" weight="bold" className="mb-4">
      {title}
    </Text>
    <Text variant="body-md" weight="medium" color="secondary" className="leading-relaxed">
      {description}
    </Text>
  </div>
);

export const OurCulture: React.FC = () => {
  const cards = [
    {
      title: "Trust",
      icon: <Shield size={36} strokeWidth={1.5} />,
      description: "We build our foundation on trust in both people and technology. Every team member plays a critical role in how we operate and deliver meaningful outcomes."
    },
    {
      title: "We Before Me",
      icon: <Smile size={36} strokeWidth={1.5} />,
      description: "We value collaboration over individual recognition. Every perspective is heard, challenged, and refined to achieve the best possible results as a team."
    },
    {
      title: "Innovation",
      icon: <Target size={36} strokeWidth={1.5} />,
      description: "We continuously improve how we build and work together. Learning, iteration, and curiosity drive our progress forward."
    }
  ];

  return (
    <Section spacing="lg" bg="white">
      <Container>
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <Text variant="heading-h1" as="h2" color="primary">
            Our <span className="text-text-brand">Culture</span>
          </Text>
          <Text variant="body-lg" color="secondary" weight="medium" className="mt-6">
            A culture built on trust, collaboration, and continuous improvement.
          </Text>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {cards.map((card, index) => (
            <CultureCard key={index} {...card} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default OurCulture;
