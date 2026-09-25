import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, test } from 'node:test';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function read(relativePath) {
  return readFileSync(join(root, relativePath), 'utf8');
}

describe('AC-DOP-1 narrow approved ownership record', () => {
  test('records the two exact roles while preserving unresolved decisions', () => {
    const decision = read('knowledge/design/approved/DR-D11_CODE_OWNERSHIP.md');

    assert.match(decision, /Status: `APPROVED`/);
    assert.match(decision, /Decision date: `2026-09-25`/);
    assert.match(decision, /Design owner: `seven-obenan`/);
    assert.match(decision, /Frontend lead: `seven-obenan`/);
    for (const id of ['DR-D05', 'DR-D06', 'DR-D08', 'DR-D09', 'DR-D10', 'DR-D12']) {
      assert.match(decision, new RegExp(`${id}[^\\n]*UNRESOLVED`));
    }
  });
});

describe('AC-DOP-2 one consistent repository state', () => {
  test('routes to the approved record and advances the unresolved queue', () => {
    const approvedIndex = read('knowledge/design/approved/README.md');
    const proposed = read('knowledge/design/proposed/DECISION_REQUESTS_v1.md');
    const status = read('STATUS.md');

    assert.match(approvedIndex, /DR-D11_CODE_OWNERSHIP\.md/);
    assert.match(proposed, /DR-D11_CODE_OWNERSHIP\.md/);
    assert.doesNotMatch(status, /DR-D11 — `UNRESOLVED`/);
    assert.match(status, /\| P0 \| DR-D05 — `VALIDATION REQUIRED`/);
  });
});

describe('AC-DOP-3 agent-ready validation package', () => {
  test('defines exact evidence, viewports, and one result path', () => {
    const brief = read('knowledge/design/validation/DR-D05-D06-D08_VALIDATION_BRIEF_2026-09-25.md');

    assert.match(brief, /Owner: `seven-obenan`/);
    assert.match(brief, /375 px/);
    assert.match(brief, /1440 px/);
    assert.match(brief, /4\.5:1/);
    assert.match(brief, /3:1/);
    assert.match(brief, /Create Account/);
    assert.match(brief, /12 px, 16 px, and 20 px/);
    assert.match(brief, /DR-D05-D06-D08_VALIDATION_RESULT\.md/);
    assert.match(brief, /Do not implement/);
  });
});

describe('AC-DOP-4 ratification remains explicit', () => {
  test('requires evidence-backed ratification and keeps issue 5 open', () => {
    const template = read('knowledge/design/validation/DR-D05-D06-D08_VALIDATION_RESULT.md');

    for (const heading of ['Evidence', 'Recommendation', 'Owner validation', 'Decision date', 'Exact promoted scope']) {
      assert.match(template, new RegExp(`## ${heading}`));
    }
    assert.match(template, /Issue #5 remains open/);
    assert.match(template, /DR-D12/);
  });
});
