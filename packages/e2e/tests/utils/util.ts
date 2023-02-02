import {expect} from "chai";

export async function expectedThrow(promise: Promise<any>, msg="") {

    try {
        await promise
    } catch (err) {
        expect(err.toString()).to.be.include(msg, err.toString())
        return true
    }

    expect.fail(` not expected happen, expected err:${msg}`)
}

