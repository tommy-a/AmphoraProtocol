// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IUSDI.sol";

import "./token/UFragments.sol";
import "./lending/Vault.sol";

import "./_external/IERC20.sol";
import "./_external/compound/ExponentialNoError.sol";
import "./_external/openzeppelin/PausableUpgradeable.sol";

/// @title USDI token contract
/// @notice handles all minting/burning of usdi
/// @dev extends UFragments
contract USDI is Initializable, PausableUpgradeable, UFragments, IUSDI, ExponentialNoError {
  IERC20 public _reserve;

  address public _lenderAddress;
  address public _vaultControllerAddress;
  IVaultController private _VaultController;

  /// @notice checks if _msgSender() is VaultController
  modifier onlyVaultController() {
    require(_msgSender() == _vaultControllerAddress, "only VaultController");
    _;
  }

  /// @notice any function with this modifier will call the pay_interest() function before any function logic is called 
  modifier paysInterest() {
    _VaultController.calculateInterest();
    _;
  }

  /// @notice initializer for contract
  /// @param reserveAddr the address of USDC
  /// @dev consider adding decimals?
  function initialize(address reserveAddr) public override initializer {
    __UFragments_init("USDI Token", "USDI");
    __Pausable_init();
    _reserve = IERC20(reserveAddr);
  }

  /// @notice pause contract, owner only
  function pause() external override onlyOwner {
    _pause();
  }

  /// @notice unpause contract, owner only
  function unpause() external override onlyOwner {
    _unpause();
  }

  function owner() public view override(IUSDI, OwnableUpgradeable) returns (address) {
    return super.owner();
  }

  function name() public view override(IERC20Metadata, ERC20Detailed) returns (string memory) {
    return super.name();
  }

  function symbol() public view override(IERC20Metadata, ERC20Detailed) returns (string memory) {
    return super.symbol();
  }

  function decimals() public view override(IERC20Metadata, ERC20Detailed) returns (uint8) {
    return super.decimals();
  }

  function reserveAddress() public view override returns (address) {
    return address(_reserve);
  }

  /// @notice deposit USDC to mint USDi
  /// caller should obtain 1e12 USDi for each USDC
  /// @param usdc_amount amount of USDC to deposit
  function deposit(uint256 usdc_amount) external override paysInterest whenNotPaused {
    // scale the usdc_amount to the usdi decimal amount, aka 1e18
    uint256 amount = usdc_amount * 1e12;
    require(amount > 0, "Cannot deposit 0");
    // check allowance and ensure transfer success
    uint256 allowance = _reserve.allowance(_msgSender(), address(this));
    require(allowance >= usdc_amount, "Insufficient Allowance");
    require(_reserve.transferFrom(_msgSender(), address(this), usdc_amount), "transfer failed");
    // modify the gonbalances of the sender, minting
    _gonBalances[_msgSender()] = _gonBalances[_msgSender()] + amount * _gonsPerFragment;
    // modify totalSupply and totalGons
    _totalSupply = _totalSupply + amount;
    _totalGons = _totalGons + amount * _gonsPerFragment;

    emit Deposit(_msgSender(), amount);
  }

  /// @notice withdraw USDC by burning USDi
  /// caller should obtain 1 USDC for every 1e12 USDi
  /// @param usdc_amount amount of USDC to withdraw
  function withdraw(uint256 usdc_amount) external override paysInterest whenNotPaused {
    // scale the usdc_amount to the usdi decimal amount, aka 1e18
    uint256 amount = usdc_amount * 1e12;
    // check balances all around
    require(amount <= this.balanceOf(_msgSender()), "insufficient funds");
    require(amount > 0, "Cannot withdraw 0");
    uint256 balance = _reserve.balanceOf(address(this));
    require(balance >= usdc_amount, "Insufficient Reserve in Bank");
    // check allowance and ensure transfer success
    _reserve.approve(address(this), usdc_amount);
    require(_reserve.transferFrom(address(this), _msgSender(), usdc_amount), "transfer failed");
    // modify the gonbalances of the sender, burning
    _gonBalances[_msgSender()] = _gonBalances[_msgSender()] - amount * _gonsPerFragment;
    // modify totalSupply and totalGons
    _totalSupply = _totalSupply - amount;
    _totalGons = _totalGons - amount * _gonsPerFragment;
    emit Withdraw(_msgSender(), amount);
  }

  /// @notice withdraw USDC by burning USDi
  /// caller should obtain 1 USDC for every 1e12 USDi
  /// this function is effectively just withdraw, but we calculate the amount for the sender
  function withdrawAll() external override paysInterest whenNotPaused {
    uint256 reserve = _reserve.balanceOf(address(this));
    require(reserve != 0, "Reserve is empty");
    uint256 usdc_amount = (this.balanceOf(_msgSender())) / 1e12;
    //user's USDI value is more than reserve
    if (usdc_amount > reserve) {
      usdc_amount = reserve;
    }
    uint256 amount = usdc_amount * 1e12;
    _reserve.approve(address(this), usdc_amount);
    require(_reserve.transferFrom(address(this), _msgSender(), usdc_amount), "transfer failed");
    _gonBalances[_msgSender()] = _gonBalances[_msgSender()] - (amount * _gonsPerFragment);
    _totalSupply = _totalSupply - amount;
    _totalGons = _totalGons - (amount * _gonsPerFragment);
    emit Withdraw(_msgSender(), amount);
  }

  /// @notice set the VaultController addr so that vault_master may mint/burn USDi without restriction
  /// @param vault_master_address address of vault master
  function setVaultController(address vault_master_address) external override onlyOwner {
    _vaultControllerAddress = vault_master_address;
    _VaultController = IVaultController(vault_master_address);
  }

  /// @notice admin function to mint USDi out of thin air
  /// @param usdc_amount the amount of USDi to mint, denominated in USDC
  function mint(uint256 usdc_amount) external override paysInterest onlyOwner {
    require(usdc_amount != 0, "Cannot mint 0");
    uint256 amount = usdc_amount * 1e12;
    _gonBalances[_msgSender()] = _gonBalances[_msgSender()] + amount * _gonsPerFragment;
    _totalSupply = _totalSupply + amount;
    _totalGons = _totalGons + amount * _gonsPerFragment;
    emit Mint(_msgSender(), amount);
  }

  /// @notice admin function to burn USDi
  /// @param usdc_amount the amount of USDi to burn, denominated in USDC
  function burn(uint256 usdc_amount) external override paysInterest onlyOwner {
    require(usdc_amount != 0, "Cannot burn 0");
    uint256 amount = usdc_amount * 1e12;
    _gonBalances[_msgSender()] = _gonBalances[_msgSender()] - amount * _gonsPerFragment;
    _totalSupply = _totalSupply - amount;
    _totalGons = _totalGons - amount * _gonsPerFragment;
    emit Burn(_msgSender(), amount);
  }

  function donate(uint256 usdc_amount) external override paysInterest whenNotPaused {
    uint256 amount = usdc_amount * 1e12;
    require(amount > 0, "Cannot deposit 0");
    uint256 allowance = _reserve.allowance(_msgSender(), address(this));
    require(allowance >= usdc_amount, "Insufficient Allowance");
    require(_reserve.transferFrom(_msgSender(), address(this), usdc_amount), "transfer failed");

    _donation(usdc_amount);
  }

  /// @notice function for the vaultController to mint
  /// @param target whom to mint the USDi to
  /// @param amount the amount of USDi to mint
  function vaultControllerMint(address target, uint256 amount) external override onlyVaultController {
    _gonBalances[target] = _gonBalances[target] + amount * _gonsPerFragment;
    _totalSupply = _totalSupply + amount;
    _totalGons = _totalGons + amount * _gonsPerFragment;
    emit Mint(target, amount);
  }

  /// @notice function for the vaultController to burn
  /// @param target whom to burn the USDi from
  /// @param amount the amount of USDi to burn
  function vaultControllerBurn(address target, uint256 amount) external override onlyVaultController {
    require(_gonBalances[target] > (amount * _gonsPerFragment), "USDI: not enough balance");
    _gonBalances[target] = _gonBalances[target] - amount * _gonsPerFragment;
    _totalSupply = _totalSupply - amount;
    _totalGons = _totalGons - amount * _gonsPerFragment;
    emit Burn(target, amount);
  }

  /// @notice function for the vaultController to scale all USDi balances
  /// @param amount amount of USDi to donate
  function vaultControllerDonate(uint256 amount) external override onlyVaultController {
    _donation(amount);
  }

  function _donation(uint256 amount) internal {
    _totalSupply = _totalSupply + amount;
    if (_totalSupply > MAX_SUPPLY) {
      _totalSupply = MAX_SUPPLY;
    }
    _gonsPerFragment = _totalGons / _totalSupply;
    emit Donation(_msgSender(), amount, _totalSupply);
  }

  /// @notice get reserve ratio
  /// @return e18_reserve_ratio USDi reserve ratio
  function reserveRatio() external view override returns (uint192 e18_reserve_ratio) {
    e18_reserve_ratio = safeu192(((_reserve.balanceOf(address(this)) * expScale) / _totalSupply) * 1e12);
  }
}
