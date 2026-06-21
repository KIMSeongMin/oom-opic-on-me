import { BookOpenText, CheckCircle2, Layers3 } from "lucide-react";
import { useMemo, useState } from "react";
import { alternativeScripts } from "../../data/additionalScripts";
import { scripts } from "../../data/scripts";
import type { LlmSettings } from "../../types";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { ScriptTrainingTabs } from "./ScriptTrainingTabs";

type ScriptDashboardProps = {
  initialScriptId: string;
  settings: LlmSettings;
  onToast: (title: string, description?: string, tone?: "success" | "error" | "info") => void;
  onScriptChange: (scriptId: string) => void;
};

export function ScriptDashboardV2({ initialScriptId, settings, onToast, onScriptChange }: ScriptDashboardProps) {
  const [selectedStoryId, setSelectedStoryId] = useState(initialScriptId);
  const primary = scripts.find((script) => script.id === initialScriptId) ?? scripts[0];
  const storyOptions = useMemo(() => [{ ...primary, optionLabel: "SET A · 기본 장면" }, ...alternativeScripts.filter((script) => script.parentScriptId === primary.id)], [primary]);
  const selected = storyOptions.find((script) => script.id === selectedStoryId) ?? primary;

  return <div className="space-y-6">
    <div><div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400"><BookOpenText className="h-5 w-5" /><span className="text-sm font-semibold">STEP 3. 만능 스크립트</span></div><h1 className="mt-2 text-2xl font-bold text-zinc-950 dark:text-white sm:text-3xl">한 그룹 안에서, 내 입에 붙는 장면을 고르세요.</h1><p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">각 서베이 그룹마다 두 개의 독립적인 장면을 제공합니다. 두 세트를 모두 외우는 방식이 아니라, 말하기 편한 한 세트를 선택해 질문별로 변형하는 방식입니다.</p></div>
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">{scripts.map((script) => { const active = script.id === primary.id; return <button aria-pressed={active} className={`rounded-md border p-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${active ? "border-indigo-500 bg-indigo-50 shadow-sm dark:border-indigo-500 dark:bg-indigo-950" : "border-zinc-200 bg-white hover:border-indigo-200 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-800"}`} key={script.id} onClick={() => onScriptChange(script.id)} type="button"><div className="flex justify-between gap-2"><p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">{script.group}</p><Badge tone={active ? "indigo" : "default"}>2 SETS</Badge></div><p className="mt-2 text-sm font-bold leading-5 text-zinc-900 dark:text-white">{script.title}</p><p className="mt-2 line-clamp-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400">{script.surveyBadges.slice(0, 3).join(" · ")}</p></button>; })}</div>
    <Card className="p-5 sm:p-6"><div className="flex flex-wrap items-start justify-between gap-3"><div><div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400"><Layers3 className="h-5 w-5" /><p className="text-sm font-bold">{primary.group} · 스토리 선택</p></div><h2 className="mt-2 text-lg font-bold text-zinc-950 dark:text-white">두 장면 중 하나만 선택해 깊게 연습하세요.</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">서베이와 질문 유형은 동일하지만, 장소·사람·활동·핵심 단어가 다릅니다. 선택한 세트 안에서만 메인 스토리, 질문별 변형, 답변 설계도를 반복하면 됩니다.</p></div><Badge tone="amber">선택형 · 추가 암기 아님</Badge></div><div className="mt-5 grid gap-3 lg:grid-cols-2">{storyOptions.map((story) => { const active = story.id === selected.id; const optionLabel = "optionLabel" in story ? story.optionLabel : "SET A · 가족 여행"; return <button aria-pressed={active} className={`rounded-md border p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${active ? "border-emerald-500 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-950/40" : "border-zinc-200 hover:border-emerald-200 dark:border-zinc-800 dark:hover:border-emerald-800"}`} key={story.id} onClick={() => setSelectedStoryId(story.id)} type="button"><div className="flex items-center justify-between gap-3"><Badge tone={active ? "emerald" : "default"}>{optionLabel}</Badge>{active ? <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" /> : null}</div><p className="mt-3 text-base font-bold text-zinc-950 dark:text-white">{story.title}</p><p className="mt-2 text-xs leading-5 text-zinc-600 dark:text-zinc-300">{story.koreanSummary}</p><div className="mt-3 flex flex-wrap gap-1.5">{story.keywords.slice(0, 4).map((keyword) => <Badge key={keyword} tone="emerald">{keyword}</Badge>)}</div></button>; })}</div></Card>
    <ScriptTrainingTabs key={selected.id} onToast={onToast} script={selected} settings={settings} />
    <Card className="border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950"><p className="text-sm font-semibold text-amber-900 dark:text-amber-100">선택 팁</p><p className="mt-1 text-sm leading-6 text-amber-800 dark:text-amber-200">더 고급스러워 보이는 세트보다, 장면이 바로 떠오르고 내 경험으로 한두 가지를 바꾸기 쉬운 세트를 고르세요. 선택한 뒤에는 다른 세트로 자주 옮겨 다니지 않는 편이 좋습니다.</p></Card>
  </div>;
}
