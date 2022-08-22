import { Address, BigInt, store } from "@graphprotocol/graph-ts"
import { Holder, HolderCount, TotalSupply, TransactionCount, TransferCount,
    Participant, ParticipantCount} from "../generated/schema"
import {updateHolderDate, updateParicipantDate} from "./historical"


export let ADDRESS_ZERO = Address.fromHexString('0x0000000000000000000000000000000000000000')
export let ADDRESS_CREATOR = Address.fromHexString('0xa80BB6727BcB8116bBD7355384ED58B59c7B09a7')
export let ADDRESS_STAKE_REWARDS = Address.fromHexString('0x9633813343e61A70024c266Dd8376E2764641711')
export let ADDRESS_POOL = Address.fromHexString('0x3ccaD1a87f5DdCD7Af315D64006E2E9b4Dd7e807')
export let ADDRESS_TEAM = Address.fromHexString('0x8B21Eb3a9BB7082a5a159984CE5f7c072Ac7F4Fa')
export let ADDRESS_ECOSYSTEM = Address.fromHexString('0x2DDb0e4a79D18dD64FFE32631C0aaFa3eef61bF9')
export let ADDRESS_MARKETING = Address.fromHexString('0x554ff44aa1a9642C607d83762cD8Af0C01A7226f')
export let ADDRESS_PARTNERSHIPS = Address.fromHexString('0x5D5F5d0b95fCD20d3Fb837d6341Da4B0B02f224b')
export let ADDRESS_LIQUIDITY = Address.fromHexString('0xCa33617b6e0732f1520b1eA4BF411542D0953660')
export let ADDRESS_COMMUNITY = Address.fromHexString('0xE18A429F481C92aded138bf9C460b72ea24A058f')
export let ADDRESS_AFFILIATE = Address.fromHexString('0x294BEEC61b7841d7A3aD86Ee2204b667F5EEF68E')
export let ADDRESS_INTERNAL_001 = Address.fromHexString('0xcE0D229d6dD09C2C92947294884CB9596bf42735')
export let ADDRESS_INTERNAL_002 = Address.fromHexString('0xc292cf02511fb2c758b9c76b18dba6ffb1deeeeb')
export let ADDRESS_INTERNAL_003 = Address.fromHexString('0x3Fd6Dc6169faa55F27196D7EE44ae29A12F199E3')
export let ADDRESS_INTERNAL_004 = Address.fromHexString('0x18AD2CeE930D2459A9641F84dfD6cDD1EdD952F4')
export let ADDRESS_INTERNAL_005 = Address.fromHexString('0x14fc0829cEdCB20e133D524D767BA1Bc8b7bb71E')
export let ADDRESS_INTERNAL_006 = Address.fromHexString('0xbcd69Ce8027b930c7712290F4f0c1e8864382123')
export let ADDRESS_INTERNAL_007 = Address.fromHexString('0x83a42ed79e03eb99f1ecfaab9f85e5a25084d610')
export let ADDRESS_INTERNAL_008 = Address.fromHexString('0x1d9eacf1a0ae1268a67b3c3ab9904c6e8957f677')
export let ADDRESS_INTERNAL_009 = Address.fromHexString('0xc223849db4ed96cade875c564bc2cf60d67a5f6d')
export let ADDRESS_INTERNAL_010 = Address.fromHexString('0xf48ebded78484375367430903f67338644b634ae')
export let ADDRESS_INTERNAL_011 = Address.fromHexString('0x2bb870b337de424580d250385115a687f15a6497')
export let ADDRESS_INTERNAL_012 = Address.fromHexString('0x870c94a23faceb3e0d124984fd12061731ac83d6')
export let ADDRESS_INTERNAL_013 = Address.fromHexString('0x75f76f9fc3bf733e0aa1c215d4bbf04e030d44a4')
export let ADDRESS_INTERNAL_014 = Address.fromHexString('0xa50f89381301decb11f1918586f98c5f2077e3ca')
export let ADDRESS_INTERNAL_015 = Address.fromHexString('0x666d4b8a0959305318c5116b49f54741372165ee')
export let ADDRESS_INTERNAL_016 = Address.fromHexString('0x7c85a9d32d34c3d2c9c80aefff1b4bfed016a9a0')
export let ADDRESS_INTERNAL_017 = Address.fromHexString('0xdd25d5b47ee621198afa3423bd31d8fa95b31496')
export let ADDRESS_INTERNAL_018 = Address.fromHexString('0xede91fc41c95b65adacfb1b470de5dd50e07eb4c')
export let ADDRESS_INTERNAL_019 = Address.fromHexString('0x9d96d241836dbb9de0d9682a23c7aea775fe9b70')
export let ADDRESS_INTERNAL_020 = Address.fromHexString('0x0d1842eD053A7F1BFdfb7849599FacE3ed65fE34')
export let ADDRESS_INTERNAL_021 = Address.fromHexString('0x92C98285230Ac5E47012c63456C0e2E94e934Ff9')
export let ADDRESS_INTERNAL_022 = Address.fromHexString('0x058Ced7CC27CA73482A9eD33229B51688336887F')
export let ADDRESS_INTERNAL_023 = Address.fromHexString('0xd48fd6999676273d9bbbf632b7680132f10308dC')
export let ADDRESS_INTERNAL_024 = Address.fromHexString('0xD52a13A7CEf550A8073744488d3410B598095a86')
export let ADDRESS_INTERNAL_025 = Address.fromHexString('0x51DdFfE23aF1Ccd1B8E6d03eB41CaDbcF36944C3')
export let ADDRESS_INTERNAL_026 = Address.fromHexString('0x546b283bF3C8561e053e5aA2d00b77c3A00b48b5')
export let ADDRESS_INTERNAL_027 = Address.fromHexString('0x97ee4eD562c7eD22F4Ff7dC3FC4A24B5F0B9627e')
export let ADDRESS_INTERNAL_028 = Address.fromHexString('0xDb46AbA6Dc3DdF20e930e3c844fc7d7A8B67ba34')
export let ADDRESS_INTERNAL_029 = Address.fromHexString('0xE56450AAc6309fE040f54F07b38da3c89A7781C8')
export let ADDRESS_INTERNAL_030 = Address.fromHexString('0xC1119877D26Fff8Ee783936bd9BB7A17F256e629')
export let ADDRESS_INTERNAL_031 = Address.fromHexString('0x60036AE68d5F519e6DcaFb23d3d2cf4D7BC3De60')
export let ADDRESS_INTERNAL_032 = Address.fromHexString('0x61C8E4b917E29bD7b3b8ea6D23a06B67316F8E79')
export let ADDRESS_INTERNAL_033 = Address.fromHexString('0xF7dcB5D9C471928A083E983da67570cB25e9e4e9')
export let ADDRESS_INTERNAL_034 = Address.fromHexString('0xBcC32787bcf6e4804d9eA34bAf22E4287695F558')
export let ADDRESS_INTERNAL_035 = Address.fromHexString('0x30eee872d726f67bFf16cbEE364D66139DD5F6A1')
export let ADDRESS_INTERNAL_036 = Address.fromHexString('0xc586fD3CDca19dCA440a0B9Ce1F22BB51521C410')
export let ADDRESS_INTERNAL_037 = Address.fromHexString('0x62621CEA03Bc30bF574CBcFd21967479dFF548b5')
export let ADDRESS_INTERNAL_038 = Address.fromHexString('0xD26952b244Ed3403DBDC8A5968a9290d4fE7b6e7')
export let ADDRESS_INTERNAL_039 = Address.fromHexString('0x914D3FfE382010a667AFdd5578523Bf6f6EAf38F')
export let ADDRESS_INTERNAL_040 = Address.fromHexString('0x6A707D3b5a006023f370ff8f76b576e87909F279')
export let ADDRESS_INTERNAL_041 = Address.fromHexString('0x71A5324C5352E26128a83C8abEAB2e77C11bCE6E')
export let ADDRESS_INTERNAL_042 = Address.fromHexString('0x97fcb9dA19fBd77F0faa399806F9a2Eda9039749')
export let ADDRESS_INTERNAL_043 = Address.fromHexString('0xB0fC7452F7e3665adDcC52444321Cba7367F3c35')
export let ADDRESS_INTERNAL_044 = Address.fromHexString('0xf0fC4eDcfc7f46c59e9e75983F43f12f713e00f7')
export let ADDRESS_INTERNAL_045 = Address.fromHexString('0x12347666B9b41fCbc34b60d337d19f336D39Aca4')
export let ADDRESS_INTERNAL_046 = Address.fromHexString('0x2EDf62B771009dD51c739Bf30085A88047c182E4')
export let ADDRESS_INTERNAL_047 = Address.fromHexString('0x89fd101a50322496497E306941691D4F7E935c12')
export let ADDRESS_INTERNAL_048 = Address.fromHexString('0x2ead454794c281879BbA4FDEd8a5E689D6396d9B')
export let ADDRESS_INTERNAL_049 = Address.fromHexString('0x1Ca433e948B8250F38Ec937fba5dA843b6aB37FF')
export let ADDRESS_INTERNAL_050 = Address.fromHexString('0xD8cc18C753b07B55973ADF351b8197256d4768E3')
export let ADDRESS_INTERNAL_051 = Address.fromHexString('0xEA38fBdb9480E9e96AA23c326fAC151aFE9758B3')
export let ADDRESS_INTERNAL_052 = Address.fromHexString('0xc98c4E704Fdf5Ea01c64B6D2eE867f6a041D3b56')
export let ADDRESS_INTERNAL_053 = Address.fromHexString('0xFD646EFbd7681EF8a64FE8EBe381d36710baaF13')
export let ADDRESS_INTERNAL_054 = Address.fromHexString('0x31388ab6E9aa2227c2231aFCC2433eba9a25fA38')
export let ADDRESS_INTERNAL_055 = Address.fromHexString('0x845BD442aD9023f10E34ddA1450e79F925446f21')
export let ADDRESS_INTERNAL_056 = Address.fromHexString('0x2a7129d99c0B459DAcd0e28A300588Ee9b7b7F6a')
export let ADDRESS_INTERNAL_057 = Address.fromHexString('0xbf54bd1564DBA3326494c6814C632b75a41f2A02')
export let ADDRESS_INTERNAL_058 = Address.fromHexString('0xe959687796FD3651634E5A6b5A91C377420551D9')
export let ADDRESS_INTERNAL_059 = Address.fromHexString('0xFf361d16d8fDb31EfdAD72E8b296F5a97C75bbdA')
export let ADDRESS_INTERNAL_060 = Address.fromHexString('0x2AE42274C4e0A45b39c3934CFCc83A66776Afc0B')
export let ADDRESS_INTERNAL_061 = Address.fromHexString('0x3b75c4f8db2d537577c9ff5ba70689b110d16aa5')
export let ADDRESS_INTERNAL_062 = Address.fromHexString('0x4Bd5C50061d68e771fCCDD79C71482760A789a2b')
export let ADDRESS_INTERNAL_063 = Address.fromHexString('0x342B8a6F00b239e8D6913FfDEC988b66864bA18F')
export let ADDRESS_INTERNAL_064 = Address.fromHexString('0xb56d5d4b3aba4608fbb61abc47740c234dc56106')
export let ADDRESS_INTERNAL_065 = Address.fromHexString('0x59ad6718C960697589301B66CB4AaA31Bd27B5B4')
export let ADDRESS_INTERNAL_066 = Address.fromHexString('0x7f8c6bc33e482dba5f2ba175cf1f3dde25406493')
export let ADDRESS_INTERNAL_067 = Address.fromHexString('0x74c86cb09eba49dd6b773127cf5c977c90b94307')
export let ADDRESS_INTERNAL_068 = Address.fromHexString('0xb4bb40d97201a2755a659006c32399ca78847caa')
export let ADDRESS_INTERNAL_069 = Address.fromHexString('0x1e049d165e5f4f84f9b811ec77c1b01a5975b3c1')
export let ADDRESS_INTERNAL_070 = Address.fromHexString('0xb31751de4a2112d98a1a4e7f8af014bc41cafb02')
export let ADDRESS_INTERNAL_071 = Address.fromHexString('0x79ab99e9e522349d96c1a867efb577d5504c16fa')
export let ADDRESS_INTERNAL_072 = Address.fromHexString('0x5261c09f4b10ece9469bf0b213855469697a95c0')
export let ADDRESS_INTERNAL_073 = Address.fromHexString('0xc14679f00d1ee1c26d84c1e95266e290c1403da7')
export let ADDRESS_INTERNAL_074 = Address.fromHexString('0x9a0afacf85bb0936f876aea8e5d0af2e76a34ae0')
export let ADDRESS_INTERNAL_075 = Address.fromHexString('0x3223c0B6517Dd476EA9C534e519d7B5F79206E98')
export let ADDRESS_INTERNAL_076 = Address.fromHexString('0x8709284a3e1B9b992840099b3c5F86c03Ec14292')
export let ADDRESS_INTERNAL_077 = Address.fromHexString('0x9f1E064DD0DeA444dF264D7B8EA51b697D39DD57')
export let ADDRESS_INTERNAL_078 = Address.fromHexString('0xe163Ae0126BDB01C0A84E4e80fE14CF5EFFeb1E6')
export let ADDRESS_INTERNAL_079 = Address.fromHexString('0xFD81ce7688104A9F1251860145f51959d579c220')
export let ADDRESS_INTERNAL_080 = Address.fromHexString('0xa2584bE4db80EAab687d55b5eC8F6Fd5238221dc')
export let ADDRESS_INTERNAL_081 = Address.fromHexString('0xe5782a3Da2Cee770F9C0360f045A074490856789')
export let ADDRESS_INTERNAL_082 = Address.fromHexString('0x329e6F13219a0fB07e7277Bb9F01B67959072643')
export let ADDRESS_INTERNAL_083 = Address.fromHexString('0x0E4CF6937B009FfA84C364398B0809DCc88e41e3')
export let ADDRESS_INTERNAL_084 = Address.fromHexString('0x8933c30742E561927cd52d37334C8aA5Bc934e32')
export let ADDRESS_INTERNAL_085 = Address.fromHexString('0x32accaefa35620b51c061901aff1b74991e7322b')
export let ADDRESS_INTERNAL_086 = Address.fromHexString('0x8DB4CDe6fB0F0fD7E051Fe8948f286321F7d72CA')
export let ADDRESS_INTERNAL_087 = Address.fromHexString('0x877D5898488374Cbe37ec5fEAD344950D58CACC3')
export let ADDRESS_INTERNAL_088 = Address.fromHexString('0xeb009a95964d47f252510e2e9f39e3bd755811b4')
export let ADDRESS_INTERNAL_089 = Address.fromHexString('0x20EE8ce52AECD937C23d0D40f572A5b1A69E3e93')
export let ADDRESS_INTERNAL_090 = Address.fromHexString('0x7da2671fb4bbe2ed15e7390c94a0f1c8a952d99f')
export let ADDRESS_INTERNAL_091 = Address.fromHexString('0x0a741a87cb46A6CABde037d90916fF417747dcAa')
export let ADDRESS_INTERNAL_092 = Address.fromHexString('0x648cCa9B5304f29873aB5FcE6Ea64ed10000A4Ef')
export let ADDRESS_INTERNAL_093 = Address.fromHexString('0x309D3522F7C3a4fe6AC6bb8A2f3916d24C643DF7')
export let ADDRESS_INTERNAL_094 = Address.fromHexString('0xdBB9cCb34F6576115AAa467E0d04a949372b62c6')
export let ADDRESS_INTERNAL_095 = Address.fromHexString('0x6dE3e5e264a1b153bb59e04c354790354fa9bed4')
export let ADDRESS_INTERNAL_096 = Address.fromHexString('0x2dB5Bd00047591dCe8BD8Ae765029A7AE3fa674F')
export let ADDRESS_INTERNAL_097 = Address.fromHexString('0x59b50e32A967fE6F8df435B11794Cbf56DA609b2')
export let ADDRESS_INTERNAL_098 = Address.fromHexString('0x2Eeaa7534aA31545E98319ed72827dA53264775f')
export let ADDRESS_INTERNAL_099 = Address.fromHexString('0x3f65caf56e57a24ce16969ac50df229b37069411')
export let ADDRESS_INTERNAL_100 = Address.fromHexString('0x5be56EC8A3d8B8E0D9c41337250578209633cabE')
export let ADDRESS_INTERNAL_101 = Address.fromHexString('0xe1049Bf3Ada8Bd29b3C4a042F47c632C6332b27A')
export let ADDRESS_INTERNAL_102 = Address.fromHexString('0xDAac5fBa0827b8fC218300cDBc40345E73a6bf1c')
export let ADDRESS_INTERNAL_103 = Address.fromHexString('0x7ced79F4dB3d179603E6D9Caa63BBE6219745dc6')
export let ADDRESS_INTERNAL_104 = Address.fromHexString('0x1945DcB7168FE0461F78aFd3F3ACeE73FbfE163b')
export let ADDRESS_INTERNAL_105 = Address.fromHexString('0x1FaA87e80B471547b47608909340114498527AB5')
export let ADDRESS_INTERNAL_106 = Address.fromHexString('0x070af5F01338B52De6899600FC62Bd316b98b046')
export let ADDRESS_INTERNAL_107 = Address.fromHexString('0x9a61b631c2F7929BE52f79564cB5ED33558E5756')
export let ADDRESS_INTERNAL_108 = Address.fromHexString('0x5F2f9E089c324C721067A9B954C9CD23d8839F4C')
export let ADDRESS_INTERNAL_109 = Address.fromHexString('0x222170D4Eb3987506a0453Ea21e83274743ECA14')
export let ADDRESS_INTERNAL_110 = Address.fromHexString('0xa50D96Cf8Cc9c2baBE373634Da10c760f843b412')
export let ADDRESS_INTERNAL_111 = Address.fromHexString('0x5e44039fF51D6cad648E977be904c52A32940caf')
export let ADDRESS_INTERNAL_112 = Address.fromHexString('0x631dE63B6020574c8E4C6251F05c9D50a40Af740')
export let ADDRESS_INTERNAL_113 = Address.fromHexString('0xD83aA0A924d9D3954eAA572cC9AD6501D4aAdb90')
export let ADDRESS_INTERNAL_114 = Address.fromHexString('0xB53E4a5596C90ab64c1Ef1b988966a4c6d134be5')
export let ADDRESS_INTERNAL_115 = Address.fromHexString('0x17aF67A1e5Cef01CBEb09102fe8d6C3C9794Bcbb')
export let ADDRESS_INTERNAL_116 = Address.fromHexString('0xff30CfE65e6F6C6342cAD350175d92036bC4c8fC')
export let ADDRESS_INTERNAL_117 = Address.fromHexString('0x3024863a7e58A9c9c2a395Ed39c1a1a8Bd30B3DC')
export let ADDRESS_INTERNAL_118 = Address.fromHexString('0x8eA7256E904A1Bfe04A7b5E20157ddC95658Ca7C')
export let ADDRESS_INTERNAL_119 = Address.fromHexString('0x7158E779B82b6Dc25CE70f5B2bCCC89aB4999022')
export let ADDRESS_INTERNAL_120 = Address.fromHexString('0x8b18DbF711d0e93817FC36a62dC6Be54700a2142')
export let ADDRESS_INTERNAL_121 = Address.fromHexString('0xE13e24Dd776De67570f7238cA9C0a6Ff4A460DB4')
export let ADDRESS_INTERNAL_122 = Address.fromHexString('0xACf8345B11Eb68D1C79e28Ad2fB688968f09496d')
export let ADDRESS_INTERNAL_123 = Address.fromHexString('0xcc12cbc87efadadbd05bc82a76af3473510e455e')
export let ADDRESS_INTERNAL_124 = Address.fromHexString('0x44cCa284721f7209A186bCfb17CB57F0E81615E0')
export let ADDRESS_INTERNAL_125 = Address.fromHexString('0x172f7f304ce204cb09d4dcaf5d19c41792e9c6aa')
export let ADDRESS_INTERNAL_126 = Address.fromHexString('0xc0d2b1f95b13c36dd4600266772d0d9c846ed7ed')
export let ADDRESS_INTERNAL_127 = Address.fromHexString('0xBcD773C406649085d9e36681543D784b58D33333')
export let ADDRESS_INTERNAL_128 = Address.fromHexString('0x81548b041871a34e8433be5563ec076f501e8ab7')
export let ADDRESS_INTERNAL_129 = Address.fromHexString('0x0926ada4b04fc599327cce53cd7affdcfd091142')
export let ADDRESS_INTERNAL_130 = Address.fromHexString('0xa26832ebc110929cba95178a45535281aa059fbe')
export let ADDRESS_INTERNAL_131 = Address.fromHexString('0x70D6eE38f5F6ae98c5B2E224aDad6577909cce77')
export let ADDRESS_INTERNAL_132 = Address.fromHexString('0x5f6FD35f75051D1A4E482ED901a002080AA37792')
export let ADDRESS_INTERNAL_133 = Address.fromHexString('0x914f0A10dA410427558b95a70F3a3B6Fe4CD1b99')
export let ADDRESS_INTERNAL_134 = Address.fromHexString('0xB480FFFcB720B163f992c4777AFdbC335C2ad096')
export let ADDRESS_INTERNAL_135 = Address.fromHexString('0x32f72089951ae39050f05f073aa697e6b0fcacb4')
export let ADDRESS_INTERNAL_136 = Address.fromHexString('0x5171e41c68ade8f3a0b302f43b33602b4f8b3482')
export let ADDRESS_INTERNAL_137 = Address.fromHexString('0x366e513cedf4346232f2eac0af075bafb5bd2b2c')
export let ADDRESS_INTERNAL_138 = Address.fromHexString('0xD698f9554886450B2Dc707801BE8e0D5392B9cc1')
export let ADDRESS_INTERNAL_139 = Address.fromHexString('0x732dae0c3af5b494701d2d9505a27449eec22bbd')
export let ADDRESS_INTERNAL_140 = Address.fromHexString('0xbf362d0eb64e9508ad42ef5739331c5e1ad48466')
export let ADDRESS_INTERNAL_141 = Address.fromHexString('0xe10ca227e0e9e46cc2d88282ca9b25ed8715d087')
export let ADDRESS_INTERNAL_142 = Address.fromHexString('0x5411ed5b1048e61b061e5368a58f575e0252e278')
export let ADDRESS_INTERNAL_143 = Address.fromHexString('0x7b9e21A744D6020F47b9A0af91B0ad87e523c0FF')
export let ADDRESS_INTERNAL_144 = Address.fromHexString('0xf2e2472ED740e28D7248Cf9EDABa501570c8B74C')
export let ADDRESS_INTERNAL_145 = Address.fromHexString('0xbf3460A2Da0c2D0841B6550b9dec5507F642422B')
export let ADDRESS_INTERNAL_146 = Address.fromHexString('0x122C5ACb22Af3ba3D63243A7c6AEb75B149C3186')
export let ADDRESS_INTERNAL_147 = Address.fromHexString('0x9779C2850B376B5386f2fA531f745eeA31B8c683')
export let ADDRESS_INTERNAL_148 = Address.fromHexString('0xe80764D0873b7305feD50d845011E8b82947DDFF')
export let ADDRESS_INTERNAL_149 = Address.fromHexString('0x6c7EA81Bb46ec44720AF326a25dF1DDE93BC4B87')
export let ADDRESS_INTERNAL_150 = Address.fromHexString('0x6d8Ef813EFd7E421E9e9B7D154e2e0876321DfBA')
export let ADDRESS_INTERNAL_151 = Address.fromHexString('0xd999074F947f9813bDD161Fb2452332ac6a4D695')
export let ADDRESS_INTERNAL_152 = Address.fromHexString('0x71aC145C930C28daa73CbB9D99171b1191Ad947D')
export let ADDRESS_INTERNAL_153 = Address.fromHexString('0x8a5Ca555c98f3B1463097C456642dCfe05D4BE64')
export let ADDRESS_INTERNAL_154 = Address.fromHexString('0x0A13bC2FF59240D9e2AB067f98D4A7468c2C4855')
export let ADDRESS_INTERNAL_155 = Address.fromHexString('0xB2fc53F237CF2D72a8b7a6589BB72B9711552C90')
export let ADDRESS_INTERNAL_156 = Address.fromHexString('0xcf883f477e6C7BA87bAa1312D73f1a46a7a5B6E2')
export let ADDRESS_INTERNAL_157 = Address.fromHexString('0x7432b5212F19af018b33b73a55d1996960E59c51')
export let ADDRESS_INTERNAL_158 = Address.fromHexString('0x6B04742d37fE7e61be0a12C52b43ccD4506CBfaF')
export let ADDRESS_INTERNAL_159 = Address.fromHexString('0x8a5E1376F87963aEDA74152862EbD90e47D8Eddd')
export let ADDRESS_INTERNAL_160 = Address.fromHexString('0xADCc784e3D6C7C37521c30DbCd48502E83BC82D7')
export let ADDRESS_INTERNAL_161 = Address.fromHexString('0x1C8F6E5ec1F51AF77B7913c8ed9Ed0b90cd176DA')
export let ADDRESS_INTERNAL_162 = Address.fromHexString('0xBFA0cc854B31031a608c10e3aBc41b194dfc2C9A')
export let ADDRESS_INTERNAL_163 = Address.fromHexString('0x0FfD214b8bD957ec23986c3e342c4d9065742A98')
export let ADDRESS_INTERNAL_164 = Address.fromHexString('0x90b32e4BEd4c89DcE5EE0D926bA1992ec27833A3')
export let ADDRESS_INTERNAL_165 = Address.fromHexString('0x8De95f2128628D67D760bd6D0C559a5c41cd0161')
export let ADDRESS_INTERNAL_166 = Address.fromHexString('0x883feBA76A64dDc002eD7994cf077a7834C32c77')
export let ADDRESS_INTERNAL_167 = Address.fromHexString('0x771add5860f776dC6F1330585548f1BD5494F6eD')
export let ADDRESS_INTERNAL_168 = Address.fromHexString('0xBc0E77C141e7a7bbaad06a2a928264F2f9B603EE')
export let ADDRESS_INTERNAL_169 = Address.fromHexString('0x4e16dbce720362eB45AE5b35789876D72c005de0')
export let ADDRESS_INTERNAL_170 = Address.fromHexString('0xe72cb3669cdbC31f742F1578f3359d5a9DE449C1')
export let ADDRESS_INTERNAL_171 = Address.fromHexString('0xF5379F1ce2523e2C09158c73236CEB0272eCD211')
export let ADDRESS_INTERNAL_172 = Address.fromHexString('0xd59c96c3abB61554af2be3C70D6F40877a7Fc2E5')
export let ADDRESS_INTERNAL_173 = Address.fromHexString('0x274ce578e9F564636A37a16C76A6D2B3F0526AF7')
export let ADDRESS_INTERNAL_174 = Address.fromHexString('0x7A3c9Ce1aE1d8ad16422E59E8e0D149AF849f0F6')
export let ADDRESS_INTERNAL_175 = Address.fromHexString('0x952dc72b0F7935BFE501F8e9656fF28583810c34')
export let ADDRESS_INTERNAL_176 = Address.fromHexString('0x98cc33c8ef646185fb3641c059ffe8146dd9e25e')
export let ADDRESS_INTERNAL_177 = Address.fromHexString('0xF76A09d5930285456162Fb3C5317d4d79498990a')
export let ADDRESS_INTERNAL_178 = Address.fromHexString('0xaeb5b69C6452574c83954d6b4CaB89B50184f24D')
export let ADDRESS_INTERNAL_179 = Address.fromHexString('0xC34171CCE49E752607472708389310A2C28C8363')
export let ADDRESS_INTERNAL_180 = Address.fromHexString('0xED81Db364F5a15F96817b9b2e416Edf01cA295c3')
export let ADDRESS_INTERNAL_181 = Address.fromHexString('0x0aa350fb487f75d4f5d6ed920a5ae0923ded06e1')
export let ADDRESS_INTERNAL_182 = Address.fromHexString('0x91cf6f1601aC171f277CaAe84b79293280fFb1E4')
export let ADDRESS_INTERNAL_183 = Address.fromHexString('0xCda2Bf76339799bE7934C27913C2c0Ee391Ec7E6')
export let ADDRESS_INTERNAL_184 = Address.fromHexString('0xEBbFD3Ad4ACa9F69292E412eb98f1C0BaD428cB8')
export let ADDRESS_INTERNAL_185 = Address.fromHexString('0x9343873867756F9E8Ca203b80b70097e222FDbB3')
export let ADDRESS_INTERNAL_186 = Address.fromHexString('0xc9BEFe0Eb420d540362E163cC20B0c5562CDAB6b')
export let ADDRESS_INTERNAL_187 = Address.fromHexString('0x3aE21cA67258d1A24b49A186493f4Fbb7808fe1d')
export let ADDRESS_INTERNAL_188 = Address.fromHexString('0x5788D8078b0186893c12FA5324f227D0AD400c1c')
export let ADDRESS_INTERNAL_189 = Address.fromHexString('0xDec10D38f6A5CCa2a16cE5714e372D14aDf67742')
export let ADDRESS_INTERNAL_190 = Address.fromHexString('0xe14D364fd9b771838C49062D12C2F6da4b03c816')
export let ADDRESS_INTERNAL_191 = Address.fromHexString('0xdB75A4f592561B2516A12AAe8b06c9120018ed3D')
export let ADDRESS_INTERNAL_192 = Address.fromHexString('0x9c2D043aAd476515da882DaA28e70C0dc7A63d67')
export let ADDRESS_INTERNAL_193 = Address.fromHexString('0xC7E462462E7Abe91eA1D5f56E16961398F368fF5')
export let ADDRESS_INTERNAL_194 = Address.fromHexString('0x39E34417811C3965636729659fdc7420f51B2e4F')
export let ADDRESS_INTERNAL_195 = Address.fromHexString('0xC7E462462E7Abe91eA1D5f56E16961398F368fF6')
export let ADDRESS_INTERNAL_196 = Address.fromHexString('0x669f1fcf52d91000ec67a59d245ac069afd385ca')
export let ADDRESS_INTERNAL_197 = Address.fromHexString('0x8f3a2b69e5a9fb9b52bbb9b21486f479f0c7631f')
export let ADDRESS_INTERNAL_198 = Address.fromHexString('0x82c954745c2c5886dfa7f11cb42edda04c686f16')
export let ADDRESS_INTERNAL_199 = Address.fromHexString('0x3692d40a503c768c4ad9dec3d668988862fd693c')
export let ADDRESS_INTERNAL_200 = Address.fromHexString('0xfcec6a5bec7ae11b0b0b4e4143dacdb74998743d')
export let ADDRESS_INTERNAL_201 = Address.fromHexString('0x2b97c302ba9f077bdd0c58c1580d17856a375978')
export let ADDRESS_INTERNAL_202 = Address.fromHexString('0x5934cce7f808a0f3d41e8c5ee5025a9698cd13f2')
export let ADDRESS_INTERNAL_203 = Address.fromHexString('0x81401271def75fcd73eb7cdaed1fb017afc80302')
export let ADDRESS_INTERNAL_204 = Address.fromHexString('0x5802fa7dd47834fc8b25a4bd7b356f5fca126506')
export let ADDRESS_INTERNAL_205 = Address.fromHexString('0x1Af9fc2514f4Af81F281E3EBc71947CB0bEcAa5D')
export let ADDRESS_INTERNAL_206 = Address.fromHexString('0xc092799A3a37B61d4324b6b32a26505952b5620E')
export let ADDRESS_INTERNAL_207 = Address.fromHexString('0x5F1e8CAb64804B3B0cd36603686c151Ee8c037c4')
export let ADDRESS_INTERNAL_208 = Address.fromHexString('0x4f9C760E30fD99d90E135dd363418aCbC9fE0641')
export let ADDRESS_INTERNAL_209 = Address.fromHexString('0x6ce800Edaf2dC97Ba81D7cE059F1f740A5E41E85')
export let ADDRESS_INTERNAL_210 = Address.fromHexString('0xdb260F9c00f3BbA89Bc9e711A63675abDA47dDf7')
export let ADDRESS_INTERNAL_211 = Address.fromHexString('0x59516c978e2573D73Db8A53EB5A1809ee2Fe5FEc')
export let ADDRESS_INTERNAL_212 = Address.fromHexString('0xA964593d042d62e4BB112B36c24fCB9E96b20b1c')
export let ADDRESS_INTERNAL_213 = Address.fromHexString('0xA8B3466da3440a1f41929737330FEa9F305e8225')
export let ADDRESS_INTERNAL_214 = Address.fromHexString('0xaC90C7685EeaB93b9f303fbd0e9CFb74d75DBc4A')
export let ADDRESS_INTERNAL_215 = Address.fromHexString('0x00e8F1A537E787921C4717927f5c08C591119C1F')
export let ADDRESS_INTERNAL_216 = Address.fromHexString('0xdff0C80e60E16778C0ea13642A2E2b5774f18664')
export let ADDRESS_INTERNAL_217 = Address.fromHexString('0xEE4a11491125C7f438E563666d49f4a03f1e69bD')
export let ADDRESS_INTERNAL_218 = Address.fromHexString('0x122C5ACb22Af3ba3D63243A7c6AEb75B149C3186')
export let ADDRESS_INTERNAL_219 = Address.fromHexString('0xD4F0746A7679C9AdE48Ab9b964511b4B97a35c73')
export let ADDRESS_INTERNAL_220 = Address.fromHexString('0x4A85b11F7B3271a853DD2b8DcEc93B0857041fe6')
export let ADDRESS_INTERNAL_221 = Address.fromHexString('0xAA2da1005eF38f7bcEC362F9918F6f5606967613')
export let ADDRESS_INTERNAL_222 = Address.fromHexString('0xB2DF747C5D1bDadD6F7e581ade3Ad193d6A296f2')
export let ADDRESS_INTERNAL_223 = Address.fromHexString('0x1bD1f447de05277f61C0bD359D16be685F7a2691')
export let ADDRESS_INTERNAL_224 = Address.fromHexString('0x749425C165808cF6238a09ee18b01ac27CBAD9E7')
export let ADDRESS_INTERNAL_225 = Address.fromHexString('0xaa8CBEE90d155511ca3799A9b6C7b0D4d4d51c24')
export let ADDRESS_INTERNAL_226 = Address.fromHexString('0x27779D17EC893E751bb126418aaa7155edd00Be2')
export let ADDRESS_INTERNAL_227 = Address.fromHexString('0xeE6b0c504b1d0B3A27E606896a0313367Fd9F856')
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
