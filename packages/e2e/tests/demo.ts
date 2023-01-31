import {launchWithNexus} from "../src/setup/launch";
import {setUpNexus} from "../src/setup/setup";
import {Browser, Page} from "puppeteer";
import {NexusWallet} from "../src/types";

describe('demo', function () {

    this.timeout(10000 * 1000)
    let browser: Browser;
    let nexusWallet: NexusWallet;
    let page: Page;
    before(async () => {
        browser = await launchWithNexus(
            {nexusPath: "./build"}
        )
        nexusWallet = await setUpNexus(browser, {mock: true,
            // seed:"finite omit doze dog pat team seek pink punch scale clap computer",
            passwd:"lllg123123121"
        })
    })
    it("connect", async () => {
        page = await browser.newPage()
        await page.goto("http://localhost:3000",{
            waitUntil: 'networkidle2'
        })
        await page.click("#connectButton")
        await nexusWallet.approve()
    })


    after(async () => {
        await browser.close();
    })
})

export async function Sleep(timeout: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, timeout));
}

