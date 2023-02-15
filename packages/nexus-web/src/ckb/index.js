
import React from 'react';
import {CkbProviderService} from "./ckbProviderService";
import {InjectedCkbService} from "./injectedCkbService";


class RootStore {
    constructor() {
        this.ckbProvide = new CkbProviderService()
        this.ckbProvide = new CkbProviderService()
        this.injectedCkbService = new InjectedCkbService();
    }
}

const rootStore = new RootStore()

const context = React.createContext(rootStore)

export const useStore = ()=>React.useContext(context)
