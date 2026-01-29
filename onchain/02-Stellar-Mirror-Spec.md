# STELLAR MIRROR ARCHITECTURE

**Asset:** Alexandrite (2kg), Seal ID 00289944  
**Purpose:** Settlement and distribution layer complementing XRPL canonical registry

---

## I. ARCHITECTURAL PRINCIPLE

### Two-Layer Model

**Layer 1: XRPL (Canonical Registry)**
- Source of truth
- Immutable verification anchor
- Custody event timeline
- Non-transferable proof-of-existence

**Layer 2: Stellar (Distribution & Settlement)**
- Economic distribution to investors
- Cross-border payment rails
- Yield/dividend distribution
- Liquidity provision (if desired)

**Key Relationship:**
Stellar asset is **backed 1:1 by XRPL registry entry**, but serves different purpose.

---

## II. WHY STELLAR AS DISTRIBUTION LAYER

### Stellar's Strengths for RWA Distribution

✅ **Native Asset Issuance** (no smart contracts)  
✅ **Built-in KYC/AML Hooks** (SEP-12 standard)  
✅ **Decentralized Exchange** (SDEX for optional liquidity)  
✅ **Fast & Cheap** (3-5 second finality, $0.00001 per transaction)  
✅ **Cross-Border Focus** (designed for remittances, ideal for international investors)  
✅ **Clawback Functionality** (for compliance/regulatory needs)  
✅ **Institutional Adoption** (MoneyGram, Franklin Templeton, etc.)

---

## III. TECHNICAL DESIGN

### Asset Structure

**Asset Code:** `ALEX42M` (matching XRPL for consistency)  
**Issuer Account:** Stellar account controlled by SPV  
**Total Supply:** Variable depending on use case (see options below)  
**Authorization Required:** YES (`AUTH_REQUIRED` flag set)  
**Clawback Enabled:** YES (`AUTH_CLAWBACK` flag set)  
**Revocable:** YES (for compliance)

---

### Use Case Options

#### **Option A: Direct Economic Interest (Securities Model)**

**Supply:** 42,000,000 units  
**Denomination:** Each unit = $1 of appraised value  
**Use Case:** Token represents fractional ownership or beneficial interest in asset  
**Distribution:** Reg D / Reg S private placement to accredited investors  

**Example:**
- Investor purchases 100,000 units = $100,000 investment
- Represents 100,000 / 42,000,000 = 0.238% of asset value
- Receives pro-rata share of any proceeds (sale, yield, etc.)

**Compliance:**
- This IS a security
- Requires securities counsel, offering memorandum
- Transfer restrictions enforced via Stellar trustline authorization

---

#### **Option B: Yield Distribution Token (Debt Model)**

**Supply:** Based on note principal (e.g., if $15M credit facility, issue 15,000,000 units)  
**Denomination:** Each unit = $1 of principal  
**Use Case:** Token represents claim to fixed or variable yield  
**Distribution:** Structured note investors receive tokens as receipt/claim tracking  

**Example:**
- SPV borrows $10M against asset
- Issues 10,000,000 `ALEX42M` tokens to lender or note holders
- Tokens track principal + interest accrual
- Redeemable upon maturity or asset liquidation

**Compliance:**
- This IS a security (debt instrument)
- Requires note indenture, trustee (potentially)
- Transfer restrictions via authorization

---

#### **Option C: Proof of Economic Interest (Registry Model)**

**Supply:** 100 units (1 unit = 1% of asset)  
**Denomination:** Percentage-based  
**Use Case:** Simple tracking of investor allocations, not tradable  
**Distribution:** Internal registry, not offered publicly  

**Example:**
- Family office invests $4.2M = 10% of asset value
- Receives 10 `ALEX42M` tokens as proof
- Non-transferable (strictly registry function)

**Compliance:**
- Likely NOT a security (no trading, no profit expectation from secondary market)
- Still requires clear terms and investor disclosures

---

## IV. ISSUANCE PROCESS

### Step 1: SPV Stellar Account Setup

**Actions:**
1. Create Stellar account for SPV (public key: G[...]  , secret key: secure storage)
2. Fund account with 5-10 XLM (base reserve + operations)
3. Set account flags:
   ```
   AUTH_REQUIRED: true
   AUTH_REVOCABLE: true
   AUTH_CLAWBACK: true
   ```
