import { BigInt} from '@graphprotocol/graph-ts'
import { CirculationHourData, CirculationDayData, CirculationWeekData, CirculationMonthData, 
        BlockedHourData, BlockedDayData, BlockedWeekData, BlockedMonthData,
        TransferHourData, TransferDayData, TransferWeekData, TransferMonthData,
        TransactionHourCount, TransactionDayCount, TransactionWeekCount, TransactionMonthCount, BridgeETHMonthData, BridgeETHWeekData, BridgeETHDayData, BridgeETHHourData,
    VestingHourCount, VestingDayCount, VestingWeekCount, VestingMonthCount, ParticipantHourCount, ParticipantDayCount, ParticipantWeekCount,
    ParticipantMonthCount, HolderHourCount, HolderDayCount, HolderWeekCount, HolderMonthCount, BridgeHour, BridgeDay, BridgeWeek, BridgeMonth} from '../generated/schema'
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

export function updateBridgeETHHour(amount: BigInt, totalTransferred: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let hour = timestamp_i32 / 3600
    let week = timestamp_i32 / 604800

    let hour_id = hour.toString()

    let hour_data = BridgeETHHourData.load(hour_id)

    if (hour_data == null) {
        hour_data = new BridgeETHHourData(hour_id)
        hour_data.hour = BigInt.fromI32(hour)
        hour_data.week = BigInt.fromI32(week)
        hour_data.day = BigInt.fromI32(date[0])
        hour_data.month = BigInt.fromI32(date[1])
        hour_data.year = BigInt.fromI32(date[2])
        hour_data.transferredToETH = BigInt.fromI32(0)
        hour_data.totalTransferredToETH = BigInt.fromI32(0)
    }

    hour_data.timestamp = timestamp
    hour_data.transferredToETH = hour_data.transferredToETH.plus(amount)
    hour_data.totalTransferredToETH = totalTransferred
    hour_data.save()
}

export function updateBridgeETHDay(amount: BigInt, totalTransferred: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let week = timestamp_i32 / 604800

    let day_id = date[0].toString().concat('-').concat(date[1].toString()).concat('-').concat(date[2].toString())

    let day_data = BridgeETHDayData.load(day_id)

    if (day_data == null) {
        day_data = new BridgeETHDayData(day_id)
        day_data.week = BigInt.fromI32(week)
        day_data.day = BigInt.fromI32(date[0])
        day_data.month = BigInt.fromI32(date[1])
        day_data.year = BigInt.fromI32(date[2])
        day_data.transferredToETH = BigInt.fromI32(0)
        day_data.totalTransferredToETH = BigInt.fromI32(0)
    }

    day_data.timestamp = timestamp
    day_data.transferredToETH = day_data.transferredToETH.plus(amount)
    day_data.totalTransferredToETH = totalTransferred
    day_data.save()
}

export function updateBridgeETHWeek(amount: BigInt, totalTransferred: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let week = timestamp_i32 / 604800

    let week_id = week.toString()

    let week_data = BridgeETHWeekData.load(week_id)

    if (week_data == null) {
        week_data = new BridgeETHWeekData(week_id)
        week_data.week = BigInt.fromI32(week)
        week_data.month = BigInt.fromI32(date[1])
        week_data.year = BigInt.fromI32(date[2])
        week_data.transferredToETH = BigInt.fromI32(0)
        week_data.totalTransferredToETH = BigInt.fromI32(0)
    }

    week_data.timestamp = timestamp
    week_data.transferredToETH = week_data.transferredToETH.plus(amount)
    week_data.totalTransferredToETH = totalTransferred
    week_data.save()
}

export function updateBridgeETHMonth(amount: BigInt, totalTransferred: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let month_id = date[1].toString().concat('-').concat(date[2].toString())

    let month_data = BridgeETHMonthData.load(month_id)

    if (month_data == null) {
        month_data = new BridgeETHMonthData(month_id)
        month_data.month = BigInt.fromI32(date[1])
        month_data.year = BigInt.fromI32(date[2])
        month_data.transferredToETH = BigInt.fromI32(0)
        month_data.totalTransferredToETH = BigInt.fromI32(0)
    }

    month_data.timestamp = timestamp
    month_data.transferredToETH = month_data.transferredToETH.plus(amount)
    month_data.totalTransferredToETH = totalTransferred
    month_data.save()
}

