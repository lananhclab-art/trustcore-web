import React from "react";
import { Container } from "./ui/container";
import { Section } from "./ui/section";
import { Text } from "./ui/text";

export const StrategicStatement = () => {
  return (
    <Section spacing="sm" bg="white">
      <Container>
        <div className="text-center space-y-lg">
          <Text variant="heading-h5" as="h2" color="primary">
            We build financial infrastructure on a core foundation of{" "}
            <span className="text-text-brand">security</span>,{" "}
            <span className="text-text-brand">transparency</span>, and{" "}
            <span className="text-text-brand">user ownership.</span>
          </Text>
        </div>
      </Container>
    </Section>
  );
};

export default StrategicStatement;
