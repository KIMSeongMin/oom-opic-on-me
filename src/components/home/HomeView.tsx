import { ArrowRight, Gauge, Lightbulb, Mic2, Route, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import type { ViewId } from "../layout/Sidebar";

type HomeViewProps = {
  onNavigate: (view: ViewId) => void;
};

const flows = [
  "서베이 고정",
  "난이도 설정",
  "스크립트 구조 익히기",
  "암기 모드로 연습",
  "녹음 후 피드백",
  "롤플레이 패턴 반복",
];

const levels = [
  { level: "IM3", tone: "emerald" as const, text: "기본 구조를 지키며, 친숙한 경험을 이해 가능한 문장으로 이어 말합니다." },
  { level: "IH", tone: "indigo" as const, text: "시간·장소·감정을 덧붙여 답변을 확장하고 자연스럽게 연결합니다." },
  { level: "AL", tone: "amber" as const, text: "구체적인 장면과 변화, 문제 해결을 유연하게 엮어 깊이를 만듭니다." },
];

export function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <div className="space-y-6">
      <motion.section animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 10 }} className="grid gap-5 xl:grid-cols-[1.3fr_0.7fr]">
        <Card className="overflow-hidden bg-zinc-950 p-6 text-white sm:p-8">
          <Badge tone="indigo" className="bg-indigo-500/20 text-indigo-200">OOM · OPIc On Me</Badge>
          <h1 className="mt-4 max-w-3xl text-balance text-3xl font-bold leading-tight sm:text-4xl">오픽은 나에게 맡기고, 반복 가능한 구조로 말합니다.</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">OOM은 답을 통째로 암기하는 도구가 아닙니다. 익숙한 장면을 여러 질문에 맞게 자연스럽게 변형해 말하는 훈련 대시보드입니다.</p>
          <div className="mt-6 flex flex-wrap gap-3"><Button onClick={() => onNavigate("survey")}><Route className="h-4 w-4" />서베이 고정 시작</Button><Button onClick={() => onNavigate("script-outdoor")} variant="secondary"><Mic2 className="h-4 w-4" />스크립트 보기</Button></div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400"><Gauge className="h-5 w-5" /><p className="text-sm font-semibold">추천 시작점</p></div>
          <p className="mt-5 text-4xl font-bold text-zinc-950 dark:text-white">5 <span className="text-zinc-400">→</span> 5</p>
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">충분히 다양한 질문을 받으면서도, 초반부터 지나치게 추상적인 질문으로 흔들리지 않는 설정입니다.</p>
          <Button className="mt-6 w-full" onClick={() => onNavigate("difficulty")} variant="secondary">난이도 가이드 <ArrowRight className="h-4 w-4" /></Button>
        </Card>
      </motion.section>

      <section className="grid gap-5 lg:grid-cols-3">
        {levels.map((item, index) => <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 12 }} key={item.level} transition={{ delay: index * 0.06 }}><Card className="h-full p-5"><Badge tone={item.tone}>{item.level}</Badge><p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{item.text}</p></Card></motion.div>)}
      </section>

      <Card className="p-5 sm:p-6">
        <div className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-indigo-500" /><h2 className="text-lg font-bold text-zinc-950 dark:text-white">이 앱에서 하는 훈련 흐름</h2></div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {flows.map((flow, index) => <div className="flex items-center gap-3 rounded-md bg-zinc-50 p-3 dark:bg-zinc-950" key={flow}><span className="grid h-7 w-7 shrink-0 place-items-center rounded bg-indigo-600 text-xs font-bold text-white">{index + 1}</span><span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{flow}</span></div>)}
        </div>
      </Card>

      <Card className="border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950">
        <div className="flex gap-3"><Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" /><div><p className="text-sm font-bold text-emerald-900 dark:text-emerald-100">훈련의 기준</p><p className="mt-1 text-sm leading-6 text-emerald-800 dark:text-emerald-200">이 구조가 점수를 보장하지는 않습니다. 다만 낯선 질문 앞에서도 재사용 가능한 답변 구조를 꺼내 자연스럽게 말하는 힘을 키웁니다.</p></div></div>
      </Card>
    </div>
  );
}
