"use client";

import React from 'react';
import { Container } from './ui/container';
import { Section } from './ui/section';
import { SectionHeader } from './ui/section-header';
import { Text } from './ui/text';
import { CarouselCard } from './carousel-card';

const CARDS = [
  { 
    id: 1, 
    imageSrc: "/images/carousel/1.avif",
    quote: "Partnering with TrustCore was the best decision for our digital transformation. Their team doesn't just provide technology; they provide a foundation of trust and reliability that is rare in the blockchain space."
  },
  { 
    id: 2, 
    imageSrc: "/images/carousel/2.avif",
    quote: "What sets TrustCore apart is their ability to make complex technology feel simple. They delivered a sophisticated blockchain solution that our team could actually use and scale from day one."
  },
  { 
    id: 3, 
    imageSrc: "/images/carousel/3.avif",
    quote: "The level of professionalism at TrustCore is world-class. They understood our business goals immediately and executed a secure, high-performance infrastructure that exceeded our expectations."
  },
  { 
    id: 4, 
    imageSrc: "/images/carousel/4.avif",
    quote: "Security is our top priority, and TrustCore delivered exactly what they promised. Their deep expertise in self-custody and non-custodial design gave us the confidence to launch our platform to a global audience."
  },
  { 
    id: 5, 
    imageSrc: "/images/carousel/5.avif",
    quote: "TrustCore is more than a vendor; they are a strategic partner. Their forward-thinking approach to fintech and blockchain logic has positioned us perfectly for the future of finance."
  },
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

      {/* Infinite Ticker Container — continuous, no hover pause */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll">
          <div className="flex gap-xl px-lg shrink-0">
            {CARDS.map((card, idx) => (
              <CarouselCard
                key={`a-${card.id}-${idx}`}
                imageSrc={card.imageSrc}
                quote={card.quote}
              />
            ))}
          </div>
          <div className="flex gap-xl px-lg shrink-0" aria-hidden="true">
            {CARDS.map((card, idx) => (
              <CarouselCard
                key={`b-${card.id}-${idx}`}
                imageSrc={card.imageSrc}
                quote={card.quote}
              />
            ))}
          </div>
        </div>
      </div>

      <Container>
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
