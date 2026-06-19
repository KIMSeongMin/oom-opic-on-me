export type FixedSurveyAnswer = {
  prompt: string;
  answer: string;
  kind: "single" | "multiple";
};

export type FixedSurveyGroup = {
  id: string;
  order: string;
  title: string;
  description: string;
  answers: FixedSurveyAnswer[];
};

export const fixedSurveyGroups: FixedSurveyGroup[] = [
  {
    id: "profile",
    order: "01",
    title: "현재 상태",
    description: "시험의 기본 배경을 정하는 항목입니다.",
    answers: [
      { prompt: "현재 귀하의 직업 상태를 선택해 주세요.", answer: "일 경험 없음", kind: "single" },
      { prompt: "현재 학생입니까?", answer: "아니오, 학생이 아닙니다.", kind: "single" },
    ],
  },
  {
    id: "home",
    order: "02",
    title: "거주 형태",
    description: "집과 동네 이야기의 공통 배경입니다.",
    answers: [
      { prompt: "현재 어떤 주거 형태에 살고 있습니까?", answer: "가족과 함께 아파트 또는 주택에 거주", kind: "single" },
    ],
  },
  {
    id: "leisure",
    order: "03",
    title: "여가 및 취미",
    description: "여러 활동을 고르되, 답변 장면은 네 그룹으로 줄입니다.",
    answers: [
      { prompt: "평소 즐기는 여가 활동을 모두 선택해 주세요.", answer: "공원 가기 · 해변 가기 · 걷기 · 조깅 · 음악 감상 · 카페 가기 · 집에서 쉬기", kind: "multiple" },
      { prompt: "평소 즐기는 운동 또는 취미를 모두 선택해 주세요.", answer: "테니스 또는 운동 · 쇼핑 · 요리 또는 집안일", kind: "multiple" },
    ],
  },
  {
    id: "travel",
    order: "04",
    title: "휴가 및 여행",
    description: "여행 질문의 시간·장소·감정을 확보합니다.",
    answers: [
      { prompt: "휴가나 여행에서 하는 활동을 모두 선택해 주세요.", answer: "국내 여행 · 해외 여행", kind: "multiple" },
    ],
  },
];

export const fixedSurveyStrategies = [
  { group: "야외 / 여행", items: "공원 · 해변 · 걷기 · 조깅 · 국내/해외 여행", summary: "가족과 간 바닷가 리조트 한 장면으로 풍경, 활동, 감정을 재사용합니다." },
  { group: "실내 / 휴식", items: "음악 감상 · 카페 가기 · 집에서 쉬기", summary: "카페와 집을 잇는 조용한 휴식 루틴으로 답합니다." },
  { group: "운동 / 취미", items: "테니스 또는 운동 · 쇼핑", summary: "테니스 연습과 장비 구매 경험을 하나의 취미 스토리로 묶습니다." },
  { group: "집 / 거주지", items: "가족과 거주 · 아파트/주택 · 요리 또는 집안일", summary: "가족, 거실, 동네, 청소 일정으로 집 관련 질문을 커버합니다." },
];
