import {expect} from "chai";
import {StepInterface} from "allure-js-commons";
import {allure} from "allure-mocha/runtime";
import {BrowserContext} from "playwright";
import {Suite} from "mocha";

export async function expectedThrow(promise: Promise<any>, msg = "") {

    try {
        await promise
    } catch (err) {
        expect(err.toString()).to.be.include(msg, err.toString())
        return true
    }

    expect.fail(` not expected happen, expected err:${msg}`)
}

export async function step(name: string, body: (step: StepInterface) => any): Promise<any> {
    try {
        return await allure.step(name, body)
    } catch (TypeError) {
        if (TypeError.toString().includes("Cannot read properties of undefined (reading 'step')")) {
            return await wrap(body)()
        }
        throw TypeError
    }
}

export async function failedTestScreenshot(suit: Suite, browser: BrowserContext) {
    if (suit.ctx.currentTest.state == "failed") {
        for (let i = 0; i < browser.pages().length; i++) {
            const currentPage = browser.pages()[i];
            const ret = await currentPage.screenshot({
                fullPage: true,
                path: `allure-results/${suit.ctx.currentTest.title}-${suit.ctx.currentTest.state}-${i}.png`
            })
            attachJpeg(`allure-results/${suit.ctx.currentTest.title}-${suit.ctx.currentTest.state}-${i}`, ret)
        }
    }
}

export function attachJpeg(name: string, content: Buffer | string) {
    try {
        allure.attachment(name, content, "image/jpeg")
    } catch (TypeError) {
        if (TypeError.toString().includes("Cannot read properties of undefined (reading 'attachment')")) {
            return
        }
        throw TypeError
    }
}
export function attachMessage(name:string,content:string){
    try {
        allure.attachment(name, content, "text/plain")
    } catch (TypeError) {
        if (TypeError.toString().includes("Cannot read properties of undefined (reading 'attachment')")) {
            return
        }
        throw TypeError
    }
}


function wrap<T>(fun: (...args: any[]) => T): any {
    return (...args: any[]): T => {
        let result;
        try {
            result = fun(args);
        } catch (error) {
            throw error;
        }
        if (isPromise(result)) {
            const promise = result as any as Promise<any>;
            return promise
                .then((res) => {
                    return res;
                })
                .catch((error) => {
                    if (error) {
                    }
                    throw error;
                }) as any as T;
        } else {
            return result;
        }
    };
}

const isPromise = (obj: any): boolean =>
    !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";

