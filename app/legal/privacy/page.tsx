import React from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: `TrustCore Technologies LLC ("TrustCore", "we", "us", or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our products and services, or otherwise interact with us.

By accessing or using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access our services.`,
  },
  {
    id: "information-collected",
    title: "2. Information We Collect",
    content: `We may collect several types of information from and about users of our services, including:

**Personal Identification Information:** Name, email address, phone number, company name, job title, and other information you provide when contacting us or using our services.

**Technical Data:** IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our website.

**Usage Data:** Information about how you use our website and services, including the pages you visit, links you click, and features you use.

**Communications Data:** Records of your correspondence with us, including emails, chat logs, and support tickets.

**Financial Information:** When you engage our advisory or product services, we may collect financial information necessary to provide those services, subject to applicable regulations.`,
  },
  {
    id: "use-of-information",
    title: "3. How We Use Personal Information",
    content: "We process personal information for purposes that are necessary to provide and maintain the Services, as well as for legitimate business and legal purposes. For each category of use below, we identify the legal basis on which we rely where required by applicable law.",
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
  },
  {
    id: "information-sharing",
    title: "4. Information Sharing and Disclosure",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:

**Service Providers:** We may share your information with third-party vendors and service providers that perform services on our behalf, such as cloud hosting, data analytics, customer support, and marketing services. These parties are bound by contractual obligations to keep your information confidential.

**Business Partners:** With your consent, we may share information with our business partners to offer you certain products, services, or promotions.

**Legal Requirements:** We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).

**Business Transfers:** In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company, your information may be transferred.

