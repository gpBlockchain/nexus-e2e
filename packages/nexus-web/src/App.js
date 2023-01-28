import {observer} from "mobx-react-lite";
import {useStore} from "./ckb";

function App() {
    const {ckbProvide} = useStore()
    return (
        <div className="App">
            <div>
                <section>
                    <div className="row d-flex justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">
                                        Basic Actions
                                    </h4>
                                    <button
                                        className="btn btn-primary btn-lg btn-block mb-3"
                                        id="connectButton"
                                        onClick={ckbProvide.enable}
                                        disabled={ckbProvide.enableStatus}
                                    >{ckbProvide.enableStatus ? "linked" : "connect"}
                                    </button>

                                    <button
                                        className="btn btn-primary btn-lg btn-block mb-3"
                                        id="getLiveCellButton"
                                        onClick={ckbProvide.getLiveCells}
                                        disabled={!ckbProvide.enableStatus}
                                    >getLiveCell
                                    </button>
                                    <p className="info-text alert alert-secondary">
                                        getLiveCellResult: <span
                                        id="getLiveCellResult">{ckbProvide.getLiveCellsResponse}</span>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default observer(App);
