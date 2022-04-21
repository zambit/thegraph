import { BigInt } from "@graphprotocol/graph-ts"
import { Bridge, BridgeETH } from "../generated/schema"
import { SwapFilled, SwapStarted} from "../generated/ZamBridgeETH/ZamBridgeETH"
import { actual} from "./helping"
import { updateBridgeDate, updateBridgeTotalDate } from "./historical"
import { updateParameters } from "./financialparameters"

export function handleSwapFilledETH(event: SwapFilled): void {
    let bridge = Bridge.load(actual)
    
    if (bridge == null) {
        bridge = new Bridge(actual)
        bridge.totalTransferred = BigInt.fromI32(0)
        bridge.transferredToETH = BigInt.fromI32(0)
        bridge.transferredToBSC = BigInt.fromI32(0)
    }

    let amount = event.params.amount

    bridge.totalTransferred = bridge.totalTransferred.plus(amount)
    bridge.transferredToETH = bridge.transferredToETH.plus(amount)
    bridge = updateBridgeTotalDate(bridge, event.params.amount, BigInt.fromI32(0) , event.block.timestamp)
    bridge.save()
    bridge.id = event.block.timestamp.toString()
    bridge.save()

    let bridgeETH = BridgeETH.load(actual)

    if (bridgeETH == null) {
        bridgeETH = new BridgeETH(actual)
        bridgeETH.transferredToETH = BigInt.fromI32(0)
    }

    bridgeETH.transferredToETH = bridgeETH.transferredToETH.plus(amount)
    bridgeETH = updateBridgeDate(bridgeETH, event.params.amount, event.block.timestamp)
    bridgeETH.save()
    bridgeETH.id = event.block.timestamp.toString()
    bridgeETH.save()

    updateParameters(event.block.timestamp)
}


export function handleSwapStartedETH(event: SwapStarted): void {
    let bridge = Bridge.load(actual)

    if (bridge == null) {
        bridge = new Bridge(actual)
        bridge.totalTransferred = BigInt.fromI32(0)
        bridge.transferredToETH = BigInt.fromI32(0)
        bridge.transferredToBSC = BigInt.fromI32(0)
    }

    let amount = event.params.amount

    bridge.totalTransferred = bridge.totalTransferred.plus(amount)
    bridge.transferredToBSC = bridge.transferredToBSC.plus(amount)
    bridge = updateBridgeTotalDate(bridge, BigInt.fromI32(0), event.params.amount, event.block.timestamp)
    bridge.save()
    bridge.id = event.block.timestamp.toString()
    bridge.save()

    updateParameters(event.block.timestamp)
}