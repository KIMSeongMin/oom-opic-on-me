# OOM | OPIc On Me

OOM은 사내 구성원이 OPIc 영어 말하기를 체계적으로 연습하도록 돕는 정적 웹앱입니다. 백엔드 없이 브라우저에서 동작하며, 서베이 고정, 난이도 설정, 재사용 가능한 스토리, 롤플레이, 녹음, AI 피드백을 하나의 흐름으로 제공합니다.

이 앱은 실제 점수나 등급을 보장하지 않습니다. 익숙한 경험을 여러 질문에 연결하고 자연스럽게 말하는 구조를 반복 연습하는 데 초점을 둡니다.

## 핵심 흐름

### OPIc 수험 가이드

신청 전 확인할 정보와 시험 당일 준비를 정리한 정보 영역입니다.

- 시험 소개와 등급 체계
- 회원가입, 시험 신청, 응시료
- 규정 신분증, 입실 통제, OT와 본시험 흐름
- 성적 발표, 인증서, 세이빙 쿠폰

변경될 수 있는 일정, 응시료, 신분증 규정은 각 화면의 공식 링크를 통해 OPIc 공식 사이트에서 다시 확인해야 합니다.

### OPIc 실전 훈련하기

실제 훈련은 사이드바의 **OPIc 실전 훈련하기** 아래 STEP 1~5로 구성됩니다.

1. **서베이 고정**: 실제형 설문 목록에서 OOM 추천 조합을 확인하고 연습 모드로 외웁니다.
2. **난이도 설정**: 기본 추천인 5-5와 목표 등급별 말하기 초점을 확인합니다.
3. **만능 스크립트**: 야외/여행, 실내/휴식, 운동/취미, 집/거주지 그룹에서 말하기 편한 스토리 한 세트를 선택합니다.
4. **롤플레이 공식**: 문제 설명, 정보 질문, 대안 요청, 감사의 6단계 구조를 상황별로 연습합니다.
5. **실전 연습**: 랜덤 질문, 60/90/120초 타이머, 녹음, 텍스트 답변, AI 피드백을 사용합니다.

STEP 3의 두 스토리 세트는 둘 다 외워야 하는 숙제가 아닙니다. 한 그룹에서 자신의 경험과 어휘에 더 잘 맞는 한 세트를 골라 깊게 연습하는 선택지입니다.

## 기능

- 다크 모드와 반응형 접이식 사이드바
- 훈련 화면에서만 보이는 상단 진행 표시와 다음 단계 이동
- 스크립트 전체/블라인드/키워드 암기 모드
- Web Speech API 기반 영어 TTS와 속도 조절
- 클립보드 복사 피드백
- MediaRecorder 기반 브라우저 내 녹음 및 재생
- 브라우저 `localStorage` 기반 내부 LLM 설정
- 스크립트 자연스러운 변형, 답변 피드백, 롤플레이 질문 생성

## 기술 구성

- Vite, React, TypeScript
- Tailwind CSS, Framer Motion, Lucide React
- Vitest, Testing Library
- React state 기반 `ViewId` 라우팅
- GitHub Pages와 일반 정적 호스팅 지원

## 설치와 로컬 실행

Node.js 20 이상을 권장합니다.

```bash
npm install
npm run dev
```

기본 개발 주소는 `http://localhost:5173`입니다.

## 검증과 빌드

```bash
npm run lint
npm run test
npm run build
npm run verify:pages
npm run preview
```

`npm run build`는 `dist/`에 정적 산출물을 생성합니다. `npm run verify:pages`는 빌드 결과가 개발용 `src/main.tsx`가 아니라 번들 자산을 참조하는지 확인합니다.

## GitHub Pages 배포

이 저장소는 `main` 브랜치 푸시 시 `.github/workflows/pages.yml`로 테스트, 빌드, Pages 아티팩트 검증, 배포를 실행합니다.

1. 저장소 **Settings > Pages**에서 Source를 **GitHub Actions**로 설정합니다.
2. `main`에 푸시합니다.
3. Actions의 `Deploy OOM to GitHub Pages` workflow 완료 후 Pages 주소를 확인합니다.

현재 설정은 상대 경로 Vite base(`./`)를 사용하므로, GitHub Pages뿐 아니라 사내 정적 서버에 `dist/` 폴더를 그대로 업로드해도 동작합니다.

현재 Pages 주소: [https://natekeem.github.io/oom/](https://natekeem.github.io/oom/)

## 내부 LLM 설정

**AI 피드백 / 설정** 화면에서 다음 값을 입력합니다.

- API Endpoint URL
- API Key 또는 Authorization Token
- Model Name
- 인증 방식: Bearer token / `x-api-key` / No auth
- 요청 형식: OpenAI-compatible / Generic chat messages / Custom JSON

Custom JSON에서는 `{model}`, `{messages}`, `{system}`, `{user}` 토큰을 사용할 수 있습니다.

설정은 현재 브라우저의 `localStorage`에만 저장됩니다. 실제 API 키를 소스, 문서 예시, 테스트, 커밋에 넣지 마세요. 브라우저에서 직접 API를 호출하므로 대상 API는 CORS 요청을 허용해야 합니다.

## 브라우저 권한과 제한

- **마이크**: 녹음 시작 시 권한이 필요합니다. 녹음 Blob은 서버에 저장하지 않고 브라우저 메모리에서만 유지합니다.
- **TTS**: Web Speech API와 영어 음성의 품질, 사용 가능 여부는 브라우저와 OS에 따라 다릅니다.
- **MediaRecorder**: 브라우저별 지원 범위가 다릅니다. 지원하지 않는 환경에서는 안내 메시지를 표시합니다.
- **LLM**: 네트워크 오류, 인증 오류, 응답 형식 차이, CORS 오류는 앱에 표시됩니다. LLM을 설정하지 않아도 내장 스크립트, 시나리오, 질문 풀로 연습할 수 있습니다.
- **시험 정보**: 응시료, 일정, 신분증, 성적 발표 일정은 변경될 수 있으므로 최종 신청 전 OPIc 공식 사이트를 확인해야 합니다.

## 개발 문서

코드 에이전트나 기여자는 다음 순서로 문서를 확인합니다.

1. `AGENTS.md`
2. `docs/ARCHITECTURE.md`
3. `docs/ROUTING.md`
4. `docs/PROJECT_SNAPSHOT.md`

파일 구조나 package script가 바뀌면 아래 명령으로 스냅샷을 갱신합니다.

```bash
npm run docs:generate
npm run docs:check
```
