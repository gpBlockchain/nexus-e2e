import { getBrowserRandomUserPath, step} from "./utils/util";
import {launchWithNexus} from "../src/setup/launch";
import {BrowserContext, Page} from "playwright";
import {NexusWallet} from "../src/types";
import {enableWallet} from "../src/nexus/servicer/provider";
import {Sleep} from "../src/nexus/util/helper";

describe('test session', function () {


    this.timeout(10000 * 1000)
    let browser: BrowserContext;
    let nexusWallet: NexusWallet;
    let page: Page;

    it("sadad",async ()=>{
        for (let i = 0; i < 1000; i++) {
            console.log(
                getBrowserRandomUserPath()
            )
        }

    })
    it('demo', async () => {
        await step("launchWithNexus", async () => {
            browser = await launchWithNexus(
                {nexusPath: "./build"}
            )
        })

        // await step("init net ", async () => {
        //     nexusWallet = await setUpNexus(browser, {
        //         // mock: true,
        //         userName: UserName,
        //         // seed: MNEMONIC,
        //         passwd: PASSWd
        //     })
        // })
        await step("clean session",async ()=>{
            await browser.clearCookies()
        })

        await step("go to new web ", async () => {
            page = await browser.newPage()
            await page.goto("https://www.baidu.com/")
        })
        await step("send enable ",async ()=>{
            await enableWallet(page)
        })

        // await step("init net ", async () => {
        //     nexusWallet = await setUpNexus(browser, {
        //         // mock: true,
        //         userName: UserName,
        //         seed: MNEMONIC,
        //         passwd: PASSWd
        //     })
        // })
        // await step("go to new web ", async () => {
        //     page = await browser.newPage()
        //     await page.goto("https://www.baidu.com/")
        // })
        // await step("send enable ",async ()=>{
        //     await enableWallet(page)
        // })

        // await step("")

    });
    after(async () => {
        await Sleep(1000_000)
        await browser.close();
    })

});
