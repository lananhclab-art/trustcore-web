"use client";

import React, { useState } from "react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, X, Twitter, Linkedin, Youtube, Send, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState("");

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header onDark={false} />

      <main className="flex-grow pt-[100px] lg:pt-[140px]">
        {/* --- Hero & Form Section --- */}
        <section className="pb-[100px] lg:pb-[140px]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left Column: Title & Info */}
              <div className="flex flex-col gap-6 lg:max-w-[500px]">
                <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-bold leading-[1.1] tracking-tight text-[#14141E]">
                  Get in <span className="text-[#0185EE]">touch</span>
                </h1>
                <p className="text-[20px] font-medium leading-[28px] tracking-[-0.5px] text-[#626268]">
                  Have questions about TrustCore or exploring a potential collaboration? 
                  Our team is here to help you build the future of finance.
                </p>

                {/* Optional Office Info if needed, but Figma mostly showed title/subtitle */}
              </div>

              {/* Right Column: Contact Form */}
              <div className="md:p-2">
                <h3 className="text-[24px] font-bold text-[#14141E] mb-8">
                  Tell us about your request
                </h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input 
                      className="w-full h-[56px] px-[16px] rounded-[12px] border border-[#B6B6B9] bg-transparent text-[#14141E] text-[16px] font-normal leading-[20px] tracking-[-0.45px] placeholder:text-[#B6B6B9] focus:outline-none focus:border-[#0185EE] transition-all"
                      placeholder="First Name"
                      required
                    />
                    <input 
                      className="w-full h-[56px] px-[16px] rounded-[12px] border border-[#B6B6B9] bg-transparent text-[#14141E] text-[16px] font-normal leading-[20px] tracking-[-0.45px] placeholder:text-[#B6B6B9] focus:outline-none focus:border-[#0185EE] transition-all"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <input 
                    className="w-full h-[56px] px-[16px] rounded-[12px] border border-[#B6B6B9] bg-transparent text-[#14141E] text-[16px] font-normal leading-[20px] tracking-[-0.45px] placeholder:text-[#B6B6B9] focus:outline-none focus:border-[#0185EE] transition-all"
                    placeholder="Work Email"
                    type="email"
                    required
                  />
                  <input 
                    className="w-full h-[56px] px-[16px] rounded-[12px] border border-[#B6B6B9] bg-transparent text-[#14141E] text-[16px] font-normal leading-[20px] tracking-[-0.45px] placeholder:text-[#B6B6B9] focus:outline-none focus:border-[#0185EE] transition-all"
                    placeholder="Company Name"
                    required
                  />
                  <input 
                    className="w-full h-[56px] px-[16px] rounded-[12px] border border-[#B6B6B9] bg-transparent text-[#14141E] text-[16px] font-normal leading-[20px] tracking-[-0.45px] placeholder:text-[#B6B6B9] focus:outline-none focus:border-[#0185EE] transition-all"
                    placeholder="Job Title"
                    required
                  />
                  <input 
                    className="w-full h-[56px] px-[16px] rounded-[12px] border border-[#B6B6B9] bg-transparent text-[#14141E] text-[16px] font-normal leading-[20px] tracking-[-0.45px] placeholder:text-[#B6B6B9] focus:outline-none focus:border-[#0185EE] transition-all"
                    placeholder="Phone Number (optional)"
                  />
                  
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full h-[56px] px-[16px] rounded-[12px] border border-[#B6B6B9] bg-white flex items-center justify-between text-[#14141E] text-[16px] font-normal leading-[20px] tracking-[-0.45px] transition-all hover:border-[#0185EE]"
                    >
                      <span>{selectedInquiry || "Inquiry Type"}</span>
                      <ChevronDown 
                        size={20} 
                        className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
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
                                className="w-full h-[54px] px-[16px] flex items-center text-[#14141E] text-[16px] hover:bg-[#F9F9FB] transition-colors text-left"
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
                    className="w-full mt-4 h-[56px] text-[18px] !rounded-full px-[16px] py-[12px] flex items-center justify-center gap-[8px]"
                  >
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
          </Container>
        </section>

        {/* --- Stay Connected Section --- */}
        <section className="pb-[100px] lg:pb-[140px]">
          <Container size="wide">
            <div className="relative overflow-hidden rounded-[40px] bg-[#1C2427] min-h-[400px] flex items-center">
              {/* Content */}
              <div className="relative z-20 px-8 py-12 md:px-16 md:py-20 flex flex-col gap-6 md:max-w-[600px]">
                <h2 className="text-[40px] md:text-[56px] font-bold text-white tracking-tight">
                  Stay Connected
                </h2>
                <p className="text-[20px] font-medium text-white/60">
                  Follow TrustCore for updates, insights, and latest announcements in the digital asset space.
                </p>
                <div className="flex gap-6 pt-4">
                  <SocialIcon icon={<Twitter />} href="#" ariaLabel="X (Twitter)" />
                  <SocialIcon icon={<Linkedin />} href="#" ariaLabel="LinkedIn" />
                  <SocialIcon icon={<Youtube />} href="#" ariaLabel="YouTube" />
                  <SocialIcon icon={<Send />} href="#" ariaLabel="Telegram" />
                </div>
              </div>

              {/* Background Graphic/Image */}
              <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-40 md:opacity-100 z-10 pointer-events-none">
                <img 
                  src="/images/contact/connected.avif" 
                  alt="Connected technology visualization"
                  className="w-full h-full object-cover object-right"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* --- FAQ Section --- */}
        <section className="pb-[100px] lg:pb-[140px] bg-white">
          <Container size="wide">
            <div className="flex flex-col items-center text-center gap-3 mb-16 lg:mb-20">
              <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-tight text-[#14141E]">
                Frequently Asked <br className="hidden md:block" /> 
                <span className="text-[#0185EE]">Questions</span>
              </h2>
              <p className="text-[20px] font-medium leading-[28px] tracking-[-0.5px] text-[#626268] max-w-[524px] mx-auto">
                Find answers to common questions about TrustCore infrastructure and partnerships.
              </p>
            </div>

            <div className="max-w-[800px] mx-auto space-y-4">
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
        </section>
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
      className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#14141E] transition-all duration-300"
    >
      {React.cloneElement(icon as React.ReactElement, { size: 20 })}
    </a>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-[20px] font-bold text-[#14141E] group-hover:text-[#0185EE] transition-colors">
          {question}
        </span>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? <X className="text-[#0185EE]" size={24} /> : <Plus className="text-[#14141E] group-hover:text-[#0185EE]" size={24} />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-8' : 'max-h-0'}`}
      >
        <p className="text-[18px] font-medium text-[#626268] leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}
