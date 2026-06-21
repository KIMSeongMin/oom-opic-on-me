import type { ScriptItem } from "../types";

export type AlternativeScriptItem = ScriptItem & {
  optionLabel: string;
  parentScriptId: string;
};

export const alternativeScripts: AlternativeScriptItem[] = [
  {
    id: "outdoor-lake-camping",
    parentScriptId: "outdoor-travel",
    optionLabel: "SET B · 호숫가 캠핑",
    group: "야외 / 여행",
    title: "호숫가 캠핑장에서 보낸 친구들과의 주말",
    goalLevel: "IM3-IH-AL",
    surveyBadges: ["공원 가기", "걷기", "조깅", "국내 여행", "해외 여행"],
    covers: ["좋아하는 야외 장소", "최근 여행", "야외 루틴", "여행 방식의 변화"],
    expectedQuestions: ["Tell me about an outdoor place you enjoy going to.", "Describe a memorable trip you took recently.", "What do you usually do when you spend time outdoors?", "How has your travel style changed over time?"],
    strategy: "바닷가 리조트 대신 호숫가 캠핑장을 기본 장면으로 씁니다. 텐트 설치, 산책로, 아침 안개, 함께 나눈 역할을 활용하면 공원·걷기·여행 질문을 다른 결로 답할 수 있습니다.",
    keywords: ["lakeside campground", "canvas tent", "hiking trail", "portable stove", "misty morning", "shared chores", "unplug"],
    fillerPhrases: ["To be honest", "Actually", "The best part was"],
    koreanSummary: "지난 가을 친구들과 호숫가 캠핑장에 갔습니다. 텐트를 치고 산책로를 걸었으며, 휴대용 버너로 간단한 저녁을 만들었습니다. 다음 날 아침 호수 위 안개를 보며 조용히 커피를 마신 기억이 특히 남습니다.",
    englishScript: `To be honest, one outdoor trip that I still remember clearly was a weekend camping trip at a lakeside campground with two close friends. We went there last autumn, when the weather was cool enough to walk comfortably but not too cold at night. As soon as we arrived, we set up a canvas tent near a small hiking trail and divided the work naturally.

Actually, the activities were simple, but that was the best part. One friend prepared the portable stove while I unpacked our food, and later we took a long walk around the lake before sunset. We cooked a light dinner, talked without checking our phones too often, and listened to the water from outside the tent. The next morning, there was a little mist over the lake, so we made coffee and watched the view quietly.

What I liked most was the feeling of unplugging from my usual routine. I used to think a trip had to be busy to be exciting, but now I enjoy slow outdoor time with people I know well. That weekend made me want to visit more parks and campgrounds when I need a real break.`,
    pointNotes: ["set up, divided the work, unpacked처럼 과거 동사를 연결해 장면을 자연스럽게 전개합니다.", "canvas tent, portable stove, misty morning은 눈에 보이는 고득점 디테일입니다.", "I used to ..., but now ... 구조로 여행 방식 변화 질문까지 확장합니다."],
  },
  {
    id: "indoor-bakery-routine",
    parentScriptId: "indoor-rest",
    optionLabel: "SET B · 베이커리와 홈 베이킹",
    group: "실내 / 휴식",
    title: "동네 베이커리에서 시작하는 느린 주말 루틴",
    goalLevel: "IM3-IH-AL",
    surveyBadges: ["음악 듣기", "카페 가기", "집에서 쉬기"],
    covers: ["좋아하는 카페", "집에서 쉬는 루틴", "음악을 들은 최근 경험", "스트레스 해소"],
    expectedQuestions: ["Tell me about a cafe or bakery you often visit.", "What do you usually do when you stay at home?", "Describe a recent time you enjoyed listening to music.", "How do you relax after a busy week?"],
    strategy: "일반 카페 대신 빵 냄새가 나는 작은 베이커리와 집에서의 간단한 베이킹을 묶습니다. 주문, 창가 자리, 잔잔한 음악, 반죽을 기다리는 시간을 이용해 실내·휴식 질문을 변형합니다.",
    keywords: ["neighborhood bakery", "warm pastry", "herbal tea", "window table", "instrumental playlist", "banana bread", "slow down"],
    fillerPhrases: ["To be honest", "I mean", "You know"],
    koreanSummary: "바쁜 주가 끝나면 동네 베이커리에 가서 따뜻한 빵과 허브티를 주문합니다. 창가에서 잔잔한 음악을 들으며 일정을 정리하고, 집에서는 바나나 브레드를 구우며 천천히 쉬는 루틴입니다.",
    englishScript: `To be honest, one of my favorite ways to slow down is to visit a small neighborhood bakery on the weekend. It is not a fancy place, but it always smells like warm bread, and the staff play a soft instrumental playlist in the background. I usually order herbal tea and one small pastry, then choose a window table where I can sit without rushing.

I mean, I do not go there to do anything important. Sometimes I write a few lines in my journal, and sometimes I just listen to the music while watching people walk by. When I come home, I often continue the same relaxed mood by baking something simple, like banana bread. Waiting for it to bake gives me time to clean the kitchen and organize my thoughts.

You know, that routine helps me separate a busy week from a quiet weekend. It is inexpensive and ordinary, but it makes me feel settled again. That is why the bakery and my small home-baking routine have become an important way for me to recharge.`,
    pointNotes: ["sometimes ... and sometimes ...으로 반복적인 루틴을 자연스럽게 연결합니다.", "smells like, instrumental playlist, window table은 감각 묘사를 늘려 줍니다.", "Waiting for it to bake gives me time to ... 는 동명사 주어를 활용한 확장 문장입니다."],
  },
  {
    id: "sports-tennis-clinic",
    parentScriptId: "sports-hobby",
    optionLabel: "SET B · 테니스 클리닉과 스트링",
    group: "운동 / 취미",
    title: "저녁 테니스 클리닉과 라켓 스트링 조정",
    goalLevel: "IM3-IH-AL",
    surveyBadges: ["테니스", "운동", "쇼핑"],
    covers: ["좋아하는 운동", "취미 시작 계기", "장비 구매", "실력 향상"],
    expectedQuestions: ["Tell me about a sport you enjoy.", "Describe how you started your favorite hobby.", "Tell me about something you bought for your hobby.", "How have you improved at this activity?"],
    strategy: "주말 랠리 대신 퇴근 후 소규모 테니스 클리닉을 중심 장면으로 잡습니다. 코치의 피드백, 발 위치, 스트링 조정, 서브 정확도를 사용하면 같은 테니스 주제라도 더 기술적인 어휘를 쓸 수 있습니다.",
    keywords: ["evening clinic", "footwork", "baseline", "racket strings", "tension", "serve accuracy", "constructive feedback"],
    fillerPhrases: ["Let me think", "Actually", "What I learned was"],
    koreanSummary: "퇴근 후 일주일에 한 번 소규모 테니스 클리닉에 갑니다. 코치에게 발 위치와 서브 피드백을 받고, 최근에는 라켓 스트링 텐션을 조정해 공을 더 안정적으로 칠 수 있게 되었습니다.",
    englishScript: `Let me think. These days, I enjoy going to a small tennis clinic after work once a week. The class is not too large, so the coach can give each person direct feedback about footwork and timing. At first, I felt awkward moving around the baseline, but the short drills helped me understand where to place my feet before I hit the ball.

Actually, I recently spent some money on my racket as well. I had the strings adjusted to a slightly different tension because my shots were flying too far. It was a small change, but the racket felt more stable right away. During practice, I could control my serve better and keep the ball in the court more consistently.

What I learned was that improvement does not always come from practicing longer. Sometimes one piece of constructive feedback or one equipment adjustment makes a clear difference. That is why I look forward to the clinic even after a long day.`,
    pointNotes: ["At first ..., but ... 구조로 시작 전후의 변화를 명확하게 대비합니다.", "constructive feedback, tension, baseline은 취미 답변의 전문성을 높이는 단어입니다.", "not always ... Sometimes ... 구조는 단순 나열보다 깊이 있는 결론을 만듭니다."],
  },
  {
    id: "home-moving-neighborhood",
    parentScriptId: "home-residence",
    optionLabel: "SET B · 이사와 새 동네",
    group: "집 / 거주지",
    title: "이사 후 새 동네에 적응한 가족의 일상",
    goalLevel: "IM3-IH-AL",
    surveyBadges: ["가족과 함께 거주", "아파트 거주", "집안일", "이사", "동네"],
    covers: ["집 묘사", "동네 소개", "집안일", "이사·문제 해결"],
    expectedQuestions: ["Describe the place where you live.", "Tell me about your neighborhood.", "What household chores do you usually do?", "Tell me about a change or problem related to your home."],
    strategy: "오래 살던 집의 편안함 대신 최근 이사와 새 동네 적응을 기본 장면으로 씁니다. 짐 정리, 강변 산책로, 엘리베이터 예약, 이웃 가게를 활용하면 과거 경험과 문제 해결 질문에도 강해집니다.",
    keywords: ["new apartment", "riverside path", "unpacking boxes", "elevator reservation", "local market", "settle in", "more spacious"],
    fillerPhrases: ["Actually", "The thing is", "To be honest"],
    koreanSummary: "가족과 더 넓은 아파트로 이사한 뒤, 강변 산책로와 동네 시장을 발견하며 새 환경에 적응했습니다. 주말에는 상자를 정리하고 공용 공간을 청소하며 가족과 역할을 나눕니다.",
    englishScript: `Actually, my family moved to a new apartment a little while ago, so our home has become a big part of my daily life recently. The new place is more spacious than our old one, and my favorite part is that there is a riverside walking path only a few minutes away. We also found a local market nearby, which makes everyday shopping much easier.

The thing is, moving was not simple at first. We had many boxes to unpack, and we needed to reserve the elevator carefully on moving day. On weekends, my family and I still share small chores, such as organizing the storage area, cleaning the kitchen, and deciding where to put new things. It took time, but each task made the apartment feel more like ours.

To be honest, I was worried about leaving the old neighborhood, but I have started to enjoy the new routine. I can take a short walk by the river after dinner, and the apartment feels more settled every month. That experience taught me that a new home becomes comfortable through small shared habits.`,
    pointNotes: ["more spacious than, easier than처럼 비교급을 넣어 이사 전후를 설명합니다.", "had many boxes to unpack, needed to reserve는 과거 상황을 구체적으로 보여 줍니다.", "a new home becomes comfortable through ... 는 추상적 결론을 자연스럽게 마무리하는 문장입니다."],
  },
];
