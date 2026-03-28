import React from "react";
import Image from "next/image";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { SectionHeader } from "./ui/section-header";
import { Text } from "./ui/text";

const teamMembers = [
  {
    name: "Chau Quy Nguyen",
    title: "Chief Executive Officer",
    image: "/images/about/Chau.avif",
  },
  {
    name: "Michael Chen",
    title: "Chief Technology Officer",
    image: "/images/about/Michael.avif",
  },
  {
    name: "David Nguyen",
    title: "Chief Operating Officer",
    image: "/images/about/David.avif",
  },
  {
    name: "Sarah Lee",
    title: "Head of Product",
    image: "/images/about/Sarah.avif",
  },
];

export const ExecutiveTeam: React.FC = () => {
  return (
    <Section spacing="lg" bg="white">
      <Container>
        <SectionHeader
          title={
            <>
              Meet The <br />
              <span className="text-[#007AFF]">Executive Team</span>
            </>
          }
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-full aspect-square bg-[#F8FAFC] rounded-[24px] mb-6 overflow-hidden relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-[20px] font-bold text-[#0F172A]">
                  {member.name}
                </h4>
                <p className="text-[16px] font-medium text-[#626268]">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ExecutiveTeam;
