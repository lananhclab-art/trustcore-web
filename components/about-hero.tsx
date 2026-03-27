import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Container } from "./ui/container";

export const AboutHero: React.FC = () => {
  return (
    <section className="bg-white pt-[140px] lg:pt-[180px] pb-5xl lg:pb-6xl overflow-hidden">
      <Container size="wide" className="flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="text-heading-h1 font-bold leading-h1 tracking-tight text-text-primary max-w-[900px]">
          About <span className="text-text-brand">TrustCore</span>
        </h1>

        {/* Subheading */}
        <p className="mt-3xl text-body-lg font-medium text-text-secondary leading-relaxed max-w-[680px]">
          TrustCore Technologies develops secure infrastructure for a more open and global financial system. We enable individuals and businesses to operate with confidence in a decentralized world.
        </p>

        {/* CTA */}
        <div className="mt-3xl">
          <Button variant="primary" size="nav">
            Partner With Us
          </Button>
        </div>

        {/* Hero Image */}
        <div className="mt-3xl lg:mt-[100px] w-full relative">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[24px]">
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
    </section>
  );
};

export default AboutHero;
