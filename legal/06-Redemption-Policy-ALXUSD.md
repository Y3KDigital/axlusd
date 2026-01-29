# REDEMPTION POLICY (ALXUSD)

**Instrument:** `ALXUSD` XRPL-issued IOU  
**Issuer:** SPV-controlled issuer account  
**Program Cap:** USD $10,000,000  

---

## I. POLICY OBJECTIVE

Define clear, enforceable, institution-compatible redemption mechanics so `ALXUSD` functions as a real claim instrument without implying retail stablecoin behavior.

---

## II. CORE PRINCIPLES

1) **Financial Redemption Only**  
No physical redemption of gemstone.

2) **Permissioned Holders**  
Only authorized trustline holders may request redemption.

3) **Contract First**  
Redemption rights are governed by executed agreements (loan, subscription, settlement).

4) **No Daily Liquidity Promise**  
Issuer does not promise on-demand redemption.

5) **Par or Agreed Haircut**  
Buybacks/redemptions occur at par or agreed haircut per holder agreement.

---

## III. REDEMPTION MODES

### Mode A — Cash Redemption at Maturity
**Use case:** Private credit facility or bilateral IOU subscription.

**Mechanics:**
- Holder submits redemption notice per agreement
- Issuer pays USD (wire/ACH) or approved stablecoin
- Holder returns `ALXUSD` to issuer (burn/retire by returning to issuer-controlled account)

**Pricing:** Par (1 `ALXUSD` = $1) unless haircut agreed.

---

### Mode B — Net Settlement / Offset
**Use case:** Settlement between known counterparties.

**Mechanics:**
- Parties agree to net obligations
- `ALXUSD` is used to extinguish all or part of an invoice/obligation
- No cash is required unless net amount is positive

---

### Mode C — Buyback Window (Discretionary)
**Use case:** Liquidity support without stablecoin claims.

**Mechanics:**
- Issuer announces periodic buyback windows (e.g., quarterly)
- Buyback amount and pricing published
- Eligible holders can tender `ALXUSD`

**Pricing:** Par or agreed haircut depending on program liquidity.

---

### Mode D — Exchange Into Successor Instrument
**Use case:** Facility rollovers, note issuance, restructuring.

**Mechanics:**
- Issuer offers exchange of `ALXUSD` into:
  - a promissory note
  - a participation certificate
  - a new capped series
- Exchange ratio defined in offer

---

## IV. NOTICE AND PROCESS

### Redemption Notice Contents
- Holder legal name and address
- XRPL address and amount tendered
- Requested redemption mode
- Payment instructions
- Supporting agreement reference

### Redemption Timelines
- Standard processing: 10–30 business days (depending on mode)
- Emergency redemption: only if specified contractually

---

## V. SUSPENSION / DEFERRAL CONDITIONS

Issuer may suspend or defer redemptions if:
- Lender covenant restricts cash outflows
- Regulatory/legal hold (court order, sanctions)
- Force majeure affecting banking rails
- Collateral impairment pending insurance outcome

Issuer must provide written notice and rationale.

---

## VI. COMPLIANCE CONTROLS

Redemption is conditioned on:
- Ongoing KYC/AML validity
- Sanctions screening
- No breach of holder agreements

Issuer may freeze/claw back `ALXUSD` where required by law or contract.

---

## VII. RECORDKEEPING

Issuer maintains:
- Redemption notices and outcomes
- Payment confirmations
- XRPL transaction hashes for tender/burn
- Audit trail linking to custody and appraisal anchors

---

**Document Control**  
Version: 1.0 | Date: January 28, 2026 | Classification: Confidential  
**Legal Review Required Before Use**
