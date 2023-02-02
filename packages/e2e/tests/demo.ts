import {launchWithNexus} from "../src/setup/launch";
import {setUpNexus} from "../src/setup/setup";
import {NexusWallet} from "../src/types";
import {BrowserContext, Page} from "playwright";

import {expectedThrow} from "./utils/util";


describe('demo', function () {

    this.timeout(10000 * 1000)
    let browser: BrowserContext;
    let nexusWallet: NexusWallet;
    let page: Page;
    before(async () => {
        browser = await launchWithNexus(
            {nexusPath: "./build",
                    playwrightOptions:{
                        slowMo:10,
                        recordVideo: {
                            dir: 'videos/',
                            size: { width: 640, height: 480 },
                        },
                    }
            }
        )

        nexusWallet = await setUpNexus(browser, {mock: true,
            seed:"finite omit doze dog pat team seek pink punch scale clap computer",
            passwd:"lllg123123121"
        })
    })
    it("connect", async () => {
        page = await browser.newPage()
        await page.goto("http://localhost:3000",{})
        await page.click("#connectButton")
        await nexusWallet.approve()
        await expectedThrow(page.click("#connectButton",{timeout:300}))
    })


    after(async () => {
        await browser.close();
    })
})


