# AGID Interoperability Contracts

AGID Interoperability Contracts defines shared schemas, TypeScript types, and
test vectors for the AGID research repositories.

This repository exists to prevent the main theory repositories from drifting
apart.

## Covered Repositories

```text
address-morphism-theory
  -> AMT envelope and resolution state

zk-address-predicates
  -> proof request, proof bundle, public signal safety

agid-postal-code-generation-theory
  -> postal-equivalent zone and generation mode

agid-address-ai-learning-theory
  -> AI task output, safety gate, task taxonomy
```

## Compatibility Layers

- **Spec compatibility:** JSON schemas use the same field names and state names.
- **Type compatibility:** TypeScript reference types mirror the schemas.
- **Test compatibility:** shared vectors assert that AMT states, postal zones,
  AI outputs, and ZK proof requests produce the same allow/block decisions.

## Non-Goals

- This repository does not store country-scale address data.
- This repository does not contain private address content.
- This repository does not claim circuit-level ZK security.
- This repository does not replace country repositories.

## Quick Start

```bash
npm install
npm run verify
```

Verification is local-only.

