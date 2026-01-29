# CREDIT FACILITY STRUCTURE (HOW IT CLOSES)

**Purpose:** Explain the enforcement logic and how XRPL artifacts support traditional credit documentation.

---

## I. PARTIES

- Borrower: SPV
- Lender: private credit fund / family office / bank desk
- Custodian: institutional vault
- Insurer: specie insurance carrier

---

## II. SECURITY PACKAGE

Minimum security package includes:

1) **Pledge / Security Agreement**
- grants first-priority security interest in the gemstone asset

2) **Custodian Control Agreement (Tri-Party)**
- custodian will not release/move the asset without lender consent

3) **Insurance Assignment / Loss Payee**
- lender is first loss payee on the policy

4) **UCC-1 Filing** (for US SPV)
- perfects the lender’s security interest

---

## III. ROLE OF XRPL IN ENFORCEMENT

XRPL artifacts are used as:
- public timestamped registry of program commitments
- verification anchor for appraisal document
- operational proof of issuance caps and holder balances

XRPL does not replace contracts; it strengthens evidence.

Key items referenced in credit docs:
- Appraisal SHA-256
- XRPL anchor tx hash
- Issuer account address
- Program cap and governance commitments

---

## IV. DEFAULT AND REMEDIES

Typical remedies:
- acceleration
- instruction to custodian to release asset to lender’s agent
- commercially reasonable sale
- application of proceeds to principal/interest/fees

If `ALXUSD` is used as the note-like claim instrument:
- redemption/settlement happens per loan agreement
- on-ledger balances can be clawed back or netted as contractually allowed

---

## V. OPERATIONAL REPORTING (POST-CLOSE)

- Quarterly vault confirmation letter
- Quarterly seal verification photo hash (optional)
- Annual appraisal reaffirmation
- Insurance renewal evidence
- XRPL memo updates for custody milestones

---

**Document Control**  
Version: 1.0 | Date: January 28, 2026 | Classification: Confidential
