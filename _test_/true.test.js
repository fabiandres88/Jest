import { isNull, isTrue } from "../true.js";
import { isFalse, isUndefined } from "../true.js";

describe("Test null results", () => {
    test("Null", () => {
        expect(isNull()).toBeNull();
    });
});
describe("Test true results", () => {
    test("True", () => {
        expect(isTrue()).toBeTruthy();
    });
});
describe("Test false results", () => {
    test("False", () => {
        expect(isFalse()).toBeFalsy();
    });
});
describe("Test undefined results", () => {
    test("Undefined", () => {
        expect(isUndefined()).toBeUndefined();
    });
});

describe("Test false results", () => {
    test("False", () => {
        expect(isFalse()).not.toBeTruthy();
    });
});