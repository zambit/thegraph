import { log } from '@graphprotocol/graph-ts'
import { BigInt } from "@graphprotocol/graph-ts"
import {Circulation, Blocked, TotalSupply, Holder, VestingCount, Bridge} from "../generated/schema"
import { actual, ADDRESS_BRIDGE, ADDRESS_CREATOR, ADDRESS_POOL, ADDRESS_STAKE_REWARDS} from "./helping"
import { updateCirculationDate, updateBlockedDate } from './historical'


export function updateParameters(timestamp: BigInt): void {
    let circulation = Circulation.load(actual)

    if (circulation == null) {
        circulation = new Circulation(actual)
        circulation.circulation = BigInt.fromI32(0)
    }

    let blocked = Blocked.load(actual)

    if (blocked == null) {
        blocked = new Blocked(actual)
        blocked.blocked = BigInt.fromI32(0)
    }

    let totalSupply = TotalSupply.load(actual)

    // unreal situtation
    if (totalSupply == null) {
        return 
    }

    let creator = Holder.load(ADDRESS_CREATOR.toHex())!
    let stacker_reward = Holder.load(ADDRESS_STAKE_REWARDS.toHex())
    let pool = Holder.load(ADDRESS_POOL.toHex())
    let bridge = Holder.load(ADDRESS_BRIDGE.toHex())
    let vesting = VestingCount.load(actual)

    let balance_creator = creator.balance
    let balance_stacker_reward = BigInt.fromI32(0)
    let balance_pool = BigInt.fromI32(0)
    let balance_bridge = BigInt.fromI32(0)
    let balance_vesting = BigInt.fromI32(0)


    if (pool != null) {
        balance_pool = pool.balance
    }

    if (vesting != null) {
        balance_vesting = vesting.totalAssests
    }

    if (bridge != null) {
        balance_bridge = bridge.balance
    }

    if (stacker_reward != null) {
        balance_stacker_reward = stacker_reward.balance
    }

    circulation.circulation = totalSupply.supply.minus(balance_creator).minus(balance_stacker_reward).minus(balance_pool).
                                                        minus(balance_vesting).minus(balance_bridge)
    blocked.blocked = totalSupply.supply.minus(circulation.circulation)

    circulation = updateCirculationDate(circulation, timestamp)
    blocked = updateBlockedDate(blocked, timestamp)

    circulation.save()
    blocked.save()

    circulation.id = timestamp.toString()
    blocked.id = timestamp.toString()

    circulation.save()
    blocked.save()
}