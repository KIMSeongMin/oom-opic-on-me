import { Info, Sparkles } from "lucide-react";
import type { LlmSettings } from "../../types";
import { Card } from "../ui/Card";
import { AiSettingsPanel } from "./AiSettingsPanel";

type AiSettingsViewProps = { settings: LlmSettings; onChange: (settings: LlmSettings) => void; onSave: () => void; };

export function AiSettingsView({ settings, onChange, onSave }: AiSettingsViewProps) {
  return <div className="space-y-6"><div><div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400"><Sparkles className="h-5 w-5" /><span className="text-sm font-semibold">AI 피드백 / 설정</span></div><h1 className="mt-2 text-2xl font-bold text-zinc-950 dark:text-white sm:text-3xl">내부 LLM을 훈련 흐름에 연결합니다.</h1><p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">브라우저에서 사내 API를 직접 호출합니다. API가 CORS 요청을 허용해야 하며, 설정되지 않아도 내장 질문과 훈련 기능은 계속 사용할 수 있습니다.</p></div><AiSettingsPanel onChange={onChange} onSave={onSave} settings={settings} /><section className="grid gap-5 lg:grid-cols-3"><Feature title="스크립트 변형" text="원래 주제와 핵심 명사를 유지한 채 자연스러운 표현으로 다시 말해 봅니다." /><Feature title="답변 피드백" text="발화량, 시제, 구체성, filler, 질문 적합성, 반복을 한국어로 점검합니다." /><Feature title="롤플레이 생성" text="선택한 서베이 그룹을 바탕으로 Eva 스타일 문제 상황을 하나 더 만듭니다." /></section><Card className="border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950"><div className="flex gap-3"><Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" /><p className="text-sm leading-6 text-amber-800 dark:text-amber-200">AI 피드백은 연습을 돕는 참고 의견이며 실제 OPIc 점수나 공식 평가를 보장하지 않습니다. 응답에 개인 정보나 회사 기밀을 입력하지 마세요.</p></div></Card></div>;
}

function Feature({ title, text }: { title: string; text: string }) { return <Card className="p-5"><p className="text-sm font-bold text-zinc-900 dark:text-white">{title}</p><p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{text}</p></Card>; }
