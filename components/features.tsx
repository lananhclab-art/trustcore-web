"use client";

import React from 'react';
import { Container } from './ui/container';
import ParticleSphere from './particle-sphere';

export const Features = () => {
  return (
    <section className="w-full bg-white py-5xl lg:py-6xl">
      <Container size="wide" className="flex flex-col items-center gap-[40px]">
        {/* Top Header */}
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <h2 className="text-[40px] leading-[44px] md:text-[52px] md:leading-[56px] lg:text-[64px] lg:leading-[68px] font-bold text-[#0F172A] tracking-[-1px] max-w-[800px]">
            The Future <br className="hidden md:block"/>
            <span className="text-[#007AFF]">of Finance</span>
          </h2>
          <p className="text-[20px] font-medium leading-[28px] tracking-[-0.5px] text-[#626268] max-w-[524px] mx-auto">
            The future belongs to those who control their own assets.
          </p>
        </div>

        {/* Bottom Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-[48px] lg:gap-[80px] items-center">
          {/* Left Column - Descriptive Text */}
          <div className="flex flex-col flex-1 gap-4 md:gap-6 max-w-[500px] items-center text-center md:items-start md:text-left">
            <p className="text-text-secondary text-body-md font-normal">
              Finance today is no longer just numbers on a screen.<br className="hidden md:block"/>
              It represents freedom, global access, and new economic opportunities.<br className="hidden md:block"/>
              But in an increasingly complex digital landscape, one question remains:
            </p>
            <p className="text-[#0F172A] text-[18px] leading-[28px] md:text-[20px] md:leading-[30px] font-bold">
              What can we truly trust?
            </p>
          </div>

          {/* Right Column - Particle Sphere */}
          <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] mx-auto relative overflow-hidden flex justify-center text-center">
            <ParticleSphere />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
