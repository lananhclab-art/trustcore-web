import React from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { SectionHeader } from "@/components/ui/section-header";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: `TrustCore Technologies, LLC (“TrustCore,” “we,” “us,” or “our”) is a financial technology company that provides blockchain-based software, infrastructure, and related services to users, developers, and businesses globally. Our offerings include, but are not limited to, TrustCore Exchange, TrustCore Payment Gateway, TrustCore DeFi Platform, and related applications, websites, and services (collectively, the “Services”).

We respect your privacy and are committed to protecting your personal information in accordance with applicable data protection and privacy laws, including but not limited to the General Data Protection Regulation (GDPR), the California Consumer Privacy Act as amended by the California Privacy Rights Act (CCPA/CPRA), and other applicable state and national privacy laws. This Privacy Policy (“Privacy Policy”) explains how we collect, use, disclose, and otherwise process personal information when you access or use the Services.

This Privacy Policy applies to our website located at https://trustcore.finance/ and any associated subdomains, as well as any Services where this Privacy Policy is posted or referenced. When you leave our Services, this Privacy Policy does not apply. Any third-party websites, applications, or services you access are governed by their own privacy policies and terms.

Certain TrustCore products may be subject to separate privacy notices that describe product-specific data practices. Where a separate privacy notice applies, that notice will govern the collection and use of personal information for that specific product or service.

By accessing or using the Services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with this Privacy Policy, you should not access or use the Services.`,
  },
  {
    id: "relationship",
    title: "1. Our Relationship With You",
    content: `For the purposes of applicable data protection laws, TrustCore acts as the data controller, the entity responsible for determining the purposes and means of processing personal information in connection with the Services.

You may use the Services as an individual or on behalf of an organization. Where you use the Services on behalf of an organization, that organization may control or administer your access to the Services and may have the ability to access or manage associated data. In such cases, your use of the Services may also be subject to your organization’s internal policies.

Your use of the Services is also governed by our Terms of Service, which operate alongside this Privacy Policy.

If you have any questions about this Privacy Policy or wish to exercise any of your data protection rights, you may contact us using the information provided in Section 13 below.`,
  },
  {
    id: "collection",
    title: "2. Personal Information We Collect",
    content: `We collect personal information to provide, operate, and improve the Services. The types of personal information we collect depend on how you interact with the Services and may include information you provide directly, information collected automatically, and information obtained from third parties.

When you interact with the Services, we may collect personal information that you voluntarily provide. This may include account registration information such as your name, email address, or other contact details where required for specific features. You may also provide personal information when communicating with us, including through support requests, inquiries, or feedback submissions. In such cases, we process the information necessary to respond to your request and provide support.

In certain circumstances, including when using payment-related features, you may provide financial or billing information. Such information is typically processed by third-party payment service providers, and their respective privacy policies will apply to the processing of that information.

Where the Services involve blockchain functionality, we may process information such as wallet addresses and transaction data as part of the operation of decentralized networks. This information is necessary to enable certain features of the Services. Users should be aware that blockchain transactions are inherently public and may be accessible to third parties independently of TrustCore.

We also collect certain information automatically when you access or use the Services. This may include technical and usage information such as your IP address, device type, browser type, operating system, timestamps, interaction data, and diagnostic information. We use this information to ensure the proper functioning, security, and performance of the Services.

We may also derive general location information from your IP address, such as your approximate geographic region. This information may be used for purposes including improving performance, ensuring compliance with legal obligations, and preventing unauthorized access.

In addition, we use cookies and similar tracking technologies to collect information about how you interact with the Services. These technologies help us operate the Services, analyze usage, and improve functionality. Where required by law, we obtain your consent before using non-essential cookies.

We may also receive personal information from third-party sources, including analytics providers, marketing partners, and payment service providers. This information may be combined with other information we collect to provide and improve the Services.`,
  },
  {
    id: "usage",
    title: "3. How We Use Personal Information",
    content: `We process personal information for purposes that are necessary to provide and maintain the Services, as well as for legitimate business and legal purposes. For each category of use below, we identify the legal basis on which we rely where required by applicable law.`,
    table: {
      headers: ["Purpose of Processing", "Legal Basis (GDPR Art. 6)"],
      rows: [
        ["Operate and maintain the Services", "Performance of a contract (Art. 6(1)(b))"],
        ["Create and manage user accounts", "Performance of a contract (Art. 6(1)(b))"],
        ["Process transactions", "Performance of a contract (Art. 6(1)(b))"],
        ["Respond to inquiries / customer support", "Legitimate interests (Art. 6(1)(f))"],
        ["Security, fraud prevention", "Legitimate interests (Art. 6(1)(f))"],
        ["Marketing communications", "Consent (Art. 6(1)(a))"],
        ["Legal / regulatory compliance", "Legal obligation (Art. 6(1)(c))"],
        ["Analytics and product improvement", "Legitimate interests (Art. 6(1)(f))"],
        ["AI-assisted operational functions", "Legitimate interests (Art. 6(1)(f))"],
      ],
    },
    footerContent: `We use personal information to operate, maintain, and improve the Services, including creating and managing user accounts where applicable and processing transactions and requests initiated by users. We also use personal information to personalize user experience, including adapting content and optimizing system performance based on usage patterns and regional considerations.

Personal information is used to communicate with users, including responding to inquiries, providing customer support, and delivering administrative or service-related communications. Where permitted by applicable law and subject to user preferences, we may also use personal information to provide updates, product information, or marketing communications.

We use personal information to ensure the security and integrity of the Services. This includes detecting, preventing, and responding to fraud, abuse, and unauthorized access, as well as enforcing our Terms of Service and protecting our systems and users.

We may also process personal information to comply with applicable legal and regulatory obligations, including obligations related to financial services, sanctions compliance, and lawful requests from authorities.

In certain cases, we may aggregate or de-identify personal information so that it can no longer be associated with an identifiable individual. Such information may be used for analytics, research, and product development purposes.

We may also use automated or AI-assisted tools to support certain operational functions, including customer support and data analysis. These tools are used in a manner consistent with applicable laws and with appropriate safeguards. Where any such automated processing produces decisions that have a legal or similarly significant effect on you, you have the right to request human review of that decision. Please contact us using the information in Section 13 to make such a request.`,
  },
  {
    id: "sharing",
    title: "4. How We Share Personal Information",
    content: `We do not sell your personal information, and we do not share your personal information for cross-context behavioral advertising purposes as defined under the CCPA/CPRA. However, we may disclose personal information to third parties in certain circumstances, as described below.

We may share personal information with service providers that perform services on our behalf. These service providers may include providers of cloud infrastructure, data hosting, analytics, payment processing, customer support, and security services. These parties are authorized to process personal information only as necessary to provide services to us and are contractually obligated to protect the confidentiality and security of such information.

We may also share personal information with third-party payment providers in connection with fiat on-ramp or off-ramp services. In such cases, personal information may be collected and processed directly by those providers in accordance with their own privacy policies. TrustCore does not control and is not responsible for the data practices of such third parties.

Where you choose to interact with third-party applications, decentralized applications (dApps), or other external services through our Services, your information may be shared with those third parties at your direction. Such interactions are governed by the privacy policies of those third parties, and TrustCore is not responsible for their data handling practices.

We may disclose personal information where required to do so by law or in response to valid legal requests, including subpoenas, court orders, or requests from regulatory or law enforcement authorities. We may also disclose personal information where we believe such disclosure is necessary to protect our rights, enforce our agreements, investigate potential violations, or prevent fraud, abuse, or security threats.

In the event of a merger, acquisition, financing, reorganization, bankruptcy, or sale of assets, personal information may be transferred as part of the transaction, subject to appropriate safeguards and applicable legal requirements.`,
  },
  {
    id: "transfers",
    title: "5. International Data Transfers",
    content: `TrustCore is based in the United States and operates globally. As a result, personal information may be transferred to, stored in, or processed in jurisdictions outside of your country of residence, including jurisdictions that may not provide the same level of data protection as your home country.

Where we transfer personal information from the European Economic Area (EEA), United Kingdom, or Switzerland to a country that is not recognized as providing an adequate level of protection, we rely on appropriate safeguards such as Standard Contractual Clauses (SCCs) approved by the European Commission, or other lawful transfer mechanisms as permitted by applicable law.

By using the Services, you acknowledge that your personal information may be transferred to and processed in the United States and other jurisdictions where we or our service providers operate.`,
  },
  {
    id: "retention",
    title: "6. Data Retention",
    content: `We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, including to provide the Services, comply with legal obligations, resolve disputes, and enforce our agreements.

The table below sets out our standard retention periods by data category. These periods may be extended where required by law or shortened where personal information is no longer necessary for the stated purpose.`,
    table: {
      headers: ["Data Category", "Retention Period", "Legal Basis / Reason"],
      rows: [
        ["Account information", "Duration of account + 3 years", "Contractual necessity; legitimate interests"],
        ["Financial / transaction records", "7 years", "Legal obligation (tax, AML/KYC regulations)"],
        ["Communications / support data", "3 years from last interaction", "Legitimate interests (dispute resolution)"],
        ["Technical / usage logs", "13 months", "Legitimate interests (security, performance)"],
        ["Marketing preferences", "Until opt-out + 1 year", "Consent"],
        ["Blockchain / wallet data", "Indefinite (public ledger)", "N/A — public by nature of blockchain"],
        ["KYC / identity verification", "5 years post-relationship end", "Legal obligation (AML/CFT laws)"],
      ],
    },
    footerContent: `In certain circumstances, we may retain personal information for longer periods where required by law, including for regulatory, tax, accounting, or compliance purposes. Where personal information is no longer required, we will take reasonable steps to delete, anonymize, or securely dispose of it.`,
  },
  {
    id: "security",
    title: "7. Security",
    content: `We implement reasonable administrative, technical, and organizational measures designed to protect personal information from unauthorized access, use, disclosure, alteration, or destruction.

These measures include, where appropriate, the use of encryption, access controls, network security protections, and monitoring systems designed to detect and prevent unauthorized activity.

However, no method of transmission over the internet or method of electronic storage is completely secure. While we strive to protect personal information, we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of any credentials associated with your use of the Services.`,
  },
  {
    id: "rights",
    title: "8. Your Rights and Choices",
    content: `Depending on your location and applicable law, you may have certain rights with respect to your personal information. These rights are described by jurisdiction below.

**8.1. Rights for EU/EEA and UK Residents (GDPR / UK GDPR)**
If you are located in the European Economic Area or the United Kingdom, you have the following rights under the GDPR or UK GDPR:
• Right of Access: You may request a copy of the personal information we hold about you.
• Right to Rectification: You may request correction of inaccurate or incomplete data.
• Right to Erasure (‘Right to be Forgotten’): You may request deletion of your personal information, subject to legal limitations.
• Right to Restrict Processing: You may request that we limit how we use your data in certain circumstances.
• Right to Data Portability: You may request your data in a structured, machine-readable format.
• Right to Object: You may object to processing based on legitimate interests or for direct marketing.
• Rights Related to Automated Decision-Making: You have the right not to be subject to solely automated decisions that significantly affect you, and to request human review.

To exercise any of these rights, please contact us at contact@trustcore.finance. We will respond within 30 days of receiving your verified request. You also have the right to lodge a complaint with your local data protection authority (e.g., your national supervisory authority within the EEA, or the ICO in the UK).

**8.2. Rights for California Residents (CCPA/CPRA)**
If you are a California resident, you have the following rights under the CCPA/CPRA:
• Right to Know: You may request disclosure of the categories and specific pieces of personal information we have collected about you, as well as how it is used and shared.
• Right to Delete: You may request deletion of personal information we have collected, subject to certain exceptions.
• Right to Correct: You may request correction of inaccurate personal information.
• Right to Opt-Out of Sale or Sharing: We do not sell or share personal information for cross-context behavioral advertising. No opt-out mechanism is required because we do not engage in these activities.
• Right to Limit Use of Sensitive Personal Information: Where we process sensitive personal information, we only do so to the extent necessary for permitted purposes.
• Right to Non-Discrimination: We will not discriminate against you for exercising any of your CCPA/CPRA rights.

To submit a California privacy request, please contact us at contact@trustcore.finance or through the contact details in Section 13. We will respond within 45 days, with a possible one-time extension of an additional 45 days where reasonably necessary.

**8.3. Other Jurisdictions**
Users in other jurisdictions may have similar rights under applicable local law. To the extent you have rights under your local privacy law, you may contact us to exercise those rights. We will respond in accordance with applicable legal requirements.

Where we process personal information based on consent, you may withdraw that consent at any time without affecting the lawfulness of processing conducted prior to such withdrawal.`,
  },
  {
    id: "cookies",
    title: "9. Cookies and Tracking Technologies",
    content: `We use cookies and similar tracking technologies to collect and store information about your interactions with the Services.

Cookies are small data files placed on your device that enable us to provide functionality, analyze usage, improve performance, and, where permitted, support marketing activities.

We may use both session cookies, which expire when you close your browser, and persistent cookies, which remain on your device for a specified period or until deleted.

You can control or disable cookies through your browser settings. However, please note that disabling cookies may affect the functionality of certain features of the Services.

Where required by law, we will obtain your consent before placing non-essential cookies on your device.

We use third-party analytics tools, including Google Analytics and HubSpot, to better understand how users interact with the Services. These providers may use cookies and similar technologies to collect information about your use of the Services and other websites. You can opt out of Google Analytics data collection by using the Google Analytics Opt-out Browser Add-on available at https://tools.google.com/dlpage/gaoptout. You can manage your HubSpot cookie preferences through our cookie consent banner or by contacting us directly.`,
  },
  {
    id: "links",
    title: "10. Third-Party Links and Services",
    content: `The Services may contain links to third-party websites, applications, or services that are not owned or controlled by TrustCore. This Privacy Policy does not apply to such third-party services.

If you access third-party services through our platform, any personal information you provide to those services will be subject to their respective privacy policies and terms. TrustCore does not control and is not responsible for the privacy practices, content, or security of any third-party services.

We encourage you to review the privacy policies of any third-party services you interact with before providing your personal information.`,
  },
  {
    id: "children",
    title: "11. Children’s Privacy",
    content: `The Services are not intended for individuals under the age of 13 in the United States, under the age of 16 in the European Economic Area, or under such other age as required by applicable law in your jurisdiction. We do not knowingly collect personal information from children.

If we become aware that personal information has been collected from a child without appropriate authorization, we will take reasonable steps to delete such information in accordance with applicable law.

If you believe that a child has provided personal information through the Services, please contact us using the contact information provided below.`,
  },
  {
    id: "changes",
    title: "12. Changes to This Privacy Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors.

When we make changes, we will revise the “Last Updated” date at the top of this Privacy Policy. In some cases, we may also provide additional notice, such as by posting a notice on our website or notifying users through the Services.

Your continued use of the Services after any updates to this Privacy Policy constitutes your acceptance of the revised Privacy Policy.`,
  },
  {
    id: "contact",
    title: "13. Contacting Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, you may contact us at contact@trustcore.finance`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden">
      <Header onDark={false} />

      <main className="flex-grow">
        {/* Page Header */}
        <Section spacing="hero" bg="white" className="border-b border-[#E8EDF2]">
          <Container>
            <div className="flex flex-col gap-4">
              <Text variant="heading-h5" weight="bold" color="primary">
                Privacy Policy
              </Text>
              <Text variant="body-sm" weight="medium" color="secondary">
                Effective: 25 March 2026 · Date of last revision: 26 March 2026
              </Text>
            </div>

            {/* Download link */}
            <div className="mt-12">
              <a
                href="/images/privacy/TRUSTCORE TECHNOLOGIES LLC..pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#F8FAFC] border border-[#E8EDF2] text-body-md font-bold text-[#007AFF] hover:bg-[#007AFF] hover:text-white hover:border-[#007AFF] transition-all group"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download PDF Version
              </a>
            </div>
          </Container>
        </Section>

        {/* Content */}
        <Section spacing="lg" bg="white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-24 items-start">
              {/* Sticky Table of Contents */}
              <nav className="hidden lg:flex flex-col gap-3 sticky top-[120px] p-8 bg-[#F8FAFC] rounded-3xl border border-[#E8EDF2]">
                <p className="text-body-sm font-bold text-[#94A3B8] tracking-[1.5px] uppercase mb-4 px-2">
                  Table of Contents
                </p>
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="text-body-sm font-semibold text-[#626268] hover:text-[#007AFF] hover:translate-x-1 transition-all py-1.5 px-2 rounded-lg hover:bg-white"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>

              {/* Policy Content */}
              <div className="flex flex-col gap-16">
                {sections.map((section: any) => (
                  <div key={section.id} id={section.id} className="flex flex-col gap-3 scroll-mt-[140px]">
                    <Text as="div" variant="heading-h5" weight="bold" color="primary" className="leading-tight tracking-tight">
                      {section.title}
                    </Text>
                    <div className="text-body-sm font-medium text-[#626268] leading-[24px] whitespace-pre-line">
                      {section.content.split("\n").map((para: string, i: number) => {
                        if (para.startsWith("**") && para.endsWith("**")) {
                          return (
                            <p key={i} className="font-bold text-[#0F172A] mt-6 mb-2">
                              {para.replace(/\*\*/g, "")}
                            </p>
                          );
                        }
                        if (para.startsWith("• ")) {
                          return (
                            <p key={i} className="flex gap-3 mt-2 pl-2 text-[#626268]">
                              <span className="text-[#007AFF] font-bold flex-shrink-0">•</span>
                              <span>{para.slice(2)}</span>
                            </p>
                          );
                        }
                        if (para.trim() === "") return <div key={i} className="h-4" />;
                        
                        const parts = para.split(/(\*\*[^*]+\*\*)/g);
                        return (
                          <p key={i} className="mt-2 text-[#626268]">
                            {parts.map((part, j) =>
                              part.startsWith("**") && part.endsWith("**") ? (
                                <strong key={j} className="font-bold text-[#0F172A]">
                                  {part.replace(/\*\*/g, "")}
                                </strong>
                              ) : (
                                part
                              )
                            )}
                          </p>
                        );
                      })}
                    </div>

                    {/* Table Rendering */}
                    {section.table && (
                      <div className="mt-8 overflow-hidden border border-[#E8EDF2] rounded-3xl shadow-sm bg-white">
                        <table className="w-full border-collapse text-left text-[14px]">
                          <thead>
                            <tr className="bg-[#F8FAFC]">
                              {section.table.headers.map((header: string, i: number) => (
                                <th
                                  key={i}
                                  className="text-body-sm py-6 px-8 font-bold text-[#0F172A] border-b border-[#E8EDF2] whitespace-nowrap tracking-tight"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row: string[], i: number) => (
                              <tr
                                key={i}
                                className="group hover:bg-[#F8FAFC]/50 transition-colors"
                              >
                                {row.map((cell, j) => (
                                  <td
                                    key={j}
                                    className={`text-body-sm py-6 px-8 text-[#626268] font-medium border-b border-[#E8EDF2] group-last:border-none leading-relaxed ${
                                      j === 1 || j === 2 ? "min-w-[200px]" : "min-w-[150px]"
                                    }`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {section.footerContent && (
                      <div className="text-body-sm font-medium text-[#626268] leading-[24px] whitespace-pre-line mt-6">
                        {section.footerContent.split("\n").map((para: string, i: number) => (
                          <p key={i} className="mt-2">{para.trim()}</p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer hideCTA={true} />
    </div>
  );
}
