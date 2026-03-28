"use client";

/**
 * components/hero.tsx
 * ─────────────────────────────────────────────────────────────────
 * Hero — TrustCore landing hero section.
 * ─────────────────────────────────────────────────────────────────
 */

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { Text } from "./ui/text";
import { VideoBackground } from "./ui/video-background";

export interface HeroProps {
  headline?: string;
  subtext?: string;
  primaryCta?: string;
  secondaryCta?: string;
  onPrimaryCta?: () => void;
  onSecondaryCta?: () => void;
  posterSrc?: string;
  videoSrc?: string;
}

export const Hero: React.FC<HeroProps> = ({
  headline = "Secure your Assets.\nEmpower your Future.",
  subtext = "TrustCore builds secure infrastructure for the decentralized financial world.",
  primaryCta = "Explore Products",
  secondaryCta = "Contact Us",
  onPrimaryCta,
  onSecondaryCta,
  posterSrc = "/video/hero-poster.png",
  videoSrc,
}) => {
  return (
    <section className="relative w-full bg-white lg:bg-black overflow-hidden lg:min-h-[100vh] pt-[72px] lg:pt-0">
      
      {/* Desktop Background Media */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <VideoBackground
          posterSrc={posterSrc}
          videoSrc={videoSrc}
          className="h-full w-full"
          overlayClassName="bg-[linear-gradient(90deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.4)_50%,transparent_100%)]"
        />
      </div>

      <Container className="relative z-10 w-full lg:h-full py-6xl lg:py-0">
        <div className="flex flex-col items-start text-left justify-center lg:h-[100vh]">
          <div className="space-y-lg">
            <Text
              variant="heading-h1"
              as="h1"
              className="whitespace-pre-line text-text-primary lg:text-white"
            >
              {headline}
            </Text>

            <Text
              variant="body-lg"
              weight="medium"
              className="text-text-secondary lg:text-white/85"
            >
              {subtext}
            </Text>
          </div>

          <div className="flex items-center mt-xl lg:mt-3xl gap-sm">
            {/* CTA: Desktop */}
            <div className="hidden lg:flex items-center gap-sm">
              <Button variant="on-dark" size="hero" onClick={onPrimaryCta}>
                {primaryCta}
              </Button>
              <Button variant="on-dark" size="hero" onClick={onSecondaryCta}>
                {secondaryCta}
              </Button>
            </div>

            {/* CTA: Mobile */}
            <div className="flex lg:hidden items-center gap-sm">
              <Button variant="primary" size="hero" className="h-[44px]" onClick={onPrimaryCta}>
                {primaryCta}
              </Button>
              <Button variant="secondary" size="hero" className="h-[44px]" onClick={onSecondaryCta}>
                {secondaryCta}
              </Button>
            </div>
          </div>

          {/* Mobile Display Media */}
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden mt-3xl lg:hidden shadow-lg border border-black/5">
            {videoSrc ? (
              <video
                src={videoSrc}
                poster={posterSrc}
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className="w-full h-full object-cover"
              />
            ) : (
              <Image 
                src={posterSrc} 
                alt="Hero" 
                fill 
                priority 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, (max-width: 1240px) 1024px, 1280px"
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
