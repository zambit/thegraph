import { BigInt } from "@graphprotocol/graph-ts"
import {Circulation, Blocked, TotalSupply, Holder, VestingCount, StackerCount} from "../generated/schema"
import { actual, ADDRESS_CREATOR, ADDRESS_POOL, ADDRESS_STAKE_REWARDS, ADDRESS_TEAM, ADDRESS_ECOSYSTEM, ADDRESS_MARKETING, ADDRESS_PARTNERSHIPS, ADDRESS_LIQUIDITY, ADDRESS_COMMUNITY, ADDRESS_AFFILIATE} from "./helping"
import { ADDRESS_INTERNAL_001,
ADDRESS_INTERNAL_002,
ADDRESS_INTERNAL_003,
ADDRESS_INTERNAL_004,
ADDRESS_INTERNAL_005,
ADDRESS_INTERNAL_006,
ADDRESS_INTERNAL_007,
ADDRESS_INTERNAL_008,
ADDRESS_INTERNAL_009,
ADDRESS_INTERNAL_010,
ADDRESS_INTERNAL_011,
ADDRESS_INTERNAL_012,
ADDRESS_INTERNAL_013,
ADDRESS_INTERNAL_014,
ADDRESS_INTERNAL_015,
ADDRESS_INTERNAL_016,
ADDRESS_INTERNAL_017,
ADDRESS_INTERNAL_018,
ADDRESS_INTERNAL_019,
ADDRESS_INTERNAL_020,
ADDRESS_INTERNAL_021,
ADDRESS_INTERNAL_022,
ADDRESS_INTERNAL_023,
ADDRESS_INTERNAL_024,
ADDRESS_INTERNAL_025,
ADDRESS_INTERNAL_026,
ADDRESS_INTERNAL_027,
ADDRESS_INTERNAL_028,
ADDRESS_INTERNAL_029,
ADDRESS_INTERNAL_030,
ADDRESS_INTERNAL_031,
ADDRESS_INTERNAL_032,
ADDRESS_INTERNAL_033,
ADDRESS_INTERNAL_034,
ADDRESS_INTERNAL_035,
ADDRESS_INTERNAL_036,
ADDRESS_INTERNAL_037,
ADDRESS_INTERNAL_038,
ADDRESS_INTERNAL_039,
ADDRESS_INTERNAL_040,
ADDRESS_INTERNAL_041,
ADDRESS_INTERNAL_042,
ADDRESS_INTERNAL_043,
ADDRESS_INTERNAL_044,
ADDRESS_INTERNAL_045,
ADDRESS_INTERNAL_046,
ADDRESS_INTERNAL_047,
ADDRESS_INTERNAL_048,
ADDRESS_INTERNAL_049,
ADDRESS_INTERNAL_050,
ADDRESS_INTERNAL_051,
ADDRESS_INTERNAL_052,
ADDRESS_INTERNAL_053,
ADDRESS_INTERNAL_054,
ADDRESS_INTERNAL_055,
ADDRESS_INTERNAL_056,
ADDRESS_INTERNAL_057,
ADDRESS_INTERNAL_058,
ADDRESS_INTERNAL_059,
ADDRESS_INTERNAL_060,
ADDRESS_INTERNAL_061,
ADDRESS_INTERNAL_062,
ADDRESS_INTERNAL_063,
ADDRESS_INTERNAL_064,
ADDRESS_INTERNAL_065,
ADDRESS_INTERNAL_066,
ADDRESS_INTERNAL_067,
ADDRESS_INTERNAL_068,
ADDRESS_INTERNAL_069,
ADDRESS_INTERNAL_070,
ADDRESS_INTERNAL_071,
ADDRESS_INTERNAL_072,
ADDRESS_INTERNAL_073,
ADDRESS_INTERNAL_074,
ADDRESS_INTERNAL_075,
ADDRESS_INTERNAL_076,
ADDRESS_INTERNAL_077,
ADDRESS_INTERNAL_078,
ADDRESS_INTERNAL_079,
ADDRESS_INTERNAL_080,
ADDRESS_INTERNAL_081,
ADDRESS_INTERNAL_082,
ADDRESS_INTERNAL_083,
ADDRESS_INTERNAL_084,
ADDRESS_INTERNAL_085,
ADDRESS_INTERNAL_086,
ADDRESS_INTERNAL_087,
ADDRESS_INTERNAL_088,
ADDRESS_INTERNAL_089,
ADDRESS_INTERNAL_090,
ADDRESS_INTERNAL_091,
ADDRESS_INTERNAL_092,
ADDRESS_INTERNAL_093,
ADDRESS_INTERNAL_094,
ADDRESS_INTERNAL_095,
ADDRESS_INTERNAL_096,
ADDRESS_INTERNAL_097,
ADDRESS_INTERNAL_098,
ADDRESS_INTERNAL_099,
ADDRESS_INTERNAL_100,
ADDRESS_INTERNAL_101,
ADDRESS_INTERNAL_102,
ADDRESS_INTERNAL_103,
ADDRESS_INTERNAL_104,
ADDRESS_INTERNAL_105,
ADDRESS_INTERNAL_106,
ADDRESS_INTERNAL_107,
ADDRESS_INTERNAL_108,
ADDRESS_INTERNAL_109,
ADDRESS_INTERNAL_110,
ADDRESS_INTERNAL_111,
ADDRESS_INTERNAL_112,
ADDRESS_INTERNAL_113,
ADDRESS_INTERNAL_114,
ADDRESS_INTERNAL_115,
ADDRESS_INTERNAL_116,
ADDRESS_INTERNAL_117,
ADDRESS_INTERNAL_118,
ADDRESS_INTERNAL_119,
ADDRESS_INTERNAL_120,
ADDRESS_INTERNAL_121,
ADDRESS_INTERNAL_122,
ADDRESS_INTERNAL_123,
ADDRESS_INTERNAL_124,
ADDRESS_INTERNAL_125,
ADDRESS_INTERNAL_126,
ADDRESS_INTERNAL_127,
ADDRESS_INTERNAL_128,
ADDRESS_INTERNAL_129,
ADDRESS_INTERNAL_130,
ADDRESS_INTERNAL_131,
ADDRESS_INTERNAL_132,
ADDRESS_INTERNAL_133,
ADDRESS_INTERNAL_134,
ADDRESS_INTERNAL_135,
ADDRESS_INTERNAL_136,
ADDRESS_INTERNAL_137,
ADDRESS_INTERNAL_138,
ADDRESS_INTERNAL_139,
ADDRESS_INTERNAL_140,
ADDRESS_INTERNAL_141,
ADDRESS_INTERNAL_142,
ADDRESS_INTERNAL_143,
ADDRESS_INTERNAL_144,
ADDRESS_INTERNAL_145,
ADDRESS_INTERNAL_146,
ADDRESS_INTERNAL_147,
ADDRESS_INTERNAL_148,
ADDRESS_INTERNAL_149,
ADDRESS_INTERNAL_150,
ADDRESS_INTERNAL_151,
ADDRESS_INTERNAL_152,
ADDRESS_INTERNAL_153,
ADDRESS_INTERNAL_154,
ADDRESS_INTERNAL_155,
ADDRESS_INTERNAL_156,
ADDRESS_INTERNAL_157,
ADDRESS_INTERNAL_158,
ADDRESS_INTERNAL_159,
ADDRESS_INTERNAL_160,
ADDRESS_INTERNAL_161,
ADDRESS_INTERNAL_162,
ADDRESS_INTERNAL_163,
ADDRESS_INTERNAL_164,
ADDRESS_INTERNAL_165,
ADDRESS_INTERNAL_166,
ADDRESS_INTERNAL_167,
ADDRESS_INTERNAL_168,
ADDRESS_INTERNAL_169,
ADDRESS_INTERNAL_170,
ADDRESS_INTERNAL_171,
ADDRESS_INTERNAL_172,
ADDRESS_INTERNAL_173,
ADDRESS_INTERNAL_174,
ADDRESS_INTERNAL_175,
ADDRESS_INTERNAL_176,
ADDRESS_INTERNAL_177,
ADDRESS_INTERNAL_178,
ADDRESS_INTERNAL_179,
ADDRESS_INTERNAL_180,
ADDRESS_INTERNAL_181,
ADDRESS_INTERNAL_182,
ADDRESS_INTERNAL_183,
ADDRESS_INTERNAL_184,
ADDRESS_INTERNAL_185,
ADDRESS_INTERNAL_186,
ADDRESS_INTERNAL_187,
ADDRESS_INTERNAL_188,
ADDRESS_INTERNAL_189,
ADDRESS_INTERNAL_190,
ADDRESS_INTERNAL_191,
ADDRESS_INTERNAL_192,
ADDRESS_INTERNAL_193,
ADDRESS_INTERNAL_194,
ADDRESS_INTERNAL_195,
ADDRESS_INTERNAL_196,
ADDRESS_INTERNAL_197,
ADDRESS_INTERNAL_198,
ADDRESS_INTERNAL_199,
ADDRESS_INTERNAL_200,
ADDRESS_INTERNAL_201,
ADDRESS_INTERNAL_202,
ADDRESS_INTERNAL_203,
ADDRESS_INTERNAL_204,
ADDRESS_INTERNAL_205,
ADDRESS_INTERNAL_206,
ADDRESS_INTERNAL_207,
ADDRESS_INTERNAL_208,
ADDRESS_INTERNAL_209,
ADDRESS_INTERNAL_210,
ADDRESS_INTERNAL_211,
ADDRESS_INTERNAL_212,
ADDRESS_INTERNAL_213,
ADDRESS_INTERNAL_214,
ADDRESS_INTERNAL_215,
ADDRESS_INTERNAL_216,
ADDRESS_INTERNAL_217,
ADDRESS_INTERNAL_218,
ADDRESS_INTERNAL_219,
ADDRESS_INTERNAL_220,
ADDRESS_INTERNAL_221,
ADDRESS_INTERNAL_222,
ADDRESS_INTERNAL_223,
ADDRESS_INTERNAL_224,
ADDRESS_INTERNAL_225,
ADDRESS_INTERNAL_226,
ADDRESS_INTERNAL_227 } from "./helping"
import { updateBlockedDate, updateCirculationDate } from "./historical"

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

    let creator = Holder.load(ADDRESS_CREATOR.toHex())
    let stacker_reward = Holder.load(ADDRESS_STAKE_REWARDS.toHex())
    let pool = Holder.load(ADDRESS_POOL.toHex())
    let vesting = VestingCount.load(actual)
    let stacking = StackerCount.load(actual)
    let team = Holder.load(ADDRESS_TEAM.toHex())
    let ecosystem = Holder.load(ADDRESS_ECOSYSTEM.toHex())
    let marketing = Holder.load(ADDRESS_MARKETING.toHex())
    let partnerships = Holder.load(ADDRESS_PARTNERSHIPS.toHex())
    let lequidity = Holder.load(ADDRESS_LIQUIDITY.toHex())
    let community = Holder.load(ADDRESS_COMMUNITY.toHex())
    let affiliate = Holder.load(ADDRESS_AFFILIATE.toHex())

    let	internal_001= Holder.load(ADDRESS_INTERNAL_001.toHex())
    let	internal_002= Holder.load(ADDRESS_INTERNAL_002.toHex())
    let	internal_003= Holder.load(ADDRESS_INTERNAL_003.toHex())
    let	internal_004= Holder.load(ADDRESS_INTERNAL_004.toHex())
    let	internal_005= Holder.load(ADDRESS_INTERNAL_005.toHex())
    let	internal_006= Holder.load(ADDRESS_INTERNAL_006.toHex())
    let	internal_007= Holder.load(ADDRESS_INTERNAL_007.toHex())
    let	internal_008= Holder.load(ADDRESS_INTERNAL_008.toHex())
    let	internal_009= Holder.load(ADDRESS_INTERNAL_009.toHex())
    let	internal_010= Holder.load(ADDRESS_INTERNAL_010.toHex())
    let	internal_011= Holder.load(ADDRESS_INTERNAL_011.toHex())
    let	internal_012= Holder.load(ADDRESS_INTERNAL_012.toHex())
    let	internal_013= Holder.load(ADDRESS_INTERNAL_013.toHex())
    let	internal_014= Holder.load(ADDRESS_INTERNAL_014.toHex())
    let	internal_015= Holder.load(ADDRESS_INTERNAL_015.toHex())
    let	internal_016= Holder.load(ADDRESS_INTERNAL_016.toHex())
    let	internal_017= Holder.load(ADDRESS_INTERNAL_017.toHex())
    let	internal_018= Holder.load(ADDRESS_INTERNAL_018.toHex())
    let	internal_019= Holder.load(ADDRESS_INTERNAL_019.toHex())
    let	internal_020= Holder.load(ADDRESS_INTERNAL_020.toHex())
    let	internal_021= Holder.load(ADDRESS_INTERNAL_021.toHex())
    let	internal_022= Holder.load(ADDRESS_INTERNAL_022.toHex())
    let	internal_023= Holder.load(ADDRESS_INTERNAL_023.toHex())
    let	internal_024= Holder.load(ADDRESS_INTERNAL_024.toHex())
    let	internal_025= Holder.load(ADDRESS_INTERNAL_025.toHex())
    let	internal_026= Holder.load(ADDRESS_INTERNAL_026.toHex())
    let	internal_027= Holder.load(ADDRESS_INTERNAL_027.toHex())
    let	internal_028= Holder.load(ADDRESS_INTERNAL_028.toHex())
    let	internal_029= Holder.load(ADDRESS_INTERNAL_029.toHex())
    let	internal_030= Holder.load(ADDRESS_INTERNAL_030.toHex())
    let	internal_031= Holder.load(ADDRESS_INTERNAL_031.toHex())
    let	internal_032= Holder.load(ADDRESS_INTERNAL_032.toHex())
    let	internal_033= Holder.load(ADDRESS_INTERNAL_033.toHex())
    let	internal_034= Holder.load(ADDRESS_INTERNAL_034.toHex())
    let	internal_035= Holder.load(ADDRESS_INTERNAL_035.toHex())
    let	internal_036= Holder.load(ADDRESS_INTERNAL_036.toHex())
    let	internal_037= Holder.load(ADDRESS_INTERNAL_037.toHex())
    let	internal_038= Holder.load(ADDRESS_INTERNAL_038.toHex())
    let	internal_039= Holder.load(ADDRESS_INTERNAL_039.toHex())
    let	internal_040= Holder.load(ADDRESS_INTERNAL_040.toHex())
    let	internal_041= Holder.load(ADDRESS_INTERNAL_041.toHex())
    let	internal_042= Holder.load(ADDRESS_INTERNAL_042.toHex())
    let	internal_043= Holder.load(ADDRESS_INTERNAL_043.toHex())
    let	internal_044= Holder.load(ADDRESS_INTERNAL_044.toHex())
    let	internal_045= Holder.load(ADDRESS_INTERNAL_045.toHex())
    let	internal_046= Holder.load(ADDRESS_INTERNAL_046.toHex())
    let	internal_047= Holder.load(ADDRESS_INTERNAL_047.toHex())
    let	internal_048= Holder.load(ADDRESS_INTERNAL_048.toHex())
    let	internal_049= Holder.load(ADDRESS_INTERNAL_049.toHex())
    let	internal_050= Holder.load(ADDRESS_INTERNAL_050.toHex())
    let	internal_051= Holder.load(ADDRESS_INTERNAL_051.toHex())
    let	internal_052= Holder.load(ADDRESS_INTERNAL_052.toHex())
    let	internal_053= Holder.load(ADDRESS_INTERNAL_053.toHex())
    let	internal_054= Holder.load(ADDRESS_INTERNAL_054.toHex())
    let	internal_055= Holder.load(ADDRESS_INTERNAL_055.toHex())
    let	internal_056= Holder.load(ADDRESS_INTERNAL_056.toHex())
    let	internal_057= Holder.load(ADDRESS_INTERNAL_057.toHex())
    let	internal_058= Holder.load(ADDRESS_INTERNAL_058.toHex())
    let	internal_059= Holder.load(ADDRESS_INTERNAL_059.toHex())
    let	internal_060= Holder.load(ADDRESS_INTERNAL_060.toHex())
    let	internal_061= Holder.load(ADDRESS_INTERNAL_061.toHex())
    let	internal_062= Holder.load(ADDRESS_INTERNAL_062.toHex())
    let	internal_063= Holder.load(ADDRESS_INTERNAL_063.toHex())
    let	internal_064= Holder.load(ADDRESS_INTERNAL_064.toHex())
    let	internal_065= Holder.load(ADDRESS_INTERNAL_065.toHex())
    let	internal_066= Holder.load(ADDRESS_INTERNAL_066.toHex())
    let	internal_067= Holder.load(ADDRESS_INTERNAL_067.toHex())
    let	internal_068= Holder.load(ADDRESS_INTERNAL_068.toHex())
    let	internal_069= Holder.load(ADDRESS_INTERNAL_069.toHex())
    let	internal_070= Holder.load(ADDRESS_INTERNAL_070.toHex())
    let	internal_071= Holder.load(ADDRESS_INTERNAL_071.toHex())
    let	internal_072= Holder.load(ADDRESS_INTERNAL_072.toHex())
    let	internal_073= Holder.load(ADDRESS_INTERNAL_073.toHex())
    let	internal_074= Holder.load(ADDRESS_INTERNAL_074.toHex())
    let	internal_075= Holder.load(ADDRESS_INTERNAL_075.toHex())
    let	internal_076= Holder.load(ADDRESS_INTERNAL_076.toHex())
    let	internal_077= Holder.load(ADDRESS_INTERNAL_077.toHex())
    let	internal_078= Holder.load(ADDRESS_INTERNAL_078.toHex())
    let	internal_079= Holder.load(ADDRESS_INTERNAL_079.toHex())
    let	internal_080= Holder.load(ADDRESS_INTERNAL_080.toHex())
    let	internal_081= Holder.load(ADDRESS_INTERNAL_081.toHex())
    let	internal_082= Holder.load(ADDRESS_INTERNAL_082.toHex())
    let	internal_083= Holder.load(ADDRESS_INTERNAL_083.toHex())
    let	internal_084= Holder.load(ADDRESS_INTERNAL_084.toHex())
    let	internal_085= Holder.load(ADDRESS_INTERNAL_085.toHex())
    let	internal_086= Holder.load(ADDRESS_INTERNAL_086.toHex())
    let	internal_087= Holder.load(ADDRESS_INTERNAL_087.toHex())
    let	internal_088= Holder.load(ADDRESS_INTERNAL_088.toHex())
    let	internal_089= Holder.load(ADDRESS_INTERNAL_089.toHex())
    let	internal_090= Holder.load(ADDRESS_INTERNAL_090.toHex())
    let	internal_091= Holder.load(ADDRESS_INTERNAL_091.toHex())
    let	internal_092= Holder.load(ADDRESS_INTERNAL_092.toHex())
    let	internal_093= Holder.load(ADDRESS_INTERNAL_093.toHex())
    let	internal_094= Holder.load(ADDRESS_INTERNAL_094.toHex())
    let	internal_095= Holder.load(ADDRESS_INTERNAL_095.toHex())
    let	internal_096= Holder.load(ADDRESS_INTERNAL_096.toHex())
    let	internal_097= Holder.load(ADDRESS_INTERNAL_097.toHex())
    let	internal_098= Holder.load(ADDRESS_INTERNAL_098.toHex())
    let	internal_099= Holder.load(ADDRESS_INTERNAL_099.toHex())
    let	internal_100= Holder.load(ADDRESS_INTERNAL_100.toHex())
    let	internal_101= Holder.load(ADDRESS_INTERNAL_101.toHex())
    let	internal_102= Holder.load(ADDRESS_INTERNAL_102.toHex())
    let	internal_103= Holder.load(ADDRESS_INTERNAL_103.toHex())
    let	internal_104= Holder.load(ADDRESS_INTERNAL_104.toHex())
    let	internal_105= Holder.load(ADDRESS_INTERNAL_105.toHex())
    let	internal_106= Holder.load(ADDRESS_INTERNAL_106.toHex())
    let	internal_107= Holder.load(ADDRESS_INTERNAL_107.toHex())
    let	internal_108= Holder.load(ADDRESS_INTERNAL_108.toHex())
    let	internal_109= Holder.load(ADDRESS_INTERNAL_109.toHex())
    let	internal_110= Holder.load(ADDRESS_INTERNAL_110.toHex())
    let	internal_111= Holder.load(ADDRESS_INTERNAL_111.toHex())
    let	internal_112= Holder.load(ADDRESS_INTERNAL_112.toHex())
    let	internal_113= Holder.load(ADDRESS_INTERNAL_113.toHex())
    let	internal_114= Holder.load(ADDRESS_INTERNAL_114.toHex())
    let	internal_115= Holder.load(ADDRESS_INTERNAL_115.toHex())
    let	internal_116= Holder.load(ADDRESS_INTERNAL_116.toHex())
    let	internal_117= Holder.load(ADDRESS_INTERNAL_117.toHex())
    let	internal_118= Holder.load(ADDRESS_INTERNAL_118.toHex())
    let	internal_119= Holder.load(ADDRESS_INTERNAL_119.toHex())
    let	internal_120= Holder.load(ADDRESS_INTERNAL_120.toHex())
    let	internal_121= Holder.load(ADDRESS_INTERNAL_121.toHex())
    let	internal_122= Holder.load(ADDRESS_INTERNAL_122.toHex())
    let	internal_123= Holder.load(ADDRESS_INTERNAL_123.toHex())
    let	internal_124= Holder.load(ADDRESS_INTERNAL_124.toHex())
    let	internal_125= Holder.load(ADDRESS_INTERNAL_125.toHex())
    let	internal_126= Holder.load(ADDRESS_INTERNAL_126.toHex())
    let	internal_127= Holder.load(ADDRESS_INTERNAL_127.toHex())
    let	internal_128= Holder.load(ADDRESS_INTERNAL_128.toHex())
    let	internal_129= Holder.load(ADDRESS_INTERNAL_129.toHex())
    let	internal_130= Holder.load(ADDRESS_INTERNAL_130.toHex())
    let	internal_131= Holder.load(ADDRESS_INTERNAL_131.toHex())
    let	internal_132= Holder.load(ADDRESS_INTERNAL_132.toHex())
    let	internal_133= Holder.load(ADDRESS_INTERNAL_133.toHex())
    let	internal_134= Holder.load(ADDRESS_INTERNAL_134.toHex())
    let	internal_135= Holder.load(ADDRESS_INTERNAL_135.toHex())
    let	internal_136= Holder.load(ADDRESS_INTERNAL_136.toHex())
    let	internal_137= Holder.load(ADDRESS_INTERNAL_137.toHex())
    let	internal_138= Holder.load(ADDRESS_INTERNAL_138.toHex())
    let	internal_139= Holder.load(ADDRESS_INTERNAL_139.toHex())
    let	internal_140= Holder.load(ADDRESS_INTERNAL_140.toHex())
    let	internal_141= Holder.load(ADDRESS_INTERNAL_141.toHex())
    let	internal_142= Holder.load(ADDRESS_INTERNAL_142.toHex())
    let	internal_143= Holder.load(ADDRESS_INTERNAL_143.toHex())
    let	internal_144= Holder.load(ADDRESS_INTERNAL_144.toHex())
    let	internal_145= Holder.load(ADDRESS_INTERNAL_145.toHex())
    let	internal_146= Holder.load(ADDRESS_INTERNAL_146.toHex())
    let	internal_147= Holder.load(ADDRESS_INTERNAL_147.toHex())
    let	internal_148= Holder.load(ADDRESS_INTERNAL_148.toHex())
    let	internal_149= Holder.load(ADDRESS_INTERNAL_149.toHex())
    let	internal_150= Holder.load(ADDRESS_INTERNAL_150.toHex())
    let	internal_151= Holder.load(ADDRESS_INTERNAL_151.toHex())
    let	internal_152= Holder.load(ADDRESS_INTERNAL_152.toHex())
    let	internal_153= Holder.load(ADDRESS_INTERNAL_153.toHex())
    let	internal_154= Holder.load(ADDRESS_INTERNAL_154.toHex())
    let	internal_155= Holder.load(ADDRESS_INTERNAL_155.toHex())
    let	internal_156= Holder.load(ADDRESS_INTERNAL_156.toHex())
    let	internal_157= Holder.load(ADDRESS_INTERNAL_157.toHex())
    let	internal_158= Holder.load(ADDRESS_INTERNAL_158.toHex())
    let	internal_159= Holder.load(ADDRESS_INTERNAL_159.toHex())
    let	internal_160= Holder.load(ADDRESS_INTERNAL_160.toHex())
    let	internal_161= Holder.load(ADDRESS_INTERNAL_161.toHex())
    let	internal_162= Holder.load(ADDRESS_INTERNAL_162.toHex())
    let	internal_163= Holder.load(ADDRESS_INTERNAL_163.toHex())
    let	internal_164= Holder.load(ADDRESS_INTERNAL_164.toHex())
    let	internal_165= Holder.load(ADDRESS_INTERNAL_165.toHex())
    let	internal_166= Holder.load(ADDRESS_INTERNAL_166.toHex())
    let	internal_167= Holder.load(ADDRESS_INTERNAL_167.toHex())
    let	internal_168= Holder.load(ADDRESS_INTERNAL_168.toHex())
    let	internal_169= Holder.load(ADDRESS_INTERNAL_169.toHex())
    let	internal_170= Holder.load(ADDRESS_INTERNAL_170.toHex())
    let	internal_171= Holder.load(ADDRESS_INTERNAL_171.toHex())
    let	internal_172= Holder.load(ADDRESS_INTERNAL_172.toHex())
    let	internal_173= Holder.load(ADDRESS_INTERNAL_173.toHex())
    let	internal_174= Holder.load(ADDRESS_INTERNAL_174.toHex())
    let	internal_175= Holder.load(ADDRESS_INTERNAL_175.toHex())
    let	internal_176= Holder.load(ADDRESS_INTERNAL_176.toHex())
    let	internal_177= Holder.load(ADDRESS_INTERNAL_177.toHex())
    let	internal_178= Holder.load(ADDRESS_INTERNAL_178.toHex())
    let	internal_179= Holder.load(ADDRESS_INTERNAL_179.toHex())
    let	internal_180= Holder.load(ADDRESS_INTERNAL_180.toHex())
    let	internal_181= Holder.load(ADDRESS_INTERNAL_181.toHex())
    let	internal_182= Holder.load(ADDRESS_INTERNAL_182.toHex())
    let	internal_183= Holder.load(ADDRESS_INTERNAL_183.toHex())
    let	internal_184= Holder.load(ADDRESS_INTERNAL_184.toHex())
    let	internal_185= Holder.load(ADDRESS_INTERNAL_185.toHex())
    let	internal_186= Holder.load(ADDRESS_INTERNAL_186.toHex())
    let	internal_187= Holder.load(ADDRESS_INTERNAL_187.toHex())
    let	internal_188= Holder.load(ADDRESS_INTERNAL_188.toHex())
    let	internal_189= Holder.load(ADDRESS_INTERNAL_189.toHex())
    let	internal_190= Holder.load(ADDRESS_INTERNAL_190.toHex())
    let	internal_191= Holder.load(ADDRESS_INTERNAL_191.toHex())
    let	internal_192= Holder.load(ADDRESS_INTERNAL_192.toHex())
    let	internal_193= Holder.load(ADDRESS_INTERNAL_193.toHex())
    let	internal_194= Holder.load(ADDRESS_INTERNAL_194.toHex())
    let	internal_195= Holder.load(ADDRESS_INTERNAL_195.toHex())
    let	internal_196= Holder.load(ADDRESS_INTERNAL_196.toHex())
    let	internal_197= Holder.load(ADDRESS_INTERNAL_197.toHex())
    let	internal_198= Holder.load(ADDRESS_INTERNAL_198.toHex())
    let	internal_199= Holder.load(ADDRESS_INTERNAL_199.toHex())
    let	internal_200= Holder.load(ADDRESS_INTERNAL_200.toHex())
    let	internal_201= Holder.load(ADDRESS_INTERNAL_201.toHex())
    let	internal_202= Holder.load(ADDRESS_INTERNAL_202.toHex())
    let	internal_203= Holder.load(ADDRESS_INTERNAL_203.toHex())
    let	internal_204= Holder.load(ADDRESS_INTERNAL_204.toHex())
    let	internal_205= Holder.load(ADDRESS_INTERNAL_205.toHex())
    let	internal_206= Holder.load(ADDRESS_INTERNAL_206.toHex())
    let	internal_207= Holder.load(ADDRESS_INTERNAL_207.toHex())
    let	internal_208= Holder.load(ADDRESS_INTERNAL_208.toHex())
    let	internal_209= Holder.load(ADDRESS_INTERNAL_209.toHex())
    let	internal_210= Holder.load(ADDRESS_INTERNAL_210.toHex())
    let	internal_211= Holder.load(ADDRESS_INTERNAL_211.toHex())
    let	internal_212= Holder.load(ADDRESS_INTERNAL_212.toHex())
    let	internal_213= Holder.load(ADDRESS_INTERNAL_213.toHex())
    let	internal_214= Holder.load(ADDRESS_INTERNAL_214.toHex())
    let	internal_215= Holder.load(ADDRESS_INTERNAL_215.toHex())
    let	internal_216= Holder.load(ADDRESS_INTERNAL_216.toHex())
    let	internal_217= Holder.load(ADDRESS_INTERNAL_217.toHex())
    let	internal_218= Holder.load(ADDRESS_INTERNAL_218.toHex())
    let	internal_219= Holder.load(ADDRESS_INTERNAL_219.toHex())
    let	internal_220= Holder.load(ADDRESS_INTERNAL_220.toHex())
    let	internal_221= Holder.load(ADDRESS_INTERNAL_221.toHex())
    let	internal_222= Holder.load(ADDRESS_INTERNAL_222.toHex())
    let	internal_223= Holder.load(ADDRESS_INTERNAL_223.toHex())
    let	internal_224= Holder.load(ADDRESS_INTERNAL_224.toHex())
    let	internal_225= Holder.load(ADDRESS_INTERNAL_225.toHex())
    let	internal_226= Holder.load(ADDRESS_INTERNAL_226.toHex())
    let	internal_227= Holder.load(ADDRESS_INTERNAL_227.toHex())

    let balance_creator = BigInt.fromI32(0)
    let balance_stacking_rewards = BigInt.fromI32(0)
    let balance_pool = BigInt.fromI32(0)
    let balance_vesting = BigInt.fromI32(0)
    let balance_stacking = BigInt.fromI32(0)
    let balance_team = BigInt.fromI32(0)
    let balance_ecosystem = BigInt.fromI32(0)
    let balance_marketing = BigInt.fromI32(0)
    let balance_partnerships = BigInt.fromI32(0)
    let balance_lequidity = BigInt.fromI32(0)
    let balance_community = BigInt.fromI32(0)
    let balance_affiliate = BigInt.fromI32(0)
    let	balance_internal_001 = BigInt.fromI32(0)
    let	balance_internal_002 = BigInt.fromI32(0)
    let	balance_internal_003 = BigInt.fromI32(0)
    let	balance_internal_004 = BigInt.fromI32(0)
    let	balance_internal_005 = BigInt.fromI32(0)
    let	balance_internal_006 = BigInt.fromI32(0)
    let	balance_internal_007 = BigInt.fromI32(0)
    let	balance_internal_008 = BigInt.fromI32(0)
    let	balance_internal_009 = BigInt.fromI32(0)
    let	balance_internal_010 = BigInt.fromI32(0)
    let	balance_internal_011 = BigInt.fromI32(0)
    let	balance_internal_012 = BigInt.fromI32(0)
    let	balance_internal_013 = BigInt.fromI32(0)
    let	balance_internal_014 = BigInt.fromI32(0)
    let	balance_internal_015 = BigInt.fromI32(0)
    let	balance_internal_016 = BigInt.fromI32(0)
    let	balance_internal_017 = BigInt.fromI32(0)
    let	balance_internal_018 = BigInt.fromI32(0)
    let	balance_internal_019 = BigInt.fromI32(0)
    let	balance_internal_020 = BigInt.fromI32(0)
    let	balance_internal_021 = BigInt.fromI32(0)
    let	balance_internal_022 = BigInt.fromI32(0)
    let	balance_internal_023 = BigInt.fromI32(0)
    let	balance_internal_024 = BigInt.fromI32(0)
    let	balance_internal_025 = BigInt.fromI32(0)
    let	balance_internal_026 = BigInt.fromI32(0)
    let	balance_internal_027 = BigInt.fromI32(0)
    let	balance_internal_028 = BigInt.fromI32(0)
    let	balance_internal_029 = BigInt.fromI32(0)
    let	balance_internal_030 = BigInt.fromI32(0)
    let	balance_internal_031 = BigInt.fromI32(0)
    let	balance_internal_032 = BigInt.fromI32(0)
    let	balance_internal_033 = BigInt.fromI32(0)
    let	balance_internal_034 = BigInt.fromI32(0)
    let	balance_internal_035 = BigInt.fromI32(0)
    let	balance_internal_036 = BigInt.fromI32(0)
    let	balance_internal_037 = BigInt.fromI32(0)
    let	balance_internal_038 = BigInt.fromI32(0)
    let	balance_internal_039 = BigInt.fromI32(0)
    let	balance_internal_040 = BigInt.fromI32(0)
    let	balance_internal_041 = BigInt.fromI32(0)
    let	balance_internal_042 = BigInt.fromI32(0)
    let	balance_internal_043 = BigInt.fromI32(0)
    let	balance_internal_044 = BigInt.fromI32(0)
    let	balance_internal_045 = BigInt.fromI32(0)
    let	balance_internal_046 = BigInt.fromI32(0)
    let	balance_internal_047 = BigInt.fromI32(0)
    let	balance_internal_048 = BigInt.fromI32(0)
    let	balance_internal_049 = BigInt.fromI32(0)
    let	balance_internal_050 = BigInt.fromI32(0)
    let	balance_internal_051 = BigInt.fromI32(0)
    let	balance_internal_052 = BigInt.fromI32(0)
    let	balance_internal_053 = BigInt.fromI32(0)
    let	balance_internal_054 = BigInt.fromI32(0)
    let	balance_internal_055 = BigInt.fromI32(0)
    let	balance_internal_056 = BigInt.fromI32(0)
    let	balance_internal_057 = BigInt.fromI32(0)
    let	balance_internal_058 = BigInt.fromI32(0)
    let	balance_internal_059 = BigInt.fromI32(0)
    let	balance_internal_060 = BigInt.fromI32(0)
    let	balance_internal_061 = BigInt.fromI32(0)
    let	balance_internal_062 = BigInt.fromI32(0)
    let	balance_internal_063 = BigInt.fromI32(0)
    let	balance_internal_064 = BigInt.fromI32(0)
    let	balance_internal_065 = BigInt.fromI32(0)
    let	balance_internal_066 = BigInt.fromI32(0)
    let	balance_internal_067 = BigInt.fromI32(0)
    let	balance_internal_068 = BigInt.fromI32(0)
    let	balance_internal_069 = BigInt.fromI32(0)
    let	balance_internal_070 = BigInt.fromI32(0)
    let	balance_internal_071 = BigInt.fromI32(0)
    let	balance_internal_072 = BigInt.fromI32(0)
    let	balance_internal_073 = BigInt.fromI32(0)
    let	balance_internal_074 = BigInt.fromI32(0)
    let	balance_internal_075 = BigInt.fromI32(0)
    let	balance_internal_076 = BigInt.fromI32(0)
    let	balance_internal_077 = BigInt.fromI32(0)
    let	balance_internal_078 = BigInt.fromI32(0)
    let	balance_internal_079 = BigInt.fromI32(0)
    let	balance_internal_080 = BigInt.fromI32(0)
    let	balance_internal_081 = BigInt.fromI32(0)
    let	balance_internal_082 = BigInt.fromI32(0)
    let	balance_internal_083 = BigInt.fromI32(0)
    let	balance_internal_084 = BigInt.fromI32(0)
    let	balance_internal_085 = BigInt.fromI32(0)
    let	balance_internal_086 = BigInt.fromI32(0)
    let	balance_internal_087 = BigInt.fromI32(0)
    let	balance_internal_088 = BigInt.fromI32(0)
    let	balance_internal_089 = BigInt.fromI32(0)
    let	balance_internal_090 = BigInt.fromI32(0)
    let	balance_internal_091 = BigInt.fromI32(0)
    let	balance_internal_092 = BigInt.fromI32(0)
    let	balance_internal_093 = BigInt.fromI32(0)
    let	balance_internal_094 = BigInt.fromI32(0)
    let	balance_internal_095 = BigInt.fromI32(0)
    let	balance_internal_096 = BigInt.fromI32(0)
    let	balance_internal_097 = BigInt.fromI32(0)
    let	balance_internal_098 = BigInt.fromI32(0)
    let	balance_internal_099 = BigInt.fromI32(0)
    let	balance_internal_100 = BigInt.fromI32(0)
    let	balance_internal_101 = BigInt.fromI32(0)
    let	balance_internal_102 = BigInt.fromI32(0)
    let	balance_internal_103 = BigInt.fromI32(0)
    let	balance_internal_104 = BigInt.fromI32(0)
    let	balance_internal_105 = BigInt.fromI32(0)
    let	balance_internal_106 = BigInt.fromI32(0)
    let	balance_internal_107 = BigInt.fromI32(0)
    let	balance_internal_108 = BigInt.fromI32(0)
    let	balance_internal_109 = BigInt.fromI32(0)
    let	balance_internal_110 = BigInt.fromI32(0)
    let	balance_internal_111 = BigInt.fromI32(0)
    let	balance_internal_112 = BigInt.fromI32(0)
    let	balance_internal_113 = BigInt.fromI32(0)
    let	balance_internal_114 = BigInt.fromI32(0)
    let	balance_internal_115 = BigInt.fromI32(0)
    let	balance_internal_116 = BigInt.fromI32(0)
    let	balance_internal_117 = BigInt.fromI32(0)
    let	balance_internal_118 = BigInt.fromI32(0)
    let	balance_internal_119 = BigInt.fromI32(0)
    let	balance_internal_120 = BigInt.fromI32(0)
    let	balance_internal_121 = BigInt.fromI32(0)
    let	balance_internal_122 = BigInt.fromI32(0)
    let	balance_internal_123 = BigInt.fromI32(0)
    let	balance_internal_124 = BigInt.fromI32(0)
    let	balance_internal_125 = BigInt.fromI32(0)
    let	balance_internal_126 = BigInt.fromI32(0)
    let	balance_internal_127 = BigInt.fromI32(0)
    let	balance_internal_128 = BigInt.fromI32(0)
    let	balance_internal_129 = BigInt.fromI32(0)
    let	balance_internal_130 = BigInt.fromI32(0)
    let	balance_internal_131 = BigInt.fromI32(0)
    let	balance_internal_132 = BigInt.fromI32(0)
    let	balance_internal_133 = BigInt.fromI32(0)
    let	balance_internal_134 = BigInt.fromI32(0)
    let	balance_internal_135 = BigInt.fromI32(0)
    let	balance_internal_136 = BigInt.fromI32(0)
    let	balance_internal_137 = BigInt.fromI32(0)
    let	balance_internal_138 = BigInt.fromI32(0)
    let	balance_internal_139 = BigInt.fromI32(0)
    let	balance_internal_140 = BigInt.fromI32(0)
    let	balance_internal_141 = BigInt.fromI32(0)
    let	balance_internal_142 = BigInt.fromI32(0)
    let	balance_internal_143 = BigInt.fromI32(0)
    let	balance_internal_144 = BigInt.fromI32(0)
    let	balance_internal_145 = BigInt.fromI32(0)
    let	balance_internal_146 = BigInt.fromI32(0)
    let	balance_internal_147 = BigInt.fromI32(0)
    let	balance_internal_148 = BigInt.fromI32(0)
    let	balance_internal_149 = BigInt.fromI32(0)
    let	balance_internal_150 = BigInt.fromI32(0)
    let	balance_internal_151 = BigInt.fromI32(0)
    let	balance_internal_152 = BigInt.fromI32(0)
    let	balance_internal_153 = BigInt.fromI32(0)
    let	balance_internal_154 = BigInt.fromI32(0)
    let	balance_internal_155 = BigInt.fromI32(0)
    let	balance_internal_156 = BigInt.fromI32(0)
    let	balance_internal_157 = BigInt.fromI32(0)
    let	balance_internal_158 = BigInt.fromI32(0)
    let	balance_internal_159 = BigInt.fromI32(0)
    let	balance_internal_160 = BigInt.fromI32(0)
    let	balance_internal_161 = BigInt.fromI32(0)
    let	balance_internal_162 = BigInt.fromI32(0)
    let	balance_internal_163 = BigInt.fromI32(0)
    let	balance_internal_164 = BigInt.fromI32(0)
    let	balance_internal_165 = BigInt.fromI32(0)
    let	balance_internal_166 = BigInt.fromI32(0)
    let	balance_internal_167 = BigInt.fromI32(0)
    let	balance_internal_168 = BigInt.fromI32(0)
    let	balance_internal_169 = BigInt.fromI32(0)
    let	balance_internal_170 = BigInt.fromI32(0)
    let	balance_internal_171 = BigInt.fromI32(0)
    let	balance_internal_172 = BigInt.fromI32(0)
    let	balance_internal_173 = BigInt.fromI32(0)
    let	balance_internal_174 = BigInt.fromI32(0)
    let	balance_internal_175 = BigInt.fromI32(0)
    let	balance_internal_176 = BigInt.fromI32(0)
    let	balance_internal_177 = BigInt.fromI32(0)
    let	balance_internal_178 = BigInt.fromI32(0)
    let	balance_internal_179 = BigInt.fromI32(0)
    let	balance_internal_180 = BigInt.fromI32(0)
    let	balance_internal_181 = BigInt.fromI32(0)
    let	balance_internal_182 = BigInt.fromI32(0)
    let	balance_internal_183 = BigInt.fromI32(0)
    let	balance_internal_184 = BigInt.fromI32(0)
    let	balance_internal_185 = BigInt.fromI32(0)
    let	balance_internal_186 = BigInt.fromI32(0)
    let	balance_internal_187 = BigInt.fromI32(0)
    let	balance_internal_188 = BigInt.fromI32(0)
    let	balance_internal_189 = BigInt.fromI32(0)
    let	balance_internal_190 = BigInt.fromI32(0)
    let	balance_internal_191 = BigInt.fromI32(0)
    let	balance_internal_192 = BigInt.fromI32(0)
    let	balance_internal_193 = BigInt.fromI32(0)
    let	balance_internal_194 = BigInt.fromI32(0)
    let	balance_internal_195 = BigInt.fromI32(0)
    let	balance_internal_196 = BigInt.fromI32(0)
    let	balance_internal_197 = BigInt.fromI32(0)
    let	balance_internal_198 = BigInt.fromI32(0)
    let	balance_internal_199 = BigInt.fromI32(0)
    let	balance_internal_200 = BigInt.fromI32(0)
    let	balance_internal_201 = BigInt.fromI32(0)
    let	balance_internal_202 = BigInt.fromI32(0)
    let	balance_internal_203 = BigInt.fromI32(0)
    let	balance_internal_204 = BigInt.fromI32(0)
    let	balance_internal_205 = BigInt.fromI32(0)
    let	balance_internal_206 = BigInt.fromI32(0)
    let	balance_internal_207 = BigInt.fromI32(0)
    let	balance_internal_208 = BigInt.fromI32(0)
    let	balance_internal_209 = BigInt.fromI32(0)
    let	balance_internal_210 = BigInt.fromI32(0)
    let	balance_internal_211 = BigInt.fromI32(0)
    let	balance_internal_212 = BigInt.fromI32(0)
    let	balance_internal_213 = BigInt.fromI32(0)
    let	balance_internal_214 = BigInt.fromI32(0)
    let	balance_internal_215 = BigInt.fromI32(0)
    let	balance_internal_216 = BigInt.fromI32(0)
    let	balance_internal_217 = BigInt.fromI32(0)
    let	balance_internal_218 = BigInt.fromI32(0)
    let	balance_internal_219 = BigInt.fromI32(0)
    let	balance_internal_220 = BigInt.fromI32(0)
    let	balance_internal_221 = BigInt.fromI32(0)
    let	balance_internal_222 = BigInt.fromI32(0)
    let	balance_internal_223 = BigInt.fromI32(0)
    let	balance_internal_224 = BigInt.fromI32(0)
    let	balance_internal_225 = BigInt.fromI32(0)
    let	balance_internal_226 = BigInt.fromI32(0)
    let	balance_internal_227 = BigInt.fromI32(0)

    if (creator != null) {
        balance_creator = creator.balance
    }

    if (stacker_reward != null) {
        balance_stacking_rewards = stacker_reward.balance
    }

    if (pool != null) {
        balance_pool = pool.balance
    }

    if (vesting != null) {
        balance_vesting = vesting.totalAssests
    }

    if (stacking != null) {
        balance_stacking = stacking.totalStake
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

    if (internal_001 != null) { balance_internal_001 = internal_001.balance }
    if (internal_002 != null) { balance_internal_002 = internal_002.balance }
    if (internal_003 != null) { balance_internal_003 = internal_003.balance }
    if (internal_004 != null) { balance_internal_004 = internal_004.balance }
    if (internal_005 != null) { balance_internal_005 = internal_005.balance }
    if (internal_006 != null) { balance_internal_006 = internal_006.balance }
    if (internal_007 != null) { balance_internal_007 = internal_007.balance }
    if (internal_008 != null) { balance_internal_008 = internal_008.balance }
    if (internal_009 != null) { balance_internal_009 = internal_009.balance }
    if (internal_010 != null) { balance_internal_010 = internal_010.balance }
    if (internal_011 != null) { balance_internal_011 = internal_011.balance }
    if (internal_012 != null) { balance_internal_012 = internal_012.balance }
    if (internal_013 != null) { balance_internal_013 = internal_013.balance }
    if (internal_014 != null) { balance_internal_014 = internal_014.balance }
    if (internal_015 != null) { balance_internal_015 = internal_015.balance }
    if (internal_016 != null) { balance_internal_016 = internal_016.balance }
    if (internal_017 != null) { balance_internal_017 = internal_017.balance }
    if (internal_018 != null) { balance_internal_018 = internal_018.balance }
    if (internal_019 != null) { balance_internal_019 = internal_019.balance }
    if (internal_020 != null) { balance_internal_020 = internal_020.balance }
    if (internal_021 != null) { balance_internal_021 = internal_021.balance }
    if (internal_022 != null) { balance_internal_022 = internal_022.balance }
    if (internal_023 != null) { balance_internal_023 = internal_023.balance }
    if (internal_024 != null) { balance_internal_024 = internal_024.balance }
    if (internal_025 != null) { balance_internal_025 = internal_025.balance }
    if (internal_026 != null) { balance_internal_026 = internal_026.balance }
    if (internal_027 != null) { balance_internal_027 = internal_027.balance }
    if (internal_028 != null) { balance_internal_028 = internal_028.balance }
    if (internal_029 != null) { balance_internal_029 = internal_029.balance }
    if (internal_030 != null) { balance_internal_030 = internal_030.balance }
    if (internal_031 != null) { balance_internal_031 = internal_031.balance }
    if (internal_032 != null) { balance_internal_032 = internal_032.balance }
    if (internal_033 != null) { balance_internal_033 = internal_033.balance }
    if (internal_034 != null) { balance_internal_034 = internal_034.balance }
    if (internal_035 != null) { balance_internal_035 = internal_035.balance }
    if (internal_036 != null) { balance_internal_036 = internal_036.balance }
    if (internal_037 != null) { balance_internal_037 = internal_037.balance }
    if (internal_038 != null) { balance_internal_038 = internal_038.balance }
    if (internal_039 != null) { balance_internal_039 = internal_039.balance }
    if (internal_040 != null) { balance_internal_040 = internal_040.balance }
    if (internal_041 != null) { balance_internal_041 = internal_041.balance }
    if (internal_042 != null) { balance_internal_042 = internal_042.balance }
    if (internal_043 != null) { balance_internal_043 = internal_043.balance }
    if (internal_044 != null) { balance_internal_044 = internal_044.balance }
    if (internal_045 != null) { balance_internal_045 = internal_045.balance }
    if (internal_046 != null) { balance_internal_046 = internal_046.balance }
    if (internal_047 != null) { balance_internal_047 = internal_047.balance }
    if (internal_048 != null) { balance_internal_048 = internal_048.balance }
    if (internal_049 != null) { balance_internal_049 = internal_049.balance }
    if (internal_050 != null) { balance_internal_050 = internal_050.balance }
    if (internal_051 != null) { balance_internal_051 = internal_051.balance }
    if (internal_052 != null) { balance_internal_052 = internal_052.balance }
    if (internal_053 != null) { balance_internal_053 = internal_053.balance }
    if (internal_054 != null) { balance_internal_054 = internal_054.balance }
    if (internal_055 != null) { balance_internal_055 = internal_055.balance }
    if (internal_056 != null) { balance_internal_056 = internal_056.balance }
    if (internal_057 != null) { balance_internal_057 = internal_057.balance }
    if (internal_058 != null) { balance_internal_058 = internal_058.balance }
    if (internal_059 != null) { balance_internal_059 = internal_059.balance }
    if (internal_060 != null) { balance_internal_060 = internal_060.balance }
    if (internal_061 != null) { balance_internal_061 = internal_061.balance }
    if (internal_062 != null) { balance_internal_062 = internal_062.balance }
    if (internal_063 != null) { balance_internal_063 = internal_063.balance }
    if (internal_064 != null) { balance_internal_064 = internal_064.balance }
    if (internal_065 != null) { balance_internal_065 = internal_065.balance }
    if (internal_066 != null) { balance_internal_066 = internal_066.balance }
    if (internal_067 != null) { balance_internal_067 = internal_067.balance }
    if (internal_068 != null) { balance_internal_068 = internal_068.balance }
    if (internal_069 != null) { balance_internal_069 = internal_069.balance }
    if (internal_070 != null) { balance_internal_070 = internal_070.balance }
    if (internal_071 != null) { balance_internal_071 = internal_071.balance }
    if (internal_072 != null) { balance_internal_072 = internal_072.balance }
    if (internal_073 != null) { balance_internal_073 = internal_073.balance }
    if (internal_074 != null) { balance_internal_074 = internal_074.balance }
    if (internal_075 != null) { balance_internal_075 = internal_075.balance }
    if (internal_076 != null) { balance_internal_076 = internal_076.balance }
    if (internal_077 != null) { balance_internal_077 = internal_077.balance }
    if (internal_078 != null) { balance_internal_078 = internal_078.balance }
    if (internal_079 != null) { balance_internal_079 = internal_079.balance }
    if (internal_080 != null) { balance_internal_080 = internal_080.balance }
    if (internal_081 != null) { balance_internal_081 = internal_081.balance }
    if (internal_082 != null) { balance_internal_082 = internal_082.balance }
    if (internal_083 != null) { balance_internal_083 = internal_083.balance }
    if (internal_084 != null) { balance_internal_084 = internal_084.balance }
    if (internal_085 != null) { balance_internal_085 = internal_085.balance }
    if (internal_086 != null) { balance_internal_086 = internal_086.balance }
    if (internal_087 != null) { balance_internal_087 = internal_087.balance }
    if (internal_088 != null) { balance_internal_088 = internal_088.balance }
    if (internal_089 != null) { balance_internal_089 = internal_089.balance }
    if (internal_090 != null) { balance_internal_090 = internal_090.balance }
    if (internal_091 != null) { balance_internal_091 = internal_091.balance }
    if (internal_092 != null) { balance_internal_092 = internal_092.balance }
    if (internal_093 != null) { balance_internal_093 = internal_093.balance }
    if (internal_094 != null) { balance_internal_094 = internal_094.balance }
    if (internal_095 != null) { balance_internal_095 = internal_095.balance }
    if (internal_096 != null) { balance_internal_096 = internal_096.balance }
    if (internal_097 != null) { balance_internal_097 = internal_097.balance }
    if (internal_098 != null) { balance_internal_098 = internal_098.balance }
    if (internal_099 != null) { balance_internal_099 = internal_099.balance }
    if (internal_100 != null) { balance_internal_100 = internal_100.balance }
    if (internal_101 != null) { balance_internal_101 = internal_101.balance }
    if (internal_102 != null) { balance_internal_102 = internal_102.balance }
    if (internal_103 != null) { balance_internal_103 = internal_103.balance }
    if (internal_104 != null) { balance_internal_104 = internal_104.balance }
    if (internal_105 != null) { balance_internal_105 = internal_105.balance }
    if (internal_106 != null) { balance_internal_106 = internal_106.balance }
    if (internal_107 != null) { balance_internal_107 = internal_107.balance }
    if (internal_108 != null) { balance_internal_108 = internal_108.balance }
    if (internal_109 != null) { balance_internal_109 = internal_109.balance }
    if (internal_110 != null) { balance_internal_110 = internal_110.balance }
    if (internal_111 != null) { balance_internal_111 = internal_111.balance }
    if (internal_112 != null) { balance_internal_112 = internal_112.balance }
    if (internal_113 != null) { balance_internal_113 = internal_113.balance }
    if (internal_114 != null) { balance_internal_114 = internal_114.balance }
    if (internal_115 != null) { balance_internal_115 = internal_115.balance }
    if (internal_116 != null) { balance_internal_116 = internal_116.balance }
    if (internal_117 != null) { balance_internal_117 = internal_117.balance }
    if (internal_118 != null) { balance_internal_118 = internal_118.balance }
    if (internal_119 != null) { balance_internal_119 = internal_119.balance }
    if (internal_120 != null) { balance_internal_120 = internal_120.balance }
    if (internal_121 != null) { balance_internal_121 = internal_121.balance }
    if (internal_122 != null) { balance_internal_122 = internal_122.balance }
    if (internal_123 != null) { balance_internal_123 = internal_123.balance }
    if (internal_124 != null) { balance_internal_124 = internal_124.balance }
    if (internal_125 != null) { balance_internal_125 = internal_125.balance }
    if (internal_126 != null) { balance_internal_126 = internal_126.balance }
    if (internal_127 != null) { balance_internal_127 = internal_127.balance }
    if (internal_128 != null) { balance_internal_128 = internal_128.balance }
    if (internal_129 != null) { balance_internal_129 = internal_129.balance }
    if (internal_130 != null) { balance_internal_130 = internal_130.balance }
    if (internal_131 != null) { balance_internal_131 = internal_131.balance }
    if (internal_132 != null) { balance_internal_132 = internal_132.balance }
    if (internal_133 != null) { balance_internal_133 = internal_133.balance }
    if (internal_134 != null) { balance_internal_134 = internal_134.balance }
    if (internal_135 != null) { balance_internal_135 = internal_135.balance }
    if (internal_136 != null) { balance_internal_136 = internal_136.balance }
    if (internal_137 != null) { balance_internal_137 = internal_137.balance }
    if (internal_138 != null) { balance_internal_138 = internal_138.balance }
    if (internal_139 != null) { balance_internal_139 = internal_139.balance }
    if (internal_140 != null) { balance_internal_140 = internal_140.balance }
    if (internal_141 != null) { balance_internal_141 = internal_141.balance }
    if (internal_142 != null) { balance_internal_142 = internal_142.balance }
    if (internal_143 != null) { balance_internal_143 = internal_143.balance }
    if (internal_144 != null) { balance_internal_144 = internal_144.balance }
    if (internal_145 != null) { balance_internal_145 = internal_145.balance }
    if (internal_146 != null) { balance_internal_146 = internal_146.balance }
    if (internal_147 != null) { balance_internal_147 = internal_147.balance }
    if (internal_148 != null) { balance_internal_148 = internal_148.balance }
    if (internal_149 != null) { balance_internal_149 = internal_149.balance }
    if (internal_150 != null) { balance_internal_150 = internal_150.balance }
    if (internal_151 != null) { balance_internal_151 = internal_151.balance }
    if (internal_152 != null) { balance_internal_152 = internal_152.balance }
    if (internal_153 != null) { balance_internal_153 = internal_153.balance }
    if (internal_154 != null) { balance_internal_154 = internal_154.balance }
    if (internal_155 != null) { balance_internal_155 = internal_155.balance }
    if (internal_156 != null) { balance_internal_156 = internal_156.balance }
    if (internal_157 != null) { balance_internal_157 = internal_157.balance }
    if (internal_158 != null) { balance_internal_158 = internal_158.balance }
    if (internal_159 != null) { balance_internal_159 = internal_159.balance }
    if (internal_160 != null) { balance_internal_160 = internal_160.balance }
    if (internal_161 != null) { balance_internal_161 = internal_161.balance }
    if (internal_162 != null) { balance_internal_162 = internal_162.balance }
    if (internal_163 != null) { balance_internal_163 = internal_163.balance }
    if (internal_164 != null) { balance_internal_164 = internal_164.balance }
    if (internal_165 != null) { balance_internal_165 = internal_165.balance }
    if (internal_166 != null) { balance_internal_166 = internal_166.balance }
    if (internal_167 != null) { balance_internal_167 = internal_167.balance }
    if (internal_168 != null) { balance_internal_168 = internal_168.balance }
    if (internal_169 != null) { balance_internal_169 = internal_169.balance }
    if (internal_170 != null) { balance_internal_170 = internal_170.balance }
    if (internal_171 != null) { balance_internal_171 = internal_171.balance }
    if (internal_172 != null) { balance_internal_172 = internal_172.balance }
    if (internal_173 != null) { balance_internal_173 = internal_173.balance }
    if (internal_174 != null) { balance_internal_174 = internal_174.balance }
    if (internal_175 != null) { balance_internal_175 = internal_175.balance }
    if (internal_176 != null) { balance_internal_176 = internal_176.balance }
    if (internal_177 != null) { balance_internal_177 = internal_177.balance }
    if (internal_178 != null) { balance_internal_178 = internal_178.balance }
    if (internal_179 != null) { balance_internal_179 = internal_179.balance }
    if (internal_180 != null) { balance_internal_180 = internal_180.balance }
    if (internal_181 != null) { balance_internal_181 = internal_181.balance }
    if (internal_182 != null) { balance_internal_182 = internal_182.balance }
    if (internal_183 != null) { balance_internal_183 = internal_183.balance }
    if (internal_184 != null) { balance_internal_184 = internal_184.balance }
    if (internal_185 != null) { balance_internal_185 = internal_185.balance }
    if (internal_186 != null) { balance_internal_186 = internal_186.balance }
    if (internal_187 != null) { balance_internal_187 = internal_187.balance }
    if (internal_188 != null) { balance_internal_188 = internal_188.balance }
    if (internal_189 != null) { balance_internal_189 = internal_189.balance }
    if (internal_190 != null) { balance_internal_190 = internal_190.balance }
    if (internal_191 != null) { balance_internal_191 = internal_191.balance }
    if (internal_192 != null) { balance_internal_192 = internal_192.balance }
    if (internal_193 != null) { balance_internal_193 = internal_193.balance }
    if (internal_194 != null) { balance_internal_194 = internal_194.balance }
    if (internal_195 != null) { balance_internal_195 = internal_195.balance }
    if (internal_196 != null) { balance_internal_196 = internal_196.balance }
    if (internal_197 != null) { balance_internal_197 = internal_197.balance }
    if (internal_198 != null) { balance_internal_198 = internal_198.balance }
    if (internal_199 != null) { balance_internal_199 = internal_199.balance }
    if (internal_200 != null) { balance_internal_200 = internal_200.balance }
    if (internal_201 != null) { balance_internal_201 = internal_201.balance }
    if (internal_202 != null) { balance_internal_202 = internal_202.balance }
    if (internal_203 != null) { balance_internal_203 = internal_203.balance }
    if (internal_204 != null) { balance_internal_204 = internal_204.balance }
    if (internal_205 != null) { balance_internal_205 = internal_205.balance }
    if (internal_206 != null) { balance_internal_206 = internal_206.balance }
    if (internal_207 != null) { balance_internal_207 = internal_207.balance }
    if (internal_208 != null) { balance_internal_208 = internal_208.balance }
    if (internal_209 != null) { balance_internal_209 = internal_209.balance }
    if (internal_210 != null) { balance_internal_210 = internal_210.balance }
    if (internal_211 != null) { balance_internal_211 = internal_211.balance }
    if (internal_212 != null) { balance_internal_212 = internal_212.balance }
    if (internal_213 != null) { balance_internal_213 = internal_213.balance }
    if (internal_214 != null) { balance_internal_214 = internal_214.balance }
    if (internal_215 != null) { balance_internal_215 = internal_215.balance }
    if (internal_216 != null) { balance_internal_216 = internal_216.balance }
    if (internal_217 != null) { balance_internal_217 = internal_217.balance }
    if (internal_218 != null) { balance_internal_218 = internal_218.balance }
    if (internal_219 != null) { balance_internal_219 = internal_219.balance }
    if (internal_220 != null) { balance_internal_220 = internal_220.balance }
    if (internal_221 != null) { balance_internal_221 = internal_221.balance }
    if (internal_222 != null) { balance_internal_222 = internal_222.balance }
    if (internal_223 != null) { balance_internal_223 = internal_223.balance }
    if (internal_224 != null) { balance_internal_224 = internal_224.balance }
    if (internal_225 != null) { balance_internal_225 = internal_225.balance }
    if (internal_226 != null) { balance_internal_226 = internal_226.balance }
    if (internal_227 != null) { balance_internal_227 = internal_227.balance }
    if (internal_228 != null) { balance_internal_228 = internal_228.balance }
    if (internal_229 != null) { balance_internal_229 = internal_229.balance }
    if (internal_230 != null) { balance_internal_230 = internal_230.balance }
    if (internal_231 != null) { balance_internal_231 = internal_231.balance }
    if (internal_232 != null) { balance_internal_232 = internal_232.balance }
    if (internal_233 != null) { balance_internal_233 = internal_233.balance }
    if (internal_234 != null) { balance_internal_234 = internal_234.balance }
    if (internal_235 != null) { balance_internal_235 = internal_235.balance }
    if (internal_236 != null) { balance_internal_236 = internal_236.balance }
    if (internal_237 != null) { balance_internal_237 = internal_237.balance }
    if (internal_238 != null) { balance_internal_238 = internal_238.balance }
    if (internal_239 != null) { balance_internal_239 = internal_239.balance }
    if (internal_240 != null) { balance_internal_240 = internal_240.balance }
    if (internal_241 != null) { balance_internal_241 = internal_241.balance }
    if (internal_242 != null) { balance_internal_242 = internal_242.balance }
    if (internal_243 != null) { balance_internal_243 = internal_243.balance }
    if (internal_244 != null) { balance_internal_244 = internal_244.balance }
    if (internal_245 != null) { balance_internal_245 = internal_245.balance }
    if (internal_246 != null) { balance_internal_246 = internal_246.balance }
    if (internal_247 != null) { balance_internal_247 = internal_247.balance }
    if (internal_248 != null) { balance_internal_248 = internal_248.balance }
    if (internal_249 != null) { balance_internal_249 = internal_249.balance }
    if (internal_250 != null) { balance_internal_250 = internal_250.balance }

    circulation.circulation = totalSupply.supply.minus(balance_creator).minus(balance_stacking_rewards).minus(balance_pool).
        minus(balance_vesting).minus(balance_stacking).minus(balance_team).minus(balance_ecosystem).minus(balance_marketing).
        minus(balance_partnerships).minus(balance_lequidity).minus(balance_community).minus(balance_affiliate).
        minus(balance_internal_001).
        minus(balance_internal_002).
        minus(balance_internal_003).
        minus(balance_internal_004).
        minus(balance_internal_005).
        minus(balance_internal_006).
        minus(balance_internal_007).
        minus(balance_internal_008).
        minus(balance_internal_009).
        minus(balance_internal_010).
        minus(balance_internal_011).
        minus(balance_internal_012).
        minus(balance_internal_013).
        minus(balance_internal_014).
        minus(balance_internal_015).
        minus(balance_internal_016).
        minus(balance_internal_017).
        minus(balance_internal_018).
        minus(balance_internal_019).
        minus(balance_internal_020).
        minus(balance_internal_021).
        minus(balance_internal_022).
        minus(balance_internal_023).
        minus(balance_internal_024).
        minus(balance_internal_025).
        minus(balance_internal_026).
        minus(balance_internal_027).
        minus(balance_internal_028).
        minus(balance_internal_029).
        minus(balance_internal_030).
        minus(balance_internal_031).
        minus(balance_internal_032).
        minus(balance_internal_033).
        minus(balance_internal_034).
        minus(balance_internal_035).
        minus(balance_internal_036).
        minus(balance_internal_037).
        minus(balance_internal_038).
        minus(balance_internal_039).
        minus(balance_internal_040).
        minus(balance_internal_041).
        minus(balance_internal_042).
        minus(balance_internal_043).
        minus(balance_internal_044).
        minus(balance_internal_045).
        minus(balance_internal_046).
        minus(balance_internal_047).
        minus(balance_internal_048).
        minus(balance_internal_049).
        minus(balance_internal_050).
        minus(balance_internal_051).
        minus(balance_internal_052).
        minus(balance_internal_053).
        minus(balance_internal_054).
        minus(balance_internal_055).
        minus(balance_internal_056).
        minus(balance_internal_057).
        minus(balance_internal_058).
        minus(balance_internal_059).
        minus(balance_internal_060).
        minus(balance_internal_061).
        minus(balance_internal_062).
        minus(balance_internal_063).
        minus(balance_internal_064).
        minus(balance_internal_065).
        minus(balance_internal_066).
        minus(balance_internal_067).
        minus(balance_internal_068).
        minus(balance_internal_069).
        minus(balance_internal_070).
        minus(balance_internal_071).
        minus(balance_internal_072).
        minus(balance_internal_073).
        minus(balance_internal_074).
        minus(balance_internal_075).
        minus(balance_internal_076).
        minus(balance_internal_077).
        minus(balance_internal_078).
        minus(balance_internal_079).
        minus(balance_internal_080).
        minus(balance_internal_081).
        minus(balance_internal_082).
        minus(balance_internal_083).
        minus(balance_internal_084).
        minus(balance_internal_085).
        minus(balance_internal_086).
        minus(balance_internal_087).
        minus(balance_internal_088).
        minus(balance_internal_089).
        minus(balance_internal_090).
        minus(balance_internal_091).
        minus(balance_internal_092).
        minus(balance_internal_093).
        minus(balance_internal_094).
        minus(balance_internal_095).
        minus(balance_internal_096).
        minus(balance_internal_097).
        minus(balance_internal_098).
        minus(balance_internal_099).
        minus(balance_internal_100).
        minus(balance_internal_101).
        minus(balance_internal_102).
        minus(balance_internal_103).
        minus(balance_internal_104).
        minus(balance_internal_105).
        minus(balance_internal_106).
        minus(balance_internal_107).
        minus(balance_internal_108).
        minus(balance_internal_109).
        minus(balance_internal_110).
        minus(balance_internal_111).
        minus(balance_internal_112).
        minus(balance_internal_113).
        minus(balance_internal_114).
        minus(balance_internal_115).
        minus(balance_internal_116).
        minus(balance_internal_117).
        minus(balance_internal_118).
        minus(balance_internal_119).
        minus(balance_internal_120).
        minus(balance_internal_121).
        minus(balance_internal_122).
        minus(balance_internal_123).
        minus(balance_internal_124).
        minus(balance_internal_125).
        minus(balance_internal_126).
        minus(balance_internal_127).
        minus(balance_internal_128).
        minus(balance_internal_129).
        minus(balance_internal_130).
        minus(balance_internal_131).
        minus(balance_internal_132).
        minus(balance_internal_133).
        minus(balance_internal_134).
        minus(balance_internal_135).
        minus(balance_internal_136).
        minus(balance_internal_137).
        minus(balance_internal_138).
        minus(balance_internal_139).
        minus(balance_internal_140).
        minus(balance_internal_141).
        minus(balance_internal_142).
        minus(balance_internal_143).
        minus(balance_internal_144).
        minus(balance_internal_145).
        minus(balance_internal_146).
        minus(balance_internal_147).
        minus(balance_internal_148).
        minus(balance_internal_149).
        minus(balance_internal_150).
        minus(balance_internal_151).
        minus(balance_internal_152).
        minus(balance_internal_153).
        minus(balance_internal_154).
        minus(balance_internal_155).
        minus(balance_internal_156).
        minus(balance_internal_157).
        minus(balance_internal_158).
        minus(balance_internal_159).
        minus(balance_internal_160).
        minus(balance_internal_161).
        minus(balance_internal_162).
        minus(balance_internal_163).
        minus(balance_internal_164).
        minus(balance_internal_165).
        minus(balance_internal_166).
        minus(balance_internal_167).
        minus(balance_internal_168).
        minus(balance_internal_169).
        minus(balance_internal_170).
        minus(balance_internal_171).
        minus(balance_internal_172).
        minus(balance_internal_173).
        minus(balance_internal_174).
        minus(balance_internal_175).
        minus(balance_internal_176).
        minus(balance_internal_177).
        minus(balance_internal_178).
        minus(balance_internal_179).
        minus(balance_internal_180).
        minus(balance_internal_181).
        minus(balance_internal_182).
        minus(balance_internal_183).
        minus(balance_internal_184).
        minus(balance_internal_185).
        minus(balance_internal_186).
        minus(balance_internal_187).
        minus(balance_internal_188).
        minus(balance_internal_189).
        minus(balance_internal_190).
        minus(balance_internal_191).
        minus(balance_internal_192).
        minus(balance_internal_193).
        minus(balance_internal_194).
        minus(balance_internal_195).
        minus(balance_internal_196).
        minus(balance_internal_197).
        minus(balance_internal_198).
        minus(balance_internal_199).
        minus(balance_internal_200).
        minus(balance_internal_201).
        minus(balance_internal_202).
        minus(balance_internal_203).
        minus(balance_internal_204).
        minus(balance_internal_205).
        minus(balance_internal_206).
        minus(balance_internal_207).
        minus(balance_internal_208).
        minus(balance_internal_209).
        minus(balance_internal_210).
        minus(balance_internal_211).
        minus(balance_internal_212).
        minus(balance_internal_213).
        minus(balance_internal_214).
        minus(balance_internal_215).
        minus(balance_internal_216).
        minus(balance_internal_217).
        minus(balance_internal_218).
        minus(balance_internal_219).
        minus(balance_internal_220).
        minus(balance_internal_221).
        minus(balance_internal_222).
        minus(balance_internal_223).
        minus(balance_internal_224).
        minus(balance_internal_225).
        minus(balance_internal_226).
        minus(balance_internal_227)

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
