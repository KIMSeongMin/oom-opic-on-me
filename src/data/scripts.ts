import type { ScriptItem } from "../types";

export const scripts: ScriptItem[] = [
  {
    id: "outdoor-travel",
    group: "야외 / 여행",
    title: "바닷가 리조트에서 보낸 가족 여행",
    goalLevel: "IM3-IH-AL",
    surveyBadges: ["공원 가기", "해변 가기", "걷기", "조깅", "국내 여행", "해외 여행"],
    covers: ["좋아하는 야외 장소", "최근 여행", "날씨와 풍경", "누구와 무엇을 했는지", "기억에 남는 경험"],
    expectedQuestions: [
      "Tell me about a park or beach you enjoy going to.",
      "Describe a memorable trip you took recently.",
      "What do you usually do when you visit an outdoor place?",
      "How has your travel style changed over time?",
    ],
    strategy: "장소 이름만 바꾸고, 가족과 함께한 바닷가 장면을 공원·해변·국내외 여행 질문에 재사용합니다. 날씨, 풍경, 활동, 감정을 순서대로 꺼내면 자연스럽게 확장됩니다.",
    keywords: ["family getaway", "small resort", "warm Saturday", "ocean view", "morning walk", "seafood dinner", "relaxed"],
    fillerPhrases: ["Actually", "The thing is", "It was really memorable"],
    koreanSummary: "최근 가족과 바닷가 근처 작은 리조트에 갔습니다. 따뜻한 날씨에 바다를 보며 걷고, 사진을 찍고, 저녁에는 해산물을 먹었습니다. 조용한 풍경 덕분에 평소 스트레스가 풀렸고 오래 기억에 남는 여행이었습니다.",
    englishScript: `Actually, one of the best outdoor experiences I had recently was a short family getaway to a small resort near the beach. We left early on a warm Saturday morning, so the roads were quiet and the whole trip felt easy from the beginning. When we arrived, I could see the ocean from the balcony, and there was a long walking path next to the beach.

The thing is, I do not need a complicated plan to enjoy a trip. My family and I took a slow walk, took a few pictures, and sat on a bench to watch the waves. Later, I even did a light jog along the path because the weather was cool and fresh. In the evening, we had seafood at a small restaurant near the resort and talked about our favorite moments from the day.

What I remember most is how relaxed I felt. The sound of the water, the open view, and the time with my family helped me forget my usual stress. It was really memorable, and since then I have wanted to visit more parks and beaches whenever I need a break.`,
    pointNotes: [
      "장소를 park, beach, resort, city trip으로 바꿔도 이야기 구조가 유지됩니다.",
      "light jog, walking path 같은 활동 단어를 질문에 맞춰 선택합니다.",
      "마지막 감정 문장으로 단순 묘사에서 경험형 답변으로 확장합니다.",
    ],
  },
  {
    id: "indoor-rest",
    group: "실내 / 휴식",
    title: "조용한 카페와 집에서의 휴식 루틴",
    goalLevel: "IM3-IH-AL",
    surveyBadges: ["음악 듣기", "카페 가기", "집에서 쉬기"],
    covers: ["좋아하는 카페", "주말 루틴", "음악 취향", "스트레스 해소", "최근 경험"],
    expectedQuestions: [
      "Tell me about a cafe you often visit.",
      "What do you usually do when you stay at home?",
      "How do you relax after a busy week?",
      "Describe a recent time you enjoyed listening to music.",
    ],
    strategy: "카페와 집을 하나의 휴식 루틴으로 연결합니다. 커피, 플레이리스트, 조용한 분위기, 기분 변화를 넣으면 장소 질문과 일상 질문을 모두 커버합니다.",
    keywords: ["corner cafe", "iced latte", "window seat", "soft playlist", "weekend routine", "recharge", "quiet evening"],
    fillerPhrases: ["To be honest", "I mean", "You know"],
    koreanSummary: "바쁜 주말 뒤에는 동네 구석 카페에 가서 아이스 라테를 주문하고 창가에 앉아 잔잔한 음악을 듣습니다. 집에 돌아와서는 같은 플레이리스트를 틀고 편하게 쉽니다. 조용한 루틴이 머리를 정리하고 에너지를 채워 줍니다.",
    englishScript: `To be honest, my favorite way to relax is to visit a small cafe near my home or simply stay in with music. There is a corner cafe with big windows and soft lighting that I go to when I need some quiet time. I usually order an iced latte, choose a window seat, and put on a calm playlist with my earphones.

I mean, it is not a special place, but that is exactly why I like it. The baristas know the usual mood of the cafe, and the background music is never too loud. Sometimes I read a few pages of a book, and sometimes I just look outside and organize my thoughts. You know, after a busy week, having a small routine like that makes a big difference.

When I get home, I often continue the same feeling by playing music while I make dinner or rest on the sofa. It helps me recharge without spending a lot of money or making a big plan. That quiet cafe-and-home routine has become an important part of my weekend.`,
    pointNotes: [
      "cafe를 home으로 바꾸거나 둘을 함께 말해도 어색하지 않습니다.",
      "주문, 좌석, 음악처럼 눈에 보이는 명사를 넣어 구체성을 확보합니다.",
      "stress를 줄이고 recharge한다는 변화로 마무리합니다.",
    ],
  },
  {
    id: "sports-hobby",
    group: "운동 / 취미",
    title: "주말 테니스와 장비 쇼핑 경험",
    goalLevel: "IM3-IH-AL",
    surveyBadges: ["테니스", "운동", "쇼핑"],
    covers: ["취미 시작 계기", "운동 루틴", "최근 경험", "장비 구매", "실력 변화"],
    expectedQuestions: [
      "Tell me about a sport you enjoy.",
      "Describe how you started your favorite hobby.",
      "Tell me about something you bought for your hobby.",
      "How have you improved at this activity?",
    ],
    strategy: "테니스를 중심으로 시작 계기, 주말 랠리, 장비 구매, 실력 향상을 이어 말합니다. 운동 질문과 쇼핑 질문은 장면의 시작점만 바꾸면 됩니다.",
    keywords: ["tennis court", "weekend rally", "overgrip", "tennis shoes", "practice partner", "backhand", "confidence"],
    fillerPhrases: ["Let me think", "Actually", "What I'm trying to say is"],
    koreanSummary: "친구 권유로 테니스를 시작했고, 주말마다 동네 코트에서 랠리를 연습합니다. 최근에는 손에 잘 맞는 오버그립과 테니스화를 샀습니다. 처음보다 백핸드가 안정되어 실력이 조금씩 늘고 있다는 자신감이 생겼습니다.",
    englishScript: `Let me think. I started playing tennis because a friend invited me to a local court a while ago. At first, I could barely keep the ball in the court, but I liked that every rally gave me a small challenge. Now I usually practice on weekend mornings with the same friend, and we try to keep a rally going before we start a real game.

Actually, one thing that made the hobby more fun was buying a few simple items for it. I recently chose a new overgrip because my old one was slippery, and I bought comfortable tennis shoes that support my ankles better. They were not expensive, but using equipment that fits well made practice feel much easier and safer.

My backhand is still not perfect, but it has become more consistent than before. What I'm trying to say is that tennis gives me both exercise and a clear sense of progress. Even when I make mistakes, I can notice one small improvement after each practice, and that keeps me motivated to come back.`,
    pointNotes: [
      "sport 질문은 첫 문장부터, shopping 질문은 장비 구매 문단부터 시작합니다.",
      "overgrip, tennis shoes, backhand 같은 구체 명사가 AL 답변의 디테일을 만듭니다.",
      "실수와 개선을 함께 언급해 변화형 질문까지 대비합니다.",
    ],
  },
  {
    id: "home-residence",
    group: "집 / 거주지",
    title: "가족과 사는 집, 동네, 집안일 에피소드",
    goalLevel: "IM3-IH-AL",
    surveyBadges: ["가족과 함께 거주", "아파트 거주", "집안일", "이사", "동네"],
    covers: ["집 묘사", "동네 묘사", "가족과의 생활", "집안일", "이사·청소 문제"],
    expectedQuestions: [
      "Describe the place where you live.",
      "Tell me about your neighborhood.",
      "What household chores do you usually do?",
      "Tell me about a change or problem related to your home.",
    ],
    strategy: "거실, 개인 방, 근처 공원과 가게를 기본 배경으로 삼습니다. 가족 생활과 청소 일정을 넣으면 집 묘사, 동네, 과거 경험, 롤플레이까지 연결됩니다.",
    keywords: ["living room", "my room", "nearby park", "grocery store", "cleaning schedule", "family dinner", "comfortable"],
    fillerPhrases: ["You know", "Actually", "The thing is"],
    koreanSummary: "가족과 아파트에 살며 밝은 거실과 제 방을 가장 좋아합니다. 집 근처에는 산책할 공원과 식료품점이 있어 편리합니다. 주말에는 가족과 청소를 나누어 하고, 함께 저녁을 먹으며 집에서 편안하게 쉽니다.",
    englishScript: `You know, I live in an apartment with my family, and it is a comfortable place for all of us. My favorite area is the living room because it gets a lot of natural light in the afternoon. I also have my own room where I can listen to music or rest when I need quiet time.

Actually, the neighborhood is one of the reasons I like living there. There is a small park within walking distance, a grocery store nearby, and several useful cafes. My family often takes a short walk after dinner, so we know many of the streets and small shops around our home.

The thing is, keeping the home comfortable takes some planning. On weekends, we share chores such as vacuuming, organizing the kitchen, and checking our cleaning schedule. Once, we had to change a cleaning appointment because of a family event, so I learned how important it is to explain the situation politely and suggest another time. Even simple home routines make me feel connected to my family.`,
    pointNotes: [
      "방 하나, 공용 공간 하나, 동네 시설 하나를 순서대로 묘사합니다.",
      "housework 경험은 일정 변경 롤플레이의 실제 배경이 됩니다.",
      "comfortable, connected 같은 감정 단어로 설명을 마무리합니다.",
    ],
  },
];

export const scriptGroups = scripts.map((script) => ({
  id: script.id,
  name: script.group,
  title: script.title,
}));
