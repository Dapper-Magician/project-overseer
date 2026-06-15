import { useEffect, useMemo, useState } from 'react';
import { ArtifactCard, DirectorCard, ProtocolCard, SignalBadge } from './components/Cards';
import { CommandInput, NavigationRail, RoomShell, StatusRail } from './components/Shell';
import { activeMission, artifacts, decisionRecords, designTokens, directors, experienceGoals, memoryRecords, protocols, promptRecords } from './content/canon';

export type Room = 'bridge' | 'council' | 'directors' | 'ares' | 'vault' | 'memory';

type Tone = 'signal' | 'command' | 'mint' | 'archive' | 'ember';

type GeneratedArtifact = {
  id: string;
  title: string;
  directorName: string;
  directorSigil: string;
  request: string;
  body: string;
  createdAt: string;
  path: string;
};

const artifactStorageKey = 'project-overseer.generatedArtifacts.v0';

const artifactCandidateByDirector: Record<string, string> = {
  Athena: 'Roadmap Brief',
  Bolt: 'Repository Artifact',
  Iris: 'Interface Note',
  Darwin: 'Acceptance Criteria',
  Echo: 'Narrative Update',
  Ace: 'MVP Boundary Note',
  'Project Overseer': 'Mission Synthesis',
};

const loadGeneratedArtifacts = (): GeneratedArtifact[] => {
  if (typeof window === 'undefined') return [];

  try {
    const stored = window.localStorage.getItem(artifactStorageKey);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is GeneratedArtifact =>
      typeof item?.id === 'string' &&
      typeof item?.title === 'string' &&
      typeof item?.directorName === 'string' &&
      typeof item?.body === 'string' &&
      typeof item?.createdAt === 'string' &&
      typeof item?.path === 'string',
    );
  } catch {
    return [];
  }
};

const createArtifactId = () => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID();
  return `artifact-${Date.now()}`;
};

