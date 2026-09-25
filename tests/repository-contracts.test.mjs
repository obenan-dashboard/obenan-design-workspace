import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, test } from 'node:test';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function read(relativePath) {
  return readFileSync(join(root, relativePath), 'utf8');
}

describe('AC-RKG-5 one executable gate', () => {
  test('the repository exposes one aggregate verification command', () => {
    assert.match(read('scripts/verify-workspace.mjs'), /runWorkspaceChecks/);
    assert.match(read('.github/workflows/workspace-gates.yml'), /verify-workspace\.mjs/);
  });
});

describe('AC-RKG-6 section-level product routing', () => {
  test('the product lane and task router select numbered sections', () => {
    assert.match(read('knowledge/product/README.md'), /## Section-level routes/);
    assert.match(read('knowledge/TASK_ROUTER.md'), /PM section index/);
  });
});

describe('AC-RKG-7 decision queue without false approval', () => {
  test('the status queue is ordered, dated, owned, and explicitly unresolved', () => {
    const status = read('STATUS.md');
    assert.match(status, /## Decision queue/);
    assert.match(status, /Review checkpoint/);
    assert.match(status, /UNRESOLVED/);
    assert.doesNotMatch(status, /Decision queue[\s\S]{0,2500}\bAPPROVED\b/);
  });
});

describe('AC-RKG-8 existing corpus becomes portable', () => {
  test('the configured repository checks complete without hard errors', async () => {
    const { runWorkspaceChecks } = await import('../scripts/lib/workspace-gates.mjs');
    const result = runWorkspaceChecks(root, new Date('2026-09-25T12:00:00Z'));
    assert.deepEqual(result.errors, []);
  });
});
