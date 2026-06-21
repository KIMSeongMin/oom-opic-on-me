import type { RoleplayScenario } from "../types";

export const additionalRoleplayScenarios: RoleplayScenario[] = [
  {
    id: "cafe-order-problem",
    title: "카페 주문과 좌석 문제",
    group: "실내 / 휴식",
    situation: "조용히 쉬려고 카페에 왔지만 주문한 음료가 다르게 나왔고, 예약한 창가 좌석도 사용할 수 없습니다.",
    evaQuestion: "You are at a cafe. Explain that there is a problem with your order and seating, and ask the staff for help.",
    answerStructure: ["주문 내용과 예약한 좌석을 정중하게 설명", "실제로 받은 음료와 현재 좌석 문제 말하기", "재제조 또는 다른 좌석 가능 여부 묻기", "대안으로 환불·쿠폰·잠시 기다릴 수 있는지 요청", "감사로 마무리"],
    englishExample: `Hello, I'm so sorry, but I have a problem with my order and table. I ordered a decaf latte because I wanted to relax here for a while, but I received a regular coffee instead. I also reserved the window table, but someone else is sitting there now.

Could you please check whether the drink can be remade and whether the window table will be available soon? If the table is not available, could you give me another quiet seat or a small discount for the inconvenience?

That would be really helpful. Thank you so much for understanding.`,
    alternatives: ["Could you remake this as a decaf drink?", "Is there another quiet table available?", "Would it be possible to wait for the reserved seat?"],
    levelDifferences: { IM3: "주문 문제와 원하는 해결 방법 한 가지를 간단히 말합니다.", IH: "음료와 좌석이라는 두 문제를 나눠 설명하고 대안을 요청합니다.", AL: "휴식 목적과 예약 근거를 덧붙여 여러 대안을 비교하며 협상합니다." },
  },
  {
    id: "gym-class-change",
    title: "운동 수업 일정 변경",
    group: "운동 / 취미",
    situation: "등록한 저녁 운동 수업 시간이 업무 일정과 겹쳐 다른 요일이나 온라인 대안을 찾아야 합니다.",
    evaQuestion: "Call a fitness center. Explain why you need to change your class schedule and ask about other options.",
    answerStructure: ["등록한 수업과 현재 일정 설명", "변경이 필요한 이유와 원하는 요일 제시", "다른 시간·온라인 수업·크레딧 여부 질문", "가능한 대안을 선택하거나 환불 요청", "감사로 마무리"],
    englishExample: `Hi, I'm calling because I need to change the evening fitness class I signed up for. My work schedule changed unexpectedly, and I can no longer arrive on time on Tuesdays.

Is there any way you can move me to a Thursday class or an earlier session? If those are full, could you tell me whether there is an online option or credit that I can use next month?

I would really appreciate another option. Thank you for your help.`,
    alternatives: ["Can I transfer to another day?", "Is there an earlier class available?", "Could I keep the credit for next month?"],
    levelDifferences: { IM3: "원하는 다른 요일과 시간을 요청합니다.", IH: "업무 일정이라는 이유와 온라인·크레딧 대안을 함께 묻습니다.", AL: "등록 조건과 두세 가지 대안을 비교하며 가장 현실적인 해결책을 제안합니다." },
  },
  {
    id: "apartment-repair-delay",
    title: "아파트 수리 일정 지연",
    group: "집 / 거주지",
    situation: "아파트 관리실에 요청한 수리가 예정 시간에 오지 않아 가족 일정에 차질이 생겼습니다.",
    evaQuestion: "Call the apartment management office. Explain the repair delay and ask for a new appointment or another solution.",
    answerStructure: ["요청한 수리와 원래 예약 시간 말하기", "지연으로 생긴 불편 설명", "오늘 가능한 새 시간 또는 담당자 연결 요청", "불가능할 경우 다음 날 첫 시간이나 대안 요청", "확인과 감사로 마무리"],
    englishExample: `Hello, I'm calling about a repair appointment for my apartment. A technician was supposed to come this morning, but no one has arrived yet, and my family has plans later today.

Could you check the status and let me know whether someone can come this afternoon? If that is not possible, can I get the first appointment tomorrow or speak with the technician directly?

Thank you for checking. That would help us plan the rest of the day.`,
    alternatives: ["Could you confirm the technician's arrival time?", "Is there an earlier appointment tomorrow?", "May I speak with the person in charge?"],
    levelDifferences: { IM3: "수리 지연과 새 시간 요청을 명확히 말합니다.", IH: "가족 일정에 미친 영향을 덧붙이고 두 가지 대안을 요청합니다.", AL: "현재 상태 확인, 담당자 연결, 다음 날 일정까지 우선순위를 두고 협상합니다." },
  },
];
