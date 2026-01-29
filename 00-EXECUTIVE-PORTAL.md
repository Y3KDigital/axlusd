# AXLUSD / ALEXANDRITE RWA — EXECUTIVE PORTAL

**Objective:** One-click, senior-level navigation for institutional reviewers (counsel, custody, lenders, auditors).  
**Canonical rails:** XRPL (registry + IOU controls) + Stellar (mirror settlement, optional).  
**Current status:** Verification CID locked; XRPL attestation tx pending (requires XRPL addresses + signing method).

---

## Table of Contents (Color-Coded)

**Legend**  
- **🟣 Legal** → entity + enforceability  
- **🟠 Custody/Insurance** → physical control + loss coverage  
- **🔵 Verification** → SHA-256 + IPFS + evidence trail  
- **🟢 XRPL** → canonical registry + IOU program controls  
- **🟦 Stellar** → mirror rail policy  
- **🟡 Finance** → facility terms + LTV + enforcement logic  
- **⚫ Ops** → runbooks + reporting cadence  

### 1) 🟣 Legal Foundation
- SPV formation and bankruptcy-remoteness: [legal/01-SPV-Formation-Guide.md](legal/01-SPV-Formation-Guide.md)
- Board authority: [legal/02-Board-Resolution-Template.md](legal/02-Board-Resolution-Template.md)
- Asset contribution: [legal/03-Asset-Contribution-Agreement-Template.md](legal/03-Asset-Contribution-Agreement-Template.md)
- Risk register: [legal/04-Risk-Register.md](legal/04-Risk-Register.md)
- IOU terms (ALXUSD): [legal/05-IOU-Terms-ALXUSD.md](legal/05-IOU-Terms-ALXUSD.md)
- Redemption policy: [legal/06-Redemption-Policy-ALXUSD.md](legal/06-Redemption-Policy-ALXUSD.md)
- No-lien template: [legal/07-No-Lien-No-Encumbrance-Template.md](legal/07-No-Lien-No-Encumbrance-Template.md)

### 2) 🟠 Custody + Insurance
- Vault selection criteria: [custody/01-Vault-Selection-Criteria.md](custody/01-Vault-Selection-Criteria.md)
- Chain-of-custody log: [custody/02-Chain-of-Custody-Template.md](custody/02-Chain-of-Custody-Template.md)
- Insurance requirements: [custody/03-Insurance-Requirements.md](custody/03-Insurance-Requirements.md)
- Vault RFP checklist: [custody/04-Vault-RFP-Checklist.md](custody/04-Vault-RFP-Checklist.md)
- Custodian intro pack: [custody/05-Custodian-Intro-Pack.md](custody/05-Custodian-Intro-Pack.md)

### 3) 🔵 Asset Verification (Cryptographic)
- Appraisal hash record: [asset/01-Appraisal-Hash.md](asset/01-Appraisal-Hash.md)
- IPFS upload record: [asset/02-IPFS-Upload-Record.md](asset/02-IPFS-Upload-Record.md)
- Committee-ready MAR: [asset/03-Master-Asset-Record.md](asset/03-Master-Asset-Record.md)
- Detailed MAR (narrative): [asset/01-Master-Asset-Record.md](asset/01-Master-Asset-Record.md)

### 4) 🟢 XRPL Canonical Program
- High-level digital twin architecture: [onchain/01-XRPL-Digital-Twin-Spec.md](onchain/01-XRPL-Digital-Twin-Spec.md)
- Issuer account spec: [xrpl/01-Issuer-Account-Spec.md](xrpl/01-Issuer-Account-Spec.md)
- Currency definition: [xrpl/02-Currency-Definition-ALXUSD.md](xrpl/02-Currency-Definition-ALXUSD.md)
- Trustline policy: [xrpl/03-Trustline-Policy.md](xrpl/03-Trustline-Policy.md)
- Issuance flow: [xrpl/04-Issuance-Flow.md](xrpl/04-Issuance-Flow.md)
- Memo schema (canonical evidence payload): [xrpl/05-Memo-Schema.md](xrpl/05-Memo-Schema.md)
- Freeze/clawback policy: [xrpl/06-Freeze-Clawback-Policy.md](xrpl/06-Freeze-Clawback-Policy.md)
- XRPL attestation tx template (ready-to-submit): [xrpl/07-Attestation-Transaction-Template.md](xrpl/07-Attestation-Transaction-Template.md)

### 5) 🟦 Stellar Mirror (Optional)
- Stellar mirror spec: [onchain/02-Stellar-Mirror-Spec.md](onchain/02-Stellar-Mirror-Spec.md)
- XRPL primary + parity rules: [tokenization/02-XRPL-Primary-Stellar-Mirror.md](tokenization/02-XRPL-Primary-Stellar-Mirror.md)

