import React from "react";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { Text } from "./ui/text";
import { Ruler, Search, Terminal, Coins } from "lucide-react";

const disciplines = [
  {
    title: "Engineers",
    icon: Ruler,
    description:
      "Our engineers design and build the core systems that power TrustCore. From blockchain architecture to backend infrastructure, every component is developed with a focus on performance, reliability, and security. We continuously evolve our systems to meet the demands of a rapidly changing technological landscape.",
  },
  {
    title: "Researchers",
    icon: Search,
    description:
      "Our research team explores new approaches in cryptography, protocol design, and decentralized systems. Their work strengthens the foundation of our technology, ensuring that TrustCore remains resilient, secure, and aligned with the latest advancements in the field.",
  },
  {
    title: "Builders",
    icon: Terminal,
    description:
      "Our builders transform complex systems into practical products. They focus on usability, product design, and seamless integration, ensuring that advanced financial technologies can be easily adopted by both individuals and businesses.",
  },
  {
    title: "Contributors",
    icon: Coins,
    description:
      "Our contributors work beyond internal systems to support the broader decentralized ecosystem. Through collaboration, knowledge sharing, and active participation, they help drive innovation and contribute to the long-term growth of the industry.",
  },
];

import { SectionHeader } from "./ui/section-header";

export const WhoWeAre: React.FC = () => {
  return (
    <Section spacing="lg" bg="white">
      <Container>
        {/* Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16 lg:mb-24">
          <SectionHeader
            title={<>Who <span className="text-[#007AFF]">We Are</span></>}
            align="left"
            spacing="none"
          />
          <div>
            <Text variant="body-lg" color="secondary" weight="medium">
              We are a global team of over 50 technologists, designers,
              cryptographers, and product leaders. Our teams operate across key
              disciplines that define how we build and scale decentralized
              financial infrastructure.
            </Text>
          </div>
        </div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4xl gap-y-4xl">
          {disciplines.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-lg">
              <div className="text-text-brand">
                <item.icon size={36} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-md">
                <Text variant="heading-h4" color="primary" weight="bold">
                  {item.title}
                </Text>
                <Text
                  variant="body-md"
                  color="secondary"
                  className="leading-relaxed"
                >
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

export default WhoWeAre;
