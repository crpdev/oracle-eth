// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract OracleETH {
  // Contract owner
  address public owner;

  // BTC Marketcap Storage
  string public customerRisk;

  // Callback function
  event CallbackGetCustomerRisk();

  constructor() {
    owner = msg.sender;
  }

  function updateCustomerRisk() public {
    // Calls the callback function
    emit CallbackGetCustomerRisk();
  }

  function setCustomerRisk(string memory risk) public {
    // If it isn't sent by a trusted oracle
    // a.k.a ourselves, ignore it
    require(msg.sender == owner);
    customerRisk = risk;
  }

  function getCustomerRisk() public view returns (string memory) {
    return customerRisk;
  }
}