### 6) 🟡 Finance
- Credit facility term sheet: [finance/01-Credit-Facility-Term-Sheet.md](finance/01-Credit-Facility-Term-Sheet.md)
- LTV model: [finance/01-LTV-Model.md](finance/01-LTV-Model.md)
- Facility structure narrative: [finance/02-Credit-Facility-Structure.md](finance/02-Credit-Facility-Structure.md)
- Use-of-proceeds policy: [finance/03-Funding-Use-Cases.md](finance/03-Funding-Use-Cases.md)

### 7) ⚫ Ops (Operating System)
- IOU program runbook: [ops/01-IOU-Program-Runbook.md](ops/01-IOU-Program-Runbook.md)
- Funding playbook: [ops/02-Funding-Playbook.md](ops/02-Funding-Playbook.md)
- First lender outreach email: [ops/03-First-Lender-Outreach-Email.md](ops/03-First-Lender-Outreach-Email.md)
- Diligence packet index: [ops/04-Diligence-Packet-Index.md](ops/04-Diligence-Packet-Index.md)

### 8) Diagrams
- Color system / palette: [STYLE-COLOR-SYSTEM.md](STYLE-COLOR-SYSTEM.md)
- Color-coded overview pack (end-to-end + ceremony + control trees): [diagrams/00-Color-Coded-Overview.md](diagrams/00-Color-Coded-Overview.md)
- Flow trees (artifact tree + WBS tree): [diagrams/04-Flow-Trees.md](diagrams/04-Flow-Trees.md)
- System architecture: [diagrams/01-System-Architecture.md](diagrams/01-System-Architecture.md)
- Fund flow: [diagrams/02-Fund-Flow.md](diagrams/02-Fund-Flow.md)
- Trust boundaries: [diagrams/03-Trust-Boundaries.md](diagrams/03-Trust-Boundaries.md)

---

## Color-Coded System Map (One Page)

```mermaid
%%{init: {"theme":"base","themeVariables":{
  "fontFamily":"Inter, Segoe UI, Arial",
  "lineColor":"#475569",
  "primaryColor":"#0b1220",
  "primaryTextColor":"#e2e8f0",
  "secondaryColor":"#111827",
  "tertiaryColor":"#0f172a"
}}}%%
flowchart TB
  %% Domains
  LEGAL[🟣 LEGAL\nSPV + enforceability\nBoard + contracts]:::legal
  CUST[🟠 CUSTODY/INSURANCE\nVault receipt + control\nAll-risk specie]:::cust
  VER[🔵 VERIFICATION\nSHA-256 + IPFS CID\nAudit trail]:::verify
  XRPL[🟢 XRPL CANONICAL\nMemo anchors + IOU controls\nTrustlines + freeze/clawback]:::xrpl
  STEL[🟦 STELLAR MIRROR (Optional)\nSettlement/Distribution\nParity constrained]:::stellar
  FIN[🟡 FINANCE\nFacility + LTV + covenants\nEnforcement logic]:::fin
  OPS[⚫ OPS\nRunbooks + reporting\nIncidents + governance]:::ops

  LEGAL --> CUST
  CUST --> VER
  VER --> XRPL
  XRPL -. parity mirror .-> STEL
  LEGAL --> FIN
  XRPL --> FIN
  OPS --> LEGAL
  OPS --> CUST
  OPS --> XRPL

  classDef legal fill:#4c1d95,stroke:#a78bfa,color:#ffffff,stroke-width:1px;
  classDef cust fill:#9a3412,stroke:#fdba74,color:#ffffff,stroke-width:1px;
  classDef verify fill:#1d4ed8,stroke:#93c5fd,color:#ffffff,stroke-width:1px;
  classDef xrpl fill:#065f46,stroke:#6ee7b7,color:#ffffff,stroke-width:1px;
  classDef stellar fill:#155e75,stroke:#67e8f9,color:#ffffff,stroke-width:1px;
  classDef fin fill:#92400e,stroke:#fcd34d,color:#ffffff,stroke-width:1px;
  classDef ops fill:#111827,stroke:#94a3b8,color:#ffffff,stroke-width:1px;
```

---

## Final Closure Checklist (No Theory)

### A) 🔵 Verification Closure
- [x] Compute SHA-256
- [x] Add to IPFS + pin
- [x] Record CID in `asset/02-IPFS-Upload-Record.md`
- [ ] Post XRPL attestation tx (requires XRPL addresses)

### B) 🟢 XRPL Ceremony (Irreversible)
- [ ] Lock **Attestor** + **Issuer** + **Treasury** addresses
- [ ] Fund attestor with minimum XRP reserve/fees
- [ ] Submit attestation transaction (memo contains SHA-256 + CID + programID)
- [ ] Record XRPL tx hash in MAR + IPFS record

### C) 🟠 Custody/Insurance (Lender Gate)
- [ ] Vault deposit + receipt
- [ ] Insurance binder + endorsements (loss payee if facility exists)

### D) 🟡 First Close
- [ ] First counterparty onboarded (KYC + agreement)
- [ ] Trustline authorized
- [ ] Initial issuance + funding
