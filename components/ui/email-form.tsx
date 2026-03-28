"use client";

import React from "react";
import { cn } from "../../lib/cn";
import { Button } from "./button";
import { Input } from "./input";

export interface EmailFormProps {
  placeholder?: string;
  buttonLabel?: string;
  onSubmit?: (email: string) => void;
  loading?: boolean;
  className?: string;
}

export const EmailForm = React.forwardRef<HTMLFormElement, EmailFormProps>(
  (
    {
      placeholder = "Enter your work email",
      buttonLabel = "Contact Us",
      onSubmit,
      loading = false,
      className,
    },
    ref
  ) => {
    const [email, setEmail] = React.useState("");
    const [error, setError] = React.useState("");
    const [touched, setTouched] = React.useState(false);

    const validateEmail = (value: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    const checkError = (value: string) => {
      if (!value) return "Email is required";
      if (!validateEmail(value)) return "Invalid email format";
      return "";
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const err = checkError(email);
      setError(err);

      if (err) return;

      onSubmit?.(email);
    };

    return (
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className={cn("flex flex-row items-start gap-[8px] w-full max-w-[480px]", className)}
      >
        {/* INPUT BLOCK */}
        <div className="flex flex-col flex-1">

          <Input
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const value = e.target.value;
              setEmail(value);

              if (touched) {
                setError(checkError(value));
              }
            }}
            onBlur={() => {
              // Only trigger validation on blur if the user has actually entered some data
              if (email) {
                setTouched(true);
                setError(checkError(email));
              }
            }}
            placeholder={placeholder}
            aria-label="Work email address"
            className={cn(
              "w-full",

              // ✅ fixed height (same as button)
              "h-[48px]",
              "px-[16px] py-0",

              // shape
              "rounded-[12px]",
              "bg-transparent",
              "border",

              // typography
              "text-white",
              "placeholder:text-white/60",
              "text-[14px] md:text-[16px]",
              "leading-[22px]",
              "tracking-[-0.18px]",

              // ✅ FIXED focus (no ring → same radius)
              "outline-none transition-colors",

              error
                ? "border-red-500 focus:border-red-500"
                : "border-white/70 focus:border-[#0185EE]"
            )}
          />

          {/* reserve space to avoid layout shift */}
          <div className="h-[18px] mt-1">
            {error && (
              <span className="text-red-500 text-[10px] md:text-[12px]">
                {error}
              </span>
            )}
          </div>
        </div>

        {/* BUTTON */}
        <Button
          type="submit"
          variant="primary"
          loading={loading}
          className={cn(
            "h-[48px]", // ✅ match input height
            "px-[14px] md:px-[24px]",
            "rounded-full",

            "text-[14px] md:text-[16px]",
            "font-semibold",
            "leading-[22px]",
            "tracking-[-0.18px]",

            "flex items-center justify-center",
            "whitespace-nowrap",
            "shrink-0"
          )}
        >
          {buttonLabel}
        </Button>
      </form>
    );
  }
);

EmailForm.displayName = "EmailForm";

export default EmailForm;
