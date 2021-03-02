import { getDataFromApi } from "../promise";

describe("Testing promises", () => {
    test("Doing an API request", (done) => {
        const api = 'https://rickandmortyapi.com/api/character/';
        getDataFromApi(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0);
            done();
        })
    });

    test("Resolve hello", () => {
        return expect(Promise.resolve('Hello')).resolves.toBe('Hello');
    });

    test("Resolve hello", () => {
        return expect(Promise.reject('Error')).rejects.toBe('Error');
    });
});