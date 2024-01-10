// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat")
const { items } = require("../src/items.json")

async function main() {

  const [deployer] = await ethers.getSigners();

  const dappazon = await hre.ethers.deployContract("Dappazon")

  await dappazon.waitForDeployment();

  console.log(`Deployed the smart contracts at ${dappazon.target} `)


  for (let i = 0; i < items.length; i++) {

    console.log(items[0])
    let transaction = await dappazon.connect(deployer).list(
      items[i].id,
      items[i].name,
      items[i].category,
      items[i].image,
      parseInt(items[i].price),
      items[i].rating,
      items[i].stock
    )

    await transaction.wait()
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
})
