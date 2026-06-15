import type { ReactNode } from 'react';
import type { Room } from '../App';

const roomGlyphs: Record<Room, string> = {
  bridge: '⌁',
  council: '◈',
  directors: '✦',
  ares: '⚙',
  vault: '▣',
  memory: '∞',
};

export function NavigationRail({ activeRoom, onNavigate }: { activeRoom: Room; onNavigate: (room: Room) => void }) {
  const rooms: { id: Room; label: string; subtitle: string }[] = [
    { id: 'bridge', label: 'Command Bridge', subtitle: 'mission control' },
    { id: 'council', label: 'Council Chamber', subtitle: 'coordination' },
    { id: 'directors', label: 'Director Rooms', subtitle: 'specialists' },
    { id: 'ares', label: 'ARES Armory', subtitle: 'protocols' },
    { id: 'vault', label: 'Artifact Vault', subtitle: 'canon archive' },
    { id: 'memory', label: 'Memory Loom', subtitle: 'continuity' },
  ];

  return (
    <nav className="rounded-[2rem] border border-white/10 bg-black/30 p-3 shadow-console backdrop-blur-xl">
      <div className="mb-5 border-b border-white/10 px-3 pb-4">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.38em] text-command">Project</p>
        <h1 className="mt-2 text-xl font-semibold text-white">Overseer</h1>
      </div>
      <div className="grid gap-2">
        {rooms.map((room) => {
          const active = room.id === activeRoom;
          return (
            <button
              key={room.id}
              onClick={() => onNavigate(room.id)}
              className={`group grid grid-cols-[2.5rem_1fr] items-center rounded-2xl border p-3 text-left transition ${
                active ? 'border-signal/40 bg-signal/10 text-white shadow-[inset_0_0_22px_rgba(91,231,255,0.08)]' : 'border-transparent text-slate-400 hover:border-white/10 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className={`grid h-9 w-9 place-items-center rounded-xl border font-mono ${active ? 'border-signal/40 text-signal' : 'border-white/10 text-slate-500 group-hover:text-command'}`}>{roomGlyphs[room.id]}</span>
              <span>
                <span className="block text-sm font-medium">{room.label}</span>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-slate-500">{room.subtitle}</span>
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export function StatusRail() {
  return (
    <header className="grid gap-3 rounded-[2rem] border border-white/10 bg-black/25 p-4 shadow-console backdrop-blur-xl md:grid-cols-[1fr_auto_auto] md:items-center">
      <div>
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.35em] text-command">Strategic command institution</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">President Horne / Project Overseer / THINKTANK Directors</h2>
      </div>
      <div className="rounded-2xl border border-mint/20 bg-mint/10 px-4 py-3 font-mono text-xs uppercase tracking-[0.18em] text-mint">Canon linked</div>
      <div className="rounded-2xl border border-signal/20 bg-signal/10 px-4 py-3 font-mono text-xs uppercase tracking-[0.18em] text-signal">Sprint 1 active</div>
    </header>
  );
}

export function RoomShell({ eyebrow, title, brief, children }: { eyebrow: string; title: string; brief: string; children: ReactNode }) {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/20 p-5 shadow-console backdrop-blur-xl md:p-7">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(91,231,255,0.05)_1px,transparent_1px),linear-gradient(rgba(91,231,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      <div className="relative mb-7 max-w-4xl">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.42em] text-command">{eyebrow}</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-6xl">{title}</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">{brief}</p>
      </div>
      <div className="relative">{children}</div>
    </section>
  );
}

export function CommandInput() {
  return (
    <div className="rounded-[1.5rem] border border-command/20 bg-black/35 p-4 shadow-amber">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-command">Command strip</span>
        <div className="min-h-12 flex-1 rounded-2xl border border-white/10 bg-void/80 px-4 py-3 font-mono text-sm text-slate-400">
          president.horne / issue directive / select director / produce artifact
        </div>
        <button className="rounded-2xl border border-signal/30 bg-signal/10 px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-signal">Awaiting input</button>
      </div>
    </div>
  );
}
