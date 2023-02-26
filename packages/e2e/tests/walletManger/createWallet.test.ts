import {launchWithNexus} from "../../src/setup/launch";
import {BrowserContext, Page} from "playwright";
import {getExtensionId} from "../../src/setup/setup";
import {getExtensionPageByUrl} from "../../src/nexus";
import {NexusUrl} from "../../src/nexus/const";

import {attachMessage, expectedThrow, failedTestScreenshot, getBrowserRandomUserPath, step} from "../utils/util";
import {expect} from "chai";
import {
    clickClipboardAndGet,
    clickCreateNewWallet,
    fullCheckSeeds, getSeeds
} from "../../src/nexus/helper/createANewWallet";
import {
    clickBack,
    clickDone,
    clickGetStarted, clickNext,
    inputConfirmPassword,
    inputPassword,
    inputUserName
} from "../../src/nexus/helper/walletManager";
import {clickConfirm} from "../../src/nexus/helper/importWallet";

describe('create a wallet', function () {

    this.timeout(3000_000)
    let browser: BrowserContext;
    let extensionId;
    let page: Page;
    const password = "1234567890123456"
    const userName = "xm"
    beforeEach(async () => {
        await step("launchWithNexus", async () => {
            browser = await launchWithNexus(
                {
                    nexusPath: "./build",
                },getBrowserRandomUserPath()
            )
        })
        browser.setDefaultTimeout(3000)
        await step("goto: walletManager ", async () => {
            extensionId = await getExtensionId(browser)
            page = await getExtensionPageByUrl(browser, extensionId, NexusUrl.walletManager)
        })
    })
    it('#1 确认助记词成功#成功创建账户', async () => {

        // click create a new wallet
        let seedArr;
        await step("click CreateNewWallet button", async () => {
            await clickCreateNewWallet(page)
        })
        await step("click get start", async () => {
            await clickGetStarted(page)
        })
        await step(`input user name:${userName}`, async () => {
            await inputUserName(page, userName)
        })

        await step("click next", async () => {
            await clickNext(page)
        })
        await step(`input passwd:${password}`, async () => {
            await inputPassword(page, password)
        })
        await step(`input confirm passwd:${password}`, async () => {
            await inputConfirmPassword(page, password)
        })

        await step("click next", async () => {
            await clickNext(page)
        })
        await step("click `copy to clipboard`", async () => {
            seedArr = (await clickClipboardAndGet(page)).split(" ")
        })
        await step("click next", async () => {
            await clickNext(page)
        })
        await step("click seeds", async () => {
            await fullCheckSeeds(page, seedArr)
        })
        await step("click confirm", async () => {
            await clickConfirm(page)
        })
        await step("click `all Done`", async () => {
            await clickDone(page)
        })
    })
    describe('create/account', function () {
        beforeEach(async () => {
            await step("click CreateNewWallet button", async () => {
                await clickCreateNewWallet(page)
            })
            await step("click get start", async () => {
                await clickGetStarted(page)
            })
        })


        it("#1 还没输入用户名,点击继续 => 无法点击继续", async () => {
            await step("click next", async () => {
                // await expectedThrow(clickNext(page))
                await expectedThrow(clickNext(page))
            })
        })

        it("#2 还没输入用户名,点击back => 返回成功", async () => {
            await step("click back", async () => {
                await clickBack(page)
            })
        })
        it.skip("#3 输入的用户名包含特殊符号，中文，表情等 => 报错", async () => {
            let userNameArrs = ["😊溪秀", "中文"]
            for (let i = 0; i < userNameArrs.length; i++) {
                const userName = userNameArrs[i]
                await step(`input user name:${userName}`, async () => {
                    await inputUserName(page, userName)
                })
            }
        })
        it.skip("#4 输入的用户名过长 => 限制长度", async () => {
            let userNameL = "123213123123123213132131232131313131313112321312312312321313213123213131313131311232131231231232131321312321313131313131"
            await step(`input user name:${userNameL}`, async () => {
                await inputUserName(page, userNameL)
            })
        })
        describe('create/password', function () {
            beforeEach(async () => {
                await step("input userName", async () => {
                    await inputUserName(page, userName)
                })
                await step("click next", async () => {
                    await clickNext(page)
                })
            })

            it("#1 输入密码少于8位, 就点击next=>报错", async () => {
                const passwd = "1234"
                await step(`input passwd:${passwd}`, async () => {
                    await inputPassword(page, passwd)
                })
                await step(`input confirm passwd:${passwd}`, async () => {
                    await inputConfirmPassword(page, passwd)
                })
                await step("click next", async () => {
                    await expectedThrow(clickNext(page))
                })
            })
            const passwdArr = ["中文中文中文中文中文中文中文", "🆕🆕🆕🆕🆕🆕🆕🆕🆕🆕🆕"]
            for (let i = 0; i < passwdArr.length; i++) {
                it.skip(`#2-${i} 输入的密码:${passwdArr[i]}=>报错`, async () => {
                    await step(`input passwd:${passwdArr[i]}`, async () => {
                        await inputPassword(page, passwdArr[i])
                    })
                    await step(`input confirm passwd:${passwdArr[i]}`, async () => {
                        await inputConfirmPassword(page, passwdArr[i])
                    })
                    await step("click next", async () => {
                        await expectedThrow(clickNext(page))
                    })
                })
            }
            it('#3 输入的密码,和确认密码不一致=>无法点击继续 ', async () => {
                const passwd = "12341231231231"
                const confirmPasswd = "21312312313"
                await step(`input passwd:${passwd}`, async () => {
                    await inputPassword(page, passwd)
                })
                await step(`input confirm passwd:${confirmPasswd}`, async () => {
                    await inputConfirmPassword(page, confirmPasswd)
                })
                await step("click next", async () => {
                    await expectedThrow(clickNext(page))
                })
            });
            describe('create/seed', function () {
                beforeEach(async () => {
                    await step(`input passwd:${password}`, async () => {
                        await inputPassword(page, password)
                    })
                    await step(`input confirm passwd:${password}`, async () => {
                        await inputConfirmPassword(page, password)
                    })

                    await step("click next", async () => {
                        await clickNext(page)
                    })
                })
                it("#1 clipboard 和 框里一致", async () => {
                    let clipboardSeeds;
                    let boxSeeds;
                    await step("get seeds by clipboard", async () => {
                        clipboardSeeds = (await clickClipboardAndGet(page)).split(" ")
                    })
                    await step("get seeds by box", async () => {
                        boxSeeds = await getSeeds(page)
                    })
                    await step(`compare seeds clipboardSeeds and boxSeeds`, async () => {
                        expect(clipboardSeeds).to.be.deep.equal(boxSeeds)
                    })
                })
                it('#2 点击返回=>点击成功', async () => {
                    await step("click back", async () => {
                        await clickBack(page)
                    })
                })
                it('#3 点击next=>点击成功', async () => {
                    await step("click next", async () => {
                        await clickNext(page)
                    })
                })
                describe('create/confirm', function () {
                    let seeds;
                    beforeEach(async () => {
                        await step("get seeds", async () => {
                            seeds = await getSeeds(page)
                        })
                        await step("click next", async () => {
                            await clickNext(page)
                        })
                        await attachMessage("seed", seeds.join(" "))
                    })
                    it("#1 输入顺序和之前不一致=>无法点击confirm", async () => {
                        const sed1 = seeds.sort()
                        await step(`input seeds not eq:${sed1}`, async () => {
                            await step(`click order:${sed1}`, async () => {
                                await fullCheckSeeds(page, sed1)
                            })
                        })
                        await step("click confirm", async () => {
                            await expectedThrow(clickConfirm(page))
                        })
                    })
                    it("#2 输入错误的顺序能够，能够取消输入正确的顺序", async () => {
                        const sed1 = seeds.slice(0, 4)
                        const sed2 = seeds.slice(4, seeds.length)
                        await step(`click order :${sed2}`, async () => {
                            await fullCheckSeeds(page, sed2)
                        })
                        await step(`click order :${sed2}`, async () => {
                            await fullCheckSeeds(page, sed2)
                        })

                        await step(`click order :${sed1}`, async () => {
                            await fullCheckSeeds(page, sed1)
                        })
                        await step(`click order:${sed2}`, async () => {
                            await fullCheckSeeds(page, sed2)
                        })
                        await step("click confirm", async () => {
                            await clickConfirm(page)
                        })
                    })
                    it("#3 输入正确的顺序后，能够点击confirm", async () => {
                        await step(`click order:${seeds}`, async () => {
                            await fullCheckSeeds(page, seeds)

                        })
                        await step("click confirm", async () => {
                            await clickConfirm(page)
                        })
                    })
                });

            });
        });

    });

    afterEach(async () => {
        await failedTestScreenshot(this, browser)
        await browser.clearCookies()
        await browser.close()
    })
});
