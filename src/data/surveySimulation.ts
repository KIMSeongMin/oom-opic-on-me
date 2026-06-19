import type { SurveyItem } from "../types";

export type SurveySection = {
  id: string;
  title: string;
  description: string;
  selectionType: "single" | "multiple";
  options: SurveyItem[];
};

const extra = (id: string, name: string, category: string): SurveyItem => ({
  id,
  name,
  category,
  reason: "추천 스크립트와 직접 연결하지 않는 확장 주제입니다.",
  scriptGroup: "확장 주제",
  covers: ["추가 질문"],
  recommended: false,
});

export const surveySimulationSections: SurveySection[] = [
  {
    id: "work-status",
    title: "현재 직업",
    description: "현재 생활에 가장 가까운 한 가지를 고릅니다.",
    selectionType: "single",
    options: [
      { id: "no-work", name: "일 경험 없음", category: "현재 상태", reason: "업무 관련 돌발 주제를 줄이고 일상 경험 중심으로 답변 범위를 고정합니다.", scriptGroup: "공통 전략", covers: ["자기소개", "일상 루틴", "여가 경험"], recommended: true },
      extra("currently-working", "현재 재직 중", "현재 상태"),
      extra("past-working", "과거에 일한 경험 있음", "현재 상태"),
    ],
  },
  {
    id: "student-status",
    title: "학생 여부",
    description: "현재 상태에 맞는 한 가지를 고릅니다.",
    selectionType: "single",
    options: [
      { id: "not-student", name: "학생 아님", category: "현재 상태", reason: "학교 수업, 교수, 과제 주제를 피하고 선택한 취미에 집중할 수 있습니다.", scriptGroup: "공통 전략", covers: ["현재 생활", "여가 루틴"], recommended: true },
      extra("current-student", "현재 학생", "현재 상태"),
    ],
  },
  {
    id: "living-together",
    title: "함께 사는 사람",
    description: "주거 이야기의 등장인물을 고릅니다.",
    selectionType: "single",
    options: [
      { id: "live-family", name: "가족과 함께 거주", category: "주거", reason: "집, 가족, 휴식, 집안일 에피소드를 하나의 스토리로 연결합니다.", scriptGroup: "집 / 거주지", covers: ["집 묘사", "가족", "휴식", "집안일"], recommended: true },
      extra("live-alone", "혼자 거주", "주거"),
      extra("live-roommate", "룸메이트와 거주", "주거"),
    ],
  },
  {
    id: "home-type",
    title: "거주 형태",
    description: "가장 익숙하게 설명할 수 있는 공간을 고릅니다.",
    selectionType: "single",
    options: [
      { id: "apartment-house", name: "아파트 또는 주택 거주", category: "주거", reason: "공간 묘사와 동네 이야기를 반복 가능한 배경으로 활용합니다.", scriptGroup: "집 / 거주지", covers: ["집 묘사", "동네", "이사"], recommended: true },
      extra("studio-dorm", "원룸 또는 기숙사 거주", "주거"),
      extra("other-home", "기타 거주 형태", "주거"),
    ],
  },
  {
    id: "outdoor-activities",
    title: "야외 활동",
    description: "여러 개를 고를 수 있습니다. 선택한 장면을 하나의 여행 스토리로 묶습니다.",
    selectionType: "multiple",
    options: [
      { id: "park", name: "공원 가기", category: "여가 활동", reason: "산책, 날씨, 풍경을 여행 경험과 자연스럽게 공유합니다.", scriptGroup: "야외 / 여행", covers: ["좋아하는 장소", "일상 루틴", "최근 경험"], recommended: true },
      { id: "beach", name: "해변 가기", category: "여가 활동", reason: "바닷가 리조트 에피소드 하나로 감정과 묘사를 풍부하게 만들 수 있습니다.", scriptGroup: "야외 / 여행", covers: ["기억에 남는 경험", "장소 묘사", "여행"], recommended: true },
      { id: "walking", name: "걷기", category: "여가 활동", reason: "공원과 여행에서의 이동, 풍경 감상을 같은 표현으로 재사용합니다.", scriptGroup: "야외 / 여행", covers: ["루틴", "건강", "장소"], recommended: true },
      { id: "jogging", name: "조깅", category: "여가 활동", reason: "가벼운 운동과 야외 풍경을 한 개의 장면으로 묶습니다.", scriptGroup: "야외 / 여행", covers: ["운동 루틴", "날씨", "변화"], recommended: true },
      extra("hiking", "등산", "여가 활동"),
      extra("cycling", "자전거 타기", "여가 활동"),
    ],
  },
  {
    id: "indoor-activities",
    title: "실내 활동 / 휴식",
    description: "가장 자주 하는 루틴을 복수 선택합니다.",
    selectionType: "multiple",
    options: [
      { id: "music", name: "음악 듣기", category: "여가 활동", reason: "카페와 집에서 쉬는 장면의 분위기를 만드는 공통 소재입니다.", scriptGroup: "실내 / 휴식", covers: ["일상 루틴", "좋아하는 것", "스트레스 해소"], recommended: true },
      { id: "cafe", name: "카페 가기", category: "여가 활동", reason: "장소, 주문, 음악, 친구와의 대화를 구체적으로 말할 수 있습니다.", scriptGroup: "실내 / 휴식", covers: ["좋아하는 장소", "최근 경험", "루틴"], recommended: true },
      { id: "rest-home", name: "집에서 쉬기", category: "여가 활동", reason: "카페 루틴과 이어지는 조용한 휴식 스토리를 만들 수 있습니다.", scriptGroup: "실내 / 휴식", covers: ["주말", "휴식", "일상"], recommended: true },
      extra("watch-movies", "영화 보기", "여가 활동"),
      extra("watch-tv", "TV 시청", "여가 활동"),
      extra("reading", "독서", "여가 활동"),
    ],
  },
  {
    id: "sports-shopping",
    title: "운동 / 취미 / 쇼핑",
    description: "구체적인 장비나 물건을 말할 수 있는 활동을 고릅니다.",
    selectionType: "multiple",
    options: [
      { id: "tennis", name: "테니스 또는 운동", category: "여가 활동", reason: "장비와 실력 변화가 있어 취미 답변에 구체성을 더합니다.", scriptGroup: "운동 / 취미", covers: ["취미 묘사", "최근 경험", "변화"], recommended: true },
      { id: "shopping", name: "쇼핑", category: "여가 활동", reason: "테니스 장비 구매 경험으로 쇼핑 질문까지 같은 맥락으로 묶습니다.", scriptGroup: "운동 / 취미", covers: ["구매 경험", "비교", "문제 해결"], recommended: true },
      extra("fitness", "헬스 또는 피트니스", "여가 활동"),
      extra("swimming", "수영", "여가 활동"),
    ],
  },
  {
    id: "travel-home",
    title: "여행 / 집안일",
    description: "여행과 생활 경험을 복수 선택합니다.",
    selectionType: "multiple",
    options: [
      { id: "domestic-trip", name: "국내 여행", category: "여가 활동", reason: "여행 전후, 이동, 식사, 풍경 같은 질문을 한 스토리에서 꺼낼 수 있습니다.", scriptGroup: "야외 / 여행", covers: ["여행 묘사", "최근 경험", "과거 경험"], recommended: true },
      { id: "overseas-trip", name: "해외 여행", category: "여가 활동", reason: "국내 여행 스토리를 바탕으로 계획과 비교 질문까지 확장합니다.", scriptGroup: "야외 / 여행", covers: ["여행 계획", "비교", "문제 해결"], recommended: true },
      { id: "housework", name: "요리 또는 집안일", category: "여가 활동", reason: "가족과 사는 집, 청소 일정, 이사 롤플레이와 모두 이어집니다.", scriptGroup: "집 / 거주지", covers: ["집안일", "과거 경험", "일정 변경"], recommended: true },
      extra("camping", "캠핑", "여가 활동"),
      extra("cooking", "요리", "여가 활동"),
    ],
  },
];

export const simulationSurveyItems = surveySimulationSections.flatMap((section) => section.options);
export const recommendedSimulationIds = simulationSurveyItems.filter((item) => item.recommended).map((item) => item.id);
export const simulationScriptGroupOrder = ["야외 / 여행", "실내 / 휴식", "운동 / 취미", "집 / 거주지"];
