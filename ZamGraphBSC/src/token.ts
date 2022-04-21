import { Address, BigInt, store } from "@graphprotocol/graph-ts"
import {
  ZamTokenBSC,
  Approval,
  OwnershipTransferred,
  Transfer
} from "../generated/ZamTokenBSC/ZamTokenBSC"
import { TotalSupply, Holder, Participant, TransferCount, TransactionCount } from "../generated/schema"
import { createTransactionCount, createTotalSupply, actual, 
      createTransferCount, ADDRESS_ZERO, createHolder, 
        convertParticipantToHolder, convertHolderToParticipant, checkIfParticipant, checkIfHolder } from "./helping"
import {getDateByTimestamp, updateTransactionDate, updateTransferDate, updateTotalSupplyDate} from "./historical"
import { updateParameters } from "./financialparameters"


export function handleTransfer(event: Transfer): void {
  let transactionCount = TransactionCount.load(actual)
  let timestamp = event.block.timestamp

  if (transactionCount == null) {
    transactionCount = createTransactionCount(actual)
  }

  let data = getDateByTimestamp(timestamp.toI32())
  transactionCount.count = transactionCount.count + 1
  transactionCount = updateTransactionDate(transactionCount, timestamp)
  transactionCount.save()
  transactionCount.id = event.block.timestamp.toString()
  transactionCount.save() 

  let transferCount = TransferCount.load(actual)

  if (transferCount == null) {
    transferCount = createTransferCount(actual)
  }

  transferCount.count = transferCount.count + 1
  transferCount.totalTransferred = transferCount.totalTransferred.plus(event.params.value)
  transferCount = updateTransferDate(transferCount, event.params.value, timestamp)
  transferCount.save()
  transferCount.id = event.block.timestamp.toString()
  transferCount.save()

  if (event.params.from == ADDRESS_ZERO) {
    handleMint(event)
    return
  } 

  if (event.params.to == ADDRESS_ZERO) {
    handleBurn(event)
    return 
  }

  let id_from = event.params.from.toHex()
  let holder_from = Holder.load(id_from)

  // unreal situation
  if (holder_from == null) {
    return 
  }

  holder_from.balance = holder_from.balance.minus(event.params.value)
  holder_from.transactionCount = holder_from.transactionCount + 1
  holder_from.save()
  
  if (holder_from.balance == BigInt.fromI32(0)) {
    convertHolderToParticipant(id_from, event.block.timestamp)
  }

  let id_to = event.params.to.toHex()

  if (checkIfParticipant(id_to)) {
    convertParticipantToHolder(id_to, event.block.timestamp)
  }  

  let holder_to = Holder.load(id_to)

  // when user is neither holder nor participant
  if (holder_to == null) {
    holder_to = createHolder(id_to, event.block.timestamp)
  }

  holder_to.balance = holder_to.balance.plus(event.params.value)
  holder_to.save()

  updateParameters(event.block.timestamp)
}


export function handleApproval(event: Approval): void {
  let transactionCount = TransactionCount.load(actual)
  let timestamp = event.block.timestamp

  if (transactionCount == null) {
    transactionCount = new TransactionCount(actual)
    transactionCount.count = 0
  }

 
  transactionCount.count = transactionCount.count + 1
  transactionCount = updateTransactionDate(transactionCount, timestamp) as TransactionCount
  transactionCount.save()
  transactionCount.id = timestamp.toString()
  transactionCount.save()

  let id = event.params.owner.toHex()

  if (checkIfHolder(id)) {
    let holder = Holder.load(id)!
    holder.transactionCount = holder.transactionCount + 1
    holder.save()
  } else if (checkIfParticipant(id)) {
    let participant = Participant.load(id)!
    participant.transactionCount = participant.transactionCount + 1
    participant.save()
  } else {
    let participant = new Participant(id)
    participant.transactionCount = 1
    participant.save()
  }
}


export function handleMint(event: Transfer): void {
  let timestamp = event.block.timestamp
  let id = event.params.to.toHex()

  let holder = Holder.load(id) 

  if (holder == null) {
    holder = createHolder(id, event.block.timestamp)
  }

  holder.balance = holder.balance.plus(event.params.value)
  holder.save()

  let totalSupply = TotalSupply.load(actual)

  if (totalSupply == null) {
    totalSupply = createTotalSupply(actual)
  }
  
  totalSupply = updateTotalSupplyDate(totalSupply, timestamp) as TotalSupply
  totalSupply.supply = totalSupply.supply.plus(event.params.value)
  totalSupply.minted = totalSupply.minted.plus(event.params.value)
  totalSupply.save()
  totalSupply.id = event.block.timestamp.toString()
  totalSupply.save()

  updateParameters(event.block.timestamp)
}


export function handleBurn(event: Transfer): void {
  let timestamp = event.block.timestamp
  let id = event.params.from.toHex()

  let holder = Holder.load(id) 

  // unreal situation

  if (holder == null) {
    return
  }

  holder.balance = holder.balance.minus(event.params.value)
  holder.transactionCount = holder.transactionCount + 1
  holder.save()

  if (holder.balance == BigInt.fromI32(0)) {
    convertHolderToParticipant(id, event.block.timestamp)
  }

  let totalSupply = TotalSupply.load(actual)

  // unreal situation
  if (totalSupply == null) {
    return;
  }

  totalSupply = updateTotalSupplyDate(totalSupply, timestamp)
  totalSupply.supply = totalSupply.supply.minus(event.params.value)
  totalSupply.burned = totalSupply.burned.plus(event.params.value)
  
  totalSupply.save()
  totalSupply.id = event.block.timestamp.toString()
  totalSupply.save()

  updateParameters(event.block.timestamp)
}