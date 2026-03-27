/**
 * components/ui/container.tsx
 * ─────────────────────────────────────────────────────────────────
 * Foundational <Container> layout primitive.
 *
 * Provides a max-width wrapper that matches the Figma frame widths
 * (1440px desktop), with responsive horizontal padding.
 *
 * Usage:
 *   <Container>
 *     <Stack gap="xxl">...</Stack>
 *   </Container>
 *
 *   <Container size="narrow" padding="xl">
 *     <ArticleContent />
 *   </Container>
 * ─────────────────────────────────────────────────────────────────
 */

import React from "react";
import { cn } from "../../lib/cn";

// ─── Token Maps ───────────────────────────────────────────────────

// Mirrors Figma frame widths from the Responsive collection
const sizeMap = {
  full:    "max-w-full",           // no constraint
  wide:    "max-w-[1440px]",       // Desktop frame width
  default: "max-w-[1280px]",       // common layout max
  narrow:  "max-w-[768px]",        // article / content
  compact: "max-w-[560px]",        // form / dialog
} as const;

const paddingXMap = {
  none:  "px-0",
  xs:    "px-xs",
  sm:    "px-sm",
  md:    "px-md",
  lg:    "px-lg",
  xl:    "px-xl",
  xxl:   "px-xxl",
  "3xl": "px-3xl",
  "4xl": "px-4xl",
  /** Shared layout margins: 16px (mobile) → 32px (tablet) → 100px (desktop) */
  layout: "px-md md:px-xl lg:px-7xl",
} as const;

// ─── Props ────────────────────────────────────────────────────────

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  /** Max-width variant */
  size?: keyof typeof sizeMap;
  /** Horizontal padding token */
  paddingX?: keyof typeof paddingXMap;
  /** Whether to center the container */
  centered?: boolean;
  children?: React.ReactNode;
}

// ─── Component ───────────────────────────────────────────────────

export const Container = React.forwardRef<HTMLElement, ContainerProps>(
  (
    {
      as: Tag = "div",
      size = "default",
      paddingX = "layout",
      centered = true,
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
          sizeMap[size],
          paddingXMap[paddingX],
          centered && "mx-auto",
          className,
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  },
);

Container.displayName = "Container";

export default Container;
