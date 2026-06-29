const fs = require('node:fs');

const plan = JSON.parse(fs.readFileSync('grant-readiness/protocol-labs-workpackages.json', 'utf8'));

if (plan.schemaVersion !== 'agid-protocol-labs-workpackages-v0.1') {
  throw new Error('Unexpected Protocol Labs workpackage schema version.');
}

if (plan.proposalTextPolicy !== 'applicant-written') {
  throw new Error('Protocol Labs readiness must not encourage generated application text.');
}

if (plan.historicRfpAwardRangeUsd?.max !== 200000) {
  throw new Error('Historic RFP range should remain explicit and bounded.');
}

if (plan.historicRfpAwardRangeUsd.sourcePolicy !== 'historic-public-rfp-reference-not-current-ceiling') {
  throw new Error('Historic RFP amount must not be represented as a current ceiling.');
}

const packages = plan.workPackages;
if (!Array.isArray(packages) || packages.length < 7) {
  throw new Error('Expected at least 7 Protocol Labs work packages.');
}

const requiredIds = new Set([
  'pl-wp1-contract-release',
  'pl-wp2-content-addressed-evidence',
  'pl-wp3-no-postcode-demo',
  'pl-wp4-country-index-governance',
  'pl-wp5-private-retrieval-boundary',
  'pl-wp6-benchmark-and-reproducibility',
  'pl-wp7-network-collaboration',
]);

for (const item of packages) {
  requiredIds.delete(item.id);
  if (!['initial', 'initial-or-follow-up', 'follow-up', 'later-collaboration'].includes(item.phase)) {
    throw new Error(`Work package ${item.id} has invalid phase.`);
  }
  for (const key of ['id', 'title', 'publicGood', 'protocolLabsFit']) {
    if (typeof item[key] !== 'string' || item[key].length < 8) {
      throw new Error(`Work package ${item.id ?? '<missing>'} has weak ${key}.`);
    }
  }
  for (const key of ['repos', 'deliverables', 'verification']) {
    if (!Array.isArray(item[key]) || item[key].length === 0) {
      throw new Error(`Work package ${item.id} has no ${key}.`);
    }
  }
  if (item.independentValue !== true) {
    throw new Error(`Work package ${item.id} must be independently useful.`);
  }
}

if (requiredIds.size > 0) {
  throw new Error(`Missing required work package(s): ${Array.from(requiredIds).join(', ')}`);
}

console.log(`Verified Protocol Labs readiness plan with ${packages.length} work package(s).`);

