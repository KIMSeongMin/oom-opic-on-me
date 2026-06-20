# View Routing

## Current Additions

`exam-overview`, `exam-apply`, `exam-day`, and `exam-results` render `ExamGuideDashboard`. The sidebar places the **OPIc 수험 가이드** parent directly below Home, with four nested navigation entries. It is an information area, not a training step; its primary call to action routes learners to `survey`.

STEP 3 uses a three-block contract: `opening`, `details`, and `closing`. The question-variation tab should show which of those blocks are replaced or retained, while the answer-blueprint tab explains the same conversion rule with a selected expected question.

OOM은 React Router 대신 `src/App.tsx`의 `activeView` state를 사용합니다. URL을 추가하거나 외부 라우터를 도입하기 전에 이 선택이 GitHub Pages의 단순 정적 배포와 현재 탭 기반 UX에 맞는지 검토합니다.

| ViewId | 사이드바 | 화면 컴포넌트 | 다음 단계 |
| --- | --- | --- | --- |
| `home` | 홈 / 전략 개요 | `HomeView` | `survey` |
| `survey` | STEP 1. 서베이 고정 | `BackgroundSurveySheet` | `difficulty` |
| `difficulty` | STEP 2. 난이도 설정 | `DifficultyGuide` | `script-outdoor` |
| `script-outdoor` | STEP 3 / 야외·여행 | `ScriptDashboard` | `roleplay` |
| `script-indoor` | STEP 3 / 실내·휴식 | `ScriptDashboard` | `roleplay` |
| `script-sports` | STEP 3 / 운동·취미 | `ScriptDashboard` | `roleplay` |
| `script-home` | STEP 3 / 집·거주지 | `ScriptDashboard` | `roleplay` |
| `roleplay` | STEP 4. 롤플레이 공식 | `RoleplayView` | `practice` |
| `practice` | STEP 5. 실전 연습 | `PracticeView` | `ai-settings` |
| `ai-settings` | AI 피드백 / 설정 | `AiSettingsView` | 없음 |

## Script Detail Tabs

Each STEP 3 group is displayed through `ScriptTrainingTabs`.

- `메인 스토리`: 60-90 second reusable script, TTS, and memory modes
- `질문별 변형`: three 30-45 second examples grouped by question type
- `답변 설계`: four reusable assembly steps for the same scene

## Synchronization Rule

`ScriptDashboard` 내부에서 그룹을 변경하면 `onScriptChange`를 통해 `App.tsx`의 `activeView`도 바꿉니다. 이 규칙을 유지해야 본문 선택, 상단 제목, 사이드바 active 상태가 항상 일치합니다.
