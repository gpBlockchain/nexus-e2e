// click create a new wallet
import {Page} from "playwright";
import {
    WalletManagerPageTestIdInfo,
} from "../page/wallet-manager-page";
import {getByTestId} from "./util";

export async function clickCreateNewWallet(page: Page) {
    await getByTestId(page, WalletManagerPageTestIdInfo.CreateWallet).click()
}

// get seed
export async function getSeeds(page: Page): Promise<string[]> {
    const path = await getByTestId(page, WalletManagerPageTestIdInfo.Seed)
    const data = await path.evaluate((e) => e.innerHTML)
    return data.split(" ")
}


// full seed
export async function fullCheckSeeds(page: Page, seedArr: string[]) {
    for (let i = 0; i < seedArr.length; i++) {
        await page.getByRole('button', {name: seedArr[i]}).click()
    }
}

export async function clickClipboardAndGet(page: Page): Promise<string> {
    await clickClipboard(page)
    return getClipboard(page)
}


export async function clickClipboard(page: Page) {
    await getByTestId(page, WalletManagerPageTestIdInfo.CopyToClipboard).click()
}

export async function getClipboard(page: Page): Promise<string> {
    return (await page.evaluate("navigator.clipboard.readText()")).toString();
}


