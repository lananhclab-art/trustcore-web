"use client";

/**
 * components/header.tsx
 * ─────────────────────────────────────────────────────────────────
 * Site Header — responsive.
 * Desktop: transparent, overlays dark hero, white nav links + CTA.
 * Mobile:  fixed white bar, black logo, hamburger → MobileNav drawer.
 *
 * Matches Figma node 9173-169 (header bar) + 9213-289 (open state).
 * ─────────────────────────────────────────────────────────────────
 */

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { MobileNav } from "./mobile-nav";
import { MegaMenu } from "./mega-menu";
import { motion, AnimatePresence } from "framer-motion";

export interface HeaderProps {
  /** 
   * Whether the header is overlaying a dark background (like a hero video).
   * If true, nav links will be white when not scrolled.
   * If false, nav links will be text-primary even when not scrolled.
   */
  onDark?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onDark = true }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // Check on mount
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showDarkStyles = onDark && !isScrolled;

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 h-[72px] lg:h-[86px] flex items-center transition-all duration-300"
      >
        {/* Header Background Layer — Decoupled from children to avoid opacity inheritance */}
        <div 
          className={`absolute inset-0 transition-all duration-300 ${
            !isScrolled 
              ? showDarkStyles ? "bg-white lg:bg-transparent" : "bg-white" 
              : "bg-white/80 backdrop-blur-[12px]"
          }`} 
        />
        <Container size="wide" className="relative z-10 w-full flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity flex-shrink-0">
            <div className="relative w-[103px] h-[14px]">
              <Image 
                src={showDarkStyles ? "/images/brand/logo-white.svg" : "/images/brand/logo-black.svg"} 
                alt="TrustCore" 
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 h-full">
            {[
              { label: "Products", chevron: true, mega: "products" },
              { label: "Company", chevron: true, mega: "company" },
              { label: "Blog", href: "/blog" },
            ].map((item) => (
              <div 
                key={item.label} 
                className="relative h-full flex items-center cursor-pointer group/nav"
                onMouseEnter={() => {
                  if (item.mega === "products") setIsProductsOpen(true);
                  if (item.mega === "company") setIsCompanyOpen(true);
                }}
                onMouseLeave={() => {
                  if (item.mega === "products") setIsProductsOpen(false);
                  if (item.mega === "company") setIsCompanyOpen(false);
                }}
              >
                {item.href ? (
                  <Link href={item.href} className={`text-[14px] leading-[20px] tracking-[-0.35px] font-medium transition-colors duration-300 ${showDarkStyles ? "text-white/90 hover:text-white" : "text-[#0F172A]/80 hover:text-[#0F172A]"}`}>
                    {item.label}
                  </Link>
                ) : (
                  <div className="flex items-center gap-1.5 h-full">
                    <span className={`text-[14px] leading-[20px] tracking-[-0.35px] font-medium transition-colors duration-300 ${showDarkStyles ? "text-white/90 group-hover/nav:text-white" : "text-[#0F172A]/80 group-hover/nav:text-[#0F172A]"}`}>
                      {item.label}
                    </span>
                    {item.chevron && (
                      <ChevronDown size={14} className={`transition-colors duration-300 ${showDarkStyles ? "text-white/60 group-hover/nav:text-white" : "text-[#0F172A]/40 group-hover/nav:text-[#0F172A]"}`} />
                    )}
                  </div>
                )}
                
                {item.mega === "products" && <MegaMenu type="products" isOpen={isProductsOpen} />}
                {item.mega === "company" && <MegaMenu type="company" isOpen={isCompanyOpen} />}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link href="/products">
              <Button variant={showDarkStyles ? "on-dark" : "primary"} size="nav" className="transition-all duration-300">
                Explore Products
              </Button>
            </Link>
          </div>

          {/* Hamburger — Mobile Only */}
          <button
            className="flex lg:hidden items-center justify-center w-10 h-10 rounded-full hover:bg-[#F8FAFC] transition-colors"
            aria-label="Open menu"
            onClick={() => setMobileNavOpen(true)}
          >
            <Menu size={24} className="text-text-primary" />
          </button>
        </Container>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />
    </>
  );
};

Header.displayName = "Header";
export default Header;
