import { getDataFromApi } from "../promise";

describe("Testing Async/Await", () => {
    test("Doing an API request", async () => {
        const api = 'https://rickandmortyapi.com/api/character/';
        await getDataFromApi(api)
            .then((data) => {
                expect(data.results.length).toBeGreaterThan(0);
            });
    });

    test("Doing an API request", async () => {
        const rick = 'https://rickandmortyapi.com/api/character/1';
        await getDataFromApi(rick)
            .then((data) => {
                expect(data.name).toEqual("Rick Sanchez");
                expect(data.status).toEqual("Alive");
                expect(data.species).toEqual("Human");
            });
    });

    test("Doing an API request with error", async () => {        
        try {
            const apiError = 'https://httpstat.us/404';
            await getDataFromApi(apiError);    
        } catch (error) {
            expect(error).toEqual(Error('Request failed with status code 404'));            
        };       
    });

    test("Resolve an hello", async () => {
        await expect(Promise.resolve('Hello')).resolves.toBe('Hello');
        await expect(Promise.reject('>>>>>Danger')).rejects.toBe('>>>>>Danger');
    });
}); 