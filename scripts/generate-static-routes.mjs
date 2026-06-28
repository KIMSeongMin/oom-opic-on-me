import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";

const projectRoot = process.cwd();
const distDir = join(projectRoot, "dist");
const distIndexPath = join(distDir, "index.html");
const siteUrl = "https://opic-on-me.com";
const lastmod = "2026-06-29";

const baseRoutes = [
  {
    path: "/",
    title: "오픽온미 | OPIc 말하기 연습 도구",
    description: "오픽온미에서 OPIc 서베이, 스크립트, 롤플레이, 실전 녹음 연습을 한 흐름으로 준비하세요.",
    heading: "오픽온미",
    content: ["OPIc 말하기를 준비하는 학습자를 위한 브라우저 기반 연습 도구입니다.", "서베이 고정, 난이도 설정, 스크립트 훈련, 롤플레이 공식, 실전 녹음 연습을 한 흐름으로 제공합니다."],
  },
  {
    path: "/exam-guide/",
    title: "OPIc 수험 가이드 | 오픽온미",
    description: "OPIc 시험 소개, 신청, 시험 당일 준비, 성적 확인까지 수험자가 확인할 핵심 흐름을 정리했습니다.",
    heading: "OPIc 수험 가이드",
    content: ["OPIc 시험 준비 과정에서 확인해야 할 시험 구조, 신청, 신분증, 입실, 성적 확인 정보를 한곳에서 살펴봅니다.", "변동 가능한 시험 운영 정보는 최종 응시 전 공식 안내를 다시 확인해야 합니다."],
  },
  {
    path: "/exam-guide/overview/",
    title: "OPIc 소개와 등급 체계 | 오픽온미",
    description: "OPIc 말하기 평가의 기본 흐름과 IM, IH, AL 목표별 연습 방향을 정리했습니다.",
    heading: "OPIc 소개와 등급 체계",
    content: ["OPIc은 실제 상황에서 영어로 경험과 의견을 말하는 능력을 확인하는 말하기 평가입니다.", "오픽온미는 공식 채점표가 아니라 목표 등급별 답변 밀도와 연습 순서를 이해하기 위한 학습 참고 자료를 제공합니다."],
  },
  {
    path: "/exam-guide/apply/",
    title: "OPIc 신청과 응시료 안내 | 오픽온미",
    description: "OPIc 회원가입, 시험 신청, 응시료 확인 과정에서 학습자가 점검할 항목을 정리했습니다.",
    heading: "OPIc 신청과 응시료",
    content: ["시험 신청 전 계정, 시험 일정, 고사장, 응시료, 결제 상태를 확인하는 흐름을 정리합니다.", "일정과 비용은 바뀔 수 있으므로 결제 전 공식 접수 페이지에서 다시 확인해야 합니다."],
  },
  {
    path: "/exam-guide/day/",
    title: "OPIc 시험 당일 준비 | 오픽온미",
    description: "OPIc 시험 당일 신분증, 입실 시간, 오리엔테이션과 본시험 흐름을 준비할 수 있도록 안내합니다.",
    heading: "OPIc 시험 당일 준비",
    content: ["시험 당일에는 규정 신분증, 입실 시간, 오리엔테이션, 본시험 진행 순서를 미리 확인하는 것이 중요합니다.", "오픽온미는 수험 준비를 돕는 비공식 학습 참고 자료입니다."],
  },
  {
    path: "/exam-guide/results/",
    title: "OPIc 성적 확인과 인증서 | 오픽온미",
    description: "OPIc 성적 발표, 인증서, 쿠폰 관련 확인 흐름을 학습자 관점에서 정리했습니다.",
    heading: "OPIc 성적 확인과 인증서",
    content: ["성적 발표 시점, 인증서 확인, 쿠폰 사용 여부는 응시 시점과 운영 정책에 따라 달라질 수 있습니다.", "최종 정보는 공식 안내 페이지를 기준으로 확인하세요."],
  },
  {
    path: "/exam-guide/faq/",
    title: "OPIc 자주 묻는 질문 | 오픽온미",
    description: "OPIc 준비 과정에서 자주 나오는 질문과 시험 전 확인할 내용을 정리했습니다.",
    heading: "OPIc 자주 묻는 질문",
    content: ["시험 준비, 신청, 시험 당일, 성적 확인 과정에서 자주 묻는 질문을 학습자 관점으로 정리했습니다.", "공식 기관과 제휴된 답변이 아니며 학습 참고용 안내입니다."],
  },
  {
    path: "/training/",
    title: "OPIc 실전 훈련하기 | 오픽온미",
    description: "서베이 고정부터 스크립트, 롤플레이, 실전 녹음까지 OPIc 말하기 훈련 단계를 제공합니다.",
    heading: "OPIc 실전 훈련하기",
    content: ["오픽온미의 훈련 흐름은 STEP 1 서베이 고정, STEP 2 난이도 설정, STEP 3 스크립트, STEP 4 롤플레이, STEP 5 실전 연습으로 이어집니다.", "답변을 통째로 암기하기보다 하나의 장면을 여러 질문에 맞게 변형하는 연습을 목표로 합니다."],
  },
  {
    path: "/training/survey/",
    title: "OPIc 서베이 고정 가이드 | 오픽온미",
    description: "OPIc Background Survey를 참고한 연습용 고정 선택 조합으로 답변 범위를 좁히는 방법을 안내합니다.",
    heading: "STEP 1. 서베이 고정",
    content: ["OPIc Background Survey의 일반적인 진행 순서를 참고해 만든 연습용 고정 선택본입니다.", "시험 당일 실제 화면 표현은 운영 시점에 따라 달라질 수 있습니다."],
  },
  {
    path: "/training/difficulty/",
    title: "OPIc 난이도 5-5 연습 전략 | 오픽온미",
    description: "OPIc 난이도 선택과 목표 등급별 말하기 길이, 답변 밀도를 연습하는 방법을 정리했습니다.",
    heading: "STEP 2. 난이도 설정",
    content: ["오픽온미는 5-5 설정을 기준으로 답변 길이와 구체성을 점검하는 연습 흐름을 제공합니다.", "실제 시험 선택은 개인 상황에 맞춰 결정해야 합니다."],
  },
  {
    path: "/training/scripts/",
    title: "OPIc 만능 스크립트 훈련 | 오픽온미",
    description: "OPIc 답변을 통째로 외우기보다 장면과 블록 중심으로 재사용하는 스크립트 훈련 방식입니다.",
    heading: "STEP 3. 만능 스크립트",
    content: ["스크립트 그룹은 추가 암기 목록이 아니라 선택형 이야기 세트입니다.", "하나의 60-90초 장면을 질문 유형별 변형과 같은 흐름으로 연결해 연습합니다."],
  },
  {
    path: "/training/scripts/outdoor/",
    title: "OPIc 야외·여행 스크립트 | 오픽온미",
    description: "야외 활동과 여행 장면을 활용해 OPIc 질문에 답하는 스크립트 훈련 페이지입니다.",
    heading: "야외·여행 스크립트",
    content: ["야외와 여행 경험을 하나의 장면으로 정리하고 묘사, 비교, 문제 해결 질문에 맞게 변형합니다.", "장소, 사람, 사건, 마무리 감정을 블록으로 나눠 연습합니다."],
  },
  {
    path: "/training/scripts/indoor/",
    title: "OPIc 실내·휴식 스크립트 | 오픽온미",
    description: "카페, 집 근처 휴식, 실내 활동을 바탕으로 OPIc 답변 장면을 구성합니다.",
    heading: "실내·휴식 스크립트",
    content: ["실내와 휴식 장면은 일상적인 감각 묘사와 최근 변화 질문에 연결하기 좋습니다.", "짧은 장면을 정해 여러 질문의 출발점으로 재사용합니다."],
  },
  {
    path: "/training/scripts/sports/",
    title: "OPIc 운동·취미 스크립트 | 오픽온미",
    description: "운동과 취미 경험을 시작 계기, 루틴, 장비, 향상 질문으로 확장하는 연습 페이지입니다.",
    heading: "운동·취미 스크립트",
    content: ["운동과 취미 주제는 시작 계기, 반복 루틴, 최근 향상 경험으로 답변을 확장하기 좋습니다.", "같은 경험을 질문 유형에 따라 자연스럽게 재조립합니다."],
  },
  {
    path: "/training/scripts/home/",
    title: "OPIc 집·거주지 스크립트 | 오픽온미",
    description: "집과 거주지 경험을 OPIc 묘사, 비교, 문제 해결 질문에 연결하는 스크립트 훈련입니다.",
    heading: "집·거주지 스크립트",
    content: ["집과 거주지 장면은 위치, 생활 패턴, 변화, 문제 상황을 연결해 말하기 좋은 주제입니다.", "일상적인 공간을 구체적인 경험으로 바꿔 답변의 중심 장면을 만듭니다."],
  },
  {
    path: "/roleplay/",
    title: "OPIc 롤플레이 훈련 | 오픽온미",
    description: "OPIc 롤플레이 질문에 문제 설명, 정보 질문, 대안 요청, 감사로 답하는 연습 흐름입니다.",
    heading: "STEP 4. 롤플레이 훈련",
    content: ["롤플레이는 정중한 문제 설명, 필요한 정보 질문, 가능한 대안 요청, 마무리 감사의 구조로 연습합니다.", "오픽온미는 상황별 예시와 6단계 공식을 제공합니다."],
  },
  {
    path: "/roleplay/formula/",
    title: "OPIc 롤플레이 공식 | 오픽온미",
    description: "문제 설명부터 대안 요청까지 OPIc 롤플레이 답변의 6단계 구조를 정리했습니다.",
    heading: "롤플레이 공식과 출제 구조",
    content: ["상황을 밝히고, 문제를 설명하고, 필요한 정보를 묻고, 대안을 요청하고, 감사로 마무리하는 흐름을 연습합니다.", "공식은 암기 문장이 아니라 낯선 상황에서도 답변 순서를 잃지 않기 위한 구조입니다."],
  },
  {
    path: "/roleplay/travel/",
    title: "OPIc 여행 롤플레이 | 오픽온미",
    description: "여행, 예약, 이동 상황에서 활용할 수 있는 OPIc 롤플레이 시나리오를 연습합니다.",
    heading: "여행 롤플레이",
    content: ["여행 서비스 상황에서 문제를 설명하고 직원에게 가능한 해결 방법을 묻는 연습을 합니다.", "예약 변경, 일정 문제, 대안 요청 같은 흐름에 연결됩니다."],
  },
  {
    path: "/roleplay/indoor/",
    title: "OPIc 실내 서비스 롤플레이 | 오픽온미",
    description: "카페, 식당, 실내 활동 상황에서 OPIc 롤플레이 질문에 답하는 연습 페이지입니다.",
    heading: "실내 서비스 롤플레이",
    content: ["카페와 식당 같은 실내 서비스 상황은 정중한 문제 설명과 대안 요청을 연습하기 좋습니다.", "문제 해결 목적을 먼저 잡고 필요한 정보를 질문합니다."],
  },
  {
    path: "/roleplay/sports/",
    title: "OPIc 운동·수업 롤플레이 | 오픽온미",
    description: "운동 시설, 수업 예약, 장비 문제 상황을 바탕으로 OPIc 롤플레이를 연습합니다.",
    heading: "운동·수업 롤플레이",
    content: ["운동 시설이나 수업 상황에서는 일정, 장비, 예약 문제를 정중하게 설명하는 연습이 필요합니다.", "대안 요청과 감사 표현까지 한 흐름으로 말합니다."],
  },
  {
    path: "/roleplay/home/",
    title: "OPIc 집·거주지 롤플레이 | 오픽온미",
    description: "이사, 청소, 수리 같은 집과 거주지 상황을 OPIc 롤플레이 구조로 연습합니다.",
    heading: "집·거주지 롤플레이",
    content: ["집과 거주지 상황은 수리, 청소, 이사, 일정 변경 같은 문제 해결 질문으로 이어질 수 있습니다.", "상황을 짧게 설명하고 가능한 선택지를 묻는 구조를 연습합니다."],
  },
  {
    path: "/practice/",
    title: "OPIc 실전 연습 | 오픽온미",
    description: "랜덤 질문, 타이머, 녹음, 텍스트 답변과 AI 피드백으로 OPIc 실전 답변을 연습합니다.",
    heading: "STEP 5. 실전 연습",
    content: ["랜덤 질문을 받고 제한 시간 안에 답변한 뒤, 녹음과 텍스트 답변으로 다시 점검합니다.", "AI 피드백은 사용자가 직접 설정한 외부 LLM 연결을 통해 선택적으로 사용할 수 있습니다."],
  },
  {
    path: "/magazine/",
    title: "오픽 매거진 | 오픽온미",
    description: "OPIc 학습 전략, 자기소개, 목표 등급, 필러 표현, 오픽온미 활용법을 담은 학습 아티클입니다.",
    heading: "오픽 매거진",
    content: ["OPIc 학습자가 자주 고민하는 자기소개, 목표 등급, 스크립트 훈련, 필러 표현을 아티클로 정리했습니다.", "모든 글은 학습 참고용이며 공식 시험기관의 보증 자료가 아닙니다."],
  },
  {
    path: "/ai-settings/",
    title: "AI 피드백 설정 | 오픽온미",
    description: "브라우저 localStorage에만 저장되는 사용자 제공 LLM endpoint와 요청 형식을 설정합니다.",
    heading: "AI 피드백 설정",
    content: ["AI 피드백 설정은 사용자가 직접 제공한 endpoint, API key, 모델명, 요청 형식을 브라우저 localStorage에 저장합니다.", "오픽온미는 API key를 서버에 저장하지 않습니다."],
    noindex: true,
  },
];

