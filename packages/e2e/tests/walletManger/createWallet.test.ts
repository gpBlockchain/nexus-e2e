import {launchWithNexus} from "../../src/setup/launch";
import {BrowserContext, Page} from "playwright";
import {getExtensionId} from "../../src/setup/setup";
import {getExtensionPageByUrl} from "../../src/nexus";
import {NexusUrl} from "../../src/nexus/const";
import {
    clickCreateNewWallet,
    clickNext,
    fullCheckSeeds,
    getSeeds
} from "../../src/nexus/helper/createANewWallet";
import {expectedThrow} from "../utils/util";
import {clickBack, inputConfirmPassword, inputPassword} from "../../src/nexus/helper/walletManager";

describe('create a wallet', function () {

    this.timeout(3000_000)
    let browser: BrowserContext;
    let extensionId;
    let page: Page;
    beforeEach(async () => {
        browser = await launchWithNexus(
            {
                nexusPath: "./build",
                playwrightOptions: {
                    slowMo: 150,
                    recordVideo: {
                        dir: 'videos/',
                        size: {width: 640, height: 480},
                    },
                }
            }
        )
        extensionId = await getExtensionId(browser)
        page = await getExtensionPageByUrl(browser, extensionId, NexusUrl.walletManager)
    })
    it('确认助记词成功#成功创建账户', async () => {

        // click create a new wallet
        const password = "1234567890123456"
        await clickCreateNewWallet(page)
        const seedArr = await getSeeds(page)
        await clickNext(page)
        await fullCheckSeeds(page, seedArr)
        await clickNext(page)
        await inputPassword(page, password)
        await inputConfirmPassword(page, password)
    })
    it('还没输入seed# 无法点击继续', async () => {

        await clickCreateNewWallet(page)
        await clickNext(page)
        await expectedThrow(clickNext(page))

    })
    it('输入不正确顺序的seed#无法点击继续', async () => {
        // input seeds
        await clickCreateNewWallet(page)
        const seedArr = await getSeeds(page)
        // input
        await clickNext(page)
        await fullCheckSeeds(page, seedArr)
    })
    it('返回查看助记词#清空之前确认一半的助记词', async () => {
        await clickCreateNewWallet(page)
        const seedArr = await getSeeds(page)
        await clickNext(page)
        await fullCheckSeeds(page, seedArr)
        await clickBack(page)
        await clickNext(page)
        await fullCheckSeeds(page, seedArr)
    })
    afterEach(async () => {
        await browser.close()
    })
});
