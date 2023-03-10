import {BrowserContext, Page} from "playwright";
import {NexusWallet} from "../../src/types";
import {step} from "../utils/util";
import {launchWithNexus} from "../../src/setup/launch";
import {setUpNexus} from "../../src/setup/setup";
import {CKB_RPC, NEXUS_WEB_URL, PASSWd, UserName} from "../config/config";
import {
    getSendTransactionMsg,
    transactionToWalletSendTxMsg,
} from "../../src/nexus/helper/notification";
import {BI, RPC} from "@ckb-lumos/lumos";

describe('signTransaction', function () {


    this.timeout(1000 * 6000)
    let browser: BrowserContext;
    let nexusWallet: NexusWallet;
    let page: Page;

    before(async () => {
        await step("launchWithNexus", async () => {
            browser = await launchWithNexus(
                {nexusPath: "./build"}
            )
        })
        await step("setUpNexus:createNewAccount", async () => {
            nexusWallet = await setUpNexus(browser, {
                mock: true,
                userName: UserName,
                // seed: MNEMONIC,
                passwd: PASSWd
            })
        })
        browser.setDefaultTimeout(60000)
    })

    describe(`${NEXUS_WEB_URL}`, function () {
        before(async () => {
            await step(`goto:${NEXUS_WEB_URL}`, async () => {
                page = await browser.newPage()
                await page.goto(NEXUS_WEB_URL)
            })
            await step("click  connect", async () => {
                await page.locator("#connectButton").click()
            })
            await step("wallet connect", async () => {
                await nexusWallet.connect()
            })
        })
        it("发送一笔交易,能够在面板看到cell", async () => {

            let txText = `{
                        "cellDeps": [
                            {
                                "outPoint": {
                                    "txHash": "0x71a7ba8fc96349fea0ed3a5c47992e3b4084b031a42264a018e0072e8172e46c",
                                    "index": "0x0"
                                },
                                "depType": "depGroup"
                            },
                            {
                                "outPoint": {
                                    "txHash": "0xe2fb199810d49a4d8beec56718ba2593b665db9d52299a0f9e6e75416d73ff5c",
                                    "index": "0x2"
                                },
                                "depType": "code"
                            }
                        ],
                        "inputs": [
                            {
                                "previousOutput": {
                                    "txHash": "0x9154df4f7336402114d04495175b37390ce86a4906d2d4001cf02c3e6d97f39c",
                                    "index": "0x0"
                                },
                                "since": "0x0"
                            },
                            {
                                "previousOutput": {
                                    "txHash": "0xf8de3bb47d055cdf460d93a2a6e1b05f7432f9777c8c474abf4eec1d4aee5d37",
                                    "index": "0x1"
                                },
                                "since": "0x0"
                            }
                        ],
                        "outputs": [
                            {
                                "lock": {
                                    "codeHash": "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",
                                    "hashType": "type",
                                    "args": "0x40af75b13d4a3845dd8b835abed0f51e18677240"
                                },
                                "type": {
                                    "codeHash": "0x82d76d1b75fe2fd9a27dfbaa65a039221a380d76c926f378d3f81cf3e7e13f2e",
                                    "hashType": "type",
                                    "args": "0x"
                                },
                                "capacity": "0xe72297e701"
                            },
                            {
                                "lock": {
                                    "codeHash": "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",
                                    "hashType": "type",
                                    "args": "0x69b1d6d0b6f40b007d01f19bb165a4c099840913"
                                },
                                "type": null,
                                "capacity": "0x1718c73e6"
                            }
                        ],
                        "outputsData": ["0x3c484c0000000000", "0x"],
                        "headerDeps": [
                            "0xaffb65e2f064eb039c624fc287d40bf60aae42cb7d3e6985cc102260f152deec"
                        ],
                        "hash": "0x1ea34c7b6735689a9661f1a43ece11a866e47718817d38e0c5b92e5a973df739",
                        "version": "0x0",
                        "witnesses": [
                            "0x55000000100000005500000055000000410000007037d390c84ad7c9b44d62834e6f0e7f083ee5cedbc12b152392cc7fd00f56aa42ef412d61ba24e09fb19ea952b2996883a861bceffa7cba92df2bab224cc09d00",
                            "0x55000000100000005500000055000000410000000e399817a6120495314b2c13738a84b5e5bdaef8be69b15af924c4ebbaf0373c40ae558f9370d94c72b19ecd697999ae8b73055876d850c3e05ea682664ce67a00"
                        ]
                    }`
            txText = await addTxInput(txText,100,CKB_RPC)
            console.log("text:",txText)
            await step("input send transaction", async () => {
                await page.locator("#fullOwnership-signTransactionInput").type(txText)
            })

            await step("click send transaction", async () => {
                await page.locator("#fullOwnership-signTransactionButton").click()
            })

            await step("get wallet msg ", async () => {
                const sendTxPage = await nexusWallet.getNotificationPage()
                const ret = await getSendTransactionMsg(sendTxPage)
                const txMap = JSON.parse(txText)
                const msg = await transactionToWalletSendTxMsg(CKB_RPC, txMap)
                console.log("msg:", JSON.stringify(msg))
                console.log('ret:', JSON.stringify(ret))
            })

        })
        it("当input 特别多", async () => {
            console.log("")
        })
        it("当output 特别多", async () => {

        })
        it("cell标志xxx", async () => {

        })
        it("当xxx情况失败", async () => {

        })
        it("input 包含 不存在hash",async ()=>{})
        it("")

    });
    after(async () => {
        await browser.close();
    })
});

//{
//                                 "previousOutput": {
//                                     "txHash": "0x9154df4f7336402114d04495175b37390ce86a4906d2d4001cf02c3e6d97f39c",
//                                     "index": "0x0"
//                                 },
//                                 "since": "0x0"
//                             }
async function addTxInput(tx: string, num:number,ckbUrl: string):Promise<any> {
    const txMap = JSON.parse(tx)
    const ckb = new RPC(ckbUrl)

    // todo: 当前是手动查找链上账户
    const cells = await ckb.getCells({
        script: {
            codeHash: "0x79f90bb5e892d80dd213439eeab551120eb417678824f282b4ffb5f21bad2e1e",
            hashType: "type",
            args: "0x011dcdc10e675f0984f4b719a04d046bf8d4d81a4d00"
        },
        scriptType:"lock"
    }, "asc", BI.from(num).toHexString())
    const inputs = cells.objects.map((cell) =>{
        return  {
            "previousOutput":{
                "txHash":cell.outPoint.txHash,
                "index":cell.outPoint.index
            },
            "since":"0x0"
        }
    })
    for (let i = 0; i < inputs.length; i++) {
        txMap.inputs.push(inputs[i])
    }
    return JSON.stringify(txMap)
}
