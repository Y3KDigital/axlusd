# STYLE GUIDE — COLOR-CODED RWA SYSTEM

Use this to keep all diagrams and tables visually consistent.

## Palette

- 🟣 **Legal:** `#4c1d95` (fill), `#a78bfa` (stroke)
- 🟠 **Custody/Insurance:** `#9a3412` (fill), `#fdba74` (stroke)
- 🔵 **Verification:** `#1d4ed8` (fill), `#93c5fd` (stroke)
- 🟢 **XRPL:** `#065f46` (fill), `#6ee7b7` (stroke)
- 🟦 **Stellar:** `#155e75` (fill), `#67e8f9` (stroke)
- 🟡 **Finance:** `#92400e` (fill), `#fcd34d` (stroke)
- ⚫ **Ops/Controls:** `#111827` (fill), `#94a3b8` (stroke)

## Mermaid Class Definitions (Copy/Paste)

```mermaid
classDef legal fill:#4c1d95,stroke:#a78bfa,color:#fff;
classDef cust fill:#9a3412,stroke:#fdba74,color:#fff;
classDef verify fill:#1d4ed8,stroke:#93c5fd,color:#fff;
classDef xrpl fill:#065f46,stroke:#6ee7b7,color:#fff;
classDef stellar fill:#155e75,stroke:#67e8f9,color:#fff;
classDef fin fill:#92400e,stroke:#fcd34d,color:#fff;
classDef ops fill:#111827,stroke:#94a3b8,color:#fff;
```

## Usage Rules

- Every diagram node must belong to exactly one domain class.
- Edges crossing domains should be labeled with the artifact type (e.g., "vault receipt", "memo anchor", "security agreement").
- Avoid mixing XRPL and Stellar responsibilities in the same node; keep them separate.
