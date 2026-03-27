"use client";

import React from 'react';
import { Container } from './ui/container';

const STATS = [
  { value: "$2.4B+", label: "Total Assets Protected" },
  { value: "150+", label: "Countries Supported" },
  { value: "99.98%", label: "Uptime Reliability" },
  { value: "10M+", label: "Active Users Globally" },
];

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17L12 22L22 17" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12L12 17L22 12" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Multi-Layer Security",
    description: "Military-grade encryption and multi-signature technology protect every transaction with multiple layers of verification.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#0066FF" strokeWidth="2" />
        <path d="M12 6V12L16 14" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Real-Time Settlement",
    description: "Transactions are settled in seconds, not days. Our infrastructure ensures instant finality across all networks.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 12L11 14L15 10" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="#0066FF" strokeWidth="2" />
      </svg>
    ),
    title: "Regulatory Compliant",
    description: "Built to meet global regulatory standards including AML, KYC, and GDPR requirements across all jurisdictions.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Instant Scalability",
    description: "Our infrastructure scales automatically to handle millions of transactions without any degradation in performance.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="#0066FF" strokeWidth="2" />
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="#0066FF" strokeWidth="2" />
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="#0066FF" strokeWidth="2" />
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="#0066FF" strokeWidth="2" />
      </svg>
    ),
    title: "Unified Dashboard",
    description: "Manage all your financial products — wallets, payments, exchange, and DeFi — from one powerful control center.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="#0066FF" strokeWidth="2" />
        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Developer-First API",
    description: "Integrate TrustCore's full financial stack into your app with our clean, well-documented REST and GraphQL APIs.",
  },
];

export const SeamlessExperience = () => {
  return (
    <section className="w-full bg-white py-[100px] lg:py-[140px]">
      <Container size="wide">
        {/* Section Header */}
        <div className="text-center mb-[72px] lg:mb-[96px]">
          <h2 className="text-[40px] leading-[44px] md:text-[52px] md:leading-[56px] lg:text-[60px] lg:leading-[64px] font-bold text-[#0F172A] tracking-[-1.5px]">
            A Seamless <span className="text-[#0066FF]">Experience</span>
          </h2>
          <p className="mt-5 text-body-lg font-medium text-text-secondary max-w-[560px] mx-auto">
            TrustCore unifies every layer of financial infrastructure into one seamless, enterprise-grade platform.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-[80px] lg:mb-[112px]">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 rounded-[20px] bg-[#F8FAFC] border border-[#E8EDF2]"
            >
              <span className="text-[36px] md:text-[44px] font-bold text-[#0F172A] tracking-[-1.5px] leading-none">
                {stat.value}
              </span>
              <span className="mt-2 text-body-sm text-text-secondary font-medium leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="group p-7 rounded-[20px] bg-[#F8FAFC] border border-[#E8EDF2] hover:border-[#0066FF]/20 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#EEF4FF] flex items-center justify-center mb-4 group-hover:bg-[#0066FF]/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-[17px] font-semibold text-[#0F172A] mb-2 leading-snug">
                {feature.title}
              </h3>
              <p className="text-body-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SeamlessExperience;
