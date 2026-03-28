"use client";

import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { Text } from "./ui/text";

export const PrivacySection = () => {
  const [animations, setAnimations] = useState<{
    encrypting: any;
    data: any;
    bundling: any;
  }>({
    encrypting: null,
    data: null,
    bundling: null,
  });

  useEffect(() => {
    Promise.all([
      fetch("/images/security/encrypting.json").then((res) => res.json()),
      fetch("/images/security/data.json").then((res) => res.json()),
      fetch("/images/security/bundling.json").then((res) => res.json()),
    ]).then(([encrypting, data, bundling]) => {
      setAnimations({ encrypting, data, bundling });
    });
  }, []);

  const cards = [
    {
      title: "Strict Access",
      description: "Data is handled with strict access controls",
      animation: animations.encrypting,
    },
    {
      title: "Data Protection",
      description: "Sensitive information is protected during processing and storage",
      animation: animations.data,
    },
    {
      title: "Privacy Integration",
      description: "Privacy considerations are integrated into system design",
      animation: animations.bundling,
    },
  ];

  return (
    <Section spacing="lg" bg="white">
      <Container>
        {/* Header */}
        <div className="flex flex-col mb-12">
          <Text as="h1" variant="heading-h1" color="primary" weight="bold" className="mb-6">
            Privacy & <span className="text-text-brand">Data Protection</span>
          </Text>
          <Text variant="body-lg" weight="medium" color="secondary">
            Privacy is a core consideration in the development and operation of TrustCore systems.
          </Text>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-[24px] border border-[#E5E5EA] bg-white overflow-hidden pb-8"
            >
              <div className="w-full h-[280px] lg:h-[320px] flex items-center justify-center p-8">
                {card.animation ? (
                  <Lottie
                    animationData={card.animation}
                    loop={true}
                    className="w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full bg-[#F5F5F7] animate-pulse rounded-[16px]" />
                )}
              </div>
              <div className="px-8 flex flex-col gap-2">
                <Text variant="body-lg" weight="bold" color="primary">
                  {card.title}
                </Text>
                <Text variant="body-md" color="secondary">
                  {card.description}
                </Text>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-left">
          <Text variant="body-md" color="secondary">
            For more information, please refer to our{" "}
            <Link href="/legal/privacy" className="text-[#007AFF] hover:underline">
              Privacy Policy.
            </Link>
          </Text>
        </div>
      </Container>
    </Section>
  );
};

export default PrivacySection;
