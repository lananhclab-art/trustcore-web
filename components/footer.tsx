"use client";

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Container } from "./ui/container"
import EmailForm from "./ui/email-form"
import { useCookieConsent } from "./cookie-consent-context"

export default function Footer({ hideCTA = false }: { hideCTA?: boolean }) {
  return (
    <footer className="bg-[#08080D] text-white">

      {/* CTA */}
      {!hideCTA && (
        <div className="py-[100px]">
          <Container size="wide">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[48px]">

              {/* TEXT */}
              <div className="flex flex-col gap-4 text-center lg:text-left">
                <h2 className="text-[36px] leading-[40px] md:text-[54px] md:leading-[60px] lg:text-[64px] lg:leading-[72px] font-bold tracking-[-1.6px]">
                  Let’s Build <br className="hidden lg:block" />
                  the New Reality
                </h2>
              </div>

              {/* FORM */}
              <div className="w-full lg:w-auto flex justify-center lg:justify-start">
                <EmailForm
                  placeholder="Enter your work email"
                  buttonLabel="Contact Us"
                />
              </div>

            </div>
          </Container>
        </div>
      )}

      {/* FOOTER */}
      <div className="py-[80px]">
        <Container size="wide">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[48px]">

            {/* BRAND */}
            <div className="col-span-2">
              <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
                <div className="relative w-[140px] h-[32px]">
                  <Image 
                    src="/images/brand/logo-white.svg" 
                    alt="TrustCore" 
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </Link>

              <p className="mt-[16px] text-[14px] leading-[20px] text-[#626268]">
                Secure your Assets. <br />
                Empower your Future.
              </p>
            </div>

            <FooterColumn
              title="Products"
              links={[
                { label: "TrustCore Wallet", href: "/products/wallet" },
                { label: "TrustCore Exchange", href: "/products/exchange" },
                { label: "TrustCore Payment Gateway", href: "/products/gateway" },
                { label: "DeFi Platform", href: "/products/defi" },
                { label: "Fintech Advisory", href: "/products/advisory" },
              ]}
            />

            <FooterColumn
              title="Company"
              links={[
                { label: "About Us", href: "/about" },
                { label: "Press Kit", href: "/company/press" },
                { label: "Careers", href: "/careers" },
                { label: "Security", href: "/company/security" },
                { label: "Contact", href: "/contact" },
              ]}
            />

            <FooterColumn
              title="Legal"
              links={[
                { label: "Privacy Policy", href: "/legal/privacy" },
                { label: "Terms of Use", href: "/legal/terms" },
                { label: "Accessibility Statement", href: "/legal/accessibility" },
                { label: "Manage Cookies", href: "#" },
              ]}
            />

            <FooterColumn
              title="Follow"
              links={[
                { label: "X", href: "https://x.com" },
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "YouTube", href: "https://youtube.com" },
                { label: "Telegram", href: "https://telegram.org" },
              ]}
            />

          </div>

          {/* COPYRIGHT */}
          <div className="mt-[60px] text-center">
            <p className="text-[14px] text-[#626268]">
              © 2026 TrustCore Technologies, LLC. All rights reserved.
            </p>
          </div>

        </Container>
      </div>
    </footer>
  )
}

interface FooterLink {
  label: string;
  href?: string;
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: (string | FooterLink)[]
}) {
  const { openModal } = useCookieConsent();

  return (
    <div className="flex flex-col gap-[12px]">
      <p className="text-[14px] text-[#626268]">{title}</p>

      <ul className="flex flex-col gap-[12px]">
        {links.map((item, index) => {
          const label = typeof item === "string" ? item : item.label;
          const href = typeof item === "string" ? "#" : (item.href || "#");
          
          if (label === "Manage Cookies") {
            return (
              <li key={`${label}-${index}`}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    openModal();
                  }}
                  className="text-[14px] text-white hover:text-[#0185EE] transition-colors cursor-pointer text-left"
                >
                  {label}
                </button>
              </li>
            );
          }

          return (
            <li key={`${label}-${index}`}>
              <Link
                href={href}
                className="text-[14px] text-white hover:text-[#0185EE] transition-colors cursor-pointer"
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  )
}