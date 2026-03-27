/**
 * semantic.ts
 * ─────────────────────────────────────────────────────────────────
 * Layer 1 — Semantic (alias) tokens.
 * These give *meaning* to raw primitive values.
 * All values reference primitives — never hardcoded.
 * ─────────────────────────────────────────────────────────────────
 */

import {
  colorBlue,
  colorBlack,
  colorGreen,
  colorRed,
  colorOrange,
  colorBase,
  colorOverlay,
  spacing,
  radius,
  border,
  iconSize,
  fontWeight,
  depth,
} from "./primitives";

// ─── Color › Background ──────────────────────────────────────────
export const colorBackground = {
  primary:     colorBase.white,
  secondary:   colorBlack[50],
  tertiary:    colorBlack[100],
  inverse:     colorBlack[900],
  overlay:     colorOverlay["purple-900"],
  brand:       colorBlue[500],
  brandSubtle: colorBlue[50],
} as const;

// ─── Color › Text ────────────────────────────────────────────────
export const colorText = {
  primary:   colorBlack[500],
  secondary: colorBlack[300],
  tertiary:  colorBlack[200],
  disabled:  colorBlack[100],
  inverse:   colorBase.white,
  brand:     colorBlue[500],
  onBrand:   colorBase.white,
} as const;

// ─── Color › Border ──────────────────────────────────────────────
export const colorBorder = {
  default:  colorBlack[100],
  strong:   colorBlack[300],
  subtle:   colorBlack[50],
  focus:    colorBlue[500],
  brand:    colorBlue[500],
} as const;

// ─── Color › Interactive (Brand) ─────────────────────────────────
export const colorInteractive = {
  primary:         colorBlue[500],
  primaryHover:    colorBlue[600],
  primaryPressed:  colorBlue[700],
  primaryDisabled: colorBlue[100],
  primaryFg:       colorBase.white,
} as const;

// ─── Color › Status ──────────────────────────────────────────────
export const colorSuccess = {
  bg:     colorGreen[50],
  border: colorGreen[200],
  text:   colorGreen[700],
  icon:   colorGreen[500],
  solid:  colorGreen[500],
} as const;

export const colorWarning = {
  bg:     colorOrange[50],
  border: colorOrange[200],
  text:   colorOrange[700],
  icon:   colorOrange[500],
  solid:  colorOrange[500],
} as const;

export const colorError = {
  bg:     colorRed[50],
  border: colorRed[200],
  text:   colorRed[700],
  icon:   colorRed[500],
  solid:  colorRed[500],
} as const;

export const colorInfo = {
  bg:     colorBlue[50],
  border: colorBlue[200],
  text:   colorBlue[700],
  icon:   colorBlue[500],
  solid:  colorBlue[500],
} as const;

// ─── Elevation / Shadows ─────────────────────────────────────────
// Shadow tokens use depth primitives
export const shadow = {
  /** Subtle — form inputs, cards */
  100: `0 ${depth[0.25]}px ${depth[100]}px 0 rgba(0,0,0,0.08)`,
  /** Medium — dropdowns, popovers */
  200: `0 ${depth[0.25]}px ${depth[100]}px 0 rgba(0,0,0,0.12), 0 4px 16px 0 rgba(0,0,0,0.08)`,
  /** Large — modals, dialogs */
  300: `0 8px 24px 0 rgba(0,0,0,0.12), 0 2px 8px 0 rgba(0,0,0,0.08)`,
  /** Dark variant (for dark surfaces) */
  "200-dark": `0 ${depth[0.25]}px ${depth[100]}px 0 rgba(255,255,255,0.05), 0 ${depth[0.25]}px ${depth[100]}px 0 rgba(255,255,255,0.10)`,
} as const;

// ─── Spacing (re-export with semantic intent) ─────────────────────
export const space = {
  ...spacing,
} as const;

// ─── Radius (semantic aliases) ────────────────────────────────────
export const borderRadius = {
  none: radius[0],
  xs:   radius[1],   // 4px — badges, tags
  sm:   radius[2],   // 6px — inputs
  md:   radius[3],   // 8px — cards
  lg:   radius[4],   // 12px — modals
  xl:   radius[5],   // 16px
  "2xl": radius[6],  // 20px
  "3xl": radius[7],  // 24px
  full: radius[9],   // 96px — pill / fully rounded
} as const;

// ─── Border Width (semantic) ──────────────────────────────────────
export const borderWidth = {
  thin:    border[0],  // 1px
  default: border[1],  // 1.5px
  medium:  border[2],  // 2px
  thick:   border[3],  // 2.5px
  heavy:   border[4],  // 3px
} as const;

// ─── Icon Sizes (semantic aliases) ────────────────────────────────
export const icon = {
  xxs: iconSize[0],  // 12
  xs:  iconSize[1],  // 16
  sm:  iconSize[2],  // 20
  md:  iconSize[3],  // 24 — default
  lg:  iconSize[4],  // 32
  xl:  iconSize[5],  // 40
} as const;

// ─── Font Weights (semantic) ──────────────────────────────────────
export const textWeight = {
  regular:  fontWeight.regular,
  medium:   fontWeight.medium,
  semibold: fontWeight.semibold,
  bold:     fontWeight.bold,
} as const;

// ─── Dark Mode — Overrides (prepared) ────────────────────────────
// These mirror colorBackground / colorText for dark mode.
// Swap via CSS custom property override under [data-theme="dark"].
export const darkColorBackground = {
  primary:     colorBlack[900],
  secondary:   colorBlack[800],
  tertiary:    colorBlack[700],
  inverse:     colorBase.white,
  overlay:     colorOverlay["purple-900"],
  brand:       colorBlue[400],
  brandSubtle: colorBlue[900],
} as const;

export const darkColorText = {
  primary:   colorBase.white,
  secondary: colorBlack[100],
  tertiary:  colorBlack[200],
  disabled:  colorBlack[300],
  inverse:   colorBlack[900],
  brand:     colorBlue[300],
  onBrand:   colorBase.white,
} as const;

export const darkColorBorder = {
  default: colorBlack[600],
  strong:  colorBlack[400],
  subtle:  colorBlack[700],
  focus:   colorBlue[400],
  brand:   colorBlue[400],
} as const;
