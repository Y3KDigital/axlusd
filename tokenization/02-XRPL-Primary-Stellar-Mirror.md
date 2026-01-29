# XRPL PRIMARY + STELLAR MIRROR (SUPPLY PARITY RULES)

**Principle:** XRPL is the canonical registry and issuance source; Stellar is a settlement/distribution rail.

---

## I. CANONICAL SOURCE OF TRUTH

XRPL holds:
- canonical issuance evidence
- memo anchors (appraisal hash/IPFS CID/seal/custody)
- issuer controls and governance

Stellar must not become an independent “truth.”

---

## II. MIRROR POLICY

### Rule 1 — No Independent Minting
Stellar issuance must be governed by the same cap and governance as XRPL.

### Rule 2 — Parity Reconciliation
At all times:

- Stellar outstanding `ALEX42M` or related mirror instruments must be <= authorized mirror allocation.
- Quarterly reconciliation between XRPL and Stellar ledgers is mandatory.

### Rule 3 — Audit Attestation
An auditor (or internal controller in early phase) must attest quarterly that:
- custody exists and is unchanged
- XRPL program remains within cap
- Stellar supply matches authorized mirror allocation

---

## III. RECOMMENDED MIRROR IMPLEMENTATIONS

### A) Minimal Mirror (Best for Early Phase)
- Use Stellar only for payments after bilateral acceptance.
- Keep investor holdings on XRPL.

### B) Controlled Mirror (Distribution)
- Issue Stellar tokens only to KYC-approved counterparties.
- Use Stellar authorization + clawback.

---

## IV. DOCUMENT REFERENCES

- XRPL digital twin anchor: `onchain/01-XRPL-Digital-Twin-Spec.md`
- Stellar mirror spec: `onchain/02-Stellar-Mirror-Spec.md`
- IOU terms: `legal/05-IOU-Terms-ALXUSD.md`

---

**Document Control**
Version: 1.0 | Date: January 28, 2026 | Classification: Confidential
