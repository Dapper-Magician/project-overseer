import readme from '../../../../README.md?raw';
import manifesto from '../../../../docs/00_manifesto.md?raw';
import productVision from '../../../../docs/01_product_vision.md?raw';
import architecture from '../../../../docs/02_architecture_overview.md?raw';
import uiBible from '../../../../docs/03_ui_design_bible.md?raw';
import aresProtocol from '../../../../docs/04_ares_protocol.md?raw';
import directorModel from '../../../../docs/05_director_model.md?raw';
import memoryStrategy from '../../../../docs/06_memory_strategy.md?raw';
import roadmap from '../../../../docs/07_implementation_roadmap.md?raw';
import inspirations from '../../../../docs/08_inspirations.md?raw';
import openQuestionsDoc from '../../../../docs/09_open_questions.md?raw';
import designTokensDoc from '../../../../docs/10_design_tokens.md?raw';
import localDevEnvironmentDoc from '../../../../docs/11_local_dev_environment.md?raw';
import codeAuditDoc from '../../../../docs/12_code_audit.md?raw';
import developmentDoctrines from '../../../../docs/meta/development_doctrines.md?raw';
import decisionLog from '../../../../docs/meta/decision_log.md?raw';
import estimateLog from '../../../../docs/meta/estimate_calibration_log.md?raw';
import promptLog from '../../../../docs/meta/prompt_log.md?raw';
import artifactIndex from '../../../../docs/meta/artifact_index.md?raw';
import metaOpenQuestions from '../../../../docs/meta/open_questions.md?raw';
import sessionSummaries from '../../../../docs/meta/session_summaries.md?raw';
import buildPrompt from '../../../../prompts/01_build_from_canon.md?raw';
import overseer from '../../../../directors/overseer.md?raw';
import athena from '../../../../directors/athena.md?raw';
import bolt from '../../../../directors/bolt.md?raw';
import iris from '../../../../directors/iris.md?raw';
import darwin from '../../../../directors/darwin.md?raw';
import echo from '../../../../directors/echo.md?raw';
import ace from '../../../../directors/ace.md?raw';
import repoProtocol from '../../../../ares/repo.md?raw';
import kanbanProtocol from '../../../../ares/kanban.md?raw';
import memoryProtocol from '../../../../ares/memory.md?raw';
import systemDiagram from '../../../../diagrams/system_v0.mmd?raw';
import navigationDiagram from '../../../../diagrams/app_navigation_v0.mmd?raw';
import flowDiagram from '../../../../diagrams/director_artifact_flow.mmd?raw';
import roadmapDiagram from '../../../../diagrams/roadmap_v0.mmd?raw';

export type CanonRecord = {
  title: string;
  path: string;
  category: 'Canon' | 'Director' | 'ARES' | 'Prompt' | 'Diagram' | 'Memory';
  type: 'markdown' | 'mermaid';
  content: string;
  excerpt: string;
};

export type DirectorProfile = CanonRecord & {
  name: string;
  sigil: string;
  department: string;
  voice: string;
  notices: string;
  annoys: string;
  contributions: string[];
  accent: string;
};

export type ProtocolProfile = CanonRecord & {
  name: string;
  usualDirector: string;
  outputs: string[];
};

const clean = (value: string) => value.replace(/\s+/g, ' ').trim();

const titleFromMarkdown = (content: string) => {
  const firstHeading = content.split('\n').find((line) => line.startsWith('# '));
  return firstHeading?.replace('# ', '').trim() ?? 'Untitled Artifact';
};

