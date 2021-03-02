//adter each test

afterEach(() => console.log("After each test"));
afterAll(() => console.log("After all test"));

//before each test

beforeEach(() => console.log("Before each test"));
beforeAll(() => console.log("Before all test"));

describe("Prepairing before execute", () => {
    test("Is true",() => {
        expect(true).toBeTruthy();
    });
});