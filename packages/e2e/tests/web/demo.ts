import {launchWithNexus} from "../../src/setup/launch";
import {setUpNexus} from "../../src/setup/setup";
import {NexusWallet} from "../../src/types";
import {BrowserContext, Page} from "playwright";

import {failedTestScreenshot, step} from "../utils/util";
import {MNEMONIC, NEXUS_WEB_URL, PASSWd, UserName} from "../config/config";
import {expect} from "chai";


describe('demo', function () {

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
                seed: MNEMONIC,
                passwd: PASSWd
            })
        })

        // link web
        await step(`goto:${NEXUS_WEB_URL}`, async () => {
            page = await browser.newPage()
            await page.goto(NEXUS_WEB_URL, {})
        })
        await step("click connectButton", async () => {
            await page.click("#connectButton")
        })
        let is2ndLinked: boolean;
        await step("check is 2nd link web", async () => {
            is2ndLinked = await page.locator("#connectButton").isDisabled({timeout: 500})
        })
        await step("nexusWallet click connect button", async () => {
            if (!is2ndLinked) {
                await nexusWallet.connect()
            }
        })
    })
    it("连接成功之后,connectButton 按钮将改为关闭状态", async () => {
        await step(" click connectButton is disabled", async () => {
            await page.locator("#connectButton").isDisabled()
        })
    })

    const signDataTestCases = [{
        inputSignData: "{data:\"0x1234\"}",
        expectedGetResponse: "mooooock signed data"
    }]
    for (let i = 0; i < signDataTestCases.length; i++) {
        let signDataTestCase = signDataTestCases[i];
        it(`${i}-signData test`, async () => {
            await step(`input:${signDataTestCase.inputSignData}`, async () => {
                await page.locator(`#fullOwnership-signDataInput`).type(signDataTestCase.inputSignData)
            })
            await step("click signData", async () => {
                await page.locator(`#fullOwnership-signDataButton`).click()
            })

            await step(`nexus:click approve sign`, async () => {
                await nexusWallet.approve(PASSWd)
            })
            await step(`check response  == ${signDataTestCase.expectedGetResponse}`, async () => {
                const ret = await page.locator(`#fullOwnership-signDataResult`).innerText()
                expect(ret).to.be.equal(signDataTestCase.expectedGetResponse)
            })
        })

    }


    afterEach(async ()=>{
        await failedTestScreenshot(this, browser)

    })
    after(async () => {
        await browser.close();
    })
})


