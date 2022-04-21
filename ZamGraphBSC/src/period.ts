import { BigInt} from '@graphprotocol/graph-ts'
import { CirculationHourData, CirculationDayData, CirculationWeekData, CirculationMonthData, 
        BlockedHourData, BlockedDayData, BlockedWeekData, BlockedMonthData,
        TransferHourData, TransferDayData, TransferWeekData, TransferMonthData,
        TransactionHourCount, TransactionDayCount, TransactionWeekCount, TransactionMonthCount, HolderHourCount, HolderDayCount, HolderWeekCount, HolderMonthCount, ParticipantMonthCount, ParticipantWeekCount, ParticipantDayCount, ParticipantHourCount, VestingMonthCount, VestingWeekCount, VestingDayCount, VestingHourCount, BridgeBSCMonthData, BridgeBSCWeekData, BridgeBSCDayData, BridgeBSCHourData, StackerMonthCount, StackerWeekCount, Stacker, StackerHourCount, StackerDayCount} from '../generated/schema'
import { getDateByTimestamp } from './historical'


export function updateCirculationHour(circulation: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let hour = timestamp_i32 / 3600
    let week = timestamp_i32 / 604800

    let hour_id = hour.toString()

    let hour_data = CirculationHourData.load(hour_id)

    if (hour_data == null) {
        hour_data = new CirculationHourData(hour_id)
        hour_data.hour = BigInt.fromI32(hour)
        hour_data.week = BigInt.fromI32(week)
        hour_data.day = BigInt.fromI32(date[0])
        hour_data.month = BigInt.fromI32(date[1])
        hour_data.year = BigInt.fromI32(date[2])
    }

    hour_data.timestamp = timestamp
    hour_data.circulation = circulation
    hour_data.save()
}


export function updateCirculationDay(circulation: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let week = timestamp_i32 / 604800

    let day_id = date[0].toString().concat('-').concat(date[1].toString()).concat('-').concat(date[2].toString())

    let day_data = CirculationDayData.load(day_id)

    if (day_data == null) {
        day_data = new CirculationDayData(day_id)
        day_data.week = BigInt.fromI32(week)
        day_data.day = BigInt.fromI32(date[0])
        day_data.month = BigInt.fromI32(date[1])
        day_data.year = BigInt.fromI32(date[2])
    }

    day_data.timestamp = timestamp
    day_data.circulation = circulation
    day_data.save()
}

export function updateCirculationWeek(circulation: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let week = timestamp_i32 / 604800

    let week_id = week.toString()

    let week_data = CirculationWeekData.load(week_id)

    if (week_data == null) {
        week_data = new CirculationWeekData(week_id)
        week_data.week = BigInt.fromI32(week)
        week_data.month = BigInt.fromI32(date[1])
        week_data.year = BigInt.fromI32(date[2])
    }

    week_data.timestamp = timestamp
    week_data.circulation = circulation
    week_data.save()
}

export function updateCirculationMonth(circulation: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let month_id = date[1].toString().concat('-').concat(date[2].toString())

    let month_data = CirculationMonthData.load(month_id)

    if (month_data == null) {
        month_data = new CirculationMonthData(month_id)
        month_data.month = BigInt.fromI32(date[1])
        month_data.year = BigInt.fromI32(date[2])
    }

    month_data.timestamp = timestamp
    month_data.circulation = circulation
    month_data.save()
}

export function updateBlockedHour(blocked: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let hour = timestamp_i32 / 3600
    let week = timestamp_i32 / 604800

    let hour_id = hour.toString()

    let hour_data = BlockedHourData.load(hour_id)

    if (hour_data == null) {
        hour_data = new BlockedHourData(hour_id)
        hour_data.hour = BigInt.fromI32(hour)
        hour_data.week = BigInt.fromI32(week)
        hour_data.day = BigInt.fromI32(date[0])
        hour_data.month = BigInt.fromI32(date[1])
        hour_data.year = BigInt.fromI32(date[2])
    }

    hour_data.timestamp = timestamp
    hour_data.blocked = blocked
    hour_data.save()
}


export function updateBlockedDay(blocked: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let week = timestamp_i32 / 604800

    let day_id = date[0].toString().concat('-').concat(date[1].toString()).concat('-').concat(date[2].toString())

    let day_data = BlockedDayData.load(day_id)

    if (day_data == null) {
        day_data = new BlockedDayData(day_id)
        day_data.week = BigInt.fromI32(week)
        day_data.day = BigInt.fromI32(date[0])
        day_data.month = BigInt.fromI32(date[1])
        day_data.year = BigInt.fromI32(date[2])
    }

    day_data.timestamp = timestamp
    day_data.blocked = blocked
    day_data.save()
}