const magazineRoutes = [
  {
    path: "/magazine/opic-2026-strategy/",
    title: "OPIc 2026 준비 전략 | 오픽온미",
    description: "2026년 OPIc 시험을 준비하는 학습자를 위한 목표 등급별 연습 전략과 스크립트 훈련 방법을 정리했습니다.",
    heading: "2026 OPIc 준비 전략, 기출 질문보다 먼저 잡아야 할 3가지",
    content: ["최근 문제를 많이 찾아보는 것보다 하나의 장면을 여러 질문에 맞게 변형하는 연습이 중요합니다.", "60-90초로 말할 수 있는 개인 경험을 정하고, 묘사, 비교, 문제 해결 질문에 같은 장면을 연결해 보세요."],
    type: "article",
  },
  {
    path: "/magazine/opic-self-introduction-strategy/",
    title: "OPIc 자기소개 전략 | 오픽온미",
    description: "OPIc 자기소개를 길게 외우기보다 첫 목소리를 안정시키는 짧은 워밍업으로 준비하는 방법입니다.",
    heading: "OPIc 자기소개, 꼭 해야 할까? 외워도 될까?",
    content: ["자기소개는 점수를 만드는 긴 답변이라기보다 시험 첫 목소리를 안정시키는 워밍업에 가깝습니다.", "20-30초 안에 현재 상태, 연결 소재, 말하기 태도를 간단히 보여 주세요."],
    type: "article",
  },
  {
    path: "/magazine/opic-grade-guide/",
    title: "OPIc 등급별 답변 차이 | 오픽온미",
    description: "IM, IH, AL 목표에 따라 OPIc 답변의 구체성, 길이, 연결 방식이 어떻게 달라지는지 정리했습니다.",
    heading: "IM·IH·AL, 답변에서 실제로 달라지는 차이",
    content: ["등급 목표가 올라갈수록 어려운 단어보다 경험의 구체성, 감정, 변화, 연결 방식이 중요해집니다.", "같은 질문도 장소, 행동, 이유, 결과를 얼마나 자연스럽게 이어 가는지가 답변 인상을 바꿉니다."],
    type: "article",
  },
  {
    path: "/magazine/oom-full-guide/",
    title: "오픽온미 사용법 | 오픽온미",
    description: "서베이 고정부터 스크립트, 롤플레이, 실전 녹음까지 오픽온미 학습 흐름을 안내합니다.",
    heading: "오픽온미 100% 사용법",
    content: ["오픽온미는 체크리스트를 끝내는 도구가 아니라 하나의 장면을 고르고, 바꿔 말하고, 녹음으로 확인하는 연습 흐름입니다.", "STEP 1부터 STEP 5까지 반복하면 같은 경험을 여러 질문에 맞게 조립하는 감각을 만들 수 있습니다."],
    type: "article",
  },
  {
    path: "/magazine/opic-filler-tips/",
    title: "OPIc 필러 표현 팁 | 오픽온미",
    description: "OPIc 답변에서 시간을 벌기보다 생각을 자연스럽게 연결하는 필러 표현 사용법을 정리했습니다.",
    heading: "필러는 시간을 버는 말이 아니라 생각을 연결하는 말",
    content: ["좋은 필러는 빈 소리를 채우는 말이 아니라 다음 장면으로 넘어갈 방향을 알려 주는 표현입니다.", "Let me think, actually, the thing is 같은 표현을 상황에 맞게 한두 개만 골라 연습하세요."],
    type: "article",
  },
];

