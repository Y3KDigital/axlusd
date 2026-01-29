# CURRENCY DEFINITION — ALXUSD (XRPL IOU)

**Currency Code:** `ALXUSD`  
**Ledger:** XRPL (canonical)  
**Issuer:** SPV-controlled XRPL issuer account

---

## I. ECONOMIC MEANING

`ALXUSD` represents a **permissioned claim on the Issuer** denominated in USD units, subject to:
- `legal/05-IOU-Terms-ALXUSD.md`
- `legal/06-Redemption-Policy-ALXUSD.md`
- executed bilateral agreements (credit/subscription/settlement)

`ALXUSD` is designed to be **usable** for institutional settlement and private credit, while remaining compliant and non-retail.

---

## II. COLLATERAL DISCLOSURE

Issuer states that `ALXUSD` is issued against a collateral base consisting of:

- Rough Chrysoberyl (Alexandrite), 2kg, Seal ID 00289944
- Appraised value: USD $42,000,000 (Aug 18, 2025)
- Held in institutional custody (vault receipt required)

Collateral evidence is anchored by:
- Appraisal PDF SHA-256 (see `asset/01-Appraisal-Hash.md`)
- IPFS CID record (see `asset/02-IPFS-Upload-Record.md`)
- XRPL memo anchors (see `xrpl/05-Memo-Schema.md`)

**Important:** collateralization supports creditworthiness; it is not a guarantee of redemption on demand.

---

## III. PROGRAM CAP

**Maximum outstanding `ALXUSD`:** USD $10,000,000.

Cap enforcement method:
- Prefer pre-mint of full cap to a distribution account (see `xrpl/01-Issuer-Account-Spec.md`).

---

## IV. PERMISSIONING

- Trustlines required.
- Issuer requires explicit authorization to hold (RequireAuth).
- DefaultFreeze enabled; balances remain frozen until Issuer unfreezes for authorized holders.

---

## V. REDEMPTION

- Financial redemption only.
- No right to physical gemstone delivery.
- No promise of daily liquidity.

---

## VI. PROHIBITED MARKETING CLAIMS

Do not describe `ALXUSD` as:
- “stablecoin”
- “bank deposit”
- “cash equivalent”
- “redeemable anytime”

---

**Document Control**  
Version: 1.0 | Date: January 28, 2026 | Classification: Confidential
