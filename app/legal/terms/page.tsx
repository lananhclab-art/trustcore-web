import React from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: `THIS AGREEMENT CONTAINS PROVISIONS THAT GOVERN HOW DISPUTES BETWEEN YOU AND TRUSTCORE ARE RESOLVED, INCLUDING A REQUIREMENT FOR BINDING ARBITRATION AND A WAIVER OF CLASS ACTION RIGHTS. PLEASE READ THESE TERMS CAREFULLY.

TrustCore Technologies, LLC (“TrustCore,” “we,” “us,” or “our”) is a financial technology company providing blockchain-based software, infrastructure, and related services to users, developers, and businesses worldwide. Our offerings include, without limitation, TrustCore Exchange, TrustCore Payment Gateway, TrustCore DeFi Platform, TrustCore Wallet, and associated websites, applications, and services (collectively, the “Offerings”).

These Terms of Use (the “Terms” or “Agreement”) govern your access to and use of the Offerings and constitute a legally binding agreement between you and TrustCore. By accessing or using the Offerings, clicking to accept these Terms, or otherwise engaging with the Offerings, you acknowledge that you have read, understood, and agree to be bound by this Agreement and any policies incorporated herein by reference, including our Privacy Policy.

If you do not agree to these Terms, you must not access or use the Offerings.

You represent and warrant that you are legally capable of entering into a binding agreement. If you are entering into this Agreement on behalf of an organization, you represent that you have the authority to bind that organization to these Terms. You further represent that you are not subject to any applicable sanctions or restrictions imposed by governmental authorities and are not located in a jurisdiction subject to comprehensive sanctions.`,
  },
  {
    id: "offerings",
    title: "1. The Offerings",
    content: `**1.1 General**
You may access and use the Offerings solely in accordance with this Agreement and all applicable laws and regulations. Your use of the Offerings must comply with all legal obligations applicable to you, including those relating to financial services, digital assets, and technology use.

**1.2 Access and Availability**
TrustCore makes the Offerings available through its website and, where applicable, through authorized third-party distribution platforms. Certain Offerings may require you to create an account, provide accurate and complete information, and satisfy additional requirements such as payment of applicable fees or acceptance of supplemental terms.

You are responsible for maintaining the accuracy of your information and for all activities conducted through your use of the Offerings. TrustCore reserves the right to modify, suspend, or discontinue any part of the Offerings at any time, with or without notice, subject to applicable law.

**1.3 Third-Party Services**
The Offerings may enable you to access or interact with third-party content, applications, or services (“Third-Party Services”). Such Third-Party Services are not owned or controlled by TrustCore and are provided for convenience only.

Your use of Third-Party Services is at your own discretion and is governed by the terms and policies of the applicable third parties. TrustCore does not endorse, verify, or assume responsibility for any Third-Party Services and shall not be liable for any loss or damage arising from your use of or reliance on such services.

**1.4 Support**
TrustCore may provide support, guidance, or informational assistance in connection with the Offerings. Any such support is provided on an “as available” basis and is intended for general informational purposes only. While we endeavor to provide accurate information, we make no representations or warranties as to the completeness or reliability of such support.

You acknowledge that you are solely responsible for evaluating and applying any information provided and that your use of the Offerings remains at your own risk. TrustCore will not request your confidential credentials, including private keys or passwords, and you are solely responsible for safeguarding such information.`,
  },
  {
    id: "changes",
    title: "2. Changes",
    content: `**2.1 Changes to the Offerings**
TrustCore may modify, suspend, or discontinue any aspect of the Offerings at any time for operational, legal, or security reasons. Where reasonably practicable, we will endeavor to provide notice of material changes; however, certain changes may take effect immediately where required.

**2.2 Changes to These Terms**
We reserve the right to modify or update these Terms at our discretion. For material changes, we will endeavor to provide at least 30 days’ notice by posting on our website or notifying you through the Offerings before such changes take effect. For non-material changes, updated versions will take effect upon posting. Your continued use of the Offerings following the effective date of any update constitutes your acceptance of the revised Terms.`,
  },
  {
    id: "responsibilities",
    title: "3. Your Responsibilities",
    content: `**3.1 Use of the Offerings**
You are responsible for all activities associated with your use of the Offerings, whether conducted directly by you or through your account. TrustCore shall not be responsible for unauthorized access resulting from third-party actions, including but not limited to phishing, fraud, or credential compromise.

You agree not to use the Offerings for any unlawful, fraudulent, or prohibited purpose.

**3.2 Security and Account Responsibility**
You are solely responsible for maintaining the security and confidentiality of any credentials associated with your use of the Offerings. This includes implementing appropriate safeguards to protect your accounts, systems, and data.

You acknowledge that failure to properly secure your credentials may result in unauthorized access and potential loss. TrustCore does not store or have access to private cryptographic keys and cannot recover access to blockchain-based accounts.

**3.3 Credentials and Access Controls**
Where TrustCore provides credentials, API keys, or access tokens, such credentials are intended solely for your authorized use. You may not transfer, sublicense, or otherwise make such credentials available to unauthorized parties. You remain responsible for all activities conducted using such credentials.

**3.4 Blockchain and Digital Asset Risks**
Certain Offerings facilitate interaction with blockchain networks and digital assets. You acknowledge that such systems operate independently of TrustCore and involve inherent technical and financial risks.

Blockchain transactions are generally irreversible, and TrustCore does not control or validate such transactions. You are solely responsible for all actions taken using your accounts, including the execution of transactions and the management of digital assets. TrustCore does not custody assets or manage private keys on your behalf.`,
  },
  {
    id: "fees",
    title: "4. Fees and Payment",
    content: `Certain Offerings may require the payment of fees. Where applicable, fees will be disclosed through the relevant interfaces, documentation, or agreements.

You agree to pay all applicable fees in accordance with the terms presented to you. Unless otherwise specified, fees are payable in U.S. dollars. Except where required by applicable law (including statutory consumer rights in the European Union and other jurisdictions), fees are non-refundable. TrustCore reserves the right to modify pricing with reasonable notice where required.

You are responsible for any taxes associated with your use of the Offerings, except where TrustCore is required by law to collect or remit such taxes.`,
  },
  {
    id: "suspension",
    title: "5. Suspension",
    content: `TrustCore reserves the right to suspend or restrict your access to the Offerings immediately if it determines that your use poses a security risk, violates this Agreement, fails to meet payment obligations, or is required by law or regulatory authority.

During any period of suspension, your obligations under this Agreement will remain in effect.`,
  },
  {
    id: "termination",
    title: "6. Term and Termination",
    content: `This Agreement will commence on the date you first access or use the Offerings and will remain in effect until terminated.

You may terminate this Agreement at any time by ceasing use of the Offerings. TrustCore may terminate or suspend your access at its discretion, including for breach of these Terms, legal requirements, or operational considerations.

Upon termination, your right to access and use the Offerings will cease immediately. Any provisions that by their nature should survive termination will remain in effect, including those relating to liability, indemnification, and dispute resolution.`,
  },
  {
    id: "proprietary-rights",
    title: "7. Proprietary Rights",
    content: `**7.1 Ownership**
All right, title, and interest in and to the Offerings, including all associated technology, software, content, trademarks, and intellectual property rights, are owned by TrustCore or its licensors. Nothing in this Agreement transfers any ownership rights to you.

Subject to your compliance with these Terms, TrustCore grants you a limited, revocable, non-exclusive, non-transferable, and non-sublicensable license to access and use the Offerings solely for their intended purposes.

**7.2 Your Content**
To the extent you provide, upload, or transmit any data, content, or materials through the Offerings (“Your Content”), you retain ownership of such content. However, you grant TrustCore a limited, worldwide, royalty-free license to use, process, store, and transmit Your Content solely as necessary to provide and improve the Offerings and to comply with applicable law.

You represent and warrant that you have all necessary rights to provide Your Content and that such content does not violate any applicable laws or third-party rights.

**7.3 Restrictions**
You agree not to, and not to permit any third party to, modify, copy, distribute, reverse engineer, decompile, or otherwise attempt to derive the source code of any part of the Offerings, except where expressly permitted by applicable law. You further agree not to use the Offerings in any manner intended to circumvent fees, exceed usage limits, or exploit the Offerings for unauthorized commercial purposes.

You may not use TrustCore’s trademarks, logos, or branding without prior written consent, nor may you imply any affiliation, endorsement, or partnership that does not exist.

**7.4 Suggestions**
If you provide feedback, suggestions, or ideas regarding the Offerings (“Suggestions”), you acknowledge that TrustCore may use such Suggestions without restriction or compensation to you. You hereby assign to TrustCore all rights in any such Suggestions to the extent permitted by law.`,
  },
  {
    id: "indemnification",
    title: "8. Indemnification",
    content: `You agree to defend, indemnify, and hold harmless TrustCore, its affiliates, officers, directors, employees, and agents from and against any third-party claims, damages, losses, liabilities, costs, and expenses, including reasonable legal fees, arising out of or directly related to: (a) your material breach of this Agreement; (b) your violation of applicable law; or (c) your infringement of any third-party intellectual property rights through use of the Offerings.

This indemnification obligation does not apply to the extent that any claim arises from TrustCore’s own gross negligence, fraud, or willful misconduct.

TrustCore will use reasonable efforts to notify you of any such claim and may participate in the defense at its own expense. You may not settle any claim in a manner that imposes obligations or liability on TrustCore without our prior written consent.`,
  },
  {
    id: "disclaimers",
    title: "9. Disclaimers and Risk Acknowledgment",
    content: `**9.1 Disclaimer of Warranties**
THE OFFERINGS ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS. TO THE MAXIMUM EXTENT PERMITTED BY LAW, TRUSTCORE DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND QUIET ENJOYMENT.

TRUSTCORE DOES NOT WARRANT THAT THE OFFERINGS WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE FROM HARMFUL COMPONENTS, OR THAT ANY DATA OR CONTENT WILL BE ACCURATE OR RELIABLE.

**9.2 Technology and Digital Asset Risks**
You acknowledge that the Offerings involve emerging technologies, including blockchain networks, smart contracts, and digital assets, which carry inherent risks.

Such risks include, but are not limited to, volatility in the value of digital assets, software vulnerabilities, network disruptions, regulatory uncertainty, and cybersecurity threats. Blockchain transactions are irreversible and may result in permanent loss of assets if executed incorrectly or if credentials are compromised.

TrustCore does not operate or control any blockchain protocol and does not validate, reverse, or guarantee the execution of transactions. You are solely responsible for safeguarding your private keys, credentials, and recovery phrases, and for ensuring the accuracy of any transactions you initiate.

You further acknowledge that interactions with third-party applications, tokens, or services may expose you to additional risks, including fraud, scams, or technical failures. TrustCore does not verify or guarantee the legitimacy, safety, or functionality of any third-party systems.

By using the Offerings, you expressly assume all risks associated with your use of blockchain technologies and digital assets.`,
  },
  {
    id: "limitation-of-liability",
    title: "10. Limitation of Liability",
    content: `**10.1 Limitation of Amount**
To the maximum extent permitted by law, the aggregate liability of TrustCore and its affiliates arising out of or relating to this Agreement or the Offerings shall not exceed the total amount paid by you to TrustCore for the relevant Offerings in the twelve months preceding the event giving rise to the claim, or, if no fees have been paid, an amount of twenty-five thousand U.S. dollars (USD $25,000).

This limitation applies regardless of the form of action, whether in contract, tort, or otherwise.

**10.2 Exclusion of Damages**
To the maximum extent permitted by law, TrustCore shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including loss of profits, revenue, data, or goodwill, even if advised of the possibility of such damages.

Nothing in this Agreement shall exclude or limit liability to the extent such exclusion or limitation is prohibited by applicable law.`,
  },
  {
    id: "dispute-resolution",
    title: "11. Dispute Resolution; Arbitration",
    content: `PLEASE READ THIS SECTION CAREFULLY, AS IT AFFECTS YOUR LEGAL RIGHTS.

Any dispute, claim, or controversy arising out of or relating to this Agreement or the Offerings shall be resolved through binding arbitration rather than in court, except where prohibited by law or where claims may be brought in small claims court.

**11.1. US Users: Governing Law and Arbitration**
If you are located in the United States, this Agreement shall be governed by the laws of the State of California, without regard to conflict of law principles. Arbitration shall be administered by JAMS (or alternatively, the American Arbitration Association (AAA)) under its then-current rules for consumer or commercial disputes, as applicable. The seat of arbitration shall be San Francisco, California. The decision of the arbitrator shall be final and binding and may be entered as a judgment in any court of competent jurisdiction.

**11.2 Non-US Users: Governing Law and Arbitration**
If you are located outside the United States, this Agreement shall be governed by the laws of England and Wales, without regard to conflict of law principles. Disputes shall be finally resolved by arbitration administered by the International Chamber of Commerce (ICC) under its Arbitration Rules. The seat of arbitration shall be London, United Kingdom. The language of arbitration shall be English.

**11.3. Class Action Waiver**
You and TrustCore agree that any claims will be brought on an individual basis only, and not as part of any class, collective, or representative action. You expressly waive any right to participate in a class action lawsuit or class-wide arbitration.

**11.4. Arbitration Opt-Out**
You may opt out of the arbitration agreement by sending written notice to contact@trustcore.finance within thirty (30) days of the date you first accept these Terms. Your notice must include your full name, the email address associated with your account, and a clear statement that you wish to opt out of arbitration. Opting out will not affect any other provision of this Agreement.`,
  },
  {
    id: "miscellaneous",
    title: "12. Miscellaneous",
    content: `**12.1 Assignment**
You may not assign, transfer, or delegate this Agreement or any of your rights or obligations under it without the prior written consent of TrustCore. Any attempted assignment in violation of this provision shall be null and void.

TrustCore may assign or transfer this Agreement without restriction, including in connection with a merger, acquisition, reorganization, or sale of assets. Upon such assignment, the assignee will assume all rights and obligations under this Agreement, and TrustCore will be released from its obligations to the extent permitted by law.

**12.2 Independent Contractors**
The relationship between you and TrustCore is that of independent contracting parties. Nothing in this Agreement shall be deemed to create any partnership, joint venture, agency, or employment relationship between the parties.

Neither party has authority to bind or act on behalf of the other.

**12.3 Compliance with Laws**
You agree to comply with all applicable laws, regulations, and rules in connection with your use of the Offerings, including those relating to financial services, digital assets, export controls, and economic sanctions.

You represent that you are not subject to any sanctions or restrictions imposed by any governmental authority and that you will not use the Offerings in violation of any applicable trade or export laws.

TrustCore reserves the right to restrict or terminate access to the Offerings where necessary to comply with legal or regulatory obligations.

**12.4 Force Majeure**
TrustCore shall not be liable for any failure or delay in performance under this Agreement resulting from causes beyond its reasonable control, including but not limited to acts of God, natural disasters, cyberattacks, network failures, labor disputes, governmental actions, war, terrorism, or interruptions in internet or infrastructure services.

**12.5 Entire Agreement**
This Agreement, together with any policies or additional terms incorporated by reference, constitutes the entire agreement between you and TrustCore regarding the subject matter herein and supersedes all prior or contemporaneous agreements, communications, or understandings, whether written or oral.

In the event of any conflict between these Terms and any additional terms applicable to specific Offerings, these Terms shall control unless expressly stated otherwise.

**12.6 Severability**
If any provision of this Agreement is held to be invalid, illegal, or unenforceable, the remaining provisions shall remain in full force and effect. The invalid provision shall be interpreted or modified to the extent necessary to make it enforceable while preserving its intent.

**12.7 No Waiver**
The failure of TrustCore to enforce any provision of this Agreement shall not constitute a waiver of that provision or of any other provision. Any waiver must be in writing and signed by an authorized representative of TrustCore.

**12.8 Notices**
TrustCore may provide notices to you through reasonable means, including by posting on the website, through the Offerings, or by email where applicable. Such notices shall be deemed effective upon posting or sending.

You may provide notice to TrustCore by contacting us at contact@trustcore.finance.

**12.9 Eligibility**
The Offerings are intended for users who are of legal age to enter into a binding agreement in their jurisdiction. Users must be at least 13 years of age in the United States and at least 16 years of age in the European Economic Area, or such higher age as required by applicable law. If you do not meet the applicable age requirement, you may not use the Offerings.

**12.10 Language**
This Agreement is written in the English language. Any translation is provided for convenience only, and in the event of any inconsistency, the English version shall prevail.`,
  },
];

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden">
      <Header onDark={false} />

      <main className="flex-grow pt-[100px] lg:pt-[140px]">
        {/* Page Header */}
        <section className="py-[60px] lg:py-[80px] border-b border-[#E8ECF0]">
          <Container size="wide">
            <div className="flex flex-col gap-4">
              <h1 className="text-[44px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-[-1.5px] text-[#14141E]">
                Terms of Use
              </h1>
              <p className="text-[16px] text-[#626268] mt-2">
                Effective Date: March 25, 2026 &nbsp;·&nbsp; Last Updated: March 26, 2026
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
                              <span>{para.slice(2)}</span>
                            </p>
                          );
                        }
                        if (para.trim() === "") return <div key={i} className="h-2" />;
                        // Handle inline bold (including handling of **Sub-section Title**)
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
