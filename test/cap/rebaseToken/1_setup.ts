import { expect, assert } from "chai";
import { ethers, network, tenderly } from "hardhat";
import { stealMoney } from "../../../util/money";
import { showBody, showBodyCyan } from "../../../util/format";
import { toNumber } from "../../../util/math"
import { BN } from "../../../util/number";
import { s } from "../scope";
import { d } from "../DeploymentInfo";

import { advanceBlockHeight, reset, mineBlock } from "../../../util/block";
import { IERC20__factory, IVOTE__factory, VaultController__factory, USDI__factory, OracleMaster__factory, CurveMaster__factory, ProxyAdmin__factory } from "../../../typechain-types";
import _ from "lodash";
//import { assert } from "console";

require("chai").should();
//*
// Initial Balances:
// Andy: 100,000,000 usdc ($100) 6dec
// Bob: 10,000,000,000,000,000,000 weth (10 weth) 18dec
// Carol: 100,000,000,000,000,000,000 (100 comp), 18dec
// Dave: 10,000,000,000 usdc ($10,000) 6dec
//
// andy is a usdc holder. he wishes to deposit USDC to hold USDI
// bob is an eth holder. He wishes to deposit his eth and borrow USDI
// carol is a comp holder. she wishes to deposit her comp and then vote
// dave is a liquidator. he enjoys liquidating, so he's going to try to liquidate Bob

// configurable variables
let usdc_minter = "0xe78388b4ce79068e89bf8aa7f218ef6b9ab0e9d0";
let comp_minter = "0xf977814e90da44bfa03b6295a0616a897441acec";
let wbtc_minter = "0xf977814e90da44bfa03b6295a0616a897441acec"
let uni_minter = "0xf977814e90da44bfa03b6295a0616a897441acec"
let dydx_minter = "0xf977814e90da44bfa03b6295a0616a897441acec";
let ens_minter = "0xf977814e90da44bfa03b6295a0616a897441acec";
let aave_minter = "0xf977814e90da44bfa03b6295a0616a897441acec";
let tribe_minter = "0xf977814e90da44bfa03b6295a0616a897441acec";
let weth_minter = "0xe78388b4ce79068e89bf8aa7f218ef6b9ab0e9d0";

let carol_voting_address = "0x1F2AB8Ac759Fb0E3185630277A554Ae3110bF530";

if (process.env.TENDERLY_KEY) {
    if (process.env.TENDERLY_ENABLE == "true") {
        let provider = new ethers.providers.Web3Provider(tenderly.network())
        ethers.provider = provider
    }
}

describe("hardhat settings", () => {
    it("Set hardhat network to a block after deployment", async () => {
        expect(await reset(15083948)).to.not.throw;//14940917
    });
    it("set automine OFF", async () => {
        expect(await network.provider.send("evm_setAutomine", [false])).to.not
            .throw;
    });
});

describe("Token Setup", () => {
    it("connect to signers", async () => {
        s.accounts = await ethers.getSigners();
        s.Frank = s.accounts[0];
        s.Eric = s.accounts[5];
        s.Andy = s.accounts[6];
        s.Bob = s.accounts[7];
        s.Carol = s.accounts[8];
        s.Dave = s.accounts[9];
        s.Gus = s.accounts[10];
    });
    it("Connect to existing contracts", async () => {
        s.USDC = IERC20__factory.connect(s.usdcAddress, s.Frank);
        s.WETH = IERC20__factory.connect(s.wethAddress, s.Frank);
        s.UNI = IVOTE__factory.connect(s.uniAddress, s.Frank);
        s.WBTC = IERC20__factory.connect(s.wbtcAddress, s.Frank);
        s.COMP = IVOTE__factory.connect(s.compAddress, s.Frank);
        s.ENS = IVOTE__factory.connect(s.ensAddress, s.Frank);
        s.DYDX = IVOTE__factory.connect(s.dydxAddress, s.Frank);
        s.AAVE = IVOTE__factory.connect(s.aaveAddress, s.Frank);
        s.TRIBE = IVOTE__factory.connect(s.tribeAddress, s.Frank);

    });

    it("Connect to mainnet deployments for interest protocol", async () => {
        s.VaultController = VaultController__factory.connect(d.VaultController, s.Frank)
        s.USDI = USDI__factory.connect(d.USDI, s.Frank)
        s.Curve = CurveMaster__factory.connect(d.Curve, s.Frank)
        s.Oracle = OracleMaster__factory.connect(d.Oracle, s.Frank)

        s.ProxyAdmin = ProxyAdmin__factory.connect(d.ProxyAdmin, s.Frank)


    })
    it("Should succesfully transfer money", async () => {
        //for some reason at this block, account 1 has 1 USDC, need to burn so all accounts are equal
        await s.USDC.connect(s.accounts[1]).transfer(usdc_minter, await s.USDC.balanceOf(s.accounts[1].address))
        await mineBlock()
        for (let i = 0; i < s.accounts.length; i++) {
            await expect(
                stealMoney(usdc_minter, s.accounts[i].address, s.usdcAddress, s.USDC_AMOUNT)
            ).to.not.be.reverted;
            await mineBlock()

            expect(await s.USDC.balanceOf(s.accounts[i].address)).to.eq(s.USDC_AMOUNT, "USDC balance correct")
        
            await s.USDC.connect(s.accounts[i]).approve(s.USDI.address, s.USDC_AMOUNT)
            await s.USDI.connect(s.accounts[i]).deposit(s.USDC_AMOUNT)
            await mineBlock()

            expect(await s.USDI.balanceOf(s.accounts[i].address)).to.eq(s.USDC_AMOUNT.mul(BN("1e12")), "USDI balance correct")

        
        }
    });
});