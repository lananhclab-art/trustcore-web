"use client";

import React from "react";
import Image from "next/image";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Text } from "@/components/ui/text";
import ExchangeCTA from "@/components/exchange-cta";
import { Zap, Database, Server, Smile, CheckCircle2 } from "lucide-react";

export default function ExchangePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden">
      <Header onDark={false} />

      <main className="flex-grow">
        {/* --- Hero Section --- */}
        <Section bg="white" className="relative overflow-hidden pt-[110px] md:pt-[140px] lg:pt-[180px] pb-xxl md:pb-4xl lg:pb-5xl">
          <Container>
            <div className="flex flex-col items-center text-center gap-12">
              <div className="flex flex-col gap-6 max-w-[1000px]">
                <Text as="div" variant="heading-h1" weight="bold" color="primary" className="leading-[1.15] md:leading-[1.1] tracking-[-1.5px]">
                  One Infrastructure <br className="hidden md:block" />
                  for <span className="text-text-brand">Global Digital</span> <br className="hidden md:block" />
                  <span className="text-text-brand">Asset Trading</span>
                </Text>
 
                <Text variant="body-lg" weight="medium" color="secondary" className="leading-[1.6] max-w-[700px] mx-auto px-4">
                  Trading is fragmented. It does not have to be. <br className="hidden md:block" />
                  TrustCore Exchange connects liquidity, execution, and access across systems in a single unified environment.
                </Text>
              </div>

              {/* Main Graphic */}
              <div className="relative w-full h-[682px] rounded-[32px] overflow-hidden border border-[#E8EDF2] mt-8 bg-[#F8FAFC]">
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
        </Section>

        {/* --- Section 02 --- */}
        <Section spacing="lg" bg="white">
          <Container>
            <div className="flex flex-col gap-16 lg:gap-20">
              <SectionHeader
                title={
                  <>
                    Built for <br />
                    <span className="text-[#007AFF]">Modern Markets</span>
                  </>
                }
                subtitle="A hybrid exchange built for performance, transparency, and scale."
                align="center"
              />

              {/* Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
                <FeatureCard
                  icon={<Zap strokeWidth={2.5} className="w-6 h-6 lg:w-8 lg:h-8" />}
                  title="Efficient execution"
                  description="High-performance systems designed for speed and consistency across every market."
                />
                <FeatureCard
                  icon={<Database strokeWidth={2.5} className="w-6 h-6 lg:w-8 lg:h-8" />}
                  title="Unified liquidity"
                  description="Access multiple liquidity sources through a single infrastructure layer for better depth."
                />
                <FeatureCard
                  icon={<Server strokeWidth={2.5} className="w-6 h-6 lg:w-8 lg:h-8" />}
                  title="Transparent systems"
                  description="Structured visibility across trading activity and execution for institutional compliance."
                />
                <FeatureCard
                  icon={<Smile strokeWidth={2.5} className="w-6 h-6 lg:w-8 lg:h-8" />}
                  title="Seamless experience"
                  description="Designed to reduce friction between centralized and decentralized trading environments."
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* --- Section 03 --- */}
        <Section spacing="lg" bg="white">
          <Container>
            <div className="flex flex-col gap-16 lg:gap-20">
              <SectionHeader
                title={
                  <>
                    Built for <br />
                    <span className="text-[#007AFF]">
                      Performance at Scale
                    </span>
                  </>
                }
                subtitle="TrustCore Exchange is designed to deliver reliable performance across global markets."
                align="center"
              />

              {/* Checklist */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 w-full">
                <CheckItem title="High-performance infrastructure" />
                <CheckItem title="Scalable system architecture" />
                <CheckItem title="Designed for global access" />
                <CheckItem title="Built for continuous operation" />
              </div>

              {/* Image */}
              <div className="relative w-full aspect-[21/9] rounded-[32px] overflow-hidden border border-[#E8EDF2] bg-[#F8FAFC]">
                <Image
                  src="/images/exchange/performance.avif"
                  alt="Team collaboration on performance monitoring"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
        </Section>

        <ExchangeCTA />
      </main>

      <Footer hideCTA={true} />
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-start gap-4 text-left group">
      <div className="text-[#007AFF] flex items-start">
        {icon}
      </div>

      <div className="flex flex-col gap-3">
        <Text variant="heading-h5" as="h4" color="primary" className="leading-tight tracking-tight">
          {title}
        </Text>

        <Text variant="body-md" weight="regular" color="secondary" className="leading-[26px]">
          {description}
        </Text>
      </div>
    </div>
  );
}

function CheckItem({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-4 items-start text-left p-4 md:p-6 lg:p-8 rounded-[32px]">
      <CheckCircle2 strokeWidth={2.5} className="w-6 h-6 lg:w-9 lg:h-9 text-[#007AFF]" />

      <Text variant="heading-h5" as="h4" color="primary" className="leading-tight tracking-tight lg:text-heading-h4">
        {title}
      </Text>
    </div>
  );
}