**Protection of Rights:** We may disclose information where we believe disclosure is necessary to protect the rights, property, or safety of TrustCore, our customers, or others.`,
  },
  {
    id: "data-security",
    title: "5. Data Security",
    content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

• Encryption of data in transit and at rest using industry-standard protocols
• Access controls and authentication mechanisms
• Regular security assessments and penetration testing
• Employee training on data protection and security practices
• Incident response procedures

However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.`,
  },
  {
    id: "data-retention",
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
    footer: "In certain circumstances, we may retain personal information for longer periods where required by law, including for regulatory, tax, accounting, or compliance purposes.",
  },
  {
    id: "your-rights",
    title: "7. Your Rights and Choices",
    content: `Depending on your location and applicable law, you may have the following rights with respect to your personal information:

**Access:** The right to request a copy of the personal information we hold about you.

**Correction:** The right to request that we correct any inaccurate or incomplete personal information.

**Deletion:** The right to request that we delete your personal information, subject to certain exceptions.

**Objection:** The right to object to our processing of your personal information in certain circumstances.

**Restriction:** The right to request that we restrict the processing of your personal information.

**Data Portability:** The right to receive your personal information in a structured, commonly used, and machine-readable format.

**Withdrawal of Consent:** Where processing is based on your consent, the right to withdraw that consent at any time.

To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.`,
  },
  {
    id: "cookies",
    title: "8. Cookies and Tracking Technologies",
    content: `We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files placed on your device that help us understand how you use our services.

**Types of Cookies We Use:**

• **Essential Cookies:** Required for the website to function properly and cannot be disabled.
• **Analytics Cookies:** Help us understand how visitors interact with our website by collecting and reporting information anonymously.
• **Functional Cookies:** Enable enhanced functionality and personalization.
• **Marketing Cookies:** Used to track visitors across websites to display relevant advertisements.

You can control cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our website.`,
  },
  {
    id: "international-transfers",
    title: "9. International Data Transfers",
    content: `TrustCore Technologies LLC is based in the United States. If you are accessing our services from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States and other countries where our service providers operate.

We ensure that any international transfers of personal data are subject to appropriate safeguards, including standard contractual clauses approved by relevant data protection authorities, to ensure your information receives an equivalent level of protection as required under applicable data protection laws.`,
  },
  {
    id: "childrens-privacy",
    title: "10. Children's Privacy",
    content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us. If we discover that we have collected personal information from a child under 18, we will take steps to delete such information promptly.`,
  },
  {
    id: "changes",
    title: "11. Changes to This Privacy Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will notify you of any material changes by:

• Posting the new Privacy Policy on this page with an updated effective date
• Sending you an email notification (where we have your email address)
• Displaying a prominent notice on our website

We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information. Your continued use of our services after any changes constitutes your acceptance of the updated Privacy Policy.`,
  },
  {
    id: "contact",
    title: "12. Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:

**TrustCore Technologies LLC**
Privacy & Compliance Team
Email: privacy@trustcore.com
Website: www.trustcore.com

We will respond to your inquiry within a reasonable timeframe, and no later than as required by applicable law.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden">
      <Header onDark={false} />

      <main className="flex-grow pt-[100px] lg:pt-[140px]">

        {/* Page Header */}
        <section className="py-[60px] lg:py-[80px] border-b border-[#E8ECF0]">
          <Container size="wide">
            <div className="flex flex-col gap-4">
              <h1 className="text-[44px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-[-1.5px] text-[#14141E]">
                Privacy Policy
              </h1>
              <p className="text-[16px] text-[#626268] mt-2">
                Effective Date: January 1, 2026 &nbsp;·&nbsp; Last Updated: March 26, 2026
              </p>
            </div>

            {/* Download link */}
            <div className="mt-8">
              <a
                href="/images/privacy/TRUSTCORE TECHNOLOGIES LLC..pdf"
                download
                className="inline-flex items-center gap-2 text-[15px] font-medium text-[#0185EE] hover:underline underline-offset-4 transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download PDF Version
              </a>
            </div>
          </Container>
        </section>

        {/* Content */}
        <section className="py-[80px] lg:py-[100px]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-20 items-start">

              {/* Sticky Table of Contents */}
              <nav className="hidden lg:flex flex-col gap-2 sticky top-[110px]">
                <p className="text-[13px] font-bold text-[#626268] tracking-[1px] uppercase mb-2">Contents</p>
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="text-[14px] text-[#626268] hover:text-[#0185EE] transition-colors py-1 leading-snug"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>

              {/* Policy Content */}
              <div className="flex flex-col gap-12">
                {sections.map((section: any) => (
                  <div key={section.id} id={section.id} className="flex flex-col gap-4 scroll-mt-[120px]">
                    <h2 className="text-[24px] font-bold text-[#14141E] leading-[32px] tracking-[-0.6px]">
                      {section.title}
                    </h2>
                    <div className="text-[17px] font-normal text-[#626268] leading-[28px] whitespace-pre-line">
                      {section.content.split("\n").map((para: string, i: number) => {
                        if (para.startsWith("**") && para.endsWith("**")) {
                          return (
                            <p key={i} className="font-bold text-[#14141E] mt-4 mb-1">
                              {para.replace(/\*\*/g, "")}
                            </p>
                          );
                        }
                        if (para.startsWith("• ")) {
                          return (
                            <p key={i} className="flex gap-2 mt-1">
                              <span className="text-[#626268] flex-shrink-0">•</span>
                              <span>{para.slice(2)}</span>
                            </p>
                          );
                        }
                        if (para.trim() === "") return <div key={i} className="h-2" />;
                        // Handle inline bold (e.g., **Word:** desc)
                        const parts = para.split(/(\*\*[^*]+\*\*)/g);
                        return (
                          <p key={i} className="mt-1">
                            {parts.map((part, j) =>
                              part.startsWith("**") && part.endsWith("**") ? (
                                <strong key={j} className="font-bold text-[#14141E]">
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
                      <div className="mt-6 overflow-x-auto border border-[#E8ECF0] rounded-xl shadow-sm">
                        <table className="w-full border-collapse text-left text-[15px]">
                          <thead>
                            <tr className="bg-[#F8FAFC]">
                              {section.table.headers.map((header: string, i: number) => (
                                <th
                                  key={i}
                                  className="py-6 px-6 font-bold text-[#14141E] border-b border-[#E8ECF0] whitespace-nowrap"
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
                                className="hover:bg-gray-50/50 transition-colors"
                              >
                                {row.map((cell, j) => (
                                  <td
                                    key={j}
                                    className={`py-8 px-6 text-[#626268] border-b border-[#E8ECF0] leading-[1.5] ${
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

                    {section.footer && (
                      <p className="text-[15px] italic text-[#626268] mt-2">
                        {section.footer}
                      </p>
                    )}

                    <div className="border-b border-[#E8ECF0] mt-4" />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

      </main>

      <Footer hideCTA={true} />
    </div>
  );
}
