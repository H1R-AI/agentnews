#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const root = process.cwd();
const contentRoot = path.join(root, 'content');
const financeRoot = path.join(contentRoot, 'finance');
const siteRoot = path.join(root, '.agentnews', 'site');
const cmd = process.argv[2] || 'help';

switch (cmd) {
  case 'init-finance':
    initFinance();
    break;
  case 'compose':
    composeAll();
    break;
  case 'validate':
    validateAll({ exit: true });
    break;
  case 'check':
    checkAll();
    break;
  case 'launch-check':
    launchCheckAll();
    break;
  case 'brief':
    printBrief(process.argv[3] || 'finance');
    break;
  case 'sources':
    printDomainDoc(process.argv[3] || 'finance', 'sources.md');
    break;
  case 'queries':
    printDomainDoc(process.argv[3] || 'finance', 'queries.md');
    break;
  case 'source-check':
    sourceCheck(process.argv[3]);
    break;
  case 'window-path':
    printWindowPath(process.argv[3]);
    break;
  case 'help':
  default:
    printHelp();
}

function initFinance() {
  writeIfMissing('content/finance/domain.yml', `domain: finance
title: "Finance / Macro"
cadence: 6h
homepage_windows: 1
required_publishable_windows: 4
confidence_emoji: [corroborated, developing, signal]
evidence_labels: [verified report, market interpretation, watch signal, needs confirmation]
sources:
  wire: [reuters.com/markets, apnews.com, bloomberg.com/markets]
  primary: [federalreserve.gov, eia.gov]
  social: ["x: curated finance lists", "reddit: r/investing"]
`);

  writeIfMissing('content/finance/frame.md', `---
domain: finance
updated: 2026-06-21T12:00Z
---
**Geopolitics is the switch, not the data.** Until escalation risk stabilizes,
treat it as the lead variable above ordinary economic-calendar noise.
`);

  const windows = [
    ['2026/06/20/12.md', '2026-06-20T12:00Z', '2026-06-20T18:00Z', 'First reports of talks friction surfaced.', 'developing report', '🟡'],
    ['2026/06/20/18.md', '2026-06-20T18:00Z', '2026-06-21T00:00Z', 'Ceasefire held overnight.', 'corroborated reports', '🟢'],
    ['2026/06/21/00.md', '2026-06-21T00:00Z', '2026-06-21T06:00Z', 'Oil options chatter picked up.', 'watch signal', '🔵'],
    ['2026/06/21/06.md', '2026-06-21T06:00Z', '2026-06-21T12:00Z', 'US-Iran talks reported stalled.', 'corroborated reports', '🟢'],
  ];
  for (const [rel, start, end, title, evidence, emoji] of windows) {
    writeIfMissing(`content/finance/windows/${rel}`, `---
domain: finance
window_start: ${start}
window_end: ${end}
reporter: finance-reporter
created: ${end.replace('Z', 'Z')}
---
- ${emoji} **${title}** Illustrative item for the first generated board; replace with a real reporter window before launch.
  - evidence: ${evidence}
  - uncertainty: example content; not for live publication.
  - follow: \`finance macro dominant frame\`
  - sources: [Example source](https://example.com/)

**Watch** — threads: dominant macro frame · source disagreement · next official catalyst · keywords: \`macro risk premium\` · \`policy signal\`
`);
  }

  writeIfMissing('content/finance/week/2026-W25.md', `---
domain: finance
period: 2026-W25
updated: 2026-06-21T12:00Z
---
# Finance week frame

Authored weekly context goes here. This is perspective, not a concatenation of windows.
`);
  writeIfMissing('content/finance/month/2026-06.md', `---
domain: finance
period: 2026-06
updated: 2026-06-21T12:00Z
---
# Finance monthly frame

Authored structural context goes here. This is slower-moving perspective.
`);
  console.log('Initialized finance content under content/finance.');
}

function composeAll() {
  ensureDir(siteRoot);
  emptyDir(siteRoot);

  const domains = listDomains();
  writeFile(path.join(siteRoot, 'index.md'), renderIndex(domains));
  for (const domain of domains) composeDomain(domain);
  console.log(`Composed ${domains.length} domain(s) into ${path.relative(root, siteRoot)}.`);
}

