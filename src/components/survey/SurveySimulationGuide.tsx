import { Check, Circle, CircleDot, Link2, ListChecks, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { recommendedSimulationIds, simulationScriptGroupOrder, simulationSurveyItems, surveySimulationSections, type SurveySection } from "../../data/surveySimulation";
import type { SurveyItem } from "../../types";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

export function SurveySimulationGuide() {
  const [selected, setSelected] = useState(() => new Set(recommendedSimulationIds));
  const selectedItems = useMemo(() => simulationSurveyItems.filter((item) => selected.has(item.id)), [selected]);
  const groupedSelections = useMemo(() => simulationScriptGroupOrder.map((group) => ({ group, items: selectedItems.filter((item) => item.scriptGroup === group) })), [selectedItems]);

  const selectOption = (section: SurveySection, item: SurveyItem) => {
    setSelected((current) => {
      const next = new Set(current);
      if (section.selectionType === "single") {
        section.options.forEach((option) => next.delete(option.id));
        next.add(item.id);
      } else if (next.has(item.id)) {
        next.delete(item.id);
      } else {
        next.add(item.id);
      }
      return next;
    });
  };

  return <div className="space-y-6"><div><div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400"><ListChecks className="h-5 w-5" /><span className="text-sm font-semibold">STEP 1. 서베이 고정 가이드</span></div><h1 className="mt-2 text-2xl font-bold text-zinc-950 dark:text-white sm:text-3xl">실전처럼 고르고, 말할 장면은 더 적게 만듭니다.</h1><p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">Background Survey의 흐름을 참고한 연습용 화면입니다. 실제 문구는 시험 화면과 다를 수 있지만, 현재 상태와 여가 활동을 고르는 방식은 최대한 익숙하게 구성했습니다.</p></div><Card className="border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-900 dark:bg-indigo-950"><div className="flex flex-wrap items-center justify-between gap-3"><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-md bg-indigo-600 text-white"><Sparkles className="h-4 w-4" /></span><div><p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">현재 추천 조합 {selectedItems.length}개</p><p className="text-xs text-indigo-700 dark:text-indigo-300">같은 장면을 반복해서 꺼낼 수 있는 선택만 남겼어요. 🧩</p></div></div><Badge tone="indigo">실전형 시뮬레이션</Badge></div></Card><section className="grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_320px]"><div className="space-y-4">{surveySimulationSections.map((section) => <SurveySectionCard key={section.id} onSelect={selectOption} section={section} selected={selected} />)}</div><aside className="space-y-5 xl:sticky xl:top-24"><Card className="p-5"><div className="flex items-center gap-2"><Link2 className="h-5 w-5 text-emerald-500" /><h2 className="text-base font-bold text-zinc-900 dark:text-white">선택 → 스크립트 연결</h2></div><div className="mt-4 space-y-4">{groupedSelections.map(({ group, items }) => <div key={group}><div className="flex items-center justify-between gap-2"><p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{group}</p><Badge tone="emerald">{items.length}</Badge></div><p className="mt-1.5 text-xs leading-5 text-zinc-500 dark:text-zinc-400">{items.length ? items.map((item) => item.name).join(" · ") : "선택된 항목 없음"}</p></div>)}</div></Card><Card className="p-5"><p className="text-sm font-bold text-zinc-900 dark:text-white">선택한 항목의 이유</p><div className="mt-4 space-y-4">{selectedItems.filter((item) => item.scriptGroup !== "확장 주제").map((item) => <div key={item.id}><div className="flex flex-wrap items-center gap-2"><p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{item.name}</p><Badge tone="default">{item.scriptGroup}</Badge></div><p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">{item.reason}</p><div className="mt-2 flex flex-wrap gap-1">{item.covers.slice(0, 3).map((cover) => <Badge key={cover} tone="amber">{cover}</Badge>)}</div></div>)}</div></Card></aside></section></div>;
}

function SurveySectionCard({ section, selected, onSelect }: { section: SurveySection; selected: Set<string>; onSelect: (section: SurveySection, item: SurveyItem) => void }) {
  const selectedCount = section.options.filter((item) => selected.has(item.id)).length;
  return <Card className="p-5 sm:p-6"><div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-base font-bold text-zinc-900 dark:text-white">{section.title}</p><p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">{section.description}</p></div><Badge tone={section.selectionType === "single" ? "indigo" : "emerald"}>{section.selectionType === "single" ? "하나 선택" : `${selectedCount}개 선택`}</Badge></div><div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{section.options.map((item) => <SurveyOption checked={selected.has(item.id)} item={item} key={item.id} multiple={section.selectionType === "multiple"} onSelect={() => onSelect(section, item)} />)}</div></Card>;
}

function SurveyOption({ item, checked, multiple, onSelect }: { item: SurveyItem; checked: boolean; multiple: boolean; onSelect: () => void }) {
  const SelectorIcon = multiple ? Check : checked ? CircleDot : Circle;
  return <button aria-pressed={checked} className={`flex min-h-12 items-center gap-3 rounded-md border px-3 py-2.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${checked ? "border-indigo-400 bg-indigo-50 text-indigo-900 dark:border-indigo-600 dark:bg-indigo-950 dark:text-indigo-100" : "border-zinc-200 bg-white text-zinc-600 hover:border-indigo-200 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-indigo-800 dark:hover:bg-zinc-950"}`} onClick={onSelect} type="button"><span className={`grid h-5 w-5 shrink-0 place-items-center rounded ${checked && multiple ? "bg-indigo-600 text-white" : ""}`}><SelectorIcon className={`h-4 w-4 ${checked ? "text-indigo-600 dark:text-indigo-300" : "text-zinc-300 dark:text-zinc-600"}`} /></span><span className="text-sm font-medium">{item.name}</span>{item.recommended ? <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" /> : null}</button>;
}
