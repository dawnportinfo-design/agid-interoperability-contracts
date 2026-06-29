# Protocol Labs High-Tier Readiness Roadmap

This roadmap prepares AGID's interoperability work for a Protocol Labs research
grant, RFP, or network collaboration.

It is not an application text. It is a readiness artifact for scope, milestones,
evidence, verification, and open-source boundaries.

## Funding Strategy

Protocol Labs Research has supported targeted RFPs and open research awards for
distributed systems, cryptography, networking, metaresearch, and related
infrastructure. Historic RFP awards have ranged up to high six-figure project
scopes, but AGID should not present a budget before aligning with an active RFP
or research group.

Recommended framing:

```text
Verifiable address reference contracts for content-addressed, privacy-preserving
public data infrastructure.
```

## Primary Proposal Package

**Recommended package:** AGID Interoperability Contracts as a verifiable data
and provenance layer.

Why this first:

- It is independently useful.
- It makes AMT, ZK, Postal, AI, and validation repositories test-compatible.
- It can later connect to IPFS/Filecoin-style content-addressed artifacts.
- It avoids depending on the full AGID application.
- It produces public schemas, fixtures, and verification commands.

## Work Packages

The machine-readable plan is in
[`protocol-labs-workpackages.json`](protocol-labs-workpackages.json).

| ID | Package | Target |
| --- | --- | --- |
| `pl-wp1-contract-release` | Shared schemas, fixtures, and versioning | Initial RFP/open research |
| `pl-wp2-content-addressed-evidence` | Content-addressed source and lineage model | Initial or follow-up |
| `pl-wp3-no-postcode-demo` | No-postcode AGID demo across five repos | Initial |
| `pl-wp4-country-index-governance` | Country/region repository governance | Follow-up |
| `pl-wp5-private-retrieval-boundary` | Retrieval boundary for safe address metadata | Follow-up |
| `pl-wp6-benchmark-and-reproducibility` | Reproducible benchmark pack | Follow-up |
| `pl-wp7-network-collaboration` | Research collaboration package | Later collaboration |

## Protocol Labs Fit

AGID should be framed as:

- verifiable public data infrastructure;
- content-addressed evidence and lineage for address references;
- an open benchmark suite for address ambiguity and postal-equivalent regions;
- privacy boundaries for retrieval and proof workflows;
- a research collaboration bridge between distributed systems, cryptography,
  and civic data infrastructure.

## Required Evidence Before Applying

- Tagged release of `agid-interoperability-contracts`.
- Machine-readable schema and fixture package.
- Content-addressed evidence model proposal.
- No-postcode demo across AMT, Interop, ZK, Validation, and Postal Theory.
- Reproducibility checklist with exact commands.
- A comparison note against geocoding, postal normalization, plus-code, and
  proprietary validation approaches.

## Review Red Flags To Avoid

- Claiming Protocol Labs endorsement without contact or approval.
- Treating IPFS/Filecoin integration as required before the core contracts are
  stable.
- Publishing personal address datasets or private delivery artifacts.
- Presenting broad world-address coverage before country governance is ready.
- Mixing commercial AGID app code into the research infrastructure package.

## Definition of High-Tier Readiness

AGID reaches high-tier Protocol Labs readiness when:

1. Contracts and fixtures can be content addressed and reproduced.
2. Source policy and lineage are first-class machine-readable artifacts.
3. Benchmarks are rights-cleared and do not expose private content.
4. The no-postcode demo runs across all core repos.
5. Follow-up work clearly advances distributed systems, verifiable data,
   privacy, or open research infrastructure.

