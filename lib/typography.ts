/**
 * typography.ts
 * ─────────────────────────────────────────────────────────────────
 * Layer 2 — Typography system.
 * Reconstructed from styles.text in the Figma Variables JSON.
 *
 * Each style references CSS custom properties (--font-*) which are
 * set in globals.css from the Responsive variable collection.
 * This ensures responsive scaling via CSS variable overrides at
 * breakpoints, with zero JS re-renders.
 * ─────────────────────────────────────────────────────────────────
 */

import { fontFamily, fontWeight } from "./primitives";

// ─── Type ─────────────────────────────────────────────────────────

export type FontWeight = 400 | 500 | 600 | 700;

export interface TypographyStyle {
  fontFamily:    string;
  /** CSS variable name that holds the resolved font size */
  fontSizeVar:   string;
  fontSize:      string;             // fallback px value (Desktop)
  fontWeight:    FontWeight;
  /** CSS variable for line-height */
  lineHeightVar: string;
  lineHeight:    string;             // fallback px value (Desktop)
  /** CSS variable for letter-spacing */
  letterSpacingVar: string;
  letterSpacing: string;             // fallback px value (Desktop)
}

// ─── Heading Styles ───────────────────────────────────────────────
// Source: styles.text › H1..H5

export const typographyHeading: Record<"h1" | "h2" | "h3" | "h4" | "h5", TypographyStyle> = {
  h1: {
    fontFamily:       fontFamily.primary,
    fontSizeVar:      "--font-headings-h1-text-size",
    fontSize:         "64px",
    fontWeight:       fontWeight.bold,
    lineHeightVar:    "--font-headings-h1-line-height",
    lineHeight:       "70.4px",
    letterSpacingVar: "--font-headings-h1-letter-spacing",
    letterSpacing:    "-1.6px",
  },
  h2: {
    fontFamily:       fontFamily.primary,
    fontSizeVar:      "--font-headings-h1-text-size",
    fontSize:         "64px",
    fontWeight:       fontWeight.bold,
    lineHeightVar:    "--font-headings-h1-line-height",
    lineHeight:       "70.4px",
    letterSpacingVar: "--font-headings-h1-letter-spacing",
    letterSpacing:    "-1.6px",
  },
  h3: {
    fontFamily:       fontFamily.primary,
    fontSizeVar:      "--font-headings-h3-text-size",
    fontSize:         "32px",
    fontWeight:       fontWeight.bold,
    lineHeightVar:    "--font-headings-h3-line-height",
    lineHeight:       "38.4px",
    letterSpacingVar: "--font-headings-h3-letter-spacing",
    letterSpacing:    "-0.8px",
  },
  h4: {
    fontFamily:       fontFamily.primary,
    fontSizeVar:      "--font-headings-h4-text-size-4",
    fontSize:         "24px",
    fontWeight:       fontWeight.bold,
    lineHeightVar:    "--font-headings-h4-line-height-3",
    lineHeight:       "32px",
    letterSpacingVar: "--font-headings-h4-letter-spacing",
    letterSpacing:    "-0.6px",
  },
  h5: {
    fontFamily:       fontFamily.primary,
    fontSizeVar:      "--font-headings-h5-text-size",
    fontSize:         "20px",
    fontWeight:       fontWeight.bold,
    lineHeightVar:    "--font-headings-h5-line-height",
    lineHeight:       "28px",
    letterSpacingVar: "--font-headings-h5-paragraph-spacing",
    letterSpacing:    "-0.5px",
  },
};

// ─── Body Styles ──────────────────────────────────────────────────
// Source: styles.text › Body/body-lg, body-md, body-sm, Label, Small, XS

export type BodyVariant = "lg" | "md" | "sm" | "label" | "small" | "xs";
export type WeightVariant = "regular" | "medium" | "semibold";

