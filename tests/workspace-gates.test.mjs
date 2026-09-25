import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, test } from 'node:test';

import {
  checkEvidenceFreshness,
  checkPortability,
  checkRelativeMarkdownLinks,
  verifyIntegrityManifest,
} from '../scripts/lib/workspace-gates.mjs';

const temporaryDirectories = [];

function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'obenan-workspace-gates-'));
  temporaryDirectories.push(root);
  return root;
}

function write(root, relativePath, contents) {
  const target = join(root, relativePath);
  mkdirSync(join(target, '..'), { recursive: true });
  writeFileSync(target, contents);
}

function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

afterEach(() => {
  while (temporaryDirectories.length) {
    rmSync(temporaryDirectories.pop(), { recursive: true, force: true });
  }
});

describe('AC-RKG-1 relative-link behavior', () => {
  test('accepts files, directories, external URLs, anchors, and encoded paths', () => {
    const root = fixture();
    write(root, 'README.md', [
      '[file](docs/guide.md)',
      '[directory](docs/)',
      '[encoded](docs/a%20b.md)',
      '[external](https://example.com)',
      '[anchor](#section)',
    ].join('\n'));
    write(root, 'docs/guide.md', '# Guide');
    write(root, 'docs/a b.md', '# Encoded');

    assert.deepEqual(checkRelativeMarkdownLinks(root), []);
  });

  test('reports the source line and missing local target', () => {
    const root = fixture();
    write(root, 'README.md', '# Start\n[missing](docs/missing.md)\n');

    assert.deepEqual(checkRelativeMarkdownLinks(root), [{
      file: 'README.md',
      line: 2,
      target: 'docs/missing.md',
      reason: 'missing target',
    }]);
  });
});

describe('AC-RKG-2 portability behavior', () => {
  test('rejects a machine path in prose or inline code', () => {
    const root = fixture();
    write(root, 'notes.md', 'Source: `/Users/example/private/file.md`\n');

    assert.equal(checkPortability(root).length, 1);
  });

  test('permits machine paths only in exact allowlisted provenance files', () => {
    const root = fixture();
    write(root, 'PORTABLE_PATH_MAP.md', '`/Users/example/source` -> `relative`\n');
    write(root, 'SOURCE_PROVENANCE.md', 'Original: `/Users/example/source`\n');

    assert.deepEqual(checkPortability(root), []);
  });
});

describe('AC-RKG-3 integrity behavior', () => {
  test('accepts matching entries and reports changed or missing files', () => {
    const root = fixture();
    const original = 'verified bytes\n';
    write(root, 'artifact.txt', original);
    write(root, 'MANIFEST.sha256', `${sha256(original)}  ./artifact.txt\n`);

    assert.deepEqual(verifyIntegrityManifest(root), []);

    write(root, 'artifact.txt', 'changed bytes\n');
    assert.equal(verifyIntegrityManifest(root)[0].reason, 'sha256 mismatch');

    rmSync(join(root, 'artifact.txt'));
    assert.equal(verifyIntegrityManifest(root)[0].reason, 'missing file');
  });

  test('reports malformed manifest rows', () => {
    const root = fixture();
    write(root, 'MANIFEST.sha256', 'not-a-manifest-row\n');

    assert.equal(verifyIntegrityManifest(root)[0].reason, 'malformed manifest line');
  });
});

describe('AC-RKG-4 evidence-freshness behavior', () => {
  const entry = {
    path: 'evidence.md',
    observedThrough: '2026-01-01',
    sourceRevision: 'source-abc',
    reverifyAfter: '2026-04-01',
  };

  function evidenceHeader(overrides = {}) {
    const value = { ...entry, ...overrides };
    return [
      '## Evidence freshness',
      '',
      `- Observed through: \`${value.observedThrough}\``,
      `- Source revision: \`${value.sourceRevision}\``,
      `- Re-verify on or before: \`${value.reverifyAfter}\``,
      '',
    ].join('\n');
  }

  test('passes through the review date and warns one day later', () => {
    const root = fixture();
    write(root, entry.path, evidenceHeader());

    const onBoundary = checkEvidenceFreshness(root, [entry], new Date('2026-04-01T12:00:00Z'));
    assert.deepEqual(onBoundary, { errors: [], warnings: [] });

    const afterBoundary = checkEvidenceFreshness(root, [entry], new Date('2026-04-02T00:00:00Z'));
    assert.equal(afterBoundary.errors.length, 0);
    assert.equal(afterBoundary.warnings.length, 1);
  });

  test('fails missing or contradictory visible metadata', () => {
    const root = fixture();
    write(root, entry.path, evidenceHeader({ sourceRevision: 'wrong-source' }));

    assert.equal(checkEvidenceFreshness(root, [entry], new Date('2026-01-02T00:00:00Z')).errors.length, 1);
  });
});
