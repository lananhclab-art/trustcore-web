/**
 * components/ui/button.tsx
 * ─────────────────────────────────────────────────────────────────
 * Button — production-grade, fully typed, token-only.
 *
 * Figma source:
 *   - Primary (blue pill):  node 9129:96  — bg: --color-blue-500, text: white
 *   - Secondary (grey pill): node 9129:98  — bg: --color-black-50, text: --color-black-500
 *   - Email Form usage:      node 9056:14682 — shows pill on dark bg (large padding)
 *
 * Token mapping (from Figma variable defs):
 *   button/Primary    → --color-blue-500  (#0185ee)
 *   button/secondary  → --color-black-50  (#e8e8e9)
 *   text/white        → --color-base-white
 *   text/default/heading → --color-black-500 (#14141e)
 *   Label-1 font size → 16px  (--font-body-body-sm-text-size)
 *   Label-1 line-height → 22px
 *   Label-1 letter-spacing → -0.18px
 *   Label-1 weight → 600 (semibold)
 *   full radius → 999px (--radius-full)
 *   padding x (default): spacing-lg = 24px  (--spacing-lg from 2xl token)
 *   padding y (default): spacing-xs =  8px  (--spacing-xs)
 *   padding x (large):  spacing-3xl = 48px
 *   padding y (large):  spacing-sm  = 12px
 * ─────────────────────────────────────────────────────────────────
 */

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

// ─── Button Token CSS Variables ───────────────────────────────────
// These are injected into globals.css and extend the semantic layer.
// No hardcoded color values anywhere in this file.

// ─── CVA Variant Definition ───────────────────────────────────────

