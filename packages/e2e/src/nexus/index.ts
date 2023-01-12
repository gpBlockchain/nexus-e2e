import {NexusWallet, PopupPageHelper} from "../types";
import {Browser, Page} from "puppeteer";
import {NexusUrl} from "./const";
import {PopupLocators} from "./page/popup-page";

const EXTENSION_URL_PRE = "chrome-extension://"

export class PopupPageHelperImpl implements PopupPageHelper {
    extensionId: string
    browser: Browser

    constructor(browser: Browser, extensionId: string) {
        this.browser = browser;
        this.extensionId = extensionId
    }

    getHelloNexus = (page: Page) => getHelloNexusByPage(page)
    getNewPage = () => getExtensionPageByUrl(this.browser, this.extensionId, NexusUrl.popup)
}

export class MockNexus implements NexusWallet {

    extensionId: string
    browser: Browser
    popup: PopupPageHelper

    constructor(browser: Browser, extensionId: string) {
        this.browser = browser;
        this.extensionId = extensionId
        this.popup = new PopupPageHelperImpl(this.browser, this.extensionId);
    }

    close = () => close(this.browser, this.extensionId)
    getNotificationPage = () => getNotificationPage(this.browser, this.extensionId, NexusUrl.popup)
}


export async function getHelloNexusByPage(page: Page): Promise<string> {
    await page.bringToFront()
    return await page.$eval(PopupLocators.helloNexus, (e) => e.innerHTML);
}

async function close(browser: Browser, extensionId: string) {
    const pages = (await browser.pages())
        .filter(page => page.url().includes(extensionId))
    for (let i = 0; i < pages.length; i++) {
        await pages[i].close()
    }
}


async function getNotificationPage(browser: Browser, extensionId: string, includeStr: string): Promise<Page> {
    // wait extension page load
    await browser.waitForTarget(x => {
        return x.url().includes(includeStr);
    }, {timeout: 3000})

    return (await browser.pages()).find(page => {
        return page.url().includes(extensionId) && page.url().includes(includeStr)
    });
}


async function getExtensionPageByUrl(browser: Browser, extensionId: string, url: string): Promise<Page> {
    console.log("-")
    const page = await browser.newPage()
    await page.goto(`${EXTENSION_URL_PRE}${extensionId}/${url}`, {
        waitUntil: 'networkidle2'
    })
    return page;
}
