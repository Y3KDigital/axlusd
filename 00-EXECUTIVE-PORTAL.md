# AXLUSD / ALEXANDRITE RWA - EXECUTIVE PORTAL

Objective: One-click, senior-level navigation for institutional reviewers (counsel, custody, lenders, auditors).
Canonical rails: XRPL (registry + IOU controls) + Stellar (mirror rail, optional).
Current status: Verification CID locked; XRPL attestation TX pending (requires XRPL addresses + signing method).

---

## Quick Review Path (5 Files)

1) System map and enforcement reality: [diagrams/00-Color-Coded-Overview.md](diagrams/00-Color-Coded-Overview.md)
2) Committee-ready Master Asset Record (MAR): [asset/03-Master-Asset-Record.md](asset/03-Master-Asset-Record.md)
3) Custody and insurance gate: [custody/03-Insurance-Requirements.md](custody/03-Insurance-Requirements.md)
4) Credit facility structure: [finance/02-Credit-Facility-Structure.md](finance/02-Credit-Facility-Structure.md)
5) XRPL attestation ceremony (operator-proof): [xrpl/07-Attestation-Transaction-Template.md](xrpl/07-Attestation-Transaction-Template.md)

---

## Table of Contents (Color Domains)

Legend:
- LEGAL (Purple): entity + enforceability
- CUSTODY/INSURANCE (Orange): physical control + loss coverage
- VERIFICATION (Blue): SHA-256 + IPFS + evidence trail
- XRPL (Green): canonical registry + IOU program controls
- STELLAR (Teal): mirror rail policy
- FINANCE (Amber): facility terms + LTV + enforcement logic
- OPS (Black): runbooks + reporting cadence

### 1) LEGAL FOUNDATION
- SPV formation and bankruptcy-remoteness: [legal/01-SPV-Formation-Guide.md](legal/01-SPV-Formation-Guide.md)
- Board authority: [legal/02-Board-Resolution-Template.md](legal/02-Board-Resolution-Template.md)
- Asset contribution: [legal/03-Asset-Contribution-Agreement-Template.md](legal/03-Asset-Contribution-Agreement-Template.md)
- Risk register: [legal/04-Risk-Register.md](legal/04-Risk-Register.md)
- IOU terms (ALXUSD): [legal/05-IOU-Terms-ALXUSD.md](legal/05-IOU-Terms-ALXUSD.md)
- Redemption policy: [legal/06-Redemption-Policy-ALXUSD.md](legal/06-Redemption-Policy-ALXUSD.md)
- No-lien template: [legal/07-No-Lien-No-Encumbrance-Template.md](legal/07-No-Lien-No-Encumbrance-Template.md)

### 2) CUSTODY + INSURANCE
- Vault selection criteria: [custody/01-Vault-Selection-Criteria.md](custody/01-Vault-Selection-Criteria.md)
- Chain-of-custody log: [custody/02-Chain-of-Custody-Template.md](custody/02-Chain-of-Custody-Template.md)
- Insurance requirements: [custody/03-Insurance-Requirements.md](custody/03-Insurance-Requirements.md)
- Vault RFP checklist: [custody/04-Vault-RFP-Checklist.md](custody/04-Vault-RFP-Checklist.md)
- Custodian intro pack: [custody/05-Custodian-Intro-Pack.md](custody/05-Custodian-Intro-Pack.md)

### 3) VERIFICATION (CRYPTOGRAPHIC)
- Appraisal hash record: [asset/01-Appraisal-Hash.md](asset/01-Appraisal-Hash.md)
- IPFS upload record: [asset/02-IPFS-Upload-Record.md](asset/02-IPFS-Upload-Record.md)
- Committee-ready MAR: [asset/03-Master-Asset-Record.md](asset/03-Master-Asset-Record.md)
- Detailed MAR (narrative): [asset/01-Master-Asset-Record.md](asset/01-Master-Asset-Record.md)

