//Jest executes all describe handlers in a test file before it executes any of the actual tests.
//Once the describe blocks are complete, by default Jest runs all the tests serially in the order they were encountered in the collection phase, waiting for each to finish and be tidied up before moving on
describe('outer', () => {
    console.log('describe outer-a');
  
    describe('describe inner 1', () => {
      console.log('describe inner 1');
      test('test 1', () => {
        console.log('test for describe inner 1');
        expect(true).toEqual(true);
      });
    });
  
    console.log('describe outer-b');
  
    test('test 1', () => {
      console.log('test for describe outer');
      expect(true).toEqual(true);
    });
  
    describe('describe inner 2', () => {
      console.log('describe inner 2');
      test('test for describe inner 2', () => {
        console.log('test for describe inner 2');
        expect(false).toEqual(false);
      });
    });
  
    console.log('describe outer-c');
  });
  
  // describe outer-a
  // describe inner 1
  // describe outer-b
  // describe inner 2
  // describe outer-c
  // test for describe inner 1
  // test for describe outer
  // test for describe inner 2