let ckbProvider;

const currentUrl = new URL(window.location.href);
const forwarderOrigin =
    currentUrl.hostname === 'localhost' ? 'http://localhost:9010' : undefined;
const urlSearchParams = new URLSearchParams(window.location.search);

// Basic Actions Section
const connectButton = document.getElementById('connectButton');
const getLiveCellButton = document.getElementById('getLiveCellButton');
const getLiveCellResults = document.getElementById('getLiveCellResult');

let mockConnNexus = false;

const initialize = async () => {

    try {
        ckbProvider = window.ckb;
    } catch (error) {
        console.error(error);
    }

    const accountButton = [
        getLiveCellButton
    ]
    updateButtons()

}
window.addEventListener('load', initialize);

function updateButtons() {
    console.log("updateButtons")
    if (!checkNexusInstalled()) {
        //
        connectButton.innerText = 'please  install nexus!';
        connectButton.disabled = true;
        return
    }

    if (!checkNexusConnected()) {
        // 没连接
        connectButton.innerText = 'link nexus!';
        connectButton.onclick = onClickConnect
        connectButton.disabled = false;

        getLiveCellButton.disabled = true;
        return;
    }

    // connect 不能连接
    connectButton.innerText = 'connected';
    connectButton.onclick = onClickConnect
    connectButton.disabled = true;

    // getCell 可以用
    getLiveCellButton.onclick = onGetLiveCell;
    getLiveCellButton.disabled = false;
}

async function onGetLiveCell() {
    try {
        const rt = await ckb.getLiveCells()
        getLiveCellResults.innerHTML = `[${rt}]`
    } catch (err) {
        console.error(error);
        getLiveCellResults.innerHTML = `Error: ${err.message}`;
    }
}

async function onClickConnect() {
    try {
        await ckb.enable()
        mockConnNexus = true;
        console.log("mockConnNexus:", mockConnNexus)
        updateButtons()
    } catch (error) {
        console.error(error);
    }
}

function checkNexusInstalled() {
    // todo check nexus install ?
    return true;
}

function checkNexusConnected() {
    // todo check nexus Connected

    return mockConnNexus;
}
