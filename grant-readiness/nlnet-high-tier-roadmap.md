# NLnet High-Tier Readiness Roadmap

This roadmap turns AGID's research repositories into a staged public-good
programme suitable for NLnet-style funding review.

It is not an application text. NLnet proposals should be written by the
applicant. This file is an internal readiness artifact that documents scope,
milestones, evidence, verification, and open-source boundaries.

## Funding Strategy

NLnet-style programmes are strongest when the first project is useful on its
own and follow-up work is justified by delivered evidence. AGID should therefore
avoid one oversized proposal. It should present a staged programme:

1. **Initial grant package**: a self-contained, reviewable FOSS deliverable.
2. **Follow-up package**: deeper proof, interoperability, validation, and
   country-data governance work after the first package proves feasibility.
3. **Security and review package**: hardening, independent review, and release
   engineering once the shared contracts are stable.

## First High-Confidence Package

**Recommended first package:** AGID Interoperability Contracts for
privacy-preserving address infrastructure.

Why this first:

- It is small enough to review.
- It is useful even without the full AGID application.
- It connects AMT, ZK Address Predicates, Postal Theory, Validation Engine, and
  future country repositories.
- It has tests and public safety checks today.
- It can support later AMT, ZK, and postal-code grants.

## Work Packages

The machine-readable plan is in
[`nlnet-workpackages.json`](nlnet-workpackages.json).

| ID | Package | Target |
| --- | --- | --- |
| `wp1-contract-release` | Shared schemas, versioning, compatibility vectors | First grant |
| `wp2-no-postcode-demo` | No-postcode AGID to postal-equivalent to ZK path | First grant |
| `wp3-validation-engine` | Backend-only validation conformance | First grant or follow-up |
| `wp4-zk-boundary` | ZK-ready proof boundary and public-signal safety | Follow-up |
| `wp5-amt-formal-core` | Formal AMT definitions and theorem/test mapping | Follow-up |
| `wp6-country-governance` | Country index and source-policy governance | Follow-up |
| `wp7-security-review` | Threat model, release process, and external review prep | Later hardening |

## Public-Good Fit

AGID should be framed as open infrastructure for:

- places without reliable postal codes;
- privacy-preserving delivery and service access;
- open, testable address-quality decisions;
- interoperable country and region repositories;
- conservative non-claims where evidence is incomplete.

## Required Evidence Before Applying

- A tagged release of `agid-interoperability-contracts`.
- A short demo that passes locally and in CI.
- A milestone table with deliverables, verification commands, and public
  artifacts.
- `SECURITY.md`, `CONTRIBUTING.md`, `ROADMAP.md`, and issue templates.
- A comparison note explaining what AGID does differently from geocoding,
  postal normalization, plus-code, and proprietary validation approaches.
- A clear non-claims section: no official postal authority, no production
  carrier validation, no audited ZK circuit, no full global completeness claim.

## Review Red Flags To Avoid

- Making the full commercial AGID app a dependency.
- Claiming official status for generated postal-equivalent zones.
- Claiming audited cryptographic security before independent review.
- Presenting generated proposal text as applicant-written text.
- Asking for a large follow-up budget before the first release proves adoption
  and feasibility.

## Definition of High-Tier Readiness

AGID reaches high-tier NLnet readiness when:

1. The first package is independently useful.
2. Each work package has clear open-source deliverables.
3. Every deliverable has a local verification command.
4. The demo path runs across AMT, Interop Contracts, ZK, Validation, and Postal
   Theory.
5. Security and privacy boundaries are written as testable non-claims.
6. Follow-up work is credible because the first package already works.

