# XRPL ISSUER ACCOUNT SPECIFICATION (ALXUSD PROGRAM)

**Purpose:** Define the XRPL issuer account controls for a permissioned, institution-compatible IOU program.

---

## I. ACCOUNT ROLES (SEPARATION OF DUTIES)

### 1) Issuer Account (Canonical)
**Function:** Issuer of `ALXUSD` IOU balances.  
**Rule:** Never used for operational payments.

### 2) Treasury / Proceeds Account
**Function:** Receives funding proceeds (fiat off-chain; or stablecoins on-chain if used).  
**Rule:** Not the issuer.

### 3) Operations / Distribution Account
**Function:** Holds pre-minted `ALXUSD` supply for controlled distribution to approved holders.

### 4) Governance Signers
**Function:** Multi-signature keys controlling issuer account actions (freeze/unfreeze, clawback, issuance).

---

## II. REQUIRED XRPL SETTINGS

### A) Account Flags (Issuer)
Set via `AccountSet` transactions.

- **RequireAuth:** ON  
  Purpose: trustlines must be explicitly authorized (permissioning).

- **DefaultFreeze:** ON  
  Purpose: new trustlines are frozen by default until the Issuer explicitly unfreezes.

- **DisallowXRP (optional):** ON  
  Purpose: reduce risk of accidental XRP usage for payments.

- **AllowTrustLineClawback:** ON  
  Purpose: enables clawback functionality (requires network amendment support).

### B) Rippling / DefaultRipple
- **DefaultRipple:** OFF (recommended)  
  Purpose: prevent unintended rippling paths through holders.

### C) Multi-Signature
- **Minimum:** 2-of-3 multi-signature quorum for issuer account.

Recommended signer roles:
- Signer 1: SPV Manager (hardware wallet or MPC)
- Signer 2: Independent Director (hardware wallet)
- Signer 3: Counsel or Custodian representative (hardware wallet)

---

## III. OPERATIONAL CONSTRAINTS

### A) Supply Cap Enforcement (On-Ledger Strong Form)
XRPL does not impose a native “max supply,” so enforce it by policy + architecture:

**Preferred method:**
1. Mint the full program cap once (e.g., `10,000,000 ALXUSD`) from Issuer → Distribution Account.
2. Disable or lock issuance operations by:
   - restricting signer access
   - recording a board resolution committing to no further issuance
3. All distributions happen by transferring from Distribution Account to approved holders.

This creates a practical, inspectable cap: total circulating cannot exceed the pre-minted amount.

---

### B) Memo Anchoring
Issuer must include memo fields linking to:
- appraisal SHA-256
- IPFS CID
- Seal ID
- custody receipt identifier (once available)

See schema in `xrpl/05-Memo-Schema.md`.

---

## IV. KEY MANAGEMENT STANDARD

- Signing keys stored in hardware wallets or institutional MPC
- No seed phrases in cloud storage
- Written signing policy with dual control
- Annual key rotation policy for non-master keys

---

## V. AUDIT EVIDENCE

Maintain the following for lenders/investors:
- XRPL address list (issuer, distribution, treasury)
- AccountSet transaction hashes proving flags
- Issuance transaction hashes
- Authorization/unfreeze actions list
- Clawback events list (should be rare)

---

**Document Control**  
Version: 1.0 | Date: January 28, 2026 | Classification: Confidential
