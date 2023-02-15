



// click Get start
import {Page} from "playwright";
import {
    CreateANewWalletPageTextInfo,
    WalletManagerPageTestIdInfo,
} from "../page/wallet-manager-page";

// click get start
export async function clickGetStarted(page:Page){
    await page.getByTestId(WalletManagerPageTestIdInfo.GetStarted).click()
}

// input  name of user
export async function inputUserName(page:Page,name:string){
    await page.getByTestId(WalletManagerPageTestIdInfo.UserName).type(name)
}

export async function clickBack(page:Page){
    await page.getByTestId(WalletManagerPageTestIdInfo.Back).click()
}

export async function clickNext(page:Page){
    await page.getByTestId(WalletManagerPageTestIdInfo.Next).click()
}

// input pwd
export async function inputPassword(page:Page,passWord:string){
    await page.getByTestId(WalletManagerPageTestIdInfo.Password).type(passWord)
}

// confirm pwd
export async function inputConfirmPassword(page:Page,passWord:string){
    await page.getByTestId(WalletManagerPageTestIdInfo.ConfirmPassword).type(passWord)
}

// click agree Terms Of Use
export async function clickAgreeTermsOfUse(page:Page){
    await page.getByTestId(WalletManagerPageTestIdInfo.AggreeTermsOfUse).click()
}

// click `all done`
export async function clickDone(page:Page){
    await page.getByTestId(WalletManagerPageTestIdInfo.Done).click()
}