const sectionRaw = (content: string, heading: string) => {
  const marker = `## ${heading}`;
  const start = content.indexOf(marker);
  if (start === -1) return '';
  const after = content.slice(start + marker.length);
  const next = after.search(/\n##\s/);
  return (next === -1 ? after : after.slice(0, next)).replace(/^\s+/, '');
};

const section = (content: string, heading: string) => clean(sectionRaw(content, heading));

const listSection = (content: string, heading: string) =>
  sectionRaw(content, heading)
    .split('\n')
    .map((line) => line.replace(/^[-*]\s*/, '').trim())
    .filter((line) => line && !line.endsWith(':') && !line.startsWith('Possible outputs'));

const excerpt = (content: string, max = 180) => {
  const source = clean(
    content
      .replace(/^# .+$/m, '')
      .replace(/```[\s\S]*?```/g, '')
      .replace(/^[-*>#`].*$/gm, ''),
  );
  return source.length > max ? `${source.slice(0, max).trim()}…` : source;
};

const record = (
  path: string,
  category: CanonRecord['category'],
  content: string,
  type: CanonRecord['type'] = 'markdown',
): CanonRecord => ({
  title: type === 'markdown' ? titleFromMarkdown(content) : path.split('/').pop() ?? path,
  path,
  category,
  type,
  content,
  excerpt: excerpt(content),
});

const directorRecord = (path: string, content: string, accent: string): DirectorProfile => {
  const title = titleFromMarkdown(content);
  const [, sigil = '', name = title] = title.match(/^([^\w\d]+)?\s*(.+)$/) ?? [];
  return {
    ...record(path, 'Director', content),
    name: name.trim(),
    sigil: sigil.trim(),
    department: section(content, 'Department'),
    voice: section(content, 'Voice'),
    notices: section(content, `What ${name.trim()} Notices`),
    annoys: section(content, `What Annoys ${name.trim()}`),
    contributions: listSection(content, 'Preferred Contributions').slice(0, 7),
    accent,
  };
};

const protocolRecord = (path: string, content: string): ProtocolProfile => ({
  ...record(path, 'ARES', content),
  name: titleFromMarkdown(content).replace(' Protocol', ''),
  usualDirector: section(content, 'Usual Director') || section(content, 'Usual Directors'),
  outputs: listSection(content, 'Outputs').filter((line) => !line.startsWith('Possible outputs')).slice(0, 6),
});

export const directors: DirectorProfile[] = [
  directorRecord('directors/overseer.md', overseer, 'from-command to-signal'),
  directorRecord('directors/athena.md', athena, 'from-command to-ember'),
  directorRecord('directors/bolt.md', bolt, 'from-signal to-mint'),
  directorRecord('directors/iris.md', iris, 'from-archive to-signal'),
  directorRecord('directors/darwin.md', darwin, 'from-mint to-signal'),
  directorRecord('directors/echo.md', echo, 'from-command to-archive'),
  directorRecord('directors/ace.md', ace, 'from-ember to-command'),
];

export const protocols: ProtocolProfile[] = [
  protocolRecord('ares/repo.md', repoProtocol),
  protocolRecord('ares/kanban.md', kanbanProtocol),
  protocolRecord('ares/memory.md', memoryProtocol),
];

export const memoryRecords: CanonRecord[] = [
  record('docs/meta/development_doctrines.md', 'Memory', developmentDoctrines),
  record('docs/meta/decision_log.md', 'Memory', decisionLog),
  record('docs/meta/estimate_calibration_log.md', 'Memory', estimateLog),
  record('docs/meta/prompt_log.md', 'Memory', promptLog),
  record('docs/meta/artifact_index.md', 'Memory', artifactIndex),
  record('docs/meta/open_questions.md', 'Memory', metaOpenQuestions),
  record('docs/meta/session_summaries.md', 'Memory', sessionSummaries),
];

export const canonDocs: CanonRecord[] = [
  record('README.md', 'Canon', readme),
  record('docs/00_manifesto.md', 'Canon', manifesto),
  record('docs/01_product_vision.md', 'Canon', productVision),
  record('docs/02_architecture_overview.md', 'Canon', architecture),
  record('docs/03_ui_design_bible.md', 'Canon', uiBible),
  record('docs/04_ares_protocol.md', 'Canon', aresProtocol),
  record('docs/05_director_model.md', 'Canon', directorModel),
  record('docs/06_memory_strategy.md', 'Canon', memoryStrategy),
  record('docs/07_implementation_roadmap.md', 'Canon', roadmap),
  record('docs/08_inspirations.md', 'Canon', inspirations),
  record('docs/09_open_questions.md', 'Canon', openQuestionsDoc),
  record('docs/10_design_tokens.md', 'Canon', designTokensDoc),
  record('docs/11_local_dev_environment.md', 'Canon', localDevEnvironmentDoc),
  record('docs/12_code_audit.md', 'Canon', codeAuditDoc),
];

export const promptRecords: CanonRecord[] = [record('prompts/01_build_from_canon.md', 'Prompt', buildPrompt)];

export const diagramRecords: CanonRecord[] = [
  record('diagrams/system_v0.mmd', 'Diagram', systemDiagram, 'mermaid'),
  record('diagrams/app_navigation_v0.mmd', 'Diagram', navigationDiagram, 'mermaid'),
  record('diagrams/director_artifact_flow.mmd', 'Diagram', flowDiagram, 'mermaid'),
  record('diagrams/roadmap_v0.mmd', 'Diagram', roadmapDiagram, 'mermaid'),
];

export const artifacts: CanonRecord[] = [
  ...canonDocs,
  ...directors,
  ...protocols,
  ...promptRecords,
  ...diagramRecords,
  ...memoryRecords,
];

export const activeMission = {
  title: 'Sprint 1: Workstation Shell from Canon',
  directive: 'Build the first navigable command workstation from real repository files.',
  nextAction: 'Stand up apps/web and render canonical rooms without placeholder data.',
  sourcePath: 'docs/07_implementation_roadmap.md',
};

export const decisionRecords = decisionLog
  .split('\n## ')
  .filter((entry) => entry.startsWith('DEC-'))
  .map((entry) => ({ title: entry.split('\n')[0], excerpt: excerpt(entry, 220) }));

export const designTokens = [
  { name: 'void', value: '#05070b', role: 'deep command background' },
  { name: 'obsidian', value: '#08111c', role: 'primary room panels' },
  { name: 'signal', value: '#5be7ff', role: 'canon links and active state' },
  { name: 'command', value: '#f7c873', role: 'mission focus and executive emphasis' },
  { name: 'archive', value: '#b5a7ff', role: 'memory and continuity' },
];

export const experienceGoals = [
  'Command presence before decoration',
  'Dense canon-backed panels over empty SaaS whitespace',
  'Director identity visible in every specialist surface',
  'ARES presented as equipped protocol infrastructure, never an agent persona',
  'Memory shown as structured continuity, not a transcript dump',
];
