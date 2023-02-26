const fullOwnership = "fullOwnership"
const ruleBasedOwnership = "ruleBasedOwnership"

ckbGetNetworkName = async (type) => {
    try {
        const ownership = await getOwnership(type)
        return await ownership.getNetworkName()
    } catch (e) {
        return e
    }

}

ownershipGetOffChainLocks = async (type, payload) => {
    try {
        const ownership = await getOwnership(type)
        return await ownership.getOffChainLocks(payload)
    } catch (e) {
        return e
    }
}
ownershipGetOnChainLocks = async (type, payload) => {
    try {

        const ownership = await getOwnership(type)
        return await ownership.getOnChainLocks(payload)
    } catch (e) {
        return e
    }
}

ownershipGetLiveCells = async (type, payload) => {
    try {
        const ownership = await getOwnership(type)
        return await ownership.getLiveCells(payload)
    } catch (e) {
        return e
    }
}
ownershipSignTransaction = async (type, tx) => {
    try {
        const ownership = await getOwnership(type)
        return await ownership.signTransaction(tx)
    } catch (e) {
        return e
    }
}

ownershipSignData = async (type, tx) => {
    try {
        const ownership = await getOwnership(type)
        return await ownership.signData(tx)
    } catch (e) {
        return e
    }
}
enableWallet = async () => {
    try {
        return await window.ckb.enable();
    } catch (e) {
        return e
    }
}

getWalletIsEnable = async () => {
    try {
        return await window.ckb.isEnabled();
    } catch (e) {
        return e
    }
}

getCkbVersion = () => {
    return window.ckb.version
}


getOwnership = async (type) => {
    const ckb = await enableWallet()
    if (type === "fullOwnership") {
        return ckb.fullOwnership
    }
    return ckb.ruleBasedOwnership
}
