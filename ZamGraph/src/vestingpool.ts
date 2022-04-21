import { BeneficiaryAdded } from "../generated/ZamVestingPool/ZamVestingPool"
import { TokenVesting } from "../generated/templates"
import { Vester, VestingCount } from "../generated/schema"
import { BigInt} from "@graphprotocol/graph-ts"
import { actual } from "./helping"
import { updateParameters } from "./financialparameters";
import { updateVestingDate } from "./historical"


export function handleBeneficiaryAdded(event: BeneficiaryAdded): void {
    let id_vest = event.params.vesting.toHex()

    let vester = new Vester(id_vest)
    vester.address = event.params.beneficiary.toHex()
    vester.balance = BigInt.fromI32(0)
    vester.balance_contract = event.params.amount
    vester.contract = id_vest
    vester.save()

    TokenVesting.create(event.params.vesting)

    let vestingCount = VestingCount.load(actual)

    if (vestingCount == null) {
        vestingCount = new VestingCount(actual)
        vestingCount.count = 0
        vestingCount.totalAssests = BigInt.fromI32(0)
    }

    vestingCount.count = vestingCount.count + 1
    vestingCount.totalAssests = vestingCount.totalAssests.plus(event.params.amount)
    vestingCount = updateVestingDate(vestingCount, event.block.timestamp)
    vestingCount.save()
    vestingCount.id = event.block.timestamp.toString()
    vestingCount.save()

    updateParameters(event.block.timestamp)
}