import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// `clsx` handles conditional logic and merging,
// `twMerge` resolves Tailwind class conflicts.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}
