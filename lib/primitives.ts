/**
 * primitives.ts
 * ─────────────────────────────────────────────────────────────────
 * Layer 0 — Raw values extracted directly from Figma Variables JSON.
 * Nothing in this file references another token.
 * Everything else references this file.
 * ─────────────────────────────────────────────────────────────────
 */

// ─── Color Palette ───────────────────────────────────────────────

export const colorBlue = {
  50:  "#f7f9fb",  // r:0.969 g:0.976 b:0.984
  100: "#b0d9fa",  // r:0.690 g:0.851 b:0.980
  200: "#8ac7f7",  // r:0.541 g:0.780 b:0.969
  300: "#55adf4",  // r:0.333 g:0.678 b:0.957
  400: "#349def",  // r:0.204 g:0.616 b:0.945
  500: "#0185ee",  // r:0.004 g:0.522 b:0.933  ← brand primary
  600: "#0179d9",  // r:0.004 g:0.475 b:0.851
  700: "#015ea9",  // r:0.004 g:0.369 b:0.663
  800: "#014983",  // r:0.004 g:0.286 b:0.514
  900: "#003863",  // r:0.000 g:0.220 b:0.392
} as const;

export const colorBlack = {
  50:  "#e8e8e9",  // near-white tint
  100: "#b6b6b9",
  200: "#939398",
  300: "#626268",
  400: "#43434b",
  500: "#14141e",  // r:0.078 g:0.078 b:0.118
  600: "#12121b",
  700: "#0e0e15",
  800: "#0b0b11",
  900: "#08080d",  // deepest black
} as const;

export const colorGreen = {
  50:  "#e8f9f3",
  100: "#b7edd9",
  200: "#94e5c6",
  300: "#63d9ad",
  400: "#45d29d",
  500: "#16c784",  // r:0.086 g:0.780 b:0.518 ← success primary
  600: "#14b578",
  700: "#108d5e",
  800: "#0c6d49",
  900: "#095437",
} as const;

export const colorRed = {
  50:  "#fef0f0",
  100: "#fbd1d1",
  200: "#f9baba",
  300: "#f69b9d",
  400: "#f48889",
  500: "#f16a6c",  // r:0.945 g:0.416 b:0.424 ← error/danger primary
  600: "#db606a",
  700: "#ab4b4d",
  800: "#853a3b",
  900: "#652c2c",
} as const;

export const colorOrange = {
  50:  "#fff5e6",
  100: "#ffdf b0",
  200: "#ffd08a",
  300: "#ffba54",
  400: "#ffad33",
  500: "#ff9800",  // r:1.0 g:0.596 b:0   ← warning primary
  600: "#e88a00",
  700: "#b56c00",
  800: "#8c5400",
  900: "#6b4000",
} as const;

export const colorBase = {
  black: "#1e1f20",  // r:0.118 g:0.122 b:0.125
  white: "#ffffff",
} as const;

// Overlay / modal backdrop
export const colorOverlay = {
  "purple-900": "rgba(17,17,18,0.60)",  // r:0.067 g:0.067 b:0.071 a:0.6
} as const;


// ─── Spacing Scale ────────────────────────────────────────────────
// Based on Scale/0..11 from Figma — 4-px base unit
export const scale = {
  0:    0,
  1:    4,
  1.5:  6,
  2:    8,
  3:    12,
  4:    16,
  5:    20,
  6:    24,
  7:    32,
  8:    48,
  9:    64,
  10:   72,
  11:   96,
} as const;

// Named spacing aliases (Desktop viewport)
export const spacing = {
  none:  0,
  "2":   2,
  "4":   4,
  xs:    8,
  sm:    12,
  md:    16,
  m:     20,
  lg:    24,
  xl:    32,
  xxl:   40,
  "3xl": 48,
  "4xl": 64,
  "5xl": 80,
  "6xl": 120,
} as const;

// ─── Border Radius ────────────────────────────────────────────────
export const radius = {
  0:  0,
  1:  4,
  2:  6,
  3:  8,
  4:  12,
  5:  16,
  6:  20,
  7:  24,
  8:  36,
  9:  96,   // fully pill
} as const;

// ─── Border Width ─────────────────────────────────────────────────
export const border = {
  0: 1,
  1: 1.5,
  2: 2,
  3: 2.5,
  4: 3,
} as const;

// ─── Icon Sizes ───────────────────────────────────────────────────
export const iconSize = {
  0: 12,   // xxs
  1: 16,   // xs
  2: 20,   // s
  3: 24,   // base / lg
  4: 32,   // m
  5: 40,   // l
} as const;

// ─── Font Weights ─────────────────────────────────────────────────
export const fontWeight = {
  thin:       100,
  extraLight: 200,
  light:      300,
  regular:    400,
  medium:     500,
  semibold:   600,
  bold:       700,
} as const;

// ─── Font Families ────────────────────────────────────────────────
export const fontFamily = {
  primary:   "Inter, ui-sans-serif, system-ui, sans-serif",
  secondary: "Inter, ui-sans-serif, system-ui, sans-serif",
} as const;

// ─── Shadow Depth Tokens ─────────────────────────────────────────
export const depth = {
  0:    0,
  0.25: 1,
  100:  4,
} as const;
