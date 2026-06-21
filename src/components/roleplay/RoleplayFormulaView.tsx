import { ArrowRight, ChartNoAxesCombined, CircleHelp, House, MapPinned, Sparkles, Trophy } from "lucide-react";
import { essentialRoleplayPhrases, roleplayFormula } from "../../data/roleplays";
import type { ViewId } from "../layout/Sidebar";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

const scenarioPages: Array<{ id: ViewId; group: string; title: string; description: string; icon: typeof ChartNoAxesCombined }> = [
  { id: "roleplay-travel", group: "야외 / 여행", title: "예약과 일정 변경", description: "호텔 객실, 항공권, 여행 일정처럼 예약 내용과 실제 상황이 다를 때의 요청을 연습합니다.", icon: MapPinned },
  { id: "roleplay-indoor", group: "실내 / 휴식", title: "카페 주문과 좌석 문제", description: "음료가 잘못 나왔거나 조용한 좌석이 필요할 때, 정중하게 해결책을 요청합니다.", icon: CircleHelp },
  { id: "roleplay-sports", group: "운동 / 취미", title: "코트와 수업 일정", description: "테니스 코트 예약, 운동 수업 변경처럼 취미 활동에서 생기는 문제를 다룹니다.", icon: Trophy },
  { id: "roleplay-home", group: "집 / 거주지", title: "이사·청소·수리 일정", description: "방문 일정 변경과 수리 지연처럼 집에서 생길 수 있는 상황을 정리합니다.", icon: House },
];

export function RoleplayFormulaView({ onNavigate }: { onNavigate: (view: ViewId) => void }) {
  return (
    <div className="space-y-6">
      <section className="border-l-4 border-indigo-500 pl-4"><Badge tone="indigo">STEP 4. 공식 · 출제 구조</Badge><h1 className="mt-3 text-2xl font-bold text-zinc-950 dark:text-white sm:text-3xl">어떤 상황이 와도, 같은 6단계 순서로 해결합니다.</h1><p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-300">OPIc은 전체 약 12~15문항으로 진행되며, 롤플레이의 고정 문항 수나 순서는 공개된 값이 아닙니다. 그래서 시나리오를 전부 외우기보다 문제 설명 → 정보 질문 → 대안 요청의 순서를 익히는 편이 효과적입니다.</p></section>

      <Card className="p-5 sm:p-6"><div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-300"><ChartNoAxesCombined className="h-5 w-5" /><h2 className="text-lg font-bold text-zinc-950 dark:text-white">6단계 만능 공식</h2></div><ol className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">{roleplayFormula.map((item, index) => <li className="flex gap-3 rounded-md border border-zinc-200 p-4 dark:border-zinc-800" key={item.title}><span className="grid h-6 w-6 shrink-0 place-items-center rounded bg-indigo-600 text-xs font-bold text-white">{index + 1}</span><div><p className="text-sm font-bold text-zinc-900 dark:text-white">{item.title}</p><p className="mt-1 text-xs leading-5 text-zinc-600 dark:text-zinc-300">{item.description}</p></div></li>)}</ol><div className="mt-5 flex flex-wrap gap-2">{essentialRoleplayPhrases.map((phrase) => <Badge key={phrase} tone="emerald">{phrase}</Badge>)}</div></Card>

      <section><div className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-indigo-500" /><h2 className="text-lg font-bold text-zinc-950 dark:text-white">상황별 연습 선택</h2></div><p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">아래 카드에서 하나를 골라 실제 Eva 질문, 답변 구조, 등급별 확장 예시를 확인하세요.</p><div className="mt-5 grid gap-4 md:grid-cols-2">{scenarioPages.map((page) => { const Icon = page.icon; return <Card className="flex h-full flex-col p-5" key={page.id}><div className="flex items-center justify-between gap-3"><span className="grid h-9 w-9 place-items-center rounded-md bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300"><Icon className="h-5 w-5" /></span><Badge tone="amber">{page.group}</Badge></div><h3 className="mt-4 text-lg font-bold text-zinc-950 dark:text-white">{page.title}</h3><p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{page.description}</p><Button className="mt-6 w-full" onClick={() => onNavigate(page.id)} variant="secondary">시나리오 보기 <ArrowRight className="h-4 w-4" /></Button></Card>; })}</div></section>
    </div>
  );
}
