describe("Common matchers", () => {
    const user = {
        name: "Juancho",
        lastname: "Carrancho"
    };
    const user2 = {
        name: "Pancho",
        lastname: "Sancho"
    };
    const user3 = {
        name: "Juancho",
        lastname: "Carrancho"
    };
    //Equal objects
    test("Element equality", () => {
        expect(user).toEqual(user3);
    });
    //Not equal objects
    test("Element equality", () => {
        expect(user).not.toEqual(user2);
    });
});