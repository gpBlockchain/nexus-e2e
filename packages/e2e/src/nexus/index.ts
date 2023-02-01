import {NexusWallet, PopupPageHelper, WalletManagerHelper} from "../types";
import {NexusUrl} from "./const";
import {PopupPageLocatorInfo} from "./page/popup-page";
import {
    CreateANewWalletPageTextInfo,
    ImportWalletPageTextInfo,
    WalletManagerPageTextInfo,
    WalletManagerPageXpathInfo
} from "./page/wallet-manager-page";
import {NotificationPageTextInfo} from "./page/notification-page";
import {BrowserContext, Page} from "playwright";
import {getDocument} from "@playwright-testing-library/test";
import {Sleep} from "../../tests/demo";


const EXTENSION_URL_PRE = "chrome-extension://"

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

    createANewWallet = async (page: Page, password: string): Promise<string> => {
        // click create a new wallet

        const select = await page.getByText( WalletManagerPageTextInfo.CreateANewWallet, { exact: true })
        await select.click()
        // get seed
        let seedArr = []
        for (let i = 1; i <= 12; i++) {
            const path = await page.locator(WalletManagerPageXpathInfo.getSeedByIdx(i))
            const data = await path.evaluate((e) => e.innerHTML)
            seedArr.push(data)
        }
        // click next
        await page.getByText(CreateANewWalletPageTextInfo.next).click()
        // full seed
        let checkSeedArr = []
        for (let i = 1; i <= 12; i++) {
            const path = await page.locator(WalletManagerPageXpathInfo.getSeedByIdx(i))
            const data = await path.evaluate((e) => e.innerHTML)
            checkSeedArr.push(data)
        }
        for (let i = 0; i < seedArr.length; i++) {
            if (seedArr[i] != checkSeedArr[i]) {
                await page.getByText( seedArr[i]).click()
            }

        }
        // click next
        await page.getByText( CreateANewWalletPageTextInfo.next).click()

        // click password
        await page.getByText( CreateANewWalletPageTextInfo.NewPassword).type(password)
        await page.getByText( CreateANewWalletPageTextInfo.ConfirmPassword).type(password)
        return seedArr.join(" ")
    }

    getNewPage = () => getExtensionPageByUrl(this.browser, this.extensionId, NexusUrl.walletManager)

    importWallet = async (page: Page, mnemonic: string, password: string) => {
        // click `import wallet`

        await page.getByText( WalletManagerPageTextInfo.ImportWallet).click()

        // input `mnemonic`
        const mnemonicArr = mnemonic.split(" ")
        for (let i = 0; i < mnemonicArr.length; i++) {
            const num = i + 1;
            await page.getByText( ImportWalletPageTextInfo.getWorldByIdx(num),{exact:true}).type(mnemonicArr[i])
        }
        // input password
        await page.getByText( ImportWalletPageTextInfo.password).type(password)

        // click Recovery
        await page.getByRole('button', { name: ImportWalletPageTextInfo.recovery }).click()

    }

}

// export const clickOnButton = async (
//     page: Page,
//     text: string,
//     options?: { timeout?: number; visible?: boolean }
// ): Promise<void> => {
//     const button = await getElementByContent(page, text, "button", options);
//     await button.click();
// };


export class MockNexus implements NexusWallet {

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
        await page.getByRole('button', { name:  NotificationPageTextInfo.Approve }).click()
    }
}


export async function getHelloNexusByPage(page: Page): Promise<string> {
    await page.bringToFront()
    return await page.$eval(PopupPageLocatorInfo.helloNexus, (e) => e.innerHTML);
}

async function close(browser: BrowserContext, extensionId: string) {
    const pages = ( browser.pages())
        .filter(page => page.url().includes(extensionId))
    for (let i = 0; i < pages.length; i++) {
        await pages[i].close()
    }
}


async function getNotificationPage(browser: BrowserContext, extensionId: string, includeStr: string): Promise<Page> {
    // wait extension page load

    while ( !browser.pages().some(page=> page.url().includes(includeStr)))
    {
        await Sleep(1000)
    }

    return (browser.pages()).find(page => {
        return page.url().includes(extensionId) && page.url().includes(includeStr)
    });
}


async function getExtensionPageByUrl(browser: BrowserContext, extensionId: string, url: string): Promise<Page> {
    console.log("-")
    const page = await browser.newPage()
    await page.goto(`${EXTENSION_URL_PRE}${extensionId}/${url}`, {

    })
    return page;
}
