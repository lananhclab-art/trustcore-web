"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { Text, H2 } from "./ui/text";

const infrastructureItems = [
  {
    id: "cloud",
    title: "Cloud Reliability",
    description: "Systems are deployed using reliable cloud environments",
    image: "/images/security/cloud.avif",
  },
  {
    id: "identity",
    title: "Identity Management",
    description: "Access is controlled through identity and permission management",
    image: "/images/security/identity.avif",
  },
  {
    id: "component",
    title: "Component Redundancy",
    description: "Redundancy is built into critical components to ensure availability",
    image: "/images/security/component.avif",
  },
  {
    id: "reviews",
    title: "Infrastructural Reviews",
    description: "Infrastructure is continuously reviewed and improved",
    image: "/images/security/infrastructural.avif",
  },
];

export const InfrastructureSection = () => {
  const [activeId, setActiveId] = useState(infrastructureItems[0].id);

  return (
    <Section spacing="lg" bg="white">
      <Container>
        {/* Header */}
        <div className="flex flex-col mb-12">
          <Text as="h1" variant="heading-h1" color="primary" weight="bold" className="mb-6">
            Infrastructure
          </Text>
          <Text variant="body-lg" weight="medium" color="secondary">
            TrustCore infrastructure is designed with scalability and resilience in mind.
          </Text>
        </div>

        {/* Tabs */}
        <div className="hidden md:flex flex-wrap gap-8 md:gap-12 mb-12">
          {infrastructureItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={cn(
                "transition-colors duration-300 relative pb-2",
                activeId === item.id ? "" : "hover:text-text-secondary"
              )}
            >
              <Text 
                variant="body-lg" 
                weight="bold" 
                color={activeId === item.id ? "primary" : "secondary"}
                className={cn(activeId !== item.id && "opacity-40")}
              >
                {item.title}
              </Text>
              {activeId === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                />
              )}
            </button>
          ))}
        </div>

        {/* Accordion/Gallery Grid (Desktop) & Scrollable List (Mobile) */}
        <div className="flex flex-row md:flex-row gap-4 h-auto md:h-[600px] overflow-x-auto md:overflow-hidden snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0">
          {infrastructureItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={cn(
                "relative h-[500px] md:h-full transition-all duration-700 ease-in-out cursor-pointer overflow-hidden rounded-[24px] flex-shrink-0 snap-start",
                "w-[85%] md:w-auto", // Mobile width vs Desktop auto (flex)
                activeId === item.id ? "md:flex-[4]" : "md:flex-[1]"
              )}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              {/* Overlay Gradient - On mobile we want it always visible to show text */}
              <div 
                className={cn(
                  "absolute inset-0 transition-opacity duration-700",
                  "opacity-100 md:opacity-0", // Mobile always visible, Desktop conditional
                  activeId === item.id && "md:opacity-100"
                )}
                style={{ background: "linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)" }}
              />

              {/* Content for current item */}
              <div className={cn(
                "absolute bottom-8 left-8 right-8 z-10",
                "flex md:hidden", // Mobile always visible
                activeId === item.id && "md:flex" // Desktop conditional
              )}>
                <Text variant="heading-h3" weight="bold" color="inverse" className="max-w-[280px] md:max-w-lg">
                  {item.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default InfrastructureSection;
