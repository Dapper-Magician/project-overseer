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

* tool names
* tool descriptions
* tool usage guidance
* tool command examples
* toolchain patterns
* output expectations
* role-to-tool associations
* future connector mappings
* structured conventions for repeatable work

## What ARES Does Not Do

ARES does not replace Director reasoning.

ARES does not write artifacts instead of Directors.

ARES does not make strategic decisions by itself.

ARES does not need to be a complex runtime in the first version.

ARES does not require live integrations to be useful.

## Correct Relationship

The correct relationship is:

```text
Director thinks.
Director writes.
Director creates.
ARES provides protocol support.
Connectors may later execute mechanical actions.
```

Example:

```text
Bolt writes README.md.
REPO provides repository conventions.
ARES stores or presents the REPO protocol.
A future GitHub connector may commit the file after approval.
```

## ARES as Armory

ARES should visually and conceptually feel like an armory.

It contains tools that can be equipped or consulted.

A Director may have preferred tools, but tools are not prisons.

Example preferred mappings:

* Bolt: REPO, code documentation, architecture protocols.
* Athena: Kanban, roadmap, risk register, calendar.
* Echo: documentation, memory summaries, communication templates.
* Darwin: text analyzer, source matrix, evidence review.
* Iris: design bible, wireframe protocol, visual system tools.
* Ace: cost model, offer analysis, venture planning.

## ARES as Protocol Layer

A protocol is a structured way to perform a task.

A protocol may include:

* purpose
* when to use
* usual Director
* input expectations
* output expectations
* artifact type
* command examples
* quality checklist
* future connector mapping

Protocols should be readable by humans and usable by agents.

## Protocol Card Format

Each ARES tool should eventually have a protocol card.

Recommended fields:

```text
Tool Name
Purpose
Usual Director
When to Use
Inputs
Outputs
Artifact Types
Example Use
Quality Checklist
Future Connector Mapping
```

Keep protocol cards concise.

Do not turn every protocol into a giant manual unless needed.

## Initial ARES Tools

The first ARES Armory should include mock protocol cards for:

1. REPO
2. Kanban
3. Memory

These are enough to demonstrate the system.

## REPO Protocol

### Purpose

REPO supports repository-oriented work.

It helps Directors create:

* README files
* documentation folders
* code project descriptions
* implementation notes
* file trees
* setup instructions
* commit-style summaries
* future GitHub-ready artifacts

### Usual Director

Bolt.

### When to Use

Use REPO when the work involves:

* software projects
* repository setup
* code documentation
* README generation
* file organization
* implementation planning
* GitHub preparation

### Inputs

Possible inputs:

* project name
* project purpose
* intended stack
* repo structure
* setup instructions
* current status
* code files
* implementation notes

### Outputs

Possible outputs:

* README.md
* docs folder outline
* architecture notes
* setup guide
* file tree
* commit message draft
* code documentation

### Important Rule

Bolt writes the content.

REPO provides structure and repository conventions.

### Example

President Horne asks:

```text
Bolt, create a README for the Project Overseer repo.
```

Bolt may use REPO to structure the README:

```text
Project overview
Features
Architecture
Setup
Usage
Roadmap
Status
```

Bolt then writes the README artifact.

## Kanban Protocol

### Purpose

Kanban supports task and workflow tracking.

It helps Directors create:

* task boards
* sprint plans
* project phases
* status updates
* backlog views
* review queues

### Usual Director

Athena.

### When to Use

Use Kanban when the work involves:

* project planning
* task tracking
* sprint organization
* workflow status
* implementation phases
* blocker visibility

### Inputs

Possible inputs:

* project name
* task list
* phases
* owners
* statuses
* priorities
* blockers

### Outputs

Possible outputs:

* markdown Kanban board
* task table
* sprint board
* status summary
* roadmap snapshot

### Example Columns

```text
Backlog
Ready
In Progress
Review
Done
```

### Important Rule

Athena interprets the project state.

Kanban provides structure for displaying and tracking it.

## Memory Protocol

### Purpose

Memory supports continuity.

It helps Overseer and the Directors preserve what matters.

It may create:

* decision logs
* session summaries
* open question lists
* artifact indexes
* estimate logs
* project state notes

### Usual Directors

Overseer, Echo, Darwin.

### When to Use

Use Memory when the work involves:

* decisions
* project history
* recurring principles
* session summaries
* important corrections
* open questions
* estimates versus actuals
* artifacts that need indexing

### Inputs

Possible inputs:

* conversation summary
* decisions made
* artifacts created
* unresolved questions
* changes in direction
* President preferences
* estimated vs actual time

### Outputs

Possible outputs:

* decision_log.md update
* session_summary.md
* estimate_calibration_log.md
* artifact_index.md
* open_questions.md

### Important Rule

Memory should preserve continuity without overwhelming context.

Store what matters.

Do not dump everything.

## Tool Use Levels

ARES tools can operate at different levels.

### Level 1: Director Only

The Director creates the artifact directly.

No ARES protocol is required.

### Level 2: Director + ARES Protocol

The Director uses an ARES protocol to shape the artifact.

Example:

* Bolt uses REPO conventions to create README.md.
* Athena uses Kanban conventions to create roadmap.md.
* Echo uses Memory conventions to create session_summary.md.

### Level 3: Director + ARES Protocol + Connector

A future connector performs a mechanical action after approval.

Example:

* GitHub connector commits README.md.
* Notion connector creates a page.
* Calendar connector creates an event.

This level is future-facing and should not be required for the first shell.

## Toolchains

A toolchain is a sequence of tool-supported steps.

In the first version, toolchains can be represented as markdown workflows.

Example:

```text
Project Setup Toolchain

1. Echo drafts manifesto.
2. Athena creates roadmap.
3. Bolt creates README.
4. Iris creates UI design bible.
5. Darwin creates acceptance criteria.
6. Ace creates value hypothesis.
7. Overseer stores outputs in Artifact Vault.
```

Toolchains should remain readable.

Do not over-structure toolchains prematurely.

## ARES in the UI

ARES Armory should show tools as protocol cards.

Each card should show:

* name
* icon or emoji
* purpose
* usual Director
* output types
* example use
* status

ARES should feel like a powerful organized workshop, not a chatbot.

## ARES and Director Personality

ARES should never flatten Director voices.

Example:

Bad:

```text
ARES generated README.md according to repository protocol.
```

Better:

```text
Bolt used REPO conventions to draft README.md and stored it in the Artifact Vault.
```

The Director remains visible.

## First ARES MVP

The first ARES MVP should include:

* ARES Armory screen
* REPO protocol card
* Kanban protocol card
* Memory protocol card
* mock protocol details
* visual distinction between protocol support and Director authorship

The first ARES MVP does not need live tool execution.

## Future ARES Evolution

Later versions may add:

* command syntax
* script-backed tools
* MCP connectors
* GitHub integration
* Notion integration
* local file operations
* tool inventories
* toolchains with execution states
* approval gates
* audit logs

These should emerge after the basic artifact loop works.

## Guiding Principle

ARES gives the Director the right tool, protocol, and workflow.

The Director still does the thinking.
