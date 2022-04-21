import { Address, BigInt, store } from "@graphprotocol/graph-ts"
import { Holder, HolderCount, TotalSupply, TransactionCount, TransferCount, 
    Participant, ParticipantCount} from "../generated/schema"
import {updateHolderDate, updateParicipantDate} from "./historical"


export let ADDRESS_ZERO = Address.fromHexString('0x0000000000000000000000000000000000000000')
export let ADDRESS_CREATOR = Address.fromHexString('0xa80BB6727BcB8116bBD7355384ED58B59c7B09a7')
export let ADDRESS_STAKE_REWARDS = Address.fromHexString('0x9633813343e61A70024c266Dd8376E2764641711')
export let ADDRESS_POOL = Address.fromHexString('0x3ccaD1a87f5DdCD7Af315D64006E2E9b4Dd7e807')

export let actual = 'singleton'

export function checkIfHolder(id: string): boolean {
    return Holder.load(id) != null
}

export function checkIfParticipant(id: string): boolean {
    return Participant.load(id) != null
}

export function createTotalSupply(id: string): TotalSupply {
    let totalSupply = new TotalSupply(id)
    totalSupply.supply = BigInt.fromI32(0)
    totalSupply.minted = BigInt.fromI32(0)
    totalSupply.burned = BigInt.fromI32(0)
    return totalSupply
}

export function createHolder(id: string, timestamp: BigInt): Holder {
    let holder = new Holder(id)
    holder.address = id
    holder.balance = BigInt.fromI32(0)
    holder.transactionCount = 0

    let holderCount = HolderCount.load(actual)
    if (holderCount == null) {
        holderCount = createHolderCount(actual)
    }
    holderCount.count = holderCount.count + 1
    holderCount = updateHolderDate(holderCount, timestamp) 
    holderCount.save()
    holderCount.id = timestamp.toString()
    holderCount.save()

    return holder
}

export function convertHolderToParticipant(id: string, timestamp: BigInt): void {
    let holder = Holder.load(id)

    // unreal situation
    if (holder == null) {
        return 
    }

    let particpant = new Participant(id)
    particpant.address = holder.address
    particpant.transactionCount = holder.transactionCount
    particpant.save()

    store.remove("Holder", id)

    let holderCount = HolderCount.load(actual)
    if (holderCount == null) {
        holderCount = createHolderCount(actual)
    }
    holderCount.count = holderCount.count - 1
    holderCount = updateHolderDate(holderCount, timestamp)
    holderCount.save()
    holderCount.id = timestamp.toString()
    holderCount.save()

    let particpantCount = ParticipantCount.load(actual)
    if (particpantCount == null) {
        particpantCount = createParticipantCount(actual)
    }
    particpantCount.count = particpantCount.count + 1
    particpantCount = updateParicipantDate(particpantCount, timestamp)
    particpantCount.save()
    particpantCount.id = timestamp.toString()
    particpantCount.save()
}

export function convertParticipantToHolder(id: string, timestamp: BigInt): void {
    let participant = Participant.load(id)
    
    // unreal situation
    if (participant == null) {
        return 
    }

    let holder = new Holder(id)
    holder.address = participant.address
    holder.balance = BigInt.fromI32(0)
    holder.transactionCount = participant.transactionCount
    holder.save()

    store.remove('Participant', id)

    let holderCount = HolderCount.load(actual)
    if (holderCount == null) {
        holderCount = createHolderCount(actual)
    }
    holderCount.count = holderCount.count + 1
    holderCount = updateHolderDate(holderCount, timestamp)
    holderCount.save()
    holderCount.id = timestamp.toString()
    holderCount.save()

    let particpantCount = ParticipantCount.load(actual)
    if (particpantCount == null) {
        particpantCount = createParticipantCount(actual)
    }

    particpantCount.count = particpantCount.count - 1
    particpantCount = updateParicipantDate(particpantCount, timestamp)
    particpantCount.save()
    particpantCount.id = timestamp.toString()
    particpantCount.save()
}

export function createTransactionCount(id: string): TransactionCount {
    let transactionCount = new TransactionCount(actual)
    transactionCount.count = 0
    return transactionCount
}

export function createTransferCount(id: string): TransferCount {
    let transferCount = new TransferCount(actual)
    transferCount.count = 0
    transferCount.totalTransferred = BigInt.fromI32(0)
    return transferCount
}

export function createHolderCount(id: string): HolderCount {
    let holderCount = new HolderCount(id)
    holderCount.count = 0
    return holderCount
}

export function createParticipantCount(id: string): ParticipantCount {
    let participantCount = new ParticipantCount(id)
    participantCount.count = 0
    return participantCount
}

