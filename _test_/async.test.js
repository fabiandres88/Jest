import { TestScheduler } from "jest";
import { getDataFromApi } from "../promise";

describe("Testing Async/Await", () => {
    test("Doing an API request", async () => {
        const api = 'https://rickandmortyapi.com/api/character/';
        const rick = 'https://rickandmortyapi.com/api/character/1';
        await getDataFromApi(api)
            .then((data) => {
                expect(data.results.length).toBeGreaterThan(0);
            })
            .catch((e) => {
                console.error(e);
            });
    });

    test("Doing an API request", async () => {
        const rick = 'https://rickandmortyapi.com/api/character/1';
        await getDataFromApi(rick)
            .then((data) => {
                expect(data.name).toEqual("Rick Sanchez");
                expect(data.status).toEqual("Alive");
                expect(data.species).toEqual("Human");
            })
            .catch((e) => {
                console.error(e);
            });
    });
});