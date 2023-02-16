import {Page} from "playwright";
import {WhitelistSitesPageTestIdInfo} from "../page/popup-page";


export async function getUrlByIdx(page: Page, idx: number) {
    const path = await page.getByTestId(WhitelistSitesPageTestIdInfo.getUrlByIdx(idx))
    return await path.evaluate((e) => e.innerHTML)
}

export async function inputSearch(page: Page, search: string) {
    await page.getByTestId(WhitelistSitesPageTestIdInfo.WebsiteSearch).type(search);
}

export async function clickDeleteByIdx(page: Page, idx: number) {
    await page.getByTestId(WhitelistSitesPageTestIdInfo.getDeleteByIdx(idx)).click()
}

export async function getSiteSize(page: Page) {

    const local = await page.getByTestId(WhitelistSitesPageTestIdInfo.WebsiteList);
    console.log(local.allInnerTexts())

}

