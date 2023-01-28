
import React from 'react';
import {CkbProvide} from "./ckbProvide";


class RootStore {
    constructor() {
        this.ckbProvide = new CkbProvide()
    }
}

const rootStore = new RootStore()

const context = React.createContext(rootStore)

export const useStore = ()=>React.useContext(context)
