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

export type BackgroundSurveyOption = {
  id: string;
  label: string;
  recommended?: boolean;
};

export type BackgroundSurveySection = {
  id: string;
  part: string;
  title: string;
  selection: "single" | "multiple";
  minSelections?: number;
  options: BackgroundSurveyOption[];
};

const option = (id: string, label: string, recommended = false): BackgroundSurveyOption => ({ id, label, recommended });

/**
 * OPIc Background Survey commonly used in Korean test preparation materials.
 * The wording can vary slightly by testing period, but the option hierarchy is
 * intentionally kept visible so learners can rehearse the fixed OOM choices.
 */
export const backgroundSurveySections: BackgroundSurveySection[] = [
  {
    id: "work",
    part: "1.",
    title: "현재 귀하는 어느 분야에 종사하고 계십니까?",
    selection: "single",
    options: [
      option("work-company", "사업/회사"),
      option("work-home", "재택근무/재택사업"),
      option("work-teacher", "교사/교육자"),
      option("work-none", "일 경험 없음", true),
    ],
  },
  {
    id: "student",
    part: "2.",
    title: "현재 귀하는 학생이십니까?",
    selection: "single",
    options: [
      option("student-yes", "예"),
      option("student-no", "아니오", true),
    ],
  },
  {
    id: "education",
    part: "2.2",
    title: "최근 5년 이내에 수강했습니까?",
    selection: "single",
    options: [
      option("education-college", "학위 과정 수강"),
      option("education-language", "어학 수업"),
      option("education-professional", "전문 기술 향상을 위한 평생 학습"),
      option("education-over-five", "수강 후 5년 이상 지남", true),
    ],
  },
  {
    id: "residence",
    part: "3.",
    title: "현재 귀하는 어디에 살고 계십니까?",
    selection: "single",
    options: [
      option("residence-alone", "개인주택이나 아파트에 홀로 거주"),
      option("residence-roommate", "친구나 룸메이트와 함께 주택이나 아파트에 거주"),
      option("residence-family", "가족과 함께 주택이나 아파트에 거주", true),
      option("residence-dorm", "학교 기숙사"),
      option("residence-base", "군대 막사"),
    ],
  },
  {
    id: "leisure",
    part: "4.",
    title: "귀하는 여가 활동으로 주로 무엇을 하십니까?",
    selection: "multiple",
    minSelections: 2,
    options: [
      option("leisure-movie", "영화 보기"),
      option("leisure-club", "클럽/나이트클럽 가기"),
      option("leisure-performance", "공연 보기"),
      option("leisure-concert", "콘서트 보기"),
      option("leisure-museum", "박물관 가기"),
      option("leisure-park", "공원 가기", true),
      option("leisure-camping", "캠핑 하기"),
      option("leisure-beach", "해변 가기", true),
      option("leisure-sports", "스포츠 관람"),
      option("leisure-renovation", "주거 개선"),
      option("leisure-cooking-show", "요리 관련 프로그램 시청"),
      option("leisure-game", "게임 하기"),
      option("leisure-sns", "SNS 글 올리기"),
      option("leisure-bar", "술집/바에 가기"),
      option("leisure-message", "친구들과 문자하기"),
      option("leisure-billiards", "당구치기"),
      option("leisure-volunteer", "자원 봉사"),
      option("leisure-drive", "차 드라이브 하기"),
      option("leisure-course", "시험 대비 과정 수강"),
      option("leisure-news", "뉴스 보거나 듣기"),
      option("leisure-cafe", "카페/커피 전문점 가기", true),
      option("leisure-chess", "체스"),
      option("leisure-tv", "TV 시청"),
      option("leisure-shopping", "쇼핑하기", true),
      option("leisure-reality", "리얼리티 쇼 보기"),
      option("leisure-religion", "종교 활동"),
    ],
  },
  {
    id: "interests",
    part: "5.",
    title: "귀하의 취미나 관심사는 무엇입니까?",
    selection: "multiple",
    minSelections: 1,
    options: [
      option("interest-children", "아이에게 책 읽어주기"),
      option("interest-music", "음악 감상하기", true),
      option("interest-instrument", "악기 연주하기"),
      option("interest-singing", "혼자 노래부르거나 합창하기"),
      option("interest-dance", "춤추기"),
      option("interest-writing", "글쓰기"),
      option("interest-drawing", "그림 그리기"),
      option("interest-blog", "여행 관련 잡지나 블로그 글 읽기"),
      option("interest-photo", "사진 촬영하기"),
      option("interest-stock", "주식 투자"),
      option("interest-newspaper", "신문 읽기"),
      option("interest-reading", "독서"),
      option("interest-cooking", "요리하기", true),
      option("interest-pet", "애완동물 키우기"),
    ],
  },
  {
    id: "sports",
    part: "6.",
    title: "귀하는 주로 어떤 운동을 즐기십니까?",
    selection: "multiple",
    minSelections: 1,
    options: [
      option("sport-basketball", "농구"),
      option("sport-baseball", "야구/소프트볼"),
      option("sport-soccer", "축구"),
      option("sport-futsal", "미식축구"),
      option("sport-hockey", "하키"),
      option("sport-cricket", "크리켓"),
      option("sport-golf", "골프"),
      option("sport-volleyball", "배구"),
      option("sport-tennis", "테니스", true),
      option("sport-badminton", "배드민턴"),
      option("sport-table-tennis", "탁구"),
      option("sport-taekwondo", "태권도"),
      option("sport-swimming", "수영"),
      option("sport-cycle", "자전거"),
      option("sport-ski", "스키/스노우보드"),
      option("sport-skating", "아이스 스케이트"),
      option("sport-jogging", "조깅", true),
      option("sport-walking", "걷기", true),
      option("sport-yoga", "요가"),
      option("sport-hiking", "하이킹/트레킹"),
      option("sport-fishing", "낚시"),
      option("sport-gym", "헬스"),
      option("sport-class", "운동 수업 수강하기"),
      option("sport-none", "운동을 전혀 하지 않음"),
    ],
  },
  {
    id: "vacation",
    part: "7.",
    title: "귀하는 어떤 휴가나 출장을 다녀온 경험이 있습니까?",
    selection: "multiple",
    minSelections: 1,
    options: [
      option("vacation-domestic-business", "국내 출장"),
      option("vacation-overseas-business", "해외 출장"),
      option("vacation-home", "집에서 보내는 휴가", true),
      option("vacation-domestic", "국내 여행", true),
      option("vacation-overseas", "해외 여행", true),
    ],
  },
];

export const recommendedSurveyIds = backgroundSurveySections.flatMap((section) => section.options.filter((item) => item.recommended).map((item) => item.id));
export const recommendedActivityCount = backgroundSurveySections.filter((section) => ["leisure", "interests", "sports", "vacation"].includes(section.id)).flatMap((section) => section.options.filter((item) => item.recommended)).length;

export const fixedSurveyGroups: FixedSurveyGroup[] = [
  {
    id: "profile",
    order: "01",
    title: "현재 상태",
    description: "시험의 기본 배경을 정하는 항목입니다.",
    answers: [
      { prompt: "현재 귀하의 직업 상태를 선택해 주세요.", answer: "일 경험 없음", kind: "single" },
      { prompt: "현재 학생입니까?", answer: "아니오", kind: "single" },
      { prompt: "최근 5년 이내에 수강했습니까?", answer: "수강 후 5년 이상 지남", kind: "single" },
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
