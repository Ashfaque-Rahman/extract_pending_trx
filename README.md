# Chainstack Interview

A demo project for retrieving pending transactions from Polygon blockchain mempool and display them to users.

# Context
EVM to search in: Polygon PoS (Mumbai Testnet)
Hosting: Chainstack (Microsoft Azure - London uksouth)

### Steps:
1. I have created a [developer account in Chainstack](https://console.chainstack.com/user/account/create) to deploy my node connected to public Polygon PoS network.
2. Once the node is deployed, it generated the HTTPS endpoint and WSS endpoint through which we can talk to the network.
3. I installed the "web3" package like following, `npm install web3`
4. I have used the WebsocketProvider from web3.js library for setting connection to the node through above mentioned endpoints
5. For retrieving the pending transactions from mempool, I used the `web3ws.eth.subscribe` function with `pendingTransactions` topic 
---
## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`. After running the following command, open again the command line and that's all.

    $ npm install npm -g


## Install
Clone the repo and Open it in your code editor of choice (I used VS Code)

    $ git clone https://github.com/Ashfaque-Rahman/extract_pending_trx.git
    $ cd demo
    $ npm install
    $ node index.js