export function updateBlockedWeek(blocked: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let week = timestamp_i32 / 604800

    let week_id = week.toString()

    let week_data = BlockedWeekData.load(week_id)

    if (week_data == null) {
        week_data = new BlockedWeekData(week_id)
        week_data.week = BigInt.fromI32(week)
        week_data.month = BigInt.fromI32(date[1])
        week_data.year = BigInt.fromI32(date[2])
    }

    week_data.timestamp = timestamp
    week_data.blocked = blocked
    week_data.save()
}

export function updateBlockedMonth(blocked: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let month_id = date[1].toString().concat('-').concat(date[2].toString())

    let month_data = BlockedMonthData.load(month_id)

    if (month_data == null) {
        month_data = new BlockedMonthData(month_id)
        month_data.month = BigInt.fromI32(date[1])
        month_data.year = BigInt.fromI32(date[2])
    }

    month_data.timestamp = timestamp
    month_data.blocked = blocked
    month_data.save()
}

export function updateTransactionHour(totalCount: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let hour = timestamp_i32 / 3600
    let week = timestamp_i32 / 604800

    let hour_id = hour.toString()

    let hour_data = TransactionHourCount.load(hour_id)

    if (hour_data == null) {
        hour_data = new TransactionHourCount(hour_id)
        hour_data.hour = BigInt.fromI32(hour)
        hour_data.week = BigInt.fromI32(week)
        hour_data.day = BigInt.fromI32(date[0])
        hour_data.month = BigInt.fromI32(date[1])
        hour_data.year = BigInt.fromI32(date[2])
        hour_data.count = 0
        hour_data.totalCount = BigInt.fromI32(0)
    }

    hour_data.timestamp = timestamp
    hour_data.count = hour_data.count + 1
    hour_data.totalCount = totalCount
    hour_data.save()
}

export function updateTransactionDay(totalCount: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let week = timestamp_i32 / 604800

    let day_id = date[0].toString().concat('-').concat(date[1].toString()).concat('-').concat(date[2].toString())

    let day_data = TransactionDayCount.load(day_id)

    if (day_data == null) {
        day_data = new TransactionDayCount(day_id)
        day_data.week = BigInt.fromI32(week)
        day_data.day = BigInt.fromI32(date[0])
        day_data.month = BigInt.fromI32(date[1])
        day_data.year = BigInt.fromI32(date[2])
        day_data.count = 0
        day_data.totalCount = BigInt.fromI32(0)
    }

    day_data.timestamp = timestamp
    day_data.count = day_data.count + 1
    day_data.totalCount = totalCount
    day_data.save()
}

export function updateTransactionWeek(totalCount: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let week = timestamp_i32 / 604800

    let week_id = week.toString()

    let week_data = TransactionWeekCount.load(week_id)

    if (week_data == null) {
        week_data = new TransactionWeekCount(week_id)
        week_data.week = BigInt.fromI32(week)
        week_data.month = BigInt.fromI32(date[1])
        week_data.year = BigInt.fromI32(date[2])
        week_data.count = 0
        week_data.totalCount = BigInt.fromI32(0)
    }

    week_data.timestamp = timestamp
    week_data.count = week_data.count + 1
    week_data.totalCount = totalCount
    week_data.save()
}

export function updateTransactionMonth(totalCount: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let month_id = date[1].toString().concat('-').concat(date[2].toString())

    let month_data = TransactionMonthCount.load(month_id)

    if (month_data == null) {
        month_data = new TransactionMonthCount(month_id)
        month_data.month = BigInt.fromI32(date[1])
        month_data.year = BigInt.fromI32(date[2])
        month_data.count = 0
        month_data.totalCount = BigInt.fromI32(0)
    }

    month_data.timestamp = timestamp
    month_data.count = month_data.count + 1
    month_data.totalCount = totalCount
    month_data.save()
}

