"use client";

import React from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { useCookieConsent } from "@/components/cookie-consent-context";
import { Text } from "@/components/ui/text";

const sections = [
  {
    id: "definition",
    title: "1. What Are Cookies and Similar Technologies",
    content: `Cookies are small text files that are stored on your device when you visit a website. They enable the website to recognize your device, store preferences, and support various functionalities.

In addition to cookies, we may use related technologies such as web beacons, pixels, tags, and scripts. These technologies help us understand how users interact with the Services, measure performance, and deliver relevant content.

Some cookies are session-based and expire when you close your browser, while others remain on your device for a defined period or until deleted.`,
  },
  {
    id: "use",
    title: "2. Use of Cookies",
    content: `TrustCore uses cookies and similar technologies to support the operation, security, and performance of the Services.

These technologies are used to ensure that the Services function properly, to enhance usability and personalization, to analyze how the Services are used, and to support communications and engagement with users.

Cookies may be set directly by TrustCore or by authorized third-party providers acting on our behalf, including analytics and service providers.`,
  },
  {
    id: "categories",
    title: "3. Categories of Cookies",
    content: `We use different categories of cookies depending on their purpose and function.

**3.1. Strictly Necessary Cookies**
Strictly necessary cookies are essential for the operation of the Services. They enable core functionality such as secure access, authentication, network management, and system integrity. These cookies cannot be disabled through our systems, as the Services would not function properly without them.

**3.2. Functional Cookies**
Functional cookies allow the Services to remember your preferences and provide enhanced features. This may include language settings, regional preferences, and interface customizations. Disabling these cookies may limit certain features or reduce usability.

**3.3. Analytics Cookies**
Analytics cookies help us understand how users interact with the Services. They provide insights into performance, usage patterns, and potential technical issues. This information is generally aggregated and does not directly identify individual users.

**3.4. Targeting and Advertising Cookies**
Targeting cookies may be used to deliver content that is more relevant to your interests and to measure the effectiveness of campaigns. These cookies may be set by TrustCore or by third-party partners and may track interactions across different services.`,
  },
  {
    id: "purpose",
    title: "4. Purpose of Cookies",
    content: `We use cookies for several important purposes related to the operation and improvement of the Services.

Cookies enable us to maintain core functionality and security, recognize users and their preferences, improve performance and usability, analyze how the Services are used, and provide content that is more relevant to users.

These purposes are consistent with our broader objective of delivering secure, scalable, and user-focused financial technology services.`,
  },
  {
    id: "management",
    title: "5. Cookie Management and Controls",
    content: `You have the ability to control how cookies are used.

When you first access the Services, you may be presented with a cookie preference interface that allows you to manage your consent for non-essential cookies. You may update your preferences at any time through the [“Manage Cookies” settings](/legal/cookies/settings) available on the Services.

In addition, most web browsers allow you to control cookies through their settings. You can configure your browser to block or delete cookies. However, if you choose to disable certain cookies, some features of the Services may not function properly.

For further information on managing cookies through your browser, please refer to your browser provider’s documentation.

• [Click here to learn more about managing cookie settings in Firefox](https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences)
• [Click here to learn more about managing cookie settings in Chrome](https://support.google.com/chrome/answer/95647)
• [Click here to learn more about managing cookie settings in Microsoft Edge](https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd)
• [Click here (iPhone) to learn more about managing cookie settings in Safari](https://support.apple.com/en-us/HT201265)
• [Click here (Mac) to learn more about managing cookie settings in Safari](https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac)`,
  },
  {
    id: "local-storage",
    title: "6. Local Storage and Similar Technologies",
    content: `In addition to cookies, TrustCore may use local storage technologies, including browser-based storage mechanisms, to store certain information on your device.

Local storage may be used to support functionality, maintain session state, or enhance user experience. Unlike cookies, local storage is managed directly through your browser settings and may persist until manually cleared or overwritten.`,
  },
  {
    id: "third-party",
    title: "7. Third-Party Cookies",
    content: `Some cookies and related technologies may be placed by third-party providers that support our Services, including analytics providers, infrastructure partners, and service integrations.

These third parties may process information in accordance with their own privacy policies. TrustCore does not control these third-party technologies but requires that such providers adhere to applicable data protection standards.`,
  },
  {
    id: "rights",
    title: "8. Your Rights",
    content: `Depending on your location, you may have certain rights regarding your personal data and the use of cookies and similar technologies.

For more information about your rights and how to exercise them, please refer to our [Privacy Policy](/legal/privacy).`,
  },
  {
    id: "updates",
    title: "9. Updates to This Policy",
    content: `We may update this Cookie Policy from time to time to reflect changes in our practices, technologies, or legal requirements.

When we make updates, we will revise the “Last Updated” date at the top of this Policy. Continued use of the Services after such updates constitutes your acknowledgment of the revised Policy.`,
  },
];

