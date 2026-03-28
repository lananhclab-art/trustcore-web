"use client";

import React from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Text } from "@/components/ui/text";
import { SecuritySlider } from "@/components/security-slider";
import Image from "next/image";
import { InfrastructureSection } from "@/components/infrastructure-section";
import { PrivacySection } from "@/components/privacy-section";
import { ServicesSection } from "@/components/services-section";
import { SecureDevelopmentSection } from "@/components/secure-development-section";
import { SecurityRiskSection } from "@/components/security-risk-section";

import { CheckCircle2 } from "lucide-react";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden">
      <Header onDark={false} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Section spacing="hero" bg="white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              <div className="flex flex-col">
                <Text as="div" variant="heading-h1" color="primary" weight="bold">
                  Security at <br />
                  <span className="text-[#007AFF]">TrustCore</span>
                </Text>
              </div>

              <div className="flex flex-col gap-8 lg:pt-4">
                <Text variant="body-lg" weight="medium" color="secondary" className="text-[20px] leading-relaxed">
                  At TrustCore, security is fundamental to how we design and operate our systems. 
                  We build infrastructure for decentralized finance, where reliability, integrity, 
                  and protection of assets are critical.
                </Text>
                <Text variant="body-lg" weight="medium" color="secondary" className="text-[20px] leading-relaxed">
                  Our approach focuses on secure architecture, continuous monitoring, and 
                  disciplined engineering practices to ensure systems remain resilient and dependable.
                </Text>
              </div>
            </div>
          </Container>
        </Section>

        {/* General Security Section */}
        <Section spacing="lg" bg="white">
          <Container>
            <SectionHeader
              title={<>General <span className="text-[#007AFF]">Security</span></>}
              subtitle="Security is embedded into every layer of our infrastructure and development process."
              align="center"
              spacing="lg"
            />

            {/* Image Wrap */}
            <div className="relative w-full h-[400px] lg:h-[587px] rounded-[32px] overflow-hidden mt-xl">
              <Image 
                src="/images/security/security.avif" 
                alt="Security team collaborating"
                fill
                className="object-cover"
                sizes="100vw"
                priority
                unoptimized
              />
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-4xl">
              {[
                "Systems are designed with security-first architecture",
                "Access to critical systems is restricted and controlled",
                "Sensitive operations are protected through layered safeguards",
                "We continuously review and improve our internal security practices"
              ].map((item, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <CheckCircle2 size={24} className="text-[#007AFF] shrink-0" />
                  <Text variant="body-md" color="secondary" className="leading-relaxed">
                    {item}
                  </Text>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Our Team Slider Section */}
        <Section spacing="lg" bg="white">
          <Container>
            <SectionHeader
              title="Our Team"
              subtitle="Security is a shared responsibility across the organization."
              align="center"
              spacing="md"
            />
            <SecuritySlider />
          </Container>
        </Section>

        <PrivacySection />
        <ServicesSection />
        <InfrastructureSection />
        <SecureDevelopmentSection />
        <SecurityRiskSection />
      </main>

      <Footer />
    </div>
  );
}
