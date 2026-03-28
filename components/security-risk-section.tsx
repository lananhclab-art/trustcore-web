import React from "react";
import { Monitor, RefreshCw, ShieldCheck, FileText, ShieldAlert, FolderOpen } from "lucide-react";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { Text } from "./ui/text";

const riskItems = [
  {
    icon: <Monitor size={24} className="text-[#007AFF]" />,
    title: "Activity Monitoring",
    description: "Systems are continuously observed to identify unusual or suspicious behavior",
  },
  {
    icon: <RefreshCw size={24} className="text-[#007AFF]" />,
    title: "Anomaly Detection",
    description: "Automated alerts are triggered when irregular patterns are detected",
  },
  {
    icon: <ShieldCheck size={24} className="text-[#007AFF]" />,
    title: "Incident Response",
    description: "Dedicated teams handle incidents following established procedures",
  },
  {
    icon: <FileText size={24} className="text-[#007AFF]" />,
    title: "Risk Assessment",
    description: "Potential risks are regularly identified and evaluated",
  },
  {
    icon: <ShieldAlert size={24} className="text-[#007AFF]" />,
    title: "Threat Mitigation",
    description: "Systems are updated to address emerging vulnerabilities and threats",
  },
  {
    icon: <FolderOpen size={24} className="text-[#007AFF]" />,
    title: "Continuous Improvement",
    description: "Security practices are refined based on internal reviews and findings",
  },
];

export const SecurityRiskSection = () => {
  return (
    <Section spacing="lg" bg="white">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <Text as="h1" variant="heading-h1" color="primary" weight="bold" className="mb-6">
            Security & <br /> <span className="text-text-brand">Risk Management</span>
          </Text>
          <Text variant="body-lg" weight="medium" color="secondary">
            Proactive monitoring and risk management to protect systems from evolving threats.
          </Text>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {riskItems.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <div className="flex items-center">
                {item.icon}
              </div>
              <div className="flex flex-col gap-3">
                <Text variant="body-lg" weight="bold" color="primary" className="tracking-[-0.5px]">
                  {item.title}
                </Text>
                <Text variant="body-md" color="secondary" className="leading-[26px]">
                  {item.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default SecurityRiskSection;
