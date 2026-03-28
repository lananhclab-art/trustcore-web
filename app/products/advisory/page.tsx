"use client";

/**
 * app/products/advisory/page.tsx
 * ─────────────────────────────────────────────────────────────────
 * Advisory page refactored to use the Gateway design system.
 * ─────────────────────────────────────────────────────────────────
 */

import React from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";

import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Text } from "@/components/ui/text";

export default function FintechAdvisoryPage() {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenFAQ(openFAQ === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-bg-primary flex flex-col font-sans overflow-x-hidden">
      <Header onDark={false} />

      <main className="flex-grow">

        {/* ─── Hero Section ─────────────────────────────────────── */}
        <Section spacing="hero" bg="white" className="overflow-hidden">
          <Container className="flex flex-col items-center text-center">
            <div className="max-w-4xl space-y-lg">
              <Text variant="heading-h1" as="h1" color="primary">
                Strategic Advisory For <br className="hidden md:block" />
                Digital Finance And <br className="hidden md:block" />
                <span className="text-text-brand">Blockchain Innovation</span>
              </Text>
              <Text variant="body-lg" weight="medium" color="secondary" className="max-w-2xl mx-auto">
                We help businesses, institutions, and builders navigate digital assets,<br className="hidden md:block" />
                decentralized systems, and financial infrastructure with clarity and confidence.
              </Text>
            </div>

            <div className="mt-xl flex items-center justify-center gap-m">
              <Link href="/contact">
                <Button variant="primary" size="nav" className="font-bold">
                  Request Consultation
                </Button>
              </Link>
              <Button variant="secondary" size="nav" className="font-bold">
                Explore Services
              </Button>
            </div>

            <div className="mt-6xl w-full">
              <div className="w-full overflow-hidden rounded-3xl bg-bg-secondary border border-border-subtle">
                <img
                  src="/images/fintech/hero.avif"
                  alt="TrustCore fintech advisory consultation"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* ─── Industry-leading Advisory Section ───────────────── */}
        <Section spacing="lg" bg="white">
          <Container>
            <SectionHeader
              title={<><span className="text-text-brand">Industry-leading</span><br />Advisory</>}
              align="center"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mt-4xl lg:mt-6xl">
              {/* Left: Bold Subheading */}
              <Text variant="heading-h3" as="h3" color="primary" className="max-w-md">
                Perspectives Shaping<br />
                The Future Of Finance
              </Text>

              {/* Right: 3 Service Items */}
              <div className="flex flex-col gap-xl">
                <ServiceItem
                  icon={<StrategicIcon />}
                  title="Strategic positioning"
                  desc="Define your role within the evolving financial ecosystem with clear, actionable strategies."
                />
                <ServiceItem
                  icon={<MarketIcon />}
                  title="Market intelligence"
                  desc="Understand trends, risks, and opportunities across digital assets and financial systems."
                />
                <ServiceItem
                  icon={<ExecutionIcon />}
                  title="Execution guidance"
                  desc="Translate strategy into execution with structured advisory and implementation support."
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* ─── Why Trustcore Section ───────────────────────────── */}
        <Section spacing="lg" bg="white">
          <Container>
            <SectionHeader
              title={<>Why <span className="text-text-brand">Trustcore</span></>}
              subtitle="Built for the future of finance"
              align="center"
            />

            <div className="flex flex-col mt-4xl lg:mt-6xl border-t border-border-subtle">
              {[
                { title: "Strategic clarity", desc: "Define your role within the evolving financial ecosystem with clear, actionable strategies." },
                { title: "Institutional perspective", desc: "Designed to meet the needs of businesses operating at scale." },
                { title: "Execution-focused", desc: "From strategy to implementation, we support real-world outcomes." },
                { title: "Global context", desc: "Understand regional dynamics and global financial trends." },
                { title: "Independent insight", desc: "Objective analysis aligned with long-term value creation." },
                { title: "Future-ready thinking", desc: "Position your business for the evolution of financial systems." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-m lg:gap-20 py-lg lg:py-xl border-b border-border-subtle"
                >
                  <Text variant="heading-h4" as="h4" color="primary">
                    {item.title}
                  </Text>
                  <Text variant="body-lg" weight="medium" color="secondary">
                    {item.desc}
                  </Text>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* ─── Advisory Services Section ────────────────────────── */}
        <Section spacing="lg" bg="white">
          <Container>
            <SectionHeader
              title={<>Advisory <span className="text-text-brand">Services</span></>}
              subtitle="Tailored solutions for financial innovation"
              align="center"
            />

            <div className="flex flex-col mt-4xl lg:mt-6xl border-t border-border-subtle">
              {[
                { title: "Strategy & Positioning", desc: "Define product direction, market fit, and long-term growth strategies." },
                { title: "Product & Ecosystem Design", desc: "Design financial products, token models, and ecosystem structures." },
                { title: "Market Entry & Expansion", desc: "Support go-to-market strategies across regions and user segments." },
                { title: "Compliance & Risk Advisory", desc: "Navigate regulatory environments and operational risk considerations." },
              ].map((service, idx) => (
                <div
                  key={`${service.title}-${idx}`}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-m lg:gap-20 py-lg lg:py-xl border-b border-border-subtle"
                >
                  <Text variant="heading-h4" as="h4" color="primary">
                    {service.title}
                  </Text>
                  <Text variant="body-lg" weight="medium" color="secondary">
                    {service.desc}
                  </Text>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* ─── Plans Section ─────────────────────────────── */}
        <Section spacing="lg" bg="white">
          <Container >
            <SectionHeader
              title="Our Plans"
              subtitle="Flexible engagement models"
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg lg:gap-xxl mt-4xl lg:mt-6xl">
              <PromoCard
                image="/images/fintech/Businesses.avif"
                title="Advisory for Businesses"
                desc="Ongoing strategic support for companies building financial products and infrastructure."
              />
              <PromoCard
                image="/images/fintech/Projects.avif"
                title="Advisory for Projects"
                desc="Targeted guidance for blockchain, DeFi, and Web3 initiatives."
              />
            </div>
          </Container>
        </Section>

        {/* ─── Specialized Services Section ─────────────────── */}
        <Section spacing="lg" bg="white">
          <Container >
            <SectionHeader
              title={<>Specialized <span className="text-text-brand">Services</span></>}
              subtitle="Deep expertise for complex challenges"
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg lg:gap-xxl mt-4xl lg:mt-6xl">
              <PromoCard
                image="/images/fintech/Strategy.avif"
                title="Research & Strategy"
                desc="Custom research and strategic advisory tailored to your business objectives."
              />
              <PromoCard
                image="/images/fintech/Diligence.avif"
                title="Due Diligence"
                desc="Comprehensive analysis of projects, technologies, and market positioning."
              />
            </div>
          </Container>
        </Section>

        {/* ─── FAQ Section ─────────────────────────────────── */}
        <Section spacing="lg" bg="white">
          <Container >
            <SectionHeader
              title={<>Frequently Asked <br className="hidden md:block" /><span className="text-text-brand">Questions</span></>}
              subtitle="Common questions about our advisory services"
              align="center"
            />

            <div className="max-w-3xl mx-auto mt-4xl lg:mt-6xl">
              {[
                { q: "What does TrustCore Advisory provide?", a: "We offer strategic guidance across digital assets, blockchain infrastructure, and financial systems." },
                { q: "Who is this service for?", a: "Businesses, institutions, startups, and Web3 projects seeking structured financial and technical guidance." },
                { q: "Do you support implementation?", a: "Yes, we provide both strategic advisory and execution support depending on your needs." },
                { q: "How do we get started?", a: "You can request a consultation to discuss your objectives and scope." },
              ].map((item, idx) => (
                <FAQItem 
                  key={idx}
                  question={item.q}
                  answer={item.a}
                  isOpen={openFAQ === idx}
                  onToggle={() => toggleFAQ(idx)}
                />
              ))}
            </div>
          </Container>
        </Section>

      </main>

      {/* ─── Final CTA Section ──────────────────────────── */}
      <Section spacing="lg" bg="dark" className="relative overflow-hidden">
        <Container>
          <div className="text-center max-w-4xl mx-auto space-y-12">
            <Text variant="heading-h1" as="h2" color="inverse" weight="bold">
              Navigate financial innovation <br className="hidden md:block" />
              with confidence
            </Text>
            <div className="flex justify-center pt-lg">
              <Link href="/contact">
                <Button variant="primary" size="nav" className="font-bold">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Footer hideCTA={true} />
    </div>
  );
}

// ─── Subcomponents ───────────────────────────────────────────

function ServiceItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col gap-m">
      <div className="w-icon-lg h-icon-lg text-text-brand">
        {icon}
      </div>
      <div className="space-y-xs">
        <Text variant="heading-h4" as="h4" color="primary">
          {title}
        </Text>
        <Text variant="body-lg" weight="medium" color="secondary">
          {desc}
        </Text>
      </div>
    </div>
  );
}

