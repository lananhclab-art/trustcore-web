import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet, Share2, Headset, CreditCard, Database, Building2, FileText, Briefcase, ShieldCheck } from "lucide-react";

interface MegaMenuProps {
  isOpen: boolean;
  type: "products" | "company";
}

const productsLeft = [
  {
    title: "TrustCore Wallet",
    description: "Manage secure multi-chain digital assets",
    icon: <Wallet className="text-[#000000]" size={24} strokeWidth={2.5} />,
    href: "https://trustcore.finance/"
  },
  {
    title: "TrustCore Exchange",
    description: "Unified liquidity and high-performance trading",
    icon: <Database className="text-[#000000]" size={24} strokeWidth={2.5} />,
    href: "/products/exchange"
  },
  {
    title: "Fintech Advisory",
    description: "Guide blockchain strategy and financial innovation",
    icon: <Headset className="text-[#000000]" size={24} strokeWidth={2.5} />,
    href: "/products/advisory"
  }
];

const productsRight = [
  {
    title: "TrustCore Payment Gateway",
    description: "Enable global payments with digital assets",
    icon: <CreditCard className="text-[#000000]" size={24} strokeWidth={2.5} />,
    href: "/products/gateway"
  },
  {
    title: "DeFi Platform",
    description: "Explore decentralized finance and yield opportunities",
    icon: <Share2 className="text-[#000000]" size={24} strokeWidth={2.5} />,
    href: "/products/defi"
  }
];

const companyItems = [
  {
    title: "About Us",
    description: "Meet the team behind TrustCore",
    icon: <Building2 className="text-[#000000]" size={24} strokeWidth={2.5} />,
    href: "/about"
  },
  {
    title: "Press Kit",
    description: "Download brand assets and media resources",
    icon: <FileText className="text-[#000000]" size={24} strokeWidth={2.5} />,
    href: "/press"
  },
  {
    title: "Security",
    description: "Our commitment to institutional-grade security",
    icon: <ShieldCheck className="text-[#000000]" size={24} strokeWidth={2.5} />,
    href: "/company/security"
  },
  {
    title: "Careers",
    description: "Join us in building the future of finance",
    icon: <Briefcase className="text-[#000000]" size={24} strokeWidth={2.5} />,
    href: "/careers"
  },
  {
    title: "Contact Us",
    description: "Get in touch with our global team",
    icon: <Headset className="text-[#000000]" size={24} strokeWidth={2.5} />,
    href: "/contact"
  }
];

export function MegaMenu({ isOpen, type }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className={`absolute top-full left-[-32px] inline-flex flex-col items-start gap-[24px] bg-white border border-[#E8E8E9] rounded-[20px] p-[32px_24px] z-[100] origin-top-left shadow-[0_24px_48px_rgba(0,0,0,0.1)] overflow-visible ${type === "products" ? "min-w-[808px]" : "min-w-[428px]"}`}
          style={{ 
            backgroundColor: "#FFFFFF",
            opacity: 1,
            backdropFilter: "none",
            WebkitBackdropFilter: "none"
          }}
        >
          <div className="flex flex-col gap-[24px] w-full items-start">
            <span className="text-[14px] leading-[20px] font-medium text-[#007AFF] tracking-[-0.35px] px-4 font-sans">
              {type === "products" ? "Products & Services" : "Company"}
            </span>
            
            {type === "products" ? (
              <div className="flex gap-[48px] w-full px-4">
                {/* Left Column - 380px wide */}
                <div className="flex flex-col gap-[16px] w-[380px]">
                  {productsLeft.map((product) => (
                    <Link 
                      key={product.title} 
                      href={product.href}
                      target={product.href.startsWith("http") ? "_blank" : undefined}
                      rel={product.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-5 p-2 -m-2 rounded-[16px] transition-all duration-200"
                    >
                      <div className="w-[48px] h-[48px] flex-shrink-0 flex items-center justify-center rounded-[12px] bg-[#F3F4F6] group-hover:bg-[#E8F1FF] border border-transparent transition-all duration-200">
                        {product.icon}
                      </div>
                      <div className="flex flex-col gap-1 py-1">
                        <span className="text-[16px] leading-[20px] font-semibold text-[#14141E] group-hover:text-[#007AFF] transition-colors">
                          {product.title}
                        </span>
                        <span className="text-[14px] leading-snug text-[#626268] group-hover:text-[#374151] transition-colors">
                          {product.description}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Right Column - 380px wide */}
                <div className="flex flex-col gap-[16px] w-[380px]">
                  {productsRight.map((product) => (
                    <Link 
                      key={product.title} 
                      href={product.href}
                      className="group flex items-start gap-5 p-2 -m-2 rounded-[16px] transition-all duration-200"
                    >
                      <div className="w-[48px] h-[48px] flex-shrink-0 flex items-center justify-center rounded-[12px] bg-[#F3F4F6] group-hover:bg-[#E8F1FF] border border-transparent transition-all duration-200">
                        {product.icon}
                      </div>
                      <div className="flex flex-col gap-1 py-1">
                        <span className="text-[16px] leading-[20px] font-semibold text-[#14141E] group-hover:text-[#007AFF] transition-colors">
                          {product.title}
                        </span>
                        <span className="text-[14px] leading-snug text-[#626268] group-hover:text-[#374151] transition-colors">
                          {product.description}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-[16px] w-full px-4">
                {companyItems.map((item) => (
                  <Link 
                    key={item.title} 
                    href={item.href}
                    className="group flex items-start gap-5 p-2 -m-2 rounded-[16px] transition-all duration-200"
                  >
                    <div className="w-[48px] h-[48px] flex-shrink-0 flex items-center justify-center rounded-[12px] bg-[#F3F4F6] group-hover:bg-[#E8F1FF] border border-transparent transition-all duration-200">
                      {item.icon}
                    </div>
                    <div className="flex flex-col gap-1 py-1">
                      <span className="text-[16px] leading-[20px] font-semibold text-[#14141E] group-hover:text-[#007AFF] transition-colors">
                        {item.title}
                      </span>
                      <span className="text-[14px] leading-snug text-[#626268] group-hover:text-[#374151] transition-colors">
                        {item.description}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
