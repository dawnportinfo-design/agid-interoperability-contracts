const fs = require('node:fs');

const plan = JSON.parse(fs.readFileSync('grant-readiness/nlnet-workpackages.json', 'utf8'));

if (plan.schemaVersion !== 'agid-nlnet-workpackages-v0.1') {
  throw new Error('Unexpected NLnet workpackage schema version.');
}

if (plan.firstProposalMaxEur !== 50000) {
  throw new Error('Initial proposal cap should remain aligned to first-package discipline.');
}

if (plan.proposalTextPolicy !== 'applicant-written') {
  throw new Error('NLnet readiness must not encourage generated proposal text.');
}

const packages = plan.workPackages;
if (!Array.isArray(packages) || packages.length < 7) {
  throw new Error('Expected at least 7 NLnet work packages.');
}

const initial = packages.filter((item) => item.phase === 'initial');
if (initial.length < 2) {
  throw new Error('Expected at least two initial work packages.');
}

for (const item of packages) {
  for (const key of ['id', 'title', 'publicGood', 'privacyBoundary']) {
    if (typeof item[key] !== 'string' || item[key].length < 8) {
      throw new Error(`Work package ${item.id ?? '<missing>'} has weak ${key}.`);
    }
  }
  if (!['initial', 'initial-or-follow-up', 'follow-up', 'later-hardening'].includes(item.phase)) {
    throw new Error(`Work package ${item.id} has invalid phase.`);
  }
  for (const key of ['repos', 'deliverables', 'verification']) {
    if (!Array.isArray(item[key]) || item[key].length === 0) {
      throw new Error(`Work package ${item.id} has no ${key}.`);
    }
  }
  if (item.independentValue !== true) {
    throw new Error(`Work package ${item.id} must be independently valuable.`);
  }
}

const requiredIds = new Set([
  'wp1-contract-release',
  'wp2-no-postcode-demo',
  'wp3-validation-engine',
  'wp4-zk-boundary',
  'wp5-amt-formal-core',
  'wp6-country-governance',
  'wp7-security-review',
]);

for (const item of packages) {
  requiredIds.delete(item.id);
}

if (requiredIds.size > 0) {
  throw new Error(`Missing required work package(s): ${Array.from(requiredIds).join(', ')}`);
}

console.log(`Verified NLnet readiness plan with ${packages.length} work package(s).`);
