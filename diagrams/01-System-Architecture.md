# SYSTEM ARCHITECTURE (XRPL CANONICAL + STELLAR MIRROR)

```mermaid
flowchart TB
  A[Physical Alexandrite Asset
2kg, Seal 00289944] --> B[Institutional Vault Custody
Vault Receipt + Insurance]

  C[SPV / Issuer Entity] -->|owns| A
  C -->|custody agreement| B

  D[Appraisal PDF
DocuSign] --> E[SHA-256 Hash]
  D --> F[IPFS CID]
  E --> G[XRPL Memo Anchors]
  F --> G

  C --> H[XRPL Issuer Account]
  H --> I[ALXUSD IOU Program
RequireAuth + DefaultFreeze + Clawback]
  I --> J[Permissioned Holders
Trustlines]

  H --> K[XRPL Digital Twin Anchor
Non-transferable registry]

  I -. optional mirror .-> L[Stellar Issuer Account]
  L --> M[Stellar Settlement/Distribution]
  M --> J

  N[Off-chain Contracts
IOU Terms + Redemption + Security] --> J
  N --> C

  O[Auditor / Lender] -->|verifies| G
  O -->|verifies| B
```

**Notes:**
- XRPL is canonical for issuance evidence and memo anchoring.
- Stellar is optional and must not become an independent truth source.
