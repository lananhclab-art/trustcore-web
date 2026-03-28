/**
 * components/ui/section-header.tsx
 * ─────────────────────────────────────────────────────────────────
 * Standardized heading + subtitle block for all sections.
 *
 * Uses the Text component internally for all typography.
 * ─────────────────────────────────────────────────────────────────
 */

import React from "react";
import { cn } from "../../lib/cn";
import { Text } from "./text";

const alignMap = {
  left:   "text-left",
  center: "text-center mx-auto",
} as const;

// User requested all sections use H1 styling
const levelMap = {
  h1: "heading-h1" as const,
  h2: "heading-h1" as const, // Map section H2 to H1 style per request
  h3: "heading-h3" as const,
  h4: "heading-h4" as const,
  h5: "heading-h5" as const,
};



const spacingBottomMap = {
  none: "",
  sm:   "mb-lg",
  md:   "mb-xl",
  lg:   "mb-xxl",
  "5xl": "mb-5xl",
};

export interface SectionHeaderProps {
  /** Title content — can include JSX for brand-colored spans */
  title: React.ReactNode;
  /** Optional subtitle text */
  subtitle?: React.ReactNode;
  /** Optional label above the title (e.g. "Our Story") */
  label?: string;
  /** Text alignment */
  align?: keyof typeof alignMap;
  /** Heading level — determines variant */
  level?: "h1" | "h2" | "h3" | "h4" | "h5";

  /** Bottom margin */
  spacing?: keyof typeof spacingBottomMap;
  /** Additional className */
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  label,
  align = "center",
  level = "h1", // Sections now default to h1 per user request

  spacing = "md",
  className,
}) => {
  const variant = levelMap[level as keyof typeof levelMap] || "heading-h2";

  return (
    <div
      className={cn(
        "w-full flex flex-col",
        alignMap[align],
        spacingBottomMap[spacing],
        "space-y-3 md:space-y-6",
        className,
      )}
    >
      {label && (
        <Text
          variant="body-label"
          weight="semibold"
          color="brand"
          as="p"
          className="uppercase tracking-[0.08em]"
        >
          {label}
        </Text>
      )}

      {/* Main heading - using heading-h1 by default for sections per user request */}
      <Text
        variant={variant}
        as={level}
        color="primary"
      >
        {title}
      </Text>

      {subtitle && (
        <Text variant="body-lg" weight="medium" color="secondary" className={cn(align === "center" && "text-center")}>
          {subtitle}
        </Text>
      )}
    </div>
  );
};
