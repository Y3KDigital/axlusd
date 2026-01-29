# XRPL ATTESTATION TX — XAMAN-READY JSON (FINAL MEMO)

**What this is:** A signer-ready XRPL `Payment` transaction payload you can paste into tooling that supports raw tx signing (or use as the canonical source when building a Xaman payload).

**Memo binds:** SHA-256 + IPFS CID + programID + sealID.

---

## Fill These Two Fields

- `Account`: **Attestor** XRPL address (signing account)
- `Destination`: **Issuer** XRPL address (can be same org; recommended distinct)

---

## Transaction JSON (ready)

```json
{
  "TransactionType": "Payment",
  "Account": "rREPLACE_ATTESTOR",
  "Destination": "rREPLACE_ISSUER",
  "Amount": "1",
  "Memos": [
    {
      "Memo": {
        "MemoType": "414c58555344",
        "MemoData": "7b22736368656d61223a22414c585553442e50726f6772616d416e63686f722e7631222c2270726f6772616d4944223a22414c585553442d323032362d3031222c227365616c4944223a223030323839393434222c2261707072616973616c534841323536223a2235394236333444343143314230393133443633343537393535363838414434303633434137444443373346364535423235453746313842374635373632384245222c2269706673434944223a226261667962656968687170677862326c69613269367a7764756b346d637178747a3337757a6c6e753733787778696e726b796d777768666b786e79222c22646973636c61696d6572223a224e6f74206120737461626c65636f696e2e205065726d697373696f6e656420686f6c64657273206f6e6c792e2046696e616e6369616c20726564656d7074696f6e206f6e6c792e227d"
      }
    }
  ]
}
```

---

## Human-readable memo (for audit)

```json
{
  "schema":"ALXUSD.ProgramAnchor.v1",
  "programID":"ALXUSD-2026-01",
  "sealID":"00289944",
  "appraisalSHA256":"59B634D41C1B0913D63457955688AD4063CA7DDC73F6E5B25E7F18B7F57628BE",
  "ipfsCID":"bafybeihhqpgxb2lia2i6zwduk4mcqxtz37uzlnu73xwxinrkymwwhfkxny",
  "disclaimer":"Not a stablecoin. Permissioned holders only. Financial redemption only."
}
```

**MemoData length:** 329 bytes (UTF-8), hex-encoded.

---

## After you submit

Record:
- XRPL transaction hash
- ledger index
- timestamp

Into:
- `asset/02-IPFS-Upload-Record.md`
- `asset/03-Master-Asset-Record.md`
- `00-EXECUTIVE-PORTAL.md` (closure checklist)

**Document Control**
Version: 1.0 | Date: 2026-01-28 | Classification: Confidential
