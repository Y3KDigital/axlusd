# TRUSTLINE POLICY (ALXUSD)

**Purpose:** Define institution-grade permissioning for who can hold and transact `ALXUSD` on XRPL.

---

## I. POLICY STATEMENT

No party may hold `ALXUSD` unless:
1) they have an established trustline to the Issuer, and
2) they have been explicitly authorized and unfrozen by the Issuer.

---

## II. ROLES

- **Approver:** SPV Compliance Officer (or Manager if no CO)
- **Signer(s):** Multi-sig quorum per `xrpl/01-Issuer-Account-Spec.md`
- **Recordkeeper:** Program Administrator (maintains holder register)

---

## III. ONBOARDING REQUIREMENTS

Minimum requirements for authorization:
- Identity verification (KYC)
- Sanctions screening (OFAC/EU/UN)
- Contract execution (loan/subscription/settlement agreement)
- Wallet ownership attestation (holder controls XRPL address)

If the holder is an investment counterparty:
- Accredited/qualified status confirmation (as required by offering exemption)

---

## IV. AUTHORIZATION WORKFLOW

1) Holder requests onboarding and provides XRPL address.
2) Holder establishes trustline to Issuer.
3) Compliance approves (off-chain) and issues an authorization instruction.
4) Issuer executes:
   - Trustline authorization (RequireAuth)
   - Unfreeze action (DefaultFreeze lifted for that trustline)
5) Program Administrator records:
   - holder legal identity
   - XRPL address
   - authorized limit
   - agreement reference

---

## V. LIMITS

Each holder is assigned a maximum authorized balance.

Policy recommendation:
- single holder limit defaults to 25% of program cap unless approved by board.

---

## VI. REVOCATION / BLACKLISTING

Triggers for revocation:
- KYC expiration or failure
- sanctions match
- breach of agreement
- fraud or suspicious activity
- court order

Actions:
- freeze trustline
- (if legally/contractually permitted) claw back balance
- record incident and notify relevant parties

---

## VII. AUDIT TRAIL

Maintain:
- holder register
- approval logs
- XRPL tx hashes for authorization/unfreeze/freeze/clawback

---

**Document Control**  
Version: 1.0 | Date: January 28, 2026 | Classification: Confidential
