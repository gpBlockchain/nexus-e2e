import {launchWithNexus} from "../../src/setup/launch";
import {BrowserContext, Page} from "playwright";
import {getExtensionId} from "../../src/setup/setup";
import {getExtensionPageByUrl} from "../../src/nexus";
import {NexusUrl} from "../../src/nexus/const";
import {
    clickBack,
    clickCreateNewWallet,
    clickNext, confirmPasswd,
    fullCheckSeeds,
    fullPasswd,
    getSeeds
} from "../../src/nexus/helper/createANewWallet";
import {expectedThrow} from "../utils/util";

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
        const seedArr = await clickCreateNewWallet(page)
            .then(page => getSeeds(page))
        await clickNext(page)
            .then(page => fullCheckSeeds(page, seedArr))
            .then(page => clickNext(page))
            .then(page => fullPasswd(page, password))
            .then(page => confirmPasswd(page, password))
    })
    it('还没输入seed# 无法点击继续', async () => {

        await clickCreateNewWallet(page)
        await clickNext(page)
        await expectedThrow(clickNext(page))

    })
    it('输入不正确顺序的seed#无法点击继续', async () => {
        // input seeds
        const seedArr = await clickCreateNewWallet(page)
            .then(page => getSeeds(page))
        // input
        await clickNext(page)
            .then(page => fullCheckSeeds(page, seedArr))
    })
    it('返回查看助记词#清空之前确认一半的助记词', async () => {
        const seedArr = await clickCreateNewWallet(page)
            .then(page => getSeeds(page))
        await clickNext(page)
            .then(page => fullCheckSeeds(page, seedArr))
            .then(page => clickBack(page))
            .then(page => clickNext(page))
            .then(page => fullCheckSeeds(page,seedArr))
    })
    afterEach(async () => {
        await browser.close()
    })
});
