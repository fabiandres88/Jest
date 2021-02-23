import { sum, mul, sub, div } from "../math.js";

describe("Testing index methods", () => {
    test("Testing sum", () => {
        expect(sum(5,60)).toBe(65);
    });
    test("Testing mul", () => {
        expect(mul(5,60)).toBe(300);
    });
    test("Testing sub", () => {
        expect(sub(60,5)).toBe(55);
    });
    test("Testing div", () => {
        expect(div(60,5)).toBe(12);
    });
})

