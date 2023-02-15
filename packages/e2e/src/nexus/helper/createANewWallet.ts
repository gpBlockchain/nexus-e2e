// click create a new wallet
import {Page} from "playwright";
import {
    CreateANewWalletPageTextInfo, WalletManagerPageTestIdInfo,
    WalletManagerPageTextInfo,
    WalletManagerPageXpathInfo
} from "../page/wallet-manager-page";

export async function clickCreateNewWallet(page: Page) {
    await page.getByText(WalletManagerPageTextInfo.CreateANewWallet, {exact: true}).click()
}

// get seed
export async function getSeeds(page: Page): Promise<string[]> {
    let seedArr = []
    for (let i = 1; i <= 12; i++) {
        const path = await page.locator(WalletManagerPageXpathInfo.getSeedByIdx(i))
        const data = await path.evaluate((e) => e.innerHTML)
        seedArr.push(data)
    }
    return seedArr
}

// click next
export async function clickNext(page: Page) {
    await page.getByText(CreateANewWalletPageTextInfo.next).click()
}

// full seed
export async function fullCheckSeeds(page: Page, seedArr: string[]) {
    for (let i = 0; i < seedArr.length; i++) {
        await page.getByText(seedArr[i]).click()
    }
}

export async function clickClipboardAndGet(page: Page): Promise<string> {
    await clickClipboard(page)
    return getClipboard(page)
}


export async function clickClipboard(page: Page) {
    await page.getByTestId(WalletManagerPageTestIdInfo.CopyToClipboard).click()
}

export async function getClipboard(page: Page): Promise<string> {
    return (await page.evaluate("navigator.clipboard.readText()")).toString();
}


