// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import { ethereum, JSONValue, TypedMap, Entity, Bytes, Address, BigInt } from '@graphprotocol/graph-ts'

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this)
  }
}

export class Approval__Params {
  _event: Approval

  constructor(event: Approval) {
    this._event = event
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress()
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress()
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt()
  }
}

export class Burn extends ethereum.Event {
  get params(): Burn__Params {
    return new Burn__Params(this)
  }
}

export class Burn__Params {
  _event: Burn

  constructor(event: Burn) {
    this._event = event
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress()
  }

  get amount0(): BigInt {
    return this._event.parameters[1].value.toBigInt()
  }

  get amount1(): BigInt {
    return this._event.parameters[2].value.toBigInt()
  }

  get to(): Address {
    return this._event.parameters[3].value.toAddress()
  }
}

export class Mint extends ethereum.Event {
  get params(): Mint__Params {
    return new Mint__Params(this)
  }
}

export class Mint__Params {
  _event: Mint

  constructor(event: Mint) {
    this._event = event
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress()
  }

  get amount0(): BigInt {
    return this._event.parameters[1].value.toBigInt()
  }

  get amount1(): BigInt {
    return this._event.parameters[2].value.toBigInt()
  }
}

export class Swap extends ethereum.Event {
  get params(): Swap__Params {
    return new Swap__Params(this)
  }
}

export class Swap__Params {
  _event: Swap

  constructor(event: Swap) {
    this._event = event
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress()
  }

  get amount0In(): BigInt {
    return this._event.parameters[1].value.toBigInt()
  }

  get amount1In(): BigInt {
    return this._event.parameters[2].value.toBigInt()
  }

  get amount0Out(): BigInt {
    return this._event.parameters[3].value.toBigInt()
  }

  get amount1Out(): BigInt {
    return this._event.parameters[4].value.toBigInt()
  }

  get to(): Address {
    return this._event.parameters[5].value.toAddress()
  }
}

export class Sync extends ethereum.Event {
  get params(): Sync__Params {
    return new Sync__Params(this)
  }
}

export class Sync__Params {
  _event: Sync

  constructor(event: Sync) {
    this._event = event
  }

  get reserve0(): BigInt {
    return this._event.parameters[0].value.toBigInt()
  }

  get reserve1(): BigInt {
    return this._event.parameters[1].value.toBigInt()
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this)
  }
}

export class Transfer__Params {
  _event: Transfer

  constructor(event: Transfer) {
    this._event = event
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress()
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress()
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt()
  }
}

export class Pair__burnResult {
  value0: BigInt
  value1: BigInt

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0
    this.value1 = value1
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>()
    map.set('value0', ethereum.Value.fromUnsignedBigInt(this.value0))
    map.set('value1', ethereum.Value.fromUnsignedBigInt(this.value1))
    return map
  }
}

export class Pair__getReservesResult {
  value0: BigInt
  value1: BigInt
  value2: BigInt

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0
    this.value1 = value1
    this.value2 = value2
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>()
    map.set('value0', ethereum.Value.fromUnsignedBigInt(this.value0))
    map.set('value1', ethereum.Value.fromUnsignedBigInt(this.value1))
    map.set('value2', ethereum.Value.fromUnsignedBigInt(this.value2))
    return map
  }
}

export class Pair extends ethereum.SmartContract {
  static bind(address: Address): Pair {
    return new Pair('Pair', address)
  }

  DOMAIN_SEPARATOR(): Bytes {
    let result = super.call('DOMAIN_SEPARATOR', 'DOMAIN_SEPARATOR():(bytes32)', [])

    return result[0].toBytes()
  }

  try_DOMAIN_SEPARATOR(): ethereum.CallResult<Bytes> {
    let result = super.tryCall('DOMAIN_SEPARATOR', 'DOMAIN_SEPARATOR():(bytes32)', [])
    if (result.reverted) {
      return new ethereum.CallResult()
    }
    let value = result.value
    return ethereum.CallResult.fromValue(value[0].toBytes())
  }

