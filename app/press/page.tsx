"use client";

import React from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Download, ExternalLink, Mail, Info, ShieldCheck, AlertCircle } from "lucide-react";
import { Text } from "@/components/ui/text";

const guidelines = [
  {
    id: "ownership",
    title: "Ownership",
    icon: <ShieldCheck className="text-[#007AFF]" />,
    content: `Use of the TrustCore Marks does not grant any ownership or independent rights in the TrustCore Marks. All trademark rights remain exclusively with TrustCore Technologies.
    
    You may not attempt to claim or assert rights in the TrustCore Marks, whether through common law, registration, or otherwise. You may not register, or attempt to register, any of the TrustCore Marks, whether alone or in combination with your own trademarks, names, or any third-party marks.`
  },
  {
    id: "brand-structure",
    title: "Brand Structure",
    icon: <Info className="text-[#007AFF]" />,
    content: `TrustCore operates with both a company-level brand and product-level brands.
    
    The TrustCore™ word mark represents the company and must include the “™” symbol upon first or prominent use. Product names, including TrustCore Wallet, do not use the “™” symbol and must be presented exactly as provided.`
  },
  {
    id: "wordmark",
    title: "Wordmark Usage",
    icon: <Info className="text-[#007AFF]" />,
    content: `The TrustCore™ wordmark must be used consistently and accurately.
    • Always maintain correct spelling and capitalization: TrustCore™
    • Include the “™” symbol on first or prominent use
    • Do not modify, abbreviate, or stylize the wordmark
    
    The TrustCore™ name must not be used as a generic noun or verb, in plural or possessive forms, or in a way that alters its meaning or identity.`
  },
  {
    id: "logo-usage",
    title: "Logo Usage",
    icon: <Info className="text-[#007AFF]" />,
    content: `The TrustCore logos must be used only as provided. You may not:
    • Alter colors, proportions, or typography
    • Apply visual effects such as shadows, gradients, or outlines
    • Distort, rotate, or stretch the logo
    • Recreate or redraw the logo
    • Combine the logo with other branding elements
    
    Sufficient clear space must be maintained around the logo to ensure visibility and legibility.`
  },
  {
    id: "prohibited",
    title: "Prohibited Use",
    icon: <AlertCircle className="text-[#FF3B30]" />,
    content: `The TrustCore Marks may not be used in any manner that:
    • Involves unauthorized commercial activity
    • Promotes or is associated with illegal or unethical activities
    • Violates applicable laws, regulations, or public policy
    • Contains defamatory, obscene, or otherwise objectionable content`
  }
];

