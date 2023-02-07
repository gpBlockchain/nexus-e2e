import {ImportWalletPageTextInfo, WalletManagerPageTextInfo} from "../page/wallet-manager-page";
import {Page} from "playwright";

// click `import wallet`
export async function clickImportWallet(page: Page){
    await page.getByText(WalletManagerPageTextInfo.ImportWallet).click()
}

// input `mnemonic`
export async function inputMnemonic(page: Page, mnemonic: string){
    const mnemonicArr = mnemonic.split(" ")
    for (let i = 0; i < mnemonicArr.length; i++) {
        const num = i + 1;
        await page.getByText(ImportWalletPageTextInfo.getWorldByIdx(num), {exact: true}).type(mnemonicArr[i])
    }
}

// input password
export async function inputPasswd(page: Page, password: string) {
    await page.getByText(ImportWalletPageTextInfo.password).type(password)
}

// click Recovery
export async function clickRecovery(page: Page) {
    await page.getByRole('button', {name: ImportWalletPageTextInfo.recovery}).click()
}