const buttonVariants = cva(
  // ── Base styles: shared across all variants + sizes ──────────────
  [
    // Layout
    "inline-flex items-center justify-center gap-[var(--spacing-xs,8px)]",
    // Shape — always pill from Figma
    "rounded-[var(--radius-full,999px)]",
    // Typography — Label/Label-1/Semi Bold from Figma
    "font-[family-name:var(--font-primary,'Inter',sans-serif)]",
    "font-semibold",
    "text-[length:var(--font-body-body-sm-text-size,16px)]",
    "leading-[22px]",
    "tracking-[-0.18px]",
    "whitespace-nowrap",
    // Interaction
    "transition-colors duration-150 ease-in-out",
    "cursor-pointer select-none",
    "outline-none",
    "focus-visible:ring-2 focus-visible:ring-[var(--color-border-focus)] focus-visible:ring-offset-2",
    // Disabled
    "disabled:cursor-not-allowed disabled:opacity-50",
    // Remove default button styles
    "border-0",
    "no-underline",
  ],
  {
    variants: {
      /**
       * variant — maps to Figma button token categories
       *
       * primary   → button/Primary   → --color-blue-500
       * secondary → button/secondary → --color-black-50
       * ghost     → transparent bg, border
       * danger    → error/solid color
       * link      → no bg, underline on hover
       */
      variant: {
        primary: [
          "bg-[var(--color-brand-primary,var(--color-blue-500))]",
          "text-[color:var(--color-base-white)]",
          "hover:bg-[var(--button-Hover,#0179D9)] lg:hover:opacity-100 hover:opacity-100",
          "active:opacity-80",
          "disabled:bg-[var(--color-interactive-primary-disabled,var(--color-blue-100))]",
        ],
        secondary: [
          "bg-[var(--color-button-secondary,var(--color-black-50))]",
          "text-[#14141E]",
          "hover:bg-[var(--color-black-100)]",
          "active:bg-[var(--color-black-200)]",
          "disabled:bg-[var(--color-black-50)]",
          "disabled:text-[color:var(--color-text-disabled)]",
        ],
        ghost: [
          "bg-transparent",
          "text-[color:var(--color-text-brand)]",
          "border border-[var(--color-border-brand)]",
          "hover:bg-[var(--color-bg-brand-subtle)]",
          "active:bg-[var(--color-blue-100)]",
        ],
        danger: [
          "bg-[var(--color-error-solid)]",
          "text-[color:var(--color-base-white)]",
          "hover:bg-[var(--color-red-600)]",
          "active:bg-[var(--color-red-700)]",
        ],
        "on-dark": [
          "bg-[var(--Color-Base-White,#FFF)]",
          "text-[color:var(--text-primary,#0F172A)]",
          "border-0",
          "hover:opacity-90",
          "active:opacity-80",
        ],
        "secondary-white": [
          "bg-transparent",
          "text-[color:var(--color-base-white)]",
          "border border-[var(--color-base-white)]",
          "hover:bg-white/10",
          "active:bg-white/20",
        ],
        link: [
          "bg-transparent",
          "text-[color:var(--color-text-brand)]",
          "underline-offset-4",
          "hover:underline",
          "p-0",
          "rounded-none",
        ],
      },

      /**
       * size — maps to Figma spacing tokens
       *
       * sm  → py-xs  (8px) px-md  (16px) — compact/inline
       * md  → py-xs  (8px) px-lg  (24px) — DEFAULT (matches Figma 9129:96)
       * lg  → py-sm  (12px) px-3xl (48px) — hero / CTA (matches 9056:14682 usage)
       * xl  → py-m  (20px) px-4xl (64px)  — marketing hero
       * icon → square, no padding change
       */
      size: {
        sm: [
          "py-[8px]",
          "px-[16px]",
          "text-[16px]",
          "leading-[22px]",
          "tracking-[-0.18px]",
          "font-semibold",
          "gap-[8px]",
        ],
        md: [
          "py-[var(--spacing-xs,8px)]",
          "px-[var(--lg,16px)]",
        ],
        lg: [
          "py-[var(--spacing-sm,12px)]",
          "px-[var(--spacing-3xl,48px)]",
          "text-[length:var(--font-body-body-md-text-size,18px)]",
          "leading-[var(--font-body-body-md-line-height,26px)]",
          "tracking-[var(--font-body-body-md-letter-spacing,-0.45px)]",
        ],
        xl: [
          "py-[var(--spacing-m,20px)]",
          "px-[var(--spacing-4xl,64px)]",
          "text-[length:var(--font-body-body-lg-text-size,20px)]",
          "leading-[var(--font-body-body-lg-line-height,28px)]",
          "tracking-[var(--font-body-body-lg-letter-spacing,-0.5px)]",
        ],
        icon: [
          "p-[var(--spacing-xs,8px)]",
          "aspect-square",
        ],
        hero: [
          "flex",
          "w-[162px]",
          "py-[var(--sm,12px)]",
          "px-[var(--lg,16px)]",
          "justify-center",
          "items-center",
          "gap-[8px]",
          "rounded-[var(--full,999px)]",
          "text-[length:var(--font-body-body-sm-text-size,16px)]",
          "leading-[var(--font-body-label-line-height,20px)]",
          "font-semibold",
        ],
        nav: [
          "h-[44px]",
          "px-[24px]",
          "rounded-[var(--full,999px)]",
          "text-[16px]",
          "leading-[20px]",
          "font-semibold",
        ],
      },

      /**
       * fullWidth — stretches button to container width
       */
      fullWidth: {
        true:  "w-full",
        false: "",
      },

      /**
       * loading — shows a spinner, disables interaction
       */
      loading: {
        true:  "cursor-wait opacity-75 pointer-events-none",
        false: "",
      },
    },

    // ── Default variants ─────────────────────────────────────────
    defaultVariants: {
      variant:   "primary",
      size:      "md",
      fullWidth: false,
      loading:   false,
    },
  },
);

// ─── Types ────────────────────────────────────────────────────────

export type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>["variant"]>;
export type ButtonSize    = NonNullable<VariantProps<typeof buttonVariants>["size"]>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Icon displayed before the label */
  leftIcon?:  React.ReactNode;
  /** Icon displayed after the label */
  rightIcon?: React.ReactNode;
  /** Shows spinner and disables interaction */
  loading?:   boolean;
  /** Render as a different element (e.g. anchor for links) */
  asChild?:   boolean;
  children?:  React.ReactNode;
}

// ─── Spinner ──────────────────────────────────────────────────────

const Spinner: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={cn("animate-spin", className)}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
    width="1em"
    height="1em"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    />
  </svg>
);

// ─── Component ───────────────────────────────────────────────────

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant   = "primary",
      size      = "md",
      fullWidth = false,
      loading   = false,
      leftIcon,
      rightIcon,
      disabled,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        className={cn(
          buttonVariants({ variant, size, fullWidth, loading }),
          className,
        )}
        {...props}
      >
        {loading ? (
          <>
            <Spinner className="w-[1em] h-[1em] shrink-0" />
            {children && (
              <span className="opacity-70">{children}</span>
            )}
          </>
        ) : (
          <>
            {leftIcon  && <span className="shrink-0 flex items-center">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="shrink-0 flex items-center">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
