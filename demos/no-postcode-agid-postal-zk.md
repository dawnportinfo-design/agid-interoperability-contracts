# Demo: No-Postcode Region to ZK Proof Request

This demo shows the smallest safe cross-layer path for a region where
conventional postal codes are absent or not used as the primary delivery
identifier.

```text
AGID region
  -> postal-equivalent zone
  -> validation output
  -> ZK proof request
  -> cross-layer allow decision
```

The demo intentionally contains no address text, no recipient data, no witness
material, no key material, and no precise private location data. It uses only
commitments, roots, policy identifiers, and machine-readable state names.

## Scenario

- Country model: `AE`
- Postal state: `postal_equivalent`
- Generation mode: `generate_postal_equivalent`
- AMT state: `verified`
- Validation decision: `allow`
- ZK predicate: `postal_equivalent_membership`
- Expected cross-layer result: `allow`

The executable fixture is
`fixtures/interop-vectors.json#no-postcode-agid-to-zk-demo`.

## Why This Matters

Many grant reviewers need to see that AGID can do more than describe theory.
This demo proves that the repositories can share a practical path:

1. AMT supplies a verified referent commitment and allowed predicate list.
2. Postal theory supplies a postal-equivalent zone instead of requiring an
   official postal code.
3. Validation confirms the state is source-backed and safe for the declared
   purpose.
4. ZK Address Predicates receives only a scoped proof request.
5. The shared decision model returns `allow`.

## What This Demo Does Not Claim

- It does not claim official postal authority.
- It does not claim global candidate-generation completeness.
- It does not validate live carrier coverage.
- It does not disclose address content.
- It does not implement an audited circuit.

## Verification

Run:

```bash
npm run verify
```

The test `no-postcode demo allows AGID postal-equivalent ZK proof path` checks
that the fixture remains executable.

