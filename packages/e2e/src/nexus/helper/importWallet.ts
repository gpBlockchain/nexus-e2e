import {ImportWalletPageTextInfo, WalletManagerPageTextInfo} from "../page/wallet-manager-page";
import {Page} from "playwright";

// click `import wallet`
export async function clickImportWallet(page: Page): Promise<Page> {
    await page.getByText(WalletManagerPageTextInfo.ImportWallet).click()
    return page;
}

// input `mnemonic`
export async function inputMnemonic(page: Page, mnemonic: string): Promise<Page> {
    const mnemonicArr = mnemonic.split(" ")
    for (let i = 0; i < mnemonicArr.length; i++) {
        const num = i + 1;
        await page.getByText(ImportWalletPageTextInfo.getWorldByIdx(num), {exact: true}).type(mnemonicArr[i])
    }
    return page;
}

// input password
export async function inputPasswd(page: Page, password: string): Promise<Page> {
    await page.getByText(ImportWalletPageTextInfo.password).type(password)
    return page
}

// click Recovery
export async function clickRecovery(page: Page): Promise<Page> {
    await page.getByRole('button', {name: ImportWalletPageTextInfo.recovery}).click()
    return page;
}