4. Configure multi-signature (optional but recommended):
   - Add 2-3 signing keys
   - Set threshold (e.g., 2-of-3 for asset issuance)

**Security:**
- Master key in cold storage (hardware wallet or MPC custody)
- Use operational signing key for day-to-day transactions

---

### Step 2: Asset Creation & Distribution

**Transaction Type:** `payment`  
**From:** Issuer account (SPV)  
**To:** Distribution account or investor accounts  
**Asset:**
```json
{
  "asset_code": "ALEX42M",
  "asset_issuer": "G[SPV-Issuer-Address]",
  "amount": "[as per use case]"
}
```

**Memo:**
```json
{
  "type": "text",
  "value": "Alexandrite RWA - Economic Interest - Backed by XRPL registry [XRPL-tx-hash]"
}
```

**Process:**
1. Investor must first establish trustline to `ALEX42M` asset
2. SPV authorizes trustline (because `AUTH_REQUIRED` is set)
3. SPV sends `ALEX42M` tokens to investor
4. Tokens now held in investor account

---

### Step 3: Metadata & XRPL Link

Post metadata to Stellar account's home domain or use SEP-1 (Stellar Info File):

**Location:** `https://[SPV-domain]/.well-known/stellar.toml`

**Content:**
```toml
ACCOUNTS = ["G[SPV-Issuer-Address]"]

[[CURRENCIES]]
code = "ALEX42M"
issuer = "G[SPV-Issuer-Address]"
display_decimals = 0
name = "Alexandrite RWA Economic Interest"
desc = "Represents beneficial interest in 2kg rough alexandrite gemstone asset. Backed by XRPL registry."
conditions = "Transferable only to authorized investors. Subject to securities regulations."
image = "https://[SPV-domain]/images/alexandrite.png"
xrpl_anchor = "[XRPL transaction hash of digital twin]"
ipfs_appraisal = "[IPFS CID of appraisal PDF]"
is_asset_anchored = true
```

**Purpose:**
- Wallets and explorers can display asset information
- Investors can verify link to XRPL canonical registry
- Compliance information is transparent

---

## V. TRUSTLINE & AUTHORIZATION WORKFLOW

### Investor Onboarding

**Step 1: KYC/AML (Off-Chain)**
- Investor completes KYC via SPV's chosen provider
- Verified as accredited investor (if required)
- Subscription agreement executed
- Investor provides Stellar public key

**Step 2: Trustline Establishment (On-Chain)**
- Investor creates trustline to `ALEX42M` asset
- Transaction:
  ```
  Operation: CHANGE_TRUST
  Asset: ALEX42M:[Issuer]
  Limit: [Max amount investor is authorized to hold]
  ```

**Step 3: SPV Authorization**
- SPV reviews KYC approval
- Authorizes trustline:
  ```
  Operation: ALLOW_TRUST
  Trustor: [Investor public key]
  Asset: ALEX42M
  Authorize: true
  ```

**Step 4: Token Distribution**
- SPV sends `ALEX42M` tokens to investor
- Investor now holds economic interest

**Result:**
- Only KYC-approved investors can hold tokens
- Transfers between investors also require authorization
- SPV maintains full control over token distribution

---

## VI. TRANSFER RESTRICTIONS & COMPLIANCE

### Permitted Transfers

**Between Authorized Investors:**
- Investor A wants to sell to Investor B
- Both must have authorized trustlines
- Transfer allowed (but SPV can monitor and revoke if needed)

**Lock-Up Periods:**
- Implement via off-chain agreement (token remains in investor account but transfer is contractually prohibited)
- Or: Use SPV authorization to temporarily freeze transfers (revoke & re-authorize trustline)

---

### Clawback for Compliance

**Scenarios Where Clawback Used:**
- Investor fails ongoing KYC/AML checks
- Court order or regulatory demand
- Investor breaches subscription agreement
- Fraudulent activity detected

**Process:**
```
Operation: CLAWBACK
From: [Investor account]
Asset: ALEX42M
Amount: [Amount to clawback]
```

**Effect:**
- Tokens are removed from investor account
- Returned to issuer (or burned)
- Investor retains contractual claims off-chain (SPV must handle fairly)

**Legal Note:**
- Clawback should be disclosed in offering documents
- Must be exercised consistently and per agreement terms
- Courts generally uphold clawback for compliance purposes

---

