import React from "react";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ExchangeCTA() {
  return (
    <section 
      className="relative bg-[#08080D] py-[100px] lg:py-[160px] overflow-hidden"
      style={{ backgroundColor: '#08080D' }}
    >
      <Container size="wide">
        <div className="relative z-10 flex flex-col items-center text-center gap-10 md:gap-14">
          <h1 className="text-[40px] md:text-[60px] lg:text-[72px] font-bold leading-[1.1] tracking-tight text-white max-w-[950px]">
            Access a Unified <br className="hidden md:block" />
            Trading Infrastructure
          </h1>
          
          <div className="flex justify-center">
            <Link href="/contact" passHref legacyBehavior>
              <Button 
                variant="primary" 
                size="nav"
                className="transition-all duration-300"
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
