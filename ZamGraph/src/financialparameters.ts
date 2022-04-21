import { log } from '@graphprotocol/graph-ts'
import { BigInt } from "@graphprotocol/graph-ts"
import { Circulation, Blocked, TotalSupply, Holder, VestingCount, Bridge } from "../generated/schema"
import { actual, ADDRESS_BRIDGE, ADDRESS_CREATOR, ADDRESS_POOL, ADDRESS_STAKE_REWARDS, ADDRESS_TEAM, ADDRESS_ECOSYSTEM, ADDRESS_MARKETING, ADDRESS_PARTNERSHIPS, ADDRESS_LIQUIDITY, ADDRESS_COMMUNITY, ADDRESS_AFFILIATE } from "./helping"
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
    let team = Holder.load(ADDRESS_TEAM.toHex())
    let ecosystem = Holder.load(ADDRESS_ECOSYSTEM.toHex())
    let marketing = Holder.load(ADDRESS_MARKETING.toHex())
    let partnerships = Holder.load(ADDRESS_PARTNERSHIPS.toHex())
    let lequidity = Holder.load(ADDRESS_LIQUIDITY.toHex())
    let community = Holder.load(ADDRESS_COMMUNITY.toHex())
    let affiliate = Holder.load(ADDRESS_AFFILIATE.toHex())
    let vesting = VestingCount.load(actual)

    let balance_creator = creator.balance
    let balance_stacker_reward = BigInt.fromI32(0)
    let balance_pool = BigInt.fromI32(0)
    let balance_bridge = BigInt.fromI32(0)
    let balance_vesting = BigInt.fromI32(0)
    let balance_team = BigInt.fromI32(0)
    let balance_ecosystem = BigInt.fromI32(0)
    let balance_marketing = BigInt.fromI32(0)
    let balance_partnerships = BigInt.fromI32(0)
    let balance_lequidity = BigInt.fromI32(0)
    let balance_community = BigInt.fromI32(0)
    let balance_affiliate = BigInt.fromI32(0)


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

    if (team != null) {
        balance_team = team.balance
    }

    if (ecosystem != null) {
        balance_ecosystem = ecosystem.balance
    }

    if (marketing != null) {
        balance_marketing = marketing.balance
    }

    if (partnerships != null) {
        balance_partnerships = partnerships.balance
    }

    if (lequidity != null) {
        balance_lequidity = lequidity.balance
    }

    if (community != null) {
        balance_community = community.balance
    }

    if (affiliate != null) {
        balance_affiliate = affiliate.balance
    }

    circulation.circulation = totalSupply.supply.minus(balance_creator).minus(balance_stacker_reward).minus(balance_pool).
        minus(balance_vesting).minus(balance_bridge).minus(balance_team).minus(balance_ecosystem).minus(balance_marketing).
        minus(balance_partnerships).minus(balance_lequidity).minus(balance_community).minus(balance_affiliate)
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