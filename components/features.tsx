"use client";

import React from 'react';
import { Container } from './ui/container';
import { Section } from './ui/section';
import { SectionHeader } from './ui/section-header';
import { Text } from './ui/text';
import dynamic from 'next/dynamic';

const ParticleSphere = dynamic(() => import('./particle-sphere'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-transparent" />
});

export const Features = () => {
  return (
    <Section spacing="lg" bg="white">
      <Container>
        <SectionHeader
          title={<>The Future <br className="hidden md:block"/><span className="text-text-brand">of Finance</span></>}
          subtitle="The future belongs to those who control their own assets."
          align="center"
        />

        {/* Split: Text + Globe */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <Text variant="body-md" color="secondary">
              Finance today is no longer just numbers on a screen.<br className="hidden md:block"/>
              It represents freedom, global access, and new economic opportunities.<br className="hidden md:block"/>
              But in an increasingly complex digital landscape, one question remains:
            </Text>

            <Text variant="heading-h5" as="h5" color="primary" className="text-center lg:text-left">
              What can we truly trust?
            </Text>
          </div>

          <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] relative overflow-hidden flex justify-center text-center">
            <ParticleSphere />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Features;
