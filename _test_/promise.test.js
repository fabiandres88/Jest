import { getDataFromApi } from "../promise";

describe("Testing promises", () => {
    test("Doing an API request", (done) => {
        const api = 'https://rickandmortyapi.com/api/character/';
        getDataFromApi(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0);
            done();
        })
    });
});