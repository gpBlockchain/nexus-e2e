import {makeAutoObservable} from "mobx";


class CkbProvide {
    getLiveCellsResponse = ""
    enableStatus = false

    constructor() {
        makeAutoObservable(this)
    }

    enable = async () => {
        await window.ckb.enable()
        this.enableStatus = true
    }

    getLiveCells = async () => {
        this.getLiveCellsResponse = await window.ckb.getLiveCells()
        this.getLiveCellsResponse = "[" + this.getLiveCellsResponse + "]"
    }

}

export {CkbProvide}

