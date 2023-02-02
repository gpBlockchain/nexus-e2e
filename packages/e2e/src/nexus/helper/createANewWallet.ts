// click create a new wallet
import {Page} from "playwright";
import {
    CreateANewWalletPageTextInfo,
    WalletManagerPageTextInfo,
    WalletManagerPageXpathInfo
} from "../page/wallet-manager-page";

export async function clickCreateNewWallet(page: Page): Promise<Page> {
    await page.getByText(WalletManagerPageTextInfo.CreateANewWallet, {exact: true}).click()
    return page
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
export async function clickNext(page: Page): Promise<Page> {
    await page.getByText(CreateANewWalletPageTextInfo.next).click()
    return page
}

// full seed
export async function fullCheckSeeds(page: Page, seedArr: string[]): Promise<Page> {
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
    return page;
}

// click password
export async function fullPasswd(page: Page, password: string): Promise<Page> {
    await page.getByText(CreateANewWalletPageTextInfo.NewPassword).type(password)
    return page;
}

// confirm passwd
export async function confirmPasswd(page: Page, password: string): Promise<Page> {
    await page.getByText(CreateANewWalletPageTextInfo.ConfirmPassword).type(password)
    return page;
}

// click back
export async function clickBack(page: Page): Promise<Page> {
    await page.getByText(CreateANewWalletPageTextInfo.back).click()
    return page;
}
