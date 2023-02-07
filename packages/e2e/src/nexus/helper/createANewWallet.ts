// click create a new wallet
import {Page} from "playwright";
import {
    CreateANewWalletPageTextInfo,
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
    let checkSeedArr = []
    for (let i = 1; i <= 12; i++) {
        const path = await page.locator(WalletManagerPageXpathInfo.getSeedByIdx(i))
        const data = await path.evaluate((e) => e.innerHTML)
        checkSeedArr.push(data)
    }
    for (let i = 0; i < seedArr.length; i++) {
        if (seedArr[i] != checkSeedArr[i]) {
            await page.getByText(seedArr[i]).click()
        }

    }
}

// click password
export async function fullPasswd(page: Page, password: string) {
    await page.getByText(CreateANewWalletPageTextInfo.NewPassword).type(password)
}

// confirm passwd
export async function confirmPasswd(page: Page, password: string) {
    await page.getByText(CreateANewWalletPageTextInfo.ConfirmPassword).type(password)
}

// click back
export async function clickBack(page: Page) {
    await page.getByText(CreateANewWalletPageTextInfo.back).click()
}
