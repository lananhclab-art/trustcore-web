"use client";

import React from "react";
import Image from "next/image";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HandCoins, CircleDollarSign, RefreshCw, Send, Building2, CreditCard, Smartphone } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Text } from "@/components/ui/text";

const securitySlides = [
  {
    id: "secure",
    title: "Secure Engineering",
    description: "Engineers are trained to follow secure development practices",
    image: "/images/security/secure.avif",
  },
  {
    id: "integrated",
    title: "Integrated Design",
    description: "Security considerations are part of product and infrastructure design",
    image: "/images/security/integrated.png",
  },
  {
    id: "proactive",
    title: "Proactive Collaboration",
    description: "Teams collaborate to identify and reduce potential risks early",
    image: "/images/security/proactive.avif",
  },
];


export default function GatewayPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isSliderInView, setIsSliderInView] = useState(false);

  // Only run the timer when the slider section is visible
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsSliderInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isSliderInView) return;
    const timer = setInterval(() => {
      setProgress((prev) => prev + 0.6);
    }, 40);
    return () => clearInterval(timer);
  }, [isSliderInView]);

  useEffect(() => {
    if (progress >= 100) {
      setActiveSlide((curr) => (curr + 1) % securitySlides.length);
      setProgress(0);
    }
  }, [progress]);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden">
      <Header onDark={true} />

      <main className="flex-grow">
        {/* --- Hero Section --- */}
        <section className="relative w-full bg-[#000] py-6xl lg:py-[200px] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-[80%] lg:w-[70%] z-0">
            <Image
              src="/images/gateway/hero.avif"
              alt="Businessman using mobile phone"
              fill
              className="object-cover object-right-top opacity-80"
              priority
              quality={90}
            />
            {/* Dark Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)" }}
            />
          </div>

          <Container className="relative z-10 w-full">
            <div className="max-w-4xl space-y-8 text-left">
              <Text as="div" variant="heading-h1" color="inverse">
                  Built for Global <br className="hidden md:block" />
                  Crypto Payments
              </Text>

              <Text variant="body-lg" weight="medium" color="inverse" className="opacity-80 max-w-2xl">
                TrustCore Payment Gateway enables businesses and platforms to accept, send, and manage digital asset payments globally on a secure and scalable infrastructure.
              </Text>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-3 pt-6">
                <Button variant="on-dark" size="nav" className="rounded-full font-bold w-full md:w-auto">
                  Buy Now
                </Button>
                <Button variant="on-dark" size="nav" className="rounded-full font-bold w-full md:w-auto">
                  Contact Sales
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* --- What We've Built! Section --- */}
        <Section spacing="lg" bg="white">
          <Container>
            <SectionHeader
              title={<>What <span className="text-[#007AFF]">We&apos;ve Built</span></>}
              subtitle="Designed for real-world payment flows."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 lg:mt-20">
              {/* Buy Card */}
              <div className="p-8 bg-[#F6F8FA] rounded-[32px] flex flex-col gap-8 group transition-all">
                <div className="flex justify-end w-full text-[#007AFF]">
                  <HandCoins size={36} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col gap-3">
                  <Text variant="heading-h4" as="h4" color="primary" className="tracking-tight">Buy</Text>
                  <Text variant="body-lg" weight="medium" color="secondary" className="leading-[28px]">
                    Enable users to buy crypto through integrated payment <br className="hidden lg:block" />
                    flows using local payment methods.
                  </Text>
                </div>
              </div>
  
              {/* Sell Card */}
              <div className="p-8 bg-[#F6F8FA] rounded-[32px] flex flex-col gap-8 group transition-all">
                <div className="flex justify-end w-full text-[#007AFF]">
                  <CircleDollarSign size={36} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col gap-3">
                  <Text variant="heading-h4" as="h4" color="primary" className="tracking-tight">Sell</Text>
                  <Text variant="body-lg" weight="medium" color="secondary" className="leading-[28px]">
                    Allow users to sell crypto into fiat currencies when needed.
                  </Text>
                </div>
              </div>
  
              {/* Swap Card */}
              <div className="p-8 bg-[#F6F8FA] rounded-[32px] flex flex-col gap-8 group transition-all">
                <div className="flex justify-end w-full text-[#007AFF]">
                  <RefreshCw size={36} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col gap-3">
                  <Text variant="heading-h4" as="h4" color="primary" className="tracking-tight">Swap</Text>
                  <Text variant="body-lg" weight="medium" color="secondary" className="leading-[28px]">
                    Facilitate seamless token-to-token transactions within a <br className="hidden lg:block" />
                    unified system.
                  </Text>
                </div>
              </div>
  
              {/* Send & Receive Card */}
              <div className="p-8 bg-[#F6F8FA] rounded-[32px] flex flex-col gap-8 group transition-all">
                <div className="flex justify-end w-full text-[#007AFF]">
                  <Send size={36} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col gap-3">
                  <Text variant="heading-h4" as="h4" color="primary" className="tracking-tight">Send & Receive</Text>
                  <Text variant="body-lg" weight="medium" color="secondary" className="leading-[28px]">
                    Process and settle digital asset transactions efficiently <br className="hidden lg:block" />
                    across global markets.
                  </Text>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* --- Proven At Scale Section --- */}
        <Section spacing="lg" bg="white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div className="max-w-xl space-y-6">
                <Text as="div" variant="heading-h1" color="primary" className="font-bold">
                  Proven At <span className="text-brand">Scale</span>
                </Text>
              <Text variant="body-lg" weight="medium" color="secondary">
                Infrastructure designed for global crypto payments.
              </Text>
              </div>

              <div className="space-y-8 pt-4">
                {[
                  "High-performance systems for handling transaction volume",
                  "Scalable architecture supporting growing demand",
                  "Built for continuous, real-time operation"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-5">
                    <div className="w-6 h-6 rounded-full bg-[#007AFF] flex items-center justify-center text-white flex-shrink-0 mt-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <Text variant="body-lg" weight="bold" color="primary" className="leading-tight tracking-tight">
                      {item}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* --- Trust & Security Section --- */}
        <Section spacing="lg" bg="white">
          <Container>
            <SectionHeader
              title={<>Trust & <span className="text-[#007AFF]">Security</span></>}
              subtitle="Compliance-first infrastructure for peace of mind."
              align="center"
            />

            {/* Trust & Security Slider Container */}
            <div className="mt-12 lg:mt-20 w-full" ref={sliderRef}>
              {/* Desktop Carousel View */}
              <div className="hidden md:block relative w-full h-[583px] rounded-[24px] overflow-hidden bg-black">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={securitySlides[activeSlide].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={securitySlides[activeSlide].image}
                      alt={securitySlides[activeSlide].title}
                      fill
                      className="object-cover opacity-80"
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
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="w-full p-12 lg:p-16 flex flex-col items-start gap-4 shrink-0"
                    >
                      <Text variant="heading-h2" as="h2" color="inverse">
                        {securitySlides[activeSlide].title}
                      </Text>
                      <Text variant="body-lg" weight="medium" color="inverse" className="opacity-80 md:whitespace-nowrap">
                        {securitySlides[activeSlide].description}
                      </Text>
                    </motion.div>
                  </AnimatePresence>
   
                  {/* Horizontal Progress Tabs */}
                  <div className="w-full bg-black/30 backdrop-blur-md">
                    <div className="grid grid-cols-3">
                      {securitySlides.map((slide, index) => (
                        <div
                          key={slide.id}
                          className="relative cursor-pointer group flex flex-col items-center justify-center p-8 gap-2 transition-all duration-300 border-t-[3px] border-white/5"
                          onClick={() => {
                            setActiveSlide(index);
                            setProgress(0);
                          }}
                        >
                          {activeSlide === index && (
                            <motion.div
                              key={`progress-${slide.id}`}
                              className="absolute top-[-3px] left-0 h-[3px] bg-white transition-none"
                              initial={{ width: 0 }}
                              animate={{ width: `${progress}%` }}
                              transition={{ ease: "linear", duration: 0.1 }}
                            />
                          )}
                          <Text 
                            variant="heading-h5" 
                            as="span" 
                            color="inverse" 
                            className={cn(
                              "transition-all duration-300 text-center",
                              activeSlide === index ? "opacity-100" : "opacity-30 group-hover:opacity-50"
                            )}
                          >
                            {slide.title}
                          </Text>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile/Tablet Horizontal Scrolling Cards View */}
              <div className="flex lg:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4 mt-8">
                {securitySlides.map((slide) => (
                  <div 
                    key={slide.id} 
                    className="relative flex-shrink-0 w-[85%] md:w-[45%] aspect-[4/5.5] rounded-[24px] overflow-hidden snap-start bg-black"
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover opacity-80"
                      unoptimized
                    />
                    <div 
                      className="absolute inset-0" 
                      style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)" }}
                    />
                    <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col gap-2 text-left">
                      <Text as="div" variant="heading-h3" weight="bold" color="inverse" className="leading-tight tracking-tight">
                        {slide.title}
                      </Text>
                      <Text variant="body-md" weight="medium" color="inverse" className="opacity-90 leading-snug">
                        {slide.description}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* --- Built For Modern Use Cases Section --- */}
        <Section spacing="lg" bg="white">
          <Container>
            <SectionHeader
              title={<>Built For <br /> <span className="text-[#007AFF]">Modern Use Cases</span></>}
              subtitle="Empowering the future of digital commerce."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mt-12 lg:mt-20">
              {/* Businesses */}
              <div className="flex flex-col items-start gap-6">
                <div className="text-[#007AFF]">
                  <Building2 size={36} strokeWidth={2.5} />
                </div>
                <div className="space-y-2">
                  <Text variant="heading-h5" as="h5" color="primary" className="tracking-tight">Businesses</Text>
                  <Text variant="body-md" weight="regular" color="secondary" className="leading-[26px]">
                    Accept digital asset payments and expand into global markets
                  </Text>
                </div>
              </div>

              {/* Platforms */}
              <div className="flex flex-col items-start gap-6">
                <div className="text-[#007AFF]">
                  <CreditCard size={36} strokeWidth={2.5} />
                </div>
                <div className="space-y-2">
                  <Text variant="heading-h5" as="h5" color="primary" className="tracking-tight">Platforms</Text>
                  <Text variant="body-md" weight="regular" color="secondary" className="leading-[26px]">
                    Embed crypto payment functionality into apps and services
                  </Text>
                </div>
              </div>

              {/* Web3 projects */}
              <div className="flex flex-col items-start gap-6">
                <div className="text-[#007AFF]">
                  <Smartphone size={36} strokeWidth={2.5} />
                </div>
                <div className="space-y-2">
                  <Text variant="heading-h5" as="h5" color="primary" className="tracking-tight">Web3 projects</Text>
                  <Text variant="body-md" weight="regular" color="secondary" className="leading-[26px]">
                    Enable on-chain payment flows and token-based economies
                  </Text>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* --- CTA Section --- */}
        <Section spacing="lg" bg="dark" className="relative overflow-hidden">
          <Container>
            <div className="text-center max-w-4xl mx-auto space-y-12">
              <Text as="div" variant="heading-h1" weight="bold" color="inverse">
                Power Your Gateway<br className="hidden md:block" /> With TrustCore
              </Text>
              <div className="flex justify-center">
                <Button variant="primary" size="nav">
                  Get Started
                </Button>
              </div>
            </div>
          </Container>
        </Section>

      </main>

      <Footer hideCTA={true} />
    </div>
  );
}
