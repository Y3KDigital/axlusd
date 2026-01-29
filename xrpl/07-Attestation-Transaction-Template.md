# XRPL ATTESTATION TRANSACTION (READY TO SUBMIT)

## XRPL ATTESTATION CEREMONY - EXECUTION CHECKLIST

This page is written so an operator, counsel, or a signing authority can execute the attestation ceremony without improvisation.

### 1) Pre-Flight Checklist

- [x] IPFS CID finalized: `bafybeihhqpgxb2lia2i6zwduk4mcqxtz37uzlnu73xwxinrkymwwhfkxny`
- [x] SHA-256 recorded: `59B634D41C1B0913D63457955688AD4063CA7DDC73F6E5B25E7F18B7F57628BE`
- [ ] Issuer authority approved (board / signer authorization)
- [ ] Attestor funded (base reserve + fees)
- [ ] Correct network selected: Mainnet | Testnet
- [ ] Submission method chosen: Xaman | xrpl.js

### 2) Fields to Fill (Single Source of Truth)

```text
Attestor Address:
Issuer Address:
Treasury Address (reference only):
Network: Mainnet | Testnet
Submission Method: Xaman | xrpl.js
Date (UTC):
Operator:
```

### 3) What This Transaction Does (Plain English)

This transaction does not mint tokens and does not transfer economic value.
It permanently anchors the asset evidence (SHA-256 + IPFS CID + program identifiers) to the XRPL ledger as an immutable, timestamped proof record.
Once submitted and validated, it is effectively irreversible.

### 4) DO NOT (Operator Safety)

- DO NOT re-encode or "clean up" the memo JSON once MemoData is finalized.
- DO NOT edit the prepared transaction JSON in ways that change MemoData.
- DO NOT submit the attestation twice (if in doubt, verify by tx hash / explorer first).
- DO NOT submit from the treasury wallet; use the designated attestor account.

### 5) Post-Submit Recording Block

```text
XRPL Transaction Hash:
Ledger Index:
Close Time (UTC):
Explorer URL:
```

These values must be copied into:
- `asset/03-Master-Asset-Record.md`
- `asset/02-IPFS-Upload-Record.md`
- `00-EXECUTIVE-PORTAL.md` (closure checklist)

---

**Purpose:** Create a single, on-ledger, timestamped attestation that binds the appraisal PDF fingerprint (SHA-256) and IPFS CID to the program ID and asset identifiers.
This is the "go-live" moment for verification.

---

## 1) Inputs You Must Fill

- **programID:** `ALXUSD-2026-01` (or your final ID)
- **sealID:** `00289944`
- **appraisalSHA256:** `59B634D41C1B0913D63457955688AD4063CA7DDC73F6E5B25E7F18B7F57628BE`
- **ipfsCID:** `bafybeihhqpgxb2lia2i6zwduk4mcqxtz37uzlnu73xwxinrkymwwhfkxny`
- **issuerXRPL:** `rPENDING`
- **attestorXRPL:** `rPENDING` (recommended separate from issuer)
- **custodian / vaultReceiptID / insurancePolicyID:** `PENDING` (optional at first; post a later custody update memo)

---

## 2) Memo Payload (JSON)

Use the schema already defined in `xrpl/05-Memo-Schema.md`.

Recommended minimal attestation payload (keep short):

```json
{
  "schema": "ALXUSD.ProgramAnchor.v1",
  "programID": "ALXUSD-2026-01",
  "sealID": "00289944",
  "appraisalSHA256": "59B634D41C1B0913D63457955688AD4063CA7DDC73F6E5B25E7F18B7F57628BE",
  "ipfsCID": "bafybeihhqpgxb2lia2i6zwduk4mcqxtz37uzlnu73xwxinrkymwwhfkxny",
  "disclaimer": "Not a stablecoin. Permissioned holders only. Financial redemption only."
}
```

---

## 3) Transaction Type (Recommended)

### Recommended: Payment with nominal amount

XRPL requires a valid transaction type; a small Payment is the simplest universal carrier for memos.

- **From:** `attestorXRPL`
- **To:** `issuerXRPL` (or a designated reference address)
- **Amount:** `1` drop of XRP (0.000001 XRP)
- **Memos:** include the JSON payload (hex encoded)

This is not an economic transfer; it is a memo carrier with a deterministic on-chain timestamp.

---

## 4) Encoding the Memo (PowerShell)

### A) Create JSON (single line)

```powershell
$memoJson = '{"schema":"ALXUSD.ProgramAnchor.v1","programID":"ALXUSD-2026-01","sealID":"00289944","appraisalSHA256":"59B634D41C1B0913D63457955688AD4063CA7DDC73F6E5B25E7F18B7F57628BE","ipfsCID":"bafybeihhqpgxb2lia2i6zwduk4mcqxtz37uzlnu73xwxinrkymwwhfkxny","disclaimer":"Not a stablecoin. Permissioned holders only. Financial redemption only."}'
```

### B) Convert to hex

```powershell
$bytes = [System.Text.Encoding]::UTF8.GetBytes($memoJson)
$memoHex = ($bytes | ForEach-Object { $_.ToString('x2') }) -join ''
$memoHex
```

---

## 5) Submission Template (Transaction Skeleton)

Use your preferred submission tool (Xaman, xrpl.js, Rippled, custody platform).
Populate fields below:

```json
{
  "TransactionType": "Payment",
  "Account": "rPENDING_ATTESTOR",
  "Destination": "rPENDING_ISSUER",
  "Amount": "1",
  "Memos": [
    {
      "Memo": {
        "MemoType": "414c58555344",
        "MemoData": "<HEX_ENCODED_JSON>"
      }
    }
  ]
}
```

MemoType above is hex for ALXUSD.

---

## 6) Where to Record the Result

Once submitted, record the resulting transaction hash in:
- `asset/02-IPFS-Upload-Record.md`
- `asset/03-Master-Asset-Record.md`
- `00-EXECUTIVE-PORTAL.md`

(Optional) add a custody event memo later using the custody update schema in `xrpl/05-Memo-Schema.md`.

---

**Document Control**
Version: 1.1 | Date: 2026-01-28 | Classification: Confidential
