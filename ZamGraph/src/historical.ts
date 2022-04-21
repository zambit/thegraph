import { BigInt } from "@graphprotocol/graph-ts"
import { Blocked, Bridge, BridgeETH, Circulation, HolderCount, TotalSupply, TransactionCount, TransferCount, VestingCount, ParticipantCount} from "../generated/schema"
import { updateBlockedDay, updateBlockedHour, updateBlockedMonth, updateBlockedWeek, updateBridgeTotalDay, updateBridgeTotalHour, updateBridgeTotalMonth, updateBridgeTotalWeek, updateCirculationDay, updateCirculationHour, updateCirculationMonth, updateCirculationWeek, updateTransactionDay, updateTransactionHour, updateTransactionMonth, updateTransactionWeek, updateTransferDay, updateTransferHour, updateTransferMonth, updateTransferWeek } from "./period"
import {updateBridgeETHDay, updateBridgeETHHour, updateBridgeETHMonth, updateBridgeETHWeek, updateHolderDay, updateHolderHour, updateHolderMonth, updateHolderWeek, updateParticipantDay, updateParticipantHour, updateParticipantMonth, updateParticipantWeek, updateVestingDay, updateVestingHour, updateVestingMonth, updateVestingWeek} from "./period"

export function getDateByTimestamp(timestamp: i32): Uint32Array {
    var date = new Uint32Array(3)
    var z = timestamp / 86400 + 719468
    var era = (z >= 0 ? z : z - 146096) / 146097
    var doe = u32(z - era * 146097)
    var yoe = u32(doe - doe / 1460 + doe / 36524 - doe / 146096) / 365
    var y = i32(yoe) + era * 400
    var doy = u32(doe - (365 * yoe + yoe / 4 - yoe / 100))
    var mp = u32(5 * doy + 2) / 153
    var d = doy - (153 * mp + 2) / 5 + 1
    var m = mp + (mp < 10 ? 3 : -9)
    y += (m <= 2);
    date[0] = d
    date[1] = m
    date[2] = y
    return date
  }

//   export function updateDate(entity: Entity, timestamp: BigInt): Entity {
//     let data = getDateByTimestamp(timestamp.toI32())
//     entity.setBigInt("day", BigInt.fromI32(data[0]))
//     entity.setBigInt("week", timestamp.div(BigInt.fromI32(604800)))
//     entity.setBigInt("month", BigInt.fromI32(data[1]))
//     entity.setBigInt("year", BigInt.fromI32(data[2]))
//     return entity
//   }


export function updateTransactionDate(entity: TransactionCount, timestamp: BigInt): TransactionCount{
    let data = getDateByTimestamp(timestamp.toI32())
    entity.day = BigInt.fromI32(data[0])
    entity.week = timestamp.div(BigInt.fromI32(604800))
    entity.month = BigInt.fromI32(data[1])
    entity.year = BigInt.fromI32(data[2])
    updateTransactionHour(BigInt.fromI32(entity.count), timestamp)
    updateTransactionDay(BigInt.fromI32(entity.count), timestamp)
    updateTransactionWeek(BigInt.fromI32(entity.count), timestamp)
    updateTransactionMonth(BigInt.fromI32(entity.count), timestamp)
    return entity
}

export function updateTransferDate(entity: TransferCount, amount: BigInt, timestamp: BigInt): TransferCount{
    let data = getDateByTimestamp(timestamp.toI32())
    entity.day = BigInt.fromI32(data[0])
    entity.week = timestamp.div(BigInt.fromI32(604800))
    entity.month = BigInt.fromI32(data[1])
    entity.year = BigInt.fromI32(data[2])
    updateTransferHour(amount, entity.totalTransferred, BigInt.fromI32(entity.count), timestamp)
    updateTransferDay(amount, entity.totalTransferred, BigInt.fromI32(entity.count), timestamp)
    updateTransferWeek(amount, entity.totalTransferred, BigInt.fromI32(entity.count), timestamp)
    updateTransferMonth(amount, entity.totalTransferred, BigInt.fromI32(entity.count), timestamp)
    return entity
}

export function updateCirculationDate(entity: Circulation, timestamp: BigInt): Circulation{
    let data = getDateByTimestamp(timestamp.toI32())
    entity.day = BigInt.fromI32(data[0])
    entity.week = timestamp.div(BigInt.fromI32(604800))
    entity.month = BigInt.fromI32(data[1])
    entity.year = BigInt.fromI32(data[2])
    updateCirculationHour(entity.circulation, timestamp)
    updateCirculationDay(entity.circulation, timestamp)
    updateCirculationWeek(entity.circulation, timestamp)
    updateCirculationMonth(entity.circulation, timestamp)
    return entity
}

