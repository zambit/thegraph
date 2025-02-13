// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BeneficiaryAdded extends ethereum.Event {
  get params(): BeneficiaryAdded__Params {
    return new BeneficiaryAdded__Params(this);
  }
}

export class BeneficiaryAdded__Params {
  _event: BeneficiaryAdded;

  constructor(event: BeneficiaryAdded) {
    this._event = event;
  }

  get beneficiary(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get vesting(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OwnershipRenounced extends ethereum.Event {
  get params(): OwnershipRenounced__Params {
    return new OwnershipRenounced__Params(this);
  }
}

export class OwnershipRenounced__Params {
  _event: OwnershipRenounced;

  constructor(event: OwnershipRenounced) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ZamVestingPool extends ethereum.SmartContract {
  static bind(address: Address): ZamVestingPool {
    return new ZamVestingPool("ZamVestingPool", address);
  }

  addBeneficiary(
    _beneficiary: Address,
    _start: BigInt,
    _cliff: BigInt,
    _duration: BigInt,
    _amount: BigInt
  ): Address {
    let result = super.call(
      "addBeneficiary",
      "addBeneficiary(address,uint256,uint256,uint256,uint256):(address)",
      [
        ethereum.Value.fromAddress(_beneficiary),
        ethereum.Value.fromUnsignedBigInt(_start),
        ethereum.Value.fromUnsignedBigInt(_cliff),
        ethereum.Value.fromUnsignedBigInt(_duration),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );

    return result[0].toAddress();
  }

  try_addBeneficiary(
    _beneficiary: Address,
    _start: BigInt,
    _cliff: BigInt,
    _duration: BigInt,
    _amount: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "addBeneficiary",
      "addBeneficiary(address,uint256,uint256,uint256,uint256):(address)",
      [
        ethereum.Value.fromAddress(_beneficiary),
        ethereum.Value.fromUnsignedBigInt(_start),
        ethereum.Value.fromUnsignedBigInt(_cliff),
        ethereum.Value.fromUnsignedBigInt(_duration),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  distributedTokens(): BigInt {
    let result = super.call(
      "distributedTokens",
      "distributedTokens():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_distributedTokens(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "distributedTokens",
      "distributedTokens():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getDistributionContracts(_beneficiary: Address): Array<Address> {
    let result = super.call(
      "getDistributionContracts",
      "getDistributionContracts(address):(address[])",
      [ethereum.Value.fromAddress(_beneficiary)]
    );

    return result[0].toAddressArray();
  }

  try_getDistributionContracts(
    _beneficiary: Address
  ): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getDistributionContracts",
      "getDistributionContracts(address):(address[])",
      [ethereum.Value.fromAddress(_beneficiary)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  totalFunds(): BigInt {
    let result = super.call("totalFunds", "totalFunds():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalFunds(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalFunds", "totalFunds():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  beneficiaryDistributionContracts(param0: Address, param1: BigInt): Address {
    let result = super.call(
      "beneficiaryDistributionContracts",
      "beneficiaryDistributionContracts(address,uint256):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toAddress();
  }

  try_beneficiaryDistributionContracts(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "beneficiaryDistributionContracts",
      "beneficiaryDistributionContracts(address,uint256):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pendingOwner(): Address {
    let result = super.call("pendingOwner", "pendingOwner():(address)", []);

    return result[0].toAddress();
  }

  try_pendingOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall("pendingOwner", "pendingOwner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  beneficiaries(param0: BigInt): Address {
    let result = super.call(
      "beneficiaries",
      "beneficiaries(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_beneficiaries(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "beneficiaries",
      "beneficiaries(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  token(): Address {
    let result = super.call("token", "token():(address)", []);

    return result[0].toAddress();
  }

  try_token(): ethereum.CallResult<Address> {
    let result = super.tryCall("token", "token():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ClaimOwnershipCall extends ethereum.Call {
  get inputs(): ClaimOwnershipCall__Inputs {
    return new ClaimOwnershipCall__Inputs(this);
  }

  get outputs(): ClaimOwnershipCall__Outputs {
    return new ClaimOwnershipCall__Outputs(this);
  }
}

export class ClaimOwnershipCall__Inputs {
  _call: ClaimOwnershipCall;

  constructor(call: ClaimOwnershipCall) {
    this._call = call;
  }
}

export class ClaimOwnershipCall__Outputs {
  _call: ClaimOwnershipCall;

  constructor(call: ClaimOwnershipCall) {
    this._call = call;
  }
}

export class AddBeneficiaryCall extends ethereum.Call {
  get inputs(): AddBeneficiaryCall__Inputs {
    return new AddBeneficiaryCall__Inputs(this);
  }

  get outputs(): AddBeneficiaryCall__Outputs {
    return new AddBeneficiaryCall__Outputs(this);
  }
}

export class AddBeneficiaryCall__Inputs {
  _call: AddBeneficiaryCall;

  constructor(call: AddBeneficiaryCall) {
    this._call = call;
  }

  get _beneficiary(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _start(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _cliff(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _duration(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class AddBeneficiaryCall__Outputs {
  _call: AddBeneficiaryCall;

  constructor(call: AddBeneficiaryCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _totalFunds(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
