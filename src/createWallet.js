const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')


const network = bitcoin.networks.testnet


// Derivação de carteiras HD
const path = `m/49'/1'/0'/0`

let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

// Criando a raiz da carteira HD
let root = bip32.fromSeed(seed, network)

// Criando uma conta - par de keys pvt-pub
let account = root.derivePath(path)
let node = account.derive(0).derive(0)

let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network
}).address

console.log('Carteira gerada')
console.log('Endereço: ', btcAddress)
console.log('Chave privada: ', node.toWIF())
console.log('Seed: ', mnemonic)



//floor pill collect tongue bread wine notable alley shove cup note myself

//Endereço:  n1UZqaQaQ3Mi5LUJ6q2GCaZvTiEPCmYGvT
//Chave privada:  cMimVDhoFoqYFgiJfsfAQZsBFgKaa7YXb9bs2xrbnpRRgykv7ZhF
//Seed:  reflect similar effort immune around uncle kiwi canvas glory river divert shoe

//Endereço:  mjpcoCQzeD8BetJoHmYwM5nvqwJg38qU2E
//Chave privada:  cQU36R6T1MBgK3ZhdGCfJtD3jpA3AsG8bJ6Jmo2DfHH7XQ78qaB7
//Seed:  inhale merge must mule retreat onion rubber curtain palace current field mammal
