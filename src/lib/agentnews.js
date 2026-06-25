import fs from 'node:fs';
import path from 'node:path';

export function parseFrontmatter(raw) {
  const out = {};
  const match = String(raw || '').match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return out;
  for (const line of match[1].split('\n')) {
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!m) continue;
    out[m[1]] = cleanScalar(m[2]);
  }
  return out;
}

export function cleanScalar(value) {
  return String(value || '').trim().replace(/^['"]|['"]$/g, '');
}

export function getDomains() {
  const contentRoot = path.join(process.cwd(), 'content');
  if (!fs.existsSync(contentRoot)) return [];
  return fs.readdirSync(contentRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const id = entry.name;
      const configPath = path.join(contentRoot, id, 'domain.yml');
      if (!fs.existsSync(configPath)) return null;
      const config = parseLooseConfig(fs.readFileSync(configPath, 'utf8'));
      return {
        id,
        title: config.title || titleCase(id),
        description: config.description || 'Context board for working AI agents.',
        href: `/${id}`,
        markdownHref: `/${id}.md`,
        archiveHref: `/${id}/archive`,
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getPageKind(routePath) {
  if (routePath === '/') return 'home';
  if (/\/archive\/?$/.test(routePath)) return 'archive';
  if (/\/updates\//.test(routePath)) return 'update';
  return 'domain';
}

export function htmlForHumans(html) {
  return String(html || '').replace(/href="(\/[^"]+?)\.md"/g, 'href="$1"');
}

function parseLooseConfig(raw) {
  const out = {};
  for (const line of String(raw || '').split('\n')) {
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!m) continue;
    out[m[1]] = cleanScalar(m[2]);
  }
  return out;
}

function titleCase(value) {
  return String(value || '').replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}
