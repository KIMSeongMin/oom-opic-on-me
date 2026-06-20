export type OfficialOpicLink = {
  label: string;
  description: string;
  href: string;
};

export const officialOpicLinks: OfficialOpicLink[] = [
  { label: "OPIc 공식 홈", description: "공지와 최신 시험 안내를 확인합니다.", href: "https://www.opic.or.kr/opics/jsp/view/index.jsp" },
  { label: "시험 신청", description: "일정·센터 선택과 접수를 진행합니다.", href: "https://www.opic.or.kr/opics/servlet/controller.opic.site.apply.ApplyServlet?p_process=apply-init" },
  { label: "시험 일정", description: "접수 가능 일정과 마감 여부를 확인합니다.", href: "https://www.opic.or.kr/opics/servlet/controller.opic.site.receipt.AnnualScheduleServlet?p_process=select-new-list" },
  { label: "시험 센터", description: "응시 가능한 시험 센터 위치를 확인합니다.", href: "https://www.opic.or.kr/opics/servlet/controller.opic.common.CommCenterMapServlet" },
  { label: "수험자 가이드", description: "당일 유의사항과 운영 기준을 확인합니다.", href: "https://www.opic.or.kr/opics/servlet/controller.opic.site.guide.GuideServlet?p_process=move-exam-guide" },
  { label: "성적 확인", description: "성적 확인 및 성적표 관련 메뉴로 이동합니다.", href: "https://www.opic.or.kr/opics/servlet/controller.opic.site.certi.CertiServlet?p_process=move-page-certiissue" },
];

export const scoreBands = [
  { band: "Novice", levels: "NL · NM · NH", description: "익숙한 주제의 아주 기본적인 의사소통 단계" },
  { band: "Intermediate", levels: "IL · IM1 · IM2 · IM3 · IH", description: "친숙한 주제를 문장과 경험으로 이어 말하는 단계" },
  { band: "Advanced", levels: "AL", description: "구체적 경험, 변화, 문제 해결을 더 유연하게 연결하는 단계" },
];

export const applicationSteps = [
  { title: "계정과 일정 확인", detail: "공식 사이트에서 회원 정보, 응시 가능 일정, 접수 마감 시각을 확인합니다." },
  { title: "센터·일시 선택", detail: "희망 시험 센터와 시간을 선택하고 변경·취소 규정도 함께 확인합니다." },
  { title: "결제와 접수 확인", detail: "응시료, 할인·패키지, 결제 수단은 신청 화면에 표시된 최신 조건을 기준으로 확인합니다." },
  { title: "수험표·안내 재확인", detail: "시험 전 수험표, 신분증 기준, 입실 시각과 당일 안내를 다시 확인합니다." },
];

export const testFlow = [
  { title: "Background Survey", detail: "내가 고정할 서베이 조합을 선택합니다. OOM STEP 1과 연결되는 지점입니다." },
  { title: "난이도 선택", detail: "자기평가형 난이도 선택 뒤, 선택 범위에 맞춰 질문이 이어집니다. OOM은 5 → 5를 기본값으로 안내합니다." },
  { title: "컴퓨터 기반 말하기", detail: "헤드셋을 사용해 질문을 듣고, 제한 시간 안에 영어로 답하는 방식입니다." },
  { title: "성적 확인", detail: "공식 성적 확인 메뉴에서 발표 일정과 결과를 확인합니다." },
];

export const candidateChecklist = [
  "시험 전날 공식 사이트에서 접수 상태와 입실 시간을 재확인한다.",
  "공식 수험자 가이드에 적힌 신분증 및 당일 지참 기준을 확인한다.",
  "서베이 고정 조합과 각 그룹의 메인 장면을 한 번씩 소리 내어 점검한다.",
  "문제를 놓쳤을 때를 대비해 잠깐 생각할 filler와 대체 표현을 준비한다.",
  "당일에는 외운 문장을 빠르게 읽기보다 질문의 핵심 명사를 먼저 잡고 답한다.",
];

export const practicalTips = [
  { title: "질문에 먼저 답하기", detail: "첫 문장에 장소·시간·대상을 바로 넣고, 그다음에 스토리를 이어 갑니다." },
  { title: "한 장면을 깊게 쓰기", detail: "장소, 함께 간 사람, 활동, 감정처럼 보이는 명사를 더해 답변을 구체화합니다." },
  { title: "변형은 한두 블록만", detail: "질문이 바뀔 때 전체 스토리를 새로 만들지 말고, OOM의 교체 블록만 바꿉니다." },
  { title: "공식 정보는 신청 직전 재확인", detail: "응시료·일정·접수 마감·발표일은 바뀔 수 있으므로 앱의 링크에서 최신 정보를 확인합니다." },
];
