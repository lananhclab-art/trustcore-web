"use client";

import React from "react";
import Image from "next/image";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { PaymentLogos } from "./payment-logos";

// Reusable card container exactly mapping to user's "no border" + "no hover" request!
const BaseCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`overflow-hidden rounded-[24px] bg-white flex flex-col ${className}`}>
    {children}
  </div>
);

export const WhatWeBuild = () => {
  return (
    <section id="what-we-build" className="w-full bg-bg-brand-subtle py-3xl lg:py-6xl">
      <Container size="wide" className="flex flex-col gap-[40px]">

        {/* 1. Header */}
        <div className="w-full flex flex-col items-center text-center gap-3">
          <h2 className="text-heading-h2 text-text-primary">
            What <span className="text-text-brand">We Build</span>
          </h2>
          <p className="text-[20px] font-medium leading-[28px] tracking-[-0.5px] text-[#626268] max-w-[524px] mx-auto">
            TrustCore Technologies develops infrastructure for the next generation of finance.
          </p>
        </div>

        {/* 2. Wallet Hero Card (Restored with specific Figma layouts) */}
        <div>
          <div className="relative overflow-hidden rounded-[24px] bg-[#0A0A0B] h-[474px] md:min-h-[691px] flex flex-col">
            {/* BACKGROUND IMAGE */}
            {/* BACKGROUND IMAGE - DESKTOP */}
            <div className="hidden md:block absolute inset-0">
              <Image
                src="/images/what-we-build/wallet.avif"
                alt="TrustCore Wallet"
                fill
                priority
                className="object-cover"
              />
            </div>
            {/* BACKGROUND IMAGE - MOBILE */}
            <div className="block md:hidden absolute inset-0">
              <Image
                src="/images/what-we-build/wallet-mobile.avif"
                alt="TrustCore Wallet"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40" />

            {/* CONTENT */}
            <div className="relative z-20 flex flex-col justify-between items-start p-[20px] md:py-[32px] md:px-[24px] w-full max-w-[343px] md:max-w-[518px] h-[425px] md:h-auto md:flex-1">
              {/* TEXT BLOCK */}
              <div>
                <h2
                  className="
                    text-[30px]
                    leading-[36px]
                    font-bold
                    tracking-[-0.6px]
                    text-white
                    mb-[8px]
                    font-primary
                  "
                >
                  TrustCore Wallet
                </h2>

                <p
                  className="
                    text-[16px]
                    leading-[28px]
                    font-medium
                    tracking-[-0.5px]
                    text-white/90
                    max-w-[420px]
                    font-primary
                  "
                >
                  Secure self-custody wallet for managing digital assets and interacting with Web3.
                </p>
              </div>

              {/* BUTTON */}
              <div>
                <Button variant="primary" size="md">
                  Download Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Three Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">

          {/* Card: Payment Gateway */}
          <BaseCard className="h-[480px]">
            <div className="py-[32px] px-[24px] flex flex-col items-start gap-[20px] h-full bg-white relative z-10 w-full">
              <div className="flex flex-col items-start gap-[8px]">
                <h5 className="text-[20px] font-bold tracking-[-0.5px] text-[#0F172A] leading-snug">
                  TrustCore Payment Gateway
                </h5>
                <p className="text-body-md font-normal text-text-secondary">
                  Borderless payment infrastructure for global digital commerce.
                </p>
              </div>
              <Button variant="secondary" size="sm" className="mb-auto">
                Start Payments
              </Button>

              {/* Grid Logos */}
              <div className="w-full flex-1 min-h-[160px] flex items-end">
                <PaymentLogos />
              </div>
            </div>
          </BaseCard>

          {/* Card: Exchange */}
          <BaseCard className="h-[480px] relative overflow-hidden bg-white">
            {/* CONTENT */}
            <div className="p-[32px] flex flex-col gap-[20px] relative z-20">
              <div>
                <h3 className="text-[20px] font-bold tracking-[-0.5px] text-text-primary mb-[8px]">
                  TrustCore Exchange
                </h3>
                <p className="text-body-md font-normal text-text-secondary">
                  Transparent and secure digital asset trading platform.
                </p>
              </div>

              <div className="flex items-start">
                <Button variant="secondary" size="sm">
                  Open Exchange
                </Button>
              </div>
            </div>

            {/* IMAGE (CRITICAL PART) */}
            <div className="absolute bottom-0 left-0 w-full h-[260px] overflow-hidden z-10 bg-white">
              <Image
                src="/images/what-we-build/exchange.webp"
                alt="TrustCore Exchange Platform Interface"
                fill
                className="object-cover object-left-top"
              />
            </div>
          </BaseCard>

          {/* Card: DeFi Platform */}
          <BaseCard className="h-[480px] relative overflow-hidden bg-white">
            {/* CONTENT */}
            <div className="p-[32px] flex flex-col gap-[20px] relative z-20">
              <div>
                <h3 className="text-[20px] font-bold tracking-[-0.5px] text-[#14141E] mb-[8px]">
                   DeFi Platform
                </h3>
                <p className="text-body-md font-normal text-text-secondary">
                  Decentralized financial services including lending and borrowing.
                </p>
              </div>

              <div className="flex items-start">
                <Button variant="secondary" size="sm">
                  Explore DeFi
                </Button>
              </div>
            </div>

            {/* IMAGE */}
            <div className="absolute bottom-0 left-0 w-full h-[260px] overflow-hidden z-10 bg-white">
              <Image
                src="/images/what-we-build/core-assets.svg"
                alt="Decentralized financial assets visualization"
                fill
                className="object-cover object-left-top"
              />
            </div>
          </BaseCard>

        </div>

        {/* 4. Advisory Banner */}
        <div className="relative w-full rounded-[24px] overflow-hidden h-[474px] md:min-h-[544px] bg-[#0A0A0B]">
          {/* Background Photo */}
          {/* Background Photos */}
          {/* DESKTOP */}
          <div className="hidden md:block absolute inset-0 z-0">
            <Image
              src="/images/what-we-build/advisory.avif"
              alt="Advisory Team Consulting"
              fill
              className="object-cover"
              sizes="(max-width: 1440px) 100vw, 1440px"
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
            className="relative z-20 flex flex-col justify-between items-start w-full max-w-[343px] md:max-w-[470px] h-[425px] md:h-[544px] p-[20px] md:p-[32px]"
            style={{ background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)' }}
          >
            {/* Top flex spacer */}
            <div>
              <h2
                className="
                  text-[30px]
                  leading-[36px]
                  font-bold
                  tracking-[-0.6px]
                  text-white
                  mb-[8px]
                  font-primary
                "
              >
                Fintech Advisory
              </h2>
              <p
                className="
                  text-[16px]
                  leading-[28px]
                  font-medium
                  tracking-[-0.5px]
                  text-white/90
                  font-primary
                "
              >
                Strategic consulting for organizations building financial technology solutions.
              </p>
            </div>

            {/* Bottom Button matching Download Now size identically */}
            <div className="flex items-start">
              <Button variant="primary" size="md">
                Book a Call
              </Button>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}