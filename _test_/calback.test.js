import { callbackHell } from "../callback.js";

describe("Testing a calbback", () => {
    test("Callback", (done) => {
        function otherCallback(data) {
            expect(data).toBe("Hello javascripters");
            done();
        };
        callbackHell(otherCallback);
    })
});