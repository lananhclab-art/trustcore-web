"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useViewportLoad } from "@/lib/use-viewport-load";

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
  // Stricter viewport loading with 2-3s delay for heavy components
  const [featuresRef, showFeatures] = useViewportLoad("100px", 2500);
  const [buildRef, showBuild] = useViewportLoad("100px", 2000);
  const [carouselRef, showCarousel] = useViewportLoad("100px", 2200);
  const [visionRef, showVision] = useViewportLoad("100px", 2000);

  return (
    <>
      {/* 
          Main thread protection: 
          Each wrapper (div) ensures that components only mount when:
          1. Element is near viewport (IntersectionObserver)
          2. Mandatory delay has passed (setTimeout 2500ms+)
      */}

      {/* THREE.JS GLOBE SECTION */}
      <div ref={featuresRef} className="min-h-[600px] w-full bg-white">
        {showFeatures && <Features />}
      </div>

      {/* ANIMATED PRODUCT GRID */}
      <div ref={buildRef} className="min-h-[800px] w-full bg-subtle">
        {showBuild && <WhatWeBuild />}
      </div>

      {/* VISUAL CAROUSEL */}
      <div ref={carouselRef} className="min-h-[700px] w-full bg-white">
        {showCarousel && <Carousel />}
      </div>

      {/* COMPANY VISION */}
      <div ref={visionRef} className="min-h-[600px] w-full bg-white">
        {showVision && <OurVision />}
      </div>
    </>
  );
}

export default LazyHomeSections;
