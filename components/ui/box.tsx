/**
 * components/ui/box.tsx
 * ─────────────────────────────────────────────────────────────────
 * Foundational <Box> layout primitive.
 *
 * A polymorphic div-like element with token-aware props for
 * padding, margin, border, background, and radius.
 * All values pull from design tokens via Tailwind CSS vars.
 *
 * Usage:
 *   <Box padding="md" bg="secondary" radius="lg">
 *     Card content
 *   </Box>
 *
 *   <Box as="section" padding="xl" bg="primary" shadow="DEFAULT">
 *     Page section
 *   </Box>
 * ─────────────────────────────────────────────────────────────────
 */

import React from "react";
import { cn } from "../../lib/cn";

// ─── Token Maps ───────────────────────────────────────────────────

const paddingMap = {
  none: "p-none",
  "2":  "p-2",
  "4":  "p-4",
  xs:   "p-xs",
  sm:   "p-sm",
  md:   "p-md",
  m:    "p-m",
  lg:   "p-lg",
  xl:   "p-xl",
  xxl:  "p-xxl",
  "3xl":"p-3xl",
  "4xl":"p-4xl",
} as const;

const bgMap = {
  primary:      "bg-bg-primary",
  secondary:    "bg-bg-secondary",
  tertiary:     "bg-bg-tertiary",
  inverse:      "bg-bg-inverse",
  overlay:      "bg-bg-overlay",
  brand:        "bg-bg-brand",
  "brand-subtle": "bg-bg-brand-subtle",
  success:      "bg-success-bg",
  warning:      "bg-warning-bg",
  error:        "bg-error-bg",
  info:         "bg-info-bg",
} as const;

const radiusMap = {
  none: "rounded-none",
  xs:   "rounded-xs",
  sm:   "rounded-sm",
  md:   "rounded-md",
  lg:   "rounded-lg",
  xl:   "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full",
} as const;

const shadowMap = {
  sm:      "shadow-sm",
  DEFAULT: "shadow",
  lg:      "shadow-lg",
  "dark-sm": "shadow-dark-sm",
  none:    "shadow-none",
} as const;

const borderMap = {
  default: "border border-border-default",
  strong:  "border border-border-strong",
  subtle:  "border border-border-subtle",
  brand:   "border border-border-brand",
  none:    "",
} as const;

// ─── Props ────────────────────────────────────────────────────────

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  padding?: keyof typeof paddingMap;
  paddingX?: keyof typeof paddingMap;
  paddingY?: keyof typeof paddingMap;
  bg?: keyof typeof bgMap;
  radius?: keyof typeof radiusMap;
  shadow?: keyof typeof shadowMap;
  border?: keyof typeof borderMap;
  /** Allow full-width / full-height layout */
  fullWidth?: boolean;
  fullHeight?: boolean;
  children?: React.ReactNode;
}

// ─── Component ───────────────────────────────────────────────────

export const Box = React.forwardRef<HTMLElement, BoxProps>(
  (
    {
      as: Tag = "div",
      padding,
      paddingX,
      paddingY,
      bg,
      radius,
      shadow,
      border,
      fullWidth = false,
      fullHeight = false,
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
          padding  ? paddingMap[padding]   : undefined,
          paddingX ? `px-${paddingX}`      : undefined,
          paddingY ? `py-${paddingY}`      : undefined,
          bg       ? bgMap[bg]             : undefined,
          radius   ? radiusMap[radius]     : undefined,
          shadow   ? shadowMap[shadow]     : undefined,
          border   ? borderMap[border]     : undefined,
          fullWidth  && "w-full",
          fullHeight && "h-full",
          className,
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  },
);

Box.displayName = "Box";

export default Box;
