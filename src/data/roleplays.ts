import type { RoleplayScenario } from "../types";

export const roleplayFormula = [
  { title: "정중하게 상황 시작", description: "인사 후 도움이 필요한 상황임을 부드럽게 알립니다." },
  { title: "문제 설명", description: "언제, 무엇이, 왜 어려운지 한두 문장으로 말합니다." },
  { title: "필요한 정보 질문", description: "가능한 해결 방법과 조건을 구체적으로 묻습니다." },
  { title: "대안 1 제시", description: "환불, 변경, 다른 시간 등 첫 번째 대안을 제안합니다." },
  { title: "대안 2 제시", description: "첫 대안이 어렵다면 가능한 다른 선택지를 요청합니다." },
  { title: "감사 인사로 마무리", description: "상대의 이해와 도움에 감사하며 끝냅니다." },
];

export const essentialRoleplayPhrases = [
  "I'm so sorry, but I have a problem.",
  "Is there any way you can help me?",
  "Can I get a full refund?",
  "Can I reschedule it for next week?",
  "Could you give me another option?",
  "That would be really helpful.",
  "Thank you so much for understanding.",
];

export const roleplayScenarios: RoleplayScenario[] = [
  {
    id: "hotel-booking",
    title: "호텔 예약 문제",
    group: "야외 / 여행",
    situation: "가족 여행을 위해 예약한 바닷가 호텔의 객실 유형이 예약 내용과 다릅니다.",
    evaQuestion: "You are at a hotel. Explain that there is a problem with your reservation and ask the front desk to help you.",
    answerStructure: ["예약자 이름과 문제를 정중하게 알리기", "예약한 객실과 받은 객실 비교", "빈 객실 또는 업그레이드 가능 여부 질문", "어렵다면 환불 또는 다른 대안 요청", "감사 인사"],
    englishExample: `Hello, I'm so sorry, but I have a problem with my reservation. My name is Min Kim, and I booked an ocean-view room for my family, but the room we received faces the parking lot.

Could you please check if there is an ocean-view room available? We are staying for two nights, so having the right room would make a big difference. If that is not possible, can I get a partial refund or another option, such as a room with a better view tomorrow?

That would be really helpful. Thank you so much for understanding.`,
    alternatives: ["Would it be possible to move us to another room?", "Could you check whether an upgrade is available?", "Can you let me know what compensation is possible?"],
    levelDifferences: { IM3: "문제와 요청을 짧게 말하고 감사로 마무리합니다.", IH: "예약 내용과 현재 상황을 비교하고 대안 두 개를 질문합니다.", AL: "가족 여행의 맥락과 조건을 덧붙이고, 상대의 답에 맞춰 유연하게 협상합니다." },
  },
  {
    id: "flight-change",
    title: "항공권 또는 여행 일정 변경",
    group: "야외 / 여행",
    situation: "가족 일정 때문에 이미 예약한 항공편 날짜를 다음 주로 변경해야 합니다.",
    evaQuestion: "Call an airline and explain why you need to change your flight. Ask about available options.",
    answerStructure: ["예약 정보와 변경 이유 알리기", "원래 출발일과 희망 날짜 말하기", "변경 수수료와 좌석 가능 여부 질문", "환불 또는 다른 항공편 대안 요청", "감사 인사"],
    englishExample: `Hi, I'm calling because I need to change my flight reservation. I was supposed to leave this Friday, but a family schedule changed unexpectedly, so I need to travel next week instead.

Is there any way you can help me move the flight to Tuesday or Wednesday? Could you tell me about the change fee and whether there are seats available around the same time? If those flights are full, could you give me another option with a similar schedule?

I appreciate your help. Thank you so much for understanding.`,
    alternatives: ["Can I reschedule it for next week?", "Is there a flight with a similar departure time?", "Could you explain the fare difference to me?"],
    levelDifferences: { IM3: "날짜 변경 요청과 한 가지 질문을 합니다.", IH: "희망 날짜 두 개와 수수료 질문을 포함합니다.", AL: "일정 제약을 설명하고 여러 대안을 비교하며 최적안을 요청합니다." },
  },
  {
    id: "tennis-court",
    title: "테니스 코트 예약 문제",
    group: "운동 / 취미",
    situation: "주말 아침 테니스 코트가 비 때문에 사용할 수 없다는 연락을 받았습니다.",
    evaQuestion: "Call the sports center. Explain the court reservation problem and ask for a new time or another solution.",
    answerStructure: ["예약 시간과 날씨 문제 언급", "함께 연습하는 사람이 있다는 맥락 추가", "실내 코트 또는 다른 시간 질문", "환불·크레딧 대안 요청", "감사 인사"],
    englishExample: `Hello, I'm so sorry, but I have a problem with my tennis court reservation for Saturday morning. I received a message that the outdoor court may be closed because of the rain, and my practice partner and I already planned our weekend around it.

Is there any indoor court available around the same time? If not, can I reschedule it for Sunday afternoon or get a credit for another day? Could you give me another option that would work for two people?

That would be really helpful. Thank you for checking.`,
    alternatives: ["Do you have an indoor court available?", "Can the booking credit be used next weekend?", "Is there a cancellation fee in this situation?"],
    levelDifferences: { IM3: "비 때문에 예약을 바꾸고 싶다고 말합니다.", IH: "동행자와 희망 시간, 두 가지 대안을 말합니다.", AL: "시설의 제약을 이해한다는 표현과 함께 대체 가능한 조건을 구체적으로 조율합니다." },
  },
  {
    id: "moving-cleaning",
    title: "이사업체 또는 청소업체 일정 변경",
    group: "집 / 거주지",
    situation: "가족 행사와 겹쳐 예약한 청소업체 방문 시간을 변경해야 합니다.",
    evaQuestion: "Call a cleaning company. Explain your scheduling problem and ask to reschedule the service.",
    answerStructure: ["예약 정보와 일정 충돌 설명", "원래 방문 시간과 가능한 새 시간 제시", "추가 비용 여부 질문", "다음 주나 취소 후 재예약 대안 질문", "감사 인사"],
    englishExample: `Hi, I'm calling about my cleaning appointment for this Saturday afternoon. I'm so sorry, but a family event was moved to the same time, so no one will be home to let the cleaner in.

Can I reschedule it for next week, preferably on Tuesday evening or Saturday morning? Please let me know if there is an extra fee. If those times are not available, could you give me another option or keep the payment as credit for a future visit?

Thank you so much for understanding.`,
    alternatives: ["Would there be a fee for changing the appointment?", "Could I keep the payment as credit?", "What is the earliest available time next week?"],
    levelDifferences: { IM3: "일정이 겹쳐 예약을 변경하고 싶다고 말합니다.", IH: "가능한 새 시간과 추가 비용 질문을 넣습니다.", AL: "가족 행사 배경과 출입 조건을 설명하고 크레딧까지 포함한 대안을 협상합니다." },
  },
];
