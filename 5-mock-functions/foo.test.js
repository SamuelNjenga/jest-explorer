//The mockImplementation method is useful when you need to define the default
//implementation of a mock function that is created from another module

//test.js
jest.mock("./foo"); //this happens automatically with automocking
const foo = require("./foo");

test("foo", () => {
    //foo is a mock function
    foo.mockImplementation(() => 1001);
    expect(foo()).toBe(1001);
})