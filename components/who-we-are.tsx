import React from "react";
import { Container } from "./ui/container";
import { Ruler, Search, Terminal, Coins } from "lucide-react";

const disciplines = [
  {
    title: "Engineers",
    icon: Ruler,
    description: "Our engineers design and build the core systems that power TrustCore. From blockchain architecture to backend infrastructure, every component is developed with a focus on performance, reliability, and security. We continuously evolve our systems to meet the demands of a rapidly changing technological landscape."
  },
  {
    title: "Researchers",
    icon: Search,
    description: "Our research team explores new approaches in cryptography, protocol design, and decentralized systems. Their work strengthens the foundation of our technology, ensuring that TrustCore remains resilient, secure, and aligned with the latest advancements in the field."
  },
  {
    title: "Builders",
    icon: Terminal,
    description: "Our builders transform complex systems into practical products. They focus on usability, product design, and seamless integration, ensuring that advanced financial technologies can be easily adopted by both individuals and businesses."
  },
  {
    title: "Contributors",
    icon: Coins,
    description: "Our contributors work beyond internal systems to support the broader decentralized ecosystem. Through collaboration, knowledge sharing, and active participation, they help drive innovation and contribute to the long-term growth of the industry."
  }
];

export const WhoWeAre: React.FC = () => {
  return (
    <section className="bg-white py-5xl lg:py-6xl">
      <Container size="wide">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3xl lg:gap-[80px] mb-5xl lg:mb-[80px]">
          <div>
            <h2 className="text-[48px] lg:text-[64px] font-bold leading-tight tracking-tight text-text-primary">
              Who <span className="text-text-brand">We Are</span>
            </h2>
          </div>
          <div className="flex flex-col gap-[36px]">
            <p className="text-body-lg font-medium text-text-secondary leading-relaxed">
              We are a global team of over 50 technologists, designers, cryptographers, and product leaders. Our teams operate across key disciplines that define how we build and scale decentralized financial infrastructure.
            </p>
          </div>
        </div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[80px] gap-y-[64px]">
          {disciplines.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <div className="w-[32px] h-[32px] text-text-brand">
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-heading-h4 font-bold text-text-primary">
                  {item.title}
                </h4>
                <p className="text-body-md text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhoWeAre;