  MINIMUM_LIQUIDITY(): BigInt {
    let result = super.call('MINIMUM_LIQUIDITY', 'MINIMUM_LIQUIDITY():(uint256)', [])

    return result[0].toBigInt()
  }

  try_MINIMUM_LIQUIDITY(): ethereum.CallResult<BigInt> {
    let result = super.tryCall('MINIMUM_LIQUIDITY', 'MINIMUM_LIQUIDITY():(uint256)', [])
    if (result.reverted) {
      return new ethereum.CallResult()
    }
    let value = result.value
    return ethereum.CallResult.fromValue(value[0].toBigInt())
  }

  PERMIT_TYPEHASH(): Bytes {
    let result = super.call('PERMIT_TYPEHASH', 'PERMIT_TYPEHASH():(bytes32)', [])

    return result[0].toBytes()
  }

  try_PERMIT_TYPEHASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall('PERMIT_TYPEHASH', 'PERMIT_TYPEHASH():(bytes32)', [])
    if (result.reverted) {
      return new ethereum.CallResult()
    }
    let value = result.value
    return ethereum.CallResult.fromValue(value[0].toBytes())
  }

  allowance(param0: Address, param1: Address): BigInt {
    let result = super.call('allowance', 'allowance(address,address):(uint256)', [
      ethereum.Value.fromAddress(param0),
      ethereum.Value.fromAddress(param1)
    ])

    return result[0].toBigInt()
  }

  try_allowance(param0: Address, param1: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall('allowance', 'allowance(address,address):(uint256)', [
      ethereum.Value.fromAddress(param0),
      ethereum.Value.fromAddress(param1)
    ])
    if (result.reverted) {
      return new ethereum.CallResult()
    }
    let value = result.value
    return ethereum.CallResult.fromValue(value[0].toBigInt())
  }

  approve(spender: Address, value: BigInt): boolean {
    let result = super.call('approve', 'approve(address,uint256):(bool)', [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(value)
    ])

    return result[0].toBoolean()
  }

  try_approve(spender: Address, value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall('approve', 'approve(address,uint256):(bool)', [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(value)
    ])
    if (result.reverted) {
      return new ethereum.CallResult()
    }
    let value = result.value
    return ethereum.CallResult.fromValue(value[0].toBoolean())
  }

  balanceOf(param0: Address): BigInt {
    let result = super.call('balanceOf', 'balanceOf(address):(uint256)', [ethereum.Value.fromAddress(param0)])

    return result[0].toBigInt()
  }

  try_balanceOf(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall('balanceOf', 'balanceOf(address):(uint256)', [ethereum.Value.fromAddress(param0)])
    if (result.reverted) {
      return new ethereum.CallResult()
    }
    let value = result.value
    return ethereum.CallResult.fromValue(value[0].toBigInt())
  }

  burn(to: Address): Pair__burnResult {
    let result = super.call('burn', 'burn(address):(uint256,uint256)', [ethereum.Value.fromAddress(to)])

    return new Pair__burnResult(result[0].toBigInt(), result[1].toBigInt())
  }

  try_burn(to: Address): ethereum.CallResult<Pair__burnResult> {
    let result = super.tryCall('burn', 'burn(address):(uint256,uint256)', [ethereum.Value.fromAddress(to)])
    if (result.reverted) {
      return new ethereum.CallResult()
    }
    let value = result.value
    return ethereum.CallResult.fromValue(new Pair__burnResult(value[0].toBigInt(), value[1].toBigInt()))
  }

  decimals(): i32 {
    let result = super.call('decimals', 'decimals():(uint8)', [])

    return result[0].toI32()
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall('decimals', 'decimals():(uint8)', [])
    if (result.reverted) {
      return new ethereum.CallResult()
    }
    let value = result.value
    return ethereum.CallResult.fromValue(value[0].toI32())
  }

  factory(): Address {
    let result = super.call('factory', 'factory():(address)', [])

    return result[0].toAddress()
  }

  try_factory(): ethereum.CallResult<Address> {
    let result = super.tryCall('factory', 'factory():(address)', [])
    if (result.reverted) {
      return new ethereum.CallResult()
    }
    let value = result.value
    return ethereum.CallResult.fromValue(value[0].toAddress())
  }

  getReserves(): Pair__getReservesResult {
    let result = super.call('getReserves', 'getReserves():(uint112,uint112,uint32)', [])

    return new Pair__getReservesResult(result[0].toBigInt(), result[1].toBigInt(), result[2].toBigInt())
  }

  try_getReserves(): ethereum.CallResult<Pair__getReservesResult> {
    let result = super.tryCall('getReserves', 'getReserves():(uint112,uint112,uint32)', [])
    if (result.reverted) {
      return new ethereum.CallResult()
    }
    let value = result.value
    return ethereum.CallResult.fromValue(
      new Pair__getReservesResult(value[0].toBigInt(), value[1].toBigInt(), value[2].toBigInt())
    )
  }

  kLast(): BigInt {
    let result = super.call('kLast', 'kLast():(uint256)', [])

    return result[0].toBigInt()
  }

  try_kLast(): ethereum.CallResult<BigInt> {
    let result = super.tryCall('kLast', 'kLast():(uint256)', [])
    if (result.reverted) {
      return new ethereum.CallResult()
    }
    let value = result.value
    return ethereum.CallResult.fromValue(value[0].toBigInt())
  }

  mint(to: Address): BigInt {
    let result = super.call('mint', 'mint(address):(uint256)', [ethereum.Value.fromAddress(to)])

    return result[0].toBigInt()
  }

  try_mint(to: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall('mint', 'mint(address):(uint256)', [ethereum.Value.fromAddress(to)])
    if (result.reverted) {
      return new ethereum.CallResult()
    }
    let value = result.value
    return ethereum.CallResult.fromValue(value[0].toBigInt())
  }

  name(): string {
    let result = super.call('name', 'name():(string)', [])

    return result[0].toString()
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall('name', 'name():(string)', [])
    if (result.reverted) {
      return new ethereum.CallResult()
    }
    let value = result.value
    return ethereum.CallResult.fromValue(value[0].toString())
  }

  nonces(param0: Address): BigInt {
    let result = super.call('nonces', 'nonces(address):(uint256)', [ethereum.Value.fromAddress(param0)])

    return result[0].toBigInt()
  }

  try_nonces(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall('nonces', 'nonces(address):(uint256)', [ethereum.Value.fromAddress(param0)])
    if (result.reverted) {
      return new ethereum.CallResult()
    }
    let value = result.value
    return ethereum.CallResult.fromValue(value[0].toBigInt())
  }

  price0CumulativeLast(): BigInt {
    let result = super.call('price0CumulativeLast', 'price0CumulativeLast():(uint256)', [])

    return result[0].toBigInt()
  }

  try_price0CumulativeLast(): ethereum.CallResult<BigInt> {
    let result = super.tryCall('price0CumulativeLast', 'price0CumulativeLast():(uint256)', [])
    if (result.reverted) {
      return new ethereum.CallResult()
    }
    let value = result.value
    return ethereum.CallResult.fromValue(value[0].toBigInt())
  }

  price1CumulativeLast(): BigInt {
    let result = super.call('price1CumulativeLast', 'price1CumulativeLast():(uint256)', [])

    return result[0].toBigInt()
  }

  try_price1CumulativeLast(): ethereum.CallResult<BigInt> {
    let result = super.tryCall('price1CumulativeLast', 'price1CumulativeLast():(uint256)', [])
    if (result.reverted) {
      return new ethereum.CallResult()
    }
    let value = result.value
    return ethereum.CallResult.fromValue(value[0].toBigInt())
  }

  symbol(): string {
    let result = super.call('symbol', 'symbol():(string)', [])

    return result[0].toString()
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall('symbol', 'symbol():(string)', [])
    if (result.reverted) {
      return new ethereum.CallResult()
    }
    let value = result.value
    return ethereum.CallResult.fromValue(value[0].toString())
  }

  token0(): Address {
    let result = super.call('token0', 'token0():(address)', [])

    return result[0].toAddress()
  }

  try_token0(): ethereum.CallResult<Address> {
    let result = super.tryCall('token0', 'token0():(address)', [])
    if (result.reverted) {
      return new ethereum.CallResult()
    }
    let value = result.value
    return ethereum.CallResult.fromValue(value[0].toAddress())
  }

  token1(): Address {
    let result = super.call('token1', 'token1():(address)', [])

    return result[0].toAddress()
  }

  try_token1(): ethereum.CallResult<Address> {
    let result = super.tryCall('token1', 'token1():(address)', [])
    if (result.reverted) {
      return new ethereum.CallResult()
    }
    let value = result.value
    return ethereum.CallResult.fromValue(value[0].toAddress())
  }

  totalSupply(): BigInt {
    let result = super.call('totalSupply', 'totalSupply():(uint256)', [])

    return result[0].toBigInt()
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall('totalSupply', 'totalSupply():(uint256)', [])
    if (result.reverted) {
      return new ethereum.CallResult()
    }
    let value = result.value
    return ethereum.CallResult.fromValue(value[0].toBigInt())
  }

  transfer(to: Address, value: BigInt): boolean {
    let result = super.call('transfer', 'transfer(address,uint256):(bool)', [
      ethereum.Value.fromAddress(to),
      ethereum.Value.fromUnsignedBigInt(value)
    ])

    return result[0].toBoolean()
  }

  try_transfer(to: Address, value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall('transfer', 'transfer(address,uint256):(bool)', [
      ethereum.Value.fromAddress(to),
      ethereum.Value.fromUnsignedBigInt(value)
    ])
    if (result.reverted) {
      return new ethereum.CallResult()
    }
    let value = result.value
    return ethereum.CallResult.fromValue(value[0].toBoolean())
  }

  transferFrom(from: Address, to: Address, value: BigInt): boolean {
    let result = super.call('transferFrom', 'transferFrom(address,address,uint256):(bool)', [
      ethereum.Value.fromAddress(from),
      ethereum.Value.fromAddress(to),
      ethereum.Value.fromUnsignedBigInt(value)
    ])

    return result[0].toBoolean()
  }

  try_transferFrom(from: Address, to: Address, value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall('transferFrom', 'transferFrom(address,address,uint256):(bool)', [
      ethereum.Value.fromAddress(from),
      ethereum.Value.fromAddress(to),
      ethereum.Value.fromUnsignedBigInt(value)
    ])
    if (result.reverted) {
      return new ethereum.CallResult()
    }
    let value = result.value
    return ethereum.CallResult.fromValue(value[0].toBoolean())
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this)
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this)
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall

  constructor(call: ConstructorCall) {
    this._call = call
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall

  constructor(call: ConstructorCall) {
    this._call = call
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this)
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this)
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall

  constructor(call: ApproveCall) {
    this._call = call
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress()
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt()
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall

  constructor(call: ApproveCall) {
    this._call = call
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean()
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this)
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this)
  }
}

