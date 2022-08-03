import { Deployment, DeploymentInfo } from "./deployment/deployment";

const { ethers } = require("hardhat");

async function sleep(milliseconds: number) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

async function main() {
  const accounts = await ethers.getSigners();
  const deployer = accounts[0];

  console.log("Deployer: ", deployer.address);
  let info: DeploymentInfo = {

    USDC_UNI_CL: "0xdf0fb4e4f928d2dcb76f438575fdd8682386e13c",
    USDC_ETH_CL: "0xf9680d99d6c9589e2a93a78a04a279e509205945",
    USDC_WBTC_CL: "0xDE31F8bFBD8c84b5360CFACCa3539B938dd78ae6",
    USDC_UNI_POOL: "0x74d3c85df4dbd03c7c12f7649faa6457610e7604",
    USDC_ETH_POOL: "0x45dda9cb7c25131df268515131f647d726f50608",
    USDC_WBTC_POOL: "0x847b64f9d3a95e977d157866447a5c0a5dfa0ee5",
    USDC: "0xbEed11d5c8c87FaCbf3f81728543eb8cB6CBa939",
    WETH: "0x8afBfe06dA3D035c82C5bc55C82EB3FF05506a20",
    WBTC: "0xa8A6d7c39270ddc658DC53ECbd0500a4C64C9Cc9",
    UNI: "0xBAB395136FaEa31F33f32737218D79E2e92b32C1",
    ProxyAdmin: "0xafDBA0899A00ca07D36d019eF7649803b70a9c08",
    VaultController: "0x385E2C6b5777Bc5ED960508E774E4807DDe6618c",
    USDI: "0x203c05ACb6FC02F5fA31bd7bE371E7B213e59Ff7",
    Curve: "0x52b2De5e0b5A9B2aF71FF61F1ef2EFB89d2138Af",
    ThreeLines: "0xBD5dDF72f5eB810e69D15361a06Ee9ACc5152822",
    Oracle: "0x90a972d9b53659150F1412E885E27fb7c2E49110",
    EthOracle: "0xa2B18457011877dB95eD388E5f1b861bc4bcD741",
    UniOracle: "0xd8Cd58D478c5BEb57e316F3C5D60D4BC3d921293",
    WBTCOracle: "0x4FdC91D86743C5A47A2739a1Abb9F85e589589AB",
    CharlieDelegator: "0x3389d29e457345E4f22731292D9C10ddFc78088f",
    CharlieDelegate: "0x3c92f99001803a00dad5d800eBa5e2f84B1b278E",
    IPTDelegator: "0xe8504e3B854940818c8F3D61DC155FA9919dd10F",
    IPTDelegate: "0xBC53C5629bB8bb00da575031114fB780581567B7", 

    /**
    EthOracle: '0xa2B18457011877dB95eD388E5f1b861bc4bcD741',
    UniOracle: '0xd8Cd58D478c5BEb57e316F3C5D60D4BC3d921293',
    WBTCOracle: '0x4FdC91D86743C5A47A2739a1Abb9F85e589589AB',
    USDC: '0xE4F7bBfCbB6d48486D07a90D8b72F454c60d603A',
    WETH: '0xFf6ac60A8E1E5c9342955A10dD69cb8A72eD1C33',
    WBTC: '0x43fEa2280690aEA1dFDd90b40FEe6b62072A7646',
    UNI: '0x5Fe360667F8655945FDB38377a9D4bF4f18bDc3a',
    ProxyAdmin: '0xD02B2FA59142d8fea247d657a532DCd0B2090277',
    VaultController: '0x35c3cf2c9d1e7E56F163CCFeaD84ed2819b9c9e1',
    USDI: '0xA079b09f6710cc653336D88364CDa5df2e0ecdc6',
    Curve: '0x7474ef1573C566B7a72b4ED64918bC45A2503FFc',
    ThreeLines: '0x403cde36e7F1e7F5A0dea60770f5F297EfDc2395',
    Oracle: '0xa0f308063FF4d7A839812D7d99555200B5c42ecE',
    CharlieDelegator: '0x215F923c69BF9EC6AcFd67D04Cc5C7d5f3DF5A2d',
    CharlieDelegate: '0x019FACC9389F26Ebe2AA94f2e2B3d88cA7E1e3FE',
    IPTDelegator: '0x11106831C1cB3A59F33f63b4C7a674deA42Ef715',
    IPTDelegate: '0x68a2f73F4d89a47adEe4fE93f187CBAAa9046068'
     */
    

  };

  const d = new Deployment(deployer, info);
  await d
    .ensure()
    .then(() => {
      console.log("Contracts deployed");
    })
    .catch((e) => {
      console.log(e);
    });

  console.log(d.Info);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
