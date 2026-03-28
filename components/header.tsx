"use client";

/**
 * components/header.tsx
 * ─────────────────────────────────────────────────────────────────
 * Site Header — responsive.
 */

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { MegaMenu } from "./mega-menu";
import dynamic from "next/dynamic";

const MobileNav = dynamic(() => import("./mobile-nav").then(mod => mod.MobileNav), {
  ssr: false
});

export interface HeaderProps {
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
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showDarkStyles = onDark && !isScrolled;

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 h-[72px] lg:h-[86px] flex items-center transition-all duration-300">
        {/* Glass Background Layer */}
        <div 
          className={`absolute inset-0 transition-all duration-500 ${
            isScrolled 
              ? "bg-white/80 backdrop-blur-[24px] border-b border-black/5" 
              : showDarkStyles ? "bg-transparent" : "bg-white"
          }`} 
        />

        <Container className="relative z-10 w-full flex items-center justify-between h-full">
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <div className="relative w-[103px] h-[14px]">
              {/* Desktop Logo (Dynamic) */}
              <div className="hidden lg:block absolute inset-0">
                <Image 
                  src={showDarkStyles ? "/images/brand/logo-white.svg" : "/images/brand/logo-black.svg"} 
                  alt="TrustCore" 
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
              {/* Mobile/Tablet Logo (Always Black) */}
              <div className="block lg:hidden absolute inset-0">
                <Image 
                  src="/images/brand/logo-black.svg" 
                  alt="TrustCore" 
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </div>
          </Link>

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
                  <Link href={item.href} className={`text-[14px] font-medium transition-colors ${showDarkStyles ? "text-white/90 hover:text-white" : "text-text-primary/80 hover:text-text-primary"}`}>
                    {item.label}
                  </Link>
                ) : (
                  <div className="flex items-center gap-1.5 h-full">
                    <span className={`text-[14px] font-medium transition-colors ${showDarkStyles ? "text-white/90 group-hover/nav:text-white" : "text-text-primary/80 group-hover/nav:text-text-primary"}`}>
                      {item.label}
                    </span>
                    {item.chevron && (
                      <ChevronDown size={14} strokeWidth={2.5} className={showDarkStyles ? "text-white/60" : "text-text-primary/40"} />
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
              <Button variant={showDarkStyles ? "on-dark" : "primary"} size="nav">
                Explore Products
              </Button>
            </Link>
          </div>

          <button
            className="flex lg:hidden items-center justify-center w-10 h-10 rounded-full hover:bg-bg-secondary transition-colors"
            onClick={() => setMobileNavOpen(true)}
          >
            <Menu size={24} strokeWidth={2.5} className="text-text-primary" />
          </button>
        </Container>
      </header>
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  );
};

export default Header;
