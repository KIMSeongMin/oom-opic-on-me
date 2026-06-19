import { Eye, EyeOff, KeyRound } from "lucide-react";
import { cn } from "../../lib/utils";

export type MemoryMode = "full" | "blind" | "keywords";

type MemoryModeToggleProps = {
  mode: MemoryMode;
  onChange: (mode: MemoryMode) => void;
};

const modes = [
  { id: "full" as const, label: "전체 보기", icon: Eye },
  { id: "blind" as const, label: "블라인드", icon: EyeOff },
  { id: "keywords" as const, label: "키워드", icon: KeyRound },
];

export function MemoryModeToggle({ mode, onChange }: MemoryModeToggleProps) {
  return (
    <div aria-label="암기 모드" className="inline-flex w-full rounded-md border border-zinc-200 bg-zinc-50 p-1 dark:border-zinc-700 dark:bg-zinc-950 sm:w-auto" role="group">
      {modes.map((item) => {
        const Icon = item.icon;
        const active = mode === item.id;
        return (
          <button
            aria-pressed={active}
            className={cn(
              "flex flex-1 items-center justify-center gap-1.5 rounded px-2.5 py-2 text-xs font-medium transition-colors sm:flex-none",
              active ? "bg-white text-indigo-700 shadow-sm dark:bg-zinc-800 dark:text-indigo-300" : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
            )}
            key={item.id}
            onClick={() => onChange(item.id)}
            type="button"
          >
            <Icon className="h-3.5 w-3.5" />{item.label}
          </button>
        );
      })}
    </div>
  );
}
