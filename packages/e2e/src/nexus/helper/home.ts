// get connected status
import {Page} from "playwright";
import {HomePageTestIdInfo} from "../page/popup-page";

// click connected
export async function getConnectedStatus(page: Page) {
    const path = await page.locator(HomePageTestIdInfo.ConnectedStatus)
    return await path.evaluate((e) => e.innerHTML)
}

// click white list
export async function clickWhitelistSites(page: Page) {
    await page.getByTestId(HomePageTestIdInfo.WhitelistSites).click()
}

// click network
export async function clickNetwork(page: Page) {
    await page.getByTestId(HomePageTestIdInfo.Network).click()
}