function composeDomain(domain) {
  const dir = path.join(contentRoot, domain);
  const config = readDomainConfig(path.join(dir, 'domain.yml'));
  const title = config.title || domain;
  const homepageWindows = Number(config.homepage_windows || config.windows_per_board || 1);
  const frame = readMarkdownBody(path.join(dir, 'frame.md'));
  const windows = listWindows(domain).filter((win) => win.status !== 'example').sort((a, b) => b.id.localeCompare(a.id));
  const latest = windows.slice(0, homepageWindows);
  const newest = latest[0];

  let board = frontmatter({
    title: `${title} — agentnews context board`,
    name: `agentnews-${domain}`,
    namespace: 'agentnews',
    type: 'app',
    version: '0.1.0',
    description: `${title} context board for working AI agents.`,
    domain,
    updated: newest?.window_end || '',
    next_update: newest ? addHours(newest.window_end, Number(config.cadence?.replace(/h$/, '') || 6)) : '',
  });
  board += `# ${title} — what an agent should know before answering\n\n`;
  board += `This is the current now board for working AI agents: current frame, latest window, watch threads, and sources to pull. It is not a conclusion engine.\n\n`;
  board += `## How to read this board\n\n`;
  board += `- Use it as a priority map for current context, not as a conclusion.\n`;
  board += `- Keep evidence labels and uncertainty attached to each item.\n`;
  board += `- Treat watch threads and follow queries as starting points for further source work.\n\n`;
  board += `## The frame right now\n\n${frame}\n\n`;
  board += `## Current now board\n\n`;
  for (const win of latest) {
    board += `### ▸ ${formatWindowTitle(win)}\n\n${win.body}\n\n`;
  }
  board += `## Go deeper\n\n`;
  board += `- [Archive](./${domain}/archive.md)\n`;
  board += `- [This week](./${domain}/week.md)\n`;
  board += `- [This month](./${domain}/month.md)\n`;
  board += `\n---\n\nAgents can read this board directly at \`https://agentnews.md/${domain}.md\`; humans can read the same content at \`https://agentnews.md/${domain}\`. In String, open this markdown page and run \`/install\` to keep it as \`app:agentnews-${domain}\`.\n`;
  writeFile(path.join(siteRoot, `${domain}.md`), board);

  for (const win of windows) {
    writeFile(path.join(siteRoot, domain, 'w', `${win.id}.md`), renderWindowPage(title, win));
  }
  writeFile(path.join(siteRoot, domain, 'archive.md'), renderArchive(title, domain, windows));
  composePeriodPage(domain, title, 'week');
  composePeriodPage(domain, title, 'month');
}

function composePeriodPage(domain, title, kind) {
  const dir = path.join(contentRoot, domain, kind);
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort().reverse() : [];
  if (!files.length) return;
  const latest = files[0];
  const body = fs.readFileSync(path.join(dir, latest), 'utf8');
  writeFile(path.join(siteRoot, domain, `${kind}.md`), normalizePage(body, `${title} — ${kind}`));
  for (const file of files) {
    const id = file.replace(/\.md$/, '');
    writeFile(path.join(siteRoot, domain, kind, `${id}.md`), normalizePage(fs.readFileSync(path.join(dir, file), 'utf8'), `${title} — ${kind} ${id}`));
  }
}

