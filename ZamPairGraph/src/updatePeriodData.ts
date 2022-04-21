import { Pair, PairHourData, PairDayData, PairWeekData, PairMonthData} from "../generated/schema"
import { BigDecimal, BigInt, ethereum } from '@graphprotocol/graph-ts'
import { getDateByTimestamp } from "./helping"


export function updateHourlyData(event: ethereum.Event): PairHourData {
    let timestamp = event.block.timestamp.toI32()

    let date = getDateByTimestamp(timestamp)
    
    let hour = timestamp / 3600

    let hour_id = event.address.toHex().concat('-').concat(hour.toString())

    let pair = Pair.load(event.address.toHex())!
    let hour_data = PairHourData.load(hour_id)

    if (hour_data == null) {
        hour_data = new PairHourData(hour_id)
        hour_data.pair = pair.id
        hour_data.periodBegin = BigInt.fromI32(timestamp)
        hour_data.hour = BigInt.fromI32(hour)
        hour_data.day = BigInt.fromI32(date[0])
        hour_data.month = BigInt.fromI32(date[1])
        hour_data.year = BigInt.fromI32(date[2])

        hour_data.token0Price = BigDecimal.zero()
        hour_data.token1Price = BigDecimal.zero()
        hour_data.totalSupply = BigDecimal.zero()

        hour_data.hourlyVolumeToken0 = BigDecimal.zero()
        hour_data.hourlyVolumeToken1 = BigDecimal.zero()
    }

    hour_data.periodEnd = BigInt.fromI32(timestamp)
    hour_data.totalSupply = pair.totalSupply
    hour_data.reserve0 = pair.reserve0
    hour_data.reserve1 = pair.reserve1
    hour_data.token0Price = pair.token0Price
    hour_data.token1Price = pair.token1Price

    return hour_data
}

export function updateDailyData(event: ethereum.Event): PairDayData {
    let timestamp = event.block.timestamp.toI32()

    let date = getDateByTimestamp(timestamp)

    let day_id = event.address.toHex().concat('-')
        .concat(date[0].toString()).concat('-').concat(date[1].toString()).concat('-')
        .concat(date[2].toString())
    
    let pair = Pair.load(event.address.toHex())!
    let day_data = PairDayData.load(day_id)

    if (day_data == null) {
        day_data = new PairDayData(day_id)
        day_data.pair = pair.id
        day_data.periodBegin = BigInt.fromI32(timestamp)
        day_data.day = BigInt.fromI32(date[0])
        day_data.month = BigInt.fromI32(date[1])
        day_data.year = BigInt.fromI32(date[2])

        day_data.token0Price = BigDecimal.zero()
        day_data.token1Price = BigDecimal.zero()
        day_data.totalSupply = BigDecimal.zero()

        day_data.dailyVolumeToken0 = BigDecimal.zero()
        day_data.dailyVolumeToken1 = BigDecimal.zero()
    }

    day_data.periodEnd = BigInt.fromI32(timestamp)
    day_data.totalSupply = pair.totalSupply
    day_data.reserve0 = pair.reserve0
    day_data.reserve1 = pair.reserve1
    day_data.token0Price = pair.token0Price
    day_data.token1Price = pair.token1Price

    return day_data
}

export function updateWeeklyData(event: ethereum.Event): PairWeekData {
    let timestamp = event.block.timestamp.toI32()

    let week = timestamp / 604800

    let week_id = event.address.toHex().concat('-').concat(week.toString())

    let pair = Pair.load(event.address.toHex())!
    let week_data = PairWeekData.load(week_id)

    if (week_data == null) {
        week_data = new PairWeekData(week_id)
        week_data.pair = pair.id
        week_data.periodBegin = BigInt.fromI32(timestamp)
        week_data.week = BigInt.fromI32(week)

        week_data.token0Price = BigDecimal.zero()
        week_data.token1Price = BigDecimal.zero()
        week_data.totalSupply = BigDecimal.zero()

        week_data.weeklyVolumeToken0 = BigDecimal.zero()
        week_data.weeklyVolumeToken1 = BigDecimal.zero()
    }

    week_data.periodEnd = BigInt.fromI32(timestamp)
    week_data.totalSupply = pair.totalSupply
    week_data.reserve0 = pair.reserve0
    week_data.reserve1 = pair.reserve1
    week_data.token0Price = pair.token0Price
    week_data.token1Price = pair.token1Price

    return week_data
}

export function updateMonthlyData(event: ethereum.Event): PairMonthData {
    let timestamp = event.block.timestamp.toI32()

    let date = getDateByTimestamp(timestamp)

    let month_id = event.address.toHex().concat('-')
        .concat(date[1].toString()).concat('-').concat(date[2].toString())

    let pair = Pair.load(event.address.toHex())!
    let month_data = PairMonthData.load(month_id)

    if (month_data == null) {
        month_data = new PairMonthData(month_id)
        month_data.pair = pair.id
        month_data.periodBegin = BigInt.fromI32(timestamp)
        month_data.month = BigInt.fromI32(date[1])
        month_data.year = BigInt.fromI32(date[2])

        month_data.token0Price = BigDecimal.zero()
        month_data.token1Price = BigDecimal.zero()
        month_data.totalSupply = BigDecimal.zero()

        month_data.monthlyVolumeToken0 = BigDecimal.zero()
        month_data.monthlyVolumeToken1 = BigDecimal.zero()
    }

    month_data.periodEnd = BigInt.fromI32(timestamp)
    month_data.totalSupply = pair.totalSupply
    month_data.reserve0 = pair.reserve0
    month_data.reserve1 = pair.reserve1
    month_data.token0Price = pair.token0Price
    month_data.token1Price = pair.token1Price

    return month_data
}