var OracleContract = require('./build/contracts/OracleETH.json')
var contract = require('truffle-contract')

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));

// Truffle abstraction to interact with our
// deployed contract
var oracleContract = contract(OracleContract)
oracleContract.setProvider(web3.currentProvider)

if (typeof oracleContract.currentProvider.sendAsync !== "function") {
  oracleContract.currentProvider.sendAsync = function() {
    return oracleContract.currentProvider.send.apply(
      oracleContract.currentProvider, arguments
    );
  };
}

web3.eth.getAccounts((err, accounts) => {
  oracleContract.deployed()
  .then((oracleInstance) => {
    // Our promises
    const oraclePromises = [
      oracleInstance.getCustomerRisk(),  // Get currently stored Customer Risk
      oracleInstance.updateCustomerRisk({from: accounts[0]})  // Request oracle to update the information
    ]

    // Map over all promises
    Promise.all(oraclePromises)
    .then((result) => {
      console.log('Customer Risk: ' + result)
      console.log('Requesting Oracle to update Customer Information...')
    })
    .catch((err) => {
      console.log(err)
    })
  })
  .catch((err) => {
    console.log(err)
  })
})