import Image from "next/image";
import { Container } from "./ui/container";
import { Section } from "./ui/section";
import { SectionHeader } from "./ui/section-header";
import { Text } from "./ui/text";

export const OurVision = () => {
  return (
    <Section spacing="lg" bg="white">
      <Container>
        {/* HEADER - SPLIT SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-3xl lg:mb-6xl">
          <SectionHeader
            title={<>Our <span className="text-text-brand">Vision</span></>}
            subtitle="A world where every individual and business has true financial autonomy."
            align="left"
            spacing="none"
          />

          <div className="w-full">
            <Text variant="heading-h4" as="h2" color="primary">
              TrustCore Technologies is building the infrastructure that{" "}
              <span className="text-text-brand">
                makes this future possible.
              </span>
            </Text>
          </div>
        </div>

        {/* VALUES - FEATURE / GRID SECTION */}
        <div className="mt-5xl lg:mt-6xl grid gap-lg md:gap-xl lg:grid-cols-3">
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
    </Section>
  )
}
export default OurVision;

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
    <div className="flex flex-col gap-m">
      {/* ICON */}
      <div className="w-[48px] h-[48px] relative">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-contain"
        />
      </div>

      {/* TEXT */}
      <div>
        <Text variant="heading-h5" as="h3" color="primary">
          {title}
        </Text>

        <Text variant="body-md" color="secondary" className="mt-sm">
          {desc}
        </Text>
      </div>
    </div>
  )
}
