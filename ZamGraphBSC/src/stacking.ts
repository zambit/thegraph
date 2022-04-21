import {Deposit, Withdraw} from "../generated/ZamStacking/ZamStacking"
import {Stacker, StackerCount} from "../generated/schema"
import { actual } from "./helping"
import { BigInt, store } from "@graphprotocol/graph-ts"
import { updateStackerDate } from "./historical"
import { updateParameters } from "./financialparameters"

export function handleDeposit(event: Deposit): void {
    let stackerCount = StackerCount.load(actual)

    if (stackerCount == null) {
        stackerCount = new StackerCount(actual)
        stackerCount.count = 0
        stackerCount.totalStake = BigInt.fromI32(0)
    }

    let stacker_id = event.params.user.toHex()
    let stacker = Stacker.load(stacker_id)

    if (stacker == null) {
        stacker = new Stacker(stacker_id)
        stacker.address = stacker_id
        stacker.stake = BigInt.fromI32(0)

        stackerCount.count = stackerCount.count + 1
    }

    stacker.stake = stacker.stake.plus(event.params.amount)
    stacker.save()

    stackerCount.totalStake = stackerCount.totalStake.plus(event.params.amount)
    stackerCount = updateStackerDate(stackerCount, event.block.timestamp)
    stackerCount.save()
    stackerCount.id = event.block.timestamp.toString()
    stackerCount.save()

    updateParameters(event.block.timestamp)
}

export function handleWithdraw(event: Withdraw): void {
    let stackerCount = StackerCount.load(actual)

    if (stackerCount == null) {
        stackerCount = new StackerCount(actual)
        stackerCount.count = 0
        stackerCount.totalStake = BigInt.fromI32(0)
    }

    let stacker_id = event.params.user.toHex()
    let stacker = Stacker.load(stacker_id)

    // unreal situation
    if (stacker == null) {
        return 
    }

    stacker.stake = stacker.stake.minus(event.params.amount)
    stacker.save()
    if (stacker.stake == BigInt.fromI32(0)) {
        store.remove('Stacker', stacker_id)
    }

    stackerCount.totalStake = stackerCount.totalStake.minus(event.params.amount)
    stackerCount = updateStackerDate(stackerCount, event.block.timestamp)
    stackerCount.save()
    stackerCount.id = event.block.timestamp.toString()
    stackerCount.save()
    
    updateParameters(event.block.timestamp)
}   