export class BurnCall__Inputs {
  _call: BurnCall

  constructor(call: BurnCall) {
    this._call = call
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress()
  }
}

export class BurnCall__Outputs {
  _call: BurnCall

  constructor(call: BurnCall) {
    this._call = call
  }

  get amount0(): BigInt {
    return this._call.outputValues[0].value.toBigInt()
  }

  get amount1(): BigInt {
    return this._call.outputValues[1].value.toBigInt()
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this)
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this)
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall

  constructor(call: InitializeCall) {
    this._call = call
  }

  get _token0(): Address {
    return this._call.inputValues[0].value.toAddress()
  }

  get _token1(): Address {
    return this._call.inputValues[1].value.toAddress()
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall

  constructor(call: InitializeCall) {
    this._call = call
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this)
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this)
  }
}

export class MintCall__Inputs {
  _call: MintCall

  constructor(call: MintCall) {
    this._call = call
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress()
  }
}

export class MintCall__Outputs {
  _call: MintCall

  constructor(call: MintCall) {
    this._call = call
  }

  get liquidity(): BigInt {
    return this._call.outputValues[0].value.toBigInt()
  }
}

export class PermitCall extends ethereum.Call {
  get inputs(): PermitCall__Inputs {
    return new PermitCall__Inputs(this)
  }

