import {launchWithNexus} from "../../src/setup/launch";
import {setUpNexus} from "../../src/setup/setup";
import {NexusWallet} from "../../src/types";
import {BrowserContext, Page} from "playwright";

import {expectedThrow, failedTestScreenshot, step} from "../utils/util";


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
                userName: "xm",
                // seed:"finite omit doze dog pat team seek pink punch scale clap computer",
                passwd: "lllg123123121"
            })
        })

    })
    it("2nd connect will failed", async () => {
        await step("goto:http://localhost:3000", async () => {
            page = await browser.newPage()
            await page.goto("http://localhost:3000", {})
        })
        await step("click connectButton", async () => {
            await page.click("#connectButton")
        })
        await step("nexusWallet click connect button", async () => {
            await nexusWallet.connect()
        })
        await step("2nd click connectButton", async () => {
            await expectedThrow(page.click("#connectButton", {timeout: 300}))
        })
    })


    after(async () => {
        await failedTestScreenshot(this, browser)
        await browser.close();
    })
})


