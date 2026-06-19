import { BookOpenText } from "lucide-react";
import { useState } from "react";
import { scripts } from "../../data/scripts";
import type { LlmSettings } from "../../types";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { ScriptDetail } from "./ScriptDetail";

type ScriptDashboardProps = {
  initialScriptId: string;
  settings: LlmSettings;
  onToast: (title: string, description?: string, tone?: "success" | "error" | "info") => void;
  onScriptChange: (scriptId: string) => void;
};

export function ScriptDashboard({ initialScriptId, settings, onToast, onScriptChange }: ScriptDashboardProps) {
  const [selectedId, setSelectedId] = useState(initialScriptId);
  const selected = scripts.find((script) => script.id === selectedId) ?? scripts[0];

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400"><BookOpenText className="h-5 w-5" /><span className="text-sm font-semibold">STEP 3. 만능 스크립트</span></div>
        <h1 className="mt-2 text-2xl font-bold text-zinc-950 dark:text-white sm:text-3xl">질문을 외우기보다, 장면을 재사용하세요.</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">각 그룹은 여러 서베이 항목을 하나의 경험으로 묶습니다. 질문에 맞춰 장소나 활동만 바꾸며 자연스럽게 확장하는 연습을 합니다.</p>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {scripts.map((script) => {
          const active = script.id === selectedId;
          return <button aria-pressed={active} className={`rounded-md border p-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${active ? "border-indigo-500 bg-indigo-50 shadow-sm dark:border-indigo-500 dark:bg-indigo-950" : "border-zinc-200 bg-white hover:border-indigo-200 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-800"}`} key={script.id} onClick={() => { setSelectedId(script.id); onScriptChange(script.id); }} type="button"><div className="flex justify-between gap-2"><p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">{script.group}</p><Badge tone={active ? "indigo" : "default"}>{script.goalLevel}</Badge></div><p className="mt-2 text-sm font-bold leading-5 text-zinc-900 dark:text-white">{script.title}</p><p className="mt-2 line-clamp-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400">{script.surveyBadges.slice(0, 3).join(" · ")}</p></button>;
        })}
      </div>

      <ScriptDetail key={selected.id} onToast={onToast} script={selected} settings={settings} />
      <Card className="border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950"><p className="text-sm font-semibold text-amber-900 dark:text-amber-100">Tip Card</p><p className="mt-1 text-sm leading-6 text-amber-800 dark:text-amber-200">외운 문장을 처음부터 끝까지 재현하려 하지 마세요. 첫 장면, 활동 두 개, 느낀 점 하나만 기억해도 훨씬 자연스럽게 이어집니다.</p></Card>
    </div>
  );
}
