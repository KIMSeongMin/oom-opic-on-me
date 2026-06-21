import type { ReactNode } from "react";
import { ArrowRight, Menu, Moon, Sun } from "lucide-react";
import { Button } from "../ui/Button";
import { type ViewId, viewTitles } from "./Sidebar";
import { ExpandableSidebar } from "./ExpandableSidebar";

type AppShellProps = {
  activeView: ViewId;
  children: ReactNode;
  darkMode: boolean;
  mobileOpen: boolean;
  onNavigate: (view: ViewId) => void;
  onToggleDarkMode: () => void;
  onToggleMobileMenu: () => void;
  onCloseMobileMenu: () => void;
  nextStep?: { label: string; onClick: () => void };
};

const progressMap: Partial<Record<ViewId, number>> = {
  survey: 20,
  difficulty: 40,
  "script-outdoor": 60,
  "script-indoor": 60,
  "script-sports": 60,
  "script-home": 60,
  roleplay: 80,
  practice: 100,
};

export function AppShell({ activeView, children, darkMode, mobileOpen, onNavigate, onToggleDarkMode, onToggleMobileMenu, onCloseMobileMenu, nextStep }: AppShellProps) {
  const progress = progressMap[activeView] ?? 0;
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-100 lg:flex">
      <ExpandableSidebar activeView={activeView} mobileOpen={mobileOpen} onClose={onCloseMobileMenu} onNavigate={onNavigate} />
      <main className="min-w-0 flex-1">
        <header className="sticky top-0 z-20 border-b border-zinc-200 bg-zinc-100/90 px-4 py-3 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90 sm:px-6 lg:px-9">
          <div className="mx-auto flex max-w-7xl items-center gap-3">
            <Button aria-label="메뉴 열기" className="lg:hidden" onClick={onToggleMobileMenu} size="icon" variant="ghost"><Menu className="h-5 w-5" /></Button>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-zinc-900 dark:text-white">{viewTitles[activeView]}</p>
              <div className="mt-2 h-1 overflow-hidden rounded bg-zinc-200 dark:bg-zinc-800"><div className="h-full rounded bg-indigo-600 transition-all duration-500" style={{ width: `${progress}%` }} /></div>
            </div>
            <span className="hidden text-xs font-medium text-zinc-500 lg:block">훈련 진행 {progress}%</span>
            {nextStep ? <><Button aria-label={`다음 단계: ${nextStep.label}`} className="sm:hidden" onClick={nextStep.onClick} size="icon" variant="secondary"><ArrowRight className="h-4 w-4" /></Button><Button aria-label={`다음 단계: ${nextStep.label}`} className="hidden sm:inline-flex" onClick={nextStep.onClick} size="sm" variant="secondary"><span className="hidden lg:inline">다음:</span>{nextStep.label}<ArrowRight className="h-3.5 w-3.5" /></Button></> : null}
            <Button aria-label={darkMode ? "라이트 모드로 전환" : "다크 모드로 전환"} onClick={onToggleDarkMode} size="icon" variant="ghost">
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </header>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-9 lg:py-9">{children}</div>
      </main>
    </div>
  );
}
