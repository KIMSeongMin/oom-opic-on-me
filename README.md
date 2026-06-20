# OOM | OPIc On Me

## OPIc 수험 가이드

OOM의 **OPIc 수험 가이드** 화면에서 등급 체계, 시험 신청 흐름, 시험 방식, 성적 확인, 당일 체크리스트와 공식 링크를 확인할 수 있습니다. 응시료·일정·마감·수험 준비물처럼 변동 가능한 정보는 반드시 [OPIc 공식 사이트](https://www.opic.or.kr/opics/jsp/view/index.jsp)의 최신 안내를 확인합니다.

"오픽은 나에게 맡겨"라는 뜻의 OOM(OPIc On Me)은 사내 구성원이 OPIc 영어 말하기를 체계적으로 연습할 수 있는 정적 웹앱입니다. 서베이 선택을 고정하고, 재사용 가능한 장면을 스크립트 그룹으로 묶어 IM3·IH·AL 목표의 말하기 훈련을 돕습니다.

## 주요 기능

- OPIc Background Survey 추천 선택과 스크립트 그룹 연결
- 추천 난이도 5 → 5 및 목표 등급별 말하기 전략
- 야외/여행, 실내/휴식, 운동/취미, 집/거주지 만능 스크립트
- 전체·블라인드·키워드 암기 모드, filler 강조, TTS, 복사
- 롤플레이 6단계 공식과 호텔·항공권·테니스 코트·청소 일정 시나리오
- 랜덤 질문, 60/90/120초 타이머, 브라우저 내 녹음과 재생
- 런타임 내부 LLM 설정, 스크립트 변형, 답변 피드백, 롤플레이 질문 생성
- 다크모드, 모바일 사이드 메뉴, GitHub Pages 배포 workflow

- 만능 스크립트의 메인 스토리, 질문별 30-45초 변형 예제, 답변 설계 탭

## 설치와 로컬 실행

Node.js 20 이상을 권장합니다.

```bash
npm install
npm run dev
```

터미널에 표시되는 로컬 URL(일반적으로 `http://localhost:5173`)을 브라우저에서 엽니다.

## 테스트와 빌드

```bash
npm run test
npm run build
npm run preview
```

`npm run build` 결과는 `dist` 폴더에 생성됩니다. 이 폴더는 사내 정적 웹 서버, Nginx, Apache 등 임의의 정적 호스팅에 그대로 업로드할 수 있습니다.

## GitHub Pages 배포

1. GitHub 저장소 `natekeem/oom`를 사용합니다.
2. 이 프로젝트를 `main` 브랜치에 push합니다.
3. 저장소의 **Settings → Pages**에서 Source를 **GitHub Actions**로 선택합니다.
4. `.github/workflows/pages.yml` workflow가 테스트·빌드 후 Pages에 자동 배포합니다.

처음 배포에서 `Failed to create deployment (404)`가 나오면 Pages가 아직 비활성화된 상태입니다. 위의 Source 설정을 저장한 뒤, Actions의 **Re-run jobs**를 누르거나 `main`에 새 커밋을 push하면 배포가 시작됩니다.

Vite의 `base`는 `./`로 설정되어 있어 GitHub Pages 저장소 경로와 사내 정적 경로 모두에서 에셋 경로가 깨지지 않습니다.

현재 GitHub Pages 주소는 `https://natekeem.github.io/oom/`입니다.

배포 URL에서 `GET /src/main.tsx 404`가 보이면 Pages가 `Deploy from a branch`로 설정된 것입니다. **Settings → Pages → Source → GitHub Actions**로 변경해야 Actions가 만든 `dist/` artifact가 서비스됩니다.

## 코드 에이전트 문서

새로운 코드 에이전트는 작업 전 [AGENTS.md](AGENTS.md)를 먼저 읽습니다. 아키텍처와 화면 라우팅은 `docs/ARCHITECTURE.md`, `docs/ROUTING.md`에 정리되어 있으며, 현재 파일과 npm script 목록은 아래 명령으로 갱신합니다.

```bash
npm run docs:generate
npm run docs:check
```

Claude Code는 `CLAUDE.md`, Roo Code는 `.roo/rules/oom-project.md`를 통해 같은 작업 규칙으로 연결됩니다.

`npm run verify:pages`는 빌드된 `dist/index.html`이 개발용 `/src/main.tsx`가 아닌 번들 asset을 참조하는지 확인합니다.

## 내부 LLM 설정

앱의 **AI 피드백 / 설정** 화면에서 아래 값을 입력하고 저장합니다.

- API Endpoint URL
- API Key 또는 Authorization Token
- Model Name
- Authorization 방식: Bearer token / `x-api-key` / No auth
- 요청 형식: OpenAI-compatible / Generic chat messages / Custom JSON

Custom JSON 예시:

```json
{
  "model": {model},
  "messages": {messages},
  "temperature": 0.4
}
```

`{model}`, `{messages}`, `{system}`, `{user}` 토큰은 JSON 값으로 치환됩니다. 설정은 브라우저 `localStorage`에만 저장되며 소스 코드나 커밋에 포함되지 않습니다. 브라우저에서 API를 직접 호출하므로 대상 API의 CORS 허용이 필요합니다.

## 브라우저 권한

- **마이크**: 실전 연습의 녹음 시작 시 권한을 요청합니다. 오디오는 서버에 저장되지 않고 브라우저 메모리에만 유지됩니다.
- **TTS**: Web Speech API로 영어 스크립트를 읽습니다. 브라우저 및 OS별 음성 품질과 사용 가능한 음성이 다를 수 있습니다.

## 알려진 제한사항

- TTS와 MediaRecorder 지원 범위는 브라우저마다 다릅니다.
- 음성 인식(STT)은 호환성 차이 때문에 텍스트 답변 입력을 기본 흐름으로 제공합니다.
- 내부 LLM Endpoint는 CORS를 허용해야 하며, 응답 형식에 따라 Custom JSON 설정이 필요할 수 있습니다.
- 이 앱은 말하기 훈련 도구이며 실제 OPIc 점수나 등급을 보장하지 않습니다.
