/**
 * components/ui/text.tsx
 * ─────────────────────────────────────────────────────────────────
 * Foundational <Text> primitive.
 *
 * Maps directly to the typography system defined in typography.ts.
 * Every variant uses CSS custom properties — zero hardcoded values.
 *
 * Usage:
 *   <Text variant="heading-h1">Hello World</Text>
 *   <Text variant="body-md" weight="medium" color="secondary">Subtext</Text>
 *   <Text as="label" variant="body-label" weight="semibold">Label</Text>
 * ─────────────────────────────────────────────────────────────────
 */

import React from "react";
import { cn } from "../../lib/cn";
import { 
  getTypographyStyle, 
  typographyHeading, 
  typographyBody, 
  type BodyVariant,
  type WeightVariant 
} from "../../lib/typography";

// ─── Variant Map ──────────────────────────────────────────────────

const variantClasses = {
  // Headings
  "heading-h1": "text-heading-h1 font-bold",
  "heading-h2": "text-heading-h2 font-bold",
  "heading-h3": "text-heading-h3 font-bold",
  "heading-h4": "text-heading-h4 font-bold",
  "heading-h5": "text-heading-h5 font-bold",
  // Body
  "body-lg":    "text-body-lg",
  "body-md":    "text-body-md",
  "body-sm":    "text-body-sm",
  "body-label": "text-body-label",
  "body-small": "text-body-small",
  "body-xs":    "text-body-xs",
} as const;

const weightClasses = {
  regular:  "font-regular",
  medium:   "font-medium",
  semibold: "font-semibold",
  bold:     "font-bold",
} as const;

const colorClasses = {
  primary:   "text-text-primary",
  secondary: "text-text-secondary",
  tertiary:  "text-text-tertiary",
  disabled:  "text-text-disabled",
  inverse:   "text-text-inverse",
  brand:     "text-text-brand",
  "on-brand": "text-text-on-brand",
  success:   "text-success-text",
  warning:   "text-warning-text",
  error:     "text-error-text",
  info:      "text-info-text",
} as const;

// ─── Tag Map ──────────────────────────────────────────────────────
const defaultTags: Record<keyof typeof variantClasses, React.ElementType> = {
  "heading-h1": "h1",
  "heading-h2": "h2",
  "heading-h3": "h3",
  "heading-h4": "h4",
  "heading-h5": "h5",
  "body-lg":    "p",
  "body-md":    "p",
  "body-sm":    "p",
  "body-label": "span",
  "body-small": "span",
  "body-xs":    "span",
};

// ─── Props ────────────────────────────────────────────────────────

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /** Typography variant — maps to Figma styles.text */
  variant?: keyof typeof variantClasses;
  /** Font weight override */
  weight?: keyof typeof weightClasses;
  /** Semantic color — uses CSS variables */
  color?: keyof typeof colorClasses;
  /** Override the rendered HTML tag */
  as?: React.ElementType;
  /** Truncate text with ellipsis */
  truncate?: boolean;
  children: React.ReactNode;
}

// ─── Component ───────────────────────────────────────────────────

export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      variant = "body-md",
      weight,
      color = "primary",
      as,
      truncate = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const Tag = (as ?? defaultTags[variant]) as React.ElementType;

    // Get explicit styles from the typography system
    let styleObj: React.CSSProperties = {};
    
    if (variant.startsWith("heading-")) {
      const level = variant.split("-")[1] as "h1" | "h2" | "h3" | "h4" | "h5";
      // Ensure h1 and h2 both use the primary H1 style as requested
      const targetLevel = (level === "h2") ? "h1" : level;
      styleObj = getTypographyStyle(typographyHeading[targetLevel]);
    } else if (variant.startsWith("body-")) {
      const bodyVariant = variant.split("-")[1] as BodyVariant;
      const weightKey = (weight === "bold" ? "semibold" : (weight || "regular")) as WeightVariant;
      styleObj = getTypographyStyle(typographyBody[bodyVariant][weightKey]);
    }

    return (
      <Tag
        ref={ref}
        style={{ ...styleObj, ...props.style }}
        className={cn(
          variantClasses[variant],
          weight ? weightClasses[weight] : undefined,
          colorClasses[color],
          truncate && "truncate",
          className,
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  },
);

Text.displayName = "Text";

export const H1 = React.forwardRef<HTMLElement, TextProps>((props, ref) => (
  <Text {...props} variant="heading-h1" ref={ref} />
));
H1.displayName = "H1";

export const H2 = React.forwardRef<HTMLElement, TextProps>((props, ref) => (
  <Text {...props} variant="heading-h1" ref={ref} />
));
H2.displayName = "H2";

export const H3 = React.forwardRef<HTMLElement, TextProps>((props, ref) => (
  <Text {...props} variant="heading-h3" ref={ref} />
));
H3.displayName = "H3";

export default Text;
