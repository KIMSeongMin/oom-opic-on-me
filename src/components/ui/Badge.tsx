import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "indigo" | "emerald" | "amber" | "rose";
};

const tones = {
  default: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200",
  indigo: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300",
  emerald: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  amber: "bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  rose: "bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
};

export function Badge({ className, tone = "default", ...props }: BadgeProps) {
  return <span className={cn("inline-flex items-center rounded px-2 py-1 text-xs font-medium", tones[tone], className)} {...props} />;
}
