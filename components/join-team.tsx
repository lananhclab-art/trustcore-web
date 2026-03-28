import React from "react";
import Image from "next/image";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { Text } from "./ui/text";
import { Button } from "./ui/button";

export const JoinTeam: React.FC = () => {
  return (
    <Section spacing="lg" bg="white">
      <Container>
        <div className="relative w-full h-[474px] md:min-h-[500px] lg:aspect-[21/9] overflow-hidden rounded-[24px] bg-black">
          <Image
            src="/images/about/work.avif"
            alt="TrustCore team members collaborating"
            fill
            className="object-cover"
            sizes="(max-width: 1240px) 100vw, 1240px"
          />

          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.7) 100%)",
            }}
          />

          <div className="absolute inset-0 z-20 flex flex-col justify-center px-[20px] md:px-[48px] text-white">
            <div className="max-w-xl space-y-6">
              <Text
                variant="heading-h1"
                as="h1"
                color="inverse"
                className="whitespace-pre-line"
              >
                Work At {"\n"}
                TrustCore
              </Text>
              <Text
                variant="body-lg"
                weight="medium"
                color="inverse"
                className="opacity-90 max-w-full leading-[28px]"
              >
                Join a team that is building the future of finance together.
              </Text>
              <div className="pt-4 flex justify-center md:justify-start">
                <Button variant="primary" size="nav" className="font-bold">
                  View Open Roles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default JoinTeam;
