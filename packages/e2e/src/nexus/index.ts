import {NexusWallet, PopupPageHelper, WalletManagerHelper} from "../types";
import {Browser, Page} from "puppeteer";
import {NexusUrl} from "./const";
import {PopupPageLocatorInfo} from "./page/popup-page";
import {getDocument, queries} from "pptr-testing-library";
import {
    CreateANewWalletPageTextInfo,
    ImportWalletPageTextInfo,
    WalletManagerPageTextInfo,
    WalletManagerPageXpathInfo
} from "./page/wallet-manager-page";
import { NotificationPageTextInfo} from "./page/notification-page";

const { getByText,getByLabelText } = queries;

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

class WalletManagerHelperImpl implements WalletManagerHelper{
    extensionId: string
    browser: Browser

    constructor(browser: Browser, extensionId: string) {
        this.browser = browser;
        this.extensionId = extensionId
    }

    createANewWallet = async (page: Page, password: string): Promise<string> => {
        // click create a new wallet
        const doc = await getDocument(page)
        const select = await getByText(doc,WalletManagerPageTextInfo.CreateANewWallet)
        await select.click()
        // get seed
        let seedArr = []
        for (let i = 1; i <= 12; i++) {
            const path = await page.waitForXPath(WalletManagerPageXpathInfo.getSeedByIdx(i))
            const data = await path.evaluate((e)=>e.innerHTML)
            seedArr.push(data)
        }
        // click next
       await getByText(doc,CreateANewWalletPageTextInfo.next).
            then(x => x.click())
        // full seed
        let checkSeedArr = []
        for (let i = 1; i <= 12; i++) {
            const path = await page.waitForXPath(WalletManagerPageXpathInfo.getSeedByIdx(i))
            const data = await path.evaluate((e)=>e.innerHTML)
            checkSeedArr.push(data)
        }
        for (let i = 0; i < seedArr.length; i++) {
            if(seedArr[i]!= checkSeedArr[i]){
                await getByText(doc,seedArr[i])
                    .then(x=>x.click())
            }

        }
        // click next
        await getByText(doc,CreateANewWalletPageTextInfo.next)
            .then(x=>x.click())
        // click password
        await getByText(doc,CreateANewWalletPageTextInfo.NewPassword)
            .then(x=>x.type(password))
        await getByText(doc,CreateANewWalletPageTextInfo.ConfirmPassword)
            .then(x=>x.type(password))
        return seedArr.join(" ")
    }

    getNewPage = () =>getExtensionPageByUrl(this.browser, this.extensionId, NexusUrl.walletManager)

    importWallet = async (page: Page, mnemonic: string, password: string)=> {
        // click `import wallet`
        const doc = await getDocument(page)
        const select = await getByText(doc,WalletManagerPageTextInfo.ImportWallet)
        await select.click()


        // input `mnemonic`
        const mnemonicArr = mnemonic.split(" ")
        for (let i = 0; i < mnemonicArr.length; i++) {
            const num = i+1;
            const selectAs = await getByLabelText(doc,ImportWalletPageTextInfo.getWorldByIdx(num))
            await selectAs.click()
            await selectAs.type(mnemonicArr[i])
        }

        // input password
        const pwdSelect = await getByLabelText(doc,ImportWalletPageTextInfo.password)
        await pwdSelect.click()
        await pwdSelect.type(password)

        // click Recovery
        const recoverySelect = await getByText(doc,ImportWalletPageTextInfo.recovery)
        await recoverySelect.click()
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
    browser: Browser
    popup: PopupPageHelper
    walletManager: WalletManagerHelper

    constructor(browser: Browser, extensionId: string) {
        this.browser = browser;
        this.extensionId = extensionId
        this.popup = new PopupPageHelperImpl(this.browser, this.extensionId);
        this.walletManager = new WalletManagerHelperImpl(this.browser,this.extensionId);
    }

    close = () => close(this.browser, this.extensionId)
    getNotificationPage = () => getNotificationPage(this.browser, this.extensionId, NexusUrl.notification)

    approve = async ()=> {
        const page = await this.getNotificationPage()
        const doc = await getDocument(page)
        const select = await getByText(doc,NotificationPageTextInfo.Approve)
        await select.click()
    }
}


export async function getHelloNexusByPage(page: Page): Promise<string> {
    await page.bringToFront()
    return await page.$eval(PopupPageLocatorInfo.helloNexus, (e) => e.innerHTML);
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
