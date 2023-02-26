import {failedTestScreenshot, step} from "../utils/util";
import {launchWithNexus} from "../../src/setup/launch";
import {BrowserContext} from "playwright";
import {setUpNexus} from "../../src/setup/setup";
import {MNEMONIC, PASSWd, UserName} from "../config/config";
import {NexusWallet} from "../../src/types";
import {ownershipSignData} from "../../src/nexus/servicer/provider";

describe('enable', function () {

    let browser: BrowserContext;
    let nexusWallet: NexusWallet;
    this.timeout(3000_000)

    it("xxx", async () => {

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

        let page = await browser.newPage()
        await page.goto("https://www.bilibili.com/")

        const ret = ownershipSignData(page, "fullOwnership", {signer: "0x00", data: "0x00"})
        nexusWallet.approve(PASSWd)
        console.log(await ret)
    })

    after(async () => {
        await failedTestScreenshot(this, browser)
        await browser.close();
    })
});
