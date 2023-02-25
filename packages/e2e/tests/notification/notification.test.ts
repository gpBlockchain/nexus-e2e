import {BrowserContext, Page} from "playwright";
import {NexusWallet} from "../../src/types";
import {failedTestScreenshot, step} from "../utils/util";
import {launchWithNexus} from "../../src/setup/launch";
import {setUpNexus} from "../../src/setup/setup";
import {PASSWd, UserName} from "../config/config";
import {enableWallet, ownershipSignData} from "../../src/nexus/servicer/provider";
import {expect} from "chai";

describe('notification', function () {
    this.timeout(10000 * 1000)
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
        browser.setDefaultTimeout(3000)



    })


    describe('sign-data', function () {


        before(async ()=>{
            await step("goto:baidu", async () => {
                page = await browser.newPage()
                await page.goto("https://www.baidu.com/")
            })

            await step("connected :baidu", async () => {
                let enable = enableWallet(page)
                nexusWallet.connect()
                await enable
            })
        })

        let signDataCases = [
            {
                ownerShipType: "fullOwnership",
                signDataPayload: {signer: "0x00", data: "0x00"},
                expected: "mooooock signed data"
            },
            {
                ownerShipType: "fullOwnership",
                signDataPayload: {signer: "0x00", data: "0x00"},
                expected: "mooooock signed data"
            },
            {
                ownerShipType: "fullOwnership",
                signDataPayload: {signer: "0x00", data: "0x00"},
                expected: "mooooock signed data"
            }, {
                ownerShipType: "fullOwnership",
                signDataPayload: {signer: "0x00", data: "0x00"},
                expected: "mooooock signed data"
            },
        ]
        for (let i = 0; i < signDataCases.length; i++) {
            let signDataCase = signDataCases[i]
            it(`signData(type:${signDataCase.ownerShipType},payload:${JSON.stringify(signDataCase.signDataPayload)}),expected:${signDataCase.expected}`, async () => {
                let signResponse;
                let approve;
                await step(`send ${signDataCase.ownerShipType}.signData(${JSON.stringify(signDataCase.signDataPayload)}) request`, async () => {
                    // @ts-ignore
                    signResponse = ownershipSignData(page, signDataCase.ownerShipType, signDataCase.signDataPayload)
                })
                await step(`approve with passwd:${PASSWd}`, async () => {
                    approve = nexusWallet.approve(PASSWd)
                })
                await step(`request response expected eq ${signDataCase.expected}`, async () => {
                    signResponse = await signResponse
                    await approve
                    expect(signResponse).to.be.equal(signDataCase.expected)
                })

            })

        }
    })

    afterEach(async () => {
        await failedTestScreenshot(this, browser)
    })
    after(async () => {
        await browser.close();
    })

})
