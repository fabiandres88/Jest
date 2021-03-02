describe("test string", () => {
    const text = "A beautiful text";
    test("It must contain text below", () =>{
        expect(text).toMatch(/beautiful/);
    });
    test("It does not contain text below", () =>{
        expect(text).not.toMatch(/ugly/);
    });
    test("Test text length", () =>{
        expect(text).toHaveLength(16);
    });
});