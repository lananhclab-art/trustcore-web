import Image from "next/image";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { Text } from "./ui/text";

export const ServicesSection = () => {
  const serviceItems = [
    {
      title: "High Availability",
      description: "Infrastructure is built to handle high availability and reliability",
    },
    {
      title: "Transmission Security",
      description: "Data is protected during transmission and storage",
    },
    {
      title: "Threat Reduction",
      description: "Systems are designed to reduce exposure to common attack vectors",
    },
  ];

  return (
    <Section spacing="lg" bg="white">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <Text as="h1" variant="heading-h1" color="primary" weight="bold" className="mb-6">
            Services
          </Text>
          <Text variant="body-lg" weight="medium" color="secondary">
            Our systems are designed to operate securely in distributed environments.
          </Text>
        </div>

        {/* Main Image */}
        <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-[24px] overflow-hidden mb-16 bg-black">
          <Image
            src="/images/security/services.avif"
            alt="Security Services"
            fill
            priority
            unoptimized
            className="object-cover"
          />
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {serviceItems.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <Text variant="body-lg" weight="bold" color="primary" className="tracking-[-0.5px]">
                {item.title}
              </Text>
              <Text variant="body-md" color="secondary" className="leading-[26px]">
                {item.description}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ServicesSection;
