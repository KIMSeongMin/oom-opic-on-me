import { ArrowRight, ChartNoAxesCombined, CircleHelp, House, MapPinned, Sparkles, Trophy } from "lucide-react";
import type { ViewId } from "../layout/Sidebar";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

const pages: Array<{ id: ViewId; label: string; description: string; icon: typeof ChartNoAxesCombined }> = [
  { id: "roleplay-formula", label: "공식 · 출제 구조", description: "6단계 공식, 만능 표현, 전체 질문 구성에서의 롤플레이 대비법", icon: ChartNoAxesCombined },
  { id: "roleplay-travel", label: "야외 / 여행", description: "호텔 예약, 항공권·여행 일정처럼 이동 중 생기는 문제", icon: MapPinned },
  { id: "roleplay-indoor", label: "실내 / 휴식", description: "카페 주문·좌석처럼 일상적인 서비스 상황", icon: CircleHelp },
  { id: "roleplay-sports", label: "운동 / 취미", description: "테니스 코트, 운동 수업 일정과 관련된 요청", icon: Trophy },
  { id: "roleplay-home", label: "집 / 거주지", description: "이사·청소·아파트 수리 일정 변경과 문제 해결", icon: House },
];

export function RoleplayHub({ onNavigate }: { onNavigate: (view: ViewId) => void }) {
  return <div className="space-y-6"><section className="border-l-4 border-indigo-500 pl-4"><Badge tone="indigo">STEP 4. 롤플레이 공식</Badge><h1 className="mt-3 text-2xl font-bold text-zinc-950 dark:text-white sm:text-3xl">문제를 설명하고, 대안을 요청하고, 정중하게 마무리합니다.</h1><p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-300">OPIc 전체 문항은 약 12~15문항으로 구성되며, 롤플레이의 고정 문항 수나 순서는 공개된 고정값이 아닙니다. 그래서 연습에서는 서로 다른 2~3개 서비스 상황을 6단계 공식으로 말하는 힘을 만드는 것이 효율적입니다.</p></section><section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{pages.map((page) => { const Icon = page.icon; return <Card className="flex h-full flex-col p-5" key={page.id}><span className="grid h-9 w-9 place-items-center rounded-md bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300"><Icon className="h-5 w-5" /></span><h2 className="mt-4 text-lg font-bold text-zinc-950 dark:text-white">{page.label}</h2><p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{page.description}</p><Button className="mt-6 w-full" onClick={() => onNavigate(page.id)} variant="secondary">시나리오 보기 <ArrowRight className="h-4 w-4" /></Button></Card>; })}</section><Card className="border-emerald-200 bg-emerald-50/60 p-5 dark:border-emerald-900 dark:bg-emerald-950/30"><div className="flex gap-3"><Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" /><div><p className="text-sm font-bold text-emerald-900 dark:text-emerald-100">연습 권장량</p><p className="mt-1 text-sm leading-6 text-emerald-800 dark:text-emerald-200">여행·일상 서비스·취미 또는 집 관련 상황에서 각각 하나씩 골라 2~3개를 반복하세요. 모든 상황을 암기하기보다 문제 설명, 정보 질문, 대안 요청의 순서를 자동화하는 것이 핵심입니다.</p></div></div></Card></div>;
}
