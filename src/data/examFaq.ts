export type ExamFaqCategory = "exam-flow" | "strategy" | "score" | "technical";

export type ExamFaqItem = {
  id: string;
  category: ExamFaqCategory;
  question: string;
  answer: string;
  source?: "image" | "official" | "web";
  sourceLabel?: string;
  sourceUrl?: string;
};

export const examFaqCategories: Array<{ id: ExamFaqCategory; label: string; description: string }> = [
  { id: "exam-flow", label: "시험 진행", description: "자기소개, 문항 수, 시간, 다시 듣기처럼 시험장에서 바로 헷갈리는 내용입니다." },
  { id: "strategy", label: "난이도와 답변 전략", description: "난이도 선택, 스크립트 활용, 질문 대처법을 OOM 훈련 흐름에 맞춰 정리했습니다." },
  { id: "score", label: "성적과 제출", description: "성적 발표, 유효기간, 인증서, 진위 확인 관련 질문입니다." },
  { id: "technical", label: "기기와 문제 상황", description: "마이크, 녹음, 시스템 오류처럼 당일 대응이 필요한 질문입니다." },
];

export const examFaqItems: ExamFaqItem[] = [
  {
    id: "self-intro-scoring",
    category: "exam-flow",
    question: "자기소개를 안 하면 감점되나요?",
    answer: "자기소개는 몸을 풀고 녹음 환경에 익숙해지는 시작 질문에 가깝습니다. 점수에 큰 영향을 준다고 보기보다는, 시험장 분위기에 적응하고 첫 문장을 안정적으로 꺼내는 용도로 준비하세요.",
    source: "image",
  },
  {
    id: "difficulty-important",
    category: "strategy",
    question: "난이도 선택이 정말 중요한가요?",
    answer: "난이도는 질문의 깊이와 복잡도에 영향을 줍니다. 너무 낮게 고르면 높은 등급을 보여 줄 기회가 줄고, 너무 높게 고르면 부담이 커질 수 있어요. OOM에서는 IM3~IH 목표라면 5-5를 기본값으로 두고, 안정성이 더 필요하면 3-3이나 4-4도 검토하는 흐름을 추천합니다.",
    source: "image",
  },
  {
    id: "answer-time",
    category: "exam-flow",
    question: "문항마다 제한 시간이 있나요?",
    answer: "공식 진행 방식상 문항별 답변시간 제한은 없습니다. 다만 시험 전체 시간이 정해져 있으니 한 문항을 지나치게 오래 끌지 말고, 40초 안팎으로 답변을 마무리하는 연습을 해두면 안정적입니다.",
    source: "official",
    sourceLabel: "OPIc 시험소개",
    sourceUrl: "https://www.opic.or.kr/opics/servlet/controller.opic.site.about.AboutServlet?p_process=move-introduce-opic",
  },
  {
    id: "script-memorization",
    category: "strategy",
    question: "스크립트는 외워서 말해도 괜찮나요?",
    answer: "핵심 장면과 표현을 준비하는 것은 도움이 됩니다. 하지만 문장을 통째로 읽듯이 말하면 질문과 어긋나거나 자연스러움이 떨어질 수 있어요. 장면, 단어, 연결 표현을 기억하고 질문에 맞춰 순서와 강조점을 바꾸는 방식이 더 안전합니다.",
    source: "image",
  },
  {
    id: "replay-button",
    category: "exam-flow",
    question: "질문 다시 듣기 버튼을 눌러도 되나요?",
    answer: "질문은 2회 청취할 수 있습니다. 한 번에 못 들었거나 핵심 단어를 놓쳤다면 다시 듣기를 활용하세요. 다만 다시 들을 때도 질문의 장소, 사람, 활동, 시제를 잡는 데 집중하고 답변 시간까지 염두에 두는 편이 좋습니다.",
    source: "official",
    sourceLabel: "OPIc 시험소개",
    sourceUrl: "https://www.opic.or.kr/opics/servlet/controller.opic.site.about.AboutServlet?p_process=move-introduce-opic",
  },
  {
    id: "replay-score",
    category: "exam-flow",
    question: "질문을 두 번 들으면 점수가 깎이나요?",
    answer: "다시 듣기 자체를 감점으로 볼 필요는 없습니다. 실제로 중요한 것은 두 번째 청취 뒤에도 질문에 맞게 답하는지입니다. 질문을 놓쳤다면 억지로 시작하기보다 다시 듣고 핵심 명사를 확인하는 편이 낫습니다.",
    source: "image",
  },
  {
    id: "question-count",
    category: "exam-flow",
    question: "OPIc은 총 몇 문항을 보나요?",
    answer: "본 시험은 보통 1차 세션 약 7문항, 난이도 재조정 뒤 2차 세션 약 5~8문항으로 진행됩니다. 난이도와 개인 맞춤형 흐름에 따라 전체 문항 수는 조금 달라질 수 있습니다.",
    source: "official",
    sourceLabel: "OPIc 시험소개",
    sourceUrl: "https://www.opic.or.kr/opics/servlet/controller.opic.site.about.AboutServlet?p_process=move-introduce-opic",
  },
  {
    id: "survey-change",
    category: "strategy",
    question: "서베이에서 많이 선택하면 더 유리한가요?",
    answer: "선택지가 많아지면 질문 범위도 넓어질 수 있습니다. OOM에서는 많은 항목을 고르기보다, 실제로 말할 수 있는 장면과 연결되는 항목만 남겨 답변 범위를 좁히는 방식을 권합니다.",
    source: "web",
  },
  {
    id: "unexpected-question",
    category: "strategy",
    question: "예상하지 못한 질문이 나오면 어떻게 하나요?",
    answer: "완전히 새 답을 만들려고 하기보다, 질문의 핵심 단어를 잡고 준비한 장면 중 가장 가까운 경험으로 연결하세요. 바로 답할 수 없으면 짧게 생각을 정리하는 표현을 쓰고, 장소나 시간 같은 쉬운 정보부터 말하면 흐름을 회복하기 좋습니다.",
    source: "web",
  },
  {
    id: "roleplay-hard",
    category: "strategy",
    question: "롤플레이가 나오면 어떤 순서로 답해야 하나요?",
    answer: "문제 상황을 짧게 확인하고, 필요한 정보를 2~3개 묻고, 가능한 대안을 요청한 뒤 감사 표현으로 닫으면 됩니다. 긴 문장을 외우기보다 문제 설명, 질문, 대안 요청, 마무리의 순서를 몸에 익히세요.",
    source: "web",
  },
  {
    id: "score-release",
    category: "score",
    question: "성적은 언제 발표되나요?",
    answer: "OPIc 성적은 응시일로부터 5일 후 13시 이후 발표 예정입니다. 다만 채점 기관 사정에 따라 일정이 조정될 수 있으니, 제출 마감이 있다면 여유 있게 응시하는 편이 안전합니다.",
    source: "official",
    sourceLabel: "OPIc 수험자 가이드",
    sourceUrl: "https://www.opic.or.kr/opics/servlet/controller.opic.site.guide.GuideServlet?p_process=move-exam-guide",
  },
  {
    id: "score-validity",
    category: "score",
    question: "OPIc 성적 유효기간은 얼마인가요?",
    answer: "성적 유효기간은 응시일로부터 2년입니다. 유효기간이 지난 성적과 응시 정보는 공식 홈페이지에서 확인하거나 인증 용도로 사용하기 어렵습니다.",
    source: "official",
    sourceLabel: "OPIc 시험관리규정",
    sourceUrl: "https://www.opic.or.kr/opics/servlet/controller.opic.site.applyinfor.ActflTestRuleServlet?p_process=move-actfl_test_rule",
  },
  {
    id: "certificate-print",
    category: "score",
    question: "인증서는 어떻게 제출하나요?",
    answer: "성적 공개 후 공식 홈페이지에서 인증서를 직접 출력할 수 있습니다. 기관 제출 전에는 등급, Test ID, 응시일, 영문 철자와 숫자 0/O처럼 헷갈리는 문자를 다시 확인하세요.",
    source: "official",
    sourceLabel: "OPIc 수험자 가이드",
    sourceUrl: "https://www.opic.or.kr/opics/servlet/controller.opic.site.guide.GuideServlet?p_process=move-exam-guide",
  },
  {
    id: "certificate-verify",
    category: "score",
    question: "성적 진위 확인은 어떻게 하나요?",
    answer: "인증서 번호를 입력하거나 모바일 기기로 인증서 하단의 바코드를 스캔해 진위 여부를 확인할 수 있습니다. 유효기간이 지난 성적은 진위 확인이 제한됩니다.",
    source: "official",
    sourceLabel: "OPIc 인증서 진위확인",
    sourceUrl: "https://www.opic.or.kr/opics/servlet/controller.opic.site.certi.CertiServlet?p_process=select-certicontrast",
  },
  {
    id: "technical-issue",
    category: "technical",
    question: "시험 중 녹음이나 시스템 문제가 생기면 어떻게 하나요?",
    answer: "시험장 안에서 즉시 감독관에게 알려야 합니다. 알 수 없는 기계적 문제로 정상 채점이 불가능하면 UR 판정 후 재시험 또는 환불 조치가 이루어질 수 있지만, 답변 미흡 같은 응시자 귀책 사유는 해당되지 않습니다.",
    source: "official",
    sourceLabel: "OPIc 수험자 가이드",
    sourceUrl: "https://www.opic.or.kr/opics/servlet/controller.opic.site.guide.GuideServlet?p_process=move-exam-guide",
  },
  {
    id: "mic-check",
    category: "technical",
    question: "마이크 테스트는 대충 넘어가도 되나요?",
    answer: "넘기지 않는 편이 좋습니다. Pre-Test Setup과 Sample Question에서 질문 청취와 녹음 상태를 꼭 확인하세요. 소리가 작거나 잡음이 있으면 본 시험 전에 바로 조치해야 합니다.",
    source: "official",
    sourceLabel: "OPIc 시험소개",
    sourceUrl: "https://www.opic.or.kr/opics/servlet/controller.opic.site.about.AboutServlet?p_process=move-introduce-opic",
  },
];
