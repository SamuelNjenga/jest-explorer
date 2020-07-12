require('./matchMedia.mock'); // Must be imported before the tested file
//import {myMethod} from './file-to-test';

//If some code uses a method which JSDOM (the DOM implementation used by Jest) hasn't implemented yet, testing it is not easily possible. This is e.g. the case with window.matchMedia(). Jest returns TypeError: window.matchMedia is not a function and doesn't properly execute the test.

//In this case, mocking matchMedia in the test file should solve the issue

describe('myMethod()', () => {
  // Test the method here...
  it("has the matchMedia inside the window object", () => {
     expect(window.matchMedia).toBeDefined();
     expect(window.matchMedia().addListener).toBeDefined();
  });
});