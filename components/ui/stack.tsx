/**
 * components/ui/stack.tsx
 * ─────────────────────────────────────────────────────────────────
 * Foundational <Stack> layout primitive.
 *
 * A flexbox-based layout component for creating consistent
 * horizontal and vertical stacks with token-driven gaps.
 *
 * Usage:
 *   <Stack gap="md" direction="vertical">
 *     <Text variant="heading-h3">Title</Text>
 *     <Text variant="body-md">Subtitle</Text>
 *   </Stack>
 *
 *   <Stack gap="lg" direction="horizontal" align="center" justify="between">
 *     <Logo />
 *     <NavLinks />
 *   </Stack>
 *
 *   <Stack gap="sm" wrap>
 *     {tags.map(tag => <Tag key={tag} label={tag} />)}
 *   </Stack>
 * ─────────────────────────────────────────────────────────────────
 */

import React from "react";
import { cn } from "../../lib/cn";

// ─── Token Maps ───────────────────────────────────────────────────

const gapMap = {
  none:  "gap-none",
  "2":   "gap-2",
  "4":   "gap-4",
  xs:    "gap-xs",
  sm:    "gap-sm",
  md:    "gap-md",
  m:     "gap-m",
  lg:    "gap-lg",
  xl:    "gap-xl",
  xxl:   "gap-xxl",
  "3xl": "gap-3xl",
  "4xl": "gap-4xl",
} as const;

const alignMap = {
  start:    "items-start",
  center:   "items-center",
  end:      "items-end",
  stretch:  "items-stretch",
  baseline: "items-baseline",
} as const;

const justifyMap = {
  start:   "justify-start",
  center:  "justify-center",
  end:     "justify-end",
  between: "justify-between",
  around:  "justify-around",
  evenly:  "justify-evenly",
} as const;

// ─── Props ────────────────────────────────────────────────────────

export interface StackProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  /** Gap between children — references spacing tokens */
  gap?: keyof typeof gapMap;
  /** Stack direction */
  direction?: "vertical" | "horizontal";
  /** Cross-axis alignment (align-items) */
  align?: keyof typeof alignMap;
  /** Main-axis alignment (justify-content) */
  justify?: keyof typeof justifyMap;
  /** Allow children to wrap */
  wrap?: boolean;
  /** Fill available width */
  fullWidth?: boolean;
  children?: React.ReactNode;
}

// ─── Component ───────────────────────────────────────────────────

export const Stack = React.forwardRef<HTMLElement, StackProps>(
  (
    {
      as: Tag = "div",
      gap = "md",
      direction = "vertical",
      align,
      justify,
      wrap = false,
      fullWidth = false,
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
          "flex",
          direction === "vertical" ? "flex-col" : "flex-row",
          gapMap[gap],
          align   ? alignMap[align]     : undefined,
          justify ? justifyMap[justify] : undefined,
          wrap      && "flex-wrap",
          fullWidth && "w-full",
          className,
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  },
);

Stack.displayName = "Stack";

export default Stack;
