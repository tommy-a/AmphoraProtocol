/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface IVaultControllerInterface extends utils.Interface {
  functions: {
    "AccountBorrowingPower(uint256)": FunctionFragment;
    "AccountLiability(uint256)": FunctionFragment;
    "InterestFactor()": FunctionFragment;
    "ProtocolFee()": FunctionFragment;
    "TokensToLiquidate(uint256,address,uint256)": FunctionFragment;
    "VaultAddress(uint256)": FunctionFragment;
    "borrow_usdi(uint256,uint256)": FunctionFragment;
    "calculate_interest()": FunctionFragment;
    "check_account(uint256)": FunctionFragment;
    "liquidate_account(uint256,address,uint256)": FunctionFragment;
    "mint_vault()": FunctionFragment;
    "register_curve_master(address)": FunctionFragment;
    "register_erc20(address,uint256,address,uint256)": FunctionFragment;
    "register_oracle_master(address)": FunctionFragment;
    "register_usdi(address)": FunctionFragment;
    "repay_all_usdi(uint256)": FunctionFragment;
    "repay_usdi(uint256,uint256)": FunctionFragment;
    "update_registered_erc20(address,uint256,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "AccountBorrowingPower"
      | "AccountLiability"
      | "InterestFactor"
      | "ProtocolFee"
      | "TokensToLiquidate"
      | "VaultAddress"
      | "borrow_usdi"
      | "calculate_interest"
      | "check_account"
      | "liquidate_account"
      | "mint_vault"
      | "register_curve_master"
      | "register_erc20"
      | "register_oracle_master"
      | "register_usdi"
      | "repay_all_usdi"
      | "repay_usdi"
      | "update_registered_erc20"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "AccountBorrowingPower",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "AccountLiability",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "InterestFactor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ProtocolFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TokensToLiquidate",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "VaultAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "borrow_usdi",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculate_interest",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "check_account",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidate_account",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mint_vault",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "register_curve_master",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "register_erc20",
    values: [string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "register_oracle_master",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "register_usdi",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "repay_all_usdi",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "repay_usdi",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "update_registered_erc20",
    values: [string, BigNumberish, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "AccountBorrowingPower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AccountLiability",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "InterestFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ProtocolFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TokensToLiquidate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "VaultAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrow_usdi",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculate_interest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "check_account",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidate_account",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint_vault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "register_curve_master",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "register_erc20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "register_oracle_master",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "register_usdi",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repay_all_usdi",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "repay_usdi", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "update_registered_erc20",
    data: BytesLike
  ): Result;

  events: {
    "BorrowUSDi(uint256,address,uint256)": EventFragment;
    "Interest(uint256,uint256)": EventFragment;
    "Liquidate(uint256,address,uint256,uint256)": EventFragment;
    "NewProtocolFee(uint256)": EventFragment;
    "NewVault(address,uint256,address)": EventFragment;
    "RegisterCurveMaster(address)": EventFragment;
    "RegisterOracleMaster(address)": EventFragment;
    "RegisteredErc20(address,uint256,address,uint256)": EventFragment;
    "RepayUSDi(uint256,address,uint256)": EventFragment;
    "UpdateRegisteredErc20(address,uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BorrowUSDi"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Interest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Liquidate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewProtocolFee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewVault"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RegisterCurveMaster"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RegisterOracleMaster"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RegisteredErc20"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RepayUSDi"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateRegisteredErc20"): EventFragment;
}

export interface BorrowUSDiEventObject {
  vaultId: BigNumber;
  vaultAddress: string;
  borrowAmount: BigNumber;
}
export type BorrowUSDiEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  BorrowUSDiEventObject
>;

export type BorrowUSDiEventFilter = TypedEventFilter<BorrowUSDiEvent>;

export interface InterestEventObject {
  epoch: BigNumber;
  amount: BigNumber;
}
export type InterestEvent = TypedEvent<
  [BigNumber, BigNumber],
  InterestEventObject
>;

export type InterestEventFilter = TypedEventFilter<InterestEvent>;

export interface LiquidateEventObject {
  vaultId: BigNumber;
  asset_address: string;
  usdi_to_repurchase: BigNumber;
  tokens_to_liquidate: BigNumber;
}
export type LiquidateEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber],
  LiquidateEventObject
>;

export type LiquidateEventFilter = TypedEventFilter<LiquidateEvent>;

export interface NewProtocolFeeEventObject {
  protocol_fee: BigNumber;
}
export type NewProtocolFeeEvent = TypedEvent<
  [BigNumber],
  NewProtocolFeeEventObject
>;

export type NewProtocolFeeEventFilter = TypedEventFilter<NewProtocolFeeEvent>;

export interface NewVaultEventObject {
  vault_address: string;
  vaultId: BigNumber;
  vaultOwner: string;
}
export type NewVaultEvent = TypedEvent<
  [string, BigNumber, string],
  NewVaultEventObject
>;

export type NewVaultEventFilter = TypedEventFilter<NewVaultEvent>;

export interface RegisterCurveMasterEventObject {
  curveMasterAddress: string;
}
export type RegisterCurveMasterEvent = TypedEvent<
  [string],
  RegisterCurveMasterEventObject
>;

export type RegisterCurveMasterEventFilter =
  TypedEventFilter<RegisterCurveMasterEvent>;

export interface RegisterOracleMasterEventObject {
  oracleMasterAddress: string;
}
export type RegisterOracleMasterEvent = TypedEvent<
  [string],
  RegisterOracleMasterEventObject
>;

export type RegisterOracleMasterEventFilter =
  TypedEventFilter<RegisterOracleMasterEvent>;

export interface RegisteredErc20EventObject {
  token_address: string;
  LTVe4: BigNumber;
  oracle_address: string;
  liquidationIncentivee4: BigNumber;
}
export type RegisteredErc20Event = TypedEvent<
  [string, BigNumber, string, BigNumber],
  RegisteredErc20EventObject
>;

export type RegisteredErc20EventFilter = TypedEventFilter<RegisteredErc20Event>;

export interface RepayUSDiEventObject {
  vaultId: BigNumber;
  vaultAddress: string;
  repayAmount: BigNumber;
}
export type RepayUSDiEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  RepayUSDiEventObject
>;

export type RepayUSDiEventFilter = TypedEventFilter<RepayUSDiEvent>;

export interface UpdateRegisteredErc20EventObject {
  token_address: string;
  LTVe4: BigNumber;
  oracle_address: string;
  liquidationIncentivee4: BigNumber;
}
export type UpdateRegisteredErc20Event = TypedEvent<
  [string, BigNumber, string, BigNumber],
  UpdateRegisteredErc20EventObject
>;

export type UpdateRegisteredErc20EventFilter =
  TypedEventFilter<UpdateRegisteredErc20Event>;

export interface IVaultController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IVaultControllerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    AccountBorrowingPower(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    AccountLiability(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    InterestFactor(overrides?: CallOverrides): Promise<[BigNumber]>;

    ProtocolFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    TokensToLiquidate(
      id: BigNumberish,
      token: string,
      num: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    VaultAddress(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    borrow_usdi(
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    calculate_interest(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    check_account(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    liquidate_account(
      id: BigNumberish,
      asset_address: string,
      tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mint_vault(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    register_curve_master(
      master_curve_address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    register_erc20(
      token_address: string,
      LTV: BigNumberish,
      oracle_address: string,
      liquidationIncentive: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    register_oracle_master(
      master_oracle_address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    register_usdi(
      usdi_address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    repay_all_usdi(
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    repay_usdi(
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    update_registered_erc20(
      token_address: string,
      LTV: BigNumberish,
      oracle_address: string,
      liquidationIncentive: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  AccountBorrowingPower(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  AccountLiability(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  InterestFactor(overrides?: CallOverrides): Promise<BigNumber>;

  ProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

  TokensToLiquidate(
    id: BigNumberish,
    token: string,
    num: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  VaultAddress(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  borrow_usdi(
    id: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  calculate_interest(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  check_account(id: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  liquidate_account(
    id: BigNumberish,
    asset_address: string,
    tokenAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mint_vault(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  register_curve_master(
    master_curve_address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  register_erc20(
    token_address: string,
    LTV: BigNumberish,
    oracle_address: string,
    liquidationIncentive: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  register_oracle_master(
    master_oracle_address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  register_usdi(
    usdi_address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  repay_all_usdi(
    id: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  repay_usdi(
    id: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  update_registered_erc20(
    token_address: string,
    LTV: BigNumberish,
    oracle_address: string,
    liquidationIncentive: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    AccountBorrowingPower(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    AccountLiability(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    InterestFactor(overrides?: CallOverrides): Promise<BigNumber>;

    ProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

    TokensToLiquidate(
      id: BigNumberish,
      token: string,
      num: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    VaultAddress(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

    borrow_usdi(
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    calculate_interest(overrides?: CallOverrides): Promise<BigNumber>;

    check_account(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    liquidate_account(
      id: BigNumberish,
      asset_address: string,
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint_vault(overrides?: CallOverrides): Promise<string>;

    register_curve_master(
      master_curve_address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    register_erc20(
      token_address: string,
      LTV: BigNumberish,
      oracle_address: string,
      liquidationIncentive: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    register_oracle_master(
      master_oracle_address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    register_usdi(
      usdi_address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    repay_all_usdi(id: BigNumberish, overrides?: CallOverrides): Promise<void>;

    repay_usdi(
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    update_registered_erc20(
      token_address: string,
      LTV: BigNumberish,
      oracle_address: string,
      liquidationIncentive: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BorrowUSDi(uint256,address,uint256)"(
      vaultId?: null,
      vaultAddress?: null,
      borrowAmount?: null
    ): BorrowUSDiEventFilter;
    BorrowUSDi(
      vaultId?: null,
      vaultAddress?: null,
      borrowAmount?: null
    ): BorrowUSDiEventFilter;

    "Interest(uint256,uint256)"(
      epoch?: null,
      amount?: null
    ): InterestEventFilter;
    Interest(epoch?: null, amount?: null): InterestEventFilter;

    "Liquidate(uint256,address,uint256,uint256)"(
      vaultId?: null,
      asset_address?: null,
      usdi_to_repurchase?: null,
      tokens_to_liquidate?: null
    ): LiquidateEventFilter;
    Liquidate(
      vaultId?: null,
      asset_address?: null,
      usdi_to_repurchase?: null,
      tokens_to_liquidate?: null
    ): LiquidateEventFilter;

    "NewProtocolFee(uint256)"(protocol_fee?: null): NewProtocolFeeEventFilter;
    NewProtocolFee(protocol_fee?: null): NewProtocolFeeEventFilter;

    "NewVault(address,uint256,address)"(
      vault_address?: null,
      vaultId?: null,
      vaultOwner?: null
    ): NewVaultEventFilter;
    NewVault(
      vault_address?: null,
      vaultId?: null,
      vaultOwner?: null
    ): NewVaultEventFilter;

    "RegisterCurveMaster(address)"(
      curveMasterAddress?: null
    ): RegisterCurveMasterEventFilter;
    RegisterCurveMaster(
      curveMasterAddress?: null
    ): RegisterCurveMasterEventFilter;

    "RegisterOracleMaster(address)"(
      oracleMasterAddress?: null
    ): RegisterOracleMasterEventFilter;
    RegisterOracleMaster(
      oracleMasterAddress?: null
    ): RegisterOracleMasterEventFilter;

    "RegisteredErc20(address,uint256,address,uint256)"(
      token_address?: null,
      LTVe4?: null,
      oracle_address?: null,
      liquidationIncentivee4?: null
    ): RegisteredErc20EventFilter;
    RegisteredErc20(
      token_address?: null,
      LTVe4?: null,
      oracle_address?: null,
      liquidationIncentivee4?: null
    ): RegisteredErc20EventFilter;

    "RepayUSDi(uint256,address,uint256)"(
      vaultId?: null,
      vaultAddress?: null,
      repayAmount?: null
    ): RepayUSDiEventFilter;
    RepayUSDi(
      vaultId?: null,
      vaultAddress?: null,
      repayAmount?: null
    ): RepayUSDiEventFilter;

    "UpdateRegisteredErc20(address,uint256,address,uint256)"(
      token_address?: null,
      LTVe4?: null,
      oracle_address?: null,
      liquidationIncentivee4?: null
    ): UpdateRegisteredErc20EventFilter;
    UpdateRegisteredErc20(
      token_address?: null,
      LTVe4?: null,
      oracle_address?: null,
      liquidationIncentivee4?: null
    ): UpdateRegisteredErc20EventFilter;
  };

  estimateGas: {
    AccountBorrowingPower(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    AccountLiability(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    InterestFactor(overrides?: CallOverrides): Promise<BigNumber>;

    ProtocolFee(overrides?: CallOverrides): Promise<BigNumber>;

    TokensToLiquidate(
      id: BigNumberish,
      token: string,
      num: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    VaultAddress(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrow_usdi(
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    calculate_interest(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    check_account(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidate_account(
      id: BigNumberish,
      asset_address: string,
      tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mint_vault(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    register_curve_master(
      master_curve_address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    register_erc20(
      token_address: string,
      LTV: BigNumberish,
      oracle_address: string,
      liquidationIncentive: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    register_oracle_master(
      master_oracle_address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    register_usdi(
      usdi_address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    repay_all_usdi(
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    repay_usdi(
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    update_registered_erc20(
      token_address: string,
      LTV: BigNumberish,
      oracle_address: string,
      liquidationIncentive: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    AccountBorrowingPower(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    AccountLiability(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    InterestFactor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ProtocolFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TokensToLiquidate(
      id: BigNumberish,
      token: string,
      num: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    VaultAddress(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    borrow_usdi(
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    calculate_interest(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    check_account(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidate_account(
      id: BigNumberish,
      asset_address: string,
      tokenAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mint_vault(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    register_curve_master(
      master_curve_address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    register_erc20(
      token_address: string,
      LTV: BigNumberish,
      oracle_address: string,
      liquidationIncentive: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    register_oracle_master(
      master_oracle_address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    register_usdi(
      usdi_address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    repay_all_usdi(
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    repay_usdi(
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    update_registered_erc20(
      token_address: string,
      LTV: BigNumberish,
      oracle_address: string,
      liquidationIncentive: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
