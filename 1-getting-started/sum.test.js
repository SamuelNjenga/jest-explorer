const sum = require('./sum')

//writing a test for a hypothetical function that adds two numbers
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
});

test('adds 101 + 99 to equal 200', () => {
    expect(sum(101, 99)).toBe(200)
});
