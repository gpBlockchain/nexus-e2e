import {clickImportWallet, clickRecovery, inputMnemonic, inputPasswd} from "../../src/nexus/helper/importWallet";
import {BrowserContext, Page} from "playwright";
import {launchWithNexus} from "../../src/setup/launch";
import {getExtensionId} from "../../src/setup/setup";
import {getExtensionPageByUrl} from "../../src/nexus";
import {NexusUrl} from "../../src/nexus/const";
import {MNEMONIC, PASSWd} from "../config/config";
import {expectedThrow} from "../utils/util";

describe('importWallet', function () {
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

    it('输入正确的助记词 # 导入账户成功 ', async () => {

        await clickImportWallet(page)
        await inputMnemonic(page, MNEMONIC)
        await inputPasswd(page, PASSWd)
        await clickRecovery(page)
    })
    it('输入的助记词包含重复的单词 # 无法导入助记词', async () => {
        const replace_mn = "finite finite doze dog pat team seek pink punch scale clap computer"
        await clickImportWallet(page)
        await inputMnemonic(page, replace_mn)
        await inputPasswd(page, PASSWd)
        await expectedThrow(clickRecovery(page))
    })
    it('输入的助记词包含数字 # 无法导入助记词', async () => {
        const replace_mn = "1234 finite doze dog pat team seek pink punch scale clap computer"
        await clickImportWallet(page)
        await inputMnemonic(page, replace_mn)
        await inputPasswd(page, PASSWd)
        await expectedThrow(clickRecovery(page))
    })
    it('输入的助记词包含特殊符号 # 无法导入助记词', async () => {
        const replace_mn = "$%^& finite doze dog pat team seek pink punch scale clap computer"
        await clickImportWallet(page)
        await inputMnemonic(page, replace_mn)
        await inputPasswd(page, PASSWd)
        await expectedThrow(clickRecovery(page))
    })
    it('词库外的单词https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt # 无法导入助记词', async () => {
        const replace_mn = "adasdahiuhif finite doze dog pat team seek pink punch scale clap computer"
        await clickImportWallet(page)
        await inputMnemonic(page, replace_mn)
        await inputPasswd(page, PASSWd)
        await expectedThrow(clickRecovery(page))
    })

    afterEach(async () => {
        await browser.close()
    })
})