export function updateTransferHour(amount: BigInt, totalTransferred: BigInt, totalCount: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let hour = timestamp_i32 / 3600
    let week = timestamp_i32 / 604800

    let hour_id = hour.toString()

    let hour_data = TransferHourData.load(hour_id)

    if (hour_data == null) {
        hour_data = new TransferHourData(hour_id)
        hour_data.hour = BigInt.fromI32(hour)
        hour_data.week = BigInt.fromI32(week)
        hour_data.day = BigInt.fromI32(date[0])
        hour_data.month = BigInt.fromI32(date[1])
        hour_data.year = BigInt.fromI32(date[2])
        hour_data.count = 0
        hour_data.totalCount = BigInt.fromI32(0)
        hour_data.transferred = BigInt.fromI32(0)
        hour_data.totalTransferred = BigInt.fromI32(0)
    }

    hour_data.timestamp = timestamp
    hour_data.count = hour_data.count + 1
    hour_data.totalCount = totalCount
    hour_data.transferred = hour_data.transferred.plus(amount)
    hour_data.totalTransferred = totalTransferred
    hour_data.save()
}

export function updateTransferDay(amount: BigInt, totalTransferred: BigInt, totalCount: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let week = timestamp_i32 / 604800

    let day_id = date[0].toString().concat('-').concat(date[1].toString()).concat('-').concat(date[2].toString())

    let day_data = TransferDayData.load(day_id)

    if (day_data == null) {
        day_data = new TransferDayData(day_id)
        day_data.week = BigInt.fromI32(week)
        day_data.day = BigInt.fromI32(date[0])
        day_data.month = BigInt.fromI32(date[1])
        day_data.year = BigInt.fromI32(date[2])
        day_data.count = 0
        day_data.totalCount = BigInt.fromI32(0)
        day_data.transferred = BigInt.fromI32(0)
        day_data.totalTransferred = BigInt.fromI32(0)
    }

    day_data.timestamp = timestamp
    day_data.count = day_data.count + 1
    day_data.totalCount = totalCount
    day_data.transferred = day_data.transferred.plus(amount)
    day_data.totalTransferred = totalTransferred
    day_data.save()
}

export function updateTransferWeek(amount: BigInt, totalTransferred: BigInt, totalCount: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let week = timestamp_i32 / 604800

    let week_id = week.toString()

    let week_data = TransferWeekData.load(week_id)

    if (week_data == null) {
        week_data = new TransferWeekData(week_id)
        week_data.week = BigInt.fromI32(week)
        week_data.month = BigInt.fromI32(date[1])
        week_data.year = BigInt.fromI32(date[2])
        week_data.count = 0
        week_data.totalCount = BigInt.fromI32(0)
        week_data.transferred = BigInt.fromI32(0)
        week_data.totalTransferred = BigInt.fromI32(0)
    }

    week_data.timestamp = timestamp
    week_data.count = week_data.count + 1
    week_data.totalCount = totalCount
    week_data.transferred = week_data.transferred.plus(amount)
    week_data.totalTransferred = totalTransferred
    week_data.save()
}

export function updateTransferMonth(amount: BigInt, totalTransferred: BigInt, totalCount: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let month_id = date[1].toString().concat('-').concat(date[2].toString())

    let month_data = TransferMonthData.load(month_id)

    if (month_data == null) {
        month_data = new TransferMonthData(month_id)
        month_data.month = BigInt.fromI32(date[1])
        month_data.year = BigInt.fromI32(date[2])
        month_data.count = 0
        month_data.totalCount = BigInt.fromI32(0)
        month_data.transferred = BigInt.fromI32(0)
        month_data.totalTransferred = BigInt.fromI32(0)
    }

    month_data.timestamp = timestamp
    month_data.count = month_data.count + 1
    month_data.totalCount = totalCount
    month_data.transferred = month_data.transferred.plus(amount)
    month_data.totalTransferred = totalTransferred
    month_data.save()
}

export function updateHolderHour(totalCount: i32, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let hour = timestamp_i32 / 3600
    let week = timestamp_i32 / 604800

    let hour_id = hour.toString()

    let hour_data = HolderHourCount.load(hour_id)

    if (hour_data == null) {
        hour_data = new HolderHourCount(hour_id)
        hour_data.hour = BigInt.fromI32(hour)
        hour_data.week = BigInt.fromI32(week)
        hour_data.day = BigInt.fromI32(date[0])
        hour_data.month = BigInt.fromI32(date[1])
        hour_data.year = BigInt.fromI32(date[2])

        hour_data.totalCount = 0
    }

    hour_data.timestamp = timestamp
    hour_data.totalCount = totalCount
    hour_data.save()
}

