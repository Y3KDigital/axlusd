# ISSUANCE FLOW (ALXUSD) — XRPL

**Objective:** Issue and distribute `ALXUSD` in a controlled, auditable manner.

---

## I. PRECONDITIONS

- SPV formed (or issuer entity authorized)
- Custody and insurance in place (or explicitly disclosed as pending)
- Appraisal hash computed and recorded
- IPFS CID recorded (preferred before issuance)
- Issuer account configured with required flags and multisig

---

## II. FLOW (RECOMMENDED: PRE-MINT CAP)

### Step 1 — Configure Issuer Account
- Set RequireAuth
- Set DefaultFreeze
- Enable Clawback (AllowTrustLineClawback)
- Ensure DefaultRipple is OFF

Record AccountSet tx hashes.

---

### Step 2 — Establish Distribution Account
- Create a separate XRPL account that will receive the pre-minted supply.
- Secure it with multisig.

---

### Step 3 — Pre-Mint Program Cap
Issuer issues exactly the program cap to the distribution account.

- Amount: `10,000,000 ALXUSD`
- Memo: include appraisal SHA-256, IPFS CID, seal ID, program ID

Result: the on-ledger outstanding supply cannot exceed what has been pre-minted.

---

### Step 4 — Holder Onboarding
- Holder completes KYC/contract
- Holder creates trustline
- Issuer authorizes + unfreezes trustline

---

### Step 5 — Distribution to Holder
- Transfer `ALXUSD` from Distribution Account to Holder
- Include memo referencing agreement ID and holder ID (if needed)

---

## III. ALTERNATIVE FLOW (MINT-ON-DEMAND)

Allowed only if governance controls are exceptionally strong.

- Mint occurs as holders onboard
- Requires continuous outstanding supply tracking
- Higher risk of accidental over-issuance

Recommendation: do not use mint-on-demand in early phases.

---

## IV. INTERNAL LOGGING REQUIREMENT

Maintain a program ledger (off-chain) mapping:
- XRPL transaction hash
- amount
- holder legal entity
- agreement ID
- issuance date
- compliance approval ID

---

**Document Control**  
Version: 1.0 | Date: January 28, 2026 | Classification: Confidential
