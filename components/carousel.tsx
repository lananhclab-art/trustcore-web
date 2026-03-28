"use client";

import React from 'react';
import { Container } from './ui/container';
import { Section } from './ui/section';
import { SectionHeader } from './ui/section-header';
import { Text } from './ui/text';
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
    <Section spacing="lg" bg="white" className="overflow-hidden flex flex-col gap-xxl">
      <Container>
        <SectionHeader
          title={<>Built <span className="text-text-brand">on Trust</span></>}
          subtitle="At TrustCore, trust is not a promise. It is built at the core of secure technology."
          align="left"
        />
      </Container>

      {/* Infinite Ticker Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          <div className="flex gap-xl px-lg shrink-0">
            {CARDS.map((card, idx) => (
              <CarouselCard
                key={`a-${card.id}-${idx}`}
                imageSrc={card.imageSrc}
              />
            ))}
          </div>
          <div className="flex gap-xl px-lg shrink-0" aria-hidden="true">
            {CARDS.map((card, idx) => (
              <CarouselCard
                key={`b-${card.id}-${idx}`}
                imageSrc={card.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>

      <Container>
        {/* Footer Text Block */}
        <div className="mt-xxl w-full text-center">
          <Text variant="heading-h5" color="secondary">
            We build financial infrastructure on a core foundation of <br className="hidden md:block"/>
            <span className="text-text-brand">security</span>, <span className="text-text-brand">transparency</span>, and <span className="text-text-brand">user ownership.</span>
          </Text>
        </div>
      </Container>
    </Section>
  );
};

export default Carousel;
