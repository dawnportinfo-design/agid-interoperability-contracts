import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import { hasTestedGuard, obligationsForLayer, plannedObligations, type ProofObligation } from '../src/proof-obligations.ts';

const fixture = JSON.parse(fs.readFileSync('fixtures/proof-obligations.json', 'utf8')) as {
  obligations: ProofObligation[];
};

test('proof obligations cover each AGID compatibility layer', () => {
  for (const layer of ['amt', 'zk', 'postal', 'ai', 'ethereum'] as const) {
    assert.ok(obligationsForLayer(fixture.obligations, layer).length >= 1, layer);
  }
});

test('AMT and ZK critical guards are tested', () => {
  assert.equal(hasTestedGuard(fixture.obligations, 'amt-unique-resolution-before-pid'), true);
  assert.equal(hasTestedGuard(fixture.obligations, 'zk-proof-does-not-upgrade-amt-state'), true);
});

test('planned obligations remain visible instead of pretending completion', () => {
  const planned = plannedObligations(fixture.obligations).map((obligation) => obligation.id);
  assert.deepEqual(planned, ['ethereum-anchor-only-public-roots']);
});

