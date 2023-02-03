export const PopupPageLocatorInfo = {
    helloNexus: '#root > div > h1'
}

export const HomePageTestIdInfo = {

    /**
     * Home
     *
     * test-id: connectedStatus, connectStatusText, connectStatusIndicator, the DApp connect status of wallet. text is "connected"/"disconnected" plain text, indicator is the green/gray filled circle for indicating
     * test-id: whilteListSites, a button, the entry of Whitelist Sites
     * test-id: network, a button, the entry of network config
     */
    ConnectedStatus: 'connectedStatus',
    WhitelistSites: 'whiteListSites',
    Network: 'network'

}

export const WhitelistSitesPageTestIdInfo = {

    /**
     * Whitelist sites
     *
     * test-id: back, the back button on top left
     * test-id: websiteSearch, the search input of website
     * test-id: websiteList, the website list container item
     * test-id: website#n the website nth item
     * test-id: website.text#n, the website nth item URL text
     * text-id: website.delete#n, the website nth item's delete button
     */
    Back: 'back',
    WebsiteSearch: 'websiteSearch',
    WebsiteList: 'websiteList',
    getWebsiteByIdx: (num: number) => `website#${num}`,

}

export const NetworksPageTestIdInfo = {
    /**
     *
     * Networks:
     *
     * test-id: networkRadioGroup: the radio group of current network
     * test-id: networkRadio#n: the radio item of network, an extra test-network-id will be provided
     * test-id: networkRadio.name#n: the network name of radio
     * test-id: addNetwork: go to add network button
     *
     */
    NetworkRadioGroup: 'networkRadioGroup',
    getNetworkRadioByIdx: (num: number) => `networkRadio#${num}`,
    getNetworkRadioName: (num: number) => `networkRadio.name#${num}`,
    AddNetwork: 'addNetwork'
}


