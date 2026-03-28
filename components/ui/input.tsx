import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const inputVariants = cva(
  [
    "w-full",

    // ❌ FIX: remove flex (this was breaking rendering)
    "block appearance-none",

    // Typography
    "font-[family-name:var(--font-primary,'Inter',sans-serif)]",
    "font-normal",
    "text-[length:var(--font-body-body-sm-text-size,16px)]",
    "leading-[22px]",
    "tracking-[-0.18px]",

    // Interaction
    "transition-colors duration-150 ease-in-out",
    "outline-none",
    "bg-transparent",

    // ❌ FIX: remove ALL ring globally safely against forms plugin
    "ring-0 focus:ring-0 !outline-none focus:!outline-none focus-visible:!outline-none focus:!ring-0",

    // Disabled
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: [
          "border border-[var(--color-border-default)]",
          "bg-[var(--color-bg-primary)]",
          "text-[color:var(--color-text-primary)]",
          "placeholder:text-[color:var(--color-text-tertiary)]",
          "hover:border-[var(--color-border-strong)]",

          // ✅ FIXED
          "focus:border-[var(--color-border-focus)]",
          "focus:outline-none",
        ],

        dark: [
          "border border-[var(--color-base-white)]",
          "text-[color:var(--color-base-white)]",
          "placeholder:text-[color:rgba(255,255,255,0.6)]",

          // ✅ FIXED
          "focus:border-[var(--color-base-white)]",
          "focus:outline-none",
        ],

        ghost: [
          "border border-transparent",
          "text-[color:var(--color-text-primary)]",
          "placeholder:text-[color:var(--color-text-tertiary)]",
          "hover:border-[var(--color-border-subtle)]",

          // ✅ FIXED
          "focus:border-[var(--color-border-focus)]",
          "focus:outline-none",
        ],

        error: [
          "border border-[var(--color-error-border)]",
          "bg-[var(--color-bg-primary)]",
          "text-[color:var(--color-text-primary)]",
          "placeholder:text-[var(--color-text-tertiary)]",

          // ✅ FIXED
          "focus:border-[var(--color-error-solid)]",
          "focus:outline-none",
        ],
      },

      size: {
        sm: [
          "px-[12px]",
          "h-[36px]",
          "!rounded-[8px]",
          "text-[14px]",
        ],

        md: [
          // 🔥 CRITICAL: fixed height (NOT padding-based)
          "h-[48px]",
          "px-[16px]",
          "py-0",

          // 🔥 single source of truth
          "!rounded-[12px]",
        ],

        lg: [
          "h-[56px]",
          "px-[24px]",
          "!rounded-[12px]",
          "text-[18px]",
        ],
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

// TYPES

export type InputVariant = NonNullable<
  VariantProps<typeof inputVariants>["variant"]
>;

export type InputSize = NonNullable<
  VariantProps<typeof inputVariants>["size"]
>;

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
  VariantProps<typeof inputVariants> {
  error?: string;
  hint?: string;
  label?: string;
  required?: boolean;
}

// COMPONENT

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant,
      size = "md",
      error,
      hint,
      label,
      required,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const resolvedVariant = error ? "error" : variant ?? "default";
    const inputId =
      id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex flex-col gap-[4px] w-full">
        {label && (
          <label htmlFor={inputId} className="text-[14px] font-medium text-white">
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          className={cn(
            inputVariants({ variant: resolvedVariant, size }),
            className
          )}
          {...props}
        />

        {error && (
          <p className="text-red-500 text-[14px]">
            {error}
          </p>
        )}

        {!error && hint && (
          <p className="text-[14px] text-gray-400">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