const legalRoutes = [
  {
    path: "/about/",
    title: "소개 | 오픽온미",
    description: "OPIc 학습 도구 오픽온미의 목적, 제공 기능, 대상 사용자를 안내합니다.",
    heading: "오픽온미 소개",
    content: ["오픽온미는 OPIc 말하기 시험을 준비하는 학습자를 위한 개인 연습용 웹 도구입니다.", "공식 시험기관과 제휴하거나 인증받은 서비스가 아니며, 등급 취득이나 특정 결과를 보장하지 않습니다."],
  },
  {
    path: "/privacy/",
    title: "개인정보처리방침 | 오픽온미",
    description: "오픽온미의 개인정보 처리, 쿠키, Google 광고 쿠키, 제3자 광고 및 문의 방법을 안내합니다.",
    heading: "개인정보처리방침",
    content: ["오픽온미는 회원가입이나 자체 서버 로그인을 제공하지 않습니다. 사용자가 입력한 내부 LLM 설정은 현재 브라우저의 localStorage에만 저장됩니다.", "Google AdSense를 포함한 광고 서비스는 쿠키 또는 유사 기술을 사용해 광고를 게재할 수 있습니다.", "개인정보 관련 문의는 contact@opic-on-me.com 으로 보내 주세요. 이 방침의 시행일은 2026년 6월 29일입니다."],
  },
  {
    path: "/contact/",
    title: "문의 | 오픽온미",
    description: "오픽온미 서비스 관련 문의와 콘텐츠 정정 요청을 보내는 방법입니다.",
    heading: "문의",
    content: ["서비스 이용 문의, 콘텐츠 오류 제보, 개인정보 관련 요청은 contact@opic-on-me.com 으로 보내 주세요.", "문의 시 확인이 필요한 페이지 주소와 상황을 함께 적어 주시면 더 정확히 확인할 수 있습니다."],
  },
  {
    path: "/terms/",
    title: "이용약관 | 오픽온미",
    description: "오픽온미 이용 시 주의사항, 학습 참고용 고지, 비공식 관계를 안내합니다.",
    heading: "이용약관",
    content: ["오픽온미는 OPIc 말하기 연습을 돕는 학습 참고용 서비스입니다.", "ETS, ACTFL, OPIc 운영기관 또는 관련 공식 기관과 제휴, 인증, 후원 관계에 있지 않습니다.", "특정 등급, 합격, 성적 향상은 보장하지 않습니다."],
  },
];