## VII. YIELD DISTRIBUTION VIA STELLAR

### Use Case: Asset Generates Cash Flow

**Example Scenarios:**
- Asset is pledged for credit facility; SPV receives interest income
- Asset is partially sold; proceeds distributed to token holders
- Asset is leased to jewelry manufacturer (rare but possible)

**Distribution Method:**

**Step 1: Calculate Pro-Rata Shares**
- Read Stellar ledger for all `ALEX42M` holders and balances
- Calculate percentage ownership
- Determine distribution amount per token

**Step 2: Execute Payments**
```
Operation: PAYMENT
Destination: [Each investor account]
Asset: USDC or USDT or native XLM
Amount: [Pro-rata distribution]
Memo: "Alexandrite RWA - Q1 2026 Yield Distribution"
```

**Step 3: Tax Reporting**
- SPV issues 1099 or equivalent
- Investors report as income or capital gain (depending on structure)

**Cost:**
- Stellar transaction fee: $0.00001 × number of investors
- Essentially free even for 1,000+ investors

---

## VIII. SECONDARY MARKET (OPTIONAL)

### SDEX Liquidity (Advanced)

If SPV wants to enable limited liquidity without full exchange listing:

**Mechanism:**
- Create liquidity pool on Stellar DEX (SDEX)
- Pair `ALEX42M` with `USDC` or `XLM`
- Provide initial liquidity (e.g., $100K USDC + equivalent `ALEX42M`)

**Effects:**
- Investors can sell tokens on SDEX (subject to authorization)
- Price discovery occurs organically
- SPV can monitor and intervene if needed

**Risks:**
- Price volatility
- Regulatory scrutiny (more liquidity = more "security-like")
- Potential for price to detach from underlying asset value

**Recommendation:**
- Only consider if investor base is large (100+ investors)
- Maintain transfer restrictions via authorization
- Include circuit breaker (can remove liquidity or freeze asset if needed)

---

### Atomic Swaps Between XRPL & Stellar (Advanced)

For sophisticated setups, enable cross-chain swaps:

**Use Case:**
- Investor holds XRPL-based claim (maybe future utility)
- Wants to swap for Stellar-based economic interest (for liquidity)

**Mechanism:**
- Hash Time-Locked Contracts (HTLCs) between XRPL and Stellar
- Trustless atomic swap
- No intermediary needed

**Status:**
- Technically feasible
- Complex to implement
- Only recommended if there are XRPL-native claims (not in current architecture)

---

## IX. XRPL ↔ STELLAR RECONCILIATION

### Maintaining 1:1 Backing

**Critical Rule:**
Total Stellar `ALEX42M` supply MUST NEVER EXCEED the economic value represented by XRPL anchor.

**Reconciliation Process (Quarterly):**

