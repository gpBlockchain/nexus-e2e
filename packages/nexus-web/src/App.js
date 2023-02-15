import {observer} from "mobx-react-lite";
import {useStore} from "./ckb";

// ethereum.on('chainChanged', handleNewNetwork);

function connectionSection(injectedCkbService) {
    // todo add monit network change
    // {
    //     window.ckb.on('networkChanged',(cb)=>{
    //         injectedCkbService.networkNameResponse = cb.network;
    //     });
    // }
    return (
        <section>
            <div className="row d-flex justify-content-center">
                <div className="col-xl-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                Basic Actions
                            </h4>
                            <p className="info-text alert  alert-secondary">
                                nexus version: <span id="ckbVersion">{injectedCkbService.ckbVersion}</span>
                            </p>
                            <button
                                className="btn btn-primary btn-lg btn-block mb-3"
                                id="connectButton"
                                onClick={injectedCkbService.enable}
                                disabled={injectedCkbService.enableStatus}
                            >{injectedCkbService.enableStatus ? "linked" : "connect"}
                            </button>

                            <button
                                className="btn btn-primary btn-lg btn-block mb-3"
                                id="getNetworkName"
                                onClick={injectedCkbService.getNetworkName}
                                disabled={!injectedCkbService.enableStatus}
                            >networkName
                            </button>
                            <p className="info-text alert alert-secondary">
                                networkNameResponse: <span
                                id="networkNameResponse">{injectedCkbService.networkNameResponse}</span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


function getLiveCell(ckbProvide, injectedCkbService,idPre) {

    {
        let rt = window.ckb.enable
        console.log("rt:",rt)
    }
        return (
            <div id={`${idPre}getLiveCell-form`}>
                <h4>
                    get Live Cell
                </h4>
                <input
                    className="form-control"
                    type="text"
                    placeholder="payload"
                    id={`${idPre}getLiveCellInput`}
                />
                <button
                    className="btn btn-primary btn-lg btn-block mb-3"
                    id="getLiveCellButton"
                    onClick={() => ckbProvide.getLiveCells(injectedCkbService.ckbProvider, document.getElementById("getLiveCellInput").value)}
                    disabled={!injectedCkbService.enableStatus}
                >
                    get Live Cell
                </button>
                <p className="info-text alert alert-secondary">
                    getLiveCellResult: <span id="getLiveCellResult">{ckbProvide.getLiveCellsResponse}</span>
                </p>
            </div>
        )

}

function getUsedLocks(ckbProvide, injectedCkbService) {
    return (
        <div id="getUsedLocks-form">
            <h4>get Used Locks</h4>
            <input
                className="form-control"
                type="text"
                placeholder="payload"
                id="getUsedLocksInput"
            />
            <button
                className="btn btn-primary btn-lg btn-block mb-3"
                id="getUsedLocksButton"
                onClick={() => ckbProvide.getUnusedLocks(injectedCkbService.ckbProvider, document.getElementById("getUsedLocksInput").value)}
                disabled={!injectedCkbService.enableStatus}
            >get Used Locks
            </button>
            <p className="info-text alert alert-secondary">
                getUsedLocksResult: <span
                id="getUsedLocksResult">{ckbProvide.getUsedLocksResponse}</span>
            </p>
        </div>
    )
}

function signTransaction(ckbProvide, injectedCkbService) {
    return (
        <div id="signTransaction-form">
            <h4>signTransaction</h4>
            <input
                className="form-control"
                type="text"
                placeholder="payload"
                id="signTransactionInput"
            />
            <button
                className="btn btn-primary btn-lg btn-block mb-3"
                id="signTransactionButton"
                onClick={() => ckbProvide.signTransaction(injectedCkbService.ckbProvider, document.getElementById("signTransactionInput").value)}
                disabled={!injectedCkbService.enableStatus}
            >sign Transaction
            </button>
            <p className="info-text alert alert-secondary">
                signTransactionResult: <span
                id="signTransactionResult">{ckbProvide.signTransactionResponse}</span>
            </p>
        </div>
    )
}

function signData(ckbProvide, injectedCkbService) {
    return (
        <div id="signData-form">
            <h4>signData</h4>
            <input
                className="form-control"
                type="text"
                placeholder="payload"
                id="signDataInput"
            />
            <button
                className="btn btn-primary btn-lg btn-block mb-3"
                id="signDataButton"
                onClick={() => ckbProvide.signData(injectedCkbService.ckbProvider, document.getElementById("signDataInput").value)}
                disabled={!injectedCkbService.enableStatus}
            >sign Data
            </button>
            <p className="info-text alert alert-secondary">
                signDataInputResult: <span
                id="signDataResult">{ckbProvide.signDataResponse}</span>
            </p>
        </div>
    )
}


function getUnusedLocks(ckbProvide, injectedCkbService) {
    return (
        <div id="getUnusedLocks-form">
            <h4>get Unused Locks</h4>
            <label htmlFor="getUnusedLocksInput">change:</label><br/>
            <input
                className="form-control"
                type="text"
                placeholder="true"
                id="getUnusedLocksInput"
            />

            <button
                className="btn btn-primary btn-lg btn-block mb-3"
                id="getUnusedLocksButton"
                onClick={() => ckbProvide.getUnusedLocks(injectedCkbService.ckbProvider, document.getElementById("getUnusedLocksInput").value)}
                disabled={!injectedCkbService.enableStatus}
            >get Unused Locks Button
            </button>
            <p className="info-text alert alert-secondary">
                getLiveCellsResponse: <span
                id="getLiveCellsResponse">{ckbProvide.getLiveCellsResponse}</span>
            </p>
        </div>

    )
}

function getFullOwnership(ckbProvide, injectedCkbService) {

    return (
        <div className="d-flex align-items-stretch">
            <div className="card full-width">
                <div className="card-body">
                    <h3>
                        Full Ownership
                    </h3>
                    <hr/>
                    {getLiveCell(injectedCkbService, ckbProvide,"full-ownership")}
                    <hr/>
                    {getUnusedLocks(injectedCkbService, ckbProvide)}
                    <hr/>
                    {signTransaction(injectedCkbService, ckbProvide)}
                    <hr/>
                    {signData(injectedCkbService, ckbProvide)}
                </div>
            </div>
        </div>

    )
}


function getRuleBasedOwnership(ckbProvide, injectedCkbService) {
    return (
        <div
            className=" col-lg d-flex align-items-stretch"
        >
            <div className="card full-width">
                <div className="card-body">
                    <h4 className="card-title">
                        Rule Based Ownership
                    </h4>
                    <hr/>
                    {getLiveCell(injectedCkbService, ckbProvide,"rule-based")}
                    <hr/>
                    {getUnusedLocks(injectedCkbService, ckbProvide)}
                    <hr/>
                    {signTransaction(injectedCkbService, ckbProvide)}
                    <hr/>
                    {signData(injectedCkbService, ckbProvide)}
                </div>
            </div>
        </div>

    )
}

function App() {
    const {ckbProvide, injectedCkbService} = useStore()


    return (
        <div className="App">
            <div>
                {connectionSection(injectedCkbService)}
            </div>
            <hr/>
            <div>
                <section>
                    <div className="row">
                        {getFullOwnership(ckbProvide, injectedCkbService)}
                        {getRuleBasedOwnership(ckbProvide, injectedCkbService)}
                    </div>
                </section>

            </div>

        </div>
    );
}

export default observer(App);
