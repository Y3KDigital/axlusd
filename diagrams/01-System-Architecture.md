# SYSTEM ARCHITECTURE (XRPL CANONICAL + STELLAR MIRROR)

This diagram is color-coded per [STYLE-COLOR-SYSTEM.md](../STYLE-COLOR-SYSTEM.md).

```mermaid
%%{init: {"theme":"base","themeVariables":{
  "fontFamily":"Inter, Segoe UI, Arial",
  "lineColor":"#334155"
}}}%%
flowchart TB
  %% Physical world
  ASSET[Physical Alexandrite Asset\n2kg, Seal 00289944]:::cust
  VAULT[Institutional Vault Custody\nVault Receipt + Insurance]:::cust

  %% Legal
  SPV[SPV / Issuer Entity]:::legal
  CONTRACTS[Off-chain Contracts\nIOU Terms + Redemption + Security]:::legal

  %% Verification
  APPRAISAL[Appraisal PDF\nDocuSign]:::verify
  HASH[SHA-256 Hash]:::verify
  CID[IPFS CID]:::verify

  %% XRPL canonical
  XRPL_MEMO[XRPL Memo Anchors\nEvidence payload]:::xrpl
  XRPL_ISSUER[XRPL Issuer Account]:::xrpl
  XRPL_IOU[ALXUSD IOU Program\nRequireAuth + DefaultFreeze + Clawback]:::xrpl
  XRPL_REG[XRPL Digital Twin Anchor\nNon-transferable registry]:::xrpl

  %% Stellar mirror
  STELLAR_ISSUER[Stellar Issuer Account]:::stellar
  STELLAR_SETTLE[Stellar Settlement/Distribution\nParity constrained]:::stellar

  %% Finance / reviewers
  LENDER[Auditor / Lender]:::fin
  HOLDERS[Permissioned Holders\nTrustlines]:::xrpl

  %% Ownership/control
  SPV -->|owns| ASSET
  SPV -->|custody agreement| VAULT
  VAULT -->|stores| ASSET

  %% Evidence
  APPRAISAL -->|hash| HASH
  APPRAISAL -->|content-address| CID
  HASH -->|memo anchor| XRPL_MEMO
  CID -->|memo anchor| XRPL_MEMO

  %% On-chain program
  SPV -->|governs| XRPL_ISSUER
  XRPL_ISSUER --> XRPL_IOU
  XRPL_ISSUER --> XRPL_REG
  XRPL_IOU -->|authorized trustlines| HOLDERS
  CONTRACTS -->|define rights/limits| HOLDERS
  CONTRACTS -->|binds| SPV

  %% Optional mirror rail
  XRPL_IOU -. optional mirror policy .-> STELLAR_ISSUER
  STELLAR_ISSUER --> STELLAR_SETTLE
  STELLAR_SETTLE -->|distribution only| HOLDERS

  %% Verification by reviewers
  LENDER -->|verifies memo| XRPL_MEMO
  LENDER -->|verifies custody| VAULT

  classDef legal fill:#4c1d95,stroke:#a78bfa,color:#fff,stroke-width:1px;
  classDef cust fill:#9a3412,stroke:#fdba74,color:#fff,stroke-width:1px;
  classDef verify fill:#1d4ed8,stroke:#93c5fd,color:#fff,stroke-width:1px;
  classDef xrpl fill:#065f46,stroke:#6ee7b7,color:#fff,stroke-width:1px;
  classDef stellar fill:#155e75,stroke:#67e8f9,color:#fff,stroke-width:1px;
  classDef fin fill:#92400e,stroke:#fcd34d,color:#fff,stroke-width:1px;
```

**Notes**
- XRPL is canonical for evidence anchoring and IOU controls.
- Stellar is optional and must not become an independent truth source.
