// XRPL Attestation Submitter (xrpl.js)
// Usage:
//   npm init -y
//   npm i xrpl
//   node xrpl/09-Attestation-Submit-xrpljs.js wss://s.altnet.rippletest.net:51233 <ATTTESTOR_SEED> <ISSUER_ADDRESS>
//
// For mainnet, use:
//   wss://s1.ripple.com

const xrpl = require("xrpl");

const MEMO_TYPE_HEX = "414c58555344"; // "ALXUSD"
const MEMO_DATA_HEX =
  "7b22736368656d61223a22414c585553442e50726f6772616d416e63686f722e7631222c2270726f6772616d4944223a22414c585553442d323032362d3031222c227365616c4944223a223030323839393434222c2261707072616973616c534841323536223a2235394236333444343143314230393133443633343537393535363838414434303633434137444443373346364535423235453746313842374635373632384245222c2269706673434944223a226261667962656968687170677862326c69613269367a7764756b346d637178747a3337757a6c6e753733787778696e726b796d777768666b786e79222c22646973636c61696d6572223a224e6f74206120737461626c65636f696e2e205065726d697373696f6e656420686f6c64657273206f6e6c792e2046696e616e6369616c20726564656d7074696f6e206f6e6c792e227d";

async function main() {
  const [wsUrl, attestorSeed, issuerAddress] = process.argv.slice(2);

  if (!wsUrl || !attestorSeed || !issuerAddress) {
    console.error(
      "Usage: node xrpl/09-Attestation-Submit-xrpljs.js <WS_URL> <ATTESTOR_SEED> <ISSUER_ADDRESS>"
    );
    process.exit(1);
  }

  const client = new xrpl.Client(wsUrl);
  await client.connect();

  try {
    const wallet = xrpl.Wallet.fromSeed(attestorSeed);

    const tx = {
      TransactionType: "Payment",
      Account: wallet.address,
      Destination: issuerAddress,
      Amount: "1",
      Memos: [
        {
          Memo: {
            MemoType: MEMO_TYPE_HEX,
            MemoData: MEMO_DATA_HEX,
          },
        },
      ],
    };

    const prepared = await client.autofill(tx);
    const signed = wallet.sign(prepared);

    const result = await client.submitAndWait(signed.tx_blob);

    console.log("RESULT:");
    console.log(JSON.stringify(result, null, 2));

    if (result?.result?.hash) {
      console.log("\nXRPL_TX_HASH=" + result.result.hash);
    }
  } finally {
    await client.disconnect();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
