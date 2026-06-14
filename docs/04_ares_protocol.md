# ARES Protocol

## Purpose

ARES is the armory and protocol layer of Project Overseer.

ARES exists so Directors can use tools, toolchains, workflows, and structured processes without losing their own voice or authorship.

ARES should make Directors more capable, not more robotic.

## Core Definition

ARES stands for Agentic Resource & Execution System.

In the first implementation, ARES should be understood as:

> The organized armory of tool protocols, toolchains, conventions, and workflow patterns available to Project Overseer and the Directors.

ARES is not an autonomous agent.

ARES is not the author of artifacts.

ARES is not the central intelligence of the platform.

ARES is a support layer.

## What ARES Does

ARES provides:

- tool names
- tool descriptions
- tool usage guidance
- tool command examples
- toolchain patterns
- output expectations
- role-to-tool associations
- future connector mappings
- structured conventions for repeatable work

## Correct Relationship

The correct relationship is:

> Director thinks.  
> Director writes.  
> Director creates.  
> ARES provides protocol support.  
> Connectors may later execute mechanical actions.

Example:

- Bolt writes README.md.
- REPO provides repository conventions.
- ARES stores or presents the REPO protocol.
- A future GitHub connector may commit the file after approval.

## ARES as Armory

ARES should visually and conceptually feel like an armory.

It contains tools that can be equipped or consulted.

A Director may have preferred tools, but tools are not prisons.

Example preferred mappings:

- Bolt: REPO, code documentation, architecture protocols.
- Athena: Kanban, roadmap, risk register, calendar.
- Echo: documentation, memory summaries, communication templates.
- Darwin: text analyzer, source matrix, evidence review.
- Iris: design bible, wireframe protocol, visual system tools.
- Ace: cost model, offer analysis, venture planning.

## ARES as Protocol Layer

A protocol is a structured way to perform a task.

A protocol may include:

- purpose
- when to use
- usual Director
- input expectations
- output expectations
- artifact type
- command examples
- quality checklist
- future connector mapping

Protocols should be readable by humans and usable by agents.

## Initial ARES Protocol Files

The first ARES protocol files are:

- `ares/repo.md`
- `ares/kanban.md`
- `ares/memory.md`

These files are real project canon and should be used by the interface.

## Tool Use Levels

ARES tools can operate at different levels.

### Level 1: Director Only

The Director creates the artifact directly.

No ARES protocol is required.

### Level 2: Director + ARES Protocol

The Director uses an ARES protocol to shape the artifact.

Example:

- Bolt uses REPO conventions to create README.md.
- Athena uses Kanban conventions to create roadmap.md.
- Echo uses Memory conventions to create session_summary.md.

### Level 3: Director + ARES Protocol + Connector

A future connector performs a mechanical action after approval.

Example:

- GitHub connector commits README.md.
- Notion connector creates a page.
- Calendar connector creates an event.

This level follows the same authorship rule: Directors create content; connectors execute mechanical actions.

## Toolchains

A toolchain is a sequence of tool-supported steps.

Toolchains should remain readable.

Do not over-structure toolchains prematurely.

Example:

1. Echo drafts manifesto.
2. Athena creates roadmap.
3. Bolt creates README.
4. Iris creates UI design bible.
5. Darwin creates acceptance criteria.
6. Ace creates value hypothesis.
7. Overseer stores outputs in Artifact Vault.

## ARES in the UI

ARES Armory should show tools as protocol cards derived from real files in `ares/`.

Each card should show:

- name
- icon or emoji
- purpose
- usual Director
- output types
- example use
- status

ARES should feel like a powerful organized workshop, not a chatbot.

## ARES and Director Personality

ARES should never flatten Director voices.

Example:

Bad phrasing:

> ARES generated README.md according to repository protocol.

Better phrasing:

> Bolt used REPO conventions to draft README.md and stored it in the Artifact Vault.

The Director remains visible.

## Future ARES Evolution

Later versions may add:

- command syntax
- script-backed tools
- MCP connectors
- GitHub integration
- Notion integration
- local file operations
- tool inventories
- toolchains with execution states
- approval gates
- audit logs

These should emerge after the basic artifact loop works.

## Guiding Principle

ARES gives the Director the right tool, protocol, and workflow.

The Director still does the thinking.
