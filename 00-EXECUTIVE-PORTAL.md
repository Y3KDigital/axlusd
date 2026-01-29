# AXLUSD / ALEXANDRITE RWA  EXECUTIVE PORTAL

**Objective:** One-click, senior-level navigation for institutional reviewers (counsel, custody, lenders, auditors).

## Color-Coded Domains (Legend)

<table>
  <thead>
    <tr>
      <th align="left">Domain</th>
      <th align="left">Color</th>
      <th align="left">What it covers</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>LEGAL</strong></td>
      <td><span style="display:inline-block;width:14px;height:14px;background:#4c1d95;border:1px solid #a78bfa"></span></td>
      <td>SPV, authority, enforceability, disclosures</td>
    </tr>
    <tr>
      <td><strong>CUSTODY / INSURANCE</strong></td>
      <td><span style="display:inline-block;width:14px;height:14px;background:#9a3412;border:1px solid #fdba74"></span></td>
      <td>Vault control, receipt, insurance binder</td>
    </tr>
    <tr>
      <td><strong>VERIFICATION</strong></td>
      <td><span style="display:inline-block;width:14px;height:14px;background:#1d4ed8;border:1px solid #93c5fd"></span></td>
      <td>SHA-256 + IPFS CID + audit trail</td>
    </tr>
    <tr>
      <td><strong>XRPL (CANONICAL)</strong></td>
      <td><span style="display:inline-block;width:14px;height:14px;background:#065f46;border:1px solid #6ee7b7"></span></td>
      <td>Canonical evidence anchoring + IOU controls</td>
    </tr>
    <tr>
      <td><strong>STELLAR (MIRROR)</strong></td>
      <td><span style="display:inline-block;width:14px;height:14px;background:#155e75;border:1px solid #67e8f9"></span></td>
      <td>Optional mirror rail; parity constrained</td>
    </tr>
    <tr>
      <td><strong>FINANCE</strong></td>
      <td><span style="display:inline-block;width:14px;height:14px;background:#92400e;border:1px solid #fcd34d"></span></td>
      <td>Facility terms, LTV, covenants, enforcement</td>
    </tr>
    <tr>
      <td><strong>OPS / CONTROLS</strong></td>
      <td><span style="display:inline-block;width:14px;height:14px;background:#111827;border:1px solid #94a3b8"></span></td>
      <td>Runbooks, cadence, incident + reporting</td>
    </tr>
  </tbody>
</table>

---

## Table of Contents