function PromoCard({ image, title, desc }: { image: string, title: string, desc: string }) {
  return (
    <div className="relative overflow-hidden rounded-[32px] aspect-[4/3] lg:aspect-[1.1/1] group cursor-pointer bg-black">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-1000"
      />
      <div 
        className="absolute inset-0 flex flex-col justify-end p-xl lg:p-3xl gap-3"
        style={{ background: "linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)" }}
      >
        <Text variant="heading-h4" as="h4" color="inverse">
          {title}
        </Text>
        <Text variant="body-lg" weight="medium" color="inverse" className="max-w-md opacity-90 leading-tight">
          {desc}
        </Text>
      </div>
    </div>
  );
}

function FAQItem({ 
  question, 
  answer, 
  isOpen, 
  onToggle 
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onToggle: () => void; 
}) {
  return (
    <div className="border-b border-[#E8EDF2] last:border-0 transition-all duration-300">
      <button 
        onClick={onToggle}
        className="w-full py-8 px-2 flex items-center justify-between text-left group"
      >
        <Text
          variant="heading-h5"
          weight="bold"
          color="primary"
          className="group-hover:text-text-brand transition-colors tracking-tight leading-tight"
        >
          {question}
        </Text>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? <X className="text-text-brand" size={20} /> : <Plus className="text-[#0F172A] group-hover:text-text-brand" size={20} />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}
      >
        <div className="px-2 pb-8">
          <Text variant="body-md" weight="medium" color="secondary" className="leading-[26px] max-w-2xl">
            {answer}
          </Text>
        </div>
      </div>
    </div>
  );
}

// ─── Icons ──────────────────────────────────────────────────

const StrategicIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="18" width="5" height="10" rx="1"/>
    <rect x="13.5" y="11" width="5" height="17" rx="1"/>
    <rect x="23" y="4" width="5" height="24" rx="1"/>
  </svg>
);

const MarketIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="14" width="8" height="14" rx="1.5"/>
    <rect x="15" y="3" width="8" height="25" rx="1.5"/>
    <path d="M7 14V9"/>
    <path d="M19 3V2"/>
    <path d="M3 21h26"/>
  </svg>
);

const ExecutionIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6C4 4.895 4.895 4 6 4h12l8 8v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z"/>
    <path d="M18 4v8h8"/>
    <path d="M9 17h14"/>
    <path d="M9 21h10"/>
  </svg>
);
