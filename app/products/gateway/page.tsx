"use client";

import React from "react";
import Image from "next/image";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HandCoins, CircleDollarSign, RefreshCw, Send, Building2, CreditCard, Smartphone } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const securitySlides = [
  {
    id: "step-1-multi-layer",
    title: "Multi-Layer Security",
    description: "Military-grade encryption and MPC (Multi-Party Computation) for asset protection.",
    image: "/images/gateway/multi-layer-security.avif"
  },
  {
    id: "step-2-regulatory",
    title: "Regulatory Frameworks",
    description: "Built-in tools to support KYC/AML requirements and global compliance standards.",
    image: "/images/gateway/regulatory-frameworks.avif"
  },
  {
    id: "step-3-enterprise",
    title: "Enterprise Reliability",
    description: "Redundant systems designed for high-stakes, high-volume financial environments.",
    image: "/images/gateway/enterprise-reliability.avif"
  }
];

export default function GatewayPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => prev + 0.6);
    }, 40);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setActiveSlide((curr) => (curr + 1) % securitySlides.length);
      setProgress(0);
    }
  }, [progress]);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header onDark={true} />

      <main className="flex-grow">
        {/* --- Hero Section --- */}
        <section className="relative w-full bg-[#000] py-[120px] lg:py-[180px] flex items-center overflow-hidden">
          {/* Background Image constrained to Right Side to prevent massive horizontal zooming */}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-[80%] lg:w-[70%] z-0">
            <Image
              src="/images/gateway/hero.avif"
              alt="Businessman using mobile phone"
              fill
              className="object-cover object-right-top"
              priority
              quality={90}
            />
            {/* Dark Gradient Overlay to seamlessly blend into black background */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)" }}
            />
          </div>

          <Container size="wide" className="relative z-10 w-full">
            <div className="flex flex-col gap-6 lg:gap-8 text-left">

              <h1 className="text-[44px] md:text-[64px] lg:text-[76px] font-bold leading-[1.05] tracking-[-1.5px] text-white">
                Move Value Globally<br />
                With Crypto
              </h1>

              <p className="text-[18px] md:text-[22px] leading-[30px] font-normal text-white/90 max-w-[680px]">
                TrustCore Payment Gateway enables businesses and platforms to accept, send, and manage digital asset payments globally on a secure and scalable infrastructure.
              </p>

              <div className="flex items-center gap-[var(--sm,12px)] mt-4 lg:mt-6">
                <Button variant="on-dark" size="hero">
                  Buy Now
                </Button>
                <Button variant="on-dark" size="hero">
                  Contact Sales
                </Button>
              </div>

            </div>
          </Container>
        </section>

        {/* --- What We've Built! Section --- */}
        <section className="py-[100px] lg:py-[140px] bg-white">
          <Container size="wide">
            <div className="flex flex-col items-center text-center gap-3 mb-16 lg:mb-20">
              <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-[-1.5px] text-black">
                What <span className="text-[#007AFF]">We&apos;ve Built!</span>
              </h2>
              <p className="text-[20px] font-medium leading-[28px] tracking-[-0.5px] text-[#626268] max-w-[524px] mx-auto">
                Designed for real-world payment flows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="relative p-8 bg-[#F7F9FB] rounded-[24px] min-h-[320px] flex flex-col justify-end overflow-hidden">
                <div className="absolute top-8 right-8 text-[#007AFF]">
                  <HandCoins size={44} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[24px] font-bold text-[#14141E] tracking-tight">Buy</h3>
                  <p className="text-[18px] font-medium text-[#626268] leading-relaxed">
                    Enable users to buy crypto through integrated payment <br className="hidden lg:block" />
                    flows using local payment methods.
                  </p>
                </div>
              </div>
 
              {/* Sell Card */}
              <div className="relative p-8 bg-[#F7F9FB] rounded-[24px] min-h-[320px] flex flex-col justify-end overflow-hidden">
                <div className="absolute top-8 right-8 text-[#007AFF]">
                  <CircleDollarSign size={44} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[24px] font-bold text-[#14141E] tracking-tight">Sell</h3>
                  <p className="text-[18px] font-medium text-[#626268] leading-relaxed">
                    Allow users to sell crypto into fiat currencies when needed.
                  </p>
                </div>
              </div>
 
              {/* Swap Card */}
              <div className="relative p-8 bg-[#F7F9FB] rounded-[24px] min-h-[320px] flex flex-col justify-end overflow-hidden">
                <div className="absolute top-8 right-8 text-[#007AFF]">
                  <RefreshCw size={44} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[24px] font-bold text-[#14141E] tracking-tight">Swap</h3>
                  <p className="text-[18px] font-medium text-[#626268] leading-relaxed">
                    Facilitate seamless token-to-token transactions within a <br className="hidden lg:block" />
                    unified system.
                  </p>
                </div>
              </div>
 
              {/* Send & Receive Card */}
              <div className="relative p-8 bg-[#F7F9FB] rounded-[24px] min-h-[320px] flex flex-col justify-end overflow-hidden">
                <div className="absolute top-8 right-8 text-[#007AFF]">
                  <Send size={44} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[24px] font-bold text-[#14141E] tracking-tight">Send & Receive</h3>
                  <p className="text-[18px] font-medium text-[#626268] leading-relaxed">
                    Process and settle digital asset transactions efficiently <br className="hidden lg:block" />
                    across global markets.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* --- Proven At Scale Section --- */}
        <section className="py-[100px] lg:py-[140px] bg-white">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <h2 className="text-[44px] md:text-[56px] lg:text-[64px] font-bold leading-[1.05] tracking-[-1.5px] text-[#14141E] mb-6">
                  Proven At <span className="text-[#007AFF]">Scale</span>
                </h2>
                <p className="text-body-lg font-medium text-[#626268] max-w-[540px]">
                  Infrastructure designed for global crypto payments.
                </p>
              </div>

              <div className="space-y-6 lg:pt-4">
                {[
                  "High-performance systems for handling transaction volume",
                  "Scalable architecture supporting growing demand",
                  "Built for continuous, real-time operation"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#626268] mt-[11px]" />
                    <p className="text-heading-h5 text-[#626268]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* --- Trust & Security Section --- */}
        <section className="py-[100px] lg:py-[140px] bg-white">
          <Container size="wide">
            <div className="flex flex-col items-center text-center gap-3 mb-16 lg:mb-20">
              <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-[-1.5px] text-black">
                Trust &amp; <span className="text-[#007AFF]">Security</span>
              </h2>
              <p className="text-[20px] font-medium leading-[28px] tracking-[-0.5px] text-[#626268] max-w-[524px] mx-auto">
                Compliance-first infrastructure for peace of mind.
              </p>
            </div>

            {/* Showcase Card */}
            <div className="relative w-full h-[480px] md:h-[580px] lg:h-[680px] rounded-[32px] overflow-hidden bg-black">
              <AnimatePresence initial={false}>
                <motion.div
                  key={securitySlides[activeSlide].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.0 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={securitySlides[activeSlide].image}
                    alt={securitySlides[activeSlide].title}
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)" }}
                  />
                </motion.div>
              </AnimatePresence>
 
              {/* Content Overlay */}
              <div className="relative z-10 h-full p-0 flex flex-col justify-between items-start text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={securitySlides[activeSlide].id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-[192px] p-8 md:p-10 lg:p-12 flex flex-col items-start gap-2 shrink-0 self-stretch"
                  >
                    <h3 className="text-[32px] md:text-[44px] lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight">
                      {securitySlides[activeSlide].title}
                    </h3>
                    <p className="text-[17px] md:text-[20px] text-white/80 leading-relaxed font-medium max-w-[620px]">
                      {securitySlides[activeSlide].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
 
                {/* Horizontal Progress Tabs */}
                <div className="w-full">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    {securitySlides.map((slide, index) => (
                      <div
                        key={slide.id}
                        className="relative cursor-pointer group flex flex-col items-center justify-center p-8 gap-2 transition-all duration-300 border-t-[2px] border-white/30"
                        onClick={() => {
                          setActiveSlide(index);
                          setProgress(0);
                        }}
                      >
                        {/* Progress Indicator Filler (Only for active tab) */}
                        {activeSlide === index && (
                          <motion.div
                            key={`progress-${slide.id}`}
                            className="absolute top-[-2px] left-0 h-[2px] bg-white transition-none"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: "linear", duration: 0.1 }}
                          />
                        )}
                        <span className={`text-[20px] font-bold tracking-[-0.5px] leading-[28px] transition-all duration-300 ${activeSlide === index ? "text-white" : "text-white/30 group-hover:text-white/50"}`}>
                          {slide.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* --- Built For Modern Use Cases Section --- */}
        <section className="py-[100px] lg:py-[140px] bg-white">
          <Container size="wide">
            <div className="flex flex-col items-center text-center gap-3 mb-16 lg:mb-20">
              <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-[-1.6px] text-[#14141E]">
                Built For <br /> <span className="text-[#0185EE]">Modern Use Cases</span>
              </h2>
              <p className="text-[20px] font-medium leading-[28px] tracking-[-0.5px] text-[#626268] max-w-[524px] mx-auto">
                Empowering the future of digital commerce.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {/* Businesses */}
              <div className="flex flex-col gap-6">
                <div className="text-[#007AFF]">
                  <Building2 size={32} strokeWidth={2} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-[20px] font-bold text-[#14141E]">Businesses</h3>
                  <p className="text-[16px] md:text-[18px] text-[#626268] leading-relaxed font-medium">
                    Accept digital asset payments and expand into global markets
                  </p>
                </div>
              </div>

              {/* Platforms */}
              <div className="flex flex-col gap-6">
                <div className="text-[#007AFF]">
                  <CreditCard size={32} strokeWidth={2} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-[20px] font-bold text-[#14141E]">Platforms</h3>
                  <p className="text-[16px] md:text-[18px] text-[#626268] leading-relaxed font-medium">
                    Embed crypto payment functionality into apps and services
                  </p>
                </div>
              </div>

              {/* Web3 projects */}
              <div className="flex flex-col gap-6">
                <div className="text-[#007AFF]">
                  <Smartphone size={32} strokeWidth={2} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-[20px] font-bold text-[#14141E]">Web3 projects</h3>
                  <p className="text-[16px] md:text-[18px] text-[#626268] leading-relaxed font-medium">
                    Enable on-chain payment flows and token-based economies
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* --- CTA Section --- */}
        <section className="relative bg-[#08080D] py-[100px] lg:py-[160px] overflow-hidden">
          <Container size="wide">
            <div className="relative z-10 flex flex-col items-center text-center gap-10 md:gap-14">
              <h1 className="text-[40px] md:text-[60px] lg:text-[72px] font-bold leading-[1.1] tracking-tight text-white max-w-[950px]">
                Power Your Gateway<br className="hidden md:block" /> With TrustCore
              </h1>
              <div className="flex justify-center">
                <Button variant="primary" size="nav">
                  Get Started
                </Button>
              </div>
            </div>
          </Container>
        </section>

      </main>

      <Footer hideCTA={true} />
    </div>
  );
}
