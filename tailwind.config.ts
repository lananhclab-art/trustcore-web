/**
 * tailwind.config.ts
 * ─────────────────────────────────────────────────────────────────
 * Tailwind v3/v4 configuration.
 * RULE: All values reference CSS custom properties.
 *       Zero hardcoded hex / pixel values.
 * ─────────────────────────────────────────────────────────────────
 */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  // Enable class-based dark mode (synced to data-theme="dark")
  darkMode: ["class", '[data-theme="dark"]'],

  theme: {
    extend: {

      // ─── Colors ──────────────────────────────────────────────
      colors: {

        // Primitive palettes (for escape-hatch use only)
        blue: {
          50:  "var(--color-blue-50)",
          100: "var(--color-blue-100)",
          200: "var(--color-blue-200)",
          300: "var(--color-blue-300)",
          400: "var(--color-blue-400)",
          500: "var(--color-blue-500)",
          600: "var(--color-blue-600)",
          700: "var(--color-blue-700)",
          800: "var(--color-blue-800)",
          900: "var(--color-blue-900)",
        },
        black: {
          50:  "var(--color-black-50)",
          100: "var(--color-black-100)",
          200: "var(--color-black-200)",
          300: "var(--color-black-300)",
          400: "var(--color-black-400)",
          500: "var(--color-black-500)",
          600: "var(--color-black-600)",
          700: "var(--color-black-700)",
          800: "var(--color-black-800)",
          900: "var(--color-black-900)",
        },
        green: {
          50:  "var(--color-green-50)",
          100: "var(--color-green-100)",
          200: "var(--color-green-200)",
          300: "var(--color-green-300)",
          400: "var(--color-green-400)",
          500: "var(--color-green-500)",
          600: "var(--color-green-600)",
          700: "var(--color-green-700)",
          800: "var(--color-green-800)",
          900: "var(--color-green-900)",
        },
        red: {
          50:  "var(--color-red-50)",
          100: "var(--color-red-100)",
          200: "var(--color-red-200)",
          300: "var(--color-red-300)",
          400: "var(--color-red-400)",
          500: "var(--color-red-500)",
          600: "var(--color-red-600)",
          700: "var(--color-red-700)",
          800: "var(--color-red-800)",
          900: "var(--color-red-900)",
        },
        orange: {
          50:  "var(--color-orange-50)",
          100: "var(--color-orange-100)",
          200: "var(--color-orange-200)",
          300: "var(--color-orange-300)",
          400: "var(--color-orange-400)",
          500: "var(--color-orange-500)",
          600: "var(--color-orange-600)",
          700: "var(--color-orange-700)",
          800: "var(--color-orange-800)",
          900: "var(--color-orange-900)",
        },

        // ── Semantic tokens (PREFER these in components) ──
        bg: {
          primary:      "var(--color-bg-primary)",
          secondary:    "var(--color-bg-secondary)",
          tertiary:     "var(--color-bg-tertiary)",
          inverse:      "var(--color-bg-inverse)",
          overlay:      "var(--color-bg-overlay)",
          brand:        "var(--color-bg-brand)",
          "brand-subtle": "var(--color-bg-brand-subtle)",
        },
        text: {
          primary:   "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          tertiary:  "var(--color-text-tertiary)",
          disabled:  "var(--color-text-disabled)",
          inverse:   "var(--color-text-inverse)",
          brand:     "var(--color-text-brand)",
          "on-brand": "var(--color-text-on-brand)",
        },
        border: {
          default: "var(--color-border-default)",
          strong:  "var(--color-border-strong)",
          subtle:  "var(--color-border-subtle)",
          focus:   "var(--color-border-focus)",
          brand:   "var(--color-border-brand)",
        },
        interactive: {
          primary:          "var(--color-interactive-primary)",
          "primary-hover":    "var(--color-interactive-primary-hover)",
          "primary-pressed":  "var(--color-interactive-primary-pressed)",
          "primary-disabled": "var(--color-interactive-primary-disabled)",
          "primary-fg":       "var(--color-interactive-primary-fg)",
        },
        success: {
          bg:     "var(--color-success-bg)",
          border: "var(--color-success-border)",
          text:   "var(--color-success-text)",
          icon:   "var(--color-success-icon)",
          solid:  "var(--color-success-solid)",
        },
        warning: {
          bg:     "var(--color-warning-bg)",
          border: "var(--color-warning-border)",
          text:   "var(--color-warning-text)",
          icon:   "var(--color-warning-icon)",
          solid:  "var(--color-warning-solid)",
        },
        error: {
          bg:     "var(--color-error-bg)",
          border: "var(--color-error-border)",
          text:   "var(--color-error-text)",
          icon:   "var(--color-error-icon)",
          solid:  "var(--color-error-solid)",
        },
        info: {
          bg:     "var(--color-info-bg)",
          border: "var(--color-info-border)",
          text:   "var(--color-info-text)",
          icon:   "var(--color-info-icon)",
          solid:  "var(--color-info-solid)",
        },
      },

      // ─── Spacing ─────────────────────────────────────────────
      spacing: {
        "none":  "var(--spacing-none)",
        "2":     "var(--spacing-2)",
        "4":     "var(--spacing-4)",
        "xs":    "var(--spacing-xs)",
        "sm":    "var(--spacing-sm)",
        "md":    "var(--spacing-md)",
        "m":     "var(--spacing-m)",
        "lg":    "var(--spacing-lg)",
        "xl":    "var(--spacing-xl)",
        "xxl":   "var(--spacing-xxl)",
        "3xl":   "var(--spacing-3xl)",
        "4xl":   "var(--spacing-4xl)",
        "5xl":   "var(--spacing-5xl)",
        "6xl":   "var(--spacing-6xl)",
        "7xl":   "var(--spacing-7xl)",
        // Raw scale (if needed)
        "scale-0":   "var(--scale-0)",
        "scale-1":   "var(--scale-1)",
        "scale-1-5": "var(--scale-1-5)",
        "scale-2":   "var(--scale-2)",
        "scale-3":   "var(--scale-3)",
        "scale-4":   "var(--scale-4)",
        "scale-5":   "var(--scale-5)",
        "scale-6":   "var(--scale-6)",
        "scale-7":   "var(--scale-7)",
        "scale-8":   "var(--scale-8)",
        "scale-9":   "var(--scale-9)",
        "scale-10":  "var(--scale-10)",
        "scale-11":  "var(--scale-11)",
      },

      // ─── Font Size + Typography ───────────────────────────────
      fontSize: {
        // Headings — all responsive via CSS vars
        "heading-h1": [
          "var(--font-headings-h1-text-size, 64px)",
          {
            lineHeight:    "var(--font-headings-h1-line-height, 70.4px)",
            letterSpacing: "var(--font-headings-h1-letter-spacing, -1.6px)",
            fontWeight:    "700",
          },
        ],
        "heading-h2": [
          "var(--font-headings-h2-text-size, 48px)",
          {
            lineHeight:    "var(--font-headings-h2-line-height, 52.8px)",
            letterSpacing: "var(--font-headings-h2-letter-spacing, -1.2px)",
            fontWeight:    "700",
          },
        ],
        "heading-h3": [
          "var(--font-headings-h3-text-size, 32px)",
          {
            lineHeight:    "var(--font-headings-h3-line-height, 38.4px)",
            letterSpacing: "var(--font-headings-h3-letter-spacing, -0.8px)",
            fontWeight:    "700",
          },
        ],
        "heading-h4": [
          "var(--font-headings-h4-text-size-4, 24px)",
          {
            lineHeight:    "var(--font-headings-h4-line-height-3, 32px)",
            letterSpacing: "var(--font-headings-h4-letter-spacing, -0.6px)",
            fontWeight:    "700",
          },
        ],
        "heading-h5": [
          "var(--font-headings-h5-text-size, 20px)",
          {
            lineHeight:    "var(--font-headings-h5-line-height, 28px)",
            letterSpacing: "var(--font-headings-h5-paragraph-spacing, -0.5px)",
            fontWeight:    "700",
          },
        ],
        // Body
        "body-lg": [
          "var(--font-body-body-lg-text-size, 20px)",
          {
            lineHeight:    "var(--font-body-body-lg-line-height, 28px)",
            letterSpacing: "var(--font-body-body-lg-letter-spacing, -0.5px)",
          },
        ],
        "body-md": [
          "var(--font-body-body-md-text-size, 18px)",
          {
            lineHeight:    "var(--font-body-body-md-line-height, 26px)",
            letterSpacing: "var(--font-body-body-md-letter-spacing, -0.45px)",
          },
        ],
        "body-sm": [
          "var(--font-body-body-sm-text-size, 16px)",
          {
            lineHeight:    "var(--font-body-body-sm-line-height, 26px)",
            letterSpacing: "var(--font-body-body-sm-letter-spacing, -0.4px)",
          },
        ],
        "body-label": [
          "var(--font-body-label-text-size, 14px)",
          {
            lineHeight:    "var(--font-body-label-line-height, 20px)",
            letterSpacing: "var(--font-body-label-letter-spacing, -0.35px)",
          },
        ],
        "body-small": [
          "var(--font-body-small-text-size, 12px)",
          {
            lineHeight:    "var(--font-body-small-line-height, 16px)",
            letterSpacing: "0.24px",
          },
        ],
        "body-xs": [
          "var(--font-body-xs-text-size, 10px)",
          {
            lineHeight:    "var(--font-body-xs-paragraph-spacing, 14px)",
            letterSpacing: "0px",
          },
        ],
      },

      // ─── Font Family ─────────────────────────────────────────
      fontFamily: {
        primary:   "var(--font-primary)",
        secondary: "var(--font-secondary)",
        sans:      "var(--font-primary)",
      },

      // ─── Font Weight ─────────────────────────────────────────
      fontWeight: {
        regular:  "var(--fw-regular)",
        medium:   "var(--fw-medium)",
        semibold: "var(--fw-semibold)",
        bold:     "var(--fw-bold)",
      },

      // ─── Line Height ─────────────────────────────────────────
      lineHeight: {
        "h1":    "var(--font-headings-h1-line-height)",
        "h2":    "var(--font-headings-h2-line-height)",
        "h3":    "var(--font-headings-h3-line-height)",
        "h4":    "var(--font-headings-h4-line-height-3)",
        "h5":    "var(--font-headings-h5-line-height)",
        "lg":    "var(--font-body-body-lg-line-height)",
        "md":    "var(--font-body-body-md-line-height)",
        "sm":    "var(--font-body-body-sm-line-height)",
        "label": "var(--font-body-label-line-height)",
        "small": "var(--font-body-small-line-height)",
        "xs":    "var(--font-body-xs-paragraph-spacing)",
      },

      // ─── Border Radius ────────────────────────────────────────
      borderRadius: {
        none: "var(--radius-none)",
        xs:   "var(--radius-xs)",
        sm:   "var(--radius-sm)",
        md:   "var(--radius-md)",
        lg:   "var(--radius-lg)",
        xl:   "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        "3xl": "var(--radius-3xl)",
        full: "var(--radius-full)",
      },

      // ─── Border Width ─────────────────────────────────────────
      borderWidth: {
        thin:    "var(--border-thin)",
        DEFAULT: "var(--border-default)",
        medium:  "var(--border-medium)",
        thick:   "var(--border-thick)",
        heavy:   "var(--border-heavy)",
      },

      // ─── Box Shadow ──────────────────────────────────────────
      boxShadow: {
        sm:       "var(--shadow-100)",
        DEFAULT:  "var(--shadow-200)",
        lg:       "var(--shadow-300)",
        "dark-sm": "var(--shadow-200-dark)",
      },

      // ─── Icon Sizes (via width/height) ────────────────────────
      width: {
        "icon-xxs": "var(--icon-xxs)",
        "icon-xs":  "var(--icon-xs)",
        "icon-sm":  "var(--icon-sm)",
        "icon-md":  "var(--icon-md)",
        "icon-lg":  "var(--icon-lg)",
        "icon-xl":  "var(--icon-xl)",
      },
      height: {
        "icon-xxs": "var(--icon-xxs)",
        "icon-xs":  "var(--icon-xs)",
        "icon-sm":  "var(--icon-sm)",
        "icon-md":  "var(--icon-md)",
        "icon-lg":  "var(--icon-lg)",
        "icon-xl":  "var(--icon-xl)",
      },
      // ─── Animations ─────────────────────────────────────────
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
    },
  },

  plugins: [],
};

export default config;