export function updateHolderDay(totalCount: i32, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let week = timestamp_i32 / 604800

    let day_id = date[0].toString().concat('-').concat(date[1].toString()).concat('-').concat(date[2].toString())

    let day_data = HolderDayCount.load(day_id)

    if (day_data == null) {
        day_data = new HolderDayCount(day_id)
        day_data.week = BigInt.fromI32(week)
        day_data.day = BigInt.fromI32(date[0])
        day_data.month = BigInt.fromI32(date[1])
        day_data.year = BigInt.fromI32(date[2])

        day_data.totalCount = 0
    }

    day_data.timestamp = timestamp
    day_data.totalCount = totalCount
    day_data.save()
}

export function updateHolderWeek(totalCount: i32, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let week = timestamp_i32 / 604800

    let week_id = week.toString()

    let week_data = HolderWeekCount.load(week_id)

    if (week_data == null) {
        week_data = new HolderWeekCount(week_id)
        week_data.week = BigInt.fromI32(week)
        week_data.month = BigInt.fromI32(date[1])
        week_data.year = BigInt.fromI32(date[2])

        week_data.totalCount = 0
    }

    week_data.timestamp = timestamp
    week_data.totalCount = totalCount
    week_data.save()
}

export function updateHolderMonth(totalCount: i32, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let month_id = date[1].toString().concat('-').concat(date[2].toString())

    let month_data = HolderMonthCount.load(month_id)

    if (month_data == null) {
        month_data = new HolderMonthCount(month_id)
        month_data.month = BigInt.fromI32(date[1])
        month_data.year = BigInt.fromI32(date[2])
        month_data.totalCount = 0
    }

    month_data.timestamp = timestamp
    month_data.totalCount = totalCount
    month_data.save()
}

export function updateParticipantHour(totalCount: i32, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let hour = timestamp_i32 / 3600
    let week = timestamp_i32 / 604800

    let hour_id = hour.toString()

    let hour_data = ParticipantHourCount.load(hour_id)

    if (hour_data == null) {
        hour_data = new ParticipantHourCount(hour_id)
        hour_data.hour = BigInt.fromI32(hour)
        hour_data.week = BigInt.fromI32(week)
        hour_data.day = BigInt.fromI32(date[0])
        hour_data.month = BigInt.fromI32(date[1])
        hour_data.year = BigInt.fromI32(date[2])

        hour_data.totalCount = 0
    }

    hour_data.timestamp = timestamp
    hour_data.totalCount = totalCount
    hour_data.save()
}

export function updateParticipantDay(totalCount: i32, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let week = timestamp_i32 / 604800

    let day_id = date[0].toString().concat('-').concat(date[1].toString()).concat('-').concat(date[2].toString())

    let day_data = ParticipantDayCount.load(day_id)

    if (day_data == null) {
        day_data = new ParticipantDayCount(day_id)
        day_data.week = BigInt.fromI32(week)
        day_data.day = BigInt.fromI32(date[0])
        day_data.month = BigInt.fromI32(date[1])
        day_data.year = BigInt.fromI32(date[2])
        day_data.totalCount = 0
    }

    day_data.timestamp = timestamp
    day_data.totalCount = totalCount
    day_data.save()
}

export function updateParticipantWeek(totalCount: i32, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let week = timestamp_i32 / 604800

    let week_id = week.toString()

    let week_data = ParticipantWeekCount.load(week_id)

    if (week_data == null) {
        week_data = new ParticipantWeekCount(week_id)
        week_data.week = BigInt.fromI32(week)
        week_data.month = BigInt.fromI32(date[1])
        week_data.year = BigInt.fromI32(date[2])
        week_data.totalCount = 0
    }

    week_data.timestamp = timestamp
    week_data.totalCount = totalCount
    week_data.save()
}

export function updateParticipantMonth(totalCount: i32, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let month_id = date[1].toString().concat('-').concat(date[2].toString())

    let month_data = ParticipantMonthCount.load(month_id)

    if (month_data == null) {
        month_data = new ParticipantMonthCount(month_id)
        month_data.month = BigInt.fromI32(date[1])
        month_data.year = BigInt.fromI32(date[2])
        month_data.totalCount = 0
    }

    month_data.timestamp = timestamp
    month_data.totalCount = totalCount
    month_data.save()
}


export function updateVestingHour(totalAssests: BigInt, totalCount: i32, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let hour = timestamp_i32 / 3600
    let week = timestamp_i32 / 604800

    let hour_id = hour.toString()

    let hour_data = VestingHourCount.load(hour_id)

    if (hour_data == null) {
        hour_data = new VestingHourCount(hour_id)
        hour_data.hour = BigInt.fromI32(hour)
        hour_data.week = BigInt.fromI32(week)
        hour_data.day = BigInt.fromI32(date[0])
        hour_data.month = BigInt.fromI32(date[1])
        hour_data.year = BigInt.fromI32(date[2])
        hour_data.totalCount = 0
        hour_data.totalAssests = BigInt.fromI32(0)
    }

    hour_data.timestamp = timestamp
    hour_data.totalCount = totalCount
    hour_data.totalAssests = totalAssests
    hour_data.save()
}

