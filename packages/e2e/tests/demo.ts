import {launchWithNexus} from "../src/setup/launch";
import {setUpNexus} from "../src/setup/setup";
import {expect} from "chai";
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
        nexusWallet = await setUpNexus(browser, {mock: true})
    })
    it("connect", async () => {
        page = await browser.newPage()
        await page.goto("http://localhost:9011")
        await page.click("#connectButton")
        const nexusPage = await nexusWallet.getNotificationPage()
        let res1 = await nexusWallet.popup.getHelloNexus(nexusPage);
        expect(res1).to.be.include("Hello Nexus")
        await nexusWallet.close()
        const newPage = await nexusWallet.popup.getNewPage();
        res1 = await nexusWallet.popup.getHelloNexus(newPage);
        expect(res1).to.be.include("Hello Nexus")
        await newPage.close()
    })

    it('get live cell ', async () => {
        await page.bringToFront()
        await page.waitForSelector("#getLiveCellButton")
        await page.click("#getLiveCellButton")
        await page.waitForFunction(
            () => document.getElementById("getLiveCellResult").innerText !== "",
        );
        let res = await page.$eval("#getLiveCellResult", (e: HTMLSpanElement) => e.innerText)
        expect(res).to.be.equal("[]")
    });

    after(async () => {
        await nexusWallet.close()
        await browser.close();
    })
})

export async function Sleep(timeout: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, timeout));
}

