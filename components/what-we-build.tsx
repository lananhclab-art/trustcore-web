"use client";

import React from "react";
import Image from "next/image";
import { Container } from "./ui/container";
import { Section } from "./ui/section";
import { SectionHeader } from "./ui/section-header";
import { Text } from "./ui/text";
import { Button } from "./ui/button";
import { PaymentLogos } from "./payment-logos";

// Reusable card container
const BaseCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`overflow-hidden rounded-3xl bg-white flex flex-col ${className}`}>
    {children}
  </div>
);

export const WhatWeBuild = () => {
  return (
    <Section id="what-we-build" spacing="lg" bg="subtle">
      <Container>

        <SectionHeader
          title={<>What <span className="text-text-brand">We Build</span></>}
          subtitle="TrustCore Technologies develops infrastructure for the next generation of finance."
          align="left"
          spacing="5xl"
        />

        {/* Wallet Hero Card */}
        <div className="relative overflow-hidden rounded-3xl bg-bg-inverse h-[474px] md:min-h-[691px] flex flex-col">
          {/* BACKGROUND IMAGE - DESKTOP */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src="/images/what-we-build/wallet.avif"
              alt="TrustCore Wallet"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1240px) 1280px, 1440px"
            />
          </div>
          {/* BACKGROUND IMAGE - MOBILE */}
          <div className="block md:hidden absolute inset-0">
            <Image
              src="/images/what-we-build/wallet-mobile.avif"
              alt="TrustCore Wallet"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40" />

          {/* CONTENT */}
          <div className="relative z-20 flex flex-col justify-between items-start py-xxl px-lg md:px-xl w-full h-full">
            <div>
              <Text variant="heading-h3" as="h2" color="inverse" className="mb-xs">
                TrustCore Wallet
              </Text>

              <Text variant="body-lg" weight="medium" color="inverse" className="opacity-90">
                Secure self-custody wallet for managing digital assets and interacting with Web3.
              </Text>
            </div>

            <div>
              <Button variant="primary" size="md">
                Download Now
              </Button>
            </div>
          </div>
        </div>

        {/* Three Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg md:gap-xl mt-xxl">

          {/* Card: Payment Gateway */}
          <BaseCard className="h-[480px] bg-white">
            <div className="py-xl px-lg flex flex-col h-full relative z-20">
              <div className="flex flex-col gap-xs h-[100px]">
                <Text variant="heading-h5" as="h3" color="primary">
                  TrustCore Payment Gateway
                </Text>
                <Text variant="body-md" color="secondary">
                  Borderless payment infrastructure for global digital commerce.
                </Text>
              </div>
              <div className="mt-m mb-xl">
                <Button variant="secondary" size="sm">
                  Start Payments
                </Button>
              </div>
              
              {/* Grid Logos */}
              <div className="w-full mt-auto pb-4">
                <PaymentLogos />
              </div>
            </div>
          </BaseCard>

          {/* Card: Exchange */}
          <BaseCard className="h-[480px] relative overflow-hidden bg-white">
            <div className="py-xl px-lg flex flex-col h-full relative z-20">
              <div className="flex flex-col gap-xs h-[100px]">
                <Text variant="heading-h5" as="h3" color="primary">
                  TrustCore Exchange
                </Text>
                <Text variant="body-md" color="secondary">
                  High-performance spot and derivatives trading infrastructure for institutions.
                </Text>
              </div>

              <div className="mt-m">
                <Button variant="secondary" size="sm">
                  Open Exchange
                </Button>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[260px] overflow-hidden z-10 bg-white">
              <Image
                src="/images/what-we-build/exchange.webp"
                alt="TrustCore Exchange Platform Interface"
                fill
                className="object-cover object-left-top"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </BaseCard>

          {/* Card: DeFi Platform */}
          <BaseCard className="h-[480px] relative overflow-hidden bg-white">
            <div className="py-xl px-lg flex flex-col h-full relative z-20">
              <div className="flex flex-col gap-xs h-[100px]">
                <Text variant="heading-h5" as="h3" color="primary">
                  DeFi Platform
                </Text>
                <Text variant="body-md" color="secondary">
                  Non-custodial financial services including lending, borrowing, and yield optimization.
                </Text>
              </div>

              <div className="mt-m">
                <Button variant="secondary" size="sm">
                  Explore DeFi
                </Button>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[260px] overflow-hidden z-10 bg-white">
              <Image
                src="/images/what-we-build/core-assets.svg"
                alt="Decentralized financial assets visualization"
                fill
                className="object-cover object-left-top"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </BaseCard>

        </div>

        {/* Advisory Banner */}
        <div className="relative w-full rounded-3xl overflow-hidden h-[474px] md:min-h-[544px] bg-bg-inverse mt-xxl">
          {/* DESKTOP */}
          <div className="hidden md:block absolute inset-0 z-0">
            <Image
              src="/images/what-we-build/advisory.avif"
              alt="Advisory Team Consulting"
              fill
              className="object-cover"
              sizes="(max-width: 1240px) 100vw, 1240px"
            />
          </div>
          {/* MOBILE */}
          <div className="block md:hidden absolute inset-0 z-0">
            <Image
              src="/images/what-we-build/advisory-mobile.avif"
              alt="Advisory Team Consulting"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Content & Isolated Overlay */}
          <div
            className="relative z-20 flex flex-col justify-between items-start w-full h-[425px] md:h-[544px] py-xxl px-lg md:py-3xl md:px-xl"
            style={{ background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)' }}
          >
            <div>
              <Text variant="heading-h3" as="h2" color="inverse" className="mb-xs">
                Fintech Advisory
              </Text>
              <Text variant="body-lg" weight="medium" color="inverse" className="opacity-90">
                Strategic consulting for organizations building financial technology solutions.
              </Text>
            </div>

            <div className="flex items-start">
              <Button variant="primary" size="md">
                Book a Call
              </Button>
            </div>
          </div>
        </div>

      </Container>
    </Section>
  );
}

export default WhatWeBuild;
