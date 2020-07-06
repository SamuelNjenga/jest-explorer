class A {}
//Use .toBeInstanceOf(Class) to check that an object is an instance of a class. 
test("instance of", () => {
    expect(new A()).toBeInstanceOf(A);
    expect(() => {}).toBeInstanceOf(Function);
    //  expect(new A()).toBeInstanceOf(Function); // throws
})

function bloop() {
    return null;
}
//.toBeNull() is the same as .toBe(null) but the error messages are a bit nicer
test('bloop returns null', () => {
    expect(bloop()).toBeNull();
});
//Use .toBeNaN when checking a value is NaN.
test('passes when value is NaN', () => {
    expect(NaN).toBeNaN();
    expect(1).not.toBeNaN();
});

const items = ['gem','lime']
//Use .toContain when you want to check that an item is in an array.
test('the flavor list contains lime', () => {
    expect(items).toContain('lime');
});

const can1 = {
    flavor: 'grapefruit',
    ounces: 12,
  };
  const can2 = {
    flavor: 'grapefruit',
    ounces: 12,
  };
  
  describe('the La Croix cans on my desk', () => {
    test('have all the same properties', () => {
      expect(can1).toEqual(can2);
    });
    test('are not the exact same can', () => {
      expect(can1).not.toBe(can2);
    });
  });

  //Use .toMatch to check that a string matches a regular expression.
  describe('grapefruits are healthy', () => {
    test('grapefruits are a fruit', () => {
      expect('grapefruits').toMatch('fruit');
    });
  });