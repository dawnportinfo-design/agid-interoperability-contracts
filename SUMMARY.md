# Summary

The contract repository is the compatibility anchor for AGID's theory and
implementation repositories.

## Why It Exists

Without a shared contract, each repository can accidentally define its own:

- resolution state names;
- quality state names;
- proof eligibility decisions;
- postal-zone lifecycle states;
- AI output safety decisions;
- test fixture format.

The result would be research that looks aligned but fails during implementation.

## Immediate Contract

Version `agid-interop-v0.1` defines:

- AMT envelope schema;
- ZK proof request schema;
- postal-zone schema;
- address AI task output schema;
- cross-layer interop vector schema;
- TypeScript reference model;
- shared tests.

