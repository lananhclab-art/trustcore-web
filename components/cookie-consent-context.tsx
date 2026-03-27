"use client";

import React, { createContext, useContext, useState } from "react";
import { CookieModal } from "./cookie-modal";

interface CookieConsentContextType {
  openModal: () => void;
  closeModal: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const CookieConsentProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <CookieConsentContext.Provider value={{ openModal, closeModal }}>
      {children}
      <CookieModal isOpen={isOpen} onClose={closeModal} />
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider");
  }
  return context;
};
