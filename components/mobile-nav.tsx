import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, ChevronDown, Wallet, Database, Headset, CreditCard, Share2, Building2, FileText, Briefcase } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const productsItems = [
  {
    title: "TrustCore Wallet",
    description: "Manage secure multi-chain digital assets",
    icon: <Wallet className="text-[#000000]" size={20} />,
    href: "/products/wallet"
  },
  {
    title: "TrustCore Exchange",
    description: "Unified liquidity and high-performance trading",
    icon: <Database className="text-[#000000]" size={20} />,
    href: "/products/exchange"
  },
  {
    title: "Fintech Advisory",
    description: "Guide blockchain strategy and financial innovation",
    icon: <Headset className="text-[#000000]" size={20} />,
    href: "/products/advisory"
  },
  {
    title: "TrustCore Payment Gateway",
    description: "Enable global payments with digital assets",
    icon: <CreditCard className="text-[#000000]" size={20} />,
    href: "/products/gateway"
  },
  {
    title: "DeFi Platform",
    description: "Explore decentralized finance and yield opportunities",
    icon: <Share2 className="text-[#000000]" size={20} />,
    href: "/products/defi"
  }
];

const companyItems = [
  {
    title: "About Us",
    description: "Meet the team behind TrustCore",
    icon: <Building2 className="text-[#000000]" size={20} />,
    href: "/about"
  },
  {
    title: "Press Kit",
    description: "Download brand assets and media resources",
    icon: <FileText className="text-[#000000]" size={20} />,
    href: "/company/press"
  },
  {
    title: "Careers",
    description: "Join us in building the future of finance",
    icon: <Briefcase className="text-[#000000]" size={20} />,
    href: "/company/careers"
  }
];

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setExpandedSection(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        className="fixed top-0 left-0 w-full h-full z-50 bg-white shadow-xl lg:hidden flex flex-col md:max-w-[480px] md:left-auto md:right-0"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Header row */}
        <div
          className="flex items-center justify-between h-[72px] border-b border-[#F1F5F9] px-[16px] md:px-[32px] flex-shrink-0"
        >
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity" onClick={onClose}>
            <span className="text-[24px] font-bold text-[#0F172A] tracking-tight leading-none">
              TrustCore<sup className="text-[10px] ml-0.5 align-super">™</sup>
            </span>
          </Link>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#F8FAFC] transition-colors"
            aria-label="Close menu"
          >
            <X size={22} className="text-[#0F172A]" />
          </button>
        </div>

        {/* Scrollable Nav Area */}
        <nav className="flex-grow overflow-y-auto px-[16px] md:px-[32px] py-4 flex flex-col gap-2">
          
          {/* Products Accordion */}
          <div className="flex flex-col border-b border-[#F1F5F9]">
            <button 
              onClick={() => toggleSection("products")}
              className="flex items-center justify-between w-full py-[18px] group"
            >
              <span className={`text-[16px] font-semibold leading-[24px] transition-colors ${expandedSection === "products" ? "text-[#0185EE]" : "text-[#0F172A] group-hover:text-[#0185EE]"}`}>
                Products
              </span>
              <ChevronDown 
                size={20} 
                className={`transition-transform duration-300 ${expandedSection === "products" ? "rotate-180 text-[#0185EE]" : "text-[#94A3B8]"}`} 
              />
            </button>
            <AnimatePresence>
              {expandedSection === "products" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden flex flex-col gap-[24px] pb-6"
                >
                  <span className="text-[14px] leading-[20px] font-medium text-[#0185EE] tracking-[-0.35px] font-sans">
                    Products & Services
                  </span>
                  <div className="flex flex-col gap-[16px]">
                    {productsItems.map((item) => (
                      <Link 
                        key={item.title} 
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-start gap-4 p-2 -m-2 rounded-[12px] transition-all duration-200"
                      >
                        <div className="w-[40px] h-[40px] flex-shrink-0 flex items-center justify-center rounded-[10px] bg-[#F3F4F6] group-hover:bg-[#E8F1FF] border border-transparent transition-all duration-200">
                          {item.icon}
                        </div>
                        <div className="flex flex-col gap-0.5 py-0.5">
                          <span className="text-[15px] leading-[20px] font-semibold text-[#14141E] group-hover:text-[#0185EE] transition-colors">
                            {item.title}
                          </span>
                          <span className="text-[13px] leading-snug text-[#626268]">
                            {item.description}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Company Accordion */}
          <div className="flex flex-col border-b border-[#F1F5F9]">
            <button 
              onClick={() => toggleSection("company")}
              className="flex items-center justify-between w-full py-[18px] group"
            >
              <span className={`text-[16px] font-semibold leading-[24px] transition-colors ${expandedSection === "company" ? "text-[#0185EE]" : "text-[#0F172A] group-hover:text-[#0185EE]"}`}>
                Company
              </span>
              <ChevronDown 
                size={20} 
                className={`transition-transform duration-300 ${expandedSection === "company" ? "rotate-180 text-[#0185EE]" : "text-[#94A3B8]"}`} 
              />
            </button>
            <AnimatePresence>
              {expandedSection === "company" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden flex flex-col gap-[24px] pb-6"
                >
                  <span className="text-[14px] leading-[20px] font-medium text-[#0185EE] tracking-[-0.35px] font-sans">
                    Company
                  </span>
                  <div className="flex flex-col gap-[16px]">
                    {companyItems.map((item) => (
                      <Link 
                        key={item.title} 
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-start gap-4 p-2 -m-2 rounded-[12px] transition-all duration-200"
                      >
                        <div className="w-[40px] h-[40px] flex-shrink-0 flex items-center justify-center rounded-[10px] bg-[#F3F4F6] group-hover:bg-[#E8F1FF] border border-transparent transition-all duration-200">
                          {item.icon}
                        </div>
                        <div className="flex flex-col gap-0.5 py-0.5">
                          <span className="text-[15px] leading-[20px] font-semibold text-[#14141E] group-hover:text-[#0185EE] transition-colors">
                            {item.title}
                          </span>
                          <span className="text-[13px] leading-snug text-[#626268]">
                            {item.description}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Standalone Links */}
          <Link 
            href="/blog" 
            onClick={onClose}
            className="flex items-center justify-between w-full py-[18px] border-b border-[#F1F5F9] group"
          >
            <span className="text-[16px] font-semibold leading-[24px] text-[#0F172A] group-hover:text-[#0084FF] transition-colors">
              Blog
            </span>
          </Link>

        </nav>

        {/* CTA Button */}
        <div className="px-[16px] md:px-[32px] pt-4 pb-8 flex-shrink-0">
          <Link href="/products" onClick={onClose}>
            <Button
              variant="primary"
              size="hero"
              className="w-full h-[56px] text-[16px] font-semibold rounded-full"
            >
              Explore Products
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

MobileNav.displayName = "MobileNav";
export default MobileNav;
