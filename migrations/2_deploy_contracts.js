const OracleETH = artifacts.require("OracleETH");

module.exports = function (deployer) {
  deployer.deploy(OracleETH);
};
