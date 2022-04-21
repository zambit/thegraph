import { Address, BigDecimal, BigInt } from "@graphprotocol/graph-ts"
import {BEP20} from "../generated/PancakeFactory/BEP20"
import { Pair, Token } from "../generated/schema"

export let ZAM_BSC_TOKEN = Address.fromHexString("0xbbcf57177d8752b21d080bf30a06ce20ad6333f8")
export let ADDRESS_ZERO = Address.zero()

export function createTokenIfNotExist(id: string, contract: BEP20): Token {
    let token = Token.load(id)
    if (token == null) {
        token = new Token(id)
        token.symbol = contract.symbol()
        token.name = contract.name()
        token.decimals = BigInt.fromI32(contract.decimals())
        token.save()
    }
    return token
} 

export function convertTokenToDecimal(tokenAmount: BigInt, exchangeDecimals: BigInt): BigDecimal {
    if (exchangeDecimals == BigInt.zero()) {
      return tokenAmount.toBigDecimal()
    }
    return tokenAmount.toBigDecimal().div(exponentToBigDecimal(exchangeDecimals))
  }

export function exponentToBigDecimal(decimals: BigInt): BigDecimal {
    let bd = BigDecimal.fromString('1')
    for (let i = BigInt.zero(); i.lt(decimals as BigInt); i = i.plus(BigInt.fromI32(1))) {
      bd = bd.times(BigDecimal.fromString('10'))
    }
    return bd
  }

  export function getDateByTimestamp(timestamp: i32): Uint32Array {
    var date = new Uint32Array(3)
    var z = timestamp / 86400 + 719468
    var era = (z >= 0 ? z : z - 146096) / 146097
    var doe = u32(z - era * 146097)
    var yoe = u32(doe - doe / 1460 + doe / 36524 - doe / 146096) / 365
    var y = i32(yoe) + era * 400
    var doy = u32(doe - (365 * yoe + yoe / 4 - yoe / 100))
    var mp = u32(5 * doy + 2) / 153
    var d = doy - (153 * mp + 2) / 5 + 1
    var m = mp + (mp < 10 ? 3 : -9)
    y += (m <= 2);
    date[0] = d
    date[1] = m
    date[2] = y
    return date
  }