# Decision Log

This file records important Project Overseer decisions.

## DEC-001: Build Documentation Canon Before Interface

**Date:** 2026-06-14  
**Status:** Accepted  
**Decision Owner:** President Horne / Overseer  
**Related Files:** `AGENTS.md`, `docs/`, `directors/`, `ares/`, `prompts/`  
**Tags:** codex, documentation, architecture, context  

### Decision

Project Overseer will create a foundational documentation canon before asking Codex to build the first interface.

### Rationale

A premature build prompt risks producing a generic AI dashboard. Codex needs a clear product identity, design bible, architecture overview, Director model, and ARES protocol before implementation.

### Consequences

The first repo work focuses on real markdown files and project structure. The shell build prompt references the canon instead of trying to contain the entire product vision inside one prompt.

## DEC-002: ARES Is a Protocol Armory, Not an Autonomous Agent

**Date:** 2026-06-14  
**Status:** Accepted  
**Decision Owner:** President Horne / Overseer  
**Related Files:** `docs/04_ares_protocol.md`, `ares/`  
**Tags:** ares, architecture, directors, tools  

### Decision

ARES will be treated as the armory/protocol layer of Project Overseer.

ARES provides tool context, tool conventions, toolchains, and structured workflows. ARES does not replace Director reasoning or Director authorship.

### Rationale

ARES exists to help Directors use tools. It is not the main actor.

## DEC-003: Real Content First Doctrine

**Date:** 2026-06-14  
**Status:** Accepted  
**Decision Owner:** President Horne  
**Related Files:** `docs/meta/development_doctrines.md`, `AGENTS.md`  
**Tags:** canon, implementation, codex, content  

### Decision

Project Overseer will build from real project files instead of planned mock data.

### Rationale

The interface should represent the real command institution from the beginning. Planned placeholder content wastes tokens, weakens context, and risks producing a generic product.

### Consequences

Codex tasks should use actual files from `docs/`, `directors/`, `ares/`, `prompts/`, and `diagrams/`.

## DEC-004: Track Estimates Against Actuals

**Date:** 2026-06-14  
**Status:** Accepted  
**Decision Owner:** Darwin / President Horne  
**Related Files:** `docs/meta/estimate_calibration_log.md`  
**Tags:** estimates, roadmap, calibration  

### Decision

Project Overseer will track predicted implementation time against actual implementation time.

### Rationale

Estimates should improve through evidence.

## DEC-005: AI Persona Prompt Terminology

**Date:** 2026-06-14  
**Status:** Accepted  
**Decision Owner:** President Horne  
**Related Files:** `docs/source/original_project_overseer_source_prompt.md`  
**Tags:** terminology, source-canon  

### Decision

AIPP means AI Persona Prompt.

### Rationale

This is President Horne's terminology and should be preserved accurately.
