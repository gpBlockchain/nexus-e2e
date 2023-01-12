import {launch, Page} from "puppeteer";


export type NexusLaunchOptions = {
    nexusPath: string
    puppeteerOptions?: Omit<Parameters<typeof launch>[0], "headless">;
}

export type NexusSetUpOptions = {
    mock: boolean
}

export type PopupPageHelper = {
    getNewPage: () => Promise<Page>
    getHelloNexus: (page: Page) => Promise<string>;
}
export type NexusWallet = {
    popup: PopupPageHelper;
    getNotificationPage: () => Promise<Page>
    close: () => void
}
