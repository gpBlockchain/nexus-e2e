import {clickImportWallet, clickRecovery, inputMnemonic, inputPasswd} from "../../src/nexus/helper/importWallet";
import {BrowserContext, Page} from "playwright";
import {launchWithNexus} from "../../src/setup/launch";
import {getExtensionId} from "../../src/setup/setup";
import {getExtensionPageByUrl} from "../../src/nexus";
import {NexusUrl} from "../../src/nexus/const";
import {MNEMONIC, PASSWd} from "../config/config";
import {expectedThrow, step} from "../utils/util";

describe('importWallet', function () {
    this.timeout(3000_000)
    let browser: BrowserContext;
    let extensionId;
    let page: Page;
    const seeds = ""
    const passwd = ""
    const userName =""

    beforeEach(async () => {
        await step("launchWithNexus", async () => {

            browser = await launchWithNexus(
                {
                    nexusPath: "./build",
                }
            )
        })
        await step("goto: walletManager ", async () => {
            extensionId = await getExtensionId(browser)
            page = await getExtensionPageByUrl(browser, extensionId, NexusUrl.walletManager)
        })
    })

    it('#1 输入正确的助记词 # 导入账户成功 ', async () => {

        await step("click import wallet",async ()=>{})
        await step(`input seed:${seeds}`,async ()=>{})
        await step("click next",async ()=>{})
        await step(`input passwd:${passwd}`,async ()=>{})
        await step(`input confirm passwd:${passwd}`,async ()=>{})
        await step("click agree",async ()=>{})
        await step("click next",async ()=>{})
        await step(`input UserName:${userName}`,async ()=>{})
        await step("click next",async ()=>{})
        await step("click all done",async ()=>{})
    })
    describe('import/seed', function () {

        before(async ()=>{
            await step("click import wallet",async ()=>{})
        })

        it('#1 输入的助记词包含重复的单词 # 无法导入助记词', async () => {
            const replace_mn = "finite finite doze dog pat team seek pink punch scale clap computer"
            await step(`input mnemonic:${replace_mn}`,async ()=>{})
            await step("click next",async ()=>{})
        })
        it('#2 输入的助记词包含数字 # 无法导入助记词', async () => {
            const replace_mn = "1234 finite doze dog pat team seek pink punch scale clap computer"
            await step(`input mnemonic:${replace_mn}`,async ()=>{})
            await step("click next",async ()=>{})
        })
        it('#3 输入的助记词包含特殊符号 => 无法导入助记词', async () => {
            const replace_mn = "$%^& finite doze dog pat team seek pink punch scale clap computer"
            await step(`input mnemonic:${replace_mn}`,async ()=>{})
            await step("click next",async ()=>{})
        })
        it('#4 词库外的单词https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt => 无法导入助记词', async () => {
            const replace_mn = "adasdahiuhif finite doze dog pat team seek pink punch scale clap computer"
            await step(`input mnemonic:${replace_mn}`,async ()=>{})
            await step("click next",async ()=>{})
        })
        it("#5 点击返回=> 返回成功",async ()=>{
            await step("click back",async ()=>{})
        })
        it("#6 还没输完，点击next=>点击失败",async ()=>{
            await step("click next",async ()=>{})
        })
    });
    describe('import/password', function () {
        before(async ()=>{
            await step("click import wallet",async ()=>{})
            await step(`input seed:${seeds}`,async ()=>{})
            await step("click next",async ()=>{})

        })
        it("#1 输入密码少于8位, 就点击next=>报错", async () => {
            const passwd = "1234"
            await step(`input passwd:${passwd}`,async ()=>{})
            await step("click next",async ()=>{})
        })
        it("#2 输入的密码包含中文，表情等=>报错", async () => {
            const passwdArr = ["中文","表情"]
            for (let i = 0; i < passwdArr.length; i++) {
                await step(`input passwd:${passwdArr[i]}`,async ()=>{})
                await step(`input confirm passwd:${passwdArr[i]}`,async ()=>{})

                await step("click next",async ()=>{})
            }
        })
        it('#3 输入的密码,和确认密码不一致=>无法点击继续 ', async () => {
            const passwd = "12341231231231"
            const confirmPasswd = "21312312313"
            await step(`input passwd:${passwd}`,async ()=>{})
            await step(`input confirm passwd:${confirmPasswd}`,async ()=>{})
            await step("click term",async ()=>{})
            await step("click next",async ()=>{})
        });
        it('#4 还没点击 agree 按钮，点击继续=>无法点击继续 ', async () => {
            const passwd = "12341231231231"
            await step(`input passwd:${passwd}`,async ()=>{})
            await step(`input confirm passwd:${passwd}`,async ()=>{})
            await step("click next",async ()=>{})

        })

        it("#5 还没输入用户名,点击继续 => 无法点击继续", async () => {
            await step("click next",async ()=>{
                // await expectedThrow(clickNext(page))
            })
        })
    });
    describe('import/account', function () {
        before(async ()=>{
            await step("click import wallet",async ()=>{})
            await step(`input seed:${seeds}`,async ()=>{})
            await step("click next",async ()=>{})
            await step(`input passwd:${passwd}`,async ()=>{})
            await step(`input confirm passwd:${passwd}`,async ()=>{})
            await step("click agree",async ()=>{})
            await step("click next",async ()=>{})

        })
        it("#1 还没输入用户名,点击继续 => 无法点击继续", async () => {
            await step("click next",async ()=>{
                // await expectedThrow(clickNext(page))
            })
        })

        it("#2 还没输入用户名,点击back => 返回成功", async () => {
            await step("click back",async ()=>{})
        })
        it("#3 输入的用户名包含特殊符号，中文，表情等 => 报错", async () => {
            let userNameArrs = [""]
            for (let i = 0; i < userNameArrs.length; i++) {
                const userName = userNameArrs[i]
                await step(`input user name:${userName}`,async ()=>{
                    // await inputUserName(page,userName)
                })
            }
        })
        it("#4 输入的用户名过长 => 限制长度", async () => {
            let userNameL = "123213123123123213132131232131313131313112321312312312321313213123213131313131311232131231231232131321312321313131313131"
            await step(`input user name:${userNameL}`,async ()=>{
                // await inputUserName(page,userNameL)
            })
        })
    });


    afterEach(async () => {
        await browser.close()
    })
})
