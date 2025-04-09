
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with account:", deployer.address);

  const BitPay = await ethers.getContractFactory("BitPay");
  const bitpay = await BitPay.deploy();
  await bitpay.deployed();

  console.log("BitPay deployed to:", bitpay.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
