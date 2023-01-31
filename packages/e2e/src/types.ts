import {launch, Page} from "puppeteer";



export type NexusLaunchOptions = {
    nexusPath: string
    puppeteerOptions?: Omit<Parameters<typeof launch>[0], "headless">;
}

export type NexusSetUpOptions = {
    mock: boolean
    passwd:string
    seed?:string
}

export type PopupPageHelper = {
    getNewPage: () => Promise<Page>
    getHelloNexus: (page: Page) => Promise<string>;
}

export type WalletManagerHelper = {
    getNewPage: () => Promise<Page>
    importWallet:(page:Page,mnemonic:string,password:string)=>void
    createANewWallet:(page:Page,password:string)=>Promise<string>
}
export type NexusWallet = {
    popup: PopupPageHelper;
    approve:()=>void;
    walletManager:WalletManagerHelper;
    getNotificationPage: () => Promise<Page>
    close: () => void
}
