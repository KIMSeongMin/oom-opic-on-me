const gradeSpeakingPractice = new URL("../assets/magazine/grade-speaking-practice.webp", import.meta.url).href;
const naturalConversation = new URL("../assets/magazine/natural-conversation.webp", import.meta.url).href;
const oomStudyWorkflow = new URL("../assets/magazine/oom-study-workflow.webp", import.meta.url).href;
const strategyStoryPractice = new URL("../assets/magazine/strategy-story-practice.webp", import.meta.url).href;

export type MagazineExample = {
  title: string;
  description?: string;
  lines: string[];
};

export type MagazineArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  example?: MagazineExample;
  note?: { title: string; text: string };
};

export type MagazineArticle = {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  date: string;
  readMinutes: string;
  summary: string;
  image: string;
  imageAlt: string;
  takeaway: string;
  disclaimer?: string;
  sections: MagazineArticleSection[];
};

export const magazineArticles: MagazineArticle[] = [
  {
    id: "opic-2026-strategy",
    category: "학습 전략",
    title: "2026 오픽 준비, 기출 소문보다 먼저 잡아야 할 3가지",
    subtitle: "외운 답을 늘리는 대신, 어떤 질문에도 꺼내 쓸 수 있는 ‘내 장면’을 만드는 법",
    date: "2026.06.21",
    readMinutes: "6분 읽기",
    summary: "최근 문제를 쫓느라 공부가 흔들린다면, 장면·변형·회복의 세 축부터 다시 잡아 보세요. 예상 밖 질문에도 무너지지 않는 답변 설계를 소개합니다.",
    image: strategyStoryPractice,
    imageAlt: "노트를 앞에 두고 자신의 경험을 말로 설명하는 학습자",
    takeaway: "기출은 답안을 베끼는 재료가 아니라, 내 장면에 어떤 입구가 붙을 수 있는지 확인하는 지도입니다.",
    sections: [
      {
        heading: "기출을 외울수록 답이 짧아지는 이유",
        paragraphs: [
          "오픽을 준비하다 보면 ‘이번에는 이 주제가 나왔다’는 후기가 가장 먼저 눈에 들어옵니다. 물론 주제 감각을 익히는 데는 도움이 됩니다. 문제는 그 후기를 문장째 저장해 두고, 시험장에서 질문이 조금만 바뀌어도 다음 문장을 찾느라 멈추는 순간입니다.",
          "실전에서는 하나의 경험을 소개·비교·과거 경험·최근 변화·문제 해결처럼 여러 각도에서 물을 수 있습니다. 따라서 준비의 단위는 질문 하나가 아니라, 질문이 닿을 수 있는 하나의 ‘장면’이어야 합니다. 장면이 선명하면 질문의 입구가 바뀌어도 말의 중심은 유지됩니다.",
        ],
        note: {
          title: "기출을 쓰는 가장 좋은 방식",
          text: "후기를 볼 때는 ‘무슨 답을 했나’ 대신 ‘이 질문은 내 어느 경험과 연결되는가’를 한 줄로 적어 보세요. 이 전환만으로 암기 노트가 장면 노트가 됩니다.",
        },
      },
      {
        heading: "하나의 장면은 네 가지 정보로 완성됩니다",
        paragraphs: [
          "60~90초짜리 이야기는 특별한 사건일 필요가 없습니다. 오히려 내 말로 설명하기 쉬운 평범한 장면이 오래 갑니다. 최근에 갔던 공원, 혼자 정리한 방, 주말마다 듣는 운동 수업처럼 감각이 남아 있는 경험을 고르세요.",
          "선택한 장면은 다음 네 칸으로 정리합니다. 각 칸에 두세 개의 단어만 적어 두면, 스크립트를 외우지 않아도 말의 순서를 되찾을 수 있습니다.",
        ],
        bullets: [
          "배경: 언제, 어디서, 누구와 있었는가",
          "디테일: 보였던 것·들렸던 것·내가 한 행동 하나",
          "작은 변화: 기대와 달랐던 점, 문제, 혹은 계획 변경",
          "의미: 그래서 무엇을 느꼈고 지금은 어떻게 하는가",
        ],
      },
      {
        heading: "질문이 바뀌어도 같은 장면으로 답하는 법",
        paragraphs: [
          "여행 장면 하나를 골랐다고 가정해 보겠습니다. ‘여행지를 설명해 달라’에는 장소와 분위기부터, ‘예전과 지금을 비교해 달라’에는 계획 방식의 변화를 먼저 꺼내면 됩니다. 소재는 같지만 질문에 맞춰 첫 문장과 강조점만 바뀝니다.",
          "이 연습에서 중요한 것은 완벽한 문장보다 ‘다시 돌아오는 문장’을 갖는 일입니다. 중간에 막혀도 배경이나 감정으로 돌아가면 이야기는 계속됩니다. 이 회복 능력이 자연스러운 발화의 뼈대가 됩니다.",
        ],
        example: {
          title: "같은 장면, 다른 시작",
          description: "주말 바닷가 여행이라는 한 장면을 세 질문에 연결해 보세요.",
          lines: [
            "Describe: “One place I still remember clearly is a quiet beach I visited last spring.”",
            "Compare: “I used to plan every hour of a trip, but that beach trip changed my mind.”",
            "Problem: “The funny thing is, the weather changed suddenly, so we had to change our plan.”",
          ],
        },
      },
      {
        heading: "시험 전 30분, 새 소재를 늘리지 않는 루틴",
        paragraphs: [
          "시험 직전에는 새로운 표현을 더 넣기보다 이미 고른 네 장면을 짧게 돌리는 편이 낫습니다. 한 장면당 90초를 재고 말한 뒤, 같은 장면을 45초로 줄여 보세요. 길이를 바꾸는 연습은 질문의 난이도와 시간 압박에 적응하게 해 줍니다.",
          "마지막으로 녹음 한 번을 듣고 ‘문법 오류’보다 ‘멈춘 자리’를 표시합니다. 그 자리에 연결어 하나나 다음 장면으로 돌아가는 문장 하나만 추가하세요. 전부 고치려는 욕심보다, 다음 답변에서 이어 말할 출구를 만드는 편이 훨씬 실전적입니다.",
        ],
      },
    ],
  },
  {
    id: "opic-grade-guide",
    category: "등급 가이드",
    title: "IM·IH·AL, 답변에서 실제로 느껴지는 차이",
    subtitle: "문법 문제집보다 먼저 살펴볼 것: 한 답변이 얼마나 ‘이야기’로 들리는가",
    date: "2026.06.21",
    readMinutes: "7분 읽기",
    summary: "등급은 어려운 단어의 개수보다 내용을 이어 가는 방식에서 갈립니다. 같은 질문을 세 단계로 확장하며, 목표 등급에 맞는 다음 연습을 정리했습니다.",
    image: gradeSpeakingPractice,
    imageAlt: "마이크 앞에서 답변을 연습하며 손으로 설명하는 학습자",
    takeaway: "한 단계 올라가는 핵심은 더 화려하게 말하는 것이 아니라, 상대가 장면을 따라올 수 있도록 한 번 더 구체화하는 것입니다.",
    disclaimer: "공식 채점 산식과 세부 기준은 공개되어 있지 않습니다. 아래 비교는 목표 등급별 학습 방향을 이해하기 위한 실전형 가이드이며, 특정 등급을 보장하지 않습니다.",
    sections: [
      {
        heading: "등급을 ‘문장 난이도’ 하나로 보면 놓치는 것",
        paragraphs: [
          "같은 문법을 써도 답변의 인상은 크게 다릅니다. 질문을 들은 뒤 핵심만 말하고 끝내면 정보는 전달되지만, 듣는 사람에게 장면이 남지는 않습니다. 반대로 배경을 깔고 구체적인 행동 하나를 보여 준 뒤 감정이나 결과를 덧붙이면, 복잡한 어휘가 많지 않아도 훨씬 안정적인 이야기로 들립니다.",
          "그래서 연습을 점검할 때는 ‘틀리지 않았나?’와 함께 ‘내가 왜 그 이야기를 꺼냈는지 들리는가?’를 물어야 합니다. 대답의 길이를 무작정 늘리는 것이 아니라, 질문에 직접 답한 뒤 한 장면을 더 보여 주는 것이 핵심입니다.",
        ],
      },
      {
        heading: "같은 질문을 세 번 확장해 보기",
        paragraphs: [
          "질문이 “Tell me about a place you like to visit.”라고 가정해 보겠습니다. 아래는 정답 예시가 아니라, 답변이 확장되는 방향을 보기 위한 비교입니다. 내 서베이 주제로 바꿔서 소리 내 읽어 보세요.",
        ],
        example: {
          title: "답변의 밀도 비교",
          lines: [
            "IM에 가까운 출발: “I like going to a park near my home. It is quiet and I go there on weekends.”",
            "IH를 향한 확장: “There is a small park near my home, and I usually go there on Sunday mornings. I walk slowly, buy a coffee on the way, and sit near the pond for a while.”",
            "AL을 향한 확장: “What I like about that park is not that it is famous—it is actually very ordinary. But after a busy week, the quiet path and the sound of people walking their dogs make me feel like my weekend has really started.”",
          ],
        },
      },
      {
        heading: "IM에서 IH로: ‘한 문장 더’의 정체",
        paragraphs: [
          "IM 단계에서 가장 먼저 할 일은 질문에 대한 직접 답을 또렷하게 만드는 것입니다. 장소·사람·활동 중 하나를 고르고, 언제 하는지와 이유까지 말해 보세요. 여기까지가 답의 골격입니다.",
          "IH를 목표로 한다면 그 골격 뒤에 관찰 가능한 디테일 하나를 붙입니다. ‘좋았다’ 대신 무엇이 좋았는지, ‘자주 간다’ 대신 언제 어떤 순서로 가는지를 말합니다. 듣는 사람에게 카메라 한 장면을 보여 주는 느낌으로 구체화하면 됩니다.",
        ],
        bullets: [
          "막연한 형용사 하나를 감각 정보 하나로 바꾸기: nice → quiet, sunny, crowded, familiar",
          "행동을 한 번만 더 이어 말하기: go there → walk there, order coffee, call a friend",
          "이유를 개인 경험으로 바꾸기: relaxing → it helps me slow down after work",
        ],
      },
      {
        heading: "IH에서 AL로: 완벽함보다 ‘관점’",
        paragraphs: [
          "AL을 목표로 할수록 문장을 끊김 없이 길게 끌기보다, 자신의 관점과 변화가 드러나는 이야기를 연습하는 편이 좋습니다. 예전과 지금을 비교하거나, 예상과 달랐던 순간을 넣거나, 말하다가 자연스럽게 덧붙이는 식입니다.",
          "작은 실수가 있어도 바로 회복하는 태도도 중요합니다. 단어가 생각나지 않으면 “I can’t remember the exact name, but it was a small local place”처럼 설명으로 우회하세요. 침묵보다 자연스러운 보완이 대화의 흐름을 살립니다.",
        ],
        note: {
          title: "연습의 기준을 바꾸기",
          text: "녹음을 들을 때 오류 개수만 세지 마세요. ‘배경-행동-의미’가 모두 들리는 답변이 몇 개인지 체크하면 다음 연습이 훨씬 선명해집니다.",
        },
      },
      {
        heading: "내 목표 등급에 맞는 15분 연습",
        paragraphs: [
          "IM 목표라면 질문 3개에 대해 30초짜리 직접 답을 만들고, IH 목표라면 그 답마다 구체적인 행동과 감정을 하나씩 보탭니다. AL 목표라면 같은 장면을 비교·문제·최근 변화 질문으로 각각 다시 시작해 보세요.",
          "모든 단계에서 공통으로 필요한 것은 녹음입니다. 말할 때는 괜찮았다고 느껴도, 재생하면 같은 시작 문장이나 긴 정적이 반복되는 경우가 많습니다. 한 번 들은 뒤에는 가장 큰 문제 한 가지만 정해 다음 녹음에서 고치세요.",
        ],
      },
    ],
  },
  {
    id: "oom-full-guide",
    category: "OOM 사용법",
    title: "OOM 100% 활용법: 스크립트에서 실전 답변까지",
    subtitle: "많이 보는 순서가 아니라, 내 답을 실제로 움직이게 만드는 훈련 순서",
    date: "2026.06.21",
    readMinutes: "8분 읽기",
    summary: "서베이 고정부터 실전 녹음까지 OOM의 다섯 단계를 하나의 루틴으로 연결합니다. 앱을 ‘읽는 곳’에서 ‘내 목소리를 고치는 곳’으로 쓰는 방법입니다.",
    image: oomStudyWorkflow,
    imageAlt: "말하기 계획을 색으로 나눈 노트와 녹음 화면을 함께 보는 학습자",
    takeaway: "OOM의 각 단계는 따로 끝내는 체크리스트가 아닙니다. 한 장면을 고르고, 바꿔 말하고, 녹음으로 확인하는 하나의 순환입니다.",
    sections: [
      {
        heading: "시작 전: 목표를 ‘등급’이 아니라 장면으로 적기",
        paragraphs: [
          "‘IH가 필요하다’는 목표는 중요하지만 오늘 무엇을 말할지까지 알려 주지는 않습니다. 첫날에는 서베이에서 고를 주제와, 그 주제에서 꺼낼 수 있는 실제 경험을 연결해 보세요. 예를 들어 운동을 골랐다면 ‘처음 수업에 갔던 날’ 혹은 ‘비 때문에 계획을 바꾼 주말’처럼 한 장면을 정합니다.",
          "장면을 정하면 필요한 어휘가 자연스럽게 좁혀집니다. 생활과 무관한 고급 표현을 쌓는 대신, 내가 실제로 아는 장소·사람·순서를 영어로 말할 수 있게 됩니다. 이 단계에서 솔직함은 전략입니다.",
        ],
      },
      {
        heading: "STEP 1·2: 선택을 고정하고 말의 길이를 정합니다",
        paragraphs: [
          "STEP 1에서는 실제 관심사와 가까운 선택지를 고정해 답변의 재료를 확보합니다. 남들이 많이 고르는 항목이 아니라, 내가 세부 묘사와 작은 사건을 만들 수 있는 항목이 좋은 선택입니다. 한 번 고른 뒤에는 주제를 자주 바꾸지 마세요.",
          "STEP 2에서는 목표 난이도에 맞춰 답변의 기본 길이와 확장 방식을 정합니다. 처음에는 45초로 편하게 말할 수 있는지를 확인하고, 익숙해지면 60~90초까지 확장하세요. 단어를 더 외우기 전 ‘배경-행동-감정’ 세 덩어리가 들어가는지부터 봅니다.",
        ],
        note: {
          title: "좋은 고정의 기준",
          text: "질문을 들었을 때 10초 안에 장소·사람·사건 중 하나가 떠오른다면, 그 주제는 이미 좋은 출발점입니다.",
        },
      },
      {
        heading: "STEP 3: 스크립트는 암기본이 아니라 블록입니다",
        paragraphs: [
          "스크립트 화면에서는 그룹마다 하나의 기본 스토리를 고릅니다. 여기서 중요한 것은 전부 외우는 일이 아니라, 같은 장면을 여는 문장·디테일·문제·마무리 블록으로 나눠 보는 것입니다. 질문이 바뀌면 전체 답을 버리는 대신 필요한 블록만 갈아 끼울 수 있습니다.",
          "처음에는 텍스트를 보고 소리 내 읽고, 다음에는 키워드만 보고 말해 보세요. 마지막에는 질문 변형 탭에서 첫 문장만 바꾼 뒤 나머지 장면으로 자연스럽게 이어 갑니다. 이 순서가 되면 ‘외운 티’가 빠르게 줄어듭니다.",
        ],
        example: {
          title: "블록 한 세트 만들기",
          description: "여행 장면을 예로 들면 다음 네 블록이면 충분합니다.",
          lines: [
            "Open: “One trip I still talk about is…”",
            "Detail: “The part I remember most clearly is…”",
            "Turn: “Things did not go exactly as planned because…”",
            "Close: “Looking back, that is why I would go there again.”",
          ],
        },
      },
      {
        heading: "STEP 4: 롤플레이는 예의 표현보다 문제 해결 순서",
        paragraphs: [
          "롤플레이에서 막히는 이유는 친절한 문장을 몰라서가 아니라, 어떤 정보를 먼저 물어야 할지 흐려지기 때문인 경우가 많습니다. OOM의 공식 흐름처럼 상황을 밝히고, 필요한 정보를 묻고, 대안을 요청하고, 마무리하는 순서를 입에 붙여 보세요.",
          "한 상황을 연습할 때는 부탁 문장 세 개를 외우는 대신, ‘내가 지금 원하는 것’과 ‘상대가 해 줄 수 있는 것’을 한국어로 먼저 한 줄씩 적어 보세요. 그 뒤에 영어 문장을 얹으면 문장 자체를 잊어도 요청의 목적을 잃지 않습니다.",
        ],
      },
      {
        heading: "STEP 5: 녹음은 평가가 아니라 다음 답의 설계도",
        paragraphs: [
          "실전 연습에서는 무작위 질문을 듣고, 완성되지 않은 답이라도 시간 안에 끝까지 말해 보세요. 녹음을 재생할 때는 발음·문법·내용을 한꺼번에 평가하지 않습니다. 첫 번째 재생에서는 멈춘 곳, 두 번째 재생에서는 반복한 단어 하나만 찾습니다.",
          "수정한 뒤 똑같은 질문을 다시 말하지 말고, 비슷한 다른 질문으로 옮겨 보세요. 그래야 방금 고친 연결어와 장면 블록이 실제로 이동 가능한지 확인할 수 있습니다. 이 작은 순환을 매일 한 번만 해도 학습이 ‘읽기’에서 ‘발화’로 넘어갑니다.",
        ],
      },
    ],
  },
  {
    id: "opic-filler-tips",
    category: "표현 클리닉",
    title: "필러는 시간을 버는 말이 아니라, 생각을 연결하는 말",
    subtitle: "‘um’ 대신 자연스럽게 다음 장면으로 넘어가는 영어식 호흡 만들기",
    date: "2026.06.21",
    readMinutes: "5분 읽기",
    summary: "필러를 많이 쓰는 것이 유창함은 아닙니다. 잠깐 생각하고, 방향을 바꾸고, 단어를 회복할 때 쓸 수 있는 표현을 상황별로 정리했습니다.",
    image: naturalConversation,
    imageAlt: "카페에서 친구에게 이야기를 이어 가며 손짓하는 사람",
    takeaway: "좋은 필러는 비어 있는 소리를 채우지 않습니다. 듣는 사람에게 ‘지금부터 어떤 이야기를 할지’를 알려 줍니다.",
    sections: [
      {
        heading: "필러와 군더더기는 다릅니다",
        paragraphs: [
          "말문이 막힐 때 ‘um’, ‘you know’를 반복하면 잠깐의 침묵은 가릴 수 있습니다. 하지만 질문마다 같은 소리가 길어지면 오히려 답의 중심이 흐려집니다. 필러는 습관적인 소음이 아니라, 생각을 정리하거나 관점을 바꾸는 신호로 써야 합니다.",
          "가장 자연스러운 필러는 문장 사이에 의미를 더합니다. 지금 떠올리는 중인지, 앞의 말을 정정하는지, 구체적인 예시로 들어갈 것인지를 알려 주는 표현을 고르면 말의 호흡이 살아납니다.",
        ],
      },
      {
        heading: "상황별로 하나씩만 골라 쓰세요",
        paragraphs: [
          "처음부터 열 개를 외우면 다음 문장을 찾느라 더 멈춥니다. 아래 다섯 역할에서 자기에게 잘 붙는 표현 하나씩만 고르고, 이번 주의 모든 녹음에 반복해 보세요.",
        ],
        bullets: [
          "생각할 때: “Let me think for a second.” — 짧게 말하고 바로 핵심으로 들어갑니다.",
          "관점을 바꿀 때: “Actually, when I think about it…” — 처음 답을 조금 더 정확하게 다듬을 때 좋습니다.",
          "이유를 덧붙일 때: “The thing is…” — 단순한 설명 뒤에 개인적인 이유를 붙입니다.",
          "기억을 회복할 때: “I can’t remember the exact name, but…” — 단어 하나가 막혀도 이야기를 끊지 않습니다.",
          "마무리로 돌아올 때: “Anyway, the point is…” — 곁가지 설명 뒤에 답의 핵심을 다시 잡습니다.",
        ],
      },
      {
        heading: "한 번의 자연스러운 수정이 더 강합니다",
        paragraphs: [
          "시험 답변은 원고 낭독이 아니라 즉석 대화에 가깝습니다. 그래서 말하다가 조금 더 정확한 표현을 찾았을 때, 짧게 방향을 고치는 모습은 오히려 자연스럽습니다. 다만 고친 뒤에는 같은 내용을 처음부터 반복하지 말고 다음 장면으로 넘어가야 합니다.",
        ],
        example: {
          title: "군더더기에서 연결로",
          description: "같은 내용을 더 자연스럽게 이어 보세요.",
          lines: [
            "반복: “Um, you know, it was, um, really nice and, you know, I liked it.”",
            "연결: “Actually, what I liked most was how quiet it was. I could finally slow down after a busy week.”",
            "단어 회복: “It was a small… I can’t remember the exact name, but it was a local bakery near the station.”",
          ],
        },
      },
      {
        heading: "필러를 넣어도 되지 않는 자리",
        paragraphs: [
          "첫 문장과 핵심 정보 앞에서는 짧고 직접적인 답이 더 좋습니다. 질문이 장소 소개라면 “Well, actually, you know…”로 길게 문을 열기보다 장소를 먼저 말하세요. 필러는 내용을 늦추는 장치가 아니라, 이미 시작한 이야기를 부드럽게 잇는 장치입니다.",
          "또한 한 답변에서 같은 표현을 두 번 이상 쓰지 않는 규칙을 정해 보세요. 반복이 보이면 다음 녹음에서는 그 자리를 침묵 1초 혹은 다른 연결어로 바꿉니다. 짧은 침묵은 생각보다 훨씬 자연스럽습니다.",
        ],
        note: {
          title: "5분 드릴",
          text: "아무 질문 하나를 고르고 45초간 답합니다. 두 번째 녹음에서는 필러를 딱 두 번만 쓰되, 각각 ‘관점 전환’과 ‘마무리 복귀’ 역할로만 사용하세요. 녹음을 비교하면 필러의 목적이 귀에 들리기 시작합니다.",
        },
      },
    ],
  },
];
