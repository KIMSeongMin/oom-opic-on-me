# OOM Agent Guide

`OOM (OPIc On Me)`은 사내 OPIc 말하기 훈련을 위한 Vite + React 정적 웹앱입니다. 백엔드가 없으며, 브라우저 API와 사용자가 입력한 내부 LLM 설정만 사용합니다.

## Read This First

작업을 시작하기 전에 아래 순서로 읽습니다.

1. `README.md` - 설치, 실행, 배포, 브라우저 권한
2. `docs/ARCHITECTURE.md` - 화면과 상태, 데이터, 브라우저 기능의 경계
3. `docs/ROUTING.md` - `ViewId` 기반 탭 라우팅과 화면 소유 컴포넌트
4. `docs/PROJECT_SNAPSHOT.md` - 현재 파일 및 npm script 스냅샷
5. 수정하려는 기능의 컴포넌트와 대응하는 `src/data/*.ts`

## Non-Negotiable Constraints

- 앱은 GitHub Pages와 사내 정적 호스팅에서 동작해야 합니다. 서버 전용 코드, 비밀 키, 런타임 환경 의존성을 추가하지 않습니다.
- 내부 LLM API 키는 `localStorage` 런타임 설정에만 둡니다. 코드, 테스트, README 예시, 커밋에 실제 키를 넣지 않습니다.
- UI는 한국어 중심이며, zinc/slate 기반에 indigo·emerald·amber를 보조색으로 사용합니다.
- STEP 1~5의 사이드바 항목은 동일한 상위 버튼 패턴을 유지합니다. STEP 3의 그룹은 하위 선택지일 뿐 별도 섹션 제목처럼 만들지 않습니다.
- `BackgroundSurveySheet`는 실제형 선택지 전체를 보여 주되, OOM 고정 조합과 연습 모드의 정답 데이터는 반드시 `src/data/fixedSurvey.ts`에서만 관리합니다.
- 기존 기능과 무관한 대규모 리팩터링을 피하고, 접근 가능한 버튼 이름·키보드 포커스·로딩/에러 상태를 보존합니다.

## Architecture At A Glance

- 앱 진입: `src/main.tsx` → `src/App.tsx`
- 화면 전환: React state의 `ViewId`; React Router를 사용하지 않습니다.
- 공통 프레임: `src/components/layout/AppShell.tsx`, `src/components/layout/UnifiedSidebar.tsx`
- 콘텐츠 데이터: `src/data/scripts.ts`, `src/data/questions.ts`, `src/data/roleplays.ts`, `src/data/fixedSurvey.ts`
- 브라우저 API: `src/lib/speech.ts`, `src/lib/recorder.ts`
- LLM 어댑터: `src/lib/llm.ts`

## Required Validation

코드 또는 스타일을 바꾼 뒤 아래를 실행합니다.

```bash
npm run lint
npm run test
npm run build
```

문서 구조나 npm script를 바꿨다면 아래도 실행하고 결과를 확인합니다.

```bash
npm run docs:generate
```

## Documentation Maintenance

- 구조·라우팅·데이터 소유권이 바뀌면 `docs/ARCHITECTURE.md`와 `docs/ROUTING.md`를 같이 갱신합니다.
- 파일 목록 또는 package script가 달라지면 `npm run docs:generate`를 실행해 `docs/PROJECT_SNAPSHOT.md`를 갱신합니다.
- Claude Code는 `CLAUDE.md`, Roo Code는 `.roo/rules/oom-project.md`를 통해 이 문서로 안내됩니다.
