import { arrayFruits, arrayColors} from "../arrays.js";

describe("Contains an element", () => {
    test("It contains a banana?",() => {
        expect(arrayFruits()).toContain("banana");
    });
    test("It does not contain a melon?",() => {
        expect(arrayFruits()).not.toContain("melon");
    });
    test("Test size of an array",() => {
        expect(arrayColors()).toContain("blue");
    });
});