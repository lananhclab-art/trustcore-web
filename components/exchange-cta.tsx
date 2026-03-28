import React from "react";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ExchangeCTA() {
  return (
    <section 
      className="relative bg-[#08080D] py-6 md:py-[100px] lg:py-[160px] overflow-hidden"
    >
      <Container>
        <div className="text-center max-w-2xl mx-auto space-y-3 md:space-y-8">
          {/* gateway-style heading (white variant for dark bg) */}
          <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-[-1.5px] text-white">
            Access a Unified <br className="hidden md:block" />
            Trading Infrastructure
          </h2>
          
          <div className="flex justify-center">
            <Link href="/contact" passHref legacyBehavior>
              <Button 
                variant="primary" 
                size="nav"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
