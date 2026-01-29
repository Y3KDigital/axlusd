# TRUST BOUNDARIES (WHO MUST BE TRUSTED)

```mermaid
flowchart LR
  subgraph OffChain[Off-Chain Trust Domain]
    SPV[SPV / Issuer]
    Vault[Vault Custodian]
    Ins[Insurer]
    Counsel[Legal Counsel]
    Aud[Auditor]
  end

  subgraph XRPLDomain[XRPL Trust Domain]
    XRPL[XRPL Ledger]
    Issuer[Issuer Account]
    Dist[Distribution Account]
    Holders[Permissioned Holders]
  end

  subgraph StellarDomain[Stellar Trust Domain (Optional)]
    Stellar[Stellar Ledger]
    SIssuer[Stellar Issuer]
  end

  SPV --> Vault
  SPV --> Ins
  SPV --> Counsel
  SPV --> Aud

  SPV --> Issuer
  Issuer --> XRPL
  Dist --> XRPL
  Holders --> XRPL

  XRPL -. optional mirror policy .-> Stellar
  SPV -. governs .-> SIssuer
  SIssuer --> Stellar

  Aud --> XRPL
  Aud --> Vault

  note1((Key idea: XRPL reduces trust needed
by making verification public, but does not
replace custody, insurance, and contracts.))
```
