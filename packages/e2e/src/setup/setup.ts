import {Browser} from "puppeteer";
import {NexusSetUpOptions, NexusWallet} from "../types";
import {MockNexus} from "../nexus";


export async function setUpNexus(browser:Browser,nexusSetUpOptions:NexusSetUpOptions):Promise<NexusWallet>{
    //todo init nexus
    let nex:NexusWallet
    if (nexusSetUpOptions.mock){
        nex =  new MockNexus(browser,await getExtensionId(browser))
    }
    const managePage = await nex.walletManager.getNewPage()

    if (nexusSetUpOptions.seed!= undefined){
        // create new account
        await nex.walletManager.importWallet(managePage,nexusSetUpOptions.seed,nexusSetUpOptions.passwd)
        await managePage.close()
        return nex
    }
    // load account by seed
    await nex.walletManager.createANewWallet(managePage,nexusSetUpOptions.passwd)
    await managePage.close()
    return nex
}

async function getExtensionId(browser:Browser):Promise<string>{
    // get extension targe
    const backgroundPageTarget = await browser.waitForTarget(
        target => target.type() === 'background_page' || target.type() === 'service_worker'
    );
    // from chrome-extension://ebabfojjjcgoninaddkcccjnpjngllkd/popup.html get ebabfojjjcgoninaddkcccjnpjngllkd
    return backgroundPageTarget.url().split("/")[2]
}

