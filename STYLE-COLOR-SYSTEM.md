# STYLE GUIDE - COLOR-CODED RWA SYSTEM

Use this file to keep all diagrams and tables visually consistent across the repository.

## Domains (Canonical Colors)

- LEGAL: fill `#4c1d95`, stroke `#a78bfa`
- CUSTODY/INSURANCE: fill `#9a3412`, stroke `#fdba74`
- VERIFICATION: fill `#1d4ed8`, stroke `#93c5fd`
- XRPL (Canonical): fill `#065f46`, stroke `#6ee7b7`
- STELLAR (Mirror): fill `#155e75`, stroke `#67e8f9`
- FINANCE: fill `#92400e`, stroke `#fcd34d`
- OPS/CONTROLS: fill `#111827`, stroke `#94a3b8`

## Mermaid Defaults (Recommended)

```mermaid
%%{init: {"theme":"base","themeVariables":{
  "fontFamily":"Inter, Segoe UI, Arial",
  "lineColor":"#334155"
}}}%%
```

## Mermaid Class Definitions (Copy/Paste)

```mermaid
classDef legal fill:#4c1d95,stroke:#a78bfa,color:#fff,stroke-width:1px;
classDef cust fill:#9a3412,stroke:#fdba74,color:#fff,stroke-width:1px;
classDef verify fill:#1d4ed8,stroke:#93c5fd,color:#fff,stroke-width:1px;
classDef xrpl fill:#065f46,stroke:#6ee7b7,color:#fff,stroke-width:1px;
classDef stellar fill:#155e75,stroke:#67e8f9,color:#fff,stroke-width:1px;
classDef fin fill:#92400e,stroke:#fcd34d,color:#fff,stroke-width:1px;
classDef ops fill:#111827,stroke:#94a3b8,color:#fff,stroke-width:1px;
```

## Diagram Rules (Senior Review Standards)

- Every node belongs to exactly one domain class.
- Cross-domain edges must be labeled with the artifact type (e.g., "vault receipt", "custody control agreement", "memo anchor", "security agreement").
- Do not mix XRPL and Stellar responsibilities in the same node; Stellar remains a mirror rail.
- Keep enforcement reality explicit: custody + contracts are enforcement; ledgers are evidence + operations.
