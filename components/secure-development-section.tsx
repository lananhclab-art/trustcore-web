import React from "react";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { Text } from "./ui/text";

const developmentItems = [
  {
    label: "Pre-deployment Review",
    description: "Code is reviewed before deployment",
  },
  {
    label: "Vulnerability Evaluation",
    description: "Dependencies are evaluated to reduce vulnerabilities",
  },
  {
    label: "Stability Testing",
    description: "Systems are tested to ensure stability and reliability",
  },
  {
    label: "Release Integrity",
    description: "Security considerations are part of every release",
  },
];

export const SecureDevelopmentSection = () => {
  return (
    <Section spacing="lg" bg="white">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <Text as="h1" variant="heading-h1" color="primary" weight="bold" className="mb-6">
            Secure <span className="text-[#007AFF]">Development</span>
          </Text>
          <Text variant="body-lg" weight="medium" color="secondary">
            Security is integrated into our development lifecycle.
          </Text>
        </div>

        {/* List */}
        <div className="w-full flex flex-col">
          {developmentItems.map((item, idx) => (
            <div 
              key={idx} 
              className="grid grid-cols-1 md:grid-cols-2 py-10 border-t border-gray-100 items-center last:border-b"
            >
              <Text variant="body-lg" weight="bold" color="primary" className="tracking-[-0.5px]">
                {item.label}
              </Text>
              <Text variant="body-lg" weight="medium" color="secondary" className="mt-2 md:mt-0">
                {item.description}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default SecureDevelopmentSection;
