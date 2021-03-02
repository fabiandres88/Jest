import { getCharacter } from "../snapshot";
import rick from "../rick.json";

describe("is time to the snapshots", () => {
    test("Snaphots", () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    });
    test("The snapshot always will fail", () => {
        const user = {
            createdAt: new Date(),
            id: Math.floor(Math.random() * 20),
        }
        expect(user).toMatchSnapshot();
    });

    test("The snapshot has an exception", () => {
        const user = {
            updatedAt: new Date(),
            createdAt: "2021-03-02T16:39:11.339Z",
            id: 1,
            name: "Carolina Jaimes"
        }
        expect(user).toMatchSnapshot({
            updatedAt: expect.any(Date)
        });
    });
});

//jest -u to update an snapshot