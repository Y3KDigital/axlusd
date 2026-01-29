# OPTIONAL EVM ADAPTER (NON-CANONICAL)

**Status:** Optional adapter only. XRPL remains canonical. Stellar remains mirror rail.

---

## I. WHY THIS EXISTS

Some counterparties have EVM-only custody/operations. This adapter can provide a *representation* of claims for reporting or internal tooling.

This adapter must not become:
- a second source of truth
- a retail liquidity promise
- a permissionless market

---

## II. RULES

- Any EVM token must reference XRPL tx hashes and issuance logs.
- No independent minting on EVM.
- Redemption rights remain governed by off-chain agreements.

---

## III. RECOMMENDED APPROACH (IF NEEDED)

- Use a non-transferable “receipt token” or restricted-transfer security token standard.
- Mint only to whitelisted addresses.
- Keep supply capped to matched XRPL outstanding.

---

**Document Control**  
Version: 1.0 | Date: 2026-01-28 | Classification: Confidential