- [Quick Review Path (5 Files)](#quick-review-path-5-files)
- [LEGAL](#legal)
- [CUSTODY / INSURANCE](#custody--insurance)
- [VERIFICATION](#verification)
- [XRPL (CANONICAL)](#xrpl-canonical)
- [STELLAR (MIRROR)](#stellar-mirror)
- [FINANCE](#finance)
- [OPS / CONTROLS](#ops--controls)
- [DIAGRAMS](#diagrams)
- [Closure Checklist](#closure-checklist)

---

## Quick Review Path (5 Files)

1) System map and enforcement reality: [diagrams/00-Color-Coded-Overview.md](diagrams/00-Color-Coded-Overview.md)
2) Committee-ready Master Asset Record (MAR): [asset/03-Master-Asset-Record.md](asset/03-Master-Asset-Record.md)
3) Custody and insurance gate: [custody/03-Insurance-Requirements.md](custody/03-Insurance-Requirements.md)
4) Credit facility structure: [finance/02-Credit-Facility-Structure.md](finance/02-Credit-Facility-Structure.md)
5) XRPL attestation ceremony (operator-proof): [xrpl/07-Attestation-Transaction-Template.md](xrpl/07-Attestation-Transaction-Template.md)

---

## LEGAL
- SPV formation and bankruptcy-remoteness: [legal/01-SPV-Formation-Guide.md](legal/01-SPV-Formation-Guide.md)
- Board authority: [legal/02-Board-Resolution-Template.md](legal/02-Board-Resolution-Template.md)
- Asset contribution: [legal/03-Asset-Contribution-Agreement-Template.md](legal/03-Asset-Contribution-Agreement-Template.md)
- Risk register: [legal/04-Risk-Register.md](legal/04-Risk-Register.md)
- IOU terms (ALXUSD): [legal/05-IOU-Terms-ALXUSD.md](legal/05-IOU-Terms-ALXUSD.md)
- Redemption policy: [legal/06-Redemption-Policy-ALXUSD.md](legal/06-Redemption-Policy-ALXUSD.md)
- No-lien template: [legal/07-No-Lien-No-Encumbrance-Template.md](legal/07-No-Lien-No-Encumbrance-Template.md)

## CUSTODY / INSURANCE
- Vault selection criteria: [custody/01-Vault-Selection-Criteria.md](custody/01-Vault-Selection-Criteria.md)
- Chain-of-custody log: [custody/02-Chain-of-Custody-Template.md](custody/02-Chain-of-Custody-Template.md)
- Insurance requirements: [custody/03-Insurance-Requirements.md](custody/03-Insurance-Requirements.md)
- Vault RFP checklist: [custody/04-Vault-RFP-Checklist.md](custody/04-Vault-RFP-Checklist.md)
- Custodian intro pack: [custody/05-Custodian-Intro-Pack.md](custody/05-Custodian-Intro-Pack.md)

## VERIFICATION
- Appraisal hash record: [asset/01-Appraisal-Hash.md](asset/01-Appraisal-Hash.md)
- IPFS upload record: [asset/02-IPFS-Upload-Record.md](asset/02-IPFS-Upload-Record.md)
- Committee-ready MAR: [asset/03-Master-Asset-Record.md](asset/03-Master-Asset-Record.md)
- Detailed MAR (narrative): [asset/01-Master-Asset-Record.md](asset/01-Master-Asset-Record.md)

## XRPL (CANONICAL)
- High-level digital twin architecture: [onchain/01-XRPL-Digital-Twin-Spec.md](onchain/01-XRPL-Digital-Twin-Spec.md)
- Issuer account spec: [xrpl/01-Issuer-Account-Spec.md](xrpl/01-Issuer-Account-Spec.md)
- Currency definition: [xrpl/02-Currency-Definition-ALXUSD.md](xrpl/02-Currency-Definition-ALXUSD.md)
- Trustline policy: [xrpl/03-Trustline-Policy.md](xrpl/03-Trustline-Policy.md)
- Issuance flow: [xrpl/04-Issuance-Flow.md](xrpl/04-Issuance-Flow.md)
- Memo schema (canonical evidence payload): [xrpl/05-Memo-Schema.md](xrpl/05-Memo-Schema.md)
- Freeze/clawback policy: [xrpl/06-Freeze-Clawback-Policy.md](xrpl/06-Freeze-Clawback-Policy.md)
- XRPL attestation ceremony: [xrpl/07-Attestation-Transaction-Template.md](xrpl/07-Attestation-Transaction-Template.md)

## STELLAR (MIRROR)
- Stellar mirror spec: [onchain/02-Stellar-Mirror-Spec.md](onchain/02-Stellar-Mirror-Spec.md)
- XRPL primary + parity rules: [tokenization/02-XRPL-Primary-Stellar-Mirror.md](tokenization/02-XRPL-Primary-Stellar-Mirror.md)

## FINANCE
- Credit facility term sheet: [finance/01-Credit-Facility-Term-Sheet.md](finance/01-Credit-Facility-Term-Sheet.md)
- LTV model: [finance/01-LTV-Model.md](finance/01-LTV-Model.md)
- Facility structure narrative: [finance/02-Credit-Facility-Structure.md](finance/02-Credit-Facility-Structure.md)
- Use-of-proceeds policy: [finance/03-Funding-Use-Cases.md](finance/03-Funding-Use-Cases.md)

## OPS / CONTROLS
- IOU program runbook: [ops/01-IOU-Program-Runbook.md](ops/01-IOU-Program-Runbook.md)
- Funding playbook: [ops/02-Funding-Playbook.md](ops/02-Funding-Playbook.md)
- First lender outreach email: [ops/03-First-Lender-Outreach-Email.md](ops/03-First-Lender-Outreach-Email.md)
- Diligence packet index: [ops/04-Diligence-Packet-Index.md](ops/04-Diligence-Packet-Index.md)

## DIAGRAMS
- Color system / palette: [STYLE-COLOR-SYSTEM.md](STYLE-COLOR-SYSTEM.md)
- Executive diagram pack: [diagrams/00-Color-Coded-Overview.md](diagrams/00-Color-Coded-Overview.md)
- Flow trees (artifact + WBS): [diagrams/04-Flow-Trees.md](diagrams/04-Flow-Trees.md)
- System architecture: [diagrams/01-System-Architecture.md](diagrams/01-System-Architecture.md)
- Fund flow: [diagrams/02-Fund-Flow.md](diagrams/02-Fund-Flow.md)
- Trust boundaries: [diagrams/03-Trust-Boundaries.md](diagrams/03-Trust-Boundaries.md)

---

## Closure Checklist

### VERIFICATION
- [x] Compute SHA-256
- [x] Add to IPFS + pin
- [x] Record CID in [asset/02-IPFS-Upload-Record.md](asset/02-IPFS-Upload-Record.md)
- [ ] Post XRPL attestation TX (requires XRPL addresses)

### XRPL CEREMONY (IRREVERSIBLE)
- [ ] Lock Attestor + Issuer + Treasury addresses
- [ ] Fund Attestor with minimum XRP reserve/fees
- [ ] Submit attestation transaction (memo contains SHA-256 + CID + programID)
- [ ] Record XRPL tx hash in MAR + IPFS record + portal

### CUSTODY / INSURANCE (LENDER GATE)
- [ ] Vault deposit + receipt
- [ ] Insurance binder + endorsements (loss payee if facility exists)

### FIRST CLOSE
- [ ] First counterparty onboarded (KYC + agreement)
- [ ] Trustline authorized
- [ ] Initial issuance + funding
