const { expect } = require("chai")

// Global constants for listing an item...

const ID = 1
const NAME = "Shoes"
const CATEGORY = "Clothing"
const IMAGE = "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/shoes.jpg"
const COST = 10000
const RATING = 4
const STOCK = 5
describe("Dappazon", () => {
  let dappazon, deployer, sender;
  describe('Deployment', () => {
    beforeEach(async () => {
      [deployer, sender] = await ethers.getSigners();

      const Dappazon = await ethers.getContractFactory('Dappazon')
      dappazon = await Dappazon.deploy();
    })
    it('has an owner', async () => {
      expect(await dappazon.owner()).to.equal(await deployer.address)

    })
  })
  describe('Listing', () => {
    let transaction;
    beforeEach(async () => {
      transaction = await dappazon.connect(deployer).list(ID, NAME, CATEGORY, IMAGE, COST, RATING, STOCK);

      await transaction.wait();
    })

    it('returns attributes', async () => {
      const item = await dappazon.items(ID)

      expect(item.id).to.equal(ID);
      expect(item.name).to.equal(NAME);
    })
    it('emits the events', async () => {
      expect(transaction).to.emit(dappazon, "List")
    })

  })
  describe("buying", () => {
    let transaction;
    beforeEach(async () => {
      // List a item
      transaction = await dappazon.connect(deployer).list(ID, NAME, CATEGORY, IMAGE, COST, RATING, STOCK)
      await transaction.wait()

      // Buy a item
      transaction = await dappazon.connect(sender).buy(ID, { value: COST })
      await transaction.wait()
    })


    it("Updates sender's order count", async () => {
      const result1 = await dappazon.orderCount(sender.address)
      const ContractAddress = await dappazon.getAddress();
      const result = await ethers.provider.getBalance(ContractAddress)
      const order = await dappazon.orders(sender.address, 1)
      expect(order.time).to.be.greaterThan(0)
      expect(order.item.name).to.equal(NAME)
      expect(result1).to.equal(1)
      expect(result).to.equal(COST)
    })
  })

})
