# Architecture

## Current Additions

- `ExpandableSidebar` owns collapsible parent navigation for the candidate guide, STEP 3 scripts, and STEP 4 role-play. Parent routes render a hub; child routes render the detailed content.
- `ExamGuideHub`, `ExamGuideOverview`, and `ExamGuideDay` provide the guide hub and the visual overview/day-of-exam pages. `ExamGuideDashboard` continues to own the application and results content.
- `ScriptHub` and `ScriptDashboardV2` support two alternative stories per group. `additionalScripts.ts`, `additionalScriptTraining.ts`, and `additionalScriptReplacementGuides.ts` own the optional second story set and its training data.
- `RoleplayHub` and `RoleplayViewV2` organize formulas and scenarios by survey group. `additionalRoleplays.ts` adds indoor/rest and further service scenarios.
- `ExamGuideDashboard` owns the existing application and results detail pages; overview and exam-day have dedicated visual components.
- `src/data/examGuideContent.ts` owns the structured candidate guide and cited effective-date notice. Time-sensitive rules must show a source note and link users to the official website.
- `scripts.ts` remains the default 60-90 second story. Optional stories and their question-specific training data live in the `additionalScript*` data files.

## Runtime Model

OOM은 Vite로 빌드되는 React 단일 페이지 정적 앱입니다. 서버 라우트와 데이터베이스가 없으며, GitHub Pages 또는 임의의 정적 서버의 `dist/` 폴더에서 실행됩니다.

`src/App.tsx`가 현재 `ViewId`와 전역 UI 상태를 소유합니다.

- `activeView`: 현재 화면
- `darkMode`: `oom-theme` 키로 `localStorage`에 저장
- `settings`: 내부 LLM 호출 설정, `oom-llm-settings` 키로 `localStorage`에 저장
- `toast`: 공통 완료/오류 피드백

## Component Boundaries

| 영역 | 소유 컴포넌트 | 책임 |
| --- | --- | --- |
| 앱 프레임 | `AppShell`, `UnifiedSidebar` | 사이드바, 상단 진행 표시, 모바일 메뉴, 화면 전환 |
| 서베이 | `BackgroundSurveySheet` | 전체 선택지 표시, OOM 추천 답안, 연습·채점 |
| 난이도 | `DifficultyGuide` | 5→5 추천과 목표 등급별 말하기 전략 |
| 스크립트 | `ScriptDashboard`, `ScriptDetail`, `MemoryModeToggle`, `TtsControls` | 그룹 선택, 암기 모드, TTS, 복사, AI 변형 |
| 롤플레이 | `RoleplayView` | 공식, 시나리오, 수준별 예시, AI 질문 생성 |
| 실전 연습 | `PracticeView`, `PracticeTimer`, `Recorder` | 랜덤 질문, 타이머, 녹음, 텍스트 답변, AI 피드백 |
| AI 설정 | `AiSettingsView`, `AiSettingsPanel` | 브라우저 로컬 설정 입력과 저장 |

## Data Ownership

데이터는 화면 컴포넌트에 하드코딩하지 않고 `src/data/`에 둡니다.

- `fixedSurvey.ts`: 실제형 서베이의 전체 선택지, OOM 추천 ID, Part 4 선택 수
- `scripts.ts`: 재사용 답변 스크립트
- `questions.ts`: 실전 연습 질문 풀
- `roleplays.ts`: 롤플레이 시나리오와 수준별 차이

## Script Variants

`src/data/scriptVariants.ts` keeps three short examples for every script group. Each example pairs an expected question with a pivot note, retained keywords, and a 30-45 second English response. `ScriptTrainingTabs` presents those examples separately from the main 60-90 second script so learners reuse one scene rather than memorizing unrelated answers.

## Browser and Network APIs

- TTS: Web Speech API
- 녹음: MediaRecorder API, 녹음 파일은 메모리에만 유지
- LLM: `callInternalLlm`이 브라우저에서 내부 endpoint를 직접 호출. CORS가 필요하며 실패 시 앱 내장 fallback을 사용

## Deployment

`.github/workflows/pages.yml`은 `main` push에서 테스트·빌드·Pages artifact 업로드·배포를 수행합니다. 최초 한 번 GitHub 저장소 **Settings → Pages**에서 Source를 **GitHub Actions**로 활성화해야 합니다.
