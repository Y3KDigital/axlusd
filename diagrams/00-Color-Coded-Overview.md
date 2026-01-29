# COLOR-CODED DIAGRAM PACK (SR LEVEL)

This pack is designed to be readable in a single sitting by a credit committee.

---

## 1) End-to-End Execution Flow (Color-Coded)

```mermaid
%%{init: {"theme":"base","themeVariables":{
  "fontFamily":"Inter, Segoe UI, Arial",
  "lineColor":"#334155"
}}}%%
flowchart LR
  A[🟣 SPV formed\nResolutions executed]:::legal --> B[🟠 Vault custody\nReceipt + insurance]:::cust
  B --> C[🔵 Hash + IPFS\nCID recorded]:::verify
  C --> D[🟢 XRPL attestation tx\nMemo anchors]:::xrpl
  D --> E[🟢 Trustlines authorized\nALXUSD issuance]:::xrpl
  E --> F[🟡 Funding close\nWire + settlement]:::fin
  D -. optional mirror .-> G[🟦 Stellar mirror\nParity constrained]:::stellar
  H[⚫ Ops cadence\nQuarterly + annual]:::ops --> B
  H --> D
  H --> F

  classDef legal fill:#4c1d95,stroke:#a78bfa,color:#fff;
  classDef cust fill:#9a3412,stroke:#fdba74,color:#fff;
  classDef verify fill:#1d4ed8,stroke:#93c5fd,color:#fff;
  classDef xrpl fill:#065f46,stroke:#6ee7b7,color:#fff;
  classDef stellar fill:#155e75,stroke:#67e8f9,color:#fff;
  classDef fin fill:#92400e,stroke:#fcd34d,color:#fff;
  classDef ops fill:#111827,stroke:#94a3b8,color:#fff;
```

---

## 2) Key Ceremony: Evidence Anchoring (What makes it immutable)

```mermaid
sequenceDiagram
  participant O as Operator
  participant IPFS as IPFS (Kubo)
  participant XRPL as XRPL Ledger
  participant A as Auditor/Lender

  O->>IPFS: Add appraisal PDF (CIDv1)
  IPFS-->>O: Return CID (bafy...)
  O->>XRPL: Submit attestation tx (memo: sha256 + CID + programID)
  XRPL-->>O: Return tx hash + ledger index
  A->>IPFS: Retrieve PDF by CID
  A->>A: Compute SHA-256 of retrieved bytes
  A->>XRPL: Verify memo matches (sha256 + CID)
```

---

## 3) Credit Enforcement Reality (What controls the asset)

```mermaid
flowchart TB
  L[🟡 Lender]:::fin -->|security docs| S[🟣 SPV]:::legal
  S -->|custody agreement| V[🟠 Vault Custodian]:::cust
  V -->|receipt + control| A[Physical Asset\n2kg alexandrite]:::cust
  S -. evidence anchors .-> X[🟢 XRPL program]:::xrpl

  note((Key point: enforcement is\ncontract + custody control.\nXRPL is evidence + operations.))

  classDef legal fill:#4c1d95,stroke:#a78bfa,color:#fff;
  classDef cust fill:#9a3412,stroke:#fdba74,color:#fff;
  classDef xrpl fill:#065f46,stroke:#6ee7b7,color:#fff;
  classDef fin fill:#92400e,stroke:#fcd34d,color:#fff;
```
