import React from "react";
import { Container } from "./ui/container";

export default function VisionSection() {
  return (
    <section className="py-5xl lg:py-6xl bg-white w-full">
      <Container size="wide">
        
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[40px] lg:gap-12">
          
          {/* LEFT */}
          <div className="max-w-[451px]">
            <h1 className="text-[40px] leading-[48px] md:text-[56px] md:leading-[68px] font-bold tracking-[-0.5px] text-[#0F172A]">
              Our <span className="text-[#007AFF]">Vision</span>
            </h1>

            <p className="mt-4 text-body-lg font-medium text-text-secondary">
              A world where every individual and business has true financial autonomy.
            </p>
          </div>

          {/* RIGHT */}
          <h4 className="max-w-[516px] text-[20px] leading-[28px] md:text-[24px] md:leading-[32px] font-bold tracking-[-0.6px] text-[#14141E]">
            TrustCore Technologies is building the infrastructure that{" "}
            <span className="text-[#007AFF]">
              makes this future possible.
            </span>
          </h4>
        </div>

        {/* VALUES */}
        <div className="mt-[40px] lg:mt-[100px] grid grid-cols-1 md:grid-cols-3 gap-[40px] lg:gap-[64px]">
          
          <ValueCard
            icon="/images/our-vison/trust.svg"
            title="Trust"
            desc="Security and compliance come first in everything we develop."
          />

          <ValueCard
            icon="/images/our-vison/user-centric.svg"
            title="User-Centric"
            desc="Simple, seamless experiences built for real human needs and accessibility."
          />

          <ValueCard
            icon="/images/our-vison/innovation.svg"
            title="Innovation"
            desc="Advancing technology to shape the future of global finance."
          />

        </div>
      </Container>
    </section>
  )
}

function ValueCard({
  icon,
  title,
  desc,
}: {
  icon: string
  title: string
  desc: string
}) {
  return (
    <div className="flex flex-col gap-5">
      
      {/* ICON */}
      <img
        src={icon}
        alt={title}
        className="w-[48px] h-[48px] object-contain"
      />

      {/* TEXT */}
      <div>
        <h4 className="text-[20px] leading-[28px] md:text-[24px] md:leading-[32px] font-bold tracking-[-0.6px] text-[#0F172A]">
          {title}
        </h4>

        <p className="mt-3 text-body-md font-normal text-text-secondary">
          {desc}
        </p>
      </div>

    </div>
  )
}