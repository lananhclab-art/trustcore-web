"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { cn } from "@/lib/cn";
import { Text } from "./ui/text";

const slides = [
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
  {
    id: "ongoing",
    title: "Ongoing Awareness",
    description: "Continuous awareness ensures security is maintained at every stage",
    image: "/images/security/ongoing.avif",
  },
];

export const SecuritySlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setProgress((prev) => prev + 0.4); // Slower progress for 4 slides
    }, 40);

    return () => clearInterval(timer);
  }, [isInView]);

  useEffect(() => {
    if (progress >= 100) {
      setActiveSlide((curr) => (curr + 1) % slides.length);
      setProgress(0);
    }
  }, [progress]);

  return (
    <div className="w-full" ref={containerRef}>
        {/* Desktop Carousel View */}
        <div className="hidden lg:block relative w-full h-[583px] rounded-[24px] overflow-hidden bg-black">
          {/* Main Slide Image */}
          <AnimatePresence initial={false}>
            <motion.div
              key={slides[activeSlide].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              <Image
                src={slides[activeSlide].image}
                alt={slides[activeSlide].title}
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 1240px) 100vw, 1240px"
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
                key={slides[activeSlide].id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full p-12 lg:p-16 flex flex-col items-start gap-4 shrink-0"
              >
                <Text variant="heading-h2" as="h2" color="inverse" className="font-bold">
                  {slides[activeSlide].title}
                </Text>
                <Text variant="body-lg" weight="medium" color="inverse" className="opacity-80 md:whitespace-nowrap">
                  {slides[activeSlide].description}
                </Text>
              </motion.div>
            </AnimatePresence>

            {/* Horizontal Progress Tabs */}
            <div className="w-full bg-black/30 backdrop-blur-md">
              <div className="grid grid-cols-4">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className="relative cursor-pointer group flex flex-col items-center justify-center p-8 gap-2 transition-all duration-300 border-t-[3px] border-white/5"
                    onClick={() => {
                      setActiveSlide(index);
                      setProgress(0);
                    }}
                  >
                    <div className="text-center">
                      <Text 
                        variant="body-md" 
                        weight="bold" 
                        color="inverse"
                        className={cn(
                          "transition-opacity duration-300",
                          activeSlide === index ? "opacity-100" : "opacity-40"
                        )}
                      >
                        {slide.title}
                      </Text>
                    </div>
                    
                    {activeSlide === index && (
                      <motion.div
                        layoutId="activeProgress"
                        className="absolute top-[-3px] left-0 h-[3px] bg-white transition-none"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0 }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden mt-8">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4">
            {slides.map((slide) => (
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
    </div>
  );
};

export default SecuritySlider;
