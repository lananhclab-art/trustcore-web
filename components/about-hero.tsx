import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { Text } from "./ui/text";

export const AboutHero: React.FC = () => {
  return (
    <Section spacing="hero" bg="white" className="overflow-hidden">
      <Container className="flex flex-col items-start text-left md:items-center md:text-center">
        <div className="max-w-4xl space-y-6">
          <Text variant="heading-h1" as="h1" color="primary">
            About <span className="text-text-brand">TrustCore</span>
          </Text>

          <Text variant="body-lg" weight="medium" color="secondary" className="max-w-[820px] mx-auto leading-[30px]">
            TrustCore Technologies develops secure infrastructure for a more
            open and global financial system. We enable individuals and
            businesses to operate with confidence in a decentralized world.
          </Text>
        </div>

        <div className="mt-3xl">
          <Button variant="primary" size="nav">
            Partner With Us
          </Button>
        </div>

        <div className="mt-3xl lg:mt-5xl w-full relative">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/about/about-hero.avif"
              alt="TrustCore team collaborating in a modern office"
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

export default AboutHero;
