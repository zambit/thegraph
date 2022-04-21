import { BigInt } from "@graphprotocol/graph-ts"
import {Circulation, Blocked, TotalSupply, Holder, VestingCount, StackerCount} from "../generated/schema"
import { actual, ADDRESS_CREATOR, ADDRESS_POOL, ADDRESS_STAKE_REWARDS } from "./helping"
import { updateBlockedDate, updateCirculationDate } from "./historical"

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

    let creator = Holder.load(ADDRESS_CREATOR.toHex())
    let stacker_reward = Holder.load(ADDRESS_STAKE_REWARDS.toHex())
    let pool = Holder.load(ADDRESS_POOL.toHex())
    let vesting = VestingCount.load(actual)
    let stacking = StackerCount.load(actual)

    let balance_creator = BigInt.fromI32(0)
    let balance_stacking_rewards = BigInt.fromI32(0)
    let balance_pool = BigInt.fromI32(0)
    let balance_vesting = BigInt.fromI32(0)
    let balance_stacking = BigInt.fromI32(0)


    if (creator != null) {
        balance_creator = creator.balance
    }

    if (stacker_reward != null) {
        balance_stacking_rewards = stacker_reward.balance
    }

    if (pool != null) {
        balance_pool = pool.balance
    }

    if (vesting != null) {
        balance_vesting = vesting.totalAssests
    }

    if (stacking != null) {
        balance_stacking = stacking.totalStake
    }

    circulation.circulation = totalSupply.supply.minus(balance_creator).minus(balance_stacking_rewards).minus(balance_pool).
                                                        minus(balance_vesting).minus(balance_stacking)
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