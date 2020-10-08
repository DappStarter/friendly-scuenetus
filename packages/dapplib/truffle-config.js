require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remind hockey install clock off tribe'; 
let testAccounts = [
"0x21c6bf163c861d2285dcb6f2f0fd5085503a0369f6915f5e406c2dccad30b016",
"0x380ba26ac184467cfa77188baaa79ca16bf038e7ac1ddcc1e1cba940580f4ec3",
"0x25530058aaf7df2c96376bd6eb59f6943f7fb4e334a60828f09d7b7cd4c89170",
"0x98b1e0994ef825b98f46edd0b0137fccbb5df0482cce083c7866fce6f520e2db",
"0x84e8f4a4d2ca1d46fef01ab8cfccb3ee21e2c7d690d7f1060efbc7011ec1a70f",
"0x50c32a942e33c89be90c1e39c4fc3b8c76908cea6548ab6d0603098c8b4e506c",
"0xab364546c8ad2c36484348412f122f2fbc9bcc09b15a831484680bb48f7ed345",
"0x406645e90f6a216d1471bbf3354fe055981166bccc15d332a0b9cd1ba6c29e3a",
"0xcd3dc0b798d710b7a5fd4c885f5868c6eb923edc02854c6cf824457ebc04f600",
"0xa89b3a77061dc1ff21f38852f2dd6587150684510ebaa6f9dcc951490cfd2fc2"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
