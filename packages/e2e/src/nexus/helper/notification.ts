import {NotificationPageTextInfo, SignMessagePageTestIdInfo} from "../page/notification-page";
import {Page} from "playwright";
import {getByTestId} from "./util";

export async function clickApprove(page:Page) {
    await page.getByRole('button', {name: NotificationPageTextInfo.Approve}).click()
}

export async function inputPassword(page:Page,password:string){
    await getByTestId(page,SignMessagePageTestIdInfo.Password).type(password)
}
export async function checkPasswordIsHide(page:Page):Promise<boolean>{
    return await getByTestId(page,SignMessagePageTestIdInfo.Password).isHidden()
}

export async function clickConnect(page:Page) {
    await page.getByRole('button', {name: NotificationPageTextInfo.Connect}).click()

}

export async function clickCancel(page:Page){
    await page.getByRole('button', {name: NotificationPageTextInfo.Cancel}).click()

}
