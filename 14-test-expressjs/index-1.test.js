const request = require("supertest");
const app = require("./app");
//Jest test will end when it hits the last line of the test function, so you need to use a done() to make it right
describe("Test the root path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});