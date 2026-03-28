"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Twitter, Linkedin, Youtube, Send, ChevronDown, Plus, X } from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Text } from "@/components/ui/text";

export default function ContactPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState("");

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden">
      <Header onDark={false} />

      <main className="flex-grow">
        {/* --- Hero & Form Section --- */}
        <Section spacing="hero" bg="white">
          <Container >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              {/* Left Column: Title & Info */}
              <div className="flex flex-col gap-8 lg:max-w-[540px]">
                <Text as="div" variant="heading-h1" weight="bold" color="primary" className="leading-[1.05] tracking-[-1.5px]">
                  Get in <span className="text-text-brand">touch</span>
                </Text>
                <Text variant="body-lg" weight="medium" color="secondary" className="leading-[30px]">
                  Have questions about TrustCore or exploring a potential collaboration? 
                  Our team is here to help you build the future of finance.
                </Text>

                {/* Optional Office Info if needed, but Figma mostly showed title/subtitle */}
              </div>

              {/* Right Column: Contact Form */}
              <div className="rounded-[12px]">
                <Text as="div" variant="heading-h3" weight="bold" color="primary" className="mb-8 tracking-tight">
                  Tell us about your request
                </Text>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input 
                      className="w-full h-[56px] px-[16px] rounded-[12px] border border-[#B6B6B9] bg-white text-[#0F172A] text-[16px] font-regular leading-[20px] tracking-[-0.45px] placeholder:text-[#B6B6B9] focus:outline-none focus:border-[#007AFF] transition-all"
                      placeholder="First Name"
                      required
                    />
                    <input 
                      className="w-full h-[56px] px-[16px] rounded-[12px] border border-[#B6B6B9] bg-white text-[#0F172A] text-[16px] font-regular leading-[20px] tracking-[-0.45px] placeholder:text-[#B6B6B9] focus:outline-none focus:border-[#007AFF] transition-all"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <input 
                    className="w-full h-[56px] px-[16px] rounded-[12px] border border-[#B6B6B9] bg-white text-[#0F172A] text-[16px] font-regular leading-[20px] tracking-[-0.45px] placeholder:text-[#B6B6B9] focus:outline-none focus:border-[#007AFF] transition-all"
                    placeholder="Work Email"
                    type="email"
                    required
                  />
                  <input 
                    className="w-full h-[56px] px-[16px] rounded-[12px] border border-[#B6B6B9] bg-white text-[#0F172A] text-[16px] font-regular leading-[20px] tracking-[-0.45px] placeholder:text-[#B6B6B9] focus:outline-none focus:border-[#007AFF] transition-all"
                    placeholder="Company Name"
                    required
                  />
                  <input 
                    className="w-full h-[56px] px-[16px] rounded-[12px] border border-[#B6B6B9] bg-white text-[#0F172A] text-[16px] font-regular leading-[20px] tracking-[-0.45px] placeholder:text-[#B6B6B9] focus:outline-none focus:border-[#007AFF] transition-all"
                    placeholder="Job Title"
                    required
                  />
                  <input 
                    className="w-full h-[56px] px-[16px] rounded-[12px] border border-[#B6B6B9] bg-white text-[#0F172A] text-[16px] font-regular leading-[20px] tracking-[-0.45px] placeholder:text-[#B6B6B9] focus:outline-none focus:border-[#007AFF] transition-all"
                    placeholder="Phone Number (optional)"
                  />
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full h-[56px] px-[16px] rounded-[12px] border border-[#B6B6B9] bg-white flex items-center justify-between text-[#14141E] text-[16px] font-regular leading-[20px] tracking-[-0.45px] transition-all hover:border-[#007AFF]"
                    >
                      <span>
                        {selectedInquiry || "Inquiry Type"}
                      </span>
                      <ChevronDown 
                        size={20} 
                        className={`transition-transform duration-200 text-[#14141E] ${isDropdownOpen ? "rotate-180" : ""}`} 
                      />
                    </button>

                    {isDropdownOpen && (
                      <>
                        <div 
                          className="fixed inset-0 z-30" 
                          onClick={() => setIsDropdownOpen(false)}
                        />
                        <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white border border-[#E5E7EB] rounded-[12px] shadow-lg z-40 overflow-hidden py-1">
                          {[
                            "Partnership", 
                            "Business Inquiry", 
                            "Media / Press", 
                            "Careers"
                          ].map((option, idx) => (
                            <React.Fragment key={option}>
                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedInquiry(option);
                                  setIsDropdownOpen(false);
                                }}
                                className="w-full h-[54px] px-[16px] flex items-center text-[#14141E] text-body-md hover:bg-[#F9F9FB] transition-colors text-left"
                              >
                                {option}
                              </button>
                              {idx < 3 && <div className="h-[1px] bg-[#F3F4F6] mx-[16px]" />}
                            </React.Fragment>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full mt-4 h-[60px] rounded-full bg-[#007AFF] hover:bg-[#0066EE] text-white flex items-center justify-center gap-2 border-none shadow-none transition-all duration-300 transform active:scale-[0.98]"
                  >
                    <Text variant="heading-h5" color="inverse" weight="bold" className="tracking-[-0.45px]">
                      Submit Request
                    </Text>
                  </Button>
                </form>
              </div>
            </div>
          </Container>
        </Section>

        {/* --- Stay Connected Section --- */}
        <Section spacing="lg" bg="white">
          <Container >
            <div className="relative overflow-hidden rounded-[40px] min-h-[460px] flex items-center group">
              {/* Background Layer */}
              <div className="absolute inset-0 bg-[#1C2427] z-0" />

              {/* Image Layer */}
              <div className="absolute inset-0 md:left-auto md:w-1/2 z-10 pointer-events-none">
                <Image 
                  src="/images/contact/connected.avif" 
                  alt="Connected technology visualization"
                  fill
                  className="object-cover object-right"
                  priority
                  unoptimized
                />
              </div>

              {/* Text Layer */}
              <div className="relative z-20 px-8 py-16 md:px-16 md:py-20 flex flex-col gap-8 md:max-w-[640px]">
                <Text as="div" variant="heading-h2" weight="bold" color="inverse" className="tracking-tight leading-tight">
                  Stay <span className="text-text-brand">Connected</span>
                </Text>
                <Text variant="body-lg" weight="medium" color="inverse" className="text-[20px] opacity-100 leading-relaxed max-w-md">
                  Follow TrustCore for updates, insights, and latest announcements
                </Text>
                <div className="flex gap-5 pt-4">
                  <Link href="https://x.com/TheTrustCore" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#007AFF] hover:border-[#007AFF] hover:scale-110 transition-all duration-300">
                    <Twitter size={24} />
                  </Link>
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#007AFF] hover:border-[#007AFF] hover:scale-110 transition-all duration-300">
                    <Linkedin size={24} />
                  </Link>
                  <Link href="https://www.youtube.com/@trustcore_wallet" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#007AFF] hover:border-[#007AFF] hover:scale-110 transition-all duration-300">
                    <Youtube size={24} />
                  </Link>
                  <Link href="https://t.me/trustcore_wallet" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#007AFF] hover:border-[#007AFF] hover:scale-110 transition-all duration-300">
                    <Send size={24} />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* --- FAQ Section --- */}
        <Section spacing="lg" bg="white">
          <Container >
            <SectionHeader
              title={<>Frequently Asked <br className="hidden md:block" /><span className="text-[#007AFF]">Questions</span></>}
              subtitle="Find answers to common questions about TrustCore infrastructure and partnerships."
              align="center"
            />

            <div className="max-w-[800px] mx-auto space-y-4 mt-12 lg:mt-20">
              <FAQItem 
                question="What type of inquiries should I submit through this form?" 
                answer="This form is intended for partnerships, business inquiries, media requests, and general questions about TrustCore." 
              />
              <FAQItem 
                question="How long does it take to receive a response?" 
                answer="We typically respond within 1–3 business days, depending on the inquiry." 
              />
              <FAQItem 
                question="Can I request a partnership or collaboration?" 
                answer="Yes. We welcome inquiries from organizations and partners interested in working with TrustCore." 
              />
              <FAQItem 
                question="Where can I find more information about your products?" 
                answer="You can explore our products and ecosystem through the main navigation on our website." 
              />
              <FAQItem 
                question="How do I apply for a job at TrustCore?" 
                answer="Please visit our Careers page to view open roles and submit your application." 
              />
            </div>
          </Container>
        </Section>
      </main>

      <Footer hideCTA />
    </div>
  );
}

function SocialIcon({ icon, href, ariaLabel }: { icon: React.ReactNode, href: string, ariaLabel: string }) {
  return (
    <a 
      href={href} 
      aria-label={ariaLabel}
      className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#007AFF] hover:border-[#007AFF] hover:scale-110 transition-all duration-300"
    >
      {React.cloneElement(icon as React.ReactElement, { size: 24 })}
    </a>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#E8EDF2] last:border-0 transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 px-2 flex items-center justify-between text-left group"
      >
        <Text variant="heading-h5" weight="bold" color="primary" className="group-hover:text-text-brand transition-colors tracking-tight leading-tight">
          {question}
        </Text>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? <X className="text-text-brand" size={20} /> : <Plus className="text-[#0F172A] group-hover:text-text-brand" size={20} />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}
      >
        <div className="px-2 pb-8">
          <Text variant="body-md" weight="medium" color="secondary" className="leading-[26px] max-w-2xl">
            {answer}
          </Text>
        </div>
      </div>
    </div>
  );
}
