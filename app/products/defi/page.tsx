"use client";

import React from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Text } from "@/components/ui/text";
import Image from "next/image";

export default function DeFiPlatformPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden">
      <Header onDark={false} />

      <main className="flex-grow">

        {/* --- Hero Section --- */}
        <Section spacing="hero" bg="white" className="relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-[#00D2FF]/10 blur-[120px] rounded-full -z-10" />
          <Container >
            <div className="flex flex-col items-center text-center gap-12">
              <div className="flex flex-col gap-6 max-w-[1000px]">
                <Text as="div" variant="heading-h1" weight="bold" color="primary" className="leading-[1.05] tracking-[-1.5px]">
                  Earn, Borrow, and <br className="hidden md:block" />
                  <span className="text-text-brand">Manage Assets Seamlessly</span>
                </Text>
                <Text variant="body-lg" weight="medium" color="secondary" className="leading-[30px] max-w-[800px] mx-auto">
                  Access decentralized lending and liquidity through a secure, transparent, and <br className="hidden md:block" />
                  efficient on-chain system built for the next generation of finance.
                </Text>
              </div>
              <div className="relative w-full mt-12 overflow-hidden">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/images/defi/dashboard.avif"
                    alt="DeFi Platform Dashboard Visualization"
                    fill
                    priority
                    unoptimized
                    className="object-contain"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                  />
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* --- Assets Management Section --- */}
        <Section spacing="lg" bg="white">
          <Container >
            <div className="relative overflow-hidden rounded-[40px] bg-[#0D0F12] min-h-[600px] flex items-center group">
              <div className="absolute inset-0 z-10">
                <Image
                  src="/images/defi/assets.avif"
                  alt="Assets management visualization"
                  fill
                  unoptimized
                  className="object-cover object-center opacity-70 group-hover:scale-105 transition-transform duration-1000"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F12] via-[#0D0F12]/80 to-transparent z-20" />
              </div>
              <div className="relative z-30 px-8 py-16 md:px-16 md:py-20 flex flex-col gap-16 w-full">
                <div className="flex flex-col gap-6 max-w-[600px]">
              <Text as="div" variant="heading-h2" weight="bold" color="inverse" className="leading-[1.1] tracking-tight">
                    Your Assets, <br />
                    Put To Work
                  </Text>
                  <Text variant="body-lg" weight="medium" color="inverse" className="leading-[28px]">
                    Supply assets, access liquidity, and optimize <br className="hidden md:block" />
                    your positions. All within a single platform.
                  </Text>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                  <CapabilityItem title="Earn" description="Supply assets to generate yield based on real-time market demand." />
                  <CapabilityItem title="Borrow" description="Access liquidity without selling your assets or leaving your position." />
                  <CapabilityItem title="Manage" description="Track collateral, positions, and risk with full transparency." />
                  <CapabilityItem title="Optimize" description="Adjust strategies dynamically to improve capital efficiency." />
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* --- Simple Flows / Outcomes Section --- */}
        <Section spacing="lg" bg="white">
          <Container >
            <div className="flex flex-col items-center text-center gap-12">
              <SectionHeader
                title={<>Simple Flows, <br className="hidden md:block" /><span className="text-[#007AFF]">Powerful Outcomes</span></>}
                subtitle="A streamlined process designed to make decentralized lending accessible and efficient."
              />
              <div className="w-full aspect-[16/9] relative overflow-hidden rounded-[40px]">
                <Image
                  src="/images/defi/outcome.avif"
                  alt="Process outcome visualization"
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 w-full text-left">
                <StepItem number="1" title="Supply assets" description="Deposit supported assets to begin earning yield based on supply demand." />
                <StepItem number="2" title="Use as collateral" description="Unlock borrowing power while maintaining exposure to your digital assets." />
                <StepItem number="3" title="Access capital" description="Access additional capital without disrupting your current positions." />
              </div>
            </div>
          </Container>
        </Section>

        {/* --- Opportunities Section --- */}
        <Section spacing="lg" bg="white">
          <Container >
            <div className="flex flex-col items-center text-center gap-12">
              <SectionHeader
                title={<>Access Diverse Lending <br className="hidden md:block" /><span className="text-[#007AFF]">Opportunities</span></>}
                subtitle="Participate across multiple assets and markets within a unified system."
              />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full text-left">
                <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[5/4] overflow-hidden rounded-[40px] bg-[#F8FAFC] border border-[#E8EDF2]">
                  <Image
                    src="/images/defi/hand.avif"
                    alt="Lending opportunities visualization"
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 540px"
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <OpportunityItem text="Smart contract-based execution" />
                  <OpportunityItem text="Transparent on-chain activity" />
                  <OpportunityItem text="Continuous monitoring & risk controls" />
                  <OpportunityItem text="Designed for auditability & resilience" />
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* --- Core Security Section --- */}
        <Section spacing="lg" bg="white">
          <Container >
            <div className="flex flex-col items-center text-center gap-12">
              <SectionHeader
                title={<>Security at <br className="hidden md:block" /><span className="text-[#007AFF]">The Core</span></>}
                subtitle="Protocol-level protections ensure transparency, reliability, and user confidence."
              />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full text-left">
                <div className="flex flex-col gap-6">
                  <OpportunityItem text="Smart contract-based execution" />
                  <OpportunityItem text="Transparent on-chain activity" />
                  <OpportunityItem text="Continuous monitoring and risk controls" />
                  <OpportunityItem text="Designed for auditability & resilience" />
                </div>
                <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[5/4] overflow-hidden rounded-[40px] bg-[#F8FAFC] border border-[#E8EDF2]">
                  <Image
                    src="/images/defi/core.avif"
                    alt="Core security and monitoring visualization"
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 540px"
                  />
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* --- Final CTA Section --- */}
        <Section spacing="lg" bg="dark" className="relative overflow-hidden">
          <Container>
            <div className="text-center max-w-4xl mx-auto space-y-12">
              <Text as="div" variant="heading-h1" weight="bold" color="inverse">
                Unlock the Full Potential <br className="hidden md:block" />
                of Your Assets
              </Text>
              <div className="flex justify-center">
                <Button variant="primary" size="nav" className="font-bold">
                  Launch App
                </Button>
              </div>
            </div>
          </Container>
        </Section>

      </main>

      <Footer hideCTA={true} />
    </div>
  );
}

function OpportunityItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-6">
      <div className="w-6 h-6 flex-shrink-0 bg-[#007AFF] rounded-full flex items-center justify-center">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <Text variant="heading-h5" as="h5" color="primary" className="tracking-tight">{text}</Text>
    </div>
  );
}

function StepItem({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-12 h-12 bg-[#14141E] rounded-[12px] flex items-center justify-center text-white text-[20px] font-bold">
        {number}
      </div>
      <div className="flex flex-col gap-3">
        <Text variant="heading-h4" as="h4" color="primary" className="tracking-tight">{title}</Text>
        <Text variant="body-lg" weight="medium" color="secondary" className="leading-[24px]">{description}</Text>
      </div>
    </div>
  );
}

function CapabilityItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-3">
      <Text variant="heading-h4" as="h4" color="inverse" className="tracking-tight">{title}</Text>
      <Text variant="body-md" weight="regular" color="inverse" className="leading-[26px] tracking-[-0.45px]">{description}</Text>
    </div>
  );
}
