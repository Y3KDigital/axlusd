# ALEXANDRITE RWA EXECUTION PACKAGE (AXLUSD)

**Institutional Data Room (SR-level)**

- Repository: https://github.com/Y3KDigital/axlusd
- Shareable site (enable GitHub Pages): `/docs` (instructions below)

---

## Color-Coded Domains (Legend)

<table>
  <thead>
    <tr>
      <th align="left">Domain</th>
      <th align="left">Color</th>
      <th align="left">Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>LEGAL</strong></td>
      <td><span style="display:inline-block;width:14px;height:14px;background:#4c1d95;border:1px solid #a78bfa"></span></td>
      <td>Authority, enforceability, bankruptcy remoteness</td>
    </tr>
    <tr>
      <td><strong>CUSTODY / INSURANCE</strong></td>
      <td><span style="display:inline-block;width:14px;height:14px;background:#9a3412;border:1px solid #fdba74"></span></td>
      <td>Physical control, vault receipt, insurance binder</td>
    </tr>
    <tr>
      <td><strong>VERIFICATION</strong></td>
      <td><span style="display:inline-block;width:14px;height:14px;background:#1d4ed8;border:1px solid #93c5fd"></span></td>
      <td>SHA-256 + IPFS CID + evidence chain</td>
    </tr>
    <tr>
      <td><strong>XRPL (CANONICAL)</strong></td>
      <td><span style="display:inline-block;width:14px;height:14px;background:#065f46;border:1px solid #6ee7b7"></span></td>
      <td>Canonical registry + memo anchoring + IOU controls</td>
    </tr>
    <tr>
      <td><strong>STELLAR (MIRROR)</strong></td>
      <td><span style="display:inline-block;width:14px;height:14px;background:#155e75;border:1px solid #67e8f9"></span></td>
      <td>Optional mirror rail (settlement/distribution only)</td>
    </tr>
    <tr>
      <td><strong>FINANCE</strong></td>
      <td><span style="display:inline-block;width:14px;height:14px;background:#92400e;border:1px solid #fcd34d"></span></td>
      <td>Facility structure, LTV, covenants, enforcement logic</td>
    </tr>
    <tr>
      <td><strong>OPS / CONTROLS</strong></td>
      <td><span style="display:inline-block;width:14px;height:14px;background:#111827;border:1px solid #94a3b8"></span></td>
      <td>Runbooks, cadence, incident response, reporting</td>
    </tr>
  </tbody>
</table>

---

## Table of Contents

- [Start Here](#start-here)
- [10-Minute IC Review Path](#10-minute-ic-review-path)
- [End-to-End Execution (Diagram Pack)](#end-to-end-execution-diagram-pack)
- [Shareable Site (for the group)](#shareable-site-for-the-group)
- [Architecture (Locked)](#architecture-locked)
- [Repository Structure](#repository-structure)
- [Status](#status)

---

## Start Here

- Executive portal (single spine): [00-EXECUTIVE-PORTAL.md](00-EXECUTIVE-PORTAL.md)
- Executive diagrams (flows + trees): [diagrams/00-Color-Coded-Overview.md](diagrams/00-Color-Coded-Overview.md)
- Flow trees (artifact tree + WBS tree): [diagrams/04-Flow-Trees.md](diagrams/04-Flow-Trees.md)
- Lender send pack index: [ops/04-Diligence-Packet-Index.md](ops/04-Diligence-Packet-Index.md)
- XRPL attestation ceremony page (operator-proof): [xrpl/07-Attestation-Transaction-Template.md](xrpl/07-Attestation-Transaction-Template.md)

## 10-Minute IC Review Path

1) Authority + enforceability: [legal/01-SPV-Formation-Guide.md](legal/01-SPV-Formation-Guide.md)
2) Control of collateral: [custody/01-Vault-Selection-Criteria.md](custody/01-Vault-Selection-Criteria.md)
3) Evidence chain (hash + CID): [asset/03-Master-Asset-Record.md](asset/03-Master-Asset-Record.md)
4) Canonical on-ledger anchor: [xrpl/07-Attestation-Transaction-Template.md](xrpl/07-Attestation-Transaction-Template.md)
5) Enforcement reality (diagram): [diagrams/00-Color-Coded-Overview.md](diagrams/00-Color-Coded-Overview.md)

## End-to-End Execution (Diagram Pack)

- Executive diagram pack: [diagrams/00-Color-Coded-Overview.md](diagrams/00-Color-Coded-Overview.md)

## Shareable Site (for the group)

A simple website lives in `/docs` and is intended to be sent to the group as a single link.

- Site entry: [docs/index.html](docs/index.html)
- How we get paid page: [docs/get-paid.html](docs/get-paid.html)

**To publish it:** GitHub  Settings  Pages  Deploy from a branch  Branch: `main`  Folder: `/docs`.

After enabling, the site URL will be:
- `https://y3kdigital.github.io/axlusd/`

## Architecture (Locked)

- Canonical registry and evidence: XRPL
- Mirror rail (optional): Stellar (settlement/distribution only; parity constrained)
- EVM: optional adapter only; never canonical

## Repository Structure

```
/legal/          SPV formation, resolutions, risk disclosures
/custody/        Vault requirements, chain-of-custody, insurance
/asset/          Master Asset Record, appraisal hash, IPFS record
/onchain/        XRPL/Stellar high-level architecture specs
/xrpl/           XRPL IOU program specs (issuer, trustlines, memos, controls)
/finance/        Credit facility term sheet, LTV model, structure, use-cases
/tokenization/   Positioning + rail parity rules (XRPL primary, Stellar mirror)
/ops/            IOU operations runbooks + funding playbook
/diagrams/       System architecture, trust boundaries, flows, trees
/docs/           Shareable website (GitHub Pages)
```

## Status

- Evidence: SHA-256 recorded; IPFS CID recorded
- On-ledger anchor: XRPL attestation transaction pending (requires addresses + signing method)
- Custody/insurance: operational dependency (vault receipt + binder)

---

## Disclaimers

- This is not legal or investment advice.
- All financing/token activity requires independent legal review.
- Enforcement lives in contracts + custody control; ledgers are evidence + operations.
