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

export class Released extends ethereum.Event {
  get params(): Released__Params {
    return new Released__Params(this);
  }
}

export class Released__Params {
  _event: Released;

  constructor(event: Released) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Revoked extends ethereum.Event {
  get params(): Revoked__Params {
    return new Revoked__Params(this);
  }
}

export class Revoked__Params {
  _event: Revoked;

  constructor(event: Revoked) {
    this._event = event;
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

export class TokenVesting extends ethereum.SmartContract {
  static bind(address: Address): TokenVesting {
    return new TokenVesting("TokenVesting", address);
  }

  duration(): BigInt {
    let result = super.call("duration", "duration():(uint256)", []);

    return result[0].toBigInt();
  }

  try_duration(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("duration", "duration():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  cliff(): BigInt {
    let result = super.call("cliff", "cliff():(uint256)", []);

    return result[0].toBigInt();
  }

  try_cliff(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("cliff", "cliff():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  releasableAmount(_token: Address): BigInt {
    let result = super.call(
      "releasableAmount",
      "releasableAmount(address):(uint256)",
      [ethereum.Value.fromAddress(_token)]
    );

    return result[0].toBigInt();
  }

  try_releasableAmount(_token: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "releasableAmount",
      "releasableAmount(address):(uint256)",
      [ethereum.Value.fromAddress(_token)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  vestedAmount(_token: Address): BigInt {
    let result = super.call("vestedAmount", "vestedAmount(address):(uint256)", [
      ethereum.Value.fromAddress(_token)
    ]);

    return result[0].toBigInt();
  }

  try_vestedAmount(_token: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "vestedAmount",
      "vestedAmount(address):(uint256)",
      [ethereum.Value.fromAddress(_token)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  beneficiary(): Address {
    let result = super.call("beneficiary", "beneficiary():(address)", []);

    return result[0].toAddress();
  }

  try_beneficiary(): ethereum.CallResult<Address> {
    let result = super.tryCall("beneficiary", "beneficiary():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  revocable(): boolean {
    let result = super.call("revocable", "revocable():(bool)", []);

    return result[0].toBoolean();
  }

  try_revocable(): ethereum.CallResult<boolean> {
    let result = super.tryCall("revocable", "revocable():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  released(param0: Address): BigInt {
    let result = super.call("released", "released(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_released(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("released", "released(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  start(): BigInt {
    let result = super.call("start", "start():(uint256)", []);

    return result[0].toBigInt();
  }

  try_start(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("start", "start():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  revoked(param0: Address): boolean {
    let result = super.call("revoked", "revoked(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_revoked(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("revoked", "revoked(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ReleaseCall extends ethereum.Call {
  get inputs(): ReleaseCall__Inputs {
    return new ReleaseCall__Inputs(this);
  }

  get outputs(): ReleaseCall__Outputs {
    return new ReleaseCall__Outputs(this);
  }
}

export class ReleaseCall__Inputs {
  _call: ReleaseCall;

  constructor(call: ReleaseCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ReleaseCall__Outputs {
  _call: ReleaseCall;

  constructor(call: ReleaseCall) {
    this._call = call;
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

export class RevokeCall extends ethereum.Call {
  get inputs(): RevokeCall__Inputs {
    return new RevokeCall__Inputs(this);
  }

  get outputs(): RevokeCall__Outputs {
    return new RevokeCall__Outputs(this);
  }
}

export class RevokeCall__Inputs {
  _call: RevokeCall;

  constructor(call: RevokeCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RevokeCall__Outputs {
  _call: RevokeCall;

  constructor(call: RevokeCall) {
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

  get _newOwner(): Address {
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

  get _revocable(): boolean {
    return this._call.inputValues[4].value.toBoolean();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
