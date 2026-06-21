# OOM Agent Guide

`OOM (OPIc On Me)` is a Vite + React static web app for OPIc speaking practice. It has no backend. Browser APIs and user-provided internal LLM settings are the only runtime integrations.

## Read First

Before changing code, read these in order:

1. `README.md` for setup, deployment, permissions, and LLM configuration.
2. `docs/ARCHITECTURE.md` for runtime ownership and data boundaries.
3. `docs/ROUTING.md` for `ViewId` routes, sidebar hierarchy, and header behavior.
4. `docs/PROJECT_SNAPSHOT.md` for the generated file and package-script inventory.
5. The affected component and its corresponding `src/data/*.ts` source.

## Non-Negotiable Constraints

- Keep the app deployable to GitHub Pages and ordinary static hosting. Do not add server-only code, secrets, or runtime server dependencies.
- Never hardcode an API key. Internal LLM settings live only in browser `localStorage` through the runtime settings UI.
- Keep the UI Korean-first, with zinc/slate foundations and restrained indigo, emerald, and amber accents.
- `BackgroundSurveySheet` must render the full survey-like list. Recommended answers and rehearsal scoring data are owned only by `src/data/fixedSurvey.ts`.
- `OPIc 실전 훈련하기` owns STEP 1 through STEP 5 in the sidebar. STEP 3 and STEP 4 have a further nested group level; preserve this hierarchy.
- The sticky title/progress header is a training-only affordance. It is visible for `training-hub` and its STEP descendants, but not for Home, the candidate guide, or AI settings.
- A script group offers story choices, not additional mandatory memorization. The 60-90 second primary story and a short question-type variation must remain connected to the same scene.
- Keep accessible names, keyboard focus states, loading/error states, and mobile navigation intact.
- Avoid unrelated refactors. Existing legacy presentation files may remain in the repository; route ownership is defined by `src/App.tsx` and `docs/ROUTING.md`.

## Architecture At A Glance

- Entry: `src/main.tsx` -> `src/App.tsx`
- Routing: React state with `ViewId`; no React Router
- Shell: `src/components/layout/AppShell.tsx` and `ExpandableSidebar.tsx`
- Training hub: `src/components/training/TrainingHub.tsx`
- Script flow: `ScriptHub` -> `ScriptDashboardV2` -> `ScriptTrainingTabs`
- Role-play flow: `RoleplayHub` -> `RoleplayFormulaView` or group-specific `RoleplayViewV2`
- Candidate guide: `ExamGuideHub` plus overview, application, day-of-exam, and results views
- Browser APIs: `src/lib/speech.ts`, `src/lib/recorder.ts`
- LLM adapter: `src/lib/llm.ts`

## Data Ownership

- `fixedSurvey.ts`: full survey structure, OOM fixed recommendations, rehearsal answer key
- `scripts.ts`: default 60-90 second script stories
- `additionalScripts.ts`: optional second story in each script group
- `scriptTrainingData.ts` and `additionalScriptTraining.ts`: question-type variations and answer blueprints
- `scriptReplacementGuides.ts` and `additionalScriptReplacementGuides.ts`: reusable replacement blocks
- `questions.ts`: practice question pool
- `roleplays.ts` and `additionalRoleplays.ts`: role-play formula, scenarios, and level guidance
- `examGuideContent.ts`: time-sensitive candidate-guide content and official links

## Required Validation

After code or style changes, run:

```bash
npm run lint
npm run test
npm run build
npm run verify:pages
```

After documentation, file-inventory, or package-script changes, also run:

```bash
npm run docs:generate
npm run docs:check
```

## Documentation Maintenance

- Update `docs/ARCHITECTURE.md` when component ownership, data ownership, or browser/LLM boundaries change.
- Update `docs/ROUTING.md` when a `ViewId`, sidebar level, route target, or header rule changes.
- Run `npm run docs:generate` whenever source files or package scripts change; do not edit `docs/PROJECT_SNAPSHOT.md` manually.
- `CLAUDE.md` and `.roo/rules/oom-project.md` point other code agents back to this guide.
