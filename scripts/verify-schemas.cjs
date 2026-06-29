const fs = require('node:fs');
const path = require('node:path');

const schemas = fs.readdirSync('schemas').filter((file) => file.endsWith('.schema.json'));
const required = new Set([
  'amt-envelope.schema.json',
  'zk-proof-request.schema.json',
  'postal-zone.schema.json',
  'address-ai-output.schema.json',
  'interop-vector.schema.json',
  'proof-obligation.schema.json',
]);

for (const schema of schemas) {
  required.delete(schema);
  const parsed = JSON.parse(fs.readFileSync(path.join('schemas', schema), 'utf8'));
  if (!parsed.$schema || !parsed.title || parsed.type !== 'object') {
    throw new Error(`Invalid schema header: ${schema}`);
  }
}

if (required.size > 0) {
  throw new Error(`Missing schema(s): ${Array.from(required).join(', ')}`);
}

const vectors = JSON.parse(fs.readFileSync('fixtures/interop-vectors.json', 'utf8'));
if (!Array.isArray(vectors.vectors) || vectors.vectors.length < 4) {
  throw new Error('Expected at least 4 interop vectors.');
}
if (!vectors.vectors.some((vector) => vector.id === 'no-postcode-agid-to-zk-demo')) {
  throw new Error('Missing no-postcode AGID-to-ZK demo vector.');
}
const obligations = JSON.parse(fs.readFileSync('fixtures/proof-obligations.json', 'utf8'));
if (!Array.isArray(obligations.obligations) || obligations.obligations.length < 5) {
  throw new Error('Expected proof obligations for each compatibility layer.');
}

console.log(`Verified ${schemas.length} schema file(s), ${vectors.vectors.length} vector(s), and ${obligations.obligations.length} proof obligation(s).`);
