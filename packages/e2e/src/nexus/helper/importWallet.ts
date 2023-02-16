import {
    CreateANewWalletPageTextInfo,
    ImportWalletPageTextInfo,
    WalletManagerPageTestIdInfo,
    WalletManagerPageTextInfo
} from "../page/wallet-manager-page";
import {Page} from "playwright";
import {getByTestId} from "./util";

// click `import wallet`
export async function clickImportWallet(page: Page){
    await page.locator(`[data-test-id="${WalletManagerPageTestIdInfo.ImportWallet}"]`).click()
}

// input `mnemonic`
export async function inputMnemonic(page: Page, mnemonic: string){
    const mnemonicArr = mnemonic.split(" ")
    for (let i = 1; i <=mnemonicArr.length; i++) {
        //todo :change test-id
        // await page.getByText(`${i}`,{exact:true}).type(mnemonicArr[i-1])
        await getByTestId(page,WalletManagerPageTestIdInfo.getSeedByIdx(i-1)).type(mnemonicArr[i-1])
    }
}

// // input password
// export async function inputPasswd(page: Page, password: string) {
//     //todo change data-test-id
//     // await getByTestId(page,ImportWalletPageTextInfo.password).type(password)
//     await page.getByText(CreateANewWalletPageTextInfo.NewPassword).type(password)
//
// }

// click confirm
export async function clickConfirm(page:Page){
    await getByTestId(page,WalletManagerPageTestIdInfo.Next).click()

}

// click Recovery
export async function clickRecovery(page: Page) {
    await page.getByRole('button', {name: ImportWalletPageTextInfo.recovery}).click()
}
