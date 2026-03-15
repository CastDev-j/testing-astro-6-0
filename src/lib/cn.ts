import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * @description: Utility function to merge class names using clsx and tailwind-merge.
 * @param {...ClassValue[]} inputs - An array of class values to be merged.
 * @returns {string} - A single string of merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
