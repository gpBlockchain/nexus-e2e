import {makeAutoObservable} from "mobx";

export class InjectedCkbService {

    enableStatus = false
    ckbProvider;
    walletVersion;
    networkNameResponse;
    constructor() {
        makeAutoObservable(this)
    }

    enable = async () => {
        this.ckbProvider = await window.ckb.enable()
        this.enableStatus = await window.ckb.isEnabled()
    }

    isEnable = async () => {
        this.enableStatus = await window.ckb.isEnabled()
    }


    get ckbVersion() {
        return window.ckb.version;
    }
    getNetworkName = async (ckb)=>{
        this.networkNameResponse = await ckb.getNetworkName()
    }

}