const routes = [...baseRoutes, ...magazineRoutes, ...legalRoutes];

function ensureDir(path) {
  if (!existsSync(path)) mkdirSync(path, { recursive: true });
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function canonicalFor(path) {
  return `${siteUrl}${path}`;
}

function staticBody(route) {
  const paragraphs = route.content.map((paragraph) => `      <p>${escapeHtml(paragraph)}</p>`).join("\n");
  return `<main class="seo-static-content" aria-label="${escapeHtml(route.heading)}">
    <h1>${escapeHtml(route.heading)}</h1>
${paragraphs}
  </main>`;
}

function injectSeo(html, route) {
  const canonical = canonicalFor(route.path);
  const ogType = route.type ?? "website";
  const robots = route.noindex ? '    <meta name="robots" content="noindex,follow" />\n' : "";
  const meta = `    <title>${escapeHtml(route.title)}</title>
    <meta name="description" content="${escapeHtml(route.description)}" />
    <link rel="canonical" href="${escapeHtml(canonical)}" />
    <meta property="og:title" content="${escapeHtml(route.title)}" />
    <meta property="og:description" content="${escapeHtml(route.description)}" />
    <meta property="og:url" content="${escapeHtml(canonical)}" />
    <meta property="og:type" content="${escapeHtml(ogType)}" />
${robots}`;
  let next = html
    .replace(/\s*<title>[\s\S]*?<\/title>\s*/g, "\n")
    .replace(/\s*<meta name="description"[^>]*>\s*/g, "\n")
    .replace(/\s*<meta name="keywords"[^>]*>\s*/g, "\n")
    .replace(/\s*<link rel="canonical"[^>]*>\s*/g, "\n")
    .replace(/\s*<meta property="og:title"[^>]*>\s*/g, "\n")
    .replace(/\s*<meta property="og:description"[^>]*>\s*/g, "\n")
    .replace(/\s*<meta property="og:url"[^>]*>\s*/g, "\n")
    .replace(/\s*<meta property="og:type"[^>]*>\s*/g, "\n")
    .replace(/\s*<meta name="robots"[^>]*>\s*/g, "\n");
  next = next.replace("</head>", `${meta}  </head>`);
  next = next.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">\n${staticBody(route)}\n    </div>`);
  return next;
}

function targetFor(path) {
  if (path === "/") return distIndexPath;
  const cleanPath = path.replace(/^\/|\/$/g, "");
  return join(distDir, cleanPath, "index.html");
}

function writeRouteHtml(baseHtml, route) {
  const target = targetFor(route.path);
  ensureDir(dirname(target));
  writeFileSync(target, injectSeo(baseHtml, route), "utf8");
  console.log("written", target);
}

function generateSitemap() {
  const urls = routes
    .filter((route) => !route.noindex)
    .map((route) => {
      const depth = route.path.split("/").filter(Boolean).length;
      const priority = route.path === "/" ? "1.0" : depth <= 2 ? "0.8" : "0.6";
      return `  <url>
    <loc>${canonicalFor(route.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  writeFileSync(join(distDir, "sitemap.xml"), sitemap, "utf8");
  console.log("updated dist/sitemap.xml");
}

if (!existsSync(distIndexPath)) {
  throw new Error("dist/index.html does not exist. Run vite build before generating static routes.");
}

const baseHtml = readFileSync(distIndexPath, "utf8");
for (const route of routes) {
  writeRouteHtml(baseHtml, route);
}
generateSitemap();
console.log("Static SEO route generation complete.");
