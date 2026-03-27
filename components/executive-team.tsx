import React from "react";
import { Container } from "./ui/container";

import Image from "next/image";

const teamMembers = [
  {
    name: "Chau Quy Nguyen",
    title: "Chief Executive Officer",
    image: "/images/about/Chau.avif"
  },
  {
    name: "Michael Chen",
    title: "Chief Technology Officer",
    image: "/images/about/Michael.avif"
  },
  {
    name: "David Nguyen",
    title: "Chief Operating Officer",
    image: "/images/about/David.avif"
  },
  {
    name: "Sarah Lee",
    title: "Head of Product",
    image: "/images/about/Sarah.avif"
  }
];

export const ExecutiveTeam: React.FC = () => {
  return (
    <section className="bg-white py-5xl lg:py-6xl">
      <Container size="wide">
        {/* Section Heading */}
        <div className="text-center mb-[60px] lg:mb-[80px]">
          <h2 className="text-[40px] lg:text-[64px] font-bold leading-[1.1] tracking-tight text-text-primary">
            Meet The <br />
            <span className="text-text-brand">Executive Team</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              {/* Headshot */}
              <div className="w-full aspect-square bg-[#F1F5F9] rounded-[24px] mb-6 overflow-hidden relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Member Info */}
              <div className="flex flex-col gap-1">
                <h3 className="text-[20px] font-bold text-text-primary leading-tight">
                  {member.name}
                </h3>
                <p className="text-text-secondary font-normal text-body-md">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ExecutiveTeam;
