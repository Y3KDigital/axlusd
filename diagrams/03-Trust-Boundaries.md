# TRUST BOUNDARIES (WHO MUST BE TRUSTED)

This diagram is color-coded per [STYLE-COLOR-SYSTEM.md](../STYLE-COLOR-SYSTEM.md).

```mermaid
%%{init: {"theme":"base","themeVariables":{
  "fontFamily":"Inter, Segoe UI, Arial",
  "lineColor":"#334155"
}}}%%
flowchart LR
  subgraph OffChain[Off-Chain Trust Domain]
    SPV[SPV / Issuer]:::legal
    Vault[Vault Custodian]:::cust
    Ins[Insurer]:::cust
    Counsel[Legal Counsel]:::legal
    Aud[Auditor]:::verify
  end

  subgraph XRPLDomain[XRPL Trust Domain]
    XRPL[XRPL Ledger]:::xrpl
    Issuer[Issuer Account]:::xrpl
    Dist[Distribution Account]:::xrpl
    Holders[Permissioned Holders]:::xrpl
  end

  subgraph StellarDomain[Stellar Trust Domain (Optional)]
    Stellar[Stellar Ledger]:::stellar
    SIssuer[Stellar Issuer]:::stellar
  end

  %% Off-chain trust relationships
  SPV -->|custody agreement| Vault
  SPV -->|insurance policy| Ins
  SPV -->|opinions + docs| Counsel
  SPV -->|audit scope| Aud

  %% XRPL operations
  SPV -->|governance + keys| Issuer
  Issuer -->|issues / sets flags| XRPL
  Dist -->|distributes| XRPL
  Holders -->|hold / redeem| XRPL

  %% Mirror rail policy
  XRPL -. optional mirror parity policy .-> Stellar
  SPV -. governs mirror .-> SIssuer
  SIssuer -->|mirror settlement only| Stellar

  %% Reviewer verification paths
  Aud -->|verifies| XRPL
  Aud -->|confirms| Vault

  note1((Key idea:\nXRPL reduces trust needed by making verification public,\nbut does not replace custody, insurance, and contracts.))

  classDef legal fill:#4c1d95,stroke:#a78bfa,color:#fff,stroke-width:1px;
  classDef cust fill:#9a3412,stroke:#fdba74,color:#fff,stroke-width:1px;
  classDef verify fill:#1d4ed8,stroke:#93c5fd,color:#fff,stroke-width:1px;
  classDef xrpl fill:#065f46,stroke:#6ee7b7,color:#fff,stroke-width:1px;
  classDef stellar fill:#155e75,stroke:#67e8f9,color:#fff,stroke-width:1px;
```