function validateAll({ exit = false, requireWindowCount = false } = {}) {
  const errors = [];
  const warnings = [];
  for (const domain of listDomains()) {
    const dir = path.join(contentRoot, domain);
    if (!fs.existsSync(path.join(dir, 'domain.yml'))) errors.push(`${domain}: missing domain.yml`);
    if (!fs.existsSync(path.join(dir, 'frame.md'))) errors.push(`${domain}: missing frame.md`);
    const config = readDomainConfig(path.join(dir, 'domain.yml'));
    const windows = listWindows(domain);
    const publishableWindows = windows.filter((win) => win.status !== 'example');
    const requiredWindows = Number(config.required_publishable_windows || 4);
    if (windows.length === 0) errors.push(`${domain}: no windows found`);
    if (requireWindowCount && publishableWindows.length < requiredWindows) {
      errors.push(`${domain}: only ${publishableWindows.length}/${requiredWindows} publishable windows; example windows do not count`);
    }
    for (const win of windows) {
      if (!win.window_start || !win.window_end || !win.reporter || !win.created) {
        errors.push(`${win.rel}: missing required frontmatter keys`);
      }
      const expected = expectedWindowRel(win.window_start);
      if (expected && expected !== win.rel) warnings.push(`${win.rel}: path does not match window_start; expected ${expected}`);
      if (win.status === 'example') {
        if (requireWindowCount) {
          warnings.push(`${win.rel}: example window skipped for publication checks`);
        }
        continue;
      }
      const itemLines = win.body.split('\n').filter((line) => /^-\s+[🟢🟡🔵]\s+\*\*/u.test(line));
      if (itemLines.length === 0) errors.push(`${win.rel}: no item with leading confidence emoji`);
      for (const item of itemLines) {
        const after = win.body.slice(win.body.indexOf(item));
        const next = after.split('\n- ')[0];
        if (!/sources:\s*\[.+?\]\(https?:\/\//s.test(next)) errors.push(`${win.rel}: item missing at least one real source URL`);
      }
      const sourceIssues = inspectSourceText(win.body);
      for (const issue of sourceIssues.errors) errors.push(`${win.rel}: ${issue}`);
      for (const issue of sourceIssues.warnings) warnings.push(`${win.rel}: ${issue}`);
    }
  }
  if (warnings.length) {
    console.log(`${warnings.length} warning(s):`);
    for (const warning of warnings) console.log(`  ! ${warning}`);
  }
  if (errors.length) {
    console.error(`${errors.length} error(s):`);
    for (const error of errors) console.error(`  - ${error}`);
    if (exit) process.exit(1);
  } else {
    console.log('OK — agentnews content validation passed.');
  }
  return { errors, warnings };
}

function checkAll() {
  const result = validateAll();
  if (result.errors.length) process.exit(1);
  composeAll();
  const build = spawnSync('npm', ['run', 'build'], { cwd: root, stdio: 'inherit' });
  if (build.status !== 0) process.exit(build.status || 1);
  const required = ['dist/index.html', 'dist/index.md', 'dist/finance/index.html', 'dist/finance.md'];
  const missing = required.filter((rel) => !fs.existsSync(path.join(root, rel)));
  if (missing.length) {
    console.error(`Missing expected build outputs:\n${missing.map((m) => `  - ${m}`).join('\n')}`);
    process.exit(1);
  }
  console.log('OK — build produced HTML + .md route twins.');
}

function launchCheckAll() {
  const result = validateAll({ requireWindowCount: true });
  if (result.errors.length) process.exit(1);
  checkAll();
}

function printBrief(domain) {
  const domainDir = path.join(contentRoot, domain);
  if (!fs.existsSync(domainDir)) {
    console.error(`Unknown domain: ${domain}`);
    process.exit(1);
  }
  const config = readDomainConfig(path.join(domainDir, 'domain.yml'));
  const windows = listWindows(domain).sort((a, b) => b.id.localeCompare(a.id)).slice(0, 4);
  console.log(`# ${config.title || domain} reporter brief\n`);
  console.log('## Current frame\n');
  console.log(readMarkdownBody(path.join(domainDir, 'frame.md')));
  console.log('\n## Latest windows\n');
  for (const win of windows) {
    const firstItem = win.body.split('\n').find((line) => /^-\s+[🟢🟡🔵]\s+\*\*/u.test(line)) || '(no item)';
    const status = win.status === 'example' ? 'EXAMPLE, not publishable' : (win.status || 'draft');
    console.log(`- ${win.id} [${status}]: ${firstItem.replace(/^-\s+/, '')}`);
  }
  console.log('\n## Tooling\n');
  console.log('- Reporter app: `/open /home/ubuntu/crew/codex/agentnews/agentnews-ops/apps/source-watch/string.md`');
  console.log('- Desk app: `/open /home/ubuntu/crew/codex/agentnews/agentnews-ops/apps/claim-check/string.md`');
  console.log('- Read source map: source-watch `/act.sources finance`');
  console.log('- Read query pack: source-watch `/act.queries finance`');
  console.log('- Check a draft: claim-check `/act.file content/finance/windows/YYYY/MM/DD/HH.md`');
}

function printDomainDoc(domain, fileName) {
  const file = path.join(contentRoot, domain, fileName);
  if (!fs.existsSync(file)) {
    console.error(`Missing ${fileName} for domain: ${domain}`);
    process.exit(1);
  }
  console.log(fs.readFileSync(file, 'utf8'));
}

function sourceCheck(fileArg) {
  if (!fileArg) {
    console.error('Usage: node ./agentnews.mjs source-check <markdown-file>');
    process.exit(1);
  }
  const file = path.resolve(root, fileArg);
  if (!fs.existsSync(file)) {
    console.error(`File not found: ${fileArg}`);
    process.exit(1);
  }
  const raw = fs.readFileSync(file, 'utf8');
  const urls = [...raw.matchAll(/\[[^\]]+\]\((https?:\/\/[^)]+)\)/g)].map((m) => m[1]);
  const issues = inspectSourceText(raw);
  const warnings = [...issues.errors, ...issues.warnings];
  console.log(`# Source check: ${path.relative(root, file)}\n`);
  console.log('## URLs');
  if (urls.length) for (const url of urls) console.log(`- ${url}`);
  else console.log('- none');
  console.log('\n## Warnings');
  if (warnings.length) for (const warning of warnings) console.log(`- ${warning}`);
  else console.log('- none');
  if (warnings.length) process.exit(1);
}

