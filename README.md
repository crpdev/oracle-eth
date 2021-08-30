# Example that demonstrates an external Call from Solidity using Oracles

Dependencies:-

Solidity:

npm install -g truffle ethereumjs-testrpc
npm install truffle-contract web3 bluebird fetch --save

For more details, refer the package.json file of the project

Spring Boot:

Create a simple spring boot rest api [/rest/<customerId>] that will simulate an api response.

Sample Code Snippet:

@RestController
public class OracleController {
	
	@GetMapping("/risk/{customerId}")
	public String getCustomerRisk(@PathVariable String customerId) {
		System.out.println("Processing for customerId: " + customerId);
		return customerId.equals("C1") ? "OK" : "KO";
	}

}

Truffle Config:

You can either use the testrpc to run the development blockchain at 8545 or configure Ganache/ ganache-cli at your preferred port. 

Make sure the config is updated to the truffle config and oracle/ client js files

Steps to run the project and test the Oracle implementation:

1. Issue truffle compile and truffle migrate command to compile and deploy the contract
2. In a new terminal, run the oracle.js by issuing node oracle.js
3. In a new terminal, run client.js by issuing node client.js [Repeat this step twice to notice the updates made to the customerRisk value]

*** Note: The simulation uses web3 to communicate with the oracle/ external API and the blockchain 