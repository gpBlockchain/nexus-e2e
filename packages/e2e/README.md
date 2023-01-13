# e2e

E2E testing for dApps using Puppeteer + Nexus


## Usage
open `nexus` extension page, get `hello nexus` message
```javascript
 const nexusExtensionPath = "./build"
 const browser = await launchWithNexus(
            {nexusPath: nexusExtensionPath}
        )
const nexusWallet = await setUpNexus(browser, {mock: true})
const newPage = await nexusWallet.popup.getNewPage();
let res1 = await nexusWallet.popup.getHelloNexus(newPage);
expect(res1).to.be.include("Hello Nexus")
```
nexus methods
```javascript

export type NexusWallet = {
    popup: PopupPageHelper;
    getNotificationPage: () => Promise<Page>
    close: () => void
}
```


## test

run test after [start e2e-web](../e2e-web/README.md#start-e2e)
```shell
npm i 
npm run test 
```