function inspectSourceText(raw) {
  const errors = [];
  const warnings = [];
  const urls = [...raw.matchAll(/\[[^\]]+\]\((https?:\/\/[^)]+)\)/g)].map((m) => m[1]);
  if (!urls.length) errors.push('No source URLs found.');
  for (const url of urls) {
    if (/example\.com/i.test(url)) errors.push(`Placeholder URL: ${url}`);
    if (/^https?:\/\/(www\.)?(reuters\.com|apnews\.com|bloomberg\.com|ft\.com|wsj\.com)\/?$/i.test(url)) {
      warnings.push(`Generic publisher homepage; prefer a specific article: ${url}`);
    }
  }
  if (/illustrative|not for live publication|replace with a real/i.test(raw)) {
    errors.push('Draft contains placeholder language.');
  }
  return { errors, warnings };
}

function printWindowPath(iso = new Date().toISOString()) {
  console.log(expectedWindowRel(floorToWindow(iso)) || '');
}

function renderIndex(domains) {
  let body = frontmatter({ title: 'agentnews.md — macro context for working AIs', updated: new Date().toISOString() });
  body += '# agentnews.md\n\n';
  body += 'Context boards for working AI agents.\n\n';
  body += 'Most AI answers get worse when they start from a blank chat. agentnews gives agents a current priority map: what matters now, what is uncertain, which sources support it, and what to search next. It is not a news article site and not a conclusion engine.\n\n';
  body += 'Humans can read the HTML pages. Agents can read the same boards as markdown.\n\n';
  body += '## Supported domains\n\n';
  for (const domain of domains) {
    const config = readDomainConfig(path.join(contentRoot, domain, 'domain.yml'));
    const title = config.title || domain;
    const description = config.description || 'Context board for working AI agents.';
    body += `### ${title}\n\n`;
    body += `${description}\n\n`;
    body += `- Human HTML: [/${domain}](./${domain})\n`;
    body += `- Agent markdown: <a href="/${domain}.md">/${domain}.md</a>\n`;
    body += `- Latest windows: [/${domain}/archive](./${domain}/archive)\n`;
    body += `- Week view: [/${domain}/week](./${domain}/week)\n`;
    body += `- Month view: [/${domain}/month](./${domain}/month)\n\n`;
  }
  body += '## How to read a board\n\n';
  body += '1. Read the domain board before answering a current-domain question.\n';
  body += '2. Treat it as a priority map, not a final answer.\n';
  body += '3. Preserve uncertainty and evidence labels.\n';
  body += '4. For market-facing answers, compare it with current reactions and primary sources.\n';
  body += '5. Use follow-up queries and watch threads as search starting points.\n\n';
  body += '## Direct access\n\n';
  body += '- HTML for people: `https://agentnews.md/finance`\n';
  body += '- Markdown for agents: <a href="https://agentnews.md/finance.md">https://agentnews.md/finance.md</a>\n';
  body += '- Content negotiation: request `Accept: text/markdown` on the HTML route when supported.\n\n';
  return body;
}

function renderWindowPage(domainTitle, win) {
  return frontmatter({ title: `${domainTitle} window ${win.id}`, domain: win.domain, updated: win.created }) +
    `# ${domainTitle} window ${win.id}\n\nWindow: ${win.window_start} to ${win.window_end}\nReporter: ${win.reporter}\n\n${win.body}\n`;
}

