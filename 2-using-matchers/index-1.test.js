//The matcher toBe uses Object.is to test exact equality
test('fifteen plus twenty five is forty', () => {
    expect(15 + 25).toBe(40);
});

//If you want to check the value of an object, use toEqual instead
test('object assignment', () => {
    const data = {
        one: 1
    };
    data['two'] = 2;
    expect(data).toEqual({
        one: 1,
        two: 2
    });
});

//You can also test for the opposite of a toBe() matcher
test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

test("Adding 5 plus 11 is not 10", () => {
    expect(5 + 11).not.toBe(10);
})