export function updateBlockedDate(entity: Blocked, timestamp: BigInt): Blocked {
    let data = getDateByTimestamp(timestamp.toI32())
    entity.day = BigInt.fromI32(data[0])
    entity.week = timestamp.div(BigInt.fromI32(604800))
    entity.month = BigInt.fromI32(data[1])
    entity.year = BigInt.fromI32(data[2])
    updateBlockedHour(entity.blocked, timestamp)
    updateBlockedDay(entity.blocked, timestamp)
    updateBlockedWeek(entity.blocked, timestamp)
    updateBlockedMonth(entity.blocked, timestamp)
    return entity
}

export function updateTotalSupplyDate(entity: TotalSupply, timestamp: BigInt): TotalSupply{
    let data = getDateByTimestamp(timestamp.toI32())
    entity.day = BigInt.fromI32(data[0])
    entity.week = timestamp.div(BigInt.fromI32(604800))
    entity.month = BigInt.fromI32(data[1])
    entity.year = BigInt.fromI32(data[2])
    return entity
}

export function updateBridgeTotalDate(entity: Bridge, amountToETH: BigInt, amountToBSC: BigInt, timestamp: BigInt): Bridge{
    let data = getDateByTimestamp(timestamp.toI32())
    entity.day = BigInt.fromI32(data[0])
    entity.week = timestamp.div(BigInt.fromI32(604800))
    entity.month = BigInt.fromI32(data[1])
    entity.year = BigInt.fromI32(data[2])
    updateBridgeTotalHour(amountToETH, entity.transferredToETH, amountToBSC, entity.transferredToBSC, timestamp)
    updateBridgeTotalDay(amountToETH, entity.transferredToETH, amountToBSC, entity.transferredToBSC, timestamp)
    updateBridgeTotalWeek(amountToETH, entity.transferredToETH, amountToBSC, entity.transferredToBSC, timestamp)
    updateBridgeTotalMonth(amountToETH, entity.transferredToETH, amountToBSC, entity.transferredToBSC, timestamp)
    return entity
}

export function updateBridgeDate(entity: BridgeETH, amount: BigInt, timestamp: BigInt): BridgeETH{
    let data = getDateByTimestamp(timestamp.toI32())
    entity.day = BigInt.fromI32(data[0])
    entity.week = timestamp.div(BigInt.fromI32(604800))
    entity.month = BigInt.fromI32(data[1])
    entity.year = BigInt.fromI32(data[2])
    updateBridgeETHHour(amount, entity.transferredToETH, timestamp)
    updateBridgeETHDay(amount, entity.transferredToETH, timestamp)
    updateBridgeETHWeek(amount, entity.transferredToETH, timestamp)
    updateBridgeETHMonth(amount, entity.transferredToETH, timestamp)
    return entity
}

export function updateVestingDate(entity: VestingCount, timestamp: BigInt): VestingCount{
    let data = getDateByTimestamp(timestamp.toI32())
    entity.day = BigInt.fromI32(data[0])
    entity.week = timestamp.div(BigInt.fromI32(604800))
    entity.month = BigInt.fromI32(data[1])
    entity.year = BigInt.fromI32(data[2])
    updateVestingHour(entity.totalAssests, entity.count, timestamp)
    updateVestingDay(entity.totalAssests, entity.count, timestamp)
    updateVestingWeek(entity.totalAssests, entity.count, timestamp)
    updateVestingMonth(entity.totalAssests, entity.count, timestamp)
    return entity
}

export function updateHolderDate(entity: HolderCount, timestamp: BigInt): HolderCount{
    let data = getDateByTimestamp(timestamp.toI32())
    entity.day = BigInt.fromI32(data[0])
    entity.week = timestamp.div(BigInt.fromI32(604800))
    entity.month = BigInt.fromI32(data[1])
    entity.year = BigInt.fromI32(data[2])
    updateHolderHour(entity.count, timestamp)
    updateHolderDay(entity.count, timestamp)
    updateHolderWeek(entity.count, timestamp)
    updateHolderMonth(entity.count, timestamp)
    return entity
}

export function updateParicipantDate(entity: ParticipantCount, timestamp: BigInt): ParticipantCount{
    let data = getDateByTimestamp(timestamp.toI32())
    entity.day = BigInt.fromI32(data[0])
    entity.week = timestamp.div(BigInt.fromI32(604800))
    entity.month = BigInt.fromI32(data[1])
    entity.year = BigInt.fromI32(data[2])
    updateParticipantHour(entity.count, timestamp)
    updateParticipantDay(entity.count, timestamp)
    updateParticipantWeek(entity.count, timestamp)
    updateParticipantMonth(entity.count, timestamp)
    return entity
}