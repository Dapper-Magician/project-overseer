# Memory Strategy

## Purpose

Memory in Project Overseer preserves continuity.

Memory is not a pile of transcript fragments.

Memory is the structured record of what the project knows, what it decided, what it created, and what remains open.

## First Memory Principle

Start simple.

Use readable markdown files before adding complex memory infrastructure.

The first memory layer should include:

- decision log
- estimate calibration log
- prompt log
- artifact index
- open questions
- session summaries
- project state notes

## Memory Files

Initial memory files live in `docs/meta/`.

Recommended files:

- `docs/meta/decision_log.md`
- `docs/meta/estimate_calibration_log.md`
- `docs/meta/prompt_log.md`
- `docs/meta/artifact_index.md`
- `docs/meta/open_questions.md`
- `docs/meta/session_summaries.md`

## Memory Loom

Memory Loom is the UI surface for continuity.

It should show real files from `docs/meta/`.

Memory Loom should help President Horne answer:

- What did we decide?
- Why did we decide it?
- What did we create?
- What is unresolved?
- What changed?
- What should happen next?

## Capture Rules

Capture:

- decisions
- corrections
- doctrine changes
- important preferences
- architecture choices
- implementation estimates
- actual implementation times
- prompt changes
- artifact creation
- open questions

Avoid capturing noise.

## Estimate Calibration

Darwin owns estimate calibration.

The purpose is to compare predicted versus actual implementation time so the roadmap improves over time.

## Prompt Log

Prompt engineering is a first-class project asset.

Important prompts should be logged, revised, and evaluated.

## Artifact Index

The Artifact Vault needs an index of real files.

Early versions may generate this manually or with simple static imports.

Later versions may scan the repo or use a backend.
