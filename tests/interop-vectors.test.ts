import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import { decideInterop, type InteropVector } from '../src/index.ts';

const fixture = JSON.parse(fs.readFileSync('fixtures/interop-vectors.json', 'utf8')) as {
  vectors: InteropVector[];
};

test('all shared interop vectors produce the expected cross-layer decision', () => {
  for (const vector of fixture.vectors) {
    assert.equal(decideInterop(vector), vector.expectedDecision, vector.id);
  }
});

test('verified AMT plus official postal zone allows proof-compatible output', () => {
  const vector = fixture.vectors.find((item) => item.id === 'verified-postal-proof-allowed');
  assert.ok(vector);
  assert.equal(decideInterop(vector), 'allow');
});

test('unresolved AMT state blocks even when a postal-equivalent fallback exists', () => {
  const vector = fixture.vectors.find((item) => item.id === 'unresolved-proof-blocked');
  assert.ok(vector);
  assert.equal(decideInterop(vector), 'block');
});

