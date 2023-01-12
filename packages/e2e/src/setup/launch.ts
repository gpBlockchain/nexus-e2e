import {Browser, launch} from "puppeteer";
import {NexusLaunchOptions} from "../types";


export async function launchWithNexus(
    option: NexusLaunchOptions
): Promise<Browser> {
    return await launch({
        headless: false,
        // slowMo: 250,
        args: [
            `--disable-extensions-except=${option.nexusPath}`,
            `--load-extension=${option.nexusPath}`,
        ],
        ...(option.puppeteerOptions ?? {}
        ),
    })
}

