import React from "react";
import { Container } from "./ui/container";

export const StrategicStatement = () => {
  return (
    <section className="bg-white py-[48px] md:py-24">
      <Container size="wide">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[24px] md:text-[32px] font-bold text-black leading-tight">
            We build financial infrastructure on a core foundation of{" "}
            <span className="text-text-brand">security</span>,{" "}
            <span className="text-text-brand">transparency</span>, and{" "}
            <span className="text-text-brand">user ownership.</span>

          </p>
        </div>
      </Container>
    </section>
  );
};

export default StrategicStatement;
