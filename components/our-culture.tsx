"use client";

import React from "react";
import { Container } from "./ui/container";
import { Shield, Smile, Target } from "lucide-react";

interface CultureCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const CultureCard: React.FC<CultureCardProps> = ({ title, icon, description }) => (
  <div className="flex flex-col items-start text-left p-xl lg:p-3xl bg-white rounded-[24px]">
    <div className="text-[#0185EE] mb-[24px]">
      {icon}
    </div>
    <h1 className="text-[24px] font-bold text-[#0F172A] mb-md leading-tight">
      {title}
    </h1>
    <p className="text-[16px] lg:text-[18px] text-[#626268] leading-relaxed">
      {description}
    </p>
  </div>
);

export const OurCulture: React.FC = () => {
  const cards = [
    {
      title: "Trust",
      icon: <Shield size={32} />,
      description: "We build our foundation on trust in both people and technology. Every team member plays a critical role in how we operate and deliver meaningful outcomes."
    },
    {
      title: "We Before Me",
      icon: <Smile size={32} />,
      description: "We value collaboration over individual recognition. Every perspective is heard, challenged, and refined to achieve the best possible results as a team."
    },
    {
      title: "Innovation",
      icon: <Target size={32} />,
      description: "We continuously improve how we build and work together. Learning, iteration, and curiosity drive our progress forward."
    }
  ];

  return (
    <section className="bg-white py-[100px] md:py-[140px]">
      <Container size="wide">
        {/* Header */}
        <div className="text-center mb-5xl lg:mb-[80px]">
          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-[-0.02em] text-[#0F172A]">
            Our <span className="text-[#0185EE]">Culture</span>
          </h1>
          <p className="mt-xl text-[20px] font-medium text-[#626268] leading-[28px] tracking-[-0.5px] max-w-[720px] mx-auto">
            A culture built on trust, collaboration, and continuous improvement.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl lg:gap-3xl">
          {cards.map((card, index) => (
            <CultureCard key={index} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurCulture;