export const typographyBody: Record<BodyVariant, Record<WeightVariant, TypographyStyle>> = {
  lg: {
    regular: {
      fontFamily:       fontFamily.primary,
      fontSizeVar:      "--Font-Body-body-lg-text-size",
      fontSize:         "20px",
      fontWeight:       fontWeight.regular,
      lineHeightVar:    "--font-body-body-lg-line-height",
      lineHeight:       "28px",
      letterSpacingVar: "--font-body-body-lg-letter-spacing",
      letterSpacing:    "-0.5px",
    },
    medium: {
      fontFamily:       fontFamily.primary,
      fontSizeVar:      "--Font-Body-body-lg-text-size",
      fontSize:         "20px",
      fontWeight:       fontWeight.medium,
      lineHeightVar:    "--font-body-body-lg-line-height",
      lineHeight:       "28px",
      letterSpacingVar: "--font-body-body-lg-letter-spacing",
      letterSpacing:    "-0.5px",
    },
    semibold: {
      fontFamily:       fontFamily.primary,
      fontSizeVar:      "--Font-Body-body-lg-text-size",
      fontSize:         "20px",
      fontWeight:       fontWeight.semibold,
      lineHeightVar:    "--font-body-body-lg-line-height",
      lineHeight:       "28px",
      letterSpacingVar: "--font-body-body-lg-letter-spacing",
      letterSpacing:    "-0.5px",
    },
  },
  md: {
    regular: {
      fontFamily:       fontFamily.primary,
      fontSizeVar:      "--Font-Body-body-md-text-size",
      fontSize:         "18px",
      fontWeight:       fontWeight.regular,
      lineHeightVar:    "--font-body-body-md-line-height",
      lineHeight:       "26px",
      letterSpacingVar: "--font-body-body-md-letter-spacing",
      letterSpacing:    "-0.45px",
    },
    medium: {
      fontFamily:       fontFamily.primary,
      fontSizeVar:      "--Font-Body-body-md-text-size",
      fontSize:         "18px",
      fontWeight:       fontWeight.medium,
      lineHeightVar:    "--font-body-body-md-line-height",
      lineHeight:       "26px",
      letterSpacingVar: "--font-body-body-md-letter-spacing",
      letterSpacing:    "-0.45px",
    },
    semibold: {
      fontFamily:       fontFamily.primary,
      fontSizeVar:      "--Font-Body-body-md-text-size",
      fontSize:         "18px",
      fontWeight:       fontWeight.semibold,
      lineHeightVar:    "--font-body-body-md-line-height",
      lineHeight:       "26px",
      letterSpacingVar: "--font-body-body-md-letter-spacing",
      letterSpacing:    "-0.45px",
    },
  },
  sm: {
    regular: {
      fontFamily:       fontFamily.primary,
      fontSizeVar:      "--font-body-body-sm-text-size",
      fontSize:         "16px",
      fontWeight:       fontWeight.regular,
      lineHeightVar:    "--font-body-body-sm-line-height",
      lineHeight:       "26px",
      letterSpacingVar: "--font-body-body-sm-letter-spacing",
      letterSpacing:    "-0.4px",
    },
    medium: {
      fontFamily:       fontFamily.primary,
      fontSizeVar:      "--font-body-body-sm-text-size",
      fontSize:         "16px",
      fontWeight:       fontWeight.medium,
      lineHeightVar:    "--font-body-body-sm-line-height",
      lineHeight:       "26px",
      letterSpacingVar: "--font-body-body-sm-letter-spacing",
      letterSpacing:    "-0.4px",
    },
    semibold: {
      fontFamily:       fontFamily.primary,
      fontSizeVar:      "--font-body-body-sm-text-size",
      fontSize:         "16px",
      fontWeight:       fontWeight.semibold,
      lineHeightVar:    "--font-body-body-sm-line-height",
      lineHeight:       "26px",
      letterSpacingVar: "--font-body-body-sm-letter-spacing",
      letterSpacing:    "-0.4px",
    },
  },
  label: {
    regular: {
      fontFamily:       fontFamily.primary,
      fontSizeVar:      "--font-body-label-text-size",
      fontSize:         "14px",
      fontWeight:       fontWeight.regular,
      lineHeightVar:    "--font-body-label-line-height",
      lineHeight:       "20px",
      letterSpacingVar: "--font-body-label-letter-spacing",
      letterSpacing:    "-0.35px",
    },
    medium: {
      fontFamily:       fontFamily.primary,
      fontSizeVar:      "--font-body-label-text-size",
      fontSize:         "14px",
      fontWeight:       fontWeight.medium,
      lineHeightVar:    "--font-body-label-line-height",
      lineHeight:       "20px",
      letterSpacingVar: "--font-body-label-letter-spacing",
      letterSpacing:    "-0.35px",
    },
    semibold: {
      fontFamily:       fontFamily.primary,
      fontSizeVar:      "--font-body-label-text-size",
      fontSize:         "14px",
      fontWeight:       fontWeight.semibold,
      lineHeightVar:    "--font-body-label-line-height",
      lineHeight:       "20px",
      letterSpacingVar: "--font-body-label-letter-spacing",
      letterSpacing:    "-0.35px",
    },
  },
  small: {
    regular: {
      fontFamily:       fontFamily.primary,
      fontSizeVar:      "--font-body-small-text-size",
      fontSize:         "12px",
      fontWeight:       fontWeight.regular,
      lineHeightVar:    "--font-body-small-letter-spacing",
      lineHeight:       "16px",
      letterSpacingVar: "--font-body-small-letter-spacing",
      letterSpacing:    "0.24px",
    },
    medium: {
      fontFamily:       fontFamily.primary,
      fontSizeVar:      "--font-body-small-text-size",
      fontSize:         "12px",
      fontWeight:       fontWeight.medium,
      lineHeightVar:    "--font-body-small-letter-spacing",
      lineHeight:       "16px",
      letterSpacingVar: "--font-body-small-letter-spacing",
      letterSpacing:    "0.24px",
    },
    semibold: {
      fontFamily:       fontFamily.primary,
      fontSizeVar:      "--font-body-small-text-size",
      fontSize:         "12px",
      fontWeight:       fontWeight.semibold,
      lineHeightVar:    "--font-body-small-letter-spacing",
      lineHeight:       "16px",
      letterSpacingVar: "--font-body-small-letter-spacing",
      letterSpacing:    "0.24px",
    },
  },
  xs: {
    regular: {
      fontFamily:       fontFamily.primary,
      fontSizeVar:      "--font-body-xs-text-size",
      fontSize:         "10px",
      fontWeight:       fontWeight.regular,
      lineHeightVar:    "--font-body-xs-paragraph-spacing",
      lineHeight:       "14px",
      letterSpacingVar: "--font-body-xs-paragraph-spacing",
      letterSpacing:    "0px",
    },
    medium: {
      fontFamily:       fontFamily.primary,
      fontSizeVar:      "--font-body-xs-text-size",
      fontSize:         "10px",
      fontWeight:       fontWeight.medium,
      lineHeightVar:    "--font-body-xs-paragraph-spacing",
      lineHeight:       "14px",
      letterSpacingVar: "--font-body-xs-paragraph-spacing",
      letterSpacing:    "0px",
    },
    semibold: {
      fontFamily:       fontFamily.primary,
      fontSizeVar:      "--font-body-xs-text-size",
      fontSize:         "10px",
      fontWeight:       fontWeight.semibold,
      lineHeightVar:    "--font-body-xs-paragraph-spacing",
      lineHeight:       "14px",
      letterSpacingVar: "--font-body-xs-paragraph-spacing",
      letterSpacing:    "0px",
    },
  },
};

