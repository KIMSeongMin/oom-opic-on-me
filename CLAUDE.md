# OOM Instructions for Claude Code

Read `AGENTS.md` before making changes. Then read, in order:

1. `README.md`
2. `docs/ARCHITECTURE.md`
3. `docs/ROUTING.md`
4. `docs/PROJECT_SNAPSHOT.md`

`AGENTS.md` is the source of truth for constraints, data ownership, navigation rules, and validation. In particular, preserve the `OPIc 실전 훈련하기` hierarchy, the training-only progress header, and the rule that LLM credentials never enter the repository.

Run the required validation commands from `AGENTS.md` before completing work. Run `npm run docs:generate` and `npm run docs:check` whenever documentation structure, source files, or package scripts change.