function renderArchive(title, domain, windows) {
  let body = frontmatter({ title: `${title} archive`, domain, updated: windows[0]?.created || '' });
  body += `# ${title} archive\n\nEvery 6h window is preserved here.\n\n`;
  for (const win of windows) body += `- [${win.id}](/${domain}/w/${win.id}) — ${win.window_start} to ${win.window_end}\n`;
  return body;
}

function normalizePage(raw, fallbackTitle) {
  if (raw.startsWith('---\n')) return raw;
  return frontmatter({ title: fallbackTitle }) + raw;
}

function readMarkdownBody(file) {
  const raw = fs.readFileSync(file, 'utf8');
  return stripFrontmatter(raw).trim();
}

function listDomains() {
  if (!fs.existsSync(contentRoot)) return [];
  return fs.readdirSync(contentRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => fs.existsSync(path.join(contentRoot, name, 'domain.yml')))
    .sort();
}

function listWindows(domain) {
  const base = path.join(contentRoot, domain, 'windows');
  if (!fs.existsSync(base)) return [];
  return walk(base).filter((file) => file.endsWith('.md')).map((file) => {
    const rel = path.relative(base, file).split(path.sep).join('/');
    const raw = fs.readFileSync(file, 'utf8');
    const fm = parseFrontmatter(raw);
    const body = stripFrontmatter(raw).trim();
    return {
      rel,
      id: rel.replace(/\.md$/, '').replaceAll('/', '-'),
      domain,
      body,
      ...fm,
    };
  });
}

function formatWindowTitle(win) {
  return `${win.window_start || win.id} — ${win.window_end || ''}`;
}

function expectedWindowRel(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return `${d.getUTCFullYear()}/${pad(d.getUTCMonth() + 1)}/${pad(d.getUTCDate())}/${pad(d.getUTCHours())}.md`;
}

function floorToWindow(iso) {
  const d = new Date(iso);
  d.setUTCMinutes(0, 0, 0);
  d.setUTCHours(Math.floor(d.getUTCHours() / 6) * 6);
  return d.toISOString().replace(/\.000Z$/, 'Z');
}

function addHours(iso, hours) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  d.setUTCHours(d.getUTCHours() + hours);
  return d.toISOString().replace(/\.000Z$/, 'Z');
}

function readDomainConfig(file) {
  const out = {};
  if (!fs.existsSync(file)) return out;
  for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
    const m = line.match(/^([a-zA-Z0-9_]+):\s*(.+)$/);
    if (!m) continue;
    out[m[1]] = m[2].replace(/^['"]|['"]$/g, '');
  }
  return out;
}

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  const out = {};
  if (!m) return out;
  for (const line of m[1].split('\n')) {
    const km = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (km) out[km[1]] = km[2].trim();
  }
  return out;
}

function stripFrontmatter(raw) {
  return raw.replace(/^---\n[\s\S]*?\n---\n?/, '');
}

function frontmatter(fields) {
  let out = '---\n';
  for (const [key, value] of Object.entries(fields)) {
    if (value === undefined || value === null || value === '') continue;
    out += `${key}: ${JSON.stringify(String(value))}\n`;
  }
  return out + '---\n\n';
}

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function emptyDir(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir)) fs.rmSync(path.join(dir, entry), { recursive: true, force: true });
}

function writeFile(file, body) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, body);
}

function writeIfMissing(rel, body) {
  const file = path.join(root, rel);
  if (fs.existsSync(file)) return;
  writeFile(file, body);
  console.log(`+ ${rel}`);
}

function pad(n) {
  return String(n).padStart(2, '0');
}

function printHelp() {
  console.log(`agentnews mechanical process

Commands:
  init-finance         Create starter content/finance files if missing
  validate             Check reporter-authored source files
  compose              Build .agentnews/site route-level markdown from content/
  check                validate + compose + astro build + twin-output check
  launch-check         check plus require enough publishable windows for the board
  brief [domain]       Show reporter/desk brief for a domain
  sources [domain]     Print the domain source map
  queries [domain]     Print the domain query pack
  source-check <file>  Extract source URLs and flag obvious citation issues
  window-path [ISO]    Print the UTC 6h window path for a timestamp

Reporter and desk judgment stay outside this script. This only handles deterministic
file, route, build, and deployment mechanics plus source-research support.`);
}
