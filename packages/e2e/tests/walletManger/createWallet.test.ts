import {launchWithNexus} from "../../src/setup/launch";
import {BrowserContext, Page} from "playwright";
import {getExtensionId} from "../../src/setup/setup";
import {getExtensionPageByUrl} from "../../src/nexus";
import {NexusUrl} from "../../src/nexus/const";

import { attachMessage, step} from "../utils/util";
import {expect} from "chai";

describe('create a wallet', function () {

    this.timeout(3000_000)
    let browser: BrowserContext;
    let extensionId;
    let page: Page;
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
    it('#1 确认助记词成功#成功创建账户', async () => {

        // click create a new wallet
        const password = "1234567890123456"
        const userName = "xm"
        let seedArr;
        await step("click CreateNewWallet button", async () => {
            // await clickCreateNewWallet(page)
        })
        await step("click get start", async () => {
            // await clickGetStarted(page)
        })
        await step(`input user name:${userName}`, async () => {
            // await inputUserName(page,userName)
        })

        await step("click next", async () => {
            // await clickNext(page)
        })
        await step("input passwd", async () => {
        })
        await step("input confirm passwd", async () => {
        })
        await step("click agree the Terms of use", async () => {
        })
        await step("click next", async () => {
        })
        await step("click `copy to clipboard`", async () => {
        })
        await step("click next", async () => {
        })
        await step("click seeds", async () => {
        })
        await step("click confirm", async () => {
        })
        await step("click `all Done`", async () => {
        })
    })
    describe('create/account', function () {
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
    describe('create/password', function () {
        beforeEach(async ()=>{
            await step("click CreateNewWallet button", async () => {
                // await clickCreateNewWallet(page)
            })
            await step("click get start", async () => {
                // await clickGetStarted(page)
            })
            await step("input userName",async ()=>{

            })
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
    describe('create/seed', function () {
        it("#1 clipboard 和 框里一致", async () => {
            let clipboardSeeds;
            let boxSeeds;
            await step("get seeds by clipboard",async ()=>{})
            await step("get seeds by box",async ()=>{})
            await step(`compare seeds clipboardSeeds and boxSeeds`,async ()=>{
                expect(clipboardSeeds).to.be.equal(boxSeeds)
            })
        })
        it('#2 点击返回=>点击成功', async () => {
            await step("click back",async ()=>{})
        })
        it('#3 点击next=>点击成功', async () => {
            await step("click next",async ()=>{})
        })
    });
    describe('create/confirm', function () {
        let  seeds;
        before(async ()=>{

            await step("get seeds",async ()=>{})
            await step("click next",async ()=>{})
            seeds = "1 2 3 4 5 6 7 8 9 10 11 12"
            await attachMessage("seed",seeds)
        })
        it("#1 输入顺序和之前不一致=>无法点击confirm", async () => {
            await step("input seeds not eq",async ()=>{
                let seedArr = seeds.split(" ")
                const sed1 = seedArr.sort()
                await step(`click order:${sed1}`,async ()=>{

                })

            })
            await step("click confirm",async ()=>{

            })
        })
        it("#2 输入错误的顺序能够，能够取消输入正确的顺序", async () => {
            let seedArr = seeds.split(" ")
            const sed1 = seedArr.slice(0,4)
            const sed2 = seedArr.slice(3,seedArr.length)
            await step(`click order :${sed1}`,async ()=>{})
            await step(`click order:${sed2}`,async ()=>{})
            await step("click confirm",async ()=>{})
        })
        it("#3 输入正确的顺序后，能够点击confirm", async () => {
            await step(`click order:${seeds}`,async ()=>{})
            await step("click confirm",async ()=>{})
        })
    });
    afterEach(async () => {
        await browser.close()
    })
});
