/**
 * components/ui/section.tsx
 * ─────────────────────────────────────────────────────────────────
 * Foundational <Section> layout primitive.
 *
 * Wraps every page section with consistent vertical spacing
 * and optional background color using design system tokens.
 *
 * Usage:
 *   <Section>
 *     <Container>{children}</Container>
 *   </Section>
 *
 *   <Section spacing="lg" bg="secondary">
 *     <Container>{children}</Container>
 *   </Section>
 * ─────────────────────────────────────────────────────────────────
 */

import React from "react";
import { cn } from "../../lib/cn";

const spacingMap = {
  none: "",
  sm:   "py-xxl md:py-3xl",
  md:   "py-xxl md:py-4xl lg:py-5xl",
  lg:   "py-4xl md:py-5xl lg:py-6xl",
  hero: "pt-4xl md:pt-5xl lg:pt-6xl pb-xxl md:pb-4xl lg:pb-5xl",
} as const;

const bgMap = {
  white:   "bg-white",
  light:   "bg-[#F6F8FA]",
  subtle:  "bg-bg-brand-subtle",
  dark:    "bg-[#08080D]",
  black:   "bg-black",
  none:    "",
} as const;

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  /** Vertical spacing preset */
  spacing?: keyof typeof spacingMap;
  /** Background color preset */
  bg?: keyof typeof bgMap;
  children: React.ReactNode;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      as: Tag = "section",
      spacing = "md",
      bg = "white",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Tag
        ref={ref}
        className={cn(
          "w-full",
          spacingMap[spacing],
          bgMap[bg],
          className,
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  },
);

Section.displayName = "Section";

export default Section;
