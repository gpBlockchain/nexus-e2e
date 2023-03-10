import {failedTestScreenshot, step} from "../utils/util";
import {launchWithNexus} from "../../src/setup/launch";
import {setUpNexus} from "../../src/setup/setup";
import {NEXUS_WEB_LOCAL_URL, NEXUS_WEB_URL, PASSWd, UserName} from "../config/config";
import {BrowserContext, Page} from "playwright";
import {AddNetworkOpt, NexusWallet} from "../../src/types";
import {
    clickAddNetwork,
    clickBack,
    clickNetwork, clickSiteRemoveByIdx,
    clickWhitelistSites,
    getConnectedStatus,
    getSiteList,
    inputName, inputSiteSearch
} from "../../src/nexus/helper/popup";
import {expect} from "chai";
import {enableWallet, getWalletIsEnable} from "../../src/nexus/servicer/provider";

describe('popup', function () {
    this.timeout(10000 * 1000)
    let browser: BrowserContext;
    let nexusWallet: NexusWallet;
    let page: Page;

    before(async () => {
        await step("launchWithNexus", async () => {
            browser = await launchWithNexus(
                {nexusPath: "./build"}
            )
        })
        await step("setUpNexus:createNewAccount", async () => {
            nexusWallet = await setUpNexus(browser, {
                mock: true,
                userName: UserName,
                // seed: MNEMONIC,
                passwd: PASSWd
            })
        })

    })
    beforeEach(async () => {
        await step("goto: popup page", async () => {
            page = await nexusWallet.popup.getNewPage()
        })
    })

    it(`查询名字和 UserName:${UserName}一致`, async () => {

        await step(`query userName#userName should eq:${UserName}`, async () => {
            await step(`get UserName eq:${UserName} `, async () => {
                await page.getByText(UserName).innerText()
            })
        })
    })
    it('没有连接网站时=>查询连接状态为未连接', async () => {
        let connected;
        await step("query connected status", async () => {
            connected = await getConnectedStatus(page)
        })
        await step("statues should not connected", async () => {
            expect(connected).to.be.equal("not Connected")
        })
    });
    it("连接网站时,查询连接状态为已连接,关闭后为未连接", async () => {
        let newPage;
        await step("go to new web:", async () => {
            newPage = await browser.newPage()
            await newPage.goto("https://map.baidu.com//")
        })
        await step("playwright connected web use injected js", async () => {
            let enable = enableWallet(newPage)
            nexusWallet.connect()
            await enable
        })

        await step("query connected status should connected", async () => {
            const connectedStatus = await getConnectedStatus(page)
            expect(connectedStatus).to.be.equal("Connected")
        })
        await step("close open new page", async () => {
            await newPage.close()
        })
        await step("query connected status should not connected", async () => {
            await page.reload()
            const connectedStatus = await getConnectedStatus(page)
            expect(connectedStatus).to.be.not.equal("Connected")
        })
    })

    it('能够点击whitelist-sites', async () => {
        await step("click whitelist-sites", async () => {
            await clickWhitelistSites(page)
        })
    })
    it('能够点击network', async () => {
        await step("click network", async () => {
            await clickNetwork(page)
        })
    })
    describe('whitelist-sites', function () {
        beforeEach(async () => {
            await step("click whitelist-sites", async () => {
                await clickWhitelistSites(page)
            })
        })

        describe('添加白名单', function () {
            let notExistUrl = "https://pudge.explorer.nervos.org/"
            let testCase = [
                notExistUrl, // 第一次添加
                NEXUS_WEB_LOCAL_URL, // 本地
                "http://info.cern.ch/", // http
                "https://godwoken-bridge-testnet.vercel.app/#/v1/deposit/pending?sadasdasdasdasdasdandawndasdandawndasdandawndasdandawndasdandawndasdandawndasdandawndasdandawndasdandawndasdandawndasdandawndasdandawndasdandawndasdandawndasdandawndasdandawndasdandawndasdandawndasdandawndasdandawndiowafnoawhfaoihfoaihfioawhfoia=aaa" // 特别长的网页

            ]
            for (let i = 0; i < testCase.length; i++) {
                let url = testCase[i]
                it(`${url}`, async () => {
                    let newPage;
                    await step("check url in whitelist,if exist ,remove it", async () => {
                        //todo
                    })
                    await step(`goto url:${url}`, async () => {
                        newPage = await browser.newPage()
                        await newPage.goto(url)
                    })
                    await step("send ckb.enable,and approve", async () => {
                        const enable = enableWallet(newPage)
                        nexusWallet.connect()
                        const ret = await enable
                        console.log(ret)
                    })

                    await step("bringToFront nexus:pop", async () => {
                        await page.bringToFront()
                    })
                    await step("go to whiteList ", async () => {
                        await page.reload()
                    })
                    await step(`query whitelist,url:${url} should exist`, async () => {
                        const urls = await getSiteList(page)
                        expect(urls).to.be.include(url)
                    })
                    await step("close new Page", async () => {
                        await newPage.close()
                    })
                })
            }

        });

        it("在白名单的网页，点击enable,不用approve", async () => {
            let urls;
            await step("从白名单获取一个url", async () => {
                urls = await nexusWallet.popup.queryWhitelist()
                console.log(urls)
            })
            const whiteUrl = urls[1]
            let newPage;
            await step(`goto white web:${whiteUrl}`, async () => {
                newPage = await browser.newPage()
                await newPage.goto(whiteUrl)
            })
            let ret;
            await step("sen ckb.enable", async () => {
                ret = enableWallet(newPage)
                nexusWallet.connect()
                await ret
                console.log("ret:", await ret)
            })
            await step("repload web", async () => {
                await newPage.reload()
            })
            await step("sen ckb.enable again", async () => {
                ret = await enableWallet(newPage)
                console.log("ret:", ret)
            })
            await step("check enable success", async () => {
                expect(JSON.stringify(ret)).to.be.include("fullOwnership")
            })
            await step("close newPage", async () => {
                await newPage.close()
            })

        })
        it("删除白名单网页,删除成功", async () => {
            //todo 到时候适配新版本
            const willDelUrl = "https://google.com"
            await step(`使用nexus 添加url:${willDelUrl}白名单`, async () => {
                const urls = await nexusWallet.popup.queryWhitelist()
                if (!urls.some(url => url == willDelUrl)) {
                    //todo add url to whiteList
                    await addWhiteListByUrl(browser, nexusWallet, willDelUrl)
                }
            })
            await step("点击白名单页面", async () => {
                await page.bringToFront()
            })
            await step("查询该url", async () => {
                await inputSiteSearch(page, willDelUrl)
            })
            let beforeSiteList;
            let afterSiteList;
            await step("查询搜索的列表", async () => {
                beforeSiteList = await getSiteList(page)
            })
            await step(`查询结果包含${willDelUrl}`, async () => {
                expect(beforeSiteList[0]).to.be.include(willDelUrl)
            })
            await step("删除该url", async () => {
                await clickSiteRemoveByIdx(page, 0)
            })
            await step("再次查询搜索的列表", async () => {
                afterSiteList = await getSiteList(page)
            })
            await step(`查询结果为空`, async () => {
                expect(afterSiteList[0]).to.be.equal("")
            })

        })
        it("搜索白名单网页，能搜索到", async () => {
            let whiteUrls;
            await step("获取所有的白名单列表", async () => {
                whiteUrls = await nexusWallet.popup.queryWhitelist()
            })
            for (let i = 0; i < whiteUrls.length; i++) {
                let url = whiteUrls[i]
                await step("page bright", async () => {
                    await page.bringToFront()
                })
                await step(`search url:${url}`, async () => {
                    await inputSiteSearch(page, url)
                })
                await step(`check query response is eq:${url}`, async () => {
                    let urls = await getSiteList(page)
                    expect(urls).to.be.include(url)
                    expect(urls.length).to.be.equal(1)
                })
                await step(`clean search`, async () => {
                    await page.reload()
                })

            }
        })
        it("点击返回箭头，能够返回", async () => {
            await step("check url  contains:whitelist", async () => {
                console.log(page.url())
                expect(page.url()).to.be.include("whitelist")
            })
            await step("click back", async () => {
                await clickBack(page)
            })
            await step("check url not contains:whitelist", async () => {
                console.log(page.url())
                expect(page.url()).to.be.not.include("whitelist")
            })
        })
        it("在连接白名单网页的时候，删除该网页=>当前可用？返回页面，connected状态会更改吗？，当前的ckbprovider是否可用,下次连接需要点connect", async () => {
            const url = NEXUS_WEB_URL
            let newPage;
            await step("goto new web:", async () => {
                newPage = await browser.newPage()
                await newPage.goto(url)
            })
            await step("link web", async () => {
                const enable = enableWallet(newPage)
                nexusWallet.connect()
                await enable
            })

            await step("check connectStatus status is  connected ", async () => {
                expect(await nexusWallet.popup.queryConnected()).to.be.equal(true)
            })
            await step("remove web in whitelist", async () => {
                await nexusWallet.popup.removeWhitelistBySearch(url)
            })
            await step("check connectStatus status is not connected ", async () => {
                expect(await nexusWallet.popup.queryConnected()).to.be.equal(false)
            })
            await step("check network is enabled", async () => {
                //todo
                await getWalletIsEnable(newPage)
            })
        })
    });
    describe('network', function () {
        beforeEach(async () => {
            await step("click network", async () => {
                await clickNetwork(page)
            })
        })
        it("点击返回按钮 => 返回成功", async () => {
            await step("page url contains network", async () => {
                expect(page.url()).to.be.include("network")
            })
            await step("click back", async () => {
                await clickBack(page)
            })
            await step("page url not contains network", async () => {
                expect(page.url()).to.be.not.include("network")
            })

        })
        describe('添加有效的network', function () {
            let testCases: AddNetworkOpt[] = [
                {
                    name: "nework为中文特殊符号",// network为中文
                    url: "https://testnet.ckb.dev/"  // http
                },
                {
                    name: "nework为🧧中文特殊符号",// network为中文
                    url: "https://testnet.ckb.dev/"  // http
                },
                {
                    name: "1234", //数字
                    url: "https://testnet.ckb.dev/",
                },
                {
                    name: "longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong",
                    url: "https://testnet.ckb.dev/"
                }
            ]
            for (let i = 0; i < testCases.length; i++) {
                let testCase = testCases[i]
                it(`${JSON.stringify(testCases)}`, async () => {
                    await step("click addNetwork", async () => {
                        await clickAddNetwork(page)
                    })
                    await step(`input name :${testCase.name}`, async () => {
                        await inputName(page, testCase.name)
                    })
                    await step(`input url :${testCase.url}`, async () => {
                        await inputName(page, testCase.url)
                    })
                    await step(`check name:${testCase.name} in network lists`, async () => {
                        //todo 添加断言
                        const networkList = await nexusWallet.popup.queryNetworkList()
                        console.log("networkList:", networkList)
                    })
                })

            }
        });
        it("添加已经存在的network名字的网络", async () => {
            //todo
            let queryNetworkList
            await step("query network list", async () => {
                queryNetworkList = await nexusWallet.popup.queryNetworkList()
            })
            let addNetworkName = queryNetworkList[0]
            await step(`add network use  Name:${addNetworkName} that is exist`, async () => {
                await nexusWallet.popup.addNetwork({
                    name: addNetworkName,
                    url: "https://testnet.ckb.dev/"
                })
            })
        })
        it("添加不是ckb url的network", async () => {
            let addOpt = {
                name: "test",
                url: "https://www.baidu.com"
            }
            await step("add network", async () => {
                await nexusWallet.popup.addNetwork(addOpt)
            })
            await step("查询添加是否成功", async () => {
                //todo check 添加是否需要失败
                const list = await nexusWallet.popup.queryNetworkList()
                expect(list).to.be.equal(addOpt.name)
            })
        })
        it("添加http 的ckb network", async () => {
            let addOpt = {
                name: "test1",
                url: "http://info.cern.ch/"
            }
            await step("add network", async () => {
                await nexusWallet.popup.addNetwork(addOpt)
            })
            await step("查询添加是否成功", async () => {
                //todo check 添加是否需要失败
                const list = await nexusWallet.popup.queryNetworkList()
                expect(list).to.be.equal(addOpt.name)
            })
        })
        it("添加localhost的network", async () => {
            let addOpt = {
                name: "test1",
                url: "http://localhost:3000"
            }
            await step("add network", async () => {
                await nexusWallet.popup.addNetwork(addOpt)
            })
            await step("查询添加是否成功", async () => {
                //todo check 添加是否需要失败
                const list = await nexusWallet.popup.queryNetworkList()
                expect(list).to.be.equal(addOpt.name)
            })
        })
        it("添加一个不可用的network", async () => {
            let addOpt = {
                name: "test1",
                url: "http://localhost:4000"
            }
            await step("add network", async () => {
                await nexusWallet.popup.addNetwork(addOpt)
            })
            await step("查询添加是否成功", async () => {
                //todo check 添加是否需要失败
                const list = await nexusWallet.popup.queryNetworkList()
                expect(list).to.be.equal(addOpt.name)
            })
        })
        it("切换network 同一网络", async () => {
            let newPage;
            let addTestNetOpt = {
                name: "testCkbNet",
                url: "https://testnet.ckb.dev/"
            }
            await step("add test net", async () => {
                await nexusWallet.popup.addNetwork(addTestNetOpt)
            })
            await step(`goto nexus web:${NEXUS_WEB_URL}`, async () => {
                newPage = await browser.newPage()
                newPage.goto(NEXUS_WEB_URL)
            })
            await step("click connectButton", async () => {
                await newPage.click("#connectButton")
            })
            await step("connected web", async () => {
                await nexusWallet.connect()
            })
            await step("click network", async () => {
                await newPage.click("#getNetworkName")
            })
            let beforeNetworkResponse;
            await step("get network response", async () => {
                beforeNetworkResponse = await newPage.locator("#networkNameResponse").innerText()
            })
            await step(`change network:${addTestNetOpt.name}`, async () => {
                await nexusWallet.popup.changeNetworkByName(addTestNetOpt.name)

            })
            await step(`click network`, async () => {
                await newPage.click("#getNetworkName")
            })
            let afterChangeNetworkResponse
            await step("get network response", async () => {
                afterChangeNetworkResponse = await newPage.locator("#networkNameResponse").innerText()
            })
            await step("eq", async () => {
                expect(beforeNetworkResponse).to.be.equal(afterChangeNetworkResponse)
            })
        })
        it("切换到不同网络", async () => {
            //todo
            let newPage;
            await step(`change network:ckb test `, async () => {
                // await nexusWallet.popup.changeNetworkByName(addTestNetOpt.name)
                await nexusWallet.popup.changeNetworkByName("CKB Testnet")

            })
            await step(`goto nexus web:${NEXUS_WEB_URL}`, async () => {
                newPage = await browser.newPage()
                newPage.goto(NEXUS_WEB_URL)
            })
            await step("click connectButton", async () => {
                await newPage.click("#connectButton")
            })
            await step("connected web", async () => {
                await nexusWallet.connect()
            })
            await step("click network", async () => {
                await newPage.click("#getNetworkName")
            })
            let beforeNetworkResponse;
            await step("get network response", async () => {
                beforeNetworkResponse = await newPage.locator("#networkNameResponse").innerText()
            })
            await step(`change network:Ckb `, async () => {
                // await nexusWallet.popup.changeNetworkByName(addTestNetOpt.name)
                await nexusWallet.popup.changeNetworkByName("CKB")

            })
            await step(`click network`, async () => {
                await newPage.click("#getNetworkName")
            })
            let afterChangeNetworkResponse
            await step("get network response", async () => {
                afterChangeNetworkResponse = await newPage.locator("#networkNameResponse").innerText()
            })
            await step("not eq ", async () => {
                expect(beforeNetworkResponse).to.be.not.equal(afterChangeNetworkResponse)
            })
        })
        it.skip("切换到坏掉的网络", async () => {
            //todo
            await step("添加一条坏掉的网络", async () => {

            })

        })
        it.skip("删除当前没有连接的network")
        it.skip("删除当前正在连接的network")

        it.skip("处于连接状态,将network全部删除", async () => {
            //todo 目前network 没有删除功能
        })
    });

    afterEach(async () => {
        await page.close()
        await failedTestScreenshot(this, browser)
    })
    after(async () => {
        await browser.close();
    })
});

async function addWhiteListByUrl(browserContext: BrowserContext, nexus: NexusWallet, url: string) {
    const page = await browserContext.newPage()
    await page.goto(url)
    const enable = enableWallet(page)
    nexus.connect()
    await enable
    await page.close()
}
