const dotenv = require("dotenv")

dotenv.config()

const Web3 = require('web3');

class TransactionChecker {
    web3;
    web3ws;
    account;
    subscription;

    constructor(http_endpoint, wss_endpoint, account) {
        this.web3ws = new Web3(new Web3.providers.WebsocketProvider(wss_endpoint));
        this.web3 = new Web3(new Web3.providers.HttpProvider(http_endpoint));
        this.account = account.toLowerCase();
        // this.account = account;
    }

    subscribe(topic) {
        this.subscription = this.web3ws.eth.subscribe(topic, (err, res) => {
            if (err) console.error(err);
        });
    }

    watchTransactions() {
        console.log('Watching all pending transactions...(takes a while)');
        this.subscription.on('data', (txHash) => {
            setTimeout(async () => {
                let tx = await this.web3.eth.getTransaction(txHash);
                console.log({address: tx.from, value: this.web3.utils.fromWei(tx.value, 'ether'), timestamp: new Date()});
            }, 60000)
        });
    }
}


http_endpoint = process.env.HTTPS_ENDPOINT
wss_endpoint = process.env.WSS_ENDPOINT
let txChecker = new TransactionChecker(http_endpoint, wss_endpoint, process.env.ACCOUNT_NAME);
txChecker.subscribe('pendingTransactions');
txChecker.watchTransactions();