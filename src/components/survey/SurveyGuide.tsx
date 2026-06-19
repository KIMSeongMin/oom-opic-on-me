import { Check, Link2, ListChecks, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { scriptGroupOrder, surveyItems } from "../../data/survey";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

export function SurveyGuide() {
  const [selected, setSelected] = useState(() => new Set(surveyItems.filter((item) => item.recommended).map((item) => item.id)));
  const groups = useMemo(() => scriptGroupOrder.map((group) => ({ group, items: surveyItems.filter((item) => item.scriptGroup === group) })), []);
  const common = surveyItems.filter((item) => item.scriptGroup === "공통 전략");

  const toggleItem = (id: string) => setSelected((current) => {
    const next = new Set(current);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    return next;
  });

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400"><ListChecks className="h-5 w-5" /><span className="text-sm font-semibold">STEP 1. 서베이 고정 가이드</span></div>
        <h1 className="mt-2 text-2xl font-bold text-zinc-950 dark:text-white sm:text-3xl">실전처럼 고르고, 말할 장면은 더 적게 만듭니다.</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">실제 Background Survey를 따라가는 느낌으로, 연결되는 소재가 많은 선택지를 고정합니다. 체크는 이 브라우저 안에서만 연습용으로 관리됩니다.</p>
      </div>

      <Card className="border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-900 dark:bg-indigo-950"><div className="flex flex-wrap items-center justify-between gap-3"><div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400" /><div><p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">추천 조합 {selected.size}개 선택</p><p className="text-xs text-indigo-700 dark:text-indigo-300">선택 항목이 많기보다, 같은 에피소드로 묶이는 것이 중요합니다.</p></div></div><Badge tone="indigo">고정 추천</Badge></div></Card>

      <section className="grid gap-5 xl:grid-cols-[0.82fr_1.18fr]">
        <Card className="p-5">
          <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">현재 상태 / 주거</h2>
          <div className="mt-4 space-y-3">{common.map((item) => <SurveyCard checked={selected.has(item.id)} item={item} key={item.id} onToggle={toggleItem} />)}{surveyItems.filter((item) => ["live-family", "apartment-house"].includes(item.id)).map((item) => <SurveyCard checked={selected.has(item.id)} item={item} key={item.id} onToggle={toggleItem} />)}</div>
        </Card>
        <div className="space-y-5">
          {groups.map(({ group, items }) => <Card className="p-5" key={group}><div className="flex flex-wrap items-center justify-between gap-2"><h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">{group} 스크립트 그룹</h2><Badge tone="emerald">{items.filter((item) => selected.has(item.id)).length}/{items.length} 선택</Badge></div><div className="mt-4 grid gap-3 sm:grid-cols-2">{items.map((item) => <SurveyCard checked={selected.has(item.id)} item={item} key={item.id} onToggle={toggleItem} />)}</div></Card>)}
        </div>
      </section>

      <Card className="p-5"><div className="flex items-center gap-2"><Link2 className="h-5 w-5 text-emerald-500" /><h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">연결 방식</h2></div><div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">{scriptGroupOrder.map((group) => { const names = surveyItems.filter((item) => item.scriptGroup === group && selected.has(item.id)).map((item) => item.name); return <div className="rounded-md border border-zinc-200 p-4 dark:border-zinc-800" key={group}><p className="text-sm font-semibold text-zinc-900 dark:text-white">{group}</p><p className="mt-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400">{names.length ? names.join(" · ") : "선택된 항목 없음"}</p></div>; })}</div></Card>
    </div>
  );
}

function SurveyCard({ item, checked, onToggle }: { item: (typeof surveyItems)[number]; checked: boolean; onToggle: (id: string) => void }) {
  return (
    <label className={`block cursor-pointer rounded-md border p-3 transition-colors ${checked ? "border-indigo-400 bg-indigo-50 dark:border-indigo-700 dark:bg-indigo-950" : "border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900"}`}>
      <span className="flex items-start gap-3"><input checked={checked} className="sr-only" onChange={() => onToggle(item.id)} type="checkbox" /><span className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded border ${checked ? "border-indigo-600 bg-indigo-600 text-white" : "border-zinc-300 dark:border-zinc-600"}`}>{checked ? <Check className="h-3 w-3" /> : null}</span><span><span className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">{item.name}</span><span className="mt-1 block text-xs leading-5 text-zinc-500 dark:text-zinc-400">{item.reason}</span></span></span>
      <span className="mt-3 flex flex-wrap gap-1.5">{item.covers.slice(0, 3).map((cover) => <Badge key={cover} tone="default">{cover}</Badge>)}</span>
    </label>
  );
}
