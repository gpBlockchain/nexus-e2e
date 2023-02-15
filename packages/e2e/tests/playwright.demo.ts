import {chromium} from "playwright-core";

describe('playwright', function () {

    this.timeout(100000)
    it('playwright demo', async () =>{

        // lanch
        const pathToExtension = require('path').join(__dirname, 'my-extension');

        const userDataDir = '/tmp/test-user-data-dir';
        const browserContext = await chromium.launchPersistentContext(userDataDir,{
            headless: false,
            args: [
                `--disable-extensions-except=${pathToExtension}`,
                `--load-extension=${pathToExtension}`
            ]
        });
        let [backgroundPage] = browserContext.backgroundPages();
        if (!backgroundPage) backgroundPage = await browserContext.waitForEvent('backgroundpage');

        // new page
    });

});
