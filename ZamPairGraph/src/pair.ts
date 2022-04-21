import {Transfer, Mint, Burn, Sync, Swap} from "../generated/templates/PancakePair/PancakePair"
import { Pair, Token } from "../generated/schema"
import { ADDRESS_ZERO, convertTokenToDecimal } from "./helping"
import { BigDecimal, BigInt } from "@graphprotocol/graph-ts"
import { updateDailyData, updateHourlyData, updateMonthlyData, updateWeeklyData } from "./updatePeriodData"
 
export function handleTransfer(event: Transfer): void {
    let pair = Pair.load(event.address.toHex())
    
    // unreal situation
    if (pair == null) {
        return 
    }
    
    let amount = convertTokenToDecimal(event.params.value, BigInt.fromI32(18))

    if (event.params.from == ADDRESS_ZERO) {
        pair.totalSupply = pair.totalSupply.plus(amount)
        pair.save()
    }

    if (event.params.to == ADDRESS_ZERO && event.params.from.toHex() == pair.id) {
        pair.totalSupply = pair.totalSupply.minus(amount)
        pair.save()
    }
}

export function handleMint(event: Mint): void {
    updateDailyData(event)
    updateWeeklyData(event)
    updateMonthlyData(event)
}

export function handleBurn(event: Burn): void {
    updateDailyData(event)
    updateWeeklyData(event)
    updateMonthlyData(event)
}

export function handleSync(event: Sync): void {
    let pair = Pair.load(event.address.toHex())
    
    // unreal situtation
    if (pair == null) {
        return 
    }

    let token0 = Token.load(pair.token0)!
    let token1 = Token.load(pair.token1)!

    pair.reserve0 = convertTokenToDecimal(event.params.reserve0, token0.decimals)
    pair.reserve1 = convertTokenToDecimal(event.params.reserve1, token1.decimals)

    // price of token 0 in units of token 1
    if (pair.reserve0.notEqual(BigDecimal.zero())) {
        pair.token0Price = pair.reserve1.div(pair.reserve0)
    } else {
        pair.token0Price = BigDecimal.zero()
    }

    // price of token 1 in units of token 0
    if (pair.reserve1.notEqual(BigDecimal.zero())) {
        pair.token1Price = pair.reserve0.div(pair.reserve1)
    } else {
        pair.token1Price = BigDecimal.zero()
    }

    pair.save()
}

export function handleSwap(event: Swap): void {
    let pair = Pair.load(event.address.toHex())

    // unreal situation
    if (pair == null) {
        return 
    }
    let token0 = Token.load(pair.token0)!
    let token1 = Token.load(pair.token1)!

    let amount0In = convertTokenToDecimal(event.params.amount0In, token0.decimals)
    let amount0Out = convertTokenToDecimal(event.params.amount0Out, token0.decimals)
    let amoun0Total = amount0In.plus(amount0Out)

    let amount1In = convertTokenToDecimal(event.params.amount1In, token1.decimals)
    let amount1Out = convertTokenToDecimal(event.params.amount1Out, token1.decimals)
    let amount1Total = amount1In.plus(amount1Out)

    pair.volumeToken0 = pair.volumeToken0.plus(amoun0Total)
    pair.volumeToken1 = pair.volumeToken1.plus(amount1Total)

    pair.save()

    let pair_hour_data = updateHourlyData(event)
    let pair_day_data = updateDailyData(event)
    let pair_week_data = updateWeeklyData(event)
    let pair_month_data = updateMonthlyData(event)

    pair_hour_data.hourlyVolumeToken0 = pair_hour_data.hourlyVolumeToken0.plus(amoun0Total)
    pair_hour_data.hourlyVolumeToken1 = pair_hour_data.hourlyVolumeToken1.plus(amount1Total)
    pair_hour_data.save()

    pair_day_data.dailyVolumeToken0 = pair_day_data.dailyVolumeToken0.plus(amoun0Total)
    pair_day_data.dailyVolumeToken1 = pair_day_data.dailyVolumeToken1.plus(amount1Total)
    pair_day_data.save()

    pair_week_data.weeklyVolumeToken0 = pair_week_data.weeklyVolumeToken0.plus(amoun0Total)
    pair_week_data.weeklyVolumeToken1 = pair_week_data.weeklyVolumeToken1.plus(amount1Total)
    pair_week_data.save()

    pair_month_data.monthlyVolumeToken0 = pair_month_data.monthlyVolumeToken0.plus(amount0Out)
    pair_month_data.monthlyVolumeToken1 = pair_month_data.monthlyVolumeToken1.plus(amount1Total)
    pair_month_data.save()
}