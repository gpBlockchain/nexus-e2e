import {NexusWallet, PopupPageHelper, WalletManagerHelper} from "../types";
import {NexusUrl} from "./const";
import {PopupPageLocatorInfo} from "./page/popup-page";

import {NotificationPageTextInfo} from "./page/notification-page";
import {BrowserContext, Page} from "playwright";

import {
    clickClipboardAndGet,
    clickCreateNewWallet,
    clickNext,
    fullCheckSeeds,
} from "./helper/createANewWallet";
import {clickConfirm, clickImportWallet, inputMnemonic, inputPasswd} from "./helper/importWallet";
import {Sleep} from "./util/helper";
import {
    clickAgreeTermsOfUse,
    clickDone,
    clickGetStarted,
    inputConfirmPassword,
    inputUserName
} from "./helper/walletManager";


export const EXTENSION_URL_PRE = "chrome-extension://"

export class PopupPageHelperImpl implements PopupPageHelper {
    extensionId: string
    browser: BrowserContext

    constructor(browser: BrowserContext, extensionId: string) {
        this.browser = browser;
        this.extensionId = extensionId
    }

    getHelloNexus = (page: Page) => getHelloNexusByPage(page)
    getNewPage = () => getExtensionPageByUrl(this.browser, this.extensionId, NexusUrl.popup)
}

class WalletManagerHelperImpl implements WalletManagerHelper {
    extensionId: string
    browser: BrowserContext

    constructor(browser: BrowserContext, extensionId: string) {
        this.browser = browser;
        this.extensionId = extensionId
    }

    createANewWallet = async (page: Page, userName, password: string): Promise<string> => {
        // click create a new wallet
        await clickCreateNewWallet(page)
        await clickGetStarted(page)
        await inputUserName(page, userName)
        await clickNext(page)
        await inputPasswd(page, password)
        await inputConfirmPassword(page, password)
        await clickAgreeTermsOfUse(page)
        // const seedArr =await getSeeds(page)
        const seedArr = (await clickClipboardAndGet(page)).split(" ")
        await clickNext(page)
        await fullCheckSeeds(page, seedArr)
        await clickConfirm(page)
        await clickDone(page)
        return seedArr.join(" ")
    }

    getNewPage = () => getExtensionPageByUrl(this.browser, this.extensionId, NexusUrl.walletManager)

    importWallet = async (page: Page, userName, mnemonic, password: string) => {
        await clickImportWallet(page)
        await inputMnemonic(page, mnemonic)
        await clickNext(page)
        await inputPasswd(page, password)
        await inputConfirmPassword(page, password)
        await clickAgreeTermsOfUse(page)
        await clickNext(page)
        await inputUserName(page, userName)
        await clickNext(page)
        await clickDone(page)
    }

}


export class Nexus implements NexusWallet {

    extensionId: string
    browser: BrowserContext
    popup: PopupPageHelper
    walletManager: WalletManagerHelper

    constructor(browser: BrowserContext, extensionId: string) {
        this.browser = browser;
        this.extensionId = extensionId
        this.popup = new PopupPageHelperImpl(this.browser, this.extensionId);
        this.walletManager = new WalletManagerHelperImpl(this.browser, this.extensionId);
    }

    close = () => close(this.browser, this.extensionId)
    getNotificationPage = () => getNotificationPage(this.browser, this.extensionId, NexusUrl.notification)

    approve = async () => {
        const page = await this.getNotificationPage()
        await page.getByRole('button', {name: NotificationPageTextInfo.Approve}).click()
    }
}


export async function getHelloNexusByPage(page: Page): Promise<string> {
    await page.bringToFront()
    return await page.$eval(PopupPageLocatorInfo.helloNexus, (e) => e.innerHTML);
}

async function close(browser: BrowserContext, extensionId: string) {
    const pages = (browser.pages())
        .filter(page => page.url().includes(extensionId))
    for (let i = 0; i < pages.length; i++) {
        await pages[i].close()
    }
}


export async function getNotificationPage(browser: BrowserContext, extensionId: string, includeStr: string): Promise<Page> {
    // wait extension page load
    while (!browser.pages().some(page => page.url().includes(includeStr))) {
        await Sleep(1000)
    }
    return (browser.pages()).find(page => {
        return page.url().includes(extensionId) && page.url().includes(includeStr)
    });
}


export async function getExtensionPageByUrl(browser: BrowserContext, extensionId: string, url: string): Promise<Page> {
    const page = await browser.newPage()
    await page.goto(`${EXTENSION_URL_PRE}${extensionId}/${url}`, {})
    return page;
}
