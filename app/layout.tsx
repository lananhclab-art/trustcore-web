import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TrustCore Technologies",
  description: "TrustCore Technologies, LLC - Secure Your Assets, Empower Your Future",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico/16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico/32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico/48.png", sizes: "48x48", type: "image/png" },
    ],
  },
};

import { CookieConsentProvider } from "@/components/cookie-consent-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={cn(inter.className, "overflow-x-hidden")}>
        <CookieConsentProvider>
          {children}
        </CookieConsentProvider>
      </body>
    </html>
  );
}
