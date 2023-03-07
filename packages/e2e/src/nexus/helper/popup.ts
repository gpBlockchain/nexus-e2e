import {Page} from "playwright";
import {getByTestId} from "./util";
import {
    HomePageTestIdInfo,
    NetworksPageTestIdInfo,
    NetworksPageTextInfo,
    WhitelistSitesPageTestIdInfo
} from "../page/popup-page";


export async function getUserName(page: Page): Promise<string> {
    return (await getByTestId(page, HomePageTestIdInfo.UserName).innerText())
}

export async function getConnectedStatus(page: Page): Promise<string> {
    return (await getByTestId(page, HomePageTestIdInfo.ConnectedStatus).innerText()).split("\n")[1]
}

export async function clickWhitelistSites(page: Page) {
    await getByTestId(page, HomePageTestIdInfo.WhitelistSites).click()
}

export async function clickNetwork(page: Page) {
    await getByTestId(page, HomePageTestIdInfo.Network).click()
}

//Whitelist Sites
export async function inputSiteSearch(page: Page, search: string) {
    await getByTestId(page, WhitelistSitesPageTestIdInfo.WebsiteSearch).type(search)
}

export async function clickSiteRemoveByIdx(page: Page, removeIdx) {
    await getByTestId(page, WhitelistSitesPageTestIdInfo.getDeleteByIdx(removeIdx)).click()
}

export async function getSiteList(page: Page): Promise<string[]> {
    return (await getByTestId(page, WhitelistSitesPageTestIdInfo.WebsiteList).innerText()).split("\n").filter(x=>x!='')
}

export async function clickBack(page: Page) {
    return await getByTestId(page, WhitelistSitesPageTestIdInfo.Back).click()
}

// network
export async function getNetworkRadioGroup(page: Page): Promise<string[]> {
    return (await getByTestId(page, NetworksPageTestIdInfo.NetworkRadioGroup).allInnerTexts())[0].split("\n")
}

export async function clickNetworkRadioByIdx(page: Page, idx: number) {
    await getByTestId(page, NetworksPageTestIdInfo.getNetworkRadioByIdx(idx)).click()
}

export async function clickAddNetwork(page: Page) {
    return await getByTestId(page, NetworksPageTestIdInfo.AddNetwork).click()
}

export async function inputName(page: Page, name: string) {
    await page.getByText(NetworksPageTextInfo.Name).type(name)
}

export async function inputUrl(page: Page, url: string) {
    await page.getByText(NetworksPageTextInfo.Url).type(url)
}

export async function clickAdd(page: Page) {
    await getByTestId(page, NetworksPageTestIdInfo.Add).click()
}
