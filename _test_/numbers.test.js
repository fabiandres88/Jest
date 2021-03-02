import { add } from "../numbers.js";

describe("Match of numbers", () => {
    test("Greater than", () => {
        expect(add(5, 5)).toBeGreaterThan(9);
    });
    test("Greater than or equal", () => {
        expect(add(5, 5)).toBeGreaterThanOrEqual(10);
    });
    test("Less than", () => {
        expect(add(5, 5)).toBeLessThan(11);
    });
    test("Less than", () => {
        expect(add(5, 5)).toBeLessThanOrEqual(11);
    });
    test("Float numbers to be close", () => {
        expect(add(0.5, 0.5)).toBeCloseTo(1);
    });
});