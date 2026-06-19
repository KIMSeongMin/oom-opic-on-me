import { Bot, Dices, MessageSquareText, Play } from "lucide-react";
import { useState } from "react";
import { practiceQuestions } from "../../data/questions";
import { scripts } from "../../data/scripts";
import { callInternalLlm } from "../../lib/llm";
import type { LlmSettings, PracticeQuestion } from "../../types";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Recorder } from "./Recorder";
import { PracticeTimer } from "./PracticeTimer";

type PracticeViewProps = { settings: LlmSettings; onToast: (title: string, description?: string, tone?: "success" | "error" | "info") => void; };

export function PracticeView({ settings, onToast }: PracticeViewProps) {
  const [question, setQuestion] = useState<PracticeQuestion | null>(null);
  const [timerSignal, setTimerSignal] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const drawQuestion = () => { const next = practiceQuestions[Math.floor(Math.random() * practiceQuestions.length)]; setQuestion(next); setFeedback(""); };
  const startAnswer = () => { if (!question) { onToast("먼저 질문을 뽑아 주세요.", "랜덤 질문을 정한 뒤 타이머를 시작할 수 있습니다.", "info"); return; } setTimerSignal((value) => value + 1); };
  const getFeedback = async () => {
    if (!answer.trim()) { onToast("텍스트 답변을 입력해 주세요.", "녹음과 별개로 답변 텍스트가 필요합니다.", "info"); return; }
    if (!settings.endpoint.trim()) { setFeedback("AI 설정이 아직 없습니다. AI 피드백 / 설정에서 Endpoint와 요청 형식을 저장한 뒤 다시 시도해 주세요. 지금은 체크리스트로 답변을 확인해 보세요: 질문에 직접 답했는지, 과거와 현재 시제를 구분했는지, 구체 명사 두 개 이상을 넣었는지 확인합니다."); onToast("AI 설정이 필요합니다.", "설정 화면으로 이동해 내부 LLM Endpoint를 입력해 주세요.", "info"); return; }
    setIsLoading(true);
    try {
      const result = await callInternalLlm(settings, [
        { role: "system", content: "You are an OPIc speaking evaluator. Give concise, supportive feedback in Korean. Use headings: 예상 등급, 발화량, 시제, 구체성, filler, 질문 적합성, 반복, 더 좋은 표현 3개, 다음 연습 목표." },
        { role: "user", content: `Question: ${question?.prompt ?? "General OPIc question"}\n\nStudent answer:\n${answer}\n\nEvaluate for IM3, IH, or AL only. Do not claim an official score.` },
      ]);
      setFeedback(result);
      onToast("AI 피드백을 받았습니다.", "다음 연습 목표 한 가지를 바로 적용해 보세요.", "success");
    } catch (error) {
      setFeedback(`AI 요청에 실패했습니다. ${error instanceof Error ? error.message : "설정과 CORS 정책을 확인해 주세요."}`);
      onToast("AI 피드백에 실패했습니다.", "내장 체크리스트로 먼저 연습을 이어가세요.", "error");
    } finally { setIsLoading(false); }
  };
  const recommended = question ? scripts.find((script) => script.id === question.scriptId) : null;

  return <div className="space-y-6"><div><div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400"><MessageSquareText className="h-5 w-5" /><span className="text-sm font-semibold">STEP 5. 실전 연습</span></div><h1 className="mt-2 text-2xl font-bold text-zinc-950 dark:text-white sm:text-3xl">질문을 받고, 말하고, 다시 듣습니다.</h1><p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">완벽한 문장보다 시간 안에 장면을 끝까지 전달하는 연습이 우선입니다.</p></div><section className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]"><Card className="p-5 sm:p-6"><div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-sm font-bold text-zinc-900 dark:text-white">랜덤 질문 연습</p><p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">선택한 서베이 그룹을 넘나드는 질문 풀입니다.</p></div><Button onClick={drawQuestion} variant="secondary"><Dices className="h-4 w-4" />랜덤 질문 뽑기</Button></div>{question ? <div className="mt-5 rounded-md border border-indigo-100 bg-indigo-50 p-5 dark:border-indigo-900 dark:bg-indigo-950"><div className="flex flex-wrap gap-2"><Badge tone="indigo">{question.group}</Badge><Badge tone="default">{question.type}</Badge></div><p className="mt-4 text-base font-semibold leading-7 text-zinc-900 dark:text-white">{question.prompt}</p>{recommended ? <p className="mt-3 text-xs text-indigo-700 dark:text-indigo-300">추천 스크립트: <strong>{recommended.title}</strong></p> : null}<Button className="mt-5" onClick={startAnswer}><Play className="h-4 w-4" />답변 시작</Button></div> : <div className="mt-5 rounded-md border border-dashed border-zinc-300 p-8 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">랜덤 질문을 뽑아 실전 답변을 시작하세요.</div>}</Card><PracticeTimer autoStart={timerSignal > 0} key={timerSignal} /></section><Recorder onToast={onToast} /><Card className="p-5 sm:p-6"><div className="flex items-center gap-2"><Bot className="h-5 w-5 text-indigo-500" /><div><p className="text-sm font-bold text-zinc-900 dark:text-white">텍스트 답변 + AI 피드백</p><p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">STT는 브라우저 호환성 차이가 있어, 텍스트 입력을 기본으로 제공합니다.</p></div></div><textarea aria-label="답변 텍스트" className="mt-5 min-h-44 w-full resize-y rounded-md border border-zinc-200 bg-zinc-50 p-4 text-sm leading-6 text-zinc-800 outline-none transition-colors placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-indigo-500 dark:focus:ring-indigo-950" onChange={(event) => setAnswer(event.target.value)} placeholder="방금 말한 답변을 적어 보세요. 완벽하지 않아도 좋습니다." value={answer} /><div className="mt-4 flex justify-end"><Button disabled={isLoading} onClick={getFeedback}><Bot className="h-4 w-4" />{isLoading ? "피드백 분석 중" : "AI 피드백 받기"}</Button></div>{feedback ? <div className="mt-5 rounded-md border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950"><p className="text-sm font-bold text-emerald-900 dark:text-emerald-100">피드백 결과</p><pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-6 text-emerald-900 dark:text-emerald-100">{feedback}</pre></div> : null}</Card></div>;
}
