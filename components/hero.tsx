"use client";

/**
 * components/hero.tsx
 * ─────────────────────────────────────────────────────────────────
 * Hero — TrustCore landing hero section.
 *
 * Responsive adaptations:
 * - Desktop (lg+): Full-bleed dark VideoBackground, left-aligned white text,
 *   on-dark buttons.
 * - Tablet/Mobile (<lg): White background, centered black text, 
 *   blue primary buttons, inline Image below content.
 * ─────────────────────────────────────────────────────────────────
 */

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { VideoBackground } from "./ui/video-background";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the hero section itself
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Apply spring physics for buttery-smooth Apple/MoonPay feel on mouse wheels
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  // Transform values based on smoothed scroll
  const radius = useTransform(smoothProgress, [0, 1], [0, 36]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 0.9]);
  const margin = useTransform(smoothProgress, [0, 1], [0, 32]);

  return (
    <section ref={containerRef} className="relative w-full bg-white lg:bg-black overflow-hidden lg:min-h-[100vh] pt-[72px] lg:pt-0">
      {/* ── Desktop Background (Video or Image) ── */}
      <motion.div 
        className="hidden lg:block absolute inset-0 z-0 overflow-hidden origin-top"
        style={{
          borderRadius: radius,
          scale,
          margin
        }}
      >
        <VideoBackground
          posterSrc={posterSrc}
          videoSrc={videoSrc}
          posterAlt="TrustCore Technologies — secure financial infrastructure"
          className="h-full w-full"
          overlayClassName="bg-[linear-gradient(90deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.5)_50%,transparent_100%)]"
        />
      </motion.div>

      <Container size="wide" className="relative z-10 w-full lg:h-full py-[48px] md:py-[64px] lg:py-0">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left justify-center gap-[40px] lg:gap-0 lg:h-[100vh]">
          
          {/* ── Headline ── */}
          <h1
            className="font-primary font-bold text-text-primary lg:text-white max-w-[680px] whitespace-pre-line text-[36px] leading-[40px] md:text-[52px] md:leading-[56px] lg:text-[64px] lg:leading-[68px] tracking-[-1px] lg:tracking-[-1.28px]"
          >
            {headline}
          </h1>

          {/* ── Subtext ── */}
          <p
            className="text-text-secondary lg:text-white/85 max-w-[480px] font-medium lg:mt-6 text-body-lg"
          >
            {subtext}
          </p>

          {/* ── CTA Buttons ── */}
          <div className="flex items-center lg:mt-[80px] gap-3 lg:gap-[14px]">
            {/* Mobile/Tablet: Side-by-side buttons */}
            <div className="flex lg:hidden items-center gap-3">
              <Button
                variant="primary"
                size="hero"
                className="h-[44px]"
                onClick={onPrimaryCta}
              >
                {primaryCta}
              </Button>
              <Button
                variant="secondary"
                size="hero"
                className="h-[44px] bg-bg-secondary text-text-primary hover:bg-black-100 border-0"
                onClick={onSecondaryCta}
              >
                {secondaryCta}
              </Button>
            </div>

            {/* Desktop Buttons (On-dark) */}
            <div className="hidden lg:flex items-center gap-[14px]">
              <Button variant="on-dark" size="hero" onClick={onPrimaryCta}>
                {primaryCta}
              </Button>
              <Button variant="on-dark" size="hero" onClick={onSecondaryCta}>
                {secondaryCta}
              </Button>
            </div>
          </div>

          {/* ── Mobile/Tablet Inline Video ── */}
          <div className="relative w-full max-w-[700px] aspect-[4/3] sm:aspect-video rounded-2xl overflow-hidden mt-12 lg:hidden shadow-lg border border-black/5">
            {videoSrc ? (
              <video
                src={videoSrc}
                poster={posterSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={posterSrc}
                alt="TrustCore Hero representation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            )}
          </div>

        </div>
      </Container>
    </section>
  );
};

Hero.displayName = "Hero";
export default Hero;
