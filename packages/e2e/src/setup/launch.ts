import {NexusLaunchOptions} from "../types";

import {chromium} from "playwright-core";
import {BrowserContext} from "playwright";

export async function launchWithNexus(
    option: NexusLaunchOptions
): Promise<BrowserContext> {
    return await chromium.launchPersistentContext("tmp", {
        headless: false,
        args: [
            `--disable-extensions-except=${option.nexusPath}`,
            `--load-extension=${option.nexusPath}`
        ],
        permissions: ["clipboard-read"],
        // slowMo:50,
        // // recordVideo: {
        // //     dir: 'videos/',
        // //     size: { width: 640, height: 480 },
        // // }
        ...option.playwrightOptions
    });
}

