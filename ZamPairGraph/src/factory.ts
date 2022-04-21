import { BigDecimal} from "@graphprotocol/graph-ts"
import { PairCreated } from "../generated/PancakeFactory/PancakeFactory"
import { BEP20 } from "../generated/PancakeFactory/BEP20"
import { Pair} from "../generated/schema"
import { createTokenIfNotExist, ZAM_BSC_TOKEN } from "./helping"
import { PancakePair } from "../generated/templates"


export function handlePairCreated(event: PairCreated): void {
    let address0 = event.params.token0
    let address1 = event.params.token1
    if (address0 == ZAM_BSC_TOKEN || address1 == ZAM_BSC_TOKEN) {
      let contract_tkn0 = BEP20.bind(address0)
      let contract_tkn1 = BEP20.bind(address1)

      let token0 = createTokenIfNotExist(address0.toHex(), contract_tkn0)
      let token1 = createTokenIfNotExist(address1.toHex(), contract_tkn1)

      let pair = new Pair(event.params.pair.toHex())
      pair.token0 = token0.id
      pair.token1 = token1.id

      pair.reserve0 = BigDecimal.zero()
      pair.reserve1 = BigDecimal.zero()

      pair.totalSupply = BigDecimal.zero()

      pair.token0Price = BigDecimal.zero()
      pair.token1Price = BigDecimal.zero()

      pair.volumeToken0 = BigDecimal.zero()
      pair.volumeToken1 = BigDecimal.zero()

      PancakePair.create(event.params.pair)

      pair.save()
    }
}