  get outputs(): PermitCall__Outputs {
    return new PermitCall__Outputs(this)
  }
}

export class PermitCall__Inputs {
  _call: PermitCall

  constructor(call: PermitCall) {
    this._call = call
  }

  get owner(): Address {
    return this._call.inputValues[0].value.toAddress()
  }

  get spender(): Address {
    return this._call.inputValues[1].value.toAddress()
  }

  get value(): BigInt {
    return this._call.inputValues[2].value.toBigInt()
  }

  get deadline(): BigInt {
    return this._call.inputValues[3].value.toBigInt()
  }

  get v(): i32 {
    return this._call.inputValues[4].value.toI32()
  }

  get r(): Bytes {
    return this._call.inputValues[5].value.toBytes()
  }

  get s(): Bytes {
    return this._call.inputValues[6].value.toBytes()
  }
}

export class PermitCall__Outputs {
  _call: PermitCall

  constructor(call: PermitCall) {
    this._call = call
  }
}

export class SkimCall extends ethereum.Call {
  get inputs(): SkimCall__Inputs {
    return new SkimCall__Inputs(this)
  }

  get outputs(): SkimCall__Outputs {
    return new SkimCall__Outputs(this)
  }
}

export class SkimCall__Inputs {
  _call: SkimCall

  constructor(call: SkimCall) {
    this._call = call
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress()
  }
}

