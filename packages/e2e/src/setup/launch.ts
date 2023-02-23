import {NexusLaunchOptions} from "../types";

import {chromium} from "playwright-core";
import {BrowserContext} from "playwright";
import {PreloadJsContext} from "../nexus/servicer/provider";

export async function launchWithNexus(
    option: NexusLaunchOptions
): Promise<BrowserContext> {
    const browserContext =  await chromium.launchPersistentContext("tmp", {
        headless: false,
        args: [
            `--disable-extensions-except=${option.nexusPath}`,
            `--load-extension=${option.nexusPath}`
        ],
        permissions: ["clipboard-read"],
        // slowMo: 150,
        // // recordVideo: {
        // //     dir: 'videos/',
        // //     size: { width: 640, height: 480 },
        // // }
        ...option.playwrightOptions
    })
    await browserContext.addInitScript({content:PreloadJsContext})
    return browserContext
}

