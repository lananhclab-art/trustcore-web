"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";

export default function FintechAdvisoryPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden">
      <Header onDark={false} />

      <main className="flex-grow">
        {/* ... existing code ... */}
        {/* Skipping actual content for brevity in instruction, but keep everything else intact */}

        {/* ─── Hero Section ─────────────────────────────────────── */}
        <section className="bg-white pt-[140px] lg:pt-[180px] pb-[80px] lg:pb-[120px] overflow-hidden">
          <Container size="wide" className="flex flex-col items-center text-center">
            {/* Headline */}
            <h1 className="text-[44px] md:text-[60px] lg:text-[72px] font-bold leading-[1.1] tracking-[-1.5px] text-[#14141E] max-w-[900px]">
              Strategic Advisory For <br className="hidden md:block" />
              Digital Finance And <br className="hidden md:block" />
              <span className="text-[#0185EE]">Blockchain Innovation</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-3 text-[20px] font-medium text-[#626268] leading-[28px] tracking-[-0.5px] max-w-[760px]">
              We help businesses, institutions, and builders navigate digital assets,<br className="hidden md:block" />
              decentralized systems, and financial infrastructure with clarity and confidence.
            </p>

            {/* CTAs */}
            <div className="mt-8 lg:mt-10 flex items-center justify-center gap-3">
              <Link href="/contact">
                <Button variant="primary" size="nav">
                  Request Consultation
                </Button>
              </Link>
              <Button variant="secondary" size="nav">
                Explore Services
              </Button>
            </div>

            {/* Hero Image */}
            <div className="mt-16 lg:mt-[80px] w-full">
              <div className="w-full overflow-hidden rounded-[24px]">
                <img
                  src="/images/fintech/hero.avif"
                  alt="TrustCore fintech advisory consultation"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* ─── Industry-leading Advisory Section ───────────────── */}
        <section className="py-[100px] lg:py-[140px] bg-white">
          <Container size="wide">
            {/* Centered Heading */}
            <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-[-1.5px] text-center mb-16 lg:mb-20">
              <span className="text-[#0185EE]">Industry-leading</span>
              <br />
              <span className="text-[#14141E]">Advisory</span>
            </h2>

            {/* 2-Column Split */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left: Bold Subheading */}
              <div>
                <h3 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold leading-[1.15] tracking-[-1px] text-[#14141E]">
                  Perspectives Shaping<br />
                  The Future Of Finance
                </h3>
              </div>

              {/* Right: 3 Service Items */}
              <div className="flex flex-col gap-10">

                {/* Strategic positioning */}
                <div className="flex flex-col gap-3">
                  <div className="w-8 h-8 text-[#0185EE]">
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="18" width="5" height="10" rx="1"/>
                      <rect x="13.5" y="11" width="5" height="17" rx="1"/>
                      <rect x="23" y="4" width="5" height="24" rx="1"/>
                    </svg>
                  </div>
                  <h4 className="text-[24px] font-bold text-[#14141E] leading-[32px] tracking-[-0.6px]">Strategic positioning</h4>
                  <p className="text-[20px] font-medium text-[#626268] leading-[28px] tracking-[-0.5px]">
                    Define your role within the evolving financial ecosystem with clear, actionable strategies.
                  </p>
                </div>

                {/* Market intelligence */}
                <div className="flex flex-col gap-3">
                  <div className="w-8 h-8 text-[#0185EE]">
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="14" width="8" height="14" rx="1.5"/>
                      <rect x="15" y="3" width="8" height="25" rx="1.5"/>
                      <path d="M7 14V9"/>
                      <path d="M19 3V2"/>
                      <path d="M3 21h26"/>
                    </svg>
                  </div>
                  <h4 className="text-[24px] font-bold text-[#14141E] leading-[32px] tracking-[-0.6px]">Market intelligence</h4>
                  <p className="text-[20px] font-medium text-[#626268] leading-[28px] tracking-[-0.5px]">
                    Understand trends, risks, and opportunities across digital assets and financial systems.
                  </p>
                </div>

                {/* Execution guidance */}
                <div className="flex flex-col gap-3">
                  <div className="w-8 h-8 text-[#0185EE]">
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 6C4 4.895 4.895 4 6 4h12l8 8v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z"/>
                      <path d="M18 4v8h8"/>
                      <path d="M9 17h14"/>
                      <path d="M9 21h10"/>
                    </svg>
                  </div>
                  <h4 className="text-[24px] font-bold text-[#14141E] leading-[32px] tracking-[-0.6px]">Execution guidance</h4>
                  <p className="text-[20px] font-medium text-[#626268] leading-[28px] tracking-[-0.5px]">
                    Translate strategy into execution with structured advisory and implementation support.
                  </p>
                </div>

              </div>
            </div>
          </Container>
        </section>

        {/* ─── Why Trustcore Section ───────────────────────────── */}
        <section className="py-[100px] lg:py-[140px] bg-white">
          <Container size="wide">
            {/* Centered Heading */}
            <div className="flex flex-col items-center text-center gap-3 mb-16 lg:mb-20">
              <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-[-1.5px] text-[#14141E]">
                Why <span className="text-[#0185EE]">Trustcore</span>
              </h2>
              <p className="text-[20px] font-medium text-[#626268] leading-[28px] tracking-[-0.5px]">
                Built for the future of finance
              </p>
            </div>

            {/* 6-Row Table List */}
            <div className="flex flex-col border-t border-[#E8ECF0]">
              {[
                { title: "Strategic clarity", desc: "Define your role within the evolving financial ecosystem with clear, actionable strategies." },
                { title: "Institutional perspective", desc: "Designed to meet the needs of businesses operating at scale." },
                { title: "Execution-focused", desc: "From strategy to implementation, we support real-world outcomes." },
                { title: "Global context", desc: "Understand regional dynamics and global financial trends." },
                { title: "Independent insight", desc: "Objective analysis aligned with long-term value creation." },
                { title: "Future-ready thinking", desc: "Position your business for the evolution of financial systems." },
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20 py-8 border-b border-[#E8ECF0]"
                >
                  <h4 className="text-[24px] font-bold text-[#14141E] leading-[32px] tracking-[-0.6px]">
                    {item.title}
                  </h4>
                  <p className="text-[20px] font-medium text-[#626268] leading-[28px] tracking-[-0.5px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ─── Advisory Services Section ────────────────────────── */}
        <section className="py-[100px] lg:py-[140px] bg-white">
          <Container size="wide">
            {/* Centered Heading */}
            <div className="flex flex-col items-center text-center gap-3 mb-16 lg:mb-20">
              <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-[-1.5px] text-[#14141E]">
                Advisory <span className="text-[#0185EE]">Services</span>
              </h2>
              <p className="text-[20px] font-medium text-[#626268] leading-[28px] tracking-[-0.5px]">
                Tailored solutions for financial innovation
              </p>
            </div>

            {/* Services List Table */}
            <div className="flex flex-col border-t border-[#E8ECF0]">
              {[
                { title: "Strategy & Positioning", desc: "Define product direction, market fit, and long-term growth strategies." },
                { title: "Product & Ecosystem Design", desc: "Design financial products, token models, and ecosystem structures." },
                { title: "Product & Ecosystem Design", desc: "Design financial products, token models, and ecosystem structures." },
                { title: "Market Entry & Expansion", desc: "Support go-to-market strategies across regions and user segments." },
                { title: "Compliance & Risk Advisory", desc: "Navigate regulatory environments and operational risk considerations." },
              ].map((service, idx) => (
                <div
                  key={`${service.title}-${idx}`}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20 py-8 border-b border-[#E8ECF0]"
                >
                  <h4 className="text-[24px] font-bold text-[#14141E] leading-[32px] tracking-[-0.6px]">
                    {service.title}
                  </h4>
                  <p className="text-[20px] font-medium text-[#626268] leading-[28px] tracking-[-0.5px]">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ─── Plans Section ─────────────────────────────── */}
        <section className="py-[100px] lg:py-[140px] bg-white">
          <Container size="wide">
            {/* Centered Heading */}
            <div className="flex flex-col items-center text-center gap-3 mb-16 lg:mb-20">
              <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-[-1.5px] text-[#14141E]">
                Plans
              </h2>
              <p className="text-[20px] font-medium text-[#626268] leading-[28px] tracking-[-0.5px]">
                Flexible engagement models
              </p>
            </div>

            {/* Plans Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* Card 1: Businesses */}
              <div className="relative overflow-hidden rounded-[40px] aspect-[4/3] lg:aspect-[1.1/1] group cursor-pointer">
                <img
                  src="/images/fintech/Businesses.avif"
                  alt="Advisory for Businesses"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-[#0D0F12]/20 to-transparent flex flex-col justify-end p-8 lg:p-12">
                  <h3 className="text-[28px] md:text-[32px] font-bold text-white mb-3 tracking-tight">
                    Advisory for Businesses
                  </h3>
                  <p className="text-[18px] md:text-[20px] font-medium text-white/90 leading-[26px] md:leading-[28px] max-w-[440px]">
                    Ongoing strategic support for companies building financial products and infrastructure.
                  </p>
                </div>
              </div>

              {/* Card 2: Projects */}
              <div className="relative overflow-hidden rounded-[40px] aspect-[4/3] lg:aspect-[1.1/1] group cursor-pointer">
                <img
                  src="/images/fintech/Projects.avif"
                  alt="Advisory for Projects"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-[#0D0F12]/20 to-transparent flex flex-col justify-end p-8 lg:p-12">
                  <h3 className="text-[28px] md:text-[32px] font-bold text-white mb-3 tracking-tight">
                    Advisory for Projects
                  </h3>
                  <p className="text-[18px] md:text-[20px] font-medium text-white/90 leading-[26px] md:leading-[28px] max-w-[440px]">
                    Targeted guidance for blockchain, DeFi, and Web3 initiatives.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ─── Specialized Services Section ─────────────────── */}
        <section className="py-[100px] lg:py-[140px] bg-white">
          <Container size="wide">
            {/* Centered Heading */}
            <div className="flex flex-col items-center text-center gap-3 mb-16 lg:mb-20">
              <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-[-1.5px] text-[#14141E]">
                Specialized <span className="text-[#0185EE]">Services</span>
              </h2>
              <p className="text-[20px] font-medium text-[#626268] leading-[28px] tracking-[-0.5px]">
                Deep expertise for complex challenges
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* Card 1: Research & Strategy */}
              <div className="relative overflow-hidden rounded-[40px] aspect-[4/3] lg:aspect-[1.1/1] group cursor-pointer">
                <img
                  src="/images/fintech/Strategy.avif"
                  alt="Research & Strategy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-[#0D0F12]/20 to-transparent flex flex-col justify-end p-8 lg:p-12">
                  <h3 className="text-[28px] md:text-[32px] font-bold text-white mb-3 tracking-tight">
                    Research & Strategy
                  </h3>
                  <p className="text-[18px] md:text-[20px] font-medium text-white/90 leading-[26px] md:leading-[28px] max-w-[440px]">
                    Custom research and strategic advisory tailored to your business objectives.
                  </p>
                </div>
              </div>

              {/* Card 2: Due Diligence */}
              <div className="relative overflow-hidden rounded-[40px] aspect-[4/3] lg:aspect-[1.1/1] group cursor-pointer">
                <img
                  src="/images/fintech/Diligence.avif"
                  alt="Due Diligence"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-[#0D0F12]/20 to-transparent flex flex-col justify-end p-8 lg:p-12">
                  <h3 className="text-[28px] md:text-[32px] font-bold text-white mb-3 tracking-tight">
                    Due Diligence
                  </h3>
                  <p className="text-[18px] md:text-[20px] font-medium text-white/90 leading-[26px] md:leading-[28px] max-w-[440px]">
                    Comprehensive analysis of projects, technologies, and market positioning.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ─── FAQ Section ─────────────────────────────────── */}
        <section className="pb-[100px] lg:pb-[140px] bg-white">
          <Container size="wide">
            {/* Centered Heading */}
            <div className="flex flex-col items-center text-center gap-3 mb-16 lg:mb-20">
              <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-[-1.5px] text-[#14141E]">
                Frequently Asked <br className="hidden md:block" /> 
                <span className="text-[#0185EE]">Questions</span>
              </h2>
              <p className="text-[20px] font-medium text-[#626268] leading-[28px] tracking-[-0.5px] max-w-[524px] mx-auto">
                Common questions about our advisory services
              </p>
            </div>

            {/* Accordion List */}
            <div className="max-w-[800px] mx-auto space-y-4">
              <FAQItem 
                question="What does TrustCore Advisory provide?" 
                answer="We offer strategic guidance across digital assets, blockchain infrastructure, and financial systems." 
                isDefaultOpen={true}
              />
              <FAQItem 
                question="Who is this service for?" 
                answer="Businesses, institutions, startups, and Web3 projects seeking structured financial and technical guidance." 
              />
              <FAQItem 
                question="Do you support implementation?" 
                answer="Yes, we provide both strategic advisory and execution support depending on your needs." 
              />
              <FAQItem 
                question="How do we get started?" 
                answer="You can request a consultation to discuss your objectives and scope." 
              />
            </div>
          </Container>
        </section>

      </main>

      {/* ─── Final CTA Section ──────────────────────────── */}
      <section className="relative bg-[#08080D] py-[100px] lg:py-[160px] overflow-hidden">
        <Container size="wide">
          <div className="relative z-10 flex flex-col items-center text-center gap-8">
            <h2 className="text-[32px] md:text-[60px] lg:text-[72px] font-bold leading-[1.1] tracking-tight text-white max-w-[950px]">
              <span className="block md:inline lg:whitespace-nowrap">Navigate financial innovation</span>
              <br /> 
              <span>with confidence</span>
            </h2>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button variant="primary" size="nav" className="!rounded-full px-10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Footer hideCTA={true} />
    </div>
  );
}

function FAQItem({ question, answer, isDefaultOpen = false }: { question: string, answer: string, isDefaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = React.useState(isDefaultOpen);

  return (
    <div className="border-b border-black/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-[20px] font-bold text-[#14141E] group-hover:text-[#0185EE] transition-colors">
          {question}
        </span>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? <X className="text-[#0185EE]" size={24} /> : <Plus className="text-[#14141E] group-hover:text-[#0185EE]" size={24} />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-8' : 'max-h-0'}`}
      >
        <p className="text-[18px] font-medium text-[#626268] leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}
