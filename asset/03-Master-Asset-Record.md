# MASTER ASSET RECORD (MAR) — CANONICAL OFF-CHAIN SOURCE

**Note:** This MAR is the "legal-grade" condensed canonical record for counsel, banks, and auditors.
For the extended narrative MAR, see `asset/01-Master-Asset-Record.md`.

---

## 1) Asset Identity

- **Asset Type:** Rough Chrysoberyl (Var. Alexandrite)
- **Quantity:** 2 kilograms (approx. 10,000 carats), tolerance ±5%
- **Origin:** Bahia State, Brazil
- **Composition:** BeAl₂O₄
- **Optical Signature:** Green under fluorescent, red under incandescent (Cr³⁺ chromophore)

---

## 2) Seal & Physical Control

- **Seal ID (current):** 00289944
- **Prior Seal:** 00289945 (replaced)
- **Seal Evidence:** See appraisal report image(s)

**Custody Status:**
- **Custodian:** PENDING (Brinks / Malca-Amit / Swiss Freeport / DMCC vault)
- **Vault Receipt ID:** PENDING
- **Insurance Binder:** PENDING (min $42M all-risk specie)

Chain-of-custody templates and controls are in `custody/`.

---

## 3) Appraisal (Source of Truth)

- **Appraiser:** Professor Norman Michael Rodi, BFA, G.G.
- **Report Date:** August 18, 2025
- **Validity:** 1 year
- **Appraised Value:** USD $42,000,000
- **Declared Financial Use:** “EXCLUSIVELY FOR THE FINANCIAL MARKET AS A CURRENT ASSET”

---

## 4) Digital Verification (Appraisal)

- **Appraisal PDF SHA-256:**
  `59B634D41C1B0913D63457955688AD4063CA7DDC73F6E5B25E7F18B7F57628BE`
- **IPFS CID:** bafybeihhqpgxb2lia2i6zwduk4mcqxtz37uzlnu73xwxinrkymwwhfkxny
- **XRPL Anchor Transaction Hash:** PENDING

Records:
- `asset/01-Appraisal-Hash.md`
- `asset/02-IPFS-Upload-Record.md`

---

## 5) Ownership & Issuance Entity

- **Current Legal Owner (per appraisal):** Investments Danath Inc. (Florida, USA)
- **Target RWA Issuer:** [SPV Name] Asset Holdings LLC (bankruptcy-remote)

Key legal documents:
- SPV formation guide: `legal/01-SPV-Formation-Guide.md`
- Board resolution template: `legal/02-Board-Resolution-Template.md`
- Asset contribution agreement: `legal/03-Asset-Contribution-Agreement-Template.md`
- No-lien letter: `legal/07-No-Lien-No-Encumbrance-Template.md`

---

## 6) On-Ledger Program (XRPL Canonical)

### A) Digital Twin Anchor (non-transferable registry)
- Spec: `onchain/01-XRPL-Digital-Twin-Spec.md`

### B) IOU Program (usable instrument)
- **Currency Code:** `ALXUSD`
- **Cap:** USD $10,000,000 outstanding
- **Issuer:** SPV-controlled XRPL issuer account
- **Permissioning:** Trustlines required; RequireAuth enabled
- **Controls:** DefaultFreeze + Clawback enabled
- **Redemption:** Financial only (see redemption policy)

Specs:
- `xrpl/` folder (issuer account, trustline policy, memo schema, issuance flow)
- Terms: `legal/05-IOU-Terms-ALXUSD.md`
- Redemption: `legal/06-Redemption-Policy-ALXUSD.md`

---

## 7) Stellar Mirror (Settlement & Distribution)

- Stellar mirror spec: `onchain/02-Stellar-Mirror-Spec.md`
- Parity rule: no independent minting; supply must reconcile to XRPL program

---

## 8) Finance Use

- Credit facility term sheet: `finance/01-Credit-Facility-Term-Sheet.md`
- LTV model: `finance/01-LTV-Model.md`

---

**Document Control**  
Version: 1.0 | Date: January 28, 2026 | Classification: Confidential
