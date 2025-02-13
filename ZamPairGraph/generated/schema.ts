// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("symbol", Value.fromString(""));
    this.set("name", Value.fromString(""));
    this.set("decimals", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Token entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get decimals(): BigInt {
    let value = this.get("decimals");
    return value!.toBigInt();
  }

  set decimals(value: BigInt) {
    this.set("decimals", Value.fromBigInt(value));
  }
}

export class Pair extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("token0", Value.fromString(""));
    this.set("token1", Value.fromString(""));
    this.set("reserve0", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("reserve1", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("totalSupply", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("token0Price", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("token1Price", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("volumeToken0", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("volumeToken1", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Pair entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Pair entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Pair", id.toString(), this);
    }
  }

  static load(id: string): Pair | null {
    return changetype<Pair | null>(store.get("Pair", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token0(): string {
    let value = this.get("token0");
    return value!.toString();
  }

  set token0(value: string) {
    this.set("token0", Value.fromString(value));
  }

  get token1(): string {
    let value = this.get("token1");
    return value!.toString();
  }

  set token1(value: string) {
    this.set("token1", Value.fromString(value));
  }

  get reserve0(): BigDecimal {
    let value = this.get("reserve0");
    return value!.toBigDecimal();
  }

  set reserve0(value: BigDecimal) {
    this.set("reserve0", Value.fromBigDecimal(value));
  }

  get reserve1(): BigDecimal {
    let value = this.get("reserve1");
    return value!.toBigDecimal();
  }

  set reserve1(value: BigDecimal) {
    this.set("reserve1", Value.fromBigDecimal(value));
  }

  get totalSupply(): BigDecimal {
    let value = this.get("totalSupply");
    return value!.toBigDecimal();
  }

  set totalSupply(value: BigDecimal) {
    this.set("totalSupply", Value.fromBigDecimal(value));
  }

  get token0Price(): BigDecimal {
    let value = this.get("token0Price");
    return value!.toBigDecimal();
  }

  set token0Price(value: BigDecimal) {
    this.set("token0Price", Value.fromBigDecimal(value));
  }

  get token1Price(): BigDecimal {
    let value = this.get("token1Price");
    return value!.toBigDecimal();
  }

  set token1Price(value: BigDecimal) {
    this.set("token1Price", Value.fromBigDecimal(value));
  }

  get volumeToken0(): BigDecimal {
    let value = this.get("volumeToken0");
    return value!.toBigDecimal();
  }

  set volumeToken0(value: BigDecimal) {
    this.set("volumeToken0", Value.fromBigDecimal(value));
  }

  get volumeToken1(): BigDecimal {
    let value = this.get("volumeToken1");
    return value!.toBigDecimal();
  }

  set volumeToken1(value: BigDecimal) {
    this.set("volumeToken1", Value.fromBigDecimal(value));
  }
}

export class PairHourData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("pair", Value.fromString(""));
    this.set("periodBegin", Value.fromBigInt(BigInt.zero()));
    this.set("periodEnd", Value.fromBigInt(BigInt.zero()));
    this.set("hour", Value.fromBigInt(BigInt.zero()));
    this.set("day", Value.fromBigInt(BigInt.zero()));
    this.set("month", Value.fromBigInt(BigInt.zero()));
    this.set("year", Value.fromBigInt(BigInt.zero()));
    this.set("token0Price", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("token1Price", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("reserve0", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("reserve1", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("totalSupply", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("hourlyVolumeToken0", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("hourlyVolumeToken1", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PairHourData entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save PairHourData entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("PairHourData", id.toString(), this);
    }
  }

  static load(id: string): PairHourData | null {
    return changetype<PairHourData | null>(store.get("PairHourData", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get pair(): string {
    let value = this.get("pair");
    return value!.toString();
  }

  set pair(value: string) {
    this.set("pair", Value.fromString(value));
  }

  get periodBegin(): BigInt {
    let value = this.get("periodBegin");
    return value!.toBigInt();
  }

  set periodBegin(value: BigInt) {
    this.set("periodBegin", Value.fromBigInt(value));
  }

  get periodEnd(): BigInt {
    let value = this.get("periodEnd");
    return value!.toBigInt();
  }

  set periodEnd(value: BigInt) {
    this.set("periodEnd", Value.fromBigInt(value));
  }

  get hour(): BigInt {
    let value = this.get("hour");
    return value!.toBigInt();
  }

  set hour(value: BigInt) {
    this.set("hour", Value.fromBigInt(value));
  }

  get day(): BigInt {
    let value = this.get("day");
    return value!.toBigInt();
  }

  set day(value: BigInt) {
    this.set("day", Value.fromBigInt(value));
  }

  get month(): BigInt {
    let value = this.get("month");
    return value!.toBigInt();
  }

  set month(value: BigInt) {
    this.set("month", Value.fromBigInt(value));
  }

  get year(): BigInt {
    let value = this.get("year");
    return value!.toBigInt();
  }

  set year(value: BigInt) {
    this.set("year", Value.fromBigInt(value));
  }

  get token0Price(): BigDecimal {
    let value = this.get("token0Price");
    return value!.toBigDecimal();
  }

  set token0Price(value: BigDecimal) {
    this.set("token0Price", Value.fromBigDecimal(value));
  }

  get token1Price(): BigDecimal {
    let value = this.get("token1Price");
    return value!.toBigDecimal();
  }

  set token1Price(value: BigDecimal) {
    this.set("token1Price", Value.fromBigDecimal(value));
  }

  get reserve0(): BigDecimal {
    let value = this.get("reserve0");
    return value!.toBigDecimal();
  }

  set reserve0(value: BigDecimal) {
    this.set("reserve0", Value.fromBigDecimal(value));
  }

  get reserve1(): BigDecimal {
    let value = this.get("reserve1");
    return value!.toBigDecimal();
  }

  set reserve1(value: BigDecimal) {
    this.set("reserve1", Value.fromBigDecimal(value));
  }

  get totalSupply(): BigDecimal {
    let value = this.get("totalSupply");
    return value!.toBigDecimal();
  }

  set totalSupply(value: BigDecimal) {
    this.set("totalSupply", Value.fromBigDecimal(value));
  }

  get hourlyVolumeToken0(): BigDecimal {
    let value = this.get("hourlyVolumeToken0");
    return value!.toBigDecimal();
  }

  set hourlyVolumeToken0(value: BigDecimal) {
    this.set("hourlyVolumeToken0", Value.fromBigDecimal(value));
  }

  get hourlyVolumeToken1(): BigDecimal {
    let value = this.get("hourlyVolumeToken1");
    return value!.toBigDecimal();
  }

  set hourlyVolumeToken1(value: BigDecimal) {
    this.set("hourlyVolumeToken1", Value.fromBigDecimal(value));
  }
}

export class PairDayData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("pair", Value.fromString(""));
    this.set("periodBegin", Value.fromBigInt(BigInt.zero()));
    this.set("periodEnd", Value.fromBigInt(BigInt.zero()));
    this.set("day", Value.fromBigInt(BigInt.zero()));
    this.set("month", Value.fromBigInt(BigInt.zero()));
    this.set("year", Value.fromBigInt(BigInt.zero()));
    this.set("token0Price", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("token1Price", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("reserve0", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("reserve1", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("totalSupply", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("dailyVolumeToken0", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("dailyVolumeToken1", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PairDayData entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save PairDayData entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("PairDayData", id.toString(), this);
    }
  }

  static load(id: string): PairDayData | null {
    return changetype<PairDayData | null>(store.get("PairDayData", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get pair(): string {
    let value = this.get("pair");
    return value!.toString();
  }

  set pair(value: string) {
    this.set("pair", Value.fromString(value));
  }

  get periodBegin(): BigInt {
    let value = this.get("periodBegin");
    return value!.toBigInt();
  }

  set periodBegin(value: BigInt) {
    this.set("periodBegin", Value.fromBigInt(value));
  }

  get periodEnd(): BigInt {
    let value = this.get("periodEnd");
    return value!.toBigInt();
  }

  set periodEnd(value: BigInt) {
    this.set("periodEnd", Value.fromBigInt(value));
  }

  get day(): BigInt {
    let value = this.get("day");
    return value!.toBigInt();
  }

  set day(value: BigInt) {
    this.set("day", Value.fromBigInt(value));
  }

  get month(): BigInt {
    let value = this.get("month");
    return value!.toBigInt();
  }

  set month(value: BigInt) {
    this.set("month", Value.fromBigInt(value));
  }

  get year(): BigInt {
    let value = this.get("year");
    return value!.toBigInt();
  }

  set year(value: BigInt) {
    this.set("year", Value.fromBigInt(value));
  }

  get token0Price(): BigDecimal {
    let value = this.get("token0Price");
    return value!.toBigDecimal();
  }

  set token0Price(value: BigDecimal) {
    this.set("token0Price", Value.fromBigDecimal(value));
  }

  get token1Price(): BigDecimal {
    let value = this.get("token1Price");
    return value!.toBigDecimal();
  }

  set token1Price(value: BigDecimal) {
    this.set("token1Price", Value.fromBigDecimal(value));
  }

  get reserve0(): BigDecimal {
    let value = this.get("reserve0");
    return value!.toBigDecimal();
  }

  set reserve0(value: BigDecimal) {
    this.set("reserve0", Value.fromBigDecimal(value));
  }

  get reserve1(): BigDecimal {
    let value = this.get("reserve1");
    return value!.toBigDecimal();
  }

  set reserve1(value: BigDecimal) {
    this.set("reserve1", Value.fromBigDecimal(value));
  }

  get totalSupply(): BigDecimal {
    let value = this.get("totalSupply");
    return value!.toBigDecimal();
  }

  set totalSupply(value: BigDecimal) {
    this.set("totalSupply", Value.fromBigDecimal(value));
  }

  get dailyVolumeToken0(): BigDecimal {
    let value = this.get("dailyVolumeToken0");
    return value!.toBigDecimal();
  }

  set dailyVolumeToken0(value: BigDecimal) {
    this.set("dailyVolumeToken0", Value.fromBigDecimal(value));
  }

  get dailyVolumeToken1(): BigDecimal {
    let value = this.get("dailyVolumeToken1");
    return value!.toBigDecimal();
  }

  set dailyVolumeToken1(value: BigDecimal) {
    this.set("dailyVolumeToken1", Value.fromBigDecimal(value));
  }
}

export class PairWeekData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("pair", Value.fromString(""));
    this.set("periodBegin", Value.fromBigInt(BigInt.zero()));
    this.set("periodEnd", Value.fromBigInt(BigInt.zero()));
    this.set("week", Value.fromBigInt(BigInt.zero()));
    this.set("token0Price", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("token1Price", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("reserve0", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("reserve1", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("totalSupply", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("weeklyVolumeToken0", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("weeklyVolumeToken1", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PairWeekData entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save PairWeekData entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("PairWeekData", id.toString(), this);
    }
  }

  static load(id: string): PairWeekData | null {
    return changetype<PairWeekData | null>(store.get("PairWeekData", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get pair(): string {
    let value = this.get("pair");
    return value!.toString();
  }

  set pair(value: string) {
    this.set("pair", Value.fromString(value));
  }

  get periodBegin(): BigInt {
    let value = this.get("periodBegin");
    return value!.toBigInt();
  }

  set periodBegin(value: BigInt) {
    this.set("periodBegin", Value.fromBigInt(value));
  }

  get periodEnd(): BigInt {
    let value = this.get("periodEnd");
    return value!.toBigInt();
  }

  set periodEnd(value: BigInt) {
    this.set("periodEnd", Value.fromBigInt(value));
  }

  get week(): BigInt {
    let value = this.get("week");
    return value!.toBigInt();
  }

  set week(value: BigInt) {
    this.set("week", Value.fromBigInt(value));
  }

  get token0Price(): BigDecimal {
    let value = this.get("token0Price");
    return value!.toBigDecimal();
  }

  set token0Price(value: BigDecimal) {
    this.set("token0Price", Value.fromBigDecimal(value));
  }

  get token1Price(): BigDecimal {
    let value = this.get("token1Price");
    return value!.toBigDecimal();
  }

  set token1Price(value: BigDecimal) {
    this.set("token1Price", Value.fromBigDecimal(value));
  }

  get reserve0(): BigDecimal {
    let value = this.get("reserve0");
    return value!.toBigDecimal();
  }

  set reserve0(value: BigDecimal) {
    this.set("reserve0", Value.fromBigDecimal(value));
  }

  get reserve1(): BigDecimal {
    let value = this.get("reserve1");
    return value!.toBigDecimal();
  }

  set reserve1(value: BigDecimal) {
    this.set("reserve1", Value.fromBigDecimal(value));
  }

  get totalSupply(): BigDecimal {
    let value = this.get("totalSupply");
    return value!.toBigDecimal();
  }

  set totalSupply(value: BigDecimal) {
    this.set("totalSupply", Value.fromBigDecimal(value));
  }

  get weeklyVolumeToken0(): BigDecimal {
    let value = this.get("weeklyVolumeToken0");
    return value!.toBigDecimal();
  }

  set weeklyVolumeToken0(value: BigDecimal) {
    this.set("weeklyVolumeToken0", Value.fromBigDecimal(value));
  }

  get weeklyVolumeToken1(): BigDecimal {
    let value = this.get("weeklyVolumeToken1");
    return value!.toBigDecimal();
  }

  set weeklyVolumeToken1(value: BigDecimal) {
    this.set("weeklyVolumeToken1", Value.fromBigDecimal(value));
  }
}

export class PairMonthData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("pair", Value.fromString(""));
    this.set("periodBegin", Value.fromBigInt(BigInt.zero()));
    this.set("periodEnd", Value.fromBigInt(BigInt.zero()));
    this.set("month", Value.fromBigInt(BigInt.zero()));
    this.set("year", Value.fromBigInt(BigInt.zero()));
    this.set("token0Price", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("token1Price", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("reserve0", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("reserve1", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("totalSupply", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("monthlyVolumeToken0", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("monthlyVolumeToken1", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PairMonthData entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save PairMonthData entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("PairMonthData", id.toString(), this);
    }
  }

  static load(id: string): PairMonthData | null {
    return changetype<PairMonthData | null>(store.get("PairMonthData", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get pair(): string {
    let value = this.get("pair");
    return value!.toString();
  }

  set pair(value: string) {
    this.set("pair", Value.fromString(value));
  }

  get periodBegin(): BigInt {
    let value = this.get("periodBegin");
    return value!.toBigInt();
  }

  set periodBegin(value: BigInt) {
    this.set("periodBegin", Value.fromBigInt(value));
  }

  get periodEnd(): BigInt {
    let value = this.get("periodEnd");
    return value!.toBigInt();
  }

  set periodEnd(value: BigInt) {
    this.set("periodEnd", Value.fromBigInt(value));
  }

  get month(): BigInt {
    let value = this.get("month");
    return value!.toBigInt();
  }

  set month(value: BigInt) {
    this.set("month", Value.fromBigInt(value));
  }

  get year(): BigInt {
    let value = this.get("year");
    return value!.toBigInt();
  }

  set year(value: BigInt) {
    this.set("year", Value.fromBigInt(value));
  }

  get token0Price(): BigDecimal {
    let value = this.get("token0Price");
    return value!.toBigDecimal();
  }

  set token0Price(value: BigDecimal) {
    this.set("token0Price", Value.fromBigDecimal(value));
  }

  get token1Price(): BigDecimal {
    let value = this.get("token1Price");
    return value!.toBigDecimal();
  }

  set token1Price(value: BigDecimal) {
    this.set("token1Price", Value.fromBigDecimal(value));
  }

  get reserve0(): BigDecimal {
    let value = this.get("reserve0");
    return value!.toBigDecimal();
  }

  set reserve0(value: BigDecimal) {
    this.set("reserve0", Value.fromBigDecimal(value));
  }

  get reserve1(): BigDecimal {
    let value = this.get("reserve1");
    return value!.toBigDecimal();
  }

  set reserve1(value: BigDecimal) {
    this.set("reserve1", Value.fromBigDecimal(value));
  }

  get totalSupply(): BigDecimal {
    let value = this.get("totalSupply");
    return value!.toBigDecimal();
  }

  set totalSupply(value: BigDecimal) {
    this.set("totalSupply", Value.fromBigDecimal(value));
  }

  get monthlyVolumeToken0(): BigDecimal {
    let value = this.get("monthlyVolumeToken0");
    return value!.toBigDecimal();
  }

  set monthlyVolumeToken0(value: BigDecimal) {
    this.set("monthlyVolumeToken0", Value.fromBigDecimal(value));
  }

  get monthlyVolumeToken1(): BigDecimal {
    let value = this.get("monthlyVolumeToken1");
    return value!.toBigDecimal();
  }

  set monthlyVolumeToken1(value: BigDecimal) {
    this.set("monthlyVolumeToken1", Value.fromBigDecimal(value));
  }
}
