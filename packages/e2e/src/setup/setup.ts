import {Browser} from "puppeteer";
import {NexusSetUpOptions, NexusWallet} from "../types";
import {MockNexus} from "../nexus";


export async function setUpNexus(browser:Browser,nexusSetUpOptions:NexusSetUpOptions):Promise<NexusWallet>{
    //todo init nexus
    if (nexusSetUpOptions.mock){
        return new MockNexus(browser,await getExtensionId(browser))
    }
}

async function getExtensionId(browser:Browser):Promise<string>{
    // get extension targe
    const backgroundPageTarget = await browser.waitForTarget(
        target => target.type() === 'background_page' || target.type() === 'service_worker'
    );
    // from chrome-extension://ebabfojjjcgoninaddkcccjnpjngllkd/popup.html get ebabfojjjcgoninaddkcccjnpjngllkd
    return backgroundPageTarget.url().split("/")[2]
}

