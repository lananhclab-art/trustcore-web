import React from "react";
import Image from "next/image";
import { Container } from "./ui/container";
import { Button } from "./ui/button";

export const JoinTeam: React.FC = () => {
  return (
    <section className="bg-white py-5xl lg:py-6xl">
      <Container size="wide">
        <div className="relative w-full h-[400px] lg:h-auto lg:aspect-[21/9] lg:min-h-[500px] overflow-hidden rounded-[24px]">
          {/* Background Image */}
          <Image
            src="/images/about/work.avif"
            alt="TrustCore team members collaborating"
            fill
            className="object-cover"
          />
          
          {/* Precise Gradient Overlay for Text Readability */}
          <div 
            className="absolute inset-0 z-10" 
            style={{ background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.7) 100%)' }}
          />
          
          {/* Content Layer */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 lg:px-20 text-white">
            <div className="max-w-[500px] flex flex-col gap-6 lg:gap-8">
              <h2 className="text-[40px] lg:text-[64px] font-bold leading-[1.1] tracking-tight">
                Work At <br />
                TrustCore
              </h2>
              <p className="text-body-lg font-medium text-white/90">
                Join a team that is building the future of finance together.
              </p>
              <div>
                <Button variant="primary" size="lg">
                  View Open Roles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default JoinTeam;
