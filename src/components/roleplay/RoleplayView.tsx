import { Bot, CircleHelp, ListOrdered, MessageSquareQuote, Sparkles } from "lucide-react";
import { useState } from "react";
import { fallbackRoleplayQuestions } from "../../data/questions";
import { essentialRoleplayPhrases, roleplayFormula, roleplayScenarios } from "../../data/roleplays";
import { callInternalLlm } from "../../lib/llm";
import type { LlmSettings } from "../../types";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

type RoleplayViewProps = {
  settings: LlmSettings;
  onToast: (title: string, description?: string, tone?: "success" | "error" | "info") => void;
};

export function RoleplayView({ settings, onToast }: RoleplayViewProps) {
  const [selectedId, setSelectedId] = useState(roleplayScenarios[0].id);
  const [generatedQuestion, setGeneratedQuestion] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const scenario = roleplayScenarios.find((item) => item.id === selectedId) ?? roleplayScenarios[0];

  const generateQuestion = async () => {
    const fallback = fallbackRoleplayQuestions[Math.floor(Math.random() * fallbackRoleplayQuestions.length)];
    if (!settings.endpoint.trim()) {
      setGeneratedQuestion(fallback);
      onToast("내장 롤플레이 질문을 준비했습니다.", "AI Endpoint를 저장하면 선택한 그룹에 맞춘 새 질문도 만들 수 있습니다.", "info");
      return;
    }
    setIsGenerating(true);
    try {
      const response = await callInternalLlm(settings, [
        { role: "system", content: "You create concise OPIc role-play prompts in Eva style. Use accessible English." },
        { role: "user", content: `Create one role-play question based on the OPIc survey group '${scenario.group}'. Use a realistic problem, ask the candidate to explain it and ask for options. Return only the English prompt.` },
      ]);
      setGeneratedQuestion(response);
      onToast("AI 롤플레이 질문을 만들었습니다.", "공식 6단계에 맞춰 답해 보세요.", "success");
    } catch (error) {
      setGeneratedQuestion(fallback);
      onToast("AI 생성에 실패해 내장 질문으로 전환했습니다.", error instanceof Error ? error.message : "설정을 확인해 주세요.", "error");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      <div><div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400"><MessageSquareQuote className="h-5 w-5" /><span className="text-sm font-semibold">STEP 4. 롤플레이 공식</span></div><h1 className="mt-2 text-2xl font-bold text-zinc-950 dark:text-white sm:text-3xl">문제 상황은 공식으로 풀어냅니다.</h1><p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">롤플레이는 화려한 표현보다 대화의 목적이 분명한 구조가 중요합니다. 문제, 질문, 대안, 감사의 순서를 익혀 두세요.</p></div>
      <Card className="p-5 sm:p-6"><div className="flex items-center gap-2"><ListOrdered className="h-5 w-5 text-indigo-500" /><h2 className="text-base font-bold text-zinc-900 dark:text-white">기본 공식</h2></div><div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">{roleplayFormula.map((step, index) => <div className="flex gap-3 rounded-md bg-zinc-50 p-3 dark:bg-zinc-950" key={step.title}><span className="grid h-7 w-7 shrink-0 place-items-center rounded bg-indigo-600 text-xs font-bold text-white">{index + 1}</span><div><p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{step.title}</p><p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">{step.description}</p></div></div>)}</div></Card>
      <Card className="border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950"><h2 className="text-sm font-bold text-amber-900 dark:text-amber-100">필수 만능 표현</h2><div className="mt-3 flex flex-wrap gap-2">{essentialRoleplayPhrases.map((phrase) => <Badge key={phrase} tone="amber">{phrase}</Badge>)}</div></Card>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">{roleplayScenarios.map((item) => <button aria-pressed={item.id === selectedId} className={`rounded-md border p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${item.id === selectedId ? "border-indigo-500 bg-indigo-50 dark:border-indigo-600 dark:bg-indigo-950" : "border-zinc-200 bg-white hover:border-indigo-200 dark:border-zinc-800 dark:bg-zinc-900"}`} key={item.id} onClick={() => setSelectedId(item.id)} type="button"><Badge tone={item.id === selectedId ? "indigo" : "default"}>{item.group}</Badge><p className="mt-3 text-sm font-bold text-zinc-900 dark:text-white">{item.title}</p><p className="mt-2 line-clamp-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400">{item.situation}</p></button>)}</div>

      <section className="grid gap-5 xl:grid-cols-[0.75fr_1.25fr]">
        <Card className="p-5"><div className="flex items-center gap-2"><CircleHelp className="h-5 w-5 text-indigo-500" /><h2 className="text-base font-bold text-zinc-900 dark:text-white">{scenario.title}</h2></div><p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{scenario.situation}</p><div className="mt-5 rounded-md bg-zinc-50 p-4 dark:bg-zinc-950"><p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">EVA QUESTION</p><p className="mt-2 text-sm leading-6 text-zinc-800 dark:text-zinc-200">{scenario.evaQuestion}</p></div><h3 className="mt-5 text-sm font-bold text-zinc-900 dark:text-zinc-100">답변 구조</h3><ol className="mt-3 space-y-2">{scenario.answerStructure.map((item, index) => <li className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-300" key={item}><span className="font-semibold text-indigo-600 dark:text-indigo-400">{index + 1}.</span>{item}</li>)}</ol></Card>
        <Card className="p-5"><h2 className="text-base font-bold text-zinc-900 dark:text-white">영어 답변 예시</h2><div className="mt-4 space-y-4">{scenario.englishExample.split("\n\n").map((paragraph) => <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-200" key={paragraph}>{paragraph}</p>)}</div><div className="mt-5 border-t border-zinc-100 pt-5 dark:border-zinc-800"><p className="text-sm font-bold text-zinc-900 dark:text-white">대체 표현</p><div className="mt-3 flex flex-wrap gap-2">{scenario.alternatives.map((item) => <Badge key={item} tone="emerald">{item}</Badge>)}</div></div></Card>
      </section>

      <Card className="p-5"><h2 className="text-base font-bold text-zinc-900 dark:text-white">목표 등급별 차이</h2><div className="mt-4 grid gap-3 md:grid-cols-3">{(["IM3", "IH", "AL"] as const).map((level) => <div className="rounded-md bg-zinc-50 p-4 dark:bg-zinc-950" key={level}><Badge tone={level === "IM3" ? "emerald" : level === "IH" ? "indigo" : "amber"}>{level}</Badge><p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{scenario.levelDifferences[level]}</p></div>)}</div></Card>

      <Card className="border-indigo-200 bg-indigo-50 p-5 dark:border-indigo-900 dark:bg-indigo-950"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><div><div className="flex items-center gap-2"><Bot className="h-5 w-5 text-indigo-600 dark:text-indigo-400" /><h2 className="text-base font-bold text-indigo-900 dark:text-indigo-100">AI 롤플레이 질문 생성</h2></div><p className="mt-1 text-sm text-indigo-700 dark:text-indigo-300">선택한 {scenario.group} 그룹을 바탕으로 Eva 스타일 질문을 만듭니다.</p></div><Button disabled={isGenerating} onClick={generateQuestion}><Sparkles className="h-4 w-4" />{isGenerating ? "생성 중" : "AI 롤플레이 질문 생성"}</Button></div>{generatedQuestion ? <div className="mt-4 rounded-md border border-indigo-100 bg-white p-4 dark:border-indigo-900 dark:bg-zinc-950"><p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">PRACTICE PROMPT</p><p className="mt-2 text-sm leading-6 text-zinc-800 dark:text-zinc-200">{generatedQuestion}</p></div> : null}</Card>
    </div>
  );
}
