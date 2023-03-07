import {step} from "../utils/util";
import {launchWithNexus} from "../../src/setup/launch";
import {setUpNexus} from "../../src/setup/setup";
import {PASSWd, UserName} from "../config/config";

describe('prepare', function () {

    let browser;
    let nexusWallet;
    this.timeout(30000)
    it("init", async () => {
        await step("launchWithNexus", async () => {
            browser = await launchWithNexus(
                {nexusPath: "./build"}
            )
        })
        await step("init net ", async () => {
            nexusWallet = await setUpNexus(browser, {
                // mock: true,
                userName: UserName,
                // seed: MNEMONIC,
                passwd: PASSWd
            })
        })
    })

    after(async () => {
        await browser.close();
    })

});
