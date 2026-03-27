"use client";

import React from "react";
import Image from "next/image";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import ExchangeCTA from "@/components/exchange-cta";
import { Zap, Database, Server, Smile, CheckCircle2 } from "lucide-react";

export default function ExchangePage() {
  return (
    <div className="min-h-screen bg-bg-primary flex flex-col font-sans">
      <Header onDark={false} />

      <main className="flex-grow pt-[100px] lg:pt-[140px]">
        {/* --- Hero Section --- */}
        <section className="pb-[80px] lg:pb-[120px] text-center">
          <Container size="wide">
            <div className="flex flex-col items-center gap-8 md:gap-12">
              <div className="flex flex-col gap-6">
                <h1 className="text-[40px] md:text-[60px] lg:text-[72px] font-bold leading-[1.1] tracking-tight text-[#0F172A]">
                  One Infrastructure for <br className="hidden md:block" />
                  <span className="text-[#0185EE]">Global Digital Asset Trading</span>
                </h1>
                <p className="text-[20px] font-medium leading-[28px] tracking-[-0.5px] text-[#626268] max-w-[524px] mx-auto">
                  Trading is fragmented. It does not have to be. TrustCore Exchange connects liquidity,
                  execution, and access across systems in a single unified environment.
                </p>
              </div>

              {/* Main Graphic - Updated to .avif */}
              <div className="relative w-full aspect-[21/9] rounded-[24px] overflow-hidden border border-black/5 mt-8">
                <Image
                  src="/images/exchange/hero.avif"
                  alt="Modern trading desk with financial charts"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </Container>
        </section>

        {/* --- Section 02: Built for Modern Markets --- */}
        <section className="bg-white py-[60px] lg:py-[100px] text-center">
          <Container size="wide">
            <div className="flex flex-col gap-[64px] lg:gap-[80px]">
              {/* Section Header */}
              <div className="flex flex-col gap-3 items-center mx-auto text-center">
                <h1 className="text-[40px] md:text-[60px] lg:text-[72px] font-bold leading-[1.1] tracking-tight text-[#0F172A]">
                  Built for <br /> <span className="text-[#0185EE]">Modern Markets</span>
                </h1>
                <p className="text-[20px] font-medium leading-[28px] tracking-[-0.5px] text-[#626268] max-w-[524px]">
                  A hybrid exchange built for performance, transparency, and scale.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-left">
                <FeatureCard
                  icon={<Zap size={32} className="text-[#0185EE]" strokeWidth={2.5} />}
                  title="Efficient execution"
                  description="High-performance systems designed for speed and consistency across every market."
                />
                <FeatureCard
                  icon={<Database size={32} className="text-[#0185EE]" strokeWidth={2.5} />}
                  title="Unified liquidity"
                  description="Access multiple liquidity sources through a single infrastructure layer for better depth."
                />
                <FeatureCard
                  icon={<Server size={32} className="text-[#0185EE]" strokeWidth={2.5} />}
                  title="Transparent systems"
                  description="Structured visibility across trading activity and execution for institutional compliance."
                />
                <FeatureCard
                  icon={<Smile size={32} className="text-[#0185EE]" strokeWidth={2.5} />}
                  title="Seamless experience"
                  description="Designed to reduce friction between centralized and decentralized trading environments."
                />
              </div>
            </div>
          </Container>
        </section>

        {/* --- Section 03: Built for Performance at Scale --- */}
        <section className="bg-white py-[100px] lg:py-[140px]">
          <Container size="wide">
            <div className="flex flex-col gap-12 lg:gap-[80px]">
              {/* Section Header */}
              <div className="flex flex-col gap-3 mx-auto text-center items-center">
                <h1 className="text-[40px] md:text-[60px] lg:text-[72px] font-bold leading-[1.1] tracking-tight text-[#0F172A]">
                  Built for <br /> <span className="text-[#0185EE]">Performance at Scale</span>
                </h1>
                <p className="text-[20px] font-medium leading-[28px] tracking-[-0.5px] text-[#626268] max-w-[524px]">
                  TrustCore Exchange is designed to deliver reliable performance across global markets.
                </p>
              </div>

              {/* Horizontal Checklist */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 w-full mx-auto">
                <CheckItem title="High-performance infrastructure" />
                <CheckItem title="Scalable system architecture" />
                <CheckItem title="Designed for global access" />
                <CheckItem title="Built for continuous operation" />
              </div>

              {/* Support Image */}
              <div className="relative w-full aspect-[21/9] rounded-[24px] overflow-hidden mt-8">
                <Image
                  src="/images/exchange/performance.avif"
                  alt="Team collaboration on performance monitoring"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Custom Product CTA */}
        <ExchangeCTA />
      </main>

      <Footer hideCTA={true} />
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex flex-col gap-5 text-left items-start">
      <div className="w-12 h-12 flex items-center justify-start mb-2">
        {icon}
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-[20px] font-bold text-[#0F172A] leading-snug">
          {title}
        </h4>
        <p className="text-[17px] text-[#626268] leading-relaxed max-w-[300px]">
          {description}
        </p>
      </div>
    </div>
  );
}

function CheckItem({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-5 items-start text-left">
      <CheckCircle2 size={36} className="text-[#0185EE]" />
      <span className="text-[24px] font-bold text-[#14141E] leading-[32px] tracking-[-0.6px] max-w-[240px]">
        {title}
      </span>
    </div>
  );
}
