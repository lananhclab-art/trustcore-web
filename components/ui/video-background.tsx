"use client";

/**
 * VideoBackground — zero-layout-shift background media component.
 *
 * Architecture:
 *   ┌─────────────────────────────────────┐  ← wrapper (relative, aspect-[16/9], overflow-hidden)
 *   │  ┌─────────────────────────────┐    │
 *   │  │  POSTER (absolute inset-0)  │    │  ← layer 1: next/image, object-cover, always present
 *   │  │  VIDEO  (absolute inset-0)  │    │  ← layer 2: <video>, object-cover, fades in over poster
 *   │  │  OVERLAY (absolute inset-0) │    │  ← layer 3: gradient overlay
 *   │  │  CONTENT (relative z-10)    │    │  ← layer 4: children
 *   │  └─────────────────────────────┘    │
 *   └─────────────────────────────────────┘
 *
 * Poster and video share IDENTICAL positioning:
 *   - absolute inset-0  (same anchor)
 *   - w-full h-full     (same dimensions)
 *   - object-cover      (same scaling)
 *   - object-center     (same focal point)
 *
 * Result: zero visual difference when video replaces poster.
 */

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "../../lib/cn";

export interface VideoBackgroundProps {
  posterSrc: string;
  posterAlt?: string;
  videoSrc?: string;
  overlayClassName?: string;
  className?: string;
  children?: React.ReactNode;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({
  posterSrc,
  posterAlt = "Hero background",
  videoSrc,
  overlayClassName,
  className,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // ── Delayed initialization ──
  useEffect(() => {
    const timer = setTimeout(() => {
      // Allow video intersection logic to start only after initial render is stable
      setShouldLoadVideo(true);
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);

  // ── Check prefers-reduced-motion ──────────────────────────────
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // ── IntersectionObserver — lazy load video ────────────────────
  useEffect(() => {
    if (!videoSrc || prefersReducedMotion) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [videoSrc, prefersReducedMotion]);

  // ── Load + play video once observer fires ─────────────────────
  useEffect(() => {
    if (!shouldLoadVideo || !videoSrc) return;
    const video = videoRef.current;
    if (!video) return;

    video.src = videoSrc;
    video.load();

    const onCanPlay = () => {
      video.play().catch(() => {});
      setVideoReady(true);
    };
    const onError = () => {
      console.warn("[VideoBackground] Video failed to load:", videoSrc);
    };

    video.addEventListener("canplaythrough", onCanPlay);
    video.addEventListener("error", onError);
    return () => {
      video.removeEventListener("canplaythrough", onCanPlay);
      video.removeEventListener("error", onError);
    };
  }, [shouldLoadVideo, videoSrc]);

  // ── Shared positioning classes (poster + video MUST match) ────
  const mediaClasses = "absolute inset-0 w-full h-full object-cover object-center";

  return (
    <div
      ref={containerRef}
      className={cn(
        // Fixed aspect ratio container — prevents ALL layout shift
        "relative w-full overflow-hidden aspect-[16/9] bg-[#000]",
        className,
      )}
    >
      {/* ── Layer 1: Poster image (always visible, LCP) ── */}
      <Image
        src={posterSrc}
        alt={posterAlt}
        fill
        priority
        className={cn(
          mediaClasses,
          "transition-opacity duration-1000 ease-in-out",
          videoReady ? "opacity-0" : "opacity-100",
        )}
        sizes="(max-width: 1240px) 100vw, 1280px"
        quality={90}
      />

      {/* ── Layer 2: Video (identical position, fades IN) ── */}
      {videoSrc && !prefersReducedMotion && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          className={cn(
            mediaClasses,
            "transition-opacity duration-1000 ease-in-out",
            videoReady ? "opacity-100" : "opacity-0",
          )}
        />
      )}

      {/* ── Layer 3: Gradient overlay ── */}
      <div
        className={cn(
          "absolute inset-0 z-[1]",
          overlayClassName ||
            "bg-gradient-to-r from-black/75 via-black/50 to-black/20",
        )}
        aria-hidden="true"
      />

      {/* ── Layer 4: Content ── */}
      <div className="absolute inset-0 z-10 flex items-center">
        {children}
      </div>
    </div>
  );
};

VideoBackground.displayName = "VideoBackground";
export default VideoBackground;
