"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useViewportLoad } from "@/lib/use-viewport-load";
import { cn } from "@/lib/cn";

// Dynamic imports — each section only loads when rendered
const Features = dynamic(() => import("@/components/features"), { ssr: false });
const WhatWeBuild = dynamic(() => import("@/components/what-we-build"), { ssr: false });
const Carousel = dynamic(() => import("@/components/carousel"), { ssr: false });
const OurVision = dynamic(() => import("@/components/our-vision"), { ssr: false });

/**
 * LazyHomeSections — renders below-fold homepage sections 
 * only when the user scrolls near them.
 * 
 * This keeps the initial JS bundle lightweight (no three.js, no heavy images)
 * by deferring everything below the hero.
 */
export function LazyHomeSections() {
  // Balanced viewport loading: Delay is long enough to dodge TBT but short enough to be felt.
  // 800ms-1200ms is the 'sweet spot' for hydration stability vs UX.
  const [featuresRef, showFeatures] = useViewportLoad("200px", 800);
  const [buildRef, showBuild] = useViewportLoad("200px", 600);
  const [carouselRef, showCarousel] = useViewportLoad("200px", 700);
  const [visionRef, showVision] = useViewportLoad("200px", 500);

  return (
    <>
      <div 
        ref={featuresRef} 
        className={cn(
          "min-h-[600px] w-full bg-white transition-opacity duration-1000",
          showFeatures ? "opacity-100" : "opacity-0"
        )}
      >
        {showFeatures && <Features />}
      </div>

      <div 
        ref={buildRef} 
        className={cn(
          "min-h-[800px] w-full bg-[#F8FAFC] transition-opacity duration-1000",
          showBuild ? "opacity-100" : "opacity-0"
        )}
      >
        {showBuild && <WhatWeBuild />}
      </div>

      <div 
        ref={carouselRef} 
        className={cn(
          "min-h-[700px] w-full bg-white transition-opacity duration-1000",
          showCarousel ? "opacity-100" : "opacity-0"
        )}
      >
        {showCarousel && <Carousel />}
      </div>

      <div 
        ref={visionRef} 
        className={cn(
          "min-h-[600px] w-full bg-white transition-opacity duration-1000",
          showVision ? "opacity-100" : "opacity-0"
        )}
      >
        {showVision && <OurVision />}
      </div>
    </>
  );
}

export default LazyHomeSections;
