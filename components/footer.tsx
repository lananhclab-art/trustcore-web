"use client";

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Container } from "./ui/container"
import EmailForm from "./ui/email-form"
import { useCookieConsent } from "./cookie-consent-context"
import { Text, H2 } from "./ui/text"

export default function Footer({ hideCTA = false }: { hideCTA?: boolean }) {
  return (
    <footer className="bg-[#08080D] text-white">

      {/* CTA */}
      {!hideCTA && (
        <div className="py-6 lg:py-[100px]">
          <Container >

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[48px]">

              {/* TEXT */}
              <div className="flex flex-col gap-4 text-left lg:text-left">
                <Text variant="heading-h1" as="h1" color="inverse">
                  Let’s Build <br className="hidden lg:block" />
                  the New Reality
                </Text>
              </div>

              {/* FORM */}
              <div className="w-full lg:w-auto flex justify-start lg:justify-start">
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
      <div className="py-6 lg:py-[80px]">
        <Container >

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[48px]">

            {/* BRAND */}
            <div className="col-span-2 flex flex-col items-start text-left gap-sm">
              <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
                <div className="relative w-[140px] h-[32px]">
                  <Image 
                    src="/images/brand/logo-white.svg" 
                    alt="TrustCore" 
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>

              <Text variant="body-label" color="secondary" className="whitespace-pre-line">
                Secure your Assets.
                Empower your Future.
              </Text>
            </div>

            <FooterColumn
              title="Products"
              links={[
                { label: "TrustCore Wallet", href: "https://trustcore.finance/" },
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
                { label: "Press Kit", href: "/press" },
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
                { label: "X", href: "https://x.com/TheTrustCore" },
                { label: "Telegram", href: "https://t.me/trustcore_wallet" },
                { label: "YouTube", href: "https://www.youtube.com/@trustcore_wallet" },
                { label: "LinkedIn", href: "https://linkedin.com" },
              ]}
            />

          </div>

          {/* COPYRIGHT */}
          <div className="mt-[60px] text-center">
            <Text variant="body-label" color="secondary">
              © 2026 TrustCore Technologies, LLC. All rights reserved.
            </Text>
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
      <Text variant="body-label" color="secondary">{title}</Text>

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
                  className="text-body-label text-white hover:text-text-brand transition-colors cursor-pointer text-left"
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
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-body-label text-white hover:text-text-brand transition-colors cursor-pointer"
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