// ─── Helper: CSS-in-JS style object ──────────────────────────────
/**
 * Returns a React-compatible CSSProperties object for a given
 * typography style. Uses CSS variable references for responsive
 * scaling with pixel fallbacks.
 *
 * @example
 * <p style={getTypographyStyle(typographyBody.md.regular)}>Hello</p>
 */
export function getTypographyStyle(style: TypographyStyle): React.CSSProperties {
  return {
    fontFamily:    style.fontFamily,
    fontSize:      `var(${style.fontSizeVar}, ${style.fontSize})`,
    fontWeight:    style.fontWeight,
    lineHeight:    `var(${style.lineHeightVar}, ${style.lineHeight})`,
    letterSpacing: `var(${style.letterSpacingVar}, ${style.letterSpacing})`,
  };
}

// ─── Flat map for Tailwind / utility use ─────────────────────────
/**
 * Flat font-size map for tailwind.config.ts extend.fontSize.
 * Each entry: [fontSize, { lineHeight, letterSpacing, fontWeight }]
 */
export const tailwindFontSize = {
  "heading-h1": [
    `var(--font-headings-h1-text-size, 64px)`,
    {
      lineHeight:    `var(--font-headings-h1-line-height, 70.4px)`,
      letterSpacing: `var(--font-headings-h1-letter-spacing, -1.6px)`,
      fontWeight:    "700",
    },
  ],
  "heading-h2": [
    `var(--font-headings-h1-text-size, 64px)`,
    {
      lineHeight:    `var(--font-headings-h1-line-height, 70.4px)`,
      letterSpacing: `var(--font-headings-h1-letter-spacing, -1.6px)`,
      fontWeight:    "700",
    },
  ],
  "heading-h3": [
    `var(--font-headings-h3-text-size, 32px)`,
    {
      lineHeight:    `var(--font-headings-h3-line-height, 38.4px)`,
      letterSpacing: `var(--font-headings-h3-letter-spacing, -0.8px)`,
      fontWeight:    "700",
    },
  ],
  "heading-h4": [
    `var(--font-headings-h4-text-size-4, 24px)`,
    {
      lineHeight:    `var(--font-headings-h4-line-height-3, 32px)`,
      letterSpacing: `var(--font-headings-h4-letter-spacing, -0.6px)`,
      fontWeight:    "700",
    },
  ],
  "heading-h5": [
    `var(--font-headings-h5-text-size, 20px)`,
    {
      lineHeight:    `var(--font-headings-h5-line-height, 28px)`,
      letterSpacing: `var(--font-headings-h5-paragraph-spacing, -0.5px)`,
      fontWeight:    "700",
    },
  ],
  "body-lg": [
    `var(--Font-Body-body-lg-text-size, 20px)`,
    {
      lineHeight:    `var(--font-body-body-lg-line-height, 28px)`,
      letterSpacing: `var(--font-body-body-lg-letter-spacing, -0.5px)`,
    },
  ],
  "body-md": [
    `var(--Font-Body-body-md-text-size, 18px)`,
    {
      lineHeight:    `var(--font-body-body-md-line-height, 26px)`,
      letterSpacing: `var(--font-body-body-md-letter-spacing, -0.45px)`,
    },
  ],
  "body-sm": [
    `var(--font-body-body-sm-text-size, 16px)`,
    {
      lineHeight:    `var(--font-body-body-sm-line-height, 26px)`,
      letterSpacing: `var(--font-body-body-sm-letter-spacing, -0.4px)`,
    },
  ],
  "body-label": [
    `var(--font-body-label-text-size, 14px)`,
    {
      lineHeight:    `var(--font-body-label-line-height, 20px)`,
      letterSpacing: `var(--font-body-label-letter-spacing, -0.35px)`,
    },
  ],
  "body-small": [
    `var(--font-body-small-text-size, 12px)`,
    {
      lineHeight:    `var(--font-body-small-letter-spacing, 16px)`,
      letterSpacing: "0.24px",
    },
  ],
  "body-xs": [
    `var(--font-body-xs-text-size, 10px)`,
    {
      lineHeight:    `var(--font-body-xs-paragraph-spacing, 14px)`,
      letterSpacing: "0px",
    },
  ],
} as const;