1. **Read XRPL Ledger:**
   - Verify digital twin anchor transaction still exists (it's immutable, so this is just confirmation)
   - Check custody event memos for any status changes

2. **Read Stellar Ledger:**
   - Sum total `ALEX42M` supply in circulation
   - Verify = expected supply per issuance records

3. **Cross-Check with Legal:**
   - Confirm SPV still owns asset (custody receipts)
   - No liens or encumbrances (unless disclosed to token holders)

4. **Audit Report:**
   - Independent auditor confirms:
     - Asset exists at custodian
     - XRPL anchor is valid
     - Stellar supply matches authorized issuance
   - Publish audit summary for investors

---

## X. COMPARISON: XRPL ANCHOR VS. STELLAR TOKEN

| Attribute | XRPL Digital Twin | Stellar Economic Token |
|-----------|------------------|------------------------|
| **Purpose** | Verification & proof | Economic distribution |
| **Transferable** | No (frozen) | Yes (with authorization) |
| **Represents** | Asset existence | Economic interest |
| **Legal Status** | Not a security | IS a security |
| **Investors Hold?** | No | Yes |
| **Custody Link** | Direct (via memos) | Indirect (via XRPL reference) |
| **Updates** | Custody events posted | Yield distributions |
| **Cost** | <$100/year | Depends on investor count |

**Key Point:**
These are **complementary**, not redundant. XRPL = trust anchor, Stellar = investor interface.

---

## XI. IMPLEMENTATION CHECKLIST

### Phase 1: Stellar Account Setup (Week 1)
- [ ] Create SPV Stellar account
- [ ] Set authorization flags (REQUIRED, REVOCABLE, CLAWBACK)
- [ ] Configure multi-signature (if desired)
- [ ] Fund account with 10 XLM
- [ ] Test on Stellar Testnet first

### Phase 2: Asset Creation (Week 2)
- [ ] Determine total supply (per use case)
- [ ] Create Stellar.toml file with metadata
- [ ] Link to XRPL transaction hash
- [ ] Host stellar.toml at SPV domain
- [ ] Issue initial tokens (or prepare distribution list)

### Phase 3: Investor Onboarding (Weeks 3-4)
- [ ] Integrate KYC provider (Onfido, Sumsub, etc.)
- [ ] Create investor dashboard (view holdings, request distributions)
- [ ] Automate trustline authorization workflow
- [ ] Test end-to-end investor experience

### Phase 4: Ongoing Operations
- [ ] Monitor trustline requests daily
- [ ] Process yield distributions quarterly (if applicable)
- [ ] Reconcile XRPL/Stellar quarterly
- [ ] Publish audit reports annually

---

## XII. SECURITY & OPERATIONAL RISKS

### Key Management
**Risk:** Loss of Stellar secret key = loss of control over asset issuance  
**Mitigation:**
- Multi-signature (no single point of failure)
- Hardware wallet or MPC custody
- Master key in cold storage, operational key for day-to-day

### Unauthorized Transfers
**Risk:** Investor transfers to non-KYC party  
**Mitigation:**
- `AUTH_REQUIRED` flag prevents this (recipient must be pre-authorized)
- Monitor ledger for unexpected trustlines

### Regulatory Changes
**Risk:** Jurisdiction bans or restricts tokenized securities  
**Mitigation:**
- Clawback functionality allows SPV to retrieve tokens if needed
- Operate in multiple jurisdictions (Delaware, ADGM, etc.)
- Maintain ability to convert tokens back to traditional note certificates

---

## XIII. COST ANALYSIS

### One-Time Setup
| Item | Cost |
|------|------|
| Stellar account creation | 1 XLM (~$0.10) |
| Initial funding | 10 XLM (~$1) |
| Stellar.toml hosting | $0 (if SPV has website) |
| **Total** | **~$1-$5** |

### Per-Investor Costs
| Item | Cost |
|------|------|
| Trustline authorization | 0.00001 XLM (~$0.000001) |
| Token distribution | 0.00001 XLM |
| Yield payment (if applicable) | 0.00001 XLM |
| **Total per investor per year** | **~$0.00003** |

**Conclusion:** Even with 1,000 investors, annual operational cost <$1. Stellar is essentially free for RWA distribution.

---

## XIV. LEGAL & COMPLIANCE NOTES

### Securities Classification

**Stellar tokens (if economic interest) ARE securities in most jurisdictions.**

**Exemptions to Use:**
- **Reg D 506(b)** (US): Up to 35 non-accredited + unlimited accredited investors; no general solicitation
- **Reg D 506(c)** (US): Unlimited accredited investors; general solicitation allowed if KYC verified
- **Reg S** (Offshore): Sales outside US to non-US persons

**Required Documents:**
- Offering memorandum / private placement memorandum
- Subscription agreement
- Risk disclosures (link to `/legal/04-Risk-Register.md`)
- Transfer restriction legends

---

### AML/KYC Compliance

**Stellar Anchor Standards (SEPs):**
- **SEP-12:** KYC API standard (connect to identity providers)
- **SEP-31:** Cross-border payments (if distributing yield internationally)

**Recommended KYC Providers:**
- Onfido
- Sumsub
- Jumio
- Comply Advantage (for sanctions screening)

**Process:**
1. Investor submits KYC info
2. Provider verifies ID, address, accredited status
3. SPV receives pass/fail + risk score
4. SPV approves trustline only if KYC passes

---

## XV. NEXT STEPS

After completing Stellar mirror:

1. **Investor Onboarding** → Create investor portal (dashboard showing holdings, distributions, documents)
2. **Offering Documents** → Engage securities counsel to draft PPM, subscription agreement
3. **Distribution** → Execute Reg D filing (Form D) and distribute tokens
4. **Ongoing Compliance** → Annual audits, quarterly reconciliations, SEC reporting (if applicable)

---

**Document Control**  
Version: 1.0 | Date: January 28, 2026 | Classification: Confidential
