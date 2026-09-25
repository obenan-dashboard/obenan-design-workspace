import { createHash } from 'node:crypto';
import {
  existsSync,
  lstatSync,
  readFileSync,
  readdirSync,
} from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';

const DEFAULT_PORTABILITY_ALLOWLIST = new Set([
  'PORTABLE_PATH_MAP.md',
  'SOURCE_PROVENANCE.md',
]);

function toRepositoryPath(root, path) {
  return relative(root, path).split(sep).join('/');
}

function walkFiles(root, predicate = () => true) {
  const files = [];
  const visit = (directory) => {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      if (entry.name === '.git' || entry.name === 'node_modules') continue;
      const absolute = join(directory, entry.name);
      if (entry.isDirectory()) visit(absolute);
      else if (entry.isFile() && predicate(absolute)) files.push(absolute);
    }
  };
  visit(root);
  return files.sort();
}

function markdownFiles(root) {
  return walkFiles(root, (path) => path.endsWith('.md'));
}

function lineNumberAt(text, offset) {
  return text.slice(0, offset).split('\n').length;
}

function normalizedLinkTarget(raw) {
  let target = raw.trim();
  if (target.startsWith('<') && target.includes('>')) {
    target = target.slice(1, target.indexOf('>'));
  } else {
    target = target.split(/\s+["']/)[0];
  }
  return target;
}

export function checkRelativeMarkdownLinks(root) {
  const errors = [];
  const linkPattern = /!?\[[^\]]*\]\(([^)]+)\)/g;

  for (const absolute of markdownFiles(root)) {
    const repositoryPath = toRepositoryPath(root, absolute);
    const content = readFileSync(absolute, 'utf8');
    const fencedRanges = [];
    let fenceStart = null;
    let offset = 0;
    for (const line of content.split(/(?<=\n)/)) {
      if (/^\s*```/.test(line)) {
        if (fenceStart === null) fenceStart = offset;
        else {
          fencedRanges.push([fenceStart, offset + line.length]);
          fenceStart = null;
        }
      }
      offset += line.length;
    }
    if (fenceStart !== null) fencedRanges.push([fenceStart, content.length]);

    for (const match of content.matchAll(linkPattern)) {
      if (fencedRanges.some(([start, end]) => match.index >= start && match.index < end)) continue;
      const target = normalizedLinkTarget(match[1]);
      if (!target || target.startsWith('#') || /^[a-z][a-z0-9+.-]*:/i.test(target)) continue;
      if (target.startsWith('/')) {
        errors.push({
          file: repositoryPath,
          line: lineNumberAt(content, match.index),
          target,
          reason: 'absolute target',
        });
        continue;
      }

      const withoutFragment = target.split('#')[0].split('?')[0];
      if (!withoutFragment) continue;
      let decoded = withoutFragment;
      try {
        decoded = decodeURIComponent(withoutFragment);
      } catch {
        errors.push({
          file: repositoryPath,
          line: lineNumberAt(content, match.index),
          target,
          reason: 'invalid URL encoding',
        });
        continue;
      }
      const resolved = resolve(dirname(absolute), decoded);
      if (resolved !== root && !resolved.startsWith(`${root}${sep}`)) {
        errors.push({
          file: repositoryPath,
          line: lineNumberAt(content, match.index),
          target,
          reason: 'target escapes repository',
        });
        continue;
      }
      if (!existsSync(resolved)) {
        errors.push({
          file: repositoryPath,
          line: lineNumberAt(content, match.index),
          target,
          reason: 'missing target',
        });
      }
    }
  }
  return errors;
}

export function checkPortability(root, allowlist = DEFAULT_PORTABILITY_ALLOWLIST) {
  const errors = [];
  const pathMap = join(root, 'PORTABLE_PATH_MAP.md');
  const declaredAliases = existsSync(pathMap)
    ? new Set(readFileSync(pathMap, 'utf8').match(/<external:[^>]+>/g) ?? [])
    : new Set();
  for (const absolute of markdownFiles(root)) {
    const repositoryPath = toRepositoryPath(root, absolute);
    if (allowlist.has(repositoryPath)) continue;
    const lines = readFileSync(absolute, 'utf8').split('\n');
    lines.forEach((line, index) => {
      const column = line.indexOf('/Users/');
      if (column !== -1) {
        errors.push({
          file: repositoryPath,
          line: index + 1,
          column: column + 1,
          reason: 'machine-specific /Users path',
        });
      }
      for (const alias of line.match(/<external:[^>]+>/g) ?? []) {
        if (!declaredAliases.has(alias)) {
          errors.push({
            file: repositoryPath,
            line: index + 1,
            column: line.indexOf(alias) + 1,
            reason: `undefined external-source alias ${alias}`,
          });
        }
      }
    });
  }
  return errors;
}

export function verifyIntegrityManifest(root, manifestPath = 'MANIFEST.sha256') {
  const errors = [];
  const absoluteManifest = join(root, manifestPath);
  if (!existsSync(absoluteManifest)) {
    return [{ file: manifestPath, line: 0, reason: 'missing manifest' }];
  }

  const lines = readFileSync(absoluteManifest, 'utf8').split('\n');
  lines.forEach((line, index) => {
    if (!line.trim()) return;
    const match = line.match(/^([a-f0-9]{64})\s+\*?(\.\/)?(.+)$/i);
    if (!match) {
      errors.push({ file: manifestPath, line: index + 1, reason: 'malformed manifest line' });
      return;
    }
    const expected = match[1].toLowerCase();
    const repositoryPath = match[3];
    const absolute = join(root, repositoryPath);
    if (!existsSync(absolute) || !lstatSync(absolute).isFile()) {
      errors.push({ file: repositoryPath, line: index + 1, reason: 'missing file' });
      return;
    }
    const actual = createHash('sha256').update(readFileSync(absolute)).digest('hex');
    if (actual !== expected) {
      errors.push({ file: repositoryPath, line: index + 1, reason: 'sha256 mismatch' });
    }
  });
  return errors;
}

function validDate(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value ?? '');
  if (!match) return false;
  const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
  return !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value;
}

export function checkEvidenceFreshness(root, entries, now = new Date()) {
  const errors = [];
  const warnings = [];
  const today = now.toISOString().slice(0, 10);

  for (const entry of entries) {
    if (!entry || typeof entry.path !== 'string' || !entry.path
      || typeof entry.sourceRevision !== 'string' || !entry.sourceRevision) {
      errors.push({ file: entry?.path ?? 'evidence-freshness.json', reason: 'missing required freshness field' });
      continue;
    }
    if (!validDate(entry.observedThrough) || !validDate(entry.reverifyAfter)) {
      errors.push({ file: entry.path, reason: 'invalid configured freshness date' });
      continue;
    }
    if (entry.observedThrough > entry.reverifyAfter) {
      errors.push({ file: entry.path, reason: 're-verify date precedes observation date' });
      continue;
    }

    const absolute = join(root, entry.path);
    if (!existsSync(absolute)) {
      errors.push({ file: entry.path, reason: 'configured evidence file is missing' });
      continue;
    }

    const content = readFileSync(absolute, 'utf8');
    const requiredLines = [
      `- Observed through: \`${entry.observedThrough}\``,
      `- Source revision: \`${entry.sourceRevision}\``,
      `- Re-verify on or before: \`${entry.reverifyAfter}\``,
    ];
    const missing = requiredLines.filter((line) => !content.includes(line));
    if (missing.length) {
      errors.push({
        file: entry.path,
        reason: `freshness header does not match configuration: ${missing.join(', ')}`,
      });
      continue;
    }
    if (today > entry.reverifyAfter) {
      warnings.push({
        file: entry.path,
        reason: `evidence review date passed on ${entry.reverifyAfter}`,
      });
    }
  }
  return { errors, warnings };
}

export function loadFreshnessConfiguration(root, configPath = 'evidence-freshness.json') {
  const absolute = join(root, configPath);
  if (!existsSync(absolute)) {
    return { errors: [{ file: configPath, reason: 'missing freshness configuration' }], entries: [] };
  }
  try {
    const parsed = JSON.parse(readFileSync(absolute, 'utf8'));
    if (!Array.isArray(parsed.files)) throw new Error('files must be an array');
    return { errors: [], entries: parsed.files };
  } catch (error) {
    return { errors: [{ file: configPath, reason: `invalid freshness configuration: ${error.message}` }], entries: [] };
  }
}

export function runWorkspaceChecks(root, now = new Date()) {
  const linkErrors = checkRelativeMarkdownLinks(root).map((error) => ({ gate: 'links', ...error }));
  const portabilityErrors = checkPortability(root).map((error) => ({ gate: 'portability', ...error }));
  const integrityErrors = verifyIntegrityManifest(root).map((error) => ({ gate: 'integrity', ...error }));
  const configuration = loadFreshnessConfiguration(root);
  const freshness = configuration.errors.length
    ? { errors: configuration.errors, warnings: [] }
    : checkEvidenceFreshness(root, configuration.entries, now);
  return {
    errors: [
      ...linkErrors,
      ...portabilityErrors,
      ...integrityErrors,
      ...freshness.errors.map((error) => ({ gate: 'freshness', ...error })),
    ],
    warnings: freshness.warnings.map((warning) => ({ gate: 'freshness', ...warning })),
  };
}
