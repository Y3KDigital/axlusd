# COLOR-CODED DIAGRAM PACK (SR LEVEL)

This pack is designed to be readable in a single sitting by a credit committee.
Color system: [STYLE-COLOR-SYSTEM.md](../STYLE-COLOR-SYSTEM.md)

---

## 1) End-to-End Execution Flow (Color-Coded)

```mermaid
%%{init: {"theme":"base","themeVariables":{
  "fontFamily":"Inter, Segoe UI, Arial",
  "lineColor":"#334155"
}}}%%
flowchart LR
  A[LEGAL: SPV formed\nResolutions executed]:::legal --> B[CUSTODY: Vault custody\nReceipt + insurance]:::cust
  B --> C[VERIFY: Hash + IPFS\nCID recorded]:::verify
  C --> D[XRPL: Attestation TX\nMemo anchors]:::xrpl
  D --> E[XRPL: Trustlines authorized\nALXUSD issuance]:::xrpl
  E --> F[FINANCE: Funding close\nWire + settlement]:::fin
  D -. optional mirror .-> G[STELLAR: Mirror rail\nParity constrained]:::stellar
  H[OPS: Reporting cadence\nQuarterly + annual]:::ops --> B
  H --> D
  H --> F

  classDef legal fill:#4c1d95,stroke:#a78bfa,color:#fff,stroke-width:1px;
  classDef cust fill:#9a3412,stroke:#fdba74,color:#fff,stroke-width:1px;
  classDef verify fill:#1d4ed8,stroke:#93c5fd,color:#fff,stroke-width:1px;
  classDef xrpl fill:#065f46,stroke:#6ee7b7,color:#fff,stroke-width:1px;
  classDef stellar fill:#155e75,stroke:#67e8f9,color:#fff,stroke-width:1px;
  classDef fin fill:#92400e,stroke:#fcd34d,color:#fff,stroke-width:1px;
  classDef ops fill:#111827,stroke:#94a3b8,color:#fff,stroke-width:1px;
```

---

## 2) Key Ceremony: Evidence Anchoring (Immutable Proof Path)

```mermaid
sequenceDiagram
  participant O as Operator
  participant IPFS as IPFS (Kubo)
  participant XRPL as XRPL Ledger
  participant A as Auditor/Lender

  O->>IPFS: Add appraisal PDF (CIDv1)
  IPFS-->>O: Return CID
  O->>XRPL: Submit attestation TX (memo: sha256 + CID + programID)
  XRPL-->>O: Return tx hash + ledger index
  A->>IPFS: Retrieve PDF by CID
  A->>A: Compute SHA-256 of retrieved bytes
  A->>XRPL: Verify memo matches (sha256 + CID)
```

---

## 3) Credit Enforcement Reality (What Controls the Asset)

```mermaid
%%{init: {"theme":"base","themeVariables":{
  "fontFamily":"Inter, Segoe UI, Arial",
  "lineColor":"#334155"
}}}%%
flowchart TB
  L[FINANCE: Lender]:::fin -->|security docs| S[LEGAL: SPV]:::legal
  S -->|custody agreement| V[CUSTODY: Vault Custodian]:::cust
  V -->|receipt + control| A[Physical Asset\n2kg alexandrite]:::cust
  S -. evidence anchors .-> X[XRPL: Program evidence + controls]:::xrpl

  note((Key point:\nEnforcement = contracts + custody control.\nLedger = evidence + operations.))

  classDef legal fill:#4c1d95,stroke:#a78bfa,color:#fff,stroke-width:1px;
  classDef cust fill:#9a3412,stroke:#fdba74,color:#fff,stroke-width:1px;
  classDef xrpl fill:#065f46,stroke:#6ee7b7,color:#fff,stroke-width:1px;
  classDef fin fill:#92400e,stroke:#fcd34d,color:#fff,stroke-width:1px;
```

---

## 4) Governance and Key Control Tree (How Actions Are Authorized)

