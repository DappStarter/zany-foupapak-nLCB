require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen food group rival screen come gesture flower army gesture'; 
let testAccounts = [
"0x1740cdbee9566778fde3a358090deba3d0b0b841fd4de730cda66acf96f71c21",
"0x79bc88bb0ed3dee497e3765bde1967035f268937a6a60d5a1cc388263d7140b0",
"0x27e8c7e67222d33d85942025fdb0579c0e477351083d4ab4464050d50193459e",
"0x121a6404e1072c4395d32f93daa3d360f8a1475931d385f2b3024a3c2d51adc4",
"0x46919d9f70d875cd0a07d2afdf78e2b8c9cb0d34017c797df38daf0b2bec898f",
"0x568991f62acb6271cf91e1a8f52c1b57ba7754b740af4d84c9df7e55de386d26",
"0x79ab97b95774fb68c9ae34a964a0a29c66b479fbd1e39f4b625eabdbeccfed0a",
"0x9cf9c699abf4ffabf41c0e6039684e049959f4b1a3c9939bd9a42227c4699099",
"0xd838bd791b97c5a8161e453f303b7fe005c5cb85349c6889230012495e952d88",
"0xeb13fee48179288071bcbdef703e2f1bef8c0cf9a43e40389018848b879c948f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

