import type { ReactNode } from 'react';
import type { CanonRecord, DirectorProfile, ProtocolProfile } from '../content/canon';

type BadgeTone = 'signal' | 'command' | 'mint' | 'archive' | 'ember';

export function SignalBadge({ children, tone = 'signal' }: { children: ReactNode; tone?: BadgeTone }) {
  const toneClass = {
    signal: 'border-signal/35 text-signal bg-signal/10',
    command: 'border-command/35 text-command bg-command/10',
    mint: 'border-mint/35 text-mint bg-mint/10',
    archive: 'border-archive/35 text-archive bg-archive/10',
    ember: 'border-ember/35 text-ember bg-ember/10',
  }[tone];
  return <span className={`rounded-full border px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.24em] ${toneClass}`}>{children}</span>;
}

export function DirectorCard({ director, compact = false }: { director: DirectorProfile; compact?: boolean }) {
  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-panel-sheen p-5 shadow-console">
      <div className={`absolute -right-12 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${director.accent} opacity-20 blur-2xl transition group-hover:opacity-35`} />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.35em] text-steel">THINKTANK DIRECTOR</p>
          <h3 className="mt-3 text-2xl font-semibold text-white"><span className="mr-2">{director.sigil}</span>{director.name}</h3>
        </div>
        <SignalBadge tone="command">online</SignalBadge>
      </div>
      <p className="relative mt-4 text-sm leading-6 text-slate-300">{director.department}</p>
      {!compact && (
        <div className="relative mt-5 grid gap-3 text-sm text-slate-300">
          <p><span className="text-command">Voice:</span> {director.voice}</p>
          <p><span className="text-signal">Notices:</span> {director.notices}</p>
          <p><span className="text-ember">Rejects:</span> {director.annoys}</p>
        </div>
      )}
      <p className="relative mt-5 font-mono text-xs text-slate-500">{director.path}</p>
    </article>
  );
}

export function ArtifactCard({ artifact }: { artifact: CanonRecord }) {
  const tone = artifact.category === 'Memory' ? 'archive' : artifact.category === 'ARES' ? 'command' : artifact.category === 'Director' ? 'signal' : 'mint';
  return (
    <article className="rounded-[1.35rem] border border-white/10 bg-obsidian/72 p-4 transition hover:-translate-y-0.5 hover:border-signal/35 hover:bg-iron/80">
      <div className="flex items-center justify-between gap-3">
        <SignalBadge tone={tone as BadgeTone}>{artifact.category}</SignalBadge>
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-slate-500">{artifact.type}</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{artifact.title}</h3>
      <p className="mt-3 min-h-16 text-sm leading-6 text-slate-400">{artifact.excerpt}</p>
      <p className="mt-4 border-t border-white/10 pt-3 font-mono text-xs text-signal/80">{artifact.path}</p>
    </article>
  );
}

export function ProtocolCard({ protocol }: { protocol: ProtocolProfile }) {
  return (
    <article className="relative overflow-hidden rounded-[1.75rem] border border-command/15 bg-[linear-gradient(145deg,rgba(247,200,115,0.12),rgba(8,17,28,0.88)_34%,rgba(91,231,255,0.06))] p-6 shadow-amber">
      <div className="absolute right-4 top-4 h-16 w-16 rounded-full border border-command/20" />
      <SignalBadge tone="command">ARES PROTOCOL</SignalBadge>
      <h3 className="mt-5 text-3xl font-semibold text-white">{protocol.name}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{protocol.excerpt}</p>
      <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-command">usual director</p>
        <p className="mt-2 text-slate-200">{protocol.usualDirector}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {protocol.outputs.map((output) => <SignalBadge key={output} tone="signal">{output}</SignalBadge>)}
      </div>
      <p className="mt-5 font-mono text-xs text-command/80">{protocol.path}</p>
    </article>
  );
}
