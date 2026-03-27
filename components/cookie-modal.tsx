"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface CookieCategory {
  id: string;
  title: string;
  description: string;
  isAlwaysActive?: boolean;
}

const cookieCategories: CookieCategory[] = [
  {
    id: "necessary",
    title: "Strictly Necessary Cookies",
    description: "These cookies are required for the core functionality of the website and cannot be switched off. They enable essential features such as secure access, system integrity, and network management. Without these cookies, certain parts of the Services may not function properly.",
    isAlwaysActive: true,
  },
  {
    id: "functional",
    title: "Functional Cookies",
    description: "These cookies allow the website to remember your preferences and provide enhanced, more personalized features. This may include language settings, interface preferences, or region-based customization. Disabling these cookies may result in reduced functionality or a less tailored experience.",
  },
  {
    id: "analytics",
    title: "Analytics Cookies",
    description: "These cookies help us understand how users interact with the Services by collecting aggregated and anonymized data. This information allows us to improve performance, identify issues, and optimize user experience. We do not use analytics cookies to identify you personally.",
  },
  {
    id: "targeting",
    title: "Targeting and Advertising Cookies",
    description: "These cookies may be used to deliver content and messaging that is more relevant to your interests. They can also be used to limit how often you see certain content and to measure the effectiveness of campaigns. These cookies may be set by TrustCore or by third-party providers operating on our behalf.",
  },
];

export const CookieModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [preferences, setPreferences] = useState<Record<string, boolean>>({
    necessary: true,
    functional: false,
    analytics: false,
    targeting: false,
  });

  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  // Close on escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const togglePreference = (id: string) => {
    if (id === "necessary") return;
    setPreferences((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleConfirm = () => {
    // Save preferences logic here
    onClose();
  };

  const handleRejectAll = () => {
    setPreferences({
      necessary: true,
      functional: false,
      analytics: false,
      targeting: false,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white w-full max-w-[640px] max-h-[90vh] overflow-y-auto rounded-[8px] shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="p-6 md:p-8 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative w-[140px] h-[32px]">
                  <Image 
                    src="/images/brand/logo-black.svg" 
                    alt="TrustCore" 
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-black/5 rounded-full transition-colors"
              >
                <X size={20} className="text-[#626268]" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-[24px] font-bold text-[#14141E] leading-tight">
                Manage Cookie Preferences
              </h2>
              <p className="text-[14px] leading-[22px] text-[#626268]">
                When you access TrustCore Services, we may store or retrieve information on your device through cookies and similar technologies. These technologies are used to ensure the proper functioning of the platform, enhance your experience, and support analytics and relevant content delivery.
                <br /><br />
                You can manage your preferences below. Some cookies are essential and cannot be disabled, as they are required for the operation and security of the Services.
                <br /><br />
                For more information, please review our <Link href="/legal/privacy" className="text-[#0185EE] hover:underline">Privacy Policy</Link> and <Link href="/legal/cookies" className="text-[#0185EE] hover:underline">Cookie Policy</Link>.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col border border-[#E8ECF0] rounded-[4px] divide-y divide-[#E8ECF0]">
                {cookieCategories.map((category) => (
                  <div key={category.id} className="flex flex-col">
                    <div className="flex items-center justify-between p-4">
                      <button 
                        onClick={() => setOpenAccordion(openAccordion === category.id ? null : category.id)}
                        className="flex items-center gap-3 text-left group"
                      >
                        {openAccordion === category.id ? (
                           <Minus size={16} className="text-[#626268]" />
                        ) : (
                           <Plus size={16} className="text-[#626268]" />
                        )}
                        <span className="text-[15px] font-bold text-[#14141E] group-hover:text-[#0185EE] transition-colors">
                           {category.title}
                        </span>
                      </button>

                      <div className="flex items-center gap-4">
                        {category.isAlwaysActive ? (
                          <span className="text-[13px] font-bold text-[#0185EE] uppercase">Always Active</span>
                        ) : (
                           <button
                            onClick={() => togglePreference(category.id)}
                            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${
                                preferences[category.id] ? "bg-[#0185EE]" : "bg-[#E5E7EB]"
                            }`}
                           >
                            <span
                                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out mt-0.5 ml-0.5 ${
                                preferences[category.id] ? "translate-x-5" : "translate-x-0"
                                }`}
                            />
                           </button>
                        )}
                      </div>
                    </div>
                    
                    <AnimatePresence>
                      {openAccordion === category.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-11 pb-4 text-[13px] leading-[20px] text-[#626268]">
                            {category.description}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 md:p-8 bg-[#F8FAFC] flex flex-col md:flex-row items-center justify-end gap-3 mt-auto">
            <Button 
               variant="secondary" 
               className="w-full md:w-auto bg-[#333544] text-white hover:bg-[#222433] rounded-[4px] px-8 h-[48px] font-bold text-[14px]"
               onClick={handleRejectAll}
            >
              Reject All
            </Button>
            <Button 
               variant="primary" 
               className="w-full md:w-auto bg-[#333544] text-white hover:bg-[#222433] rounded-[4px] px-8 h-[48px] font-bold text-[14px]"
               onClick={handleConfirm}
            >
              Confirm My Choices
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
