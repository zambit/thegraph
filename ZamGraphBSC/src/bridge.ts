import { BigInt } from "@graphprotocol/graph-ts"
import { BridgeBSC } from "../generated/schema"
import { SwapFilled} from "../generated/ZamBridgeBSC/ZamBridgeBSC"
import { actual} from "./helping"
import {updateParameters} from "./financialparameters"
import { updateBridgeDate } from "./historical"

export function handleSwapFilledBSC(event: SwapFilled): void {
    let bridgeBSC = BridgeBSC.load(actual)

    if (bridgeBSC == null) {
        bridgeBSC = new BridgeBSC(actual)
        bridgeBSC.transferredToBSC = BigInt.fromI32(0)
    }

    bridgeBSC.transferredToBSC = bridgeBSC.transferredToBSC.plus(event.params.amount)
    bridgeBSC = updateBridgeDate(bridgeBSC, event.params.amount, event.block.timestamp)
    bridgeBSC.save()
    bridgeBSC.id = event.block.timestamp.toString()
    bridgeBSC.save()

    updateParameters(event.block.timestamp)
}