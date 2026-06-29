# Adoption Readiness: AGID Interoperability Contracts

This note explains why this repository is the compatibility anchor for AGID's
research and implementation repositories.

## Review Audience

- Funders evaluating whether the work can be maintained by multiple teams.
- Implementers checking field names, state names, and shared decisions.
- Standards reviewers checking whether AMT, ZK, Postal, AI, and Ethereum
  boundary claims can be tested together.

## Core Public-Good Claim

AGID has several theory and implementation repositories. Without shared
contracts, each repository could silently define a different meaning for
`verified`, `manual_required`, `ambiguous`, `proof allowed`, or
`postal-equivalent`. This repository prevents that drift.

## What Is Verifiable Today

- JSON schemas for AMT envelopes, proof requests, postal zones, AI outputs,
  interop vectors, and proof obligations.
- TypeScript reference model for cross-layer decisions.
- Shared fixtures that assert compatible allow, warning, review, and block
  outcomes.
- Publication-safety scan and GitHub CI verification.

## What Is Deliberately Not Claimed

- Storage of country-scale address data.
- Replacement of each repository's deeper theory.
- Cryptographic audit completion.
- Legal validation of local address registries.

## Strongest Grant Fit

- Protocol Labs: verifiable public data contracts and provenance-compatible
  workflows.
- Ethereum Foundation: public-signal and verifier-policy compatibility.
- NLnet Foundation: open standards and FOSS interoperability.

## Next Evidence to Add

1. A generated compatibility matrix in Markdown from the fixture data.
2. Versioning rules for breaking and non-breaking schema changes.
3. Import tests in AMT, ZK, Postal, and Validation Engine repositories.
4. A small release checklist for downstream repos before they claim
   compatibility.

