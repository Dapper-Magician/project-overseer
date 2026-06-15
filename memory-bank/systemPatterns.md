# System Patterns

## Architecture North Star

Project Overseer proves this loop:

> President Horne gives direction.
> Overseer coordinates.
> A Director contributes expertise.
> The Director creates an artifact.
> ARES provides tool protocol support when useful.
> The artifact is stored.
> The system remembers what happened.

## Primary Layers

The system is organized into six conceptual layers:

1. Command Interface
2. Overseer Coordination Layer
3. Director Layer
4. ARES Protocol Layer
5. Artifact Layer
6. Memory Layer

## Command Interface Pattern

The interface is room-based rather than tab-based. Primary rooms are:

- Command Bridge
- Council Chamber
- Director Rooms
- ARES Armory
- Artifact Vault
- Memory Loom

Each screen should include strong hierarchy, layered panels, status/context information, and references to artifacts or memory where relevant.

## Content Registry Pattern

Sprint 1 should use a small centralized content registry to import or reference actual repository files. The content registry should expose titles, paths, categories, types, and excerpts derived from real files.

Recommended content sources:

- `docs/`
- `directors/`
- `ares/`
- `prompts/`
- `diagrams/`
- `docs/meta/`

For Vite, raw markdown imports such as `?raw` are acceptable and preferred for simplicity.

## Director Pattern

Directors are specialist collaborators with distinct identities, voices, and artifacts. They are not interchangeable roles.

Runtime profiles live in:

- `directors/overseer.md`
- `directors/athena.md`
- `directors/bolt.md`
- `directors/iris.md`
- `directors/darwin.md`
- `directors/echo.md`
- `directors/ace.md`

UI components should render these files or structured summaries derived from them.

## ARES Pattern

ARES is the armory/protocol layer. It provides tool descriptions, usage rules, toolchains, syntax examples, and conventions. It is not an autonomous agent and is not the author of artifacts.

Initial ARES protocol files:

- `ares/repo.md`
- `ares/kanban.md`
- `ares/memory.md`

UI should present ARES as organized protocol cards or an operations rack.

## Artifact Pattern

Artifacts are durable outputs. Early Artifact Vault content should come from actual repository files, including markdown documents, diagrams, prompt files, Director profiles, and ARES protocols.

Artifact cards should show:

- title
- path
- category
- short excerpt
- type

## Memory Pattern

Memory starts as readable markdown files before complex infrastructure. Initial memory structures are in `docs/meta/`, and Codex continuity is maintained in `memory-bank/`.

Memory Loom should surface decisions, session summaries, open questions, estimate calibration, prompt logs, artifact index entries, and development doctrines.

## Documentation Pattern

When major structure changes, update relevant docs. Document architecture choices, new folders/files, major UI decisions, setup commands, and implementation assumptions.

## Generated Artifact Pattern

Sprint 3 generated artifacts are local prototype records. They should remain distinct from immutable repository canon records. The current implementation stores them in React state and browser `localStorage`, caps the list to 20 artifacts, shows them in Artifact Vault, and records corresponding action cards in Memory Loom.
