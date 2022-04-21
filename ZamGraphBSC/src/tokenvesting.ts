import { BigInt, dataSource, store } from "@graphprotocol/graph-ts";
import { Vester, VestingCount } from "../generated/schema";
import { Released } from "../generated/templates/TokenVesting/TokenVesting";
import { actual} from "./helping";
import {updateParameters} from "./financialparameters"
import { updateVestingDate } from "./historical";

export function handleReleased(event: Released): void {
    let vester = Vester.load(event.address.toHex())
    let timestamp = event.block.timestamp

    // unreal situation
    if (vester == null) {
        return;
    }

    vester.balance_contract = vester.balance_contract.minus(event.params.amount)
    vester.balance = vester.balance.plus(event.params.amount)

    vester.save()

    let vestingCount = VestingCount.load(actual)

    // unreal situation
    if (vestingCount == null) {
        return
    }

    vestingCount.totalAssests = vestingCount.totalAssests.minus(event.params.amount)

    if (vester.balance_contract == BigInt.fromI32(0)) {
        store.remove('Vester', event.address.toHex())
        vestingCount.count = vestingCount.count - 1
    }

    vestingCount = updateVestingDate(vestingCount, timestamp) 
    vestingCount.save()
    vestingCount.id = event.block.timestamp.toString()
    vestingCount.save()

    updateParameters(event.block.timestamp)
}