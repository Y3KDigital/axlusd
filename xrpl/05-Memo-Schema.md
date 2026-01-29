# XRPL MEMO SCHEMA (ALXUSD PROGRAM)

**Purpose:** Standardize all XRPL memo payloads so auditors and counterparties can reconstruct the full verification trail.

---

## I. ENCODING RULES

- Memos should be JSON.
- Encode JSON as UTF-8.
- Store in XRPL MemoData as hex or base64 (consistent policy required).

---

## II. CORE FIELDS (REQUIRED)

### Schema: `ALXUSD.ProgramAnchor.v1`

```json
{
  "schema": "ALXUSD.ProgramAnchor.v1",
  "programID": "ALXUSD-2026-01",
  "asset": {
    "type": "Rough Gemstone - Alexandrite",
    "weight": "2kg (~10,000ct, ±5%)",
    "sealID": "00289944",
    "origin": "Bahia, Brazil"
  },
  "appraisal": {
    "date": "2025-08-18",
    "appraiser": "Professor Norman Michael Rodi, G.G.",
    "sha256": "59B634D41C1B0913D63457955688AD4063CA7DDC73F6E5B25E7F18B7F57628BE",
    "ipfsCID": "bafybeihhqpgxb2lia2i6zwduk4mcqxtz37uzlnu73xwxinrkymwwhfkxny"
  },
  "custody": {
    "custodian": "PENDING",
    "vaultReceiptID": "PENDING",
    "insurancePolicyID": "PENDING"
  },
  "issuance": {
    "currency": "ALXUSD",
    "cap": "10000000",
    "purpose": "Permissioned IOU program backed by custodied gemstone collateral"
  },
  "disclaimer": "Not a stablecoin. No on-demand redemption. Financial redemption only. Permissioned holders only."
}
```

---

## III. EVENT MEMOS

### A) Custody Event Schema

```json
{
  "schema": "ALXUSD.CustodyEvent.v1",
  "programID": "ALXUSD-2026-01",
  "eventType": "VaultDeposit|QuarterlyVerification|AnnualAppraisal|Pledge|Release",
  "date": "YYYY-MM-DD",
  "sealID": "00289944",
  "details": "Human readable summary",
  "evidence": {
    "photoSHA256": "[optional]",
    "documentSHA256": "[optional]"
  }
}
```

### B) Holder Distribution Schema (Optional)
Use only if privacy constraints allow.

```json
{
  "schema": "ALXUSD.Distribution.v1",
  "programID": "ALXUSD-2026-01",
  "date": "YYYY-MM-DD",
  "amount": "[ALXUSD]",
  "agreementID": "[off-chain agreement reference]"
}
```

---

## IV. VERSIONING

Any schema change increments the suffix (v2, v3). Do not break backwards parsing.

---

**Document Control**  
Version: 1.0 | Date: January 28, 2026 | Classification: Confidential
