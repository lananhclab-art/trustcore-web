"use client";

import React from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function DeFiPlatformPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden">
      <Header onDark={false} />

      <main className="flex-grow pt-[100px] lg:pt-[140px]">

        {/* --- Hero Section --- */}
        <section className="relative pb-[100px] lg:pb-[140px] overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-[#00D2FF]/10 blur-[120px] rounded-full -z-10" />
          <Container size="wide">
            <div className="flex flex-col items-center text-center gap-12">
              <div className="flex flex-col gap-6 max-w-[1000px]">
                <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-bold leading-[1.1] tracking-tight text-[#14141E]">
                  Earn, Borrow, and <br className="hidden md:block" />
                  <span className="text-[#0185EE]">Manage Assets Seamlessly</span>
                </h1>
                <p className="text-[20px] font-medium leading-[28px] tracking-[-0.5px] text-[#626268] max-w-[800px] mx-auto">
                  Access decentralized lending and liquidity through a secure, transparent, and <br className="hidden md:block" />
                  efficient on-chain system built for the next generation of finance.
                </p>
              </div>
              <div className="relative w-full mt-12 overflow-hidden">
                <div className="relative aspect-[16/10] w-full">
                  <img
                    src="/images/products/defi/dashboard.avif"
                    alt="DeFi Platform Dashboard Visualization"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* --- Assets Management Section --- */}
        <section className="pb-[100px] lg:pb-[140px]">
          <Container size="wide">
            <div className="relative overflow-hidden rounded-[40px] bg-[#0D0F12] min-h-[600px] flex items-center group">
              <div className="absolute inset-0 z-10">
                <img
                  src="/images/products/defi/assets.avif"
                  alt="Assets management visualization"
                  className="w-full h-full object-cover object-center opacity-70 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F12] via-[#0D0F12]/80 to-transparent z-20" />
              </div>
              <div className="relative z-30 px-8 py-16 md:px-16 md:py-20 flex flex-col gap-16 w-full">
                <div className="flex flex-col gap-6 max-w-[600px]">
                  <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-tight text-white">
                    Your Assets, <br />
                    Put To Work
                  </h2>
                  <p className="text-[20px] font-medium leading-[28px] tracking-[-0.5px] text-white">
                    Supply assets, access liquidity, and optimize <br className="hidden md:block" />
                    your positions. All within a single platform.
                  </p>
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
        </section>

        {/* --- Simple Flows / Outcomes Section --- */}
        <section className="pb-[100px] lg:pb-[140px]">
          <Container size="wide">
            <div className="flex flex-col items-center text-center gap-12">
              <div className="flex flex-col gap-6">
                <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-tight text-[#14141E]">
                  Simple Flows, <br className="hidden md:block" />
                  <span className="text-[#0185EE]">Powerful Outcomes</span>
                </h2>
                <p className="text-[20px] font-medium leading-[28px] tracking-[-0.5px] text-[#626268] max-w-[600px] mx-auto">
                  A streamlined process designed to make decentralized lending accessible and efficient.
                </p>
              </div>
              <div className="w-full aspect-[16/9] relative overflow-hidden rounded-[40px]">
                <img
                  src="/images/products/defi/outcome.avif"
                  alt="Process outcome visualization"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 w-full text-left">
                <StepItem number="1" title="Supply assets" description="Deposit supported assets to begin earning yield based on supply demand." />
                <StepItem number="2" title="Use as collateral" description="Unlock borrowing power while maintaining exposure to your digital assets." />
                <StepItem number="3" title="Access capital" description="Access additional capital without disrupting your current positions." />
              </div>
            </div>
          </Container>
        </section>

        {/* --- Opportunities Section --- */}
        <section className="pb-[100px] lg:pb-[140px]">
          <Container size="wide">
            <div className="flex flex-col items-center text-center gap-12">
              <div className="flex flex-col gap-6">
                <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-tight text-[#14141E]">
                  Access Diverse Lending <br className="hidden md:block" />
                  <span className="text-[#0185EE]">Opportunities</span>
                </h2>
                <p className="text-[20px] font-medium leading-[28px] tracking-[-0.5px] text-[#626268] max-w-[800px] mx-auto">
                  Participate across multiple assets and markets within a unified system.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full text-left">
                <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[5/4] overflow-hidden rounded-[40px]">
                  <img
                    src="/images/products/defi/hand.avif"
                    alt="Lending opportunities visualization"
                    className="w-full h-full object-cover"
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
        </section>

        {/* --- Core Security Section --- */}
        <section className="pb-[100px] lg:pb-[140px]">
          <Container size="wide">
            <div className="flex flex-col items-center text-center gap-12">
              <div className="flex flex-col gap-6">
                <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-tight text-[#14141E]">
                  Security at <br className="hidden md:block" />
                  <span className="text-[#0185EE]">The Core</span>
                </h2>
                <p className="text-[20px] font-medium leading-[28px] tracking-[-0.5px] text-[#626268] max-w-[600px] mx-auto">
                  Protocol-level protections ensure transparency, reliability, and user confidence.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full text-left">
                <div className="flex flex-col gap-6">
                  <OpportunityItem text="Smart contract-based execution" />
                  <OpportunityItem text="Transparent on-chain activity" />
                  <OpportunityItem text="Continuous monitoring and risk controls" />
                  <OpportunityItem text="Designed for auditability & resilience" />
                </div>
                <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[5/4] overflow-hidden rounded-[40px]">
                  <img
                    src="/images/products/defi/core.avif"
                    alt="Core security and monitoring visualization"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* --- CTA Section --- */}
        <section className="relative bg-[#08080D] py-[100px] lg:py-[160px] overflow-hidden">
          <Container size="wide">
            <div className="relative z-10 flex flex-col items-center text-center gap-10 md:gap-14">
              <h1 className="text-[40px] md:text-[60px] lg:text-[72px] font-bold leading-[1.1] tracking-tight text-white max-w-[1200px]">
                Navigate financial innovation <br className="hidden md:block" />
                with confidence
              </h1>
              <div className="flex justify-center">
                <Button variant="primary" size="nav">
                  Contact Us
                </Button>
              </div>
            </div>
          </Container>
        </section>

      </main>

      <Footer hideCTA={true} />
    </div>
  );
}

function OpportunityItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-full bg-[#0185EE] flex items-center justify-center text-white flex-shrink-0">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <span className="text-[18px] md:text-[20px] font-medium text-[#14141E] leading-tight">
        {text}
      </span>
    </div>
  );
}

function StepItem({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-10 h-10 bg-[#14141E] rounded-[8px] flex items-center justify-center text-white text-[18px] font-bold">
        {number}
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-[20px] font-bold text-[#14141E] tracking-tight">{title}</h3>
        <p className="text-[16px] leading-[24px] text-[#626268]">{description}</p>
      </div>
    </div>
  );
}

function CapabilityItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[20px] font-bold text-white tracking-tight">{title}</h3>
      <p className="text-[18px] font-normal leading-[26px] tracking-[-0.45px] text-white">{description}</p>
    </div>
  );
}