function CommandBridge({ generatedArtifacts }: { generatedArtifacts: GeneratedArtifact[] }) {
  const recentArtifacts = artifacts.filter((artifact) => artifact.category !== 'Memory').slice(0, 6);
  return (
    <RoomShell
      eyebrow="Command Bridge"
      title="Ideas enter. Artifacts leave. Memory compounds."
      brief="The Bridge frames Project Overseer as a strategic command institution: mission, Directors, artifacts, and continuity all visible from the first screen."
    >
      <div className="grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-[2rem] border border-command/20 bg-[radial-gradient(circle_at_18%_16%,rgba(247,200,115,0.22),transparent_30%),rgba(8,17,28,0.82)] p-6 shadow-amber">
          <div className="flex flex-wrap items-center gap-3">
            <SignalBadge tone="command">active mission</SignalBadge>
            <SignalBadge tone="signal">{activeMission.sourcePath}</SignalBadge>
          </div>
          <h3 className="mt-8 max-w-3xl text-4xl font-semibold leading-tight text-white">{activeMission.title}</h3>
          <p className="mt-4 text-lg leading-8 text-slate-300">{activeMission.directive}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ['Overseer', 'coordinates'],
              ['Directors', `${directors.length} profiles`],
              ['Vault', `${artifacts.length + generatedArtifacts.length} artifacts`],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-slate-500">{label}</p>
                <p className="mt-2 text-xl text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          <div className="rounded-[2rem] border border-signal/20 bg-signal/10 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-signal">Next recommended action</p>
            <p className="mt-3 text-lg leading-7 text-white">{activeMission.nextAction}</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-black/25 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-command">Memory signals</p>
            <div className="mt-4 grid gap-3">
              {generatedArtifacts.slice(0, 1).map((artifact) => (
                <p key={artifact.id} className="rounded-2xl border border-mint/20 bg-mint/10 p-3 text-sm text-mint">Artifact created: {artifact.title}</p>
              ))}
              {memoryRecords.slice(0, 3).map((memory) => (
                <p key={memory.path} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-sm text-slate-300">{memory.title}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {directors.filter((director) => director.name !== 'Project Overseer').slice(0, 6).map((director) => <DirectorCard key={director.path} director={director} compact />)}
      </div>
      <div className="mt-6 grid gap-4 xl:grid-cols-[0.8fr_1.2fr]">
        <section className="rounded-[2rem] border border-command/15 bg-black/25 p-5">
          <SignalBadge tone="command">experience doctrine</SignalBadge>
          <div className="mt-4 grid gap-3">
            {experienceGoals.map((goal) => (
              <p key={goal} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-sm leading-6 text-slate-300">{goal}</p>
            ))}
          </div>
        </section>
        <section className="rounded-[2rem] border border-white/10 bg-black/25 p-5">
          <SignalBadge tone="signal">design tokens v0</SignalBadge>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {designTokens.map((token) => (
              <div key={token.name} className="rounded-2xl border border-white/10 bg-obsidian/70 p-4">
                <div className="mb-3 h-2 rounded-full" style={{ background: token.value }} />
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-white">{token.name}</p>
                <p className="mt-2 font-mono text-xs text-slate-500">{token.value}</p>
                <p className="mt-3 text-sm text-slate-400">{token.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {recentArtifacts.map((artifact) => <ArtifactCard key={artifact.path} artifact={artifact} />)}
      </div>
      <div className="mt-6"><CommandInput /></div>
    </RoomShell>
  );
}

function CouncilChamber({ generatedArtifacts, onCreateArtifact }: { generatedArtifacts: GeneratedArtifact[]; onCreateArtifact: (directorPath: string, request: string) => void }) {
  return (
    <RoomShell
      eyebrow="Council Chamber"
      title="A focused council, not a flattened chatbot voice."
      brief="The Chamber exposes current build focus, accepted decisions, Director participation, and the active Codex prompt as actual project references."
    >
      <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-obsidian/80 p-6">
          <SignalBadge tone="command">current build prompt</SignalBadge>
          <h3 className="mt-5 text-3xl font-semibold text-white">{promptRecords[0].title}</h3>
          <p className="mt-4 text-slate-300">{promptRecords[0].excerpt}</p>
          <p className="mt-5 font-mono text-xs text-signal">{promptRecords[0].path}</p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-black/25 p-6">
          <SignalBadge tone="archive">accepted decisions</SignalBadge>
          <div className="mt-5 grid gap-4">
            {decisionRecords.map((decision) => (
              <article key={decision.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <h3 className="font-semibold text-white">{decision.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{decision.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <ArtifactLoop onCreateArtifact={onCreateArtifact} generatedArtifacts={generatedArtifacts} />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {directors.map((director) => (
          <div key={director.path} className="rounded-[1.5rem] border border-white/10 bg-black/25 p-4">
            <p className="text-xl text-white">{director.sigil} {director.name}</p>
            <p className="mt-2 text-sm text-slate-400">{director.voice}</p>
          </div>
        ))}
      </div>
    </RoomShell>
  );
}

function DirectorRooms() {
  const [selected, setSelected] = useState(directors[1]?.path ?? directors[0].path);
  const activeDirector = directors.find((director) => director.path === selected) ?? directors[0];
  return (
    <RoomShell
      eyebrow="Director Rooms"
      title="Specialists with presence, taste, and authorship."
      brief="Every profile is parsed from the real Director markdown files so the interface inherits the THINKTANK canon instead of inventing personas in component state."
    >
      <div className="grid gap-5 xl:grid-cols-[0.4fr_0.6fr]">
        <div className="grid gap-3">
          {directors.map((director) => (
            <button
              key={director.path}
              onClick={() => setSelected(director.path)}
              className={`rounded-2xl border p-4 text-left transition ${selected === director.path ? 'border-signal/40 bg-signal/10 text-white' : 'border-white/10 bg-black/20 text-slate-400 hover:border-command/30 hover:text-white'}`}
            >
              <span className="text-lg">{director.sigil} {director.name}</span>
              <span className="mt-1 block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">{director.path}</span>
            </button>
          ))}
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-panel-sheen p-6 shadow-console">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-command">runtime profile</p>
              <h3 className="mt-4 text-5xl font-semibold text-white">{activeDirector.sigil} {activeDirector.name}</h3>
            </div>
            <SignalBadge tone="signal">authorship visible</SignalBadge>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <ProfileField label="Department" value={activeDirector.department} tone="command" />
            <ProfileField label="Voice" value={activeDirector.voice} tone="signal" />
            <ProfileField label="What they notice" value={activeDirector.notices} tone="mint" />
            <ProfileField label="What annoys them" value={activeDirector.annoys} tone="ember" />
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-archive">preferred contributions</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {activeDirector.contributions.map((item) => <SignalBadge key={item} tone="archive">{item}</SignalBadge>)}
            </div>
          </div>
          <p className="mt-6 font-mono text-xs text-signal/80">Source: {activeDirector.path}</p>
        </div>
      </div>
    </RoomShell>
  );
}

function ProfileField({ label, value, tone }: { label: string; value: string; tone: Tone }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
      <SignalBadge tone={tone}>{label}</SignalBadge>
      <p className="mt-4 leading-7 text-slate-200">{value}</p>
    </div>
  );
}


function ArtifactLoop({ onCreateArtifact, generatedArtifacts }: { onCreateArtifact: (directorPath: string, request: string) => void; generatedArtifacts: GeneratedArtifact[] }) {
  const [directorPath, setDirectorPath] = useState(directors.find((director) => director.name === 'Bolt')?.path ?? directors[0].path);
  const [request, setRequest] = useState('Draft a first artifact that advances the Project Overseer workstation.');
  const selectedDirector = directors.find((director) => director.path === directorPath) ?? directors[0];

  return (
    <section className="rounded-[2rem] border border-mint/20 bg-[linear-gradient(145deg,rgba(135,247,197,0.10),rgba(8,17,28,0.78)_42%,rgba(91,231,255,0.06))] p-6 shadow-console">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <SignalBadge tone="mint">Sprint 3 artifact loop v0</SignalBadge>
          <h3 className="mt-4 text-3xl font-semibold text-white">Director creates. Vault stores. Memory records.</h3>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">This local-first loop creates a markdown artifact in browser state, persists it to localStorage, displays it in Artifact Vault, and records the action in Memory Loom.</p>
        </div>
        <SignalBadge tone="signal">local only</SignalBadge>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-[0.35fr_0.65fr]">
        <label className="grid gap-2">
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-command">Director</span>
          <select
            value={directorPath}
            onChange={(event) => setDirectorPath(event.target.value)}
            className="rounded-2xl border border-white/10 bg-void px-4 py-3 text-white outline-none transition focus:border-signal/50"
          >
            {directors.map((director) => (
              <option key={director.path} value={director.path}>{director.sigil} {director.name}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2">
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-command">Artifact request</span>
          <textarea
            value={request}
            maxLength={500}
            onChange={(event) => setRequest(event.target.value)}
            className="min-h-28 rounded-2xl border border-white/10 bg-void px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-signal/50"
            placeholder="Ask a Director to create a roadmap, README note, UI critique, acceptance criteria, narrative update, or MVP boundary."
          />
        </label>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-400"><span className="text-command">Selected:</span> {selectedDirector.name} / {selectedDirector.voice}</p>
        <button
          type="button"
          disabled={!request.trim()}
          onClick={() => onCreateArtifact(directorPath, request)}
          className="rounded-2xl border border-mint/30 bg-mint/10 px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-mint transition hover:bg-mint/15 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Create artifact
        </button>
      </div>
      {generatedArtifacts.length > 0 && (
        <div className="mt-5 rounded-2xl border border-white/10 bg-black/25 p-4">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mint">Latest generated artifact</p>
          <p className="mt-2 text-white">{generatedArtifacts[0].directorSigil} {generatedArtifacts[0].title}</p>
          <p className="mt-2 font-mono text-xs text-signal">{generatedArtifacts[0].path}</p>
        </div>
      )}
    </section>
  );
}

function GeneratedArtifactCard({ artifact }: { artifact: GeneratedArtifact }) {
  return (
    <article className="rounded-[1.35rem] border border-mint/20 bg-mint/10 p-4 transition hover:-translate-y-0.5 hover:border-mint/40">
      <div className="flex items-center justify-between gap-3">
        <SignalBadge tone="mint">Generated</SignalBadge>
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-slate-500">markdown</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{artifact.directorSigil} {artifact.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{artifact.request}</p>
      <pre className="mt-4 max-h-56 overflow-auto rounded-2xl border border-white/10 bg-black/35 p-4 text-xs leading-5 text-slate-300 whitespace-pre-wrap">{artifact.body}</pre>
      <p className="mt-4 border-t border-white/10 pt-3 font-mono text-xs text-mint">{artifact.path}</p>
    </article>
  );
}

function AresArmory() {
  return (
    <RoomShell
      eyebrow="ARES Armory"
      title="Protocols on the wall. Directors still hold the pen."
      brief="ARES appears as a disciplined armory of protocols, not an agent persona. These cards are derived from the real files in ares/."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {protocols.map((protocol) => <ProtocolCard key={protocol.path} protocol={protocol} />)}
      </div>
      <div className="mt-6 grid gap-4 rounded-[2rem] border border-command/15 bg-black/25 p-5 md:grid-cols-3">
        {['Level 1: Director only', 'Level 2: Director + ARES protocol', 'Level 3: Protocol + approved connector'].map((level) => (
          <div key={level} className="rounded-2xl border border-white/10 bg-command/5 p-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-command">{level}</p>
            <p className="mt-3 text-sm leading-6 text-slate-400">Authorship stays with the Director; ARES supplies structure, conventions, and tool context.</p>
          </div>
        ))}
      </div>
    </RoomShell>
  );
}

function ArtifactVault({ generatedArtifacts }: { generatedArtifacts: GeneratedArtifact[] }) {
  const groups = useMemo(() => ['Canon', 'Director', 'ARES', 'Prompt', 'Diagram', 'Memory'] as const, []);
  return (
    <RoomShell
      eyebrow="Artifact Vault"
      title="The archive is already alive because the repo is the source."
      brief="The Vault indexes actual documents, Director profiles, ARES protocols, prompts, diagrams, and memory files as durable project artifacts."
    >
      <div className="grid gap-7">
        {generatedArtifacts.length > 0 && (
          <section>
            <div className="mb-4 flex items-center justify-between border-b border-mint/20 pb-3">
              <h3 className="text-2xl font-semibold text-white">Generated Artifacts</h3>
              <SignalBadge tone="mint">{generatedArtifacts.length} local</SignalBadge>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {generatedArtifacts.map((artifact) => <GeneratedArtifactCard key={artifact.id} artifact={artifact} />)}
            </div>
          </section>
        )}
        {groups.map((group) => {
          const records = artifacts.filter((artifact) => artifact.category === group);
          return (
            <section key={group}>
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-2xl font-semibold text-white">{group}</h3>
                <SignalBadge tone={group === 'Memory' ? 'archive' : group === 'ARES' ? 'command' : 'signal'}>{records.length} files</SignalBadge>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {records.map((artifact) => <ArtifactCard key={artifact.path} artifact={artifact} />)}
              </div>
            </section>
          );
        })}
      </div>
    </RoomShell>
  );
}

function MemoryLoom({ generatedArtifacts }: { generatedArtifacts: GeneratedArtifact[] }) {
  return (
    <RoomShell
      eyebrow="Memory Loom"
      title="Continuity as an instrument panel, not a chat transcript."
      brief="Memory Loom surfaces real meta files and development doctrines so decisions, prompts, estimates, open questions, artifacts, and sessions remain inspectable."
    >
      {generatedArtifacts.length > 0 && (
        <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {generatedArtifacts.map((artifact) => (
            <article key={artifact.id} className="rounded-[1.35rem] border border-archive/20 bg-archive/10 p-4">
              <SignalBadge tone="archive">action recorded</SignalBadge>
              <h3 className="mt-4 text-lg font-semibold text-white">{artifact.directorName} created {artifact.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">Artifact stored locally in the Vault and indexed by Memory Loom.</p>
              <p className="mt-4 font-mono text-xs text-archive">{new Date(artifact.createdAt).toLocaleString()} / {artifact.path}</p>
            </article>
          ))}
        </div>
      )}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {memoryRecords.map((memory) => <ArtifactCard key={memory.path} artifact={memory} />)}
      </div>
      <div className="mt-6 rounded-[2rem] border border-archive/20 bg-archive/10 p-6">
        <SignalBadge tone="archive">loom question set</SignalBadge>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {['What did we decide?', 'What did we create?', 'What remains unresolved?'].map((question) => (
            <p key={question} className="rounded-2xl border border-white/10 bg-black/25 p-4 text-lg text-white">{question}</p>
          ))}
        </div>
      </div>
    </RoomShell>
  );
}

export default function App() {
  const [activeRoom, setActiveRoom] = useState<Room>('bridge');
  const [generatedArtifacts, setGeneratedArtifacts] = useState<GeneratedArtifact[]>(loadGeneratedArtifacts);

  useEffect(() => {
    try {
      window.localStorage.setItem(artifactStorageKey, JSON.stringify(generatedArtifacts.slice(0, 20)));
    } catch {
      // Local persistence is best-effort; the artifact remains in memory for the current session.
    }
  }, [generatedArtifacts]);

  const handleCreateArtifact = (directorPath: string, request: string) => {
    const director = directors.find((item) => item.path === directorPath) ?? directors[0];
    const safeRequest = request.trim().slice(0, 500);
    if (!safeRequest) return;

    const candidate = artifactCandidateByDirector[director.name] ?? 'Artifact';
    const id = createArtifactId();
    const title = `${director.name} ${candidate}`;
    const body = `# ${title}\n\n**Director:** ${director.sigil} ${director.name}\n**Source Profile:** ${director.path}\n**Created:** ${new Date().toISOString()}\n\n## Request\n\n${safeRequest}\n\n## Director Draft\n\n${director.name} responds in a ${director.voice.toLowerCase()} mode. This v0 artifact is intentionally local-first: it captures the request, preserves Director authorship, and places the result into the Artifact Vault while Memory Loom records the action.\n\n## Next Move\n\nReview, copy, revise, or export this draft when file-backed persistence is added.`;

    const artifact: GeneratedArtifact = {
      id,
      title,
      directorName: director.name,
      directorSigil: director.sigil,
      request: safeRequest,
      body,
      createdAt: new Date().toISOString(),
      path: `local/generated/${id}.md`,
    };

    setGeneratedArtifacts((current) => [artifact, ...current].slice(0, 20));
    setActiveRoom('vault');
  };

  const RoomComponent = {
    bridge: () => <CommandBridge generatedArtifacts={generatedArtifacts} />,
    council: () => <CouncilChamber generatedArtifacts={generatedArtifacts} onCreateArtifact={handleCreateArtifact} />,
    directors: () => <DirectorRooms />,
    ares: () => <AresArmory />,
    vault: () => <ArtifactVault generatedArtifacts={generatedArtifacts} />,
    memory: () => <MemoryLoom generatedArtifacts={generatedArtifacts} />,
  }[activeRoom];

  return (
    <main className="min-h-screen bg-radial-command px-4 py-5 text-slate-100 md:px-6 lg:px-8">
      <div className="pointer-events-none fixed inset-0 opacity-40 [background:radial-gradient(circle_at_center,transparent_0,transparent_45%,rgba(0,0,0,0.82)_100%)]" />
      <div className="pointer-events-none fixed left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-signal/10" />
      <div className="relative mx-auto grid max-w-[1600px] gap-5 xl:grid-cols-[19rem_1fr]">
        <NavigationRail activeRoom={activeRoom} onNavigate={setActiveRoom} />
        <div className="grid gap-5">
          <StatusRail />
          <RoomComponent />
        </div>
      </div>
    </main>
  );
}