export default function CookiePolicyPage() {
  const { openModal } = useCookieConsent();

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden">
      <Header onDark={false} />

      <main className="flex-grow pt-[100px] lg:pt-[140px]">
        {/* Page Header */}
        <section className="py-[60px] lg:py-[80px] border-b border-[#E8ECF0]">
          <Container >
            <div className="flex flex-col gap-4">
              <Text as="div" variant="heading-h1" weight="bold" color="primary" className="leading-[1.1] tracking-[-1.5px]">
                Cookie Policy
              </Text>
              <Text variant="body-md" color="secondary" className="mt-2">
                Last Updated: 26 March 2026
              </Text>
              <Text variant="body-lg" color="secondary" className="mt-4 max-w-[800px] leading-relaxed">
                This Cookie Policy explains how TrustCore Technologies, LLC ("TrustCore," "we," "us," or "our") uses cookies and similar technologies in connection with its website located at https://trustcore.finance/ and any associated subdomains, applications, products, and services (collectively, the "Services").
              </Text>
              <Text variant="body-lg" color="secondary" className="mt-2 max-w-[800px] leading-relaxed">
                We are committed to transparency regarding the technologies we use. This Policy provides information about how and why cookies are used, as well as the choices available to you in managing these technologies.
              </Text>
              <Text variant="body-lg" color="secondary" className="mt-2 max-w-[800px] leading-relaxed">
                This Cookie Policy should be read together with our <a href="/legal/privacy" className="text-[#0185EE] hover:underline underline-offset-4">Privacy Policy</a>, which explains how we process personal data.
              </Text>
            </div>
          </Container>
        </section>

        {/* Content */}
        <section className="py-[80px] lg:py-[100px]">
          <Container >
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
                    <Text as="div" variant="heading-h3" weight="bold" color="primary" className="leading-[32px] tracking-[-0.6px]">
                      {section.title}
                    </Text>
                    <div className="text-body-lg font-normal text-[#626268] leading-[28px] whitespace-pre-line">
                      {section.content.split("\n").map((para: string, i: number) => {
                        if (para.trim() === "") return <div key={i} className="h-2" />;
                        
                        // Handle Markdown Links [text](url)
                        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
                        
                        // If it's a bullet point
                        if (para.startsWith("• ")) {
                          const listContent = para.slice(2);
                          const listParts = listContent.split(linkRegex);
                          return (
                            <p key={i} className="flex gap-2 mt-1">
                              <span className="text-[#626268] flex-shrink-0">•</span>
                              <span>
                                {listParts.map((part, j) => {
                                  if (j % 3 === 1) { // text component of link
                                    const url = listParts[j + 1];
                                    return (
                                      <a key={j} href={url} target={url.startsWith("http") ? "_blank" : "_self"} rel={url.startsWith("http") ? "noopener noreferrer" : ""} className="text-[#0185EE] hover:underline underline-offset-4">
                                        {part}
                                      </a>
                                    );
                                  }
                                  if (j % 3 === 2) return null; // handled by the 1 mod
                                  return part;
                                })}
                              </span>
                            </p>
                          );
                        }

                        // Handle normal paragraph with potential bold and links
                        const processedParts = para.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
                        
                        return (
                          <p key={i} className="mt-1">
                            {processedParts.map((part, j) => {
                              if (part.startsWith("**") && part.endsWith("**")) {
                                return (
                                  <strong key={j} className="font-bold text-[#14141E]">
                                    {part.replace(/\*\*/g, "")}
                                  </strong>
                                );
                              }
                              const linkMatch = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
                              if (linkMatch) {
                                const url = linkMatch[2];
                                if (url === "/legal/cookies/settings") {
                                  return (
                                    <button 
                                      key={j} 
                                      onClick={(e) => { e.preventDefault(); openModal(); }} 
                                      className="text-[#0185EE] hover:underline underline-offset-4 font-inherit"
                                    >
                                      {linkMatch[1]}
                                    </button>
                                  );
                                }
                                return (
                                  <a key={j} href={url} target={url.startsWith("http") ? "_blank" : "_self"} rel={url.startsWith("http") ? "noopener noreferrer" : ""} className="text-[#0185EE] hover:underline underline-offset-4">
                                    {linkMatch[1]}
                                  </a>
                                );
                              }
                              return part;
                            })}
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