export function updateVestingDay(totalAssests: BigInt, totalCount: i32, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let week = timestamp_i32 / 604800

    let day_id = date[0].toString().concat('-').concat(date[1].toString()).concat('-').concat(date[2].toString())

    let day_data = VestingDayCount.load(day_id)

    if (day_data == null) {
        day_data = new VestingDayCount(day_id)
        day_data.week = BigInt.fromI32(week)
        day_data.day = BigInt.fromI32(date[0])
        day_data.month = BigInt.fromI32(date[1])
        day_data.year = BigInt.fromI32(date[2])
        day_data.totalCount = 0
        day_data.totalAssests = BigInt.fromI32(0)
    }

    day_data.timestamp = timestamp
    day_data.totalCount = totalCount
    day_data.totalAssests = totalAssests
    day_data.save()
}

export function updateVestingWeek(totalAssets: BigInt, totalCount: i32, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let week = timestamp_i32 / 604800

    let week_id = week.toString()

    let week_data = VestingWeekCount.load(week_id)

    if (week_data == null) {
        week_data = new VestingWeekCount(week_id)
        week_data.week = BigInt.fromI32(week)
        week_data.month = BigInt.fromI32(date[1])
        week_data.year = BigInt.fromI32(date[2])
        week_data.totalCount = 0
        week_data.totalAssests = BigInt.fromI32(0)
    }

    week_data.timestamp = timestamp
    week_data.totalCount = totalCount
    week_data.totalAssests = totalAssets
    week_data.save()
}

export function updateVestingMonth(totalAssets: BigInt, totalCount: i32, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let month_id = date[1].toString().concat('-').concat(date[2].toString())

    let month_data = VestingMonthCount.load(month_id)

    if (month_data == null) {
        month_data = new VestingMonthCount(month_id)
        month_data.month = BigInt.fromI32(date[1])
        month_data.year = BigInt.fromI32(date[2])
        month_data.totalCount = 0
        month_data.totalAssests = BigInt.fromI32(0)
    }

    month_data.timestamp = timestamp
    month_data.totalCount = totalCount
    month_data.totalAssests = totalAssets
    month_data.save()
}

export function updateBridgeBSCHour(amount: BigInt, totalTransferred: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let hour = timestamp_i32 / 3600
    let week = timestamp_i32 / 604800

    let hour_id = hour.toString()

    let hour_data = BridgeBSCHourData.load(hour_id)

    if (hour_data == null) {
        hour_data = new BridgeBSCHourData(hour_id)
        hour_data.hour = BigInt.fromI32(hour)
        hour_data.week = BigInt.fromI32(week)
        hour_data.day = BigInt.fromI32(date[0])
        hour_data.month = BigInt.fromI32(date[1])
        hour_data.year = BigInt.fromI32(date[2])
        hour_data.transferredToBSC = BigInt.fromI32(0)
        hour_data.totalTransferredToBSC = BigInt.fromI32(0)
    }

    hour_data.timestamp = timestamp
    hour_data.transferredToBSC = hour_data.transferredToBSC.plus(amount)
    hour_data.totalTransferredToBSC = totalTransferred
    hour_data.save()
}

export function updateBridgeBSCDay(amount: BigInt, totalTransferred: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let week = timestamp_i32 / 604800

    let day_id = date[0].toString().concat('-').concat(date[1].toString()).concat('-').concat(date[2].toString())

    let day_data = BridgeBSCDayData.load(day_id)

    if (day_data == null) {
        day_data = new BridgeBSCDayData(day_id)
        day_data.week = BigInt.fromI32(week)
        day_data.day = BigInt.fromI32(date[0])
        day_data.month = BigInt.fromI32(date[1])
        day_data.year = BigInt.fromI32(date[2])
        day_data.transferredToBSC = BigInt.fromI32(0)
        day_data.totalTransferredToBSC = BigInt.fromI32(0)
    }

    day_data.timestamp = timestamp
    day_data.transferredToBSC = day_data.transferredToBSC.plus(amount)
    day_data.totalTransferredToBSC = totalTransferred
    day_data.save()
}

