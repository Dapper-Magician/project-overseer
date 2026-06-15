# Project Brief

## Project Name

Project Overseer

## Foundation

Project Overseer is a futuristic, local-first, markdown-powered, AI-native command workstation for turning President Horne's ideas into durable artifacts, systems, documents, prototypes, products, and ventures.

It is not a chatbot, generic AI dashboard, or bland agent launcher. It is a strategic command institution: President Horne directs the mission, Project Overseer coordinates work, specialist Directors contribute distinct expertise, ARES provides protocol support, artifacts persist, and memory compounds.

## Core Requirements

Project Overseer must support the core loop:

1. President Horne gives a mission, directive, or request.
2. Project Overseer coordinates the work.
3. A relevant Director contributes distinct expertise.
4. The Director creates or improves an artifact.
5. ARES provides tool protocol support when useful.
6. The artifact is stored in the Artifact Vault.
7. Important decisions or summaries are stored in Memory Loom.

## Primary Product Areas

The user experience centers on six rooms:

- Command Bridge
- Council Chamber
- Director Rooms
- ARES Armory
- Artifact Vault
- Memory Loom

## Source of Truth

The repository canon is the source of truth. Visible product content should come from real project files:

- `docs/`
- `directors/`
- `ares/`
- `prompts/`
- `diagrams/`
- `docs/meta/`

The project follows the Real Content First Doctrine: do not use planned placeholder content as the development strategy. If needed content does not exist, create the real project file and explain why.

## Initial Implementation Scope

The current implementation target is Sprint 1: build the first navigable frontend shell under `apps/web/` using Vite, React, TypeScript, and Tailwind CSS. The shell should render or summarize real repository content and make the command institution immediately understandable.

## MVP Success Criteria

The first serious MVP succeeds when President Horne can:

- navigate the core rooms
- inspect Director identities from real Director files
- view ARES protocols from real ARES files
- view project artifacts in the Artifact Vault
- view meta-memory files in Memory Loom
- understand the product concept instantly
- feel the difference between Project Overseer and ordinary AI dashboards

The first functional MVP succeeds when the system can create an artifact, save it, show it in the Artifact Vault, log the action or decision, use Director-specific profiles to shape output, and optionally apply ARES protocol guidance.
