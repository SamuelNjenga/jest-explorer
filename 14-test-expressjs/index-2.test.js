const request = require("supertest");
const app = require("./app");
//Promise way -> That return is crucial, otherwise your tests will get stuck.
//and there is No need to pass done to your test.
describe("Test the root path", () => {
    test("It should response the GET method", () => {
        return request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(200);
            });
    });

    //Notice that without that return, the test will always pass
    describe("Test the root path instance two", () => {
        test("It should response the GET method", () => {
            return request(app)
                .get("/")
                .expect(200);
        });
    });
});