### 4) XRPL CANONICAL PROGRAM
- High-level digital twin architecture: [onchain/01-XRPL-Digital-Twin-Spec.md](onchain/01-XRPL-Digital-Twin-Spec.md)
- Issuer account spec: [xrpl/01-Issuer-Account-Spec.md](xrpl/01-Issuer-Account-Spec.md)
- Currency definition: [xrpl/02-Currency-Definition-ALXUSD.md](xrpl/02-Currency-Definition-ALXUSD.md)
- Trustline policy: [xrpl/03-Trustline-Policy.md](xrpl/03-Trustline-Policy.md)
- Issuance flow: [xrpl/04-Issuance-Flow.md](xrpl/04-Issuance-Flow.md)
- Memo schema (canonical evidence payload): [xrpl/05-Memo-Schema.md](xrpl/05-Memo-Schema.md)
- Freeze/clawback policy: [xrpl/06-Freeze-Clawback-Policy.md](xrpl/06-Freeze-Clawback-Policy.md)
- XRPL attestation TX template: [xrpl/07-Attestation-Transaction-Template.md](xrpl/07-Attestation-Transaction-Template.md)

### 5) STELLAR MIRROR (OPTIONAL)
- Stellar mirror spec: [onchain/02-Stellar-Mirror-Spec.md](onchain/02-Stellar-Mirror-Spec.md)
- XRPL primary + parity rules: [tokenization/02-XRPL-Primary-Stellar-Mirror.md](tokenization/02-XRPL-Primary-Stellar-Mirror.md)

### 6) FINANCE
- Credit facility term sheet: [finance/01-Credit-Facility-Term-Sheet.md](finance/01-Credit-Facility-Term-Sheet.md)
- LTV model: [finance/01-LTV-Model.md](finance/01-LTV-Model.md)
- Facility structure narrative: [finance/02-Credit-Facility-Structure.md](finance/02-Credit-Facility-Structure.md)
- Use-of-proceeds policy: [finance/03-Funding-Use-Cases.md](finance/03-Funding-Use-Cases.md)

### 7) OPS (OPERATING SYSTEM)
- IOU program runbook: [ops/01-IOU-Program-Runbook.md](ops/01-IOU-Program-Runbook.md)
- Funding playbook: [ops/02-Funding-Playbook.md](ops/02-Funding-Playbook.md)
- First lender outreach email: [ops/03-First-Lender-Outreach-Email.md](ops/03-First-Lender-Outreach-Email.md)
- Diligence packet index: [ops/04-Diligence-Packet-Index.md](ops/04-Diligence-Packet-Index.md)

### 8) DIAGRAMS
- Color system / palette: [STYLE-COLOR-SYSTEM.md](STYLE-COLOR-SYSTEM.md)
- Executive diagram pack: [diagrams/00-Color-Coded-Overview.md](diagrams/00-Color-Coded-Overview.md)
- Flow trees (artifact + WBS): [diagrams/04-Flow-Trees.md](diagrams/04-Flow-Trees.md)
- System architecture: [diagrams/01-System-Architecture.md](diagrams/01-System-Architecture.md)
- Fund flow: [diagrams/02-Fund-Flow.md](diagrams/02-Fund-Flow.md)
- Trust boundaries: [diagrams/03-Trust-Boundaries.md](diagrams/03-Trust-Boundaries.md)

---

## Closure Checklist (Execution, Not Theory)

### A) VERIFICATION CLOSURE
- [x] Compute SHA-256
- [x] Add to IPFS + pin
- [x] Record CID in [asset/02-IPFS-Upload-Record.md](asset/02-IPFS-Upload-Record.md)
- [ ] Post XRPL attestation TX (requires XRPL addresses)

### B) XRPL CEREMONY (IRREVERSIBLE)
- [ ] Lock Attestor + Issuer + Treasury addresses
- [ ] Fund Attestor with minimum XRP reserve/fees
- [ ] Submit attestation transaction (memo contains SHA-256 + CID + programID)
- [ ] Record XRPL tx hash in MAR + IPFS record + portal

### C) CUSTODY/INSURANCE (LENDER GATE)
- [ ] Vault deposit + receipt
- [ ] Insurance binder + endorsements (loss payee if facility exists)

### D) FIRST CLOSE
- [ ] First counterparty onboarded (KYC + agreement)
- [ ] Trustline authorized
- [ ] Initial issuance + funding
