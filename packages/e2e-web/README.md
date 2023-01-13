# e2e-web

This is a simple test dapp for use in Nexus e2e tests and manual QA.
inspired by [test-dapp](https://github.com/MetaMask/test-dapp)


## start e2e
```shell
npm i
npm run start 
```
- if run `npm run start` get failed message that contains this
```shell
node:internal/crypto/hash:71
  this[kHandle] = new _Hash(algorithm, xofLen);
                  ^

Error: error:0308010C:digital envelope routines::unsupported

```
please set `NODE_OPTIONS`  before start e2e-web
```shell
```shell
 export NODE_OPTIONS=--openssl-legacy-provider
```
