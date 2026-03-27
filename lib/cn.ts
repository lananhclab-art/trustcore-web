/**
 * lib/cn.ts
 * Utility for composing Tailwind class names safely.
 * Uses clsx for conditionals and tailwind-merge to deduplicate.
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