export function updateBridgeTotalHour(amountToETH: BigInt, totalTransferredToETH: BigInt, amountToBSC: BigInt, totalTransferredToBSC: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let hour = timestamp_i32 / 3600
    let week = timestamp_i32 / 604800

    let hour_id = hour.toString()

    let hour_data = BridgeHour.load(hour_id)

    if (hour_data == null) {
        hour_data = new BridgeHour(hour_id)
        hour_data.hour = BigInt.fromI32(hour)
        hour_data.week = BigInt.fromI32(week)
        hour_data.day = BigInt.fromI32(date[0])
        hour_data.month = BigInt.fromI32(date[1])
        hour_data.year = BigInt.fromI32(date[2])
        hour_data.transferredToETH = BigInt.fromI32(0)
        hour_data.totalTransferredToETH = BigInt.fromI32(0)
        hour_data.transferredToBSC = BigInt.fromI32(0)
        hour_data.totalTransferredToBSC = BigInt.fromI32(0)
    }

    hour_data.timestamp = timestamp
    hour_data.transferredToETH = hour_data.transferredToETH.plus(amountToETH)
    hour_data.totalTransferredToETH = totalTransferredToETH
    hour_data.transferredToBSC = hour_data.transferredToBSC.plus(amountToBSC)
    hour_data.totalTransferredToBSC = totalTransferredToBSC
    hour_data.save()
}

export function updateBridgeTotalDay(amountToETH: BigInt, totalTransferredToETH: BigInt, amountToBSC: BigInt, totalTransferredToBSC: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let week = timestamp_i32 / 604800

    let day_id = date[0].toString().concat('-').concat(date[1].toString()).concat('-').concat(date[2].toString())

    let day_data = BridgeDay.load(day_id)

    if (day_data == null) {
        day_data = new BridgeDay(day_id)
        day_data.week = BigInt.fromI32(week)
        day_data.day = BigInt.fromI32(date[0])
        day_data.month = BigInt.fromI32(date[1])
        day_data.year = BigInt.fromI32(date[2])
        day_data.transferredToETH = BigInt.fromI32(0)
        day_data.totalTransferredToETH = BigInt.fromI32(0)
        day_data.transferredToBSC = BigInt.fromI32(0)
        day_data.totalTransferredToBSC = BigInt.fromI32(0)
    }

    day_data.timestamp = timestamp
    day_data.transferredToETH = day_data.transferredToETH.plus(amountToETH)
    day_data.totalTransferredToETH = totalTransferredToETH
    day_data.transferredToBSC = day_data.transferredToBSC.plus(amountToBSC)
    day_data.totalTransferredToBSC = totalTransferredToBSC
    day_data.save()
}

export function updateBridgeTotalWeek(amountToETH: BigInt, totalTransferredToETH: BigInt, amountToBSC: BigInt, totalTransferredToBSC: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let week = timestamp_i32 / 604800

    let week_id = week.toString()

    let week_data = BridgeWeek.load(week_id)

    if (week_data == null) {
        week_data = new BridgeWeek(week_id)
        week_data.week = BigInt.fromI32(week)
        week_data.month = BigInt.fromI32(date[1])
        week_data.year = BigInt.fromI32(date[2])
        week_data.transferredToETH = BigInt.fromI32(0)
        week_data.totalTransferredToETH = BigInt.fromI32(0)
        week_data.transferredToBSC = BigInt.fromI32(0)
        week_data.totalTransferredToBSC = BigInt.fromI32(0)
    }

    week_data.timestamp = timestamp
    week_data.transferredToETH = week_data.transferredToETH.plus(amountToETH)
    week_data.totalTransferredToETH = totalTransferredToETH
    week_data.transferredToBSC = week_data.transferredToBSC.plus(amountToBSC)
    week_data.totalTransferredToBSC = totalTransferredToBSC
    week_data.save()
}

export function updateBridgeTotalMonth(amountToETH: BigInt, totalTransferredToETH: BigInt, amountToBSC: BigInt, totalTransferredToBSC: BigInt, timestamp: BigInt): void {
    let timestamp_i32 = timestamp.toI32()

    let date = getDateByTimestamp(timestamp_i32)

    let month_id = date[1].toString().concat('-').concat(date[2].toString())

    let month_data = BridgeMonth.load(month_id)

    if (month_data == null) {
        month_data = new BridgeMonth(month_id)
        month_data.month = BigInt.fromI32(date[1])
        month_data.year = BigInt.fromI32(date[2])
        month_data.transferredToETH = BigInt.fromI32(0)
        month_data.totalTransferredToETH = BigInt.fromI32(0)
        month_data.transferredToBSC = BigInt.fromI32(0)
        month_data.totalTransferredToBSC = BigInt.fromI32(0)
    }

    month_data.timestamp = timestamp
    month_data.transferredToETH = month_data.transferredToETH.plus(amountToETH)
    month_data.totalTransferredToETH = totalTransferredToETH
    month_data.transferredToBSC = month_data.transferredToBSC.plus(amountToBSC)
    month_data.totalTransferredToBSC = totalTransferredToBSC
    month_data.save()
}