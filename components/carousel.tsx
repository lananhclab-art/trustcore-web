"use client";

import React from 'react';
import { Container } from './ui/container';
import { CarouselCard } from './carousel-card';

const CARDS = [
  { id: 1, imageSrc: "/images/carousel/1.avif" },
  { id: 2, imageSrc: "/images/carousel/2.avif" },
  { id: 3, imageSrc: "/images/carousel/3.avif" },
  { id: 4, imageSrc: "/images/carousel/4.avif" },
  { id: 5, imageSrc: "/images/carousel/5.avif" },
];

export const Carousel = () => {
  return (
    <section className="w-full bg-white py-[48px] lg:py-[120px] overflow-hidden flex flex-col gap-[40px]">
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-start text-left gap-[8px]">
          <h2 className="text-[40px] leading-[44px] md:text-[52px] md:leading-[56px] lg:text-[64px] lg:leading-[68px] font-bold text-text-primary tracking-[-1px]">
            Built <span className="text-text-brand">on Trust</span>
          </h2>
          <p className="text-body-lg font-medium text-text-secondary w-full">
            At TrustCore, trust is not a promise. It is built at the core of secure technology.
          </p>
        </div>
      </Container>

      {/* Infinite Ticker Container */}
      <div className="relative w-full overflow-hidden bg-white">
        {/* Force-refresh structure: using w-max and a slightly wider gap (12) */}
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          <div className="flex gap-12 px-6 shrink-0">
            {CARDS.map((card, idx) => (
              <CarouselCard
                key={`a-${card.id}-${idx}`}
                imageSrc={card.imageSrc}
              />
            ))}
          </div>
          <div className="flex gap-12 px-6 shrink-0" aria-hidden="true">
            {CARDS.map((card, idx) => (
              <CarouselCard
                key={`b-${card.id}-${idx}`}
                imageSrc={card.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>

      <Container size="wide">
        {/* Footer Text Block */}
        <div className="mt-20 max-w-[940px] mx-auto text-center">
          <p className="text-body-md font-normal text-text-secondary">
            We build financial infrastructure on a core foundation of security, transparency, and user ownership empowering individuals and businesses to participate confidently in the decentralized economy.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Carousel;