```mermaid
%%{init: {"theme":"base","themeVariables":{
  "fontFamily":"Inter, Segoe UI, Arial",
  "lineColor":"#334155"
}}}%%
flowchart TB
  COMMITTEE[LEGAL: SPV Board / Committee]:::legal
  POLICIES[OPS: Policies + Runbooks]:::ops
  MULTISIG[XRPL: Multisig Governance]:::xrpl
  ISSUER[XRPL: Issuer Account]:::xrpl
  DIST[XRPL: Distribution Account]:::xrpl
  ATTEST[XRPL: Attestor Account]:::xrpl
  VAULT[CUSTODY: Custodian Controls]:::cust

  COMMITTEE -->|approves| POLICIES
  COMMITTEE -->|appoints signers| MULTISIG
  MULTISIG -->|signs| ISSUER
  MULTISIG -->|signs| DIST
  MULTISIG -->|signs| ATTEST
  POLICIES -->|operating cadence| VAULT

  classDef legal fill:#4c1d95,stroke:#a78bfa,color:#fff,stroke-width:1px;
  classDef cust fill:#9a3412,stroke:#fdba74,color:#fff,stroke-width:1px;
  classDef xrpl fill:#065f46,stroke:#6ee7b7,color:#fff,stroke-width:1px;
  classDef ops fill:#111827,stroke:#94a3b8,color:#fff,stroke-width:1px;
```

---

## 5) XRPL Attestation Ceremony Tree (Irreversible Sequence)

```mermaid
%%{init: {"theme":"base","themeVariables":{
  "fontFamily":"Inter, Segoe UI, Arial",
  "lineColor":"#334155"
}}}%%
flowchart TB
  START[VERIFY: Inputs ready\nsha256 + IPFS CID + programID]:::verify
  ADDR[XRPL: Addresses locked\nattestor + issuer + treasury]:::xrpl
  FUND[XRPL: Attestor funded\nreserve + fees]:::xrpl
  SIGN[XRPL: TX signed\nMemoData deterministic]:::xrpl
  SUBMIT[XRPL: Submit TX\nsubmitAndWait]:::xrpl
  RECORD[OPS: Record outputs\ntx hash + ledger index in MAR]:::ops

  START --> ADDR --> FUND --> SIGN --> SUBMIT --> RECORD

  classDef verify fill:#1d4ed8,stroke:#93c5fd,color:#fff,stroke-width:1px;
  classDef xrpl fill:#065f46,stroke:#6ee7b7,color:#fff,stroke-width:1px;
  classDef ops fill:#111827,stroke:#94a3b8,color:#fff,stroke-width:1px;
```

---

## 6) IOU Lifecycle (Permissioned Controls)

```mermaid
%%{init: {"theme":"base","themeVariables":{
  "fontFamily":"Inter, Segoe UI, Arial",
  "lineColor":"#334155"
}}}%%
flowchart LR
  KYC[OPS: KYC/AML + Agreement signed]:::ops --> TL[XRPL: Trustline created]:::xrpl
  TL --> AUTH[XRPL: Trustline authorized\nRequireAuth]:::xrpl
  AUTH --> ISSUE[XRPL: Issue ALXUSD]:::xrpl
  ISSUE --> HOLD[XRPL: Hold / Transfer (permissioned)]:::xrpl
  HOLD --> REDEEM[LEGAL: Redemption request\nper policy]:::legal
  REDEEM --> BURN[XRPL: Return + retire IOU]:::xrpl

  classDef legal fill:#4c1d95,stroke:#a78bfa,color:#fff,stroke-width:1px;
  classDef xrpl fill:#065f46,stroke:#6ee7b7,color:#fff,stroke-width:1px;
  classDef ops fill:#111827,stroke:#94a3b8,color:#fff,stroke-width:1px;
```

---

## 7) Stellar Mirror Guardrails (Parity, Not Canonical)

```mermaid
%%{init: {"theme":"base","themeVariables":{
  "fontFamily":"Inter, Segoe UI, Arial",
  "lineColor":"#334155"
}}}%%
flowchart TB
  CANON[XRPL: Canonical state\nissuance + evidence]:::xrpl
  MIRROR[STELLAR: Mirror rail\nsettlement/distribution only]:::stellar
  RULES[OPS: Parity rules\nno independent supply]:::ops

  CANON -->|mirror event| MIRROR
  RULES -->|constrains| MIRROR
  MIRROR -. must reconcile to .-> CANON

  classDef xrpl fill:#065f46,stroke:#6ee7b7,color:#fff,stroke-width:1px;
  classDef stellar fill:#155e75,stroke:#67e8f9,color:#fff,stroke-width:1px;
  classDef ops fill:#111827,stroke:#94a3b8,color:#fff,stroke-width:1px;
```
