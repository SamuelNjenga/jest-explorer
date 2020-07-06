//Intuitive equality comparisons often fail, because arithmetic on decimal (base 10) values often have rounding errors in limited precision binary (base 2) representation
test('adding works sanely with decimals', () => {
    expect(0.2 + 0.1).toBe(0.3); // Fails!
});
//Use toBeCloseTo to compare floating point numbers for approximate equality
test('adding works sanely with decimals', () => {
    expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
});
//Use .toHaveLength to check that an object has a .length property and it is set to a certain numeric value.
//This is especially useful for checking arrays or strings size.
test("toHaveLength(number)", () => {
    expect([1, 2, 3]).toHaveLength(3);
    expect('abc').toHaveLength(3);
    expect('').not.toHaveLength(5);
})

const can = {
    name: 'pamplemousse',
    ounces: 12,
};
//.toBe(value) matcher calls Object.is to compare values, which is even better for testing than === strict equality operator
describe('the can', () => {
    test('has 12 ounces', () => {
        expect(can.ounces).toBe(12);
    });

    test('has a sophisticated name', () => {
        expect(can.name).toBe('pamplemousse');
    });
});