export function updateBridgeBSCWeek(amount: BigInt, totalTransferred: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let week = timestamp_i32 / 604800

    let week_id = week.toString()

    let week_data = BridgeBSCWeekData.load(week_id)

    if (week_data == null) {
        week_data = new BridgeBSCWeekData(week_id)
        week_data.week = BigInt.fromI32(week)
        week_data.month = BigInt.fromI32(date[1])
        week_data.year = BigInt.fromI32(date[2])
        week_data.transferredToBSC = BigInt.fromI32(0)
        week_data.totalTransferredToBSC = BigInt.fromI32(0)
    }

    week_data.timestamp = timestamp
    week_data.transferredToBSC = week_data.transferredToBSC.plus(amount)
    week_data.totalTransferredToBSC = totalTransferred
    week_data.save()
}

export function updateBridgeBSCMonth(amount: BigInt, totalTransferred: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let month_id = date[1].toString().concat('-').concat(date[2].toString())

    let month_data = BridgeBSCMonthData.load(month_id)

    if (month_data == null) {
        month_data = new BridgeBSCMonthData(month_id)
        month_data.month = BigInt.fromI32(date[1])
        month_data.year = BigInt.fromI32(date[2])
        month_data.transferredToBSC = BigInt.fromI32(0)
        month_data.totalTransferredToBSC = BigInt.fromI32(0)
    }

    month_data.timestamp = timestamp
    month_data.transferredToBSC = month_data.transferredToBSC.plus(amount)
    month_data.totalTransferredToBSC = totalTransferred
    month_data.save()
}


export function updateStackerHour(totalStake: BigInt, totalCount: i32, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let hour = timestamp_i32 / 3600
    let week = timestamp_i32 / 604800

    let hour_id = hour.toString()

    let hour_data = StackerHourCount.load(hour_id)

    if (hour_data == null) {
        hour_data = new StackerHourCount(hour_id)
        hour_data.hour = BigInt.fromI32(hour)
        hour_data.week = BigInt.fromI32(week)
        hour_data.day = BigInt.fromI32(date[0])
        hour_data.month = BigInt.fromI32(date[1])
        hour_data.year = BigInt.fromI32(date[2])
        hour_data.totalCount = 0
        hour_data.totalStake = BigInt.fromI32(0)
    }

    hour_data.timestamp = timestamp
    hour_data.totalCount = totalCount
    hour_data.totalStake = totalStake
    hour_data.save()
}

export function updateStackerDay(totalStake: BigInt, totalCount: i32, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let week = timestamp_i32 / 604800

    let day_id = date[0].toString().concat('-').concat(date[1].toString()).concat('-').concat(date[2].toString())

    let day_data = StackerDayCount.load(day_id)

    if (day_data == null) {
        day_data = new StackerDayCount(day_id)
        day_data.week = BigInt.fromI32(week)
        day_data.day = BigInt.fromI32(date[0])
        day_data.month = BigInt.fromI32(date[1])
        day_data.year = BigInt.fromI32(date[2])
        day_data.totalCount = 0
        day_data.totalStake = BigInt.fromI32(0)
    }

    day_data.timestamp = timestamp
    day_data.totalCount = totalCount
    day_data.totalStake = totalStake
    day_data.save()
}

export function updateStackerWeek(totalStake: BigInt, totalCount: i32, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let week = timestamp_i32 / 604800

    let week_id = week.toString()

    let week_data = StackerWeekCount.load(week_id)

    if (week_data == null) {
        week_data = new StackerWeekCount(week_id)
        week_data.week = BigInt.fromI32(week)
        week_data.month = BigInt.fromI32(date[1])
        week_data.year = BigInt.fromI32(date[2])
        week_data.totalCount = 0
        week_data.totalStake = BigInt.fromI32(0)
    }

    week_data.timestamp = timestamp
    week_data.totalCount = totalCount
    week_data.totalStake = totalStake
    week_data.save()
}

export function updateStackerMonth(totalStake: BigInt, totalCount: i32, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let month_id = date[1].toString().concat('-').concat(date[2].toString())

    let month_data = StackerMonthCount.load(month_id)

    if (month_data == null) {
        month_data = new StackerMonthCount(month_id)
        month_data.month = BigInt.fromI32(date[1])
        month_data.year = BigInt.fromI32(date[2])
        month_data.totalCount = 0
        month_data.totalStake = BigInt.fromI32(0)
    }

    month_data.timestamp = timestamp
    month_data.totalCount = totalCount
    month_data.totalStake = totalStake
    month_data.save()
}