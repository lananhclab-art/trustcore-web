import React from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";

const sections = [
  {
    id: "commitment",
    title: "1. Commitment to Accessibility",
    content: `TrustCore Technologies, LLC (“TrustCore,” “we,” “us,” or “our”) is committed to ensuring that our digital products and services are accessible to all users, including individuals with disabilities.

We believe that inclusive technology creates better experiences for everyone. As part of this commitment, we strive to design, develop, and maintain our digital platforms in a manner that reduces barriers and promotes equal access across the Web3 ecosystem.

This Accessibility Statement (“Statement”) applies to all websites, applications, products, and services operated by TrustCore on which this Statement is posted, linked, or referenced (collectively, the “Services”), including the TrustCore website located at https://trustcore.finance/ and any associated subdomains.`,
  },
  {
    id: "compliance",
    title: "2. Compliance Status",
    content: `TrustCore aims to conform to the Web Content Accessibility Guidelines (“WCAG”) version 2.2 at Level AA, which are internationally recognized standards for digital accessibility.

At present, our Services are partially compliant with WCAG 2.2 AA. While many areas of the Services meet or exceed accessibility standards, certain features and content may not yet fully conform. We are actively working to identify and address these areas as part of our ongoing accessibility program.`,
  },
  {
    id: "features",
    title: "3. Accessibility Features",
    content: `We have implemented a range of features designed to support accessibility and usability across our Services.

Users are able to access and interact with the Services using a variety of assistive technologies and interface preferences. This includes the ability to scale content and interface elements without loss of functionality, navigate core areas of the Services using keyboard input, and interact with content that is designed to be distinguishable without reliance on color alone.

Our Services are also designed to support system-level accessibility preferences where available, including display settings such as dark mode and device-level configurations that enhance readability and usability.`,
  },
  {
    id: "limitations",
    title: "4. Known Limitations",
    content: `Despite our ongoing efforts, certain aspects of the Services may not yet be fully accessible.

Some users may encounter limitations related to keyboard navigation, particularly in areas involving complex interfaces or form interactions. In certain instances, visual contrast may not fully meet accessibility thresholds, which may affect readability for some users. Additionally, some non-text content may lack sufficient descriptive alternatives, and certain structural elements, such as headings or tables, may not always provide optimal navigation for assistive technologies.

We are also aware that certain documents, including those provided in PDF format, may not be fully accessible. Where such limitations exist, we are working to improve accessibility in future updates.

Certain advanced features or integrations may have technical or security-related constraints that limit compatibility with specific assistive technologies. We continuously evaluate these limitations and seek to balance accessibility improvements with system integrity and security requirements.`,
  },
  {
    id: "efforts",
    title: "5. Ongoing Accessibility Efforts",
    content: `TrustCore is committed to continuous improvement in accessibility and regularly evaluates its Services to enhance usability and compliance.

Our approach includes ongoing testing and evaluation using both automated tools and manual review processes. We periodically assess our Services against recognized accessibility standards and incorporate findings into our development roadmap.

We also review feedback from users and stakeholders as part of our effort to identify and address accessibility issues. Where appropriate, we may engage third-party accessibility specialists to support testing, auditing, and implementation of improvements.

Accessibility is incorporated into the design and development lifecycle where practicable, and we aim to include accessibility best practices in all future updates and releases.`,
  },
  {
    id: "preparation",
    title: "6. Preparation of This Statement",
    content: `This Accessibility Statement was prepared on 26 March 2026 and reflects the status of the Services as of that date.

The Services were last evaluated against WCAG 2.2 Level AA standards in March 2026. This evaluation included a review of representative pages and functionality using a combination of internal assessments and third-party testing methodologies.

This Statement will be reviewed and updated periodically to reflect improvements and changes to the Services.`,
  },
  {
    id: "feedback",
    title: "7. Feedback and Contact Information",
    content: `TrustCore is committed to improving accessibility and welcomes feedback from users regarding their experience with our Services.

If you encounter any accessibility barriers, have difficulty accessing any part of the Services, or have suggestions for improvement, you may contact us using the details below. When contacting us, please include a description of the issue, the page or feature involved, and the type of assistive technology you are using, if applicable.

We will acknowledge your request within 5 business days and endeavor to provide a substantive response within 30 days of receipt.

Email: accessibility@trustcore.finance`,
  },
  {
    id: "support",
    title: "8. Accessibility Support and Resolution",
    content: `Where a user reports an accessibility issue, TrustCore will follow this process:

• **(a) Acknowledgment:** We will confirm receipt of your report within 5 business days.
• **(b) Assessment:** We will investigate the reported barrier and assess its nature and severity within 15 business days of acknowledgment.
• **(c) Interim Guidance:** Where possible, we will provide alternative means of access or a workaround while a permanent fix is being developed.
• **(d) Resolution:** Where a fix is technically and operationally feasible, we will include it in our development roadmap and notify you of the expected timeline.

While we strive to resolve all accessibility concerns, certain limitations may arise due to technical, operational, or security constraints. In such cases, we will seek to provide alternative means of access where feasible.`,
  },
  {
    id: "standards",
    title: "9. External Standards and Regulatory Rights",
    content: `TrustCore aims to align its accessibility practices with internationally recognized standards, including WCAG 2.2 Level AA.

Depending on your jurisdiction, you may have the right to raise concerns regarding accessibility with a relevant regulatory or supervisory authority. The following bodies may be relevant depending on your location:

**European Union / EEA:** The EU Web Accessibility Directive (Directive 2016/2102) establishes accessibility requirements for digital services. Users may contact their national accessibility enforcement body. A list of national authorities is available at https://digital-strategy.ec.europa.eu.

**United Kingdom:** The Equality and Human Rights Commission (EHRC) enforces accessibility obligations under the Equality Act 2010. Users may contact the EHRC at https://www.equalityhumanrights.com.

**United States:** The Americans with Disabilities Act (ADA) and Section 508 of the Rehabilitation Act may apply in certain contexts. Users may contact the U.S. Department of Justice Civil Rights Division at https://www.ada.gov.

**Other jurisdictions:** Users in other regions with applicable accessibility laws may contact their local regulatory authority.

TrustCore is a private-sector entity and regulatory obligations vary by jurisdiction. Regardless of legal requirements, we are committed to maintaining accessibility as a core principle.`,
  },
  {
    id: "updates",
    title: "10. Updates to This Statement",
    content: `This Accessibility Statement may be updated from time to time to reflect improvements, changes in applicable standards, or updates to the Services.

When updates are made, the “Last Updated” date at the top of this Statement will be revised accordingly. Continued use of the Services following any updates constitutes acceptance of the revised Statement.`,
  },
  {
    id: "accessibility_statement",
    title: "11. Accessibility of This Statement",
    content: `TrustCore is committed to ensuring that this Accessibility Statement is itself accessible. This Statement is published in HTML on our website and is designed to be compatible with screen readers and other assistive technologies.

If you require this Statement in an alternative format, such as large print, plain text, or a different language, please contact us at accessibility@trustcore.finance and we will endeavor to provide an accessible version within 10 business days.`,
  },
];

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden">
      <Header onDark={false} />

      <main className="flex-grow pt-[100px] lg:pt-[140px]">
        {/* Page Header */}
        <section className="py-[60px] lg:py-[80px] border-b border-[#E8ECF0]">
          <Container size="wide">
            <div className="flex flex-col gap-4">
              <h1 className="text-[44px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-[-1.5px] text-[#14141E]">
                Accessibility Statement
              </h1>
              <p className="text-[16px] text-[#626268] mt-2">
                Version 1.0 (Published: 26 March 2026) &nbsp;·&nbsp; Last Updated: 26 March 2026
              </p>
            </div>
          </Container>
        </section>

        {/* Content */}
        <section className="py-[80px] lg:py-[100px]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-20 items-start">
              {/* Sticky Table of Contents */}
              <nav className="hidden lg:flex flex-col gap-2 sticky top-[110px]">
                <p className="text-[13px] font-bold text-[#626268] tracking-[1px] uppercase mb-2">
                  Contents
                </p>
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
                  <div
                    key={section.id}
                    id={section.id}
                    className="flex flex-col gap-4 scroll-mt-[120px]"
                  >
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
                              <span>
                                {para.slice(2).split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
                                  part.startsWith("**") && part.endsWith("**") ? (
                                    <strong key={j} className="font-bold text-[#14141E]">
                                      {part.replace(/\*\*/g, "")}
                                    </strong>
                                  ) : (
                                    part
                                  )
                                )}
                              </span>
                            </p>
                          );
                        }
                        if (para.trim() === "") return <div key={i} className="h-2" />;
                        // Handle inline bold
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