export default function PressKitPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden">
      <Header onDark={false} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Section spacing="hero" bg="white" className="border-b border-[#E8EDF2]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="flex flex-col gap-8">
                <SectionHeader
                  title={<>TrustCore <span className="text-[#007AFF]">Press Kit</span></>}
                  subtitle="Official brand assets, guidelines, and media resources for TrustCore Technologies."
                  align="left"
                />
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" size="nav" leftIcon={<Download size={18} />}>
                    Download Brand Kit
                  </Button>
                  <Button variant="secondary" size="nav" leftIcon={<Mail size={18} />}>
                    Contact Press
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] bg-[#F8FAFC] rounded-[40px] border border-[#E8EDF2] overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="flex flex-col items-center gap-6 p-12 bg-white rounded-3xl shadow-xl border border-[#E8EDF2] group-hover:-translate-y-2 transition-transform duration-500">
                      <div className="w-[180px] h-[40px] bg-[#007AFF]/10 rounded-lg flex items-center justify-center">
                        <span className="text-[#007AFF] font-bold text-xl">TrustCore™</span>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-[#F8FAFC] rounded-xl border border-[#E8EDF2]" />
                        <div className="w-12 h-12 bg-[#0F172A] rounded-xl" />
                        <div className="w-12 h-12 bg-[#007AFF] rounded-xl" />
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Assets Section */}
        <Section spacing="lg" bg="subtle">
          <Container>
            <SectionHeader
              title="Brand Assets"
              subtitle="Official logos and colors for digital and print use."
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { name: "Primary Logo", desc: "For use on light backgrounds", color: "bg-white" },
                { name: "White Logo", desc: "For use on dark backgrounds", color: "bg-[#0F172A]" },
                { name: "Brand Color", desc: "TrustCore Blue (#007AFF)", color: "bg-[#007AFF]" }
              ].map((asset, i) => (
                <div key={i} className="flex flex-col gap-6 p-8 bg-white rounded-3xl border border-[#E8EDF2] hover:shadow-lg transition-all group">
                  <div className={`h-[180px] rounded-2xl ${asset.color} border border-[#E8EDF2] flex items-center justify-center`}>
                    {i === 1 ? (
                      <span className="text-white font-bold text-lg">TrustCore™</span>
                    ) : (
                      <span className={`${i === 2 ? 'text-white' : 'text-[#0F172A]'} font-bold text-lg`}>TrustCore™</span>
                    )}
                  </div>
                  <div>
                    <Text as="div" variant="body-lg" weight="bold" color="primary" className="mb-1">{asset.name}</Text>
                    <Text variant="body-md" color="secondary">{asset.desc}</Text>
                  </div>
                  <Button variant="secondary" size="nav" leftIcon={<Download size={16} />}>
                    Download Asset
                  </Button>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Guidelines Section */}
        <Section spacing="lg" bg="white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-24 items-start">
              {/* Sticky TOC */}
              <nav className="hidden lg:flex flex-col gap-3 sticky top-[120px] p-8 bg-[#F8FAFC] rounded-3xl border border-[#E8EDF2]">
                <p className="text-[12px] font-bold text-[#94A3B8] tracking-[1.5px] uppercase mb-4 px-2">Guidelines</p>
                {guidelines.map((g) => (
                  <a
                    key={g.id}
                    href={`#${g.id}`}
                    className="text-body-md font-semibold text-[#626268] hover:text-[#007AFF] hover:translate-x-1 transition-all py-1.5 px-2 rounded-lg hover:bg-white"
                  >
                    {g.title}
                  </a>
                ))}
              </nav>

              {/* Guideline Content */}
              <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-6">
                  <Text as="div" variant="heading-h2" weight="bold" color="primary" className="leading-tight">Brand Guidelines</Text>
                  <Text variant="body-lg" weight="medium" color="secondary" className="leading-relaxed max-w-3xl">
                    These guidelines ensure the TrustCore brand remains consistent across all communication channels.
                  </Text>
                </div>

                {guidelines.map((section) => (
                  <div key={section.id} id={section.id} className="flex flex-col gap-6 scroll-mt-[140px]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#F8FAFC] rounded-2xl flex items-center justify-center border border-[#E8EDF2]">
                        {section.icon}
                      </div>
                      <Text as="div" variant="heading-h3" weight="bold" color="primary" className="leading-tight tracking-tight">
                        {section.title}
                      </Text>
                    </div>
                    <div className="text-body-sm font-medium text-[#626268] leading-[24px] whitespace-pre-line pl-0 md:pl-16">
                      {section.content.split("\n").map((para, i) => (
                        <p key={i} className="mt-4">{para.trim()}</p>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Contact Box */}
                <div className="bg-[#0F172A] rounded-[40px] p-8 md:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-8 mt-12">
                   <div className="flex flex-col gap-4 text-center md:text-left">
                      <Text as="div" variant="heading-h5" weight="bold" color="inverse" className="tracking-tight">Need specific assets?</Text>
                      <Text variant="body-sm" weight="medium" color="inverse" className="opacity-70 max-w-md">
                        Contact our branding team for high-resolution formats and special usage permissions.
                      </Text>
                   </div>
                   <div className="flex flex-col gap-3 w-full md:w-auto">
                      <a href="mailto:press@trustcore.finance">
                        <Button variant="primary" size="nav" leftIcon={<Mail size={18} />} className="w-full">
                          press@trustcore.finance
                        </Button>
                      </a>
                      <a href="mailto:partnerships@trustcore.finance">
                        <Button variant="on-dark" size="nav" className="w-full border border-white/20">
                          partnerships@trustcore.finance
                        </Button>
                      </a>
                   </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
