import {makeAutoObservable} from "mobx";


class CkbProviderService {
    getLiveCellsResponse
    getUnusedLocksResponse
    getUsedLocksResponse
    signDataResponse

    constructor() {
        makeAutoObservable(this)
    }

    enable = async () => {
        this.enableStatus = true
    }

    async getLiveCells(ckb,payload)  {
        console.log('getLiveCells:',payload)
        this.getLiveCellsResponse = await ckb.getLiveCells(payload)
        // this.getLiveCellsResponse = "[" + this.getLiveCellsResponse + "]"
    }

    async getUnusedLocks(ckb,change){
        this.getUnusedLocksResponse = await ckb.getUnusedLocks({change:change})
    }

    async getUsedLocks(ckb,cursor){
        this.getUsedLocksResponse = await ckb.getUsedLocks({cursor:cursor})
    }

    async signTransaction(ckb,txStr){
        this.signTransactionResponse = await ckb.signTransaction(
            JSON.parse(txStr)
        )
    }

    async signData(ckb,payload){
        this.signDataResponse = await ckb.signData(payload)
    }


    //   getUsedLocks(payload?: { cursor?: string }): Promise<Paginate<Script>>;
    //   getLiveCells(payload?: { cursor?: string }): Promise<Paginate<Cell>>;
    //   signTransaction(payload: { tx: Transaction }): Promise<GroupedSignature>;
    //
    //   /**
    //    * sign custom message
    //    */
    //   signData(payload: SignDataPayload): Promise<Signature>;




}

export {CkbProviderService}


// export interface Keyring {
//     getUnusedLocks(options?: GetUnusedLocksOptions): Promise<Script[]>;
//     getUsedLocks(payload?: { cursor?: string }): Promise<Paginate<Script>>;
//     getLiveCells(payload?: { cursor?: string }): Promise<Paginate<Cell>>;
//     signTransaction(payload: { tx: Transaction }): Promise<GroupedSignature>;
//
//     /**
//      * sign custom message
//      */
//     signData(payload: SignDataPayload): Promise<Signature>;
// }