export class SkimCall__Outputs {
  _call: SkimCall

  constructor(call: SkimCall) {
    this._call = call
  }
}

export class SwapCall extends ethereum.Call {
  get inputs(): SwapCall__Inputs {
    return new SwapCall__Inputs(this)
  }

  get outputs(): SwapCall__Outputs {
    return new SwapCall__Outputs(this)
  }
}

export class SwapCall__Inputs {
  _call: SwapCall

  constructor(call: SwapCall) {
    this._call = call
  }

  get amount0Out(): BigInt {
    return this._call.inputValues[0].value.toBigInt()
  }

  get amount1Out(): BigInt {
    return this._call.inputValues[1].value.toBigInt()
  }

  get to(): Address {
    return this._call.inputValues[2].value.toAddress()
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes()
  }
}

export class SwapCall__Outputs {
  _call: SwapCall

  constructor(call: SwapCall) {
    this._call = call
  }
}

export class SyncCall extends ethereum.Call {
  get inputs(): SyncCall__Inputs {
    return new SyncCall__Inputs(this)
  }

  get outputs(): SyncCall__Outputs {
    return new SyncCall__Outputs(this)
  }
}

export class SyncCall__Inputs {
  _call: SyncCall

  constructor(call: SyncCall) {
    this._call = call
  }
}

export class SyncCall__Outputs {
  _call: SyncCall

  constructor(call: SyncCall) {
    this._call = call
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this)
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this)
  }
}

export class TransferCall__Inputs {
  _call: TransferCall

  constructor(call: TransferCall) {
    this._call = call
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress()
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt()
  }
}

export class TransferCall__Outputs {
  _call: TransferCall

  constructor(call: TransferCall) {
    this._call = call
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean()
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this)
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this)
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall

  constructor(call: TransferFromCall) {
    this._call = call
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress()
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress()
  }

  get value(): BigInt {
    return this._call.inputValues[2].value.toBigInt()
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall

  constructor(call: TransferFromCall) {
    this._call = call
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean()
  }
}
