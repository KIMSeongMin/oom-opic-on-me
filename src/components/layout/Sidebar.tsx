import {
  Bot,
  ChartNoAxesCombined,
  ChevronRight,
  ClipboardList,
  GraduationCap,
  House,
  Mic,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";
import { cn } from "../../lib/utils";

export type ViewId =
  | "home"
  | "survey"
  | "difficulty"
  | "script-outdoor"
  | "script-indoor"
  | "script-sports"
  | "script-home"
  | "roleplay"
  | "practice"
  | "ai-settings";

type SidebarProps = {
  activeView: ViewId;
  onNavigate: (view: ViewId) => void;
  mobileOpen?: boolean;
  onClose?: () => void;
};

export const viewTitles: Record<ViewId, string> = {
  home: "홈 / 전략 개요",
  survey: "STEP 1. 서베이 고정 가이드",
  difficulty: "STEP 2. 난이도 설정",
  "script-outdoor": "STEP 3. 야외 / 여행",
  "script-indoor": "STEP 3. 실내 / 휴식",
  "script-sports": "STEP 3. 운동 / 취미",
  "script-home": "STEP 3. 집 / 거주지",
  roleplay: "STEP 4. 롤플레이 공식",
  practice: "STEP 5. 실전 연습",
  "ai-settings": "AI 피드백 / 설정",
};

const primaryItems: Array<{ id: ViewId; label: string; icon: typeof House }> = [
  { id: "home", label: "홈 / 전략 개요", icon: House },
  { id: "survey", label: "STEP 1. 서베이 고정", icon: ClipboardList },
  { id: "difficulty", label: "STEP 2. 난이도 설정", icon: SlidersHorizontal },
];

const scriptItems: Array<{ id: ViewId; label: string }> = [
  { id: "script-outdoor", label: "야외 / 여행" },
  { id: "script-indoor", label: "실내 / 휴식" },
  { id: "script-sports", label: "운동 / 취미" },
  { id: "script-home", label: "집 / 거주지" },
];

const secondaryItems: Array<{ id: ViewId; label: string; icon: typeof Mic }> = [
  { id: "roleplay", label: "STEP 4. 롤플레이 공식", icon: ChartNoAxesCombined },
  { id: "practice", label: "STEP 5. 실전 연습", icon: Mic },
  { id: "ai-settings", label: "AI 피드백 / 설정", icon: Bot },
];

function NavigationButton({ active, children, onClick, nested = false }: { active: boolean; children: React.ReactNode; onClick: () => void; nested?: boolean }) {
  return (
    <button
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
        nested && "pl-9 text-xs",
        active
          ? "bg-indigo-600 text-white shadow-sm"
          : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export function Sidebar({ activeView, onNavigate, mobileOpen = false, onClose }: SidebarProps) {
  const navigate = (view: ViewId) => {
    onNavigate(view);
    onClose?.();
  };

  const content = (
    <div className="flex h-full flex-col bg-zinc-50 px-3 py-5 dark:bg-zinc-950">
      <div className="mb-7 flex items-center justify-between px-2">
        <button aria-label="홈으로 이동" className="flex items-center gap-3 text-left" onClick={() => navigate("home")} type="button">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-indigo-600 text-white"><GraduationCap className="h-5 w-5" /></span>
          <span>
            <span className="block text-sm font-semibold text-zinc-950 dark:text-white">OOM</span>
            <span className="block text-xs text-zinc-500 dark:text-zinc-400">OPIc On Me</span>
          </span>
        </button>
        {onClose ? <button aria-label="메뉴 닫기" className="rounded p-2 text-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-800 lg:hidden" onClick={onClose} type="button"><X className="h-5 w-5" /></button> : null}
      </div>

      <nav aria-label="OOM 메뉴" className="space-y-1">
        {primaryItems.map((item) => {
          const Icon = item.icon;
          return <NavigationButton active={activeView === item.id} key={item.id} onClick={() => navigate(item.id)}><Icon className="h-4 w-4" />{item.label}</NavigationButton>;
        })}

        <div className="px-3 pb-1 pt-5 text-[11px] font-semibold tracking-wide text-zinc-400">STEP 3. 만능 스크립트</div>
        <div className="space-y-1 border-l border-zinc-200 dark:border-zinc-800">
          {scriptItems.map((item) => <NavigationButton active={activeView === item.id} key={item.id} nested onClick={() => navigate(item.id)}><ChevronRight className="h-3.5 w-3.5" />{item.label}</NavigationButton>)}
        </div>

        <div className="pt-4">
          {secondaryItems.map((item) => {
            const Icon = item.icon;
            return <NavigationButton active={activeView === item.id} key={item.id} onClick={() => navigate(item.id)}><Icon className="h-4 w-4" />{item.label}</NavigationButton>;
          })}
        </div>
      </nav>

      <div className="mt-auto rounded-md border border-indigo-100 bg-indigo-50 p-3 dark:border-indigo-900 dark:bg-indigo-950">
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 dark:text-indigo-300"><Sparkles className="h-4 w-4" />오늘의 한 문장</div>
        <p className="mt-1.5 text-xs leading-5 text-indigo-700/80 dark:text-indigo-200/80">한 장면만 또렷하게, 90초 동안 말해 보세요. ✨</p>
      </div>
    </div>
  );

  return (
    <>
      <aside className="hidden h-screen w-64 shrink-0 border-r border-zinc-200 dark:border-zinc-800 lg:block">{content}</aside>
      {mobileOpen ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button aria-label="메뉴 배경 닫기" className="absolute inset-0 bg-zinc-950/40" onClick={onClose} type="button" />
          <aside aria-label="모바일 메뉴" className="relative h-full w-72 max-w-[85vw] border-r border-zinc-200 bg-zinc-50 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950">{content}</aside>
        </div>
      ) : null}
    </>
  );
}
