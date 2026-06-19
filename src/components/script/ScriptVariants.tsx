import { CheckCircle2, ChevronDown, Lightbulb, MessageCircleQuestion } from "lucide-react";
import { useState } from "react";
import { scriptVariantSets } from "../../data/scriptVariants";
import type { ScriptItem } from "../../types";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

function getVariantSet(script: ScriptItem) {
  return scriptVariantSets[script.id];
}

export function ScriptQuestionVariants({ script }: { script: ScriptItem }) {
  const set = getVariantSet(script);
  const [openId, setOpenId] = useState(() => set?.variants[0]?.id ?? "");

  if (!set) return null;

  return (
    <Card className="p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400"><MessageCircleQuestion className="h-4 w-4" /><p className="text-sm font-bold">질문별 변형</p></div>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{set.description}</p>
        </div>
        <Badge tone="amber">각 30-45 sec</Badge>
      </div>

      <div className="mt-5 border-t border-zinc-200 dark:border-zinc-800">
        {set.variants.map((variant) => {
          const open = variant.id === openId;
          return (
            <article className="border-b border-zinc-200 last:border-b-0 dark:border-zinc-800" key={variant.id}>
              <button
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                onClick={() => setOpenId(open ? "" : variant.id)}
                type="button"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2"><p className="text-sm font-bold text-zinc-900 dark:text-white">{variant.label}</p><Badge>{variant.questionType}</Badge></div>
                  <p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">{variant.question}</p>
                </div>
                <ChevronDown className={`h-4 w-4 shrink-0 text-zinc-400 transition-transform ${open ? "rotate-180" : ""}`} />
              </button>

              {open ? (
                <div className="pb-5">
                  <div className="border-l-2 border-indigo-400 pl-3">
                    <p className="text-xs font-semibold text-indigo-700 dark:text-indigo-300">어디를 바꿀까</p>
                    <p className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-200">{variant.pivot}</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">유지할 핵심 단어</p>
                    <div className="mt-2 flex flex-wrap gap-2">{variant.keep.map((item) => <Badge key={item} tone="emerald">{item}</Badge>)}</div>
                  </div>
                  <div className="mt-4 rounded-md bg-zinc-50 p-4 dark:bg-zinc-950">
                    <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">30-45 SEC EXAMPLE</p>
                    <p className="mt-2 text-sm leading-7 text-zinc-700 dark:text-zinc-200">{variant.englishExample}</p>
                  </div>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </Card>
  );
}

export function ScriptAnswerBlueprint({ script }: { script: ScriptItem }) {
  const set = getVariantSet(script);
  if (!set) return null;

  return (
    <Card className="p-5 sm:p-6">
      <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400"><Lightbulb className="h-4 w-4" /><p className="text-sm font-bold">답변 설계</p></div>
      <h3 className="mt-2 text-lg font-bold text-zinc-950 dark:text-white">{set.title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">메인 스토리와 변형 예제 모두 아래 순서로 조립합니다. 질문이 바뀌어도 한 단계만 교체하면 됩니다.</p>

      <ol className="mt-6 grid gap-4 lg:grid-cols-2">
        {set.blueprint.map((step, index) => (
          <li className="flex gap-3 border-l-2 border-zinc-200 pl-3 dark:border-zinc-700" key={step.id}>
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">{index + 1}</span>
            <div>
              <p className="text-sm font-bold text-zinc-900 dark:text-white">{step.label}</p>
              <p className="mt-1 text-xs leading-5 text-zinc-600 dark:text-zinc-300">{step.koreanGuide}</p>
              <p className="mt-2 flex items-start gap-1.5 text-xs leading-5 text-emerald-700 dark:text-emerald-300"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0" />{step.cue}</p>
            </div>
          </li>
        ))}
      </ol>
    </Card>
  );
}
