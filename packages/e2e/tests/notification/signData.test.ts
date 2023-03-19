import {BrowserContext, Page} from "playwright";
import {NexusWallet} from "../../src/types";
import {failedTestScreenshot, step} from "../utils/util";
import {launchWithNexus} from "../../src/setup/launch";
import {setUpNexus} from "../../src/setup/setup";
import {NEXUS_WEB_URL, PASSWd, UserName} from "../config/config";
import {expect} from "chai";
import {enableWallet, ownershipSignData} from "../../src/nexus/servicer/provider";


describe('signData', function () {
    this.timeout(1000 * 600)
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
        browser.setDefaultTimeout(3000)
    })


    describe(`${NEXUS_WEB_URL}`, function () {
        beforeEach(async () => {
            await step(`goto:${NEXUS_WEB_URL}`, async () => {
                page = await browser.newPage()
                await page.goto(NEXUS_WEB_URL)
            })
            await step("click connect", async () => {
                await page.locator("#connectButton").click()
            })
            await step("approve connected", async () => {
                await nexusWallet.connect()
            })
        })

        it('sign的数据能够展示在窗口上 ', async () => {
            let signData = "0x1234"
            await step("input Data", async () => {
                await page.locator("#fullOwnership-signDataInput").type(`{"data":"${signData}"}`)
            })
            await step("click signData", async () => {
                await page.locator("#fullOwnership-signDataButton").click()
            })
            let notificationPage: Page;
            await step("check signMsg in wallet", async () => {
                notificationPage = await nexusWallet.getNotificationPage()

            })
            await step("can found url in wallet", async () => {
                const url = page.url()
                const url1 = await notificationPage.getByText(url).allInnerTexts()
                expect(url1.toString()).to.be.include(url)
            })

            await step("can found sign data  in wallet", async () => {
                const ret = await notificationPage.getByText(signData).allInnerTexts()
                expect(ret.toString()).to.be.include(signData)
            })
        });
        it.skip("sign的数据不符合规范:hex :不符合16进制", async () => {
            let signData = "0x12314"
            await step("input Data", async () => {
                await page.locator("#fullOwnership-signDataInput").type(`{"data":"${signData}"}`)
            })
            await step("click signData", async () => {
                await page.locator("#fullOwnership-signDataButton").click()
            })
            await step("add failed expected", async () => {
                //todo

            })
        })
        it.skip("sign的数据不符合规范", async () => {
            let signData = `{"data1":"0x1212"}`
            await step("input Data", async () => {
                await page.locator("#fullOwnership-signDataInput").type(signData)
            })
            await step("click signData", async () => {
                await page.locator("#fullOwnership-signDataButton").click()
            })
            await step("add failed expected", async () => {
                //todo
            })
        })
        it.skip("sign的数据特别长,是否在框内", async () => {
            let signData = "0x123412341234123412341234123412341234121234123412341234123412341234123412341212341234123412341234123412341234123412123412341234123412341234123412341234121234123412341234123412341234123412341212341234123412341234123412341234123412123412341234123412341234123412341234121234123412341234123412341234123412341212341234123412341234123412341234123412123412341234123412341234123412341234121234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234123412341234"
            await step("input Data", async () => {
                await page.locator("#fullOwnership-signDataInput").type(`{"data":"${signData}"}`)
            })
            await step("click signData", async () => {
                await page.locator("#fullOwnership-signDataButton").click()
            })

            await step("check data is ok", async () => {
                //todo 目前不知道用什么方法确定数据在框内
            })
        })
    });

    describe('特别长的网站请求signData', function () {
        const LongWebUrl = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=solidity%20%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0&fenlei=256&oq=%25E6%259E%2584%25E9%2580%25A0%25E5%2587%25BD%25E6%2595%25B0&rsv_pq=877c3600001e7e6a&rsv_t=e905yx9Hy6r1P8rdJdLWiASTIuF8intqvST5U1ccv9GvnEwYzXcwakzWc0Q&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_btype=t&inputT=2509&rsv_sug3=32&rsv_sug1=16&rsv_sug7=100&rsv_sug2=0&rsv_sug4=2879"
        beforeEach(async () => {
            await step(`goto:${LongWebUrl}`, async () => {
                page = await browser.newPage()
                await page.goto(LongWebUrl)
            })
            await step("connected :baidu", async () => {
                let enable = enableWallet(page)
                nexusWallet.connect()
                await enable
            })
        })

        it.skip('发送sendData请求, 检查网址url是否在框内', async () => {
            let signDataPayload = {"data": "0x1234"}
            let signResponse;
            let approve
            await step(`send signData(${JSON.stringify(signDataPayload)}) request`, async () => {
                // @ts-ignore
                signResponse = ownershipSignData(page, "fullOwnership", signDataPayload)
            })

            await step(`approve with passwd:${PASSWd}`, async () => {
                approve = nexusWallet.approve(PASSWd)
            })
            await step(`wait response `, async () => {
                signResponse = await signResponse
                await approve
            })
            await step(`check url in box`,async ()=>{
                //todo 目前不知道怎么检查文本是否在框内
            })
        });
    });
    afterEach(async () => {
        await failedTestScreenshot(this, browser)
        for (let i = 0; i < browser.pages().length; i++) {
            const page = browser.pages()[i]
            await page.close()

        }
    })

    after(async () => {
        await browser.close();
    })
});
