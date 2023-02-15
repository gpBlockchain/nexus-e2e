import {BrowserContext, Page} from "playwright";
import {launchWithNexus} from "../../src/setup/launch";
import {getExtensionId} from "../../src/setup/setup";
import {getNotificationPage} from "../../src/nexus";
import {NexusUrl} from "../../src/nexus/const";
import {NotificationPageTextInfo} from "../../src/nexus/page/notification-page";
import {failedTestScreenshot, step} from "../utils/util";


describe('nexus-web', function () {
    this.timeout(3000_000)
    let browser: BrowserContext;
    let extensionId;
    let page: Page;
    before(async () => {
        // allure.parameter("launchWithNexus", "parameterValue");
        await step("launchWithNexus", async () => {
            browser = await launchWithNexus(
                {
                    nexusPath: "./build",
                    playwrightOptions: {
                        slowMo: 150,
                        recordVideo: {
                            dir: 'videos/',
                            size: {width: 640, height: 480},
                        },
                        screen: {width: 640, height: 480}
                    }
                }
            )
        })

        await step("goto :http://localhost:3000/nexus-e2e", async () => {
            extensionId = await getExtensionId(browser)
            // page = await getExtensionPageByUrl(browser, extensionId, NexusUrl.walletManager + "#/create/seed")
            page = await browser.newPage();
            await page.goto("http://localhost:3000/nexus-e2e")
        })


    })
    it("connect", async () => {
        await step("click connectButton", async () => {
            await page.click("#connectButton")
        })
        await step("click nexus wallet approve", async () => {
                const notificationPage = await getNotificationPage(browser, extensionId, NexusUrl.notification)
                await notificationPage.getByText(NotificationPageTextInfo.Approve).click()
            }
        )
    })


    afterEach(async () => {
        await failedTestScreenshot(this, browser)
    })

    after(async () => {
        await browser.close()
    })
})

