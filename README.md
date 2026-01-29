# ALEXANDRITE RWA EXECUTION PACKAGE (AXLUSD)

Classification: Confidential - Institutional Use Only
Last updated: 2026-01-28

## Start Here (Navigation Spine)

- Executive portal (single spine): [00-EXECUTIVE-PORTAL.md](00-EXECUTIVE-PORTAL.md)
- Executive diagram pack (end-to-end + ceremony + governance trees): [diagrams/00-Color-Coded-Overview.md](diagrams/00-Color-Coded-Overview.md)
- Flow trees (artifact tree + WBS tree): [diagrams/04-Flow-Trees.md](diagrams/04-Flow-Trees.md)
- Diligence packet index (lender send pack): [ops/04-Diligence-Packet-Index.md](ops/04-Diligence-Packet-Index.md)
- XRPL attestation ceremony page (operator-proof): [xrpl/07-Attestation-Transaction-Template.md](xrpl/07-Attestation-Transaction-Template.md)

## Asset Summary (Facts)

- Asset: 2kg rough chrysoberyl (alexandrite), Bahia, Brazil
- Appraised value: USD 42,000,000
- Seal ID: 00289944
- Owner (declared): Investments Danath Inc.
- Report date: 2025-08-18

## 10-Minute IC Review Path (Recommended)

1) Authority + enforceability: [legal/01-SPV-Formation-Guide.md](legal/01-SPV-Formation-Guide.md)
2) Control of the collateral: [custody/01-Vault-Selection-Criteria.md](custody/01-Vault-Selection-Criteria.md)
3) Evidence chain (hash + CID): [asset/03-Master-Asset-Record.md](asset/03-Master-Asset-Record.md)
4) Canonical on-ledger anchor (XRPL): [xrpl/07-Attestation-Transaction-Template.md](xrpl/07-Attestation-Transaction-Template.md)
5) Enforcement reality (diagram): [diagrams/00-Color-Coded-Overview.md](diagrams/00-Color-Coded-Overview.md)

---

## Purpose

This repository is an institutional execution framework for converting an appraisal into a verified, custodied, financeable Real-World Asset (RWA).

It is not marketing material. It is designed for:
- Legal counsel
- Institutional custodians
- Credit desks
- Compliance and audit

## Architecture Decision (Locked)

- Canonical registry and evidence: XRPL
- Mirror rail (optional): Stellar (settlement/distribution only, parity constrained)
- EVM: optional adapter only, never canonical

## Repository Structure

```
/legal/          SPV formation, resolutions, risk disclosures
/custody/        Vault requirements, chain-of-custody, insurance
/asset/          Master Asset Record, appraisal hash, IPFS record
/onchain/        XRPL/Stellar high-level architecture specs
/xrpl/           XRPL IOU program specs (issuer, trustlines, memos, controls)
/finance/        Credit facility term sheet, LTV model, structure, use-cases
/tokenization/   Positioning + rail parity rules (XRPL primary, Stellar mirror)
/ops/            IOU operations runbooks + funding playbook
/diagrams/       System architecture, trust boundaries, flows
```

## Status

- Evidence: SHA-256 recorded; IPFS CID recorded
- On-ledger anchor: XRPL attestation transaction pending (requires XRPL addresses + signing method)
- Custody/insurance: operational dependency (vault receipt + binder)

## Disclaimers (Non-Negotiable)

- This asset is illiquid; valuation reflects appraisal methodology, not guaranteed liquidation.
- Export and regulatory requirements must be verified prior to custody transfer.
- All financing and token activity requires independent legal review.
- Token offerings are subject to securities compliance in applicable jurisdictions.
