import type { ScriptVariantSet } from "../types";
import { scriptTrainingSets } from "./scriptTrainingData";

function createSet(parentId: string, title: string, description: string, keeps: string[][]): ScriptVariantSet {
  const parent = scriptTrainingSets[parentId];
  return {
    ...parent,
    title,
    description,
    variants: parent.variants.map((variant, index) => ({ ...variant, keep: keeps[index] ?? variant.keep })),
  };
}

export const additionalScriptTrainingSets: Record<string, ScriptVariantSet> = {
  "outdoor-lake-camping": createSet("outdoor-travel", "호숫가 캠핑 장면을 질문별로 조립하기", "공원·여행·루틴 질문에 호숫가 캠핑장을 기본 장면으로 씁니다. 텐트, 산책로, 아침 안개라는 디테일은 유지하고 질문의 출발점만 바꿉니다.", [["lakeside park", "hiking trail", "quiet view"], ["camping trip", "canvas tent", "misty morning"], ["morning walk", "portable stove", "fresh air"], ["busy itinerary", "slow camping", "unplug"]]),
  "indoor-bakery-routine": createSet("indoor-rest", "베이커리와 홈 베이킹 장면을 질문별로 조립하기", "카페·집·음악·휴식 질문을 동네 베이커리와 홈 베이킹 루틴으로 연결합니다. 따뜻한 빵, 허브티, 잔잔한 음악을 공통 재료로 씁니다.", [["neighborhood bakery", "herbal tea", "window table"], ["home baking", "banana bread", "quiet evening"], ["instrumental playlist", "warm pastry", "slow down"], ["busy week", "small routine", "settled"]]),
  "sports-tennis-clinic": createSet("sports-hobby", "테니스 클리닉 장면을 질문별로 조립하기", "취미·시작·구매·향상 질문에 저녁 테니스 클리닉을 사용합니다. 코치 피드백, 발 위치, 스트링 텐션은 같은 경험을 풍부하게 만드는 공통 명사입니다.", [["evening clinic", "baseline", "footwork"], ["first clinic", "coach feedback", "short drills"], ["racket strings", "tension", "serve accuracy"], ["footwork", "consistent serve", "constructive feedback"]]),
  "home-moving-neighborhood": createSet("home-residence", "이사와 새 동네 장면을 질문별로 조립하기", "집·동네·집안일·문제 해결 질문에 최근 이사 경험을 씁니다. 상자 정리, 엘리베이터 예약, 강변 산책로를 질문에 맞게 꺼냅니다.", [["new apartment", "more spacious", "riverside path"], ["local market", "riverside walk", "settle in"], ["unpacking boxes", "storage area", "shared chores"], ["moving day", "elevator reservation", "family routine"